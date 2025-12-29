import 'server-only';

import { db } from '@/db';
import { resumes } from '@/db/schema';

export type CreateUserResumeT = {
  userId: string;
  resumeExtension: '.pdf' | '.doc' | '.docx';
};

export const createUserResume = async ({ userId, resumeExtension }: CreateUserResumeT) => {
  const [newResume] = await db
    .insert(resumes)
    .values({
      userId,
      extension: resumeExtension
    })
    .returning();
  return newResume;
};
