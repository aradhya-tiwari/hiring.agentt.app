import { udb } from "$lib/db/db.js";
import { candidatesTable, candidateTableType } from "$lib/db/schema/schema.db.js";
import { sql } from "drizzle-orm";
import "dotenv/config"
import { Context } from "hono";

export async function getAllCandidates(c: Context) {
    let db = udb(c, "user1")
    return await db.select().from(candidatesTable).prepare().execute()
}


export async function addCandidate(c: Context, obj: candidateTableType) {
    let db = udb(c, "user1")
    // Provide all required fields for the candidate
    let ab: typeof candidatesTable.$inferInsert = {
        name: "Aradhya Tiwari",
        email: "aradhya.prad@gmail.com",
        jdId: 0,
        resumeStorageId: "9573esdn cx932rydcx,",
        phone: "99292929292",
        remarks: [{ by: 123456, rating: 5, remark: "Wowow amazing student bhapp" }]
    }

    return await db.insert(candidatesTable).values(ab).prepare().execute()
}


export async function updateCandidate(c: Context) {
    let db = udb(c, "user1")
    // Provide all required fields for the candidate
    let ab: typeof candidatesTable.$inferInsert = {
        name: "Aradhya Tiwari",
        email: "aradhya.prad@gmail.com",
        jdId: 0,
        resumeStorageId: "r2://resumestorage.r2.app/wow",
        phone: "99292929292",
        remarks: [{ by: 123456, rating: 5, remark: "Wowow amazing student bhapp" }]
    }

    return await db.insert(candidatesTable).values(ab)
}

export async function deleteCandidate() {
    // Is it needed ?? 
}
