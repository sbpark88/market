import { auth } from "@/auth";

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user) return Response.error();

  const user = await prisma?.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      Conversations: true,
    },
  });
  const conversationIds = user?.Conversations.map((conv) => conv.id);
  if (!conversationIds) return Response.json(null);

  const conversations = await prisma?.conversation.findMany({
    where: {
      id: {
        in: conversationIds,
      },
    },
    include: {
      Users: true,
      Messages: true,
    },
  });
  return Response.json(conversations);
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) return Response.error();

  const body = await request.json();
  const partnerId = body.partnerId;

  let conversation = await prisma?.conversation.findFirst({
    where: {
      AND: [
        {
          Users: {
            some: {
              id: session.user.id,
            },
          },
        },
        {
          Users: {
            some: {
              id: partnerId,
            },
          },
        },
      ],
    },
  });

  if (!conversation) {
    try {
      const myId = session.user.id;
      conversation = await prisma?.conversation.create({
        data: {
          userIds: [myId, partnerId],
          Users: {
            connect: [
              {
                id: myId,
              },
              {
                id: partnerId,
              },
            ],
          },
        },
      });
    } catch (error) {
      return Response.error();
    }
  }

  if (conversation) {
    return Response.json({
      chatUrl: `/chat?id=${conversation.id}`,
    });
  } else {
    return Response.error();
  }
}
