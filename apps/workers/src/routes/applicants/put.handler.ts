import { udb } from '$lib/db/db.js'
import { factApp } from '$lib/util.js'
import { applicantsTable } from '$lib/db/schema/schema.org.js'
import { eq } from 'drizzle-orm'

const handler = factApp.createHandlers(async (c) => {
    const org = c.req.param("orgId") as string
    const authUser = c.get("authUser")
    const userRole = authUser.user?.role
    const db = udb(c, org)
    const id = c.req.param('id')

    // Parse request body
    const body = await c.req.json()

    // Update applicant in database
    const result = await db.update(applicantsTable)
        .set({
            jobId: body.jobId,
            name: body.name,
            email: body.email,
            phone: body.phone,
            status: body.status,
            resumeStorageId: body.resumeStorageId,
            remarks: body.remarks,
            formResponse: body.formResponse
        })
        .where(eq(applicantsTable.id, Number(id)))
        .returning()

    if (result.length === 0) {
        return c.json({ message: 'Applicant not found' }, 404)
    }

    return c.json({
        message: 'Applicant updated successfully',
        data: result[0]
    })
})

export default handler
