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
import { AlertCircleIcon } from 'lucide-react';

import { changeEmailSchema, type TChangeEmail } from '@/types/change-email-schema';

export function ChangeEmailDialog({ children }: React.PropsWithChildren) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isRetryAfter, setIsRetryAfter] = useState<boolean>(false);

  const form = useForm<TChangeEmail>({
    resolver: zodResolver(changeEmailSchema),
    defaultValues: {
      newEmail: ''
    }
  });

  const onSubmit = async ({ newEmail }: TChangeEmail) => {
    await authClient.changeEmail({
      newEmail,
      fetchOptions: {
        onError: async context => {
          const { response } = context;
          if (response.status === 429) {
            const retryAfter = response.headers.get('X-Retry-After');
            setIsRetryAfter(true);
            return form.setError('root', {
              message: `Rate limit exceeded. Retry after ${retryAfter} seconds.`
            });
          }
          setIsRetryAfter(false);
          form.setError('root', {
            message: 'Could not change your email. Please try again later.'
          });
        }
      }
    });
  };

  const handleOpenChange = (open: boolean) => {
    form.reset();
    setIsDialogOpen(open);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="gap-1">
          <DialogTitle className="text-xl">Change Email</DialogTitle>
          <DialogDescription className="text-base">
            Enter your new email address below.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="newEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@new.email" type="email" {...field} />
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

              <Button disabled={form.formState.isSubmitting || isRetryAfter} type="submit">
                {form.formState.isSubmitting ? (
                  <>
                    Changing...
                    <Spinner />
                  </>
                ) : (
                  'Change Email'
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
