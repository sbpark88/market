import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.error();

  const user = await prisma?.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      Conversation: true,
    },
  });
  const conversationIds = user?.Conversation.map((conv) => conv.id);
  if (!conversationIds) return NextResponse.json(null);

  const conversations = await prisma?.conversation.findMany({
    where: {
      id: {
        in: conversationIds,
      },
    },
    include: {
      users: true,
      messages: true,
    },
  });
  return NextResponse.json(conversations);
}
