import { factApp } from "$lib/util.js"
import getHandler from "./get.handler"
import postHandler from "./post.handler"
import putHandler from "./put.handler"
import deleteHandler from "./delete.handler"
import { createFactory } from "hono/factory"


export const customInterviewRoute = createFactory().createApp()
    .get("/", ...getHandler)
    .post("/", ...postHandler)
    .put("/:id", ...putHandler)
    .delete("/:id", ...deleteHandler)
