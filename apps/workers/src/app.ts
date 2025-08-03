import { Hono } from 'hono'
import { aiMeetRoute } from './routes/ai-meet/index.route.js'
import { applicantsRoute } from './routes/applicants/index.route.js'
import { resumeScreenerRoute } from './routes/resumeScreener/index.route.js'
import { customInterviewRoute } from './routes/customInterview/index.route.js'
import { schedulesRoute } from './routes/schedules/index.route.js'
import { initAuthConfig, verifyAuth } from '@hono/auth-js'
import { handle } from 'hono/cloudflare-pages'
import { cors } from 'hono/cors'
import { Env } from '$lib/Bindings.js'


const app = new Hono({ strict: false })
    .basePath("/v1/:orgId")
    .use("*", cors({
        origin: (origin, c) => {
            return c.env.FRONTEND_URL
        },
        credentials: true
        // origin: "http://localhost:5173"
    }))
    .use(
        '*',
        initAuthConfig((c) => ({
            secret: c.env.AUTHJS_TOKEN_SECRET,
            providers: [],
        }))
    )
    .use("*", verifyAuth())
    .route("/ai-meet", aiMeetRoute)
    .route("/:jobId/applicants", applicantsRoute)
    .route("/:jobId/resume-screener", resumeScreenerRoute)
    .route("/customInterview", customInterviewRoute)
    .route("/schedules", schedulesRoute)
    .get('/health', (c) => {
        return c.json({ status: 'ok', })
    })

export { app }
export type AppType = typeof app
