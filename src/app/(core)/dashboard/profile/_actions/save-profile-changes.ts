'use server';

import { auth } from '@/lib/auth';
import { unauthorized } from 'next/navigation';
import { headers } from 'next/headers';

import { updateProfile, updateUsername } from './update-db-profile';
import { shallowCompare } from '@/lib/utils';
import { type ProfileFormT } from '@/store/profile-form';

export const saveProfileChanges = async (profileData: ProfileFormT) => {
  const data = await auth.api.getSession({ headers: await headers() });
  if (!data) unauthorized();

  const { userId } = data.session;

  // update username if changed
  if (profileData.username !== profileData.initialUsername)
    await updateUsername(profileData.username, userId);

  // update profile if changed
  if (!shallowCompare(profileData.profile, profileData.initialProfile))
    await updateProfile(profileData.profile, userId);
};
