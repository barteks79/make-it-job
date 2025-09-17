'use client';

import { useState, useContext, createContext } from 'react';
import { authClient } from '@/lib/auth/client';

type ImageT = File | string | null;

export type ProfileFormT = {
  image: ImageT; // Realtime selected image
  setImage: (file: File | null) => void;
  initialImage: ImageT; // Custom image or provider
  username: string;
  initialUsername: string;
  setUsername: (value: string) => void;
};

export const ProfileFormContext = createContext<ProfileFormT>({
  image: null,
  setImage: () => {},
  initialImage: '',
  username: '',
  initialUsername: '',
  setUsername: () => {}
});

export function useProfileForm() {
  const context = useContext(ProfileFormContext);

  if (!context) {
    throw new Error('useProfileForm must be used within a ProfileFormProvider');
  }

  return context;
}

export default function ProfileFormProvider({ children }: { children: React.ReactNode }) {
  const { data: auth } = authClient.useSession();
  const initialImage = auth!.user.image ?? auth!.user.providerImage as ImageT;

  const [image, setImage] = useState<ImageT>(initialImage ?? '/images/user-default1.jpg');
  const [username, setUsername] = useState<string>(auth!.user.name);

  return (
    <ProfileFormContext.Provider
      value={{
        image,
        setImage,
        initialImage,
        username,
        setUsername,
        initialUsername: auth!.user.name
      }}
    >
      {children}
    </ProfileFormContext.Provider>
  );
}
