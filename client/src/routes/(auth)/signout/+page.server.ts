import { signOut } from "$lib/authjs"
import type { Actions } from "./$types"
export const actions: Actions = { default: signOut }