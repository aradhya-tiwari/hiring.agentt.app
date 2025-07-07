import * as s from "drizzle-orm/sqlite-core"
import { createInsertSchema } from "drizzle-zod"
import { udb } from "../db.js"
import { eq, sql } from "drizzle-orm"
// import "dotenv/config"

export const jdTable = s.sqliteTable("jd", {
    id: s.integer().primaryKey({ autoIncrement: true }),
    role: s.text().notNull(),
    description: s.text().notNull(),
    createdAt: s.integer().notNull().default(Date.now()),
    updatedAt: s.integer().notNull().default(Date.now()),
    status: s.text().notNull().default("open"),
    skills: s.text({ mode: "json" }).$type<Array<string>>().notNull(),
    salary: s.integer().notNull(),
    location: s.text({ mode: "json" }).$type<{ city: string, location: string }>().notNull(),

})
export const empTable = s.sqliteTable("emp", {
    id: s.integer().primaryKey({ autoIncrement: true }),
    name: s.text().notNull(),
    email: s.text().notNull(),
    phone: s.text(),
    joinedAt: s.integer().notNull().default(Date.now()),
    role: s.text().notNull().default("employee"),
})

export const empJdMapTable = s.sqliteTable("empJdMap", {
    id: s.integer().primaryKey({ autoIncrement: true }),
    empId: s.integer().notNull(),
    jdId: s.integer().notNull(),
    createdAt: s.integer().notNull().default(Date.now()),
    updatedAt: s.integer().notNull().default(Date.now()),

}
)
export const candidatesTable = s.sqliteTable("candidates", {
    id: s.integer().primaryKey({ autoIncrement: true }),
    jdId: s.integer().notNull(),
    name: s.text().notNull(),
    email: s.text().notNull(),
    phone: s.text(),
    status: s.text().notNull().default("applied"),
    resumeStorageId: s.text().notNull(),
    createdAt: s.integer().notNull().default(Date.now()),
    updatedAt: s.integer().notNull().default(Date.now()),
    remarks: s.text({ mode: "json" }).$type<Array<{ by: number, rating: number, remark: string }>>()
})
export type candidateTableType = typeof candidatesTable.$inferSelect

