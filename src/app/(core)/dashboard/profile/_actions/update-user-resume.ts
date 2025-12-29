import 'server-only';

import { db } from '@/db';
import { resumes } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { type CreateUserResumeT } from './create-user-resume';

export const updateUserResume = async ({ userId, resumeExtension }: CreateUserResumeT) => {
  const [updatedResume] = await db
    .update(resumes)
    .set({ extension: resumeExtension, updatedAt: new Date() })
    .where(eq(resumes.userId, userId))
    .returning();
  return updatedResume;
};
