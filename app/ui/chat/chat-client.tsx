"use client";

import { User } from "@/prisma/generated/prisma-client-js";
import ChatList from "@/app/ui/chat/chat-list";
import ChatRoom from "@/app/ui/chat/chat-room";
import { useEffect } from "react";
import axios from "axios";
import { useChat } from "@/app/lib/hooks/useChat";
import { toast } from "react-toastify";

export default function ChatClient({ user }: { user?: User }) {
  const [chatPartner, onChat, openChat, closeChat] = useChat();

  useEffect(() => {
    axios
      .get(`/api/chat`)
      .then((res) => {
        console.log(res, res.data);
      })
      .catch((error) => {
        console.error(error);
        toast.error("잠시 후 다시 시도해주세요.", {
          position: "bottom-center",
          hideProgressBar: true,
          autoClose: 2000,
        });
      });
  }, []);

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
