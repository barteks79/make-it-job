import { pgTable, uuid } from 'drizzle-orm/pg-core';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';

import { timestamps } from './timestamps.helpers';
import { users } from './users';
import { posts } from './posts';

export const bookmarks = pgTable('bookmark', {
  id: uuid('id').primaryKey(),
  userId: uuid('userId')
    .references(() => users.id, { onDelete: 'cascade', onUpdate: 'cascade' })
    .notNull(),
  postId: uuid('postId')
    .references(() => posts.id, { onDelete: 'cascade', onUpdate: 'cascade' })
    .notNull(),
  ...timestamps
});

export type Bookmark = InferSelectModel<typeof bookmarks>;
export type NewBookmark = InferInsertModel<typeof bookmarks>;
