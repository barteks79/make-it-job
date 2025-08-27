'use server';

import { uploadImage, deleteImage } from './store-image';
import { updateDatabaseImage, updateDatabaseName, removeDatabaseImage } from './update-db-profile';

type ImageT = File | string | null;

export const saveProfileChanges = async ({
  image,
  initialImage,
  username,
  initialUsername,
  userId
}: {
  image: ImageT;
  initialImage: ImageT;
  username: string;
  initialUsername: string;
  userId: string;
}) => {
  // update username if it changed
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
