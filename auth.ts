import NextAuth, { type DefaultSession } from "next-auth";
import { authConfig } from "@/auth.config";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "@auth/core/providers/credentials";
import Google from "@auth/core/providers/google";

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string;
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"];
  }
}

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "your email account",
      credentials: {
        email: {
          label: "Username",
          placeholder: "email 계정",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "비밀번호",
        },
      },
      authorize: async (credentials) => {
        let user = null;
        // TODO: Replace this sample user
        user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        return user;
      },
    }),
    Google,
  ],
});
