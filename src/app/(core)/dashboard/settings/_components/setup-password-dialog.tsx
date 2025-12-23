'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { setPassword } from '../_actions/set-password';

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

import { setupPasswordSchema, type TSetupPassword } from '@/types/setup-password-schema';

export function SetupPasswordDialog({ children }: React.PropsWithChildren) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const router = useRouter();

  const form = useForm<TSetupPassword>({
    resolver: zodResolver(setupPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = async ({ password }: TSetupPassword) => {
    const success = await setPassword({ password });
    if (!success) {
      return form.setError('root', {
        message: 'Failed to set password. Please try again later.'
      });
    }
    setIsSuccess(true);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open || isSuccess) {
      router.refresh();
    }
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
                <DialogTitle className="text-xl">Password Set Up</DialogTitle>
              </div>
              <DialogDescription className="text-center text-base">
                Your password has been successfully set up.
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
              <DialogTitle className="text-xl">Setup Password</DialogTitle>
              <DialogDescription className="text-base">
                Create a password for your account.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your password" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Confirm your password" type="password" {...field} />
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
                        Setting up...
                        <Spinner />
                      </>
                    ) : (
                      'Setup Password'
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
