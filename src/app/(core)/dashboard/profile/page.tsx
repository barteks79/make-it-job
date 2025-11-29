import { ProfileForm } from './_components/profile-form';
import ProfileFormProvider from '@/store/profile-form';
import { Toaster } from '@/components/ui/sonner';

export default async function ProfilePage() {
  return (
    <div className="space-y-6 pb-8">
      <section className="space-y-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Public Profile</h1>
          <p className="text-muted-foreground">Employers will see information provided by you.</p>
        </div>
      </section>

      <ProfileFormProvider>
        <Toaster position="top-center" />
        <ProfileForm />
      </ProfileFormProvider>
    </div>
  );
}
