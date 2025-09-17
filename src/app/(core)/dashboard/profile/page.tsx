import ProfileForm from './_components/profile-form';
import ProfileFormProvider from '@/store/profile-form';

export default async function ProfilePage() {
  return (
    <ProfileFormProvider>
      <ProfileForm />
    </ProfileFormProvider>
  );
}
