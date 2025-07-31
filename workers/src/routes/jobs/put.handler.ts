import { udb } from '$lib/db/db.js'
import { factApp } from '$lib/util.js'
import { jobsTable } from '$lib/db/schema/schema.org.js'
import { eq } from 'drizzle-orm'

const handler = factApp.createHandlers(async (c) => {
    const org = c.req.param("orgId") as string
    const authUser = c.get("authUser")
    const userRole = authUser.user?.role
    const db = udb(c, org)

    const id = c.req.param("id")

    // Parse request body
    const body = await c.req.json()

    // Update job in database
    const result = await db.update(jobsTable)
        .set({
            role: body.role,
            description: body.description,
            status: body.status,
            skills: body.skills,
            exp: body.exp,
            salary: body.salary,
            location: body.location
        })
        .where(eq(jobsTable.id, Number(id)))
        .returning()

    if (result.length === 0) {
        return c.json({ message: 'Job not found' }, 404)
    }

    return c.json({
        message: 'Job updated successfully',
        data: result[0]
    })
})

export default handler