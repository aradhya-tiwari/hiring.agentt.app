import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { aiMeetRoute } from './routes/ai-meet/index.route.js'
import "dotenv/config"
const app = new Hono()
  .get('/', (c) => {
    return c.text('Hello From Hire 45!')
  })
  .route("/ai-meet", aiMeetRoute)

// serve({
//   fetch: app.fetch,
//   port: 3000
// }, (info) => {
//   console.log(`Server is running on port ${info.port}`)
// })
export default app
export type AppType = typeof app