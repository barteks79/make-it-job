import { ProfileForm } from './_components/profile-form';
import ProfileFormProvider from '@/store/profile-form';
import { Toaster } from '@/components/ui/sonner';

export default async function ProfilePage() {
  return (
    <ProfileFormProvider>
      <Toaster position="top-center" />
      <ProfileForm />
    </ProfileFormProvider>
  );
}
