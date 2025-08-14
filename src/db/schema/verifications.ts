import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';
import { timestamps } from './timestamps.helpers';

export const verifications = pgTable('verification', {
  id: uuid('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expiresAt', { withTimezone: true }).defaultNow().notNull(),
  ...timestamps
});
