import { udb } from "$lib/db/db";
import { factApp } from "$lib/util";
import { createFactory } from "hono/factory";


const handler = factApp
    .createHandlers(async (c) => {
        const org = ""
        const authUser = c.get("authUser")
        const userRole = authUser.user?.role
        const userOrgs = authUser.user?.orgs
        const db = udb(c, org)

        // TODO: Implement resume screener update logic
        const data = await c.req.json()
        const id = c.req.param("id")
        // TODO: Update data in database
        return c.json({ message: "Resume screener updated", data })
    })

export default handler