import { SvelteKitAuth, type SvelteKitAuthConfig } from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, AUTHJS_TOKEN_SECRET } from "$env/static/private"
import { userMedia } from "./ai-meet/stores/userMedia.svelte"

export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
    const authOptions: SvelteKitAuthConfig = {
        providers: [
            GitHub({
                clientId: GITHUB_CLIENT_ID,
                clientSecret: GITHUB_CLIENT_SECRET
            })
        ],

        secret: AUTHJS_TOKEN_SECRET,
        trustHost: true,
        callbacks: {
            async signIn({ user, account, }) {

                // TODO get this data from database
                user.userId = 6969
                user.role = "admin"
                user.orgs = [1, 3]
                return true
            },

            async jwt({ token, account, profile, user }) {
                // The user object is only passed on the first call after a
                // successful sign-in.
                if (user) {
                    token.userId = user.userId;
                    token.role = user.role;
                }
                return token;
            },
            async session({ session, token }) {
                session.user.userId = token.userId;
                session.user.role = token.role;
                return session;
            }
        }
    }
    return authOptions
})