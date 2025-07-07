import { drizzle, LibSQLDatabase } from 'drizzle-orm/libsql';
import { createClient, type Client } from '@libsql/client';
import * as userDbSchema from './schema/schema.db.js';
import type { Context } from 'hono';
// import { config } from 'dotenv';

export function udb(c: Context, id: string) {
    console.log(c.env.ENV)
    let url = ""
    if (c.env.ENV === "DEV")
        url = `http://127.0.0.1:8081`
    else if (c.env.ENV === 'STAGE')
        url = ``
    else if (c.env.ENV === "PRODUCTION")
        url = ``
    else throw "Unknown ENV should be DEV, STAGE, PRODUCTION"

    return drizzle({
        connection: {
            url: url,
            authToken: c.env.DATABASE_AUTH_TOKEN
        }, schema: userDbSchema,
    },);
}

// export class IntDB {
//     db: Client | undefined
//     constructor(id: string) {
//         let url = ""
//         if (c.env.ENV === "DEV")
//             url = `file:/src/db-files/internal/${id}`
//         else if (c.env.ENV === 'STAGE')
//             url = ``
//         else if (c.env.ENV === "PRODUCTION")
//             url = ``
//         else throw "Unknown ENV should be DEV, STAGE, PRODUCTION"

//     }
//     get() {
//         if (this.db)
//             return this.db
//         else throw "Couldn't get DB Instance"
//     }
// }