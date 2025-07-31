// @ts-nocheck
import { Context, TypedResponse } from "hono";
import { StatusCode, RedirectStatusCode } from "hono/utils/http-status";

export const demoC: Context = {
    env: {
        DATABASE_URL_USER: "http://127.0.0.1:8081",
        DATABASE_URL_INTERNAL: "http://127.0.0.1:8080"
    },
    finalized: false,
    error: undefined,
    req: undefined,
    event: undefined,
    executionCtx: undefined,
    res: undefined,
    render: undefined,
    setLayout: undefined,
    getLayout: undefined,
    setRenderer: function (renderer: DefaultRenderer): void {
        throw new Error("Function not implemented.");
    },
    header: undefined,
    status: function (status: StatusCode): void {
        throw new Error("Function not implemented.");
    },
    set: undefined,
    get: undefined,
    var: undefined,
    newResponse: undefined,
    body: undefined,
    text: undefined,
    json: undefined,
    html: undefined,
    redirect: function <T extends RedirectStatusCode = 302>(location: string | URL, status?: T): Response & TypedResponse<undefined, T, "redirect"> {
        throw new Error("Function not implemented.");
    },
    notFound: function (): Response | Promise<Response> {
        throw new Error("Function not implemented.");
    }
}