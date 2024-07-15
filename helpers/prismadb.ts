// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "@/prisma/generated/prisma-client-js";

declare global {
  let prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
