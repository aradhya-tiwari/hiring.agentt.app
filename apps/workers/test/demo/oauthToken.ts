import { authHandler, initAuthConfig, verifyAuth } from "@hono/auth-js"
import { Hono } from "hono"
import "dotenv/config"
const app = new Hono({ strict: false })
    .use(
        '*',
        initAuthConfig((c) => ({
            secret: process.env.AUTHJS_TOKEN_SECRET,
            providers: [
            ],
        }))
    )
    .use("*", verifyAuth())
    .use('/api/auth/*', authHandler())
    .get('/', (c) => {
        return c.text('Hello from AuthJS Middleware!')
    })
export default app 