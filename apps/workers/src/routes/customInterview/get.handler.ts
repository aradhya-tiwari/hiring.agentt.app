import { udb } from "$lib/db/db";
import { factApp } from "$lib/util";
import { customScreenConfigTable } from "$lib/db/schema/schema.org";
import { eq } from "drizzle-orm";

const handler = factApp
    .createHandlers(async (c) => {
        const org = c.req.param("orgId") as string
        const authUser = c.get("authUser")
        const userRole = authUser.user?.role
        const db = udb(c, org)
        const jobId = c.req.param("jobId")
        // Get all custom interview configs from database
        let res = await db.select().from(customScreenConfigTable).where(eq(customScreenConfigTable.jobId, Number(jobId)))

        return c.json({ data: res })
    })

export default handler