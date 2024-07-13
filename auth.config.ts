/*
 * auth.config.ts 를 auth.ts 와 middleware.ts 에서 공유한다.
 * */

import { NextAuthConfig } from "next-auth";
import { randomUUID, randomBytes } from "crypto";
import { Role } from "@/prisma/generated/prisma-client-js";

const ONE_DAY = 24 * 60 * 60;
const THIRTY_DAYS = 30 * ONE_DAY;
const ERROR_PAGES = ["/unauthorized"];

// https://authjs.dev/reference/nextjs#nextauthconfig
export const authConfig = {
  // https://authjs.dev/reference/nextjs#pages
  pages: {
    signIn: "/auth/login",
  },
  // https://authjs.dev/reference/nextjs#callbacks
  callbacks: {
    // authorized({ auth, request: { nextUrl } }) {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const role = auth?.user.role;

      const { nextUrl } = request;
      const { pathname } = nextUrl;
      const isOnAdmin = pathname.startsWith("/admin");
      const isOnUser = pathname.startsWith("/user");
      const isOnErrorPages = ERROR_PAGES.find((page) =>
        pathname.startsWith(page),
      );

      // 에러 페이지를 먼저 처리
      // 여기서 처리하지 않으면 로그인 된 상태일 경우 리디렉션 후 'else if (isLoggedIn)'를 타게 된다.
      if (isOnErrorPages) {
        return true;
      }

      // 인가된 사용자만 접속할 페이지
      if (isOnAdmin) {
        if (!isLoggedIn) return false;
        if (role === Role.USER) {
          return Response.redirect(new URL("/unauthorized", nextUrl));
        }
        return true;
      } else if (isOnUser) {
        return isLoggedIn;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/user", nextUrl));
      }

      // 그 외 페이지는 인증 및 인가 여부 없이 모두 접속 가능.
      return true;
    },
    jwt({ token, user }) {
      // user 는 최초 로그인 시에만 데이터를 얻을 수 있다
      return {
        ...token,
        ...user, // token 에 role 과 같은 DB User 정보를 추가한다.
      };
    },
    session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          ...token, // token 에 추가된 DB User 의 정보(role 등)를 추가한다.
        },
      };
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
  debug: process.env.NODE_ENV !== "production", // why not work??
} satisfies NextAuthConfig;
