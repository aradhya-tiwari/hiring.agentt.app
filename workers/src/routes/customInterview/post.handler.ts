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

        // Parse request body
        const body = await c.req.json()

        // Insert new custom interview config into database
        const result = await db.insert(customScreenConfigTable).values({
            jobId: body.jobId,
            processId: body.processId,
            prompt: body.prompt,
            notes: body.notes,
            meetID: body.meetID,
            status: body.status || 'created'
        }).returning()

        return c.json({
            message: 'Custom interview created successfully',
            data: result[0]
        })
    })

export default handler