import { pgTable, uuid, varchar, text, boolean, jsonb } from 'drizzle-orm/pg-core';
import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { timestamps } from './timestamps.helpers';

export type Profile = { biography?: string };

export const users = pgTable('user', {
  id: uuid('id').primaryKey(),
  name: varchar('name', { length: 50 }).notNull(),
  email: varchar('email', { length: 100 }).unique().notNull(),
  emailVerified: boolean('emailVerified').notNull(),
  image: text('image'),
  profile: jsonb('profile').$type<Profile>().notNull(),
  providerImage: text('providerImage'),
  ...timestamps
});

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;
