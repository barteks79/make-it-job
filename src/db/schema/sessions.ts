import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';
import { timestamps } from './timestamps.helpers';
import { users } from './users';

export const sessions = pgTable('session', {
  id: uuid('id').primaryKey(),
  userId: uuid('userId').references(() => users.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  token: text('token').notNull(),
  expiresAt: timestamp('expiresAt', { withTimezone: true }).defaultNow().notNull(),
  ipAddress: text('ipAddress'),
  userAgent: text('userAgent'),
  ...timestamps
});
