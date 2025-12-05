import 'server-only';

import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const saveDbImage = async ({ imagePath, userId }: { imagePath: string; userId: string }) => {
  await db.update(users).set({ image: imagePath }).where(eq(users.id, userId));
};
