import { udb } from "$lib/db/db";
import { factApp } from "$lib/util";
import { resumeScreenConfigTable } from "$lib/db/schema/schema.org";
import { eq } from "drizzle-orm";

const handler = factApp
    .createHandlers(async (c) => {
        const org = c.req.param("orgId") as string
        const authUser = c.get("authUser")
        const userRole = authUser.user?.role
        const db = udb(c, org)

        const resumeConfigId = c.req.param("resumeConfigId")

        // Delete resume screener config from database
        const result = await db.delete(resumeScreenConfigTable)
            .where(eq(resumeScreenConfigTable.id, Number(resumeConfigId)))
            .returning()

        if (result.length === 0) {
            return c.json({ message: 'Resume screener config not found' }, 404)
        }

        return c.json({
            message: 'Resume screener config deleted successfully',
            data: result[0]
        })
    })

export default handler