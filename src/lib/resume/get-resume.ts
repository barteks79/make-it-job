'use server';

import { db } from '@/db';
import { resumes } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const getResumeByUserId = async (userId: string) => {
  const [resume] = await db.select().from(resumes).where(eq(resumes.userId, userId));
  return resume;
};
