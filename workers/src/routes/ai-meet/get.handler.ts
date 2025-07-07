import { createFactory } from "hono/factory";

let handler = createFactory().createHandlers(async (c) => {

    // fetch meeting details like system Propmt date and time etc

    // Send back the JSON we received from the OpenAI REST API

    let data = {
        dateTime: new Date("2024-06-06"),
        systemPrompt: "A long System Prompt",
    }
    return c.json({ data: data })
})

export default handler