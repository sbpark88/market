import NextAuth from "next-auth";
import { z } from "zod";
import { authConfig } from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "@auth/core/providers/credentials";
import Google from "@auth/core/providers/google";
import prisma from "./helpers/prismadb";
import bcrypt from "bcrypt";
import { getUser } from "@/app/lib/auth-actions";

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
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user || typeof user.password !== "string") return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
    Google,
  ],
});
