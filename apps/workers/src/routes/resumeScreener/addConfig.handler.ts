import { udb } from "$lib/db/db";
import { resumeScreenConfigTable, zodResumeScreenConfig } from "$lib/db/schema/schema.org";
import { factApp } from "$lib/util";
import { createFactory } from "hono/factory";
import { validator } from "hono/validator";
import { z } from "zod"


const handler = factApp.createHandlers(
    validator('json', (val, c) => {
        let parsed = zodResumeScreenConfig.safeParse(val)

        parsed.success ? parsed.data : c.json({
            message: "Error! something is missing from resume screen config"
        }, 403)
    }),
    async (c) => {
        const org = ""
        const authUser = c.get("authUser")
        const userRole = authUser.user?.role
        const userOrgs = authUser.user?.orgs
        const db = udb(c, org)

        const reqdata: typeof resumeScreenConfigTable.$inferInsert = await c.req.json()
        // TODO: Save data to database
        let res = await db.insert(resumeScreenConfigTable).values({
            jobId: parseInt(c.req.param("jobId") as string),
            processId: reqdata.processId,
            prompt: reqdata.prompt,
            status: reqdata.status,
        }).prepare().execute()
        return c.json({ message: "Resume screener created", data: res })
    })

export default handler