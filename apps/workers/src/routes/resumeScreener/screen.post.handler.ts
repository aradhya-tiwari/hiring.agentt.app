import { udb } from "$lib/db/db";
import { resumeScreenConfigTable, resumeScreenResultTable, zodResumeScreenConfig } from "$lib/db/schema/schema.org";
import { factApp } from "$lib/util";
import { createFactory } from "hono/factory";
import { validator } from "hono/validator";
import { z } from "zod"


const handler = factApp.createHandlers(

    async (c) => {
        const org = ""
        const authUser = c.get("authUser")
        const userRole = authUser.user?.role
        const userOrgs = authUser.user?.orgs
        const db = udb(c, org)

        const reqdata: typeof resumeScreenConfigTable.$inferInsert = await c.req.json()
        // TODO: Save data to database
        // fetch resume of user from r2 
        // generateText with structured object and insert it to resume screen result, airemark and score

        let values: typeof resumeScreenResultTable.$inferInsert[] = [{
            jobId: 1,
            processId: 1,
            resumeScreenConfigId: 1,
            candidateId: 1,
            aiRemark: '',
            score: 0,
            notes: []
        }]
        let res = await db.insert(resumeScreenResultTable).values(values).prepare().execute()
        return c.json({ message: "Resume screener result saved", data: res })
    })

export default handler