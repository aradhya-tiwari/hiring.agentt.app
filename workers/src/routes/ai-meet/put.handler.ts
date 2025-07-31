import { factApp } from '../../lib/util.js'

const handler = factApp.createHandlers(async (c) => {
    const id = c.req.param('id')
    return c.json({ message: `PUT handler for ai-meet with ID: ${id}` })
})

export default handler
