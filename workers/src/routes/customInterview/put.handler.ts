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
        const id = c.req.param("id")

        // Update custom interview config in database
        const result = await db.update(customScreenConfigTable)
            .set({
                jobId: body.jobId,
                processId: body.processId,
                prompt: body.prompt,
                notes: body.notes,
                meetID: body.meetID,
                status: body.status
            })
            .where(eq(customScreenConfigTable.id, Number(id)))
            .returning()

        if (result.length === 0) {
            return c.json({ message: 'Custom interview not found' }, 404)
        }

        return c.json({
            message: 'Custom interview updated successfully',
            data: result[0]
        })
    })

export default handler