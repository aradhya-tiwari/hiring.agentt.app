import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: 'src/lib/db/migrations',
    schema: 'src/lib/db/schema/schema.db.ts',
    dialect: 'turso',
    dbCredentials: {
        url: process.env.DATABASE_URL as string,
        authToken: process.env.DATABASE_AUTH_TOKEN as string,
    },
});