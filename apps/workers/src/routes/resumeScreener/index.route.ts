import { Hono } from 'hono'
import getConfigHandler from "./getConfig.handler"
import addConfigHandler from "./addConfig.handler"
import putHandler from "./put.handler"
import deleteHandler from "./delete.handler"
import { createFactory } from 'hono/factory'

export const resumeScreenerRoute = createFactory().createApp()
    .get("/config", ...getConfigHandler)
    .post("/config", ...addConfigHandler)
    .put("/:id", ...putHandler)
    .delete("/:id", ...deleteHandler)
