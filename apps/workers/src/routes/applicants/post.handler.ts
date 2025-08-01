import { udb } from '$lib/db/db.js'
import { factApp } from '$lib/util.js'
import { applicantsTable, zodApplicants } from '$lib/db/schema/schema.org.js'
import { eq } from 'drizzle-orm'
import { sql } from "drizzle-orm"
import { validator } from 'hono/validator'

const handler = factApp.createHandlers(
    validator("json", (val, c) => {
        let parsed = zodApplicants.safeParse(val)
        parsed.success ? parsed : c.json({ msg: "Error! something missing from Applicants data" }, 403)
    }),
    async (c) => {
        const org = c.req.param("orgId") as string
        const authUser = c.get("authUser")
        const userRole = authUser.user?.role
        const db = udb(c, org)

        // Parse request body
        const body = await c.req.json()

        // Insert new applicant into database
        const result = await db.insert(applicantsTable).values({
            jobId: Number(c.req.param("jobId")),
            name: body.name,
            email: body.email,
            phone: body.phone,
            status: body.status || 'applied',
            resumeStorageId: body.resumeStorageId,
            remarks: body.remarks,
            formResponse: body.formResponse
        }).returning()

        return c.json({
            message: 'Applicant created successfully',
            data: result[0]
        })
    })

export default handler
