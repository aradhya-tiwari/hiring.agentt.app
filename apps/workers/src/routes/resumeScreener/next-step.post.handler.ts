import { udb } from "$lib/db/db";
import { processTable, resumeScreenConfigTable, resumeScreenResultTable, zodResumeScreenConfig } from "$lib/db/schema/schema.org";
import { factApp } from "$lib/util";
import { createFactory } from "hono/factory";
import { validator } from "hono/validator";
import { z } from "zod"
import { sql } from 'drizzle-orm'
import { SQLiteTableWithColumns } from "drizzle-orm/sqlite-core";

let nextStepReqData = z.object({
    candidateId: z.number(),
    processId: z.number()
})

const handler = factApp.createHandlers(
    validator('json', (val, c) => {
        let parsed = nextStepReqData.safeParse(val)

        parsed.success ? parsed.data : c.json({
            message: "Error! something is missing from resume screen config"
        }, 403)
    }),
    async (c) => {
        const org = c.req.param("orgId") as string
        const authUser = c.get("authUser")
        const userRole = authUser.user?.role
        const userOrgs = authUser.user?.orgs
        const db = udb(c, org)
        const jobId = c.req.param("jobId")
        const reqdata: { candidates: z.infer<typeof nextStepReqData> } = await c.req.json()
        let candidates = reqdata.candidates

        let stepsResp = await db.query.processTable.findMany({
            where: sql`${processTable.jobId} = ${jobId}`,
            orderBy: sql`${processTable.stepNum} asc`
        }).prepare().execute()

        let steps: { [x: string]: typeof processTable.$inferSelect } = {}
        stepsResp.map((e) => {
            steps[e.stepNum + "-" + e.id] = e
        })
        // check process id and if process id is 1 check process id with job 2 

        /*
    {{
        processId:{data}
        stepNum:{data}
        }} 
        */
        function getProcessId(processId: number) {

            return
        }
        let values: typeof resumeScreenResultTable.$inferInsert[] = [{
            jobId: 0,
            processId: 0,
            resumeScreenConfigId: 0,
            candidateId: 0
        }]
        for (let i = 0; i < reqdata.candidates.length; i++) {
            values[i].processId = candidates[i].processId
            values[i].candidateId = candidates[i].candidateId
        }
        //  Save data to database
        let res = await db.insert(resumeScreenResultTable).values(values).prepare().execute()
        return c.json({ message: "Resume screener created", data: res })
    })

export default handler
