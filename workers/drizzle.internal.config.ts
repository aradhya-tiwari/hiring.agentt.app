import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: 'src/lib/db/migrationsInternal',
    schema: 'src/lib/db/schema/schema.internal.ts',
    dialect: 'turso',
    dbCredentials: {
        url: process.env.DATABASE_URL_INTERNAL as string,
        authToken: process.env.DATABASE_AUTH_TOKEN as string,
    },
});