'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { unauthorized } from 'next/navigation';

import { deleteBookmark } from './delete-bookmark';
import { addBookmark } from './add-bookmark';
import { revalidateTag, revalidatePath } from 'next/cache';

export const bookmarkPost = async ({ postId, isDelete }: { postId: string; isDelete: boolean }) => {
  const data = await auth.api.getSession({ headers: await headers() });
  if (!data) unauthorized();

  const { id: userId } = data.user;

  if (isDelete) {
    await deleteBookmark({ postId, userId });
  } else {
    await addBookmark({ postId, userId });
  }

  // Fetches getIsBookmarked again in JobCard & Revalidates /bookmarks page
  revalidateTag(`bookmark:${postId}:${userId}`);
  revalidatePath('/bookmarks');
};
