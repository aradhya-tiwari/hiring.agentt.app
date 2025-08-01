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

    // Delete job from database
    const result = await db.delete(jobsTable)
        .where(eq(jobsTable.id, Number(id)))
        .returning()

    if (result.length === 0) {
        return c.json({ message: 'Job not found' }, 404)
    }

    return c.json({
        message: 'Job deleted successfully',
        data: result[0]
    })
})

export default handler