import { type Config } from 'drizzle-kit';

if (!process.env.DATABASE_URL) {
  throw new Error('Database URL is not set.');
}

export default {
  dialect: 'postgresql',
  schema: './src/db/schema',
  out: './drizzle',
  dbCredentials: {
    url: process.env.DATABASE_URL
  }
} satisfies Config;
