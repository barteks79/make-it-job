import 'server-only';

import { db } from '@/db';
import { users, type Profile } from '@/db/schema/users';
import { eq } from 'drizzle-orm';

export const updateImagePath = async (imagePath: string, userId: string) => {
  await db.update(users).set({ image: imagePath }).where(eq(users.id, userId));
};

export const updateUsername = async (username: string, userId: string) => {
  await db.update(users).set({ name: username }).where(eq(users.id, userId));
};

export const updateProfile = async (profile: Profile, userId: string) => {
  await db.update(users).set({ profile }).where(eq(users.id, userId));
};

export const deleteImage = async (userId: string) => {
  // Get old image path to remove from storage
  const [row] = await db.select({ image: users.image }).from(users).where(eq(users.id, userId));

  await db.update(users).set({ image: null }).where(eq(users.id, userId));

  return row.image;
};
