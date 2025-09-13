'use server';

import { db } from '@/db';
import { posts } from '@/db/schema/posts';
import { bookmarks } from '@/db/schema/bookmarks';
import { eq } from 'drizzle-orm';

export const getUserBookmarks = async ({
  // query,
  // option,
  // userId
}: {
  query: string | undefined;
  order: 'recent' | 'latest';
  userId: string;
}) => {
  return db.select().from(posts).innerJoin(bookmarks, eq(posts.id, bookmarks.postId));
};
