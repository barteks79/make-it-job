import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { unauthorized } from 'next/navigation';

import ProfileFormProvider from '@/store/profile-form';
import { CompleteProfileForm } from './_components/complete-profile-form';

export default async function CompleteProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) unauthorized();

  return (
    <article className="flex max-w-2xl flex-col gap-8">
      <header className="space-y-2 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Complete profile
        </p>
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold tracking-tight">Tell us about yourself</h1>
          <p className="text-base text-muted-foreground">
            Finish your profile in a few quick steps so employers can get to know you better.
          </p>
        </div>
      </header>

      <ProfileFormProvider>
        <CompleteProfileForm />
      </ProfileFormProvider>
    </article>
  );
}
