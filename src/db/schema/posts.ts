import { pgTable, uuid, text, varchar, doublePrecision } from 'drizzle-orm/pg-core';
import type { InferSelectModel, InferInsertModel } from 'drizzle-orm';

import { timestamps } from './timestamps.helpers';
import { companies } from './companies';

export const posts = pgTable('post', {
  id: uuid('id').primaryKey(),
  position: varchar('position', { length: 50 }).notNull(),
  companyIdP: uuid('companyId')
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

export type JobPost = InferSelectModel<typeof posts>;
export type NewJobPost = InferInsertModel<typeof posts>;
