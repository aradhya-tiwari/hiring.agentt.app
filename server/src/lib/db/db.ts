import { drizzle, LibSQLDatabase } from 'drizzle-orm/libsql';
import { createClient, type Client } from '@libsql/client';
import * as userDbSchema from './schema/schema.db.js';
// import { config } from 'dotenv';

export function udb(id: string) {
    console.log(process.env.ENV)
    let url = ""
    if (process.env.ENV === "DEV")
        url = `file:./src/db-files/${id}.db`
    else if (process.env.ENV === 'STAGE')
        url = ``
    else if (process.env.ENV === "PRODUCTION")
        url = ``
    else throw "Unknown ENV should be DEV, STAGE, PRODUCTION"

    return drizzle({
        connection: {
            url: url,
            authToken: process.env.DATABASE_AUTH_TOKEN
        }, schema: userDbSchema,
    },);
}

export class IntDB {
    db: Client | undefined
    constructor(id: string) {
        let url = ""
        if (process.env.ENV === "DEV")
            url = `file:/src/db-files/internal/${id}`
        else if (process.env.ENV === 'STAGE')
            url = ``
        else if (process.env.ENV === "PRODUCTION")
            url = ``
        else throw "Unknown ENV should be DEV, STAGE, PRODUCTION"

    }
    get() {
        if (this.db)
            return this.db
        else throw "Couldn't get DB Instance"
    }
}