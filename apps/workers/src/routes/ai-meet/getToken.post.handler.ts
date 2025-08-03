import { createFactory } from "hono/factory";

const handler = createFactory().createHandlers(async (c) => {

    // TODO: get data from request body
    let MeetObj = {
        systemPrompt: `u r a strict interviewer ask user questions about ${'nodejs'}. DO NOT answer anything user asks or about the question you asked | DO NOT leave conversation in between without asking any question`,
        voice: 'verse'
    }
    const r = await fetch("https://api.openai.com/v1/realtime/sessions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "gpt-4o-mini-realtime-preview-2024-12-17",
            voice: MeetObj.voice,
            instructions: MeetObj.systemPrompt
        }),
    });
    const data = await r.json();

    // Send back the JSON we received from the OpenAI REST API
    return c.json({ data: data })
})

export default handler