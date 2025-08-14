import { pgTable, uuid, varchar, boolean } from 'drizzle-orm/pg-core';
import { timestamps } from './timestamps.helpers';

export const users = pgTable('user', {
  id: uuid('id').primaryKey(),
  name: varchar('name', { length: 50 }).notNull(),
  email: varchar('email', { length: 100 }).unique().notNull(),
  emailVerified: boolean('emailVerification').notNull(),
  image: varchar('image', { length: 50 }).unique(),
  ...timestamps
});
