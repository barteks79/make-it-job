import { Suspense } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { SettingsForm } from './_components/settings-form';
import { AppearanceForm } from './_components/appearance-form';
import { SettingsFormSkeleton } from './_components/skeletons';

export default async function SettingsPage() {
  return (
    <div className="space-y-6 pb-8">
      <section className="space-y-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
          <p className="text-muted-foreground">Update your account settings.</p>
        </div>

        <div className="h-px w-full bg-border" />

        <Suspense fallback={<SettingsFormSkeleton />}>
          <SettingsForm />
        </Suspense>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Appearance</h1>
          <p className="text-muted-foreground">
            Customize the look of application for your preferences.
          </p>
        </div>

        <div className="h-px w-full bg-border" />

        <AppearanceForm />
      </section>

      <Toaster position="top-center" />
    </div>
  );
}
