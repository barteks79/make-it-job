'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { unauthorized } from 'next/navigation';

import { createUserResume } from './create-user-resume';
import { updateUserResume } from './update-user-resume';
import { getResumeByUserId } from '@/lib/resume/get-resume';

export const saveResume = async ({ filename }: { filename: string }) => {
  const data = await auth.api.getSession({ headers: await headers() });
  if (!data) unauthorized();

  const [name, extension] = filename.split('.', 2);
  if (!extension && extension !== 'pdf' && extension !== 'doc' && extension !== 'docx') return;

  const resumeExtension = `.${extension}` as '.pdf' | '.doc' | '.docx';
  const existingResume = await getResumeByUserId(data.user.id);

  try {
    if (existingResume) {
      const updatedResume = await updateUserResume({
        userId: data.user.id,
        fileName: name,
        resumeExtension
      });
      return !!updatedResume;
    } else {
      const createdResume = await createUserResume({
        userId: data.user.id,
        fileName: name,
        resumeExtension
      });
      return !!createdResume;
    }
  } catch (err: unknown) {
    console.error(err);
    return false;
  }
};
