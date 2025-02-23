"use server";

import { z } from "zod";
import { AuthError } from "next-auth";
import { auth, signIn } from "@/auth";
import { User } from "@/prisma/generated/prisma-client-js";
import prisma from "@/helpers/prismadb";

const AuthFormSchema = z.object({
  name: z
    .string({
      required_error: "Name is required.",
      invalid_type_error: "Name must be a string.",
    })
    .min(3, { message: "Name must be at least 3 characters long." }),
  email: z
    .string({
      required_error: "Email is required.",
      invalid_type_error: "Email must be a string.",
    })
    .email({ message: "Invalid email address." }),

  password: z
    .string({
      required_error: "Password is required.",
      invalid_type_error: "Password must be a string.",
    })
    .min(6, { message: "Password must be at least 6 characters long." }),
});

const SignInSchema = AuthFormSchema.omit({ name: true });

export async function signInAction(formData: FormData) {
  try {
    const validatedFields = SignInSchema.safeParse(formData);

    if (!validatedFields.success) {
      return {
        message: "Check your email/password.",
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    await signIn("credentials", validatedFields.data);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            message: "Invalid credentials.",
          };
        default:
          return {
            message: "Something went wrong.",
          };
      }
    }
    throw error;
  }
}

export async function getUser(email: string): Promise<User | undefined> {
  try {
    return await prisma.user.findUnique({
      where: { email },
    });
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function getUserInfoFromSession(): Promise<User | undefined> {
  try {
    const session = await auth();
    if (!session?.user.email) return undefined;
    return await getUser(session.user.email);
  } catch (error) {
    return undefined;
  }
}
