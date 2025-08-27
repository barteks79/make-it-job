import { auth } from '@/lib/auth/index';
import { getImageUrl } from '@/lib/supabase/get-image-url';

import { headers } from 'next/headers';
import { unauthorized } from 'next/navigation';

import ProfileForm from './_components/profile-form';
import ProfileFormProvider from '@/store/profile-form';

export default async function ProfilePage() {
  const data = await auth.api.getSession({
    headers: await headers()
  });

  if (!data) {
    unauthorized();
  }

  // Provider image if no custom image in database
  let image = data.user.providerImage;
  if (data.user.image) {
    image = await getImageUrl(data.user.image!);
  }

  return (
    <ProfileFormProvider initialUsername={data.user.name} initialImage={image ?? null}>
      <ProfileForm userId={data.user.id} />
    </ProfileFormProvider>
  );
}
