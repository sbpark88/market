"use client";

import { User } from "@/prisma/generated/prisma-client-js";
import ChatListContainer from "@/app/ui/chat/chat-list/container";
import ChatRoomContainer from "@/app/ui/chat/chat-room/container";
import axios from "axios";
import useSWR from "swr";
import { useChat } from "@/app/lib/hooks/useChat";
import { toast } from "react-toastify";
import { Chat } from "@/app/lib/definitions";
import ChatList from "@/app/ui/chat/chat-list/chat-list";
import ChatRoom from "@/app/ui/chat/chat-room/chat-room";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ChatClient({ user }: { user?: User }) {
  const [chat, onChat, setChat, openChat, closeChat] = useChat();
  const searchParams = useSearchParams();

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const {
    data: chatList,
    error,
    isLoading,
  } = useSWR<Chat[]>(`/api/chat`, fetcher, {
    refreshInterval: 1000,
  });

  if (error) {
    toast.error("연결이 원활하지 않습니다.", {
      position: "bottom-center",
      hideProgressBar: true,
      autoClose: 2000,
    });
  }

  useEffect(() => {
    const chatId = searchParams.get("id");
    if (!chatId) return;

    const activatedChat = chatList?.find((chat) => chat.id === chatId);
    if (activatedChat) openChat(activatedChat);
  }, []);

  useEffect(() => {
    const chatId = searchParams.get("id");
    if (!chatId) return;

    const activatedChat = chatList?.find((chat) => chat.id === chatId);
    if (activatedChat) {
      setChat(activatedChat);
    }
  }, [chatList]);

  return (
    <>
      <ChatListContainer onChat={onChat}>
        <ChatList user={user} chatList={chatList} openChat={openChat} />
      </ChatListContainer>
      <ChatRoomContainer onChat={onChat}>
        <ChatRoom
          user={user}
          chat={chat}
          onChat={onChat}
          closeChat={closeChat}
        />
      </ChatRoomContainer>
    </>
  );
}
