import 'server-only';

import { db } from '@/db';
import { resumes } from '@/db/schema';

export type CreateUserResumeT = {
  userId: string;
  fileName: string;
  resumeExtension: '.pdf' | '.doc' | '.docx';
};

export const createUserResume = async ({
  userId,
  fileName,
  resumeExtension
}: CreateUserResumeT) => {
  const [newResume] = await db
    .insert(resumes)
    .values({
      userId,
      fileName,
      extension: resumeExtension
    })
    .returning();
  return newResume;
};
