'use client';

import { signUp } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from '@/types/sign-up-schema';
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

import ContinueWithSeparator from '../../continue-with-separator';

export default function SignUpForm() {
  const form = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = async ({ email, password }: z.infer<typeof SignUpSchema>) => {
    const { data, error } = await signUp.email(
      {
        email,
        password,
        name: 'Static Name'
      },
      {
        onError: ctx => {
          console.log(ctx);
        }
      }
    );

    console.log(data, error);
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

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Confirm Password</FormLabel>
                  <FormControl>
                    <Input className="h-11" placeholder="Confirm the password" {...field} />
                  </FormControl>
                  <FormMessage className="text-base" />
                </FormItem>
              )}
            />
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <Button type="submit" className="text-base h-10 cursor-pointer">
            {form.formState.isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </Button>

          <ContinueWithSeparator />

          <Button variant="secondary" disabled className="text-base h-10 cursor-pointer">
            Coming soon...
          </Button>
        </section>
      </form>
    </Form>
  );
}
