'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authClient } from '@/lib/auth/client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Spinner } from '@/components/ui/spinner';
import { AlertCircleIcon, CheckCircle2 } from 'lucide-react';

import { changePasswordSchema, type TChangePassword } from '@/types/change-password-schema';

export function ChangePasswordDialog({ children }: React.PropsWithChildren) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const form = useForm<TChangePassword>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    }
  });

  const onSubmit = async ({ currentPassword, newPassword }: TChangePassword) => {
    await authClient.changePassword({
      currentPassword,
      newPassword,
      revokeOtherSessions: true,
      fetchOptions: {
        onSuccess: () => {
          setIsSuccess(true);
          form.reset();
        },
        onError: async context => {
          const { response } = context;
          if (response.status === 429) {
            const retryAfter = response.headers.get('X-Retry-After');
            return form.setError('root', {
              message: `Rate limit exceeded. Retry after ${retryAfter} seconds.`
            });
          }
          form.setError('root', {
            message: 'Could not change your password. Please try again later.'
          });
        }
      }
    });
  };

  const handleOpenChange = (open: boolean) => {
    form.reset();
    setIsDialogOpen(open);
    setIsSuccess(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        {isSuccess ? (
          <>
            <DialogHeader className="items-center gap-1.5 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-6.5 text-primary" />
                <DialogTitle className="text-xl">Password Changed</DialogTitle>
              </div>
              <DialogDescription className="text-center text-base">
                Your password has been successfully updated.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button">Close</Button>
              </DialogClose>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader className="gap-1">
              <DialogTitle className="text-xl">Change Password</DialogTitle>
              <DialogDescription className="text-base">
                Enter your new password below.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your current password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your new password" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmNewPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm New Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Confirm your new password" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {form.formState.errors.root && (
                  <Alert variant="destructive">
                    <AlertCircleIcon className="relative top-2" />
                    <AlertTitle>Unexpected error occurred.</AlertTitle>
                    <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
                  </Alert>
                )}

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </DialogClose>

                  <Button disabled={form.formState.isSubmitting} type="submit">
                    {form.formState.isSubmitting ? (
                      <>
                        Changing...
                        <Spinner />
                      </>
                    ) : (
                      'Change Password'
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
