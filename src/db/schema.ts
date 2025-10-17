import {
  pgTable,
  uuid,
  text,
  varchar,
  timestamp,
  boolean,
  jsonb,
  doublePrecision
} from 'drizzle-orm/pg-core';

import type { InferSelectModel, InferInsertModel } from 'drizzle-orm';

const timestamps = {
  createdAt: timestamp('createdAt', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updatedAt', { withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
};

export type Profile = { biography?: string; skills?: string[] };

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

export const accounts = pgTable('account', {
  id: uuid('id').primaryKey(),
  userId: uuid('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  accountId: text('accountId').notNull(),
  providerId: text('providerId').notNull(),
  accessToken: text('accessToken'),
  refreshToken: text('refreshToken'),
  accessTokenExpiresAt: timestamp('accessTokenExpiresAt', { withTimezone: true }),
  refreshTokenExpiresAt: timestamp('refreshTokenExpiresAt', { withTimezone: true }),
  scope: text('scope'),
  idToken: text('idToken'),
  password: text('password'),
  ...timestamps
});

export const sessions = pgTable('session', {
  id: uuid('id').primaryKey(),
  userId: uuid('userId').references(() => users.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  token: text('token').notNull(),
  expiresAt: timestamp('expiresAt', { withTimezone: true }).defaultNow().notNull(),
  ipAddress: text('ipAddress'),
  userAgent: text('userAgent'),
  ...timestamps
});

export const verifications = pgTable('verification', {
  id: uuid('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expiresAt', { withTimezone: true }).defaultNow().notNull(),
  ...timestamps
});

export const companies = pgTable('company', {
  id: uuid('id').primaryKey(),
  name: varchar('name', { length: 50 }).notNull().unique(),
  ownerId: uuid('ownerId').references(() => users.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  description: varchar('description', { length: 255 }),
  image: varchar('image', { length: 50 }),
  ...timestamps
});

export const posts = pgTable('post', {
  id: uuid('id').primaryKey(),
  position: varchar('position', { length: 50 }).notNull(),
  companyId: uuid('companyId')
    .references(() => companies.id, { onDelete: 'cascade', onUpdate: 'cascade' })
    .notNull(),
  experience: text('experience', { enum: ['Junior', 'Mid', 'Senior'] }).notNull(),
  jobType: text('jobType', {
    enum: ['Full time', 'Part-time', 'Freelance', 'Internship']
  }).notNull(),
  workType: text('workType', { enum: ['On-site', 'Remote', 'Hybrid'] }).notNull(),
  salary: doublePrecision('salary').notNull(),
  description: varchar('description', { length: 120 }).notNull(),
  tags: varchar('tags', { length: 25 }).array().notNull(),
  information: text('information').array().notNull(),
  requirements: text('requirements').array().notNull(),
  ...timestamps
});

export const bookmarks = pgTable('bookmark', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('userId')
    .references(() => users.id, { onDelete: 'cascade', onUpdate: 'cascade' })
    .notNull(),
  postId: uuid('postId')
    .references(() => posts.id, { onDelete: 'cascade', onUpdate: 'cascade' })
    .notNull(),
  ...timestamps
});

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

export type Company = InferSelectModel<typeof companies>;
export type NewCompany = InferInsertModel<typeof companies>;

export type JobPost = InferSelectModel<typeof posts>;
export type NewJobPost = InferInsertModel<typeof posts>;

export type Bookmark = InferSelectModel<typeof bookmarks>;
export type NewBookmark = InferInsertModel<typeof bookmarks>;
