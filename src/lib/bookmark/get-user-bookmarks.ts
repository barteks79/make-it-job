'use server';

import { db } from '@/db';
import { posts, bookmarks } from '@/db/schema';
import { eq, asc } from 'drizzle-orm';
import { unstable_cache } from 'next/cache';

export const _getUserBookmarks = async ({
  userId,
  order
}: {
  userId: string;
  order: 'recent' | 'latest';
}) => {
  return db
    .select()
    .from(posts)
    .innerJoin(bookmarks, eq(posts.id, bookmarks.postId))
    .where(eq(bookmarks.userId, userId))
    .orderBy(asc(order === 'latest' ? posts.createdAt : bookmarks.createdAt));
};

export const getUserBookmarks = unstable_cache(_getUserBookmarks, ['getUserBookmarks'], {
  revalidate: 3600,
  tags: ['bookmarks']
});

export type GetUserBookmarks = ReturnType<typeof getUserBookmarks>;
