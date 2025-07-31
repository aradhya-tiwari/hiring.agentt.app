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

    // Delete applicant from database
    const result = await db.delete(applicantsTable)
        .where(eq(applicantsTable.id, Number(id)))
        .returning()

    if (result.length === 0) {
        return c.json({ message: 'Applicant not found' }, 404)
    }

    return c.json({
        message: 'Applicant deleted successfully',
        data: result[0]
    })
})

export default handler
