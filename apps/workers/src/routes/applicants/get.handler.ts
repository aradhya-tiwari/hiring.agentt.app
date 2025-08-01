import { factApp } from "$lib/util";
import { udb } from "$lib/db/db";
import { createFactory } from "hono/factory";
import { DBQueryConfig, SQL, sql } from "drizzle-orm"
import { queryBuilder } from "./utils/queryBuilder"


const handler = factApp
    .createHandlers(async (c) => {


        const org = ""
        const authUser = c.get("authUser")
        const userRole = authUser.user?.role
        const userOrgs = authUser.user?.orgs
        const db = udb(c, org)
        // TODO ops like check permission (user belong to org and have enough perm),

        // TODO query builder 
        let query = c.req.query()
        // let query={}
        let queryConfig: DBQueryConfig = {}

        // console.log(query)


        if (queryBuilder(query)) {
            console.log("-------->", queryBuilder(query))
            queryConfig = {
                where: queryBuilder(query)
            }
        } else {
            queryConfig = {}
        }

        let res = await db.query.applicantsTable.findMany(queryConfig).prepare().execute()
        return c.json({ data: res })

    })

export default handler