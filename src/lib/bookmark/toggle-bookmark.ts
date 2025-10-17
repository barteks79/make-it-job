'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { unauthorized } from 'next/navigation';

import { deleteBookmark } from '@/lib/bookmark/delete-bookmark';
import { createBookmark } from '@/lib/bookmark/create-bookmark';
import { revalidateTag } from 'next/cache';

export const toggleBookmark = async ({
  postId,
  isDelete
}: {
  postId: string;
  isDelete: boolean;
}) => {
  const data = await auth.api.getSession({ headers: await headers() });
  if (!data) unauthorized();

  const { id: userId } = data.user;

  if (isDelete) {
    await deleteBookmark({ postId, userId });
  } else {
    await createBookmark({ postId, userId });
  }

  // Revalidates bookmark in JobCard & Revalidates bookmarks page
  revalidateTag(`bookmark:${postId}:${userId}`);
  revalidateTag(`bookmarks:${userId}`);
};
