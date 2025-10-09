'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { authClient } from '@/lib/auth/client';
import { updateSettings } from '@/app/(core)/dashboard/settings/_actions/update-settings';

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
import { SettingsFormSkeleton } from './skeletons';

import { settingsSchema, type TSettings } from '@/types/settings-schema';

export function SettingsForm() {
  const { data: auth, isPending } = authClient.useSession();

  const form = useForm<TSettings>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  async function onSubmit() {
    const result = await updateSettings();

    if (result.success) toast.success(result.message);
    else toast.error(result.message);
  }

  if (isPending || !auth) {
    return <SettingsFormSkeleton />;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-96 space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="jkowalski@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update settings</Button>
      </form>
    </Form>
  );
}
