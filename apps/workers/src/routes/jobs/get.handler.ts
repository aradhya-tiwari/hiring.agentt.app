import { udb } from '$lib/db/db.js'
import { factApp } from '$lib/util.js'
import { jobsTable } from '$lib/db/schema/schema.org.js'
import { eq } from 'drizzle-orm'

const handler = factApp.createHandlers(async (c) => {
    const org = c.req.param("orgId") as string
    const authUser = c.get("authUser")
    const userRole = authUser.user?.role
    const db = udb(c, org)

    // Get all jobs from database
    const result = await db.select().from(jobsTable)

    return c.json({ data: result })
})

export default handler
