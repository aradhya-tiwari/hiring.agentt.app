import type { DefaultSession, User } from "@auth/sveltekit";
import type { JWT as AuthJWT } from "@auth/core/jwt";

declare module "@auth/sveltekit" {
    interface Session {
        user: {
            userId: number;
            role: string;
            orgs: Number[]
        } & DefaultSession["user"];
    }

    interface User {
        userId: number;
        role: string;
        orgs: Number[]
    }
}

declare module "@auth/core/jwt" {
    interface JWT extends AuthJWT {
        userId: number;
        role: string;
        orgs: Number[]
    }
}
