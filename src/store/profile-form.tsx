'use client';

import { useState, useContext, createContext, type ReactNode } from 'react';

type ImageT = File | string | null;

type ProfileFormT = {
  image: ImageT; // Realtime selected image
  initialImage: ImageT; // Used to check if the image was deleted
  setImage: (file: File | null) => void;
  username: string;
  initialUsername: string; // Used to check if the username changed
  setUsername: (value: string) => void;
};

export const ProfileFormContext = createContext<ProfileFormT>({
  image: null,
  initialImage: null,
  setImage: () => {},
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

export default function ProfileFormProvider({
  initialImage,
  initialUsername,
  children
}: {
  initialImage: ImageT;
  initialUsername: string;
  children: ReactNode;
}) {
  const [image, setImage] = useState<ImageT>(initialImage);
  const [username, setUsername] = useState<string>(initialUsername);

  return (
    <ProfileFormContext.Provider
      value={{ image, initialImage, setImage, username, initialUsername, setUsername }}
    >
      {children}
    </ProfileFormContext.Provider>
  );
}
