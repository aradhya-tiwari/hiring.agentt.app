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

        const id = c.req.param("id")

        // Delete custom interview config from database
        const result = await db.delete(customScreenConfigTable)
            .where(eq(customScreenConfigTable.id, Number(id)))
            .returning()

        if (result.length === 0) {
            return c.json({ message: 'Custom interview not found' }, 404)
        }

        return c.json({
            message: 'Custom interview deleted successfully',
            data: result[0]
        })
    })

export default handler