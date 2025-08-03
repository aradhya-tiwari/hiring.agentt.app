import { factApp } from "$lib/util";
import { createMiddleware } from "hono/factory";

export const authjs = factApp.createMiddleware(async (c, next) => {
    let authUser = c.get("authUser")
    let orgSlug = c.req.param("orgSlug")
    let userId = parseInt(authUser.user?.dbId)
    if (orgSlug)
        c.set("orgSlug", orgSlug)
    if (userId)
        c.set("userId", userId)

    // TODO check if user org matches "authUser" .org
    if (authUser.session)
        await next()



})