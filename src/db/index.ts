import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error('Database URL is not set.');

const client = postgres(databaseUrl, { prepare: false });
export const db = drizzle(client);
