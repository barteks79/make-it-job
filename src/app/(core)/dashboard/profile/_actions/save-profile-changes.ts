'use server';

import { auth } from '@/lib/auth';
import { unauthorized } from 'next/navigation';
import { headers } from 'next/headers';

import { uploadImage, deleteImage } from './store-image';
import { updateDatabaseImage, updateDatabaseName, removeDatabaseImage } from './update-db-profile';
import { type ProfileFormT } from '@/store/profile-form';

export const saveProfileChanges = async ({
  image,
  initialImage,
  username,
  initialUsername
}: ProfileFormT) => {
  const data = await auth.api.getSession({ headers: await headers() });
  if (!data) unauthorized();

  const userId = data.session.userId;

  // update username if changed
  if (username !== initialUsername) await updateDatabaseName(username, userId);

  // delete the image if not selected
  if (!image && typeof initialImage === 'string') {
    try {
      const oldPath = await removeDatabaseImage(userId);
      if (oldPath) await deleteImage(oldPath);
    } catch (err: unknown) {
      console.error(err);
    }
  }

  // upload an image if selected
  if (image instanceof File) {
    try {
      const path = await uploadImage(image, userId);
      await updateDatabaseImage(path, userId);
    } catch (err: unknown) {
      console.error(err);
    }
  }
};
