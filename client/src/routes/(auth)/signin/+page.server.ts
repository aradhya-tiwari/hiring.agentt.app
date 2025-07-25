import { signIn } from "$lib/authjs"
import type { Actions } from "./$types"
export const actions: Actions = { default: signIn }