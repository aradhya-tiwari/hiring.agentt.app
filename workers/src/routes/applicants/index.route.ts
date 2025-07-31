import { factApp } from "$lib/util";
import getApplicantsHandler from "./get.handler.js";
import postApplicantsHandler from "./post.handler.js";
import putApplicantsHandler from "./put.handler.js";
import deleteApplicantsHandler from "./delete.handler.js";
import { createFactory } from "hono/factory";
export const applicantsRoute = createFactory().createApp()
    .get("/", ...getApplicantsHandler)
    .post("/", ...postApplicantsHandler)
    .put("/:id", ...putApplicantsHandler)
    .delete("/:id", ...deleteApplicantsHandler)
    .get("/health", async (c) => c.text("working"))
