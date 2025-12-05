import 'server-only';

import { db } from '@/db';
import { applications } from '@/db/schema';

export type CreateApplicationT = {
  postId: string;
  userId: string;
};

export const createApplication = async ({ postId, userId }: CreateApplicationT) => {
  return db.insert(applications).values({ postId, userId, status: 'Pending' });
};
