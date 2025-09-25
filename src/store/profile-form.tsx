'use client';

import { useState, useEffect, useContext, createContext } from 'react';
import { authClient } from '@/lib/auth/client';
import { type Profile } from '@/db/schema/users';

type ImageT = File | string | null;

export type ProfileFormT = {
  image: ImageT; // Realtime selected image
  setImage: (file: File | null) => void;
  initialImage: ImageT; // Custom image or provider
  username: string;
  initialUsername: string;
  setUsername: (value: string) => void;
  profile: Profile;
  setProfile: (profile: Profile) => void;
  initialProfile: Profile;
};

export const ProfileFormContext = createContext<ProfileFormT>({
  image: null,
  setImage: () => {},
  initialImage: '',
  username: '',
  initialUsername: '',
  setUsername: () => {},
  profile: { biography: '' },
  setProfile: () => {},
  initialProfile: { biography: '' }
});

export function useProfileForm() {
  const context = useContext(ProfileFormContext);

  if (!context) {
    throw new Error('useProfileForm must be used within a ProfileFormProvider');
  }

  return context;
}

export default function ProfileFormProvider({ children }: { children: React.ReactNode }) {
  const { data: auth, isPending } = authClient.useSession();

  const [profile, setProfile] = useState<Profile>({ biography: '' });
  const [username, setUsername] = useState<string>('');
  const [image, setImage] = useState<ImageT>('/images/user-default1.jpg');

  useEffect(() => {
    if (!auth) return;

    setUsername(auth.user.name);
    setProfile(auth.user.profile as Profile);

    if (auth.user.image || auth.user.providerImage) {
      setImage((auth.user.image ?? auth.user.providerImage) as ImageT);
    }
  }, [auth]);

  if (isPending || !auth) {
    return <p>Loading...</p>;
  }

  const initialImage = auth.user.image ?? auth.user.providerImage ?? '/images/user-default1.jpg';

  return (
    <ProfileFormContext.Provider
      value={{
        image,
        initialImage,
        setImage,
        username,
        setUsername,
        initialUsername: auth.user.name,
        profile,
        setProfile,
        initialProfile: auth.user.profile as Profile
      }}
    >
      {children}
    </ProfileFormContext.Provider>
  );
}
