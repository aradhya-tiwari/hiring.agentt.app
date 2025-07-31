import { createFactory } from "hono/factory";
import { Env } from "./Bindings";

export const factApp = createFactory<Env>()