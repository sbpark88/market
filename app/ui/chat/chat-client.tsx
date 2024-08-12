"use client";

import { User } from "@/prisma/generated/prisma-client-js";
import ChatList from "@/app/ui/chat/chat-list";
import ChatRoom from "@/app/ui/chat/chat-room";
import axios from "axios";
import useSWR from "swr";
import { useChat } from "@/app/lib/hooks/useChat";
import { toast } from "react-toastify";
import { Chat } from "@/app/lib/definitions";

export default function ChatClient({ user }: { user?: User }) {
  const [chatPartner, onChat, openChat, closeChat] = useChat();

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR<Chat>(`/api/chat`, fetcher, {
    refreshInterval: 1000,
  });

  if (error) {
    toast.error("연결이 원활하지 않습니다.", {
      position: "bottom-center",
      hideProgressBar: true,
      autoClose: 2000,
    });
  }

  return (
    <>
      <ChatList onChat={onChat} openChat={openChat} />
      <ChatRoom
        onChat={onChat}
        chatPartner={chatPartner}
        closeChat={closeChat}
      />
    </>
  );
}
