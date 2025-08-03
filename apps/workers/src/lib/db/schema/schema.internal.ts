import * as s from "drizzle-orm/sqlite-core"
import { createInsertSchema } from "drizzle-zod"
import { udb } from "../db.js"
import { eq, sql } from "drizzle-orm"




export const usersTable = s.sqliteTable("users", {
    id: s.integer().primaryKey({ autoIncrement: true }),
    name: s.text({}).notNull(),
    email: s.text().notNull(),
    providers: s.text({ mode: "json" }).default([]),

})