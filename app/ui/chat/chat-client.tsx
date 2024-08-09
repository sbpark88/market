"use client";

import { User } from "@/prisma/generated/prisma-client-js";
import ChatList from "@/app/ui/chat/chat-list";
import ChatRoom from "@/app/ui/chat/chat-room";
import { useState } from "react";

type ConversationPartner = {
  id: string;
  name: string;
  image?: string;
};

export default function ChatClient({ user }: { user?: User }) {
  const [conversationPartner, setConversationPartner] = useState<
    ConversationPartner | undefined
  >();

  const [onChat, setOnChat] = useState(false);

  return (
    <>
      <ChatList onChat={onChat} />
      <ChatRoom onChat={onChat} />
    </>
  );
}
