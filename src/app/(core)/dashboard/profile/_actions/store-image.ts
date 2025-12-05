'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { unauthorized } from 'next/navigation';

import { saveDbImage } from './save-db-image';
import { type ImageUploadItem } from '../_components/image-uploader';

export const uploadImage = async (file: ImageUploadItem) => {
  const data = await auth.api.getSession({ headers: await headers() });
  if (!data) unauthorized();

  await saveDbImage({ imagePath: file.file.name, userId: data.user.id });
};
