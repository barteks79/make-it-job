import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error('Database URL is not set.');

const client = postgres(databaseUrl, { prepare: false });
export const db = drizzle(client, {
  logger:
    process.env.NODE_ENV === 'development'
      ? {
          logQuery(query: string, params: unknown[]) {
            console.log('='.repeat(60));

            console.log('\n\x1b[32m[Drizzle]\x1b[0m\n');

            console.log(`Query: ${query}\n`);
            if (params && params.length > 0) {
              console.log(`Params: ${JSON.stringify(params, null, 2)}\n`);
            }
          }
        }
      : undefined
});
