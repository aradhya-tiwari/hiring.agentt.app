import { Hono } from "hono";
import getHandler from "./get.handler.js"
import getTokenHandler from "./getToken.post.handler.js"
import putHandler from "./put.handler.js"
import deleteHandler from "./delete.handler.js"
import { createFactory } from "hono/factory";

export let aiMeetRoute = new Hono()
    .get("/", ...getHandler)
    .post("/getToken", ...getTokenHandler)
    .put("/:id", ...putHandler)
    .delete("/:id", ...deleteHandler)
