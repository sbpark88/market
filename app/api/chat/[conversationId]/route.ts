import { auth } from "@/auth";
import { Message } from "@/prisma/generated/prisma-client-js";

export async function POST(
  request: Request,
  { params }: { params: { conversationId: string } },
) {
  const conversationId = params.conversationId;
  const session = await auth();
  if (!session?.user) return Response.error();

  const body: Message = await request.json();
  const { text, image, senderId, receiverId } = body;

  try {
    const message = await prisma?.message.create({
      data: {
        conversationId,
        text,
        image,
        senderId,
        receiverId,
      },
    });
    return Response.json(message);
  } catch (error) {
    return Response.error();
  }
}
