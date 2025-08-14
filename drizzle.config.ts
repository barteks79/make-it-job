import { type Config } from 'drizzle-kit';

export default {
  dialect: 'postgresql',
  schema: './src/db/schema'
} satisfies Config;
