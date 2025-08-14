import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import type { InferSelectModel, InferInsertModel } from 'drizzle-orm';

import { timestamps } from './timestamps.helpers';
import { users } from './users';

export const companies = pgTable('company', {
  id: uuid('id').primaryKey(),
  name: varchar('name', { length: 50 }).notNull().unique(),
  ownerId: uuid('ownerId').references(() => users.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  description: varchar('description', { length: 255 }),
  image: varchar('image', { length: 50 }),
  ...timestamps
});

export type Company = InferSelectModel<typeof companies>;
export type NewCompany = InferInsertModel<typeof companies>;
