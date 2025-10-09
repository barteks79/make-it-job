import { Toaster } from '@/components/ui/sonner';
import { Suspense } from 'react';
import { SettingsForm } from './_components/settings-form';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
          <p className="text-muted-foreground">Update your account settings.</p>
        </div>

        <div className="h-px w-full bg-border" />

        <Suspense fallback={<p>Loading 2...</p>}>
          <SettingsForm />
          <Toaster position="top-center" />
        </Suspense>
      </section>
    </div>
  );
}
