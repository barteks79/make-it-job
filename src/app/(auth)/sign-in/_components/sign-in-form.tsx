'use client';

import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth/client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchema } from '@/types/sign-in-schema';
import { z } from 'zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '@/components/ui/form';

import { GoogleIcon } from './auth-icons';
import ContinueWithSeparator from '../../continue-with-separator';
import AuthOptions from './auth-options';

export default function SignInForm() {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const signInWithGoogle = async () => {
    await authClient.signIn.social({
      provider: 'google'
    });
  };

  const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
    await authClient.signIn.email(
      { ...data, callbackURL: '/dashboard' },
      {
        onError: ({ error }) => {
          if (error.status === 401) {
            form.resetField('password');
            form.setError('password', { message: 'Invalid email or password.' });
            return;
          }

          console.error(error);
          form.setError('root', { message: 'Unknown error.' });
        }
      }
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Email</FormLabel>
                  <FormControl>
                    <Input className="h-11" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage className="text-base" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Password</FormLabel>
                  <FormControl>
                    <Input className="h-11" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage className="text-base" />
                </FormItem>
              )}
            />
          </div>

          <AuthOptions />
        </section>

        <section className="flex flex-col gap-4">
          <Button type="submit" className="text-base h-10 cursor-pointer">
            {form.formState.isSubmitting &&
            (!form.formState.isSubmitted ||
              (form.formState.isSubmitted && !form.formState.isSubmitSuccessful))
              ? 'Signing In...'
              : undefined}

            {!form.formState.isSubmitting &&
            (!form.formState.isSubmitted ||
              (form.formState.isSubmitted && !form.formState.isSubmitSuccessful))
              ? 'Sign In'
              : undefined}

            {form.formState.isSubmitted &&
            form.formState.isSubmitSuccessful &&
            !form.formState.isSubmitting
              ? 'Redirecting...'
              : undefined}
          </Button>

          <ContinueWithSeparator />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Button
              type="button"
              variant="outline"
              className="h-10 cursor-pointer"
              onClick={signInWithGoogle}
            >
              <GoogleIcon className="size-4" />
              Continue with Google
            </Button>
          </div>
        </section>
      </form>
    </Form>
  );
}
