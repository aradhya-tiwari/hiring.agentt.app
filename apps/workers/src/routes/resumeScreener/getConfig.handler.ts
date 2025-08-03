import { udb } from "$lib/db/db";
import { factApp } from "$lib/util";
import { createFactory } from "hono/factory";


const handler = factApp
    .createHandlers(async (c, next) => {
        await next()
    }, async (c) => {
        const org = ""
        const authUser = c.get("authUser")
        const userRole = authUser.user?.role
        const userOrgs = authUser.user?.orgs
        const db = udb(c, org)

        // TODO: Implement resume screener get logic
        let res = await db.query.resumeScreenConfigTable.findMany().prepare().execute()

        return c.json({ data: res })
    })

export default handler