import { createFactory } from 'hono/factory'
const handler = createFactory().createHandlers(async (c) => {
    const id = c.req.param('id')
    return c.json({ message: `DELETE handler for ai-meet with ID: ${id}` })
})

export default handler
