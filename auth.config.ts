import type { NextAuthConfig } from "next-auth";
import { randomUUID, randomBytes } from "crypto"; // node:crypto 에서 가져오지 않도록 유의한다.

const ONE_DAY = 24 * 60 * 60;
const THIRTY_DAYS = 30 * ONE_DAY;

// https://authjs.dev/reference/nextjs#nextauthconfig
export const authConfig = {
  // https://authjs.dev/reference/nextjs#pages
  // pages: {
  //   signIn: "/login",
  // },
  // https://authjs.dev/reference/nextjs#callbacks
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },
  // https://authjs.dev/reference/nextjs#providers
  providers: [],
  session: {
    strategy: "jwt",
    maxAge: THIRTY_DAYS,
    updateAge: ONE_DAY,
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(23).toString("hex");
    },
  },
  jwt: {
    maxAge: THIRTY_DAYS,
  },
} satisfies NextAuthConfig;
