import NextAuth from "next-auth";
import { z } from "zod";
import { authConfig } from "@/auth.config";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "@auth/core/providers/credentials";
import Google from "@auth/core/providers/google";
import { Role, User } from "@/prisma/generated/prisma-client-js";

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
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          // const user = await getUser(email);
          // if (!user) return null;
          // const passwordsMatch = await bcrypt.compare(password, user.password);
          //
          // if (passwordsMatch) return user;
          let user = null;
          // TODO: Replace this sample user
          user = {
            id: "1",
            name: "J Smith",
            email: "jsmith@example.com",
            // role: Role.ADMIN,
            role: Role.USER,
          };
          return user;
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
    Google,
  ],
});

async function getUser(email: string): Promise<User | undefined> {
  try {
    // const user = await
    return undefined;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
