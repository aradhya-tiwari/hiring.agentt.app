import { udb } from "$lib/db/db.js";
import { candidatesTable } from "$lib/db/schema/schema.db.js";
import { sql } from "drizzle-orm";
import "dotenv/config"

export async function getAllCandidates() {
    let db = udb("user1")
    return await db.query.candidatesTable.findMany({
        // where: sql``
    }).prepare().execute()
}

export async function addCandidate() {
    let db = udb("user1")
    // Provide all required fields for the candidate
    let ab: typeof candidatesTable.$inferInsert = {
        name: "Aradhya Tiwari",
        email: "aradhya.prad@gmail.com",
        jdId: 0,
        resumeStorageId: "9573esdn cx932rydcx,",
        phone: "99292929292",
        remarks: [{ by: 123456, rating: 5, remark: "Wowow amazing student bhapp" }]
    }

    return await db.insert(candidatesTable).values(ab)
}

export async function updateCandidate() {
    let db = udb("user1")
    // Provide all required fields for the candidate
    let ab: typeof candidatesTable.$inferInsert = {
        name: "Aradhya Tiwari",
        email: "aradhya.prad@gmail.com",
        jdId: 0,
        resumeStorageId: "9573esdn cx932rydcx,",
        phone: "99292929292",
        remarks: [{ by: 123456, rating: 5, remark: "Wowow amazing student bhapp" }]
    }

    return await db.insert(candidatesTable).values(ab)
}
console.log(await getAllCandidates())