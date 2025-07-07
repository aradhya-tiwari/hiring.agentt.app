import { getAllCandidates, addCandidate } from "$lib/services/candidate/candidate.repository";
import { Hono } from "hono";
import "dotenv/config"
let app = new Hono()
    .get("/", async (c) => {
        console.log(c.env)
        // let res = await addCandidate(c)
        // console.log(res)
        let res = await (getAllCandidates(c))
        // console.log(res)
        return c.json(res)
    })

export default app