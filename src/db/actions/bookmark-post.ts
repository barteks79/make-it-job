'use server';

import { deleteBookmark } from './delete-bookmark';
import { addBookmark } from './add-bookmark';
import { revalidateTag } from 'next/cache';

export const bookmarkPost = async ({
  postId,
  isDelete,
  userId
}: {
  postId: string;
  userId: string;
  isDelete: boolean;
}) => {
  if (isDelete) {
    await deleteBookmark({ postId, userId });
  } else {
    await addBookmark({ postId, userId });
  }

  // Fetches getIsBookmarked again in JobCard
  revalidateTag(`bookmark:${postId}:${userId}`);
};
