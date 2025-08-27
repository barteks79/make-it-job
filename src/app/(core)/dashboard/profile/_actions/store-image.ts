import { client } from '@/lib/supabase/client';

export const uploadImage = async (image: File, userId: string) => {
  const imagePath = `user/${userId}.${image.type.split('/')[1]}`;

  const { data, error } = await client.storage
    .from('make-it-job')
    .upload(imagePath, image, { upsert: true });

  if (error) {
    throw new Error('Failed to upload image');
  }

  return data.path;
};

export const deleteImage = async (path: string) => {
  const { error } = await client.storage.from('make-it-job').remove([path]);

  if (error) {
    throw new Error('Failed to remove image');
  }
};
