import { Dispatch, useCallback, useState } from "react";
import { Chat } from "@/app/lib/definitions";
import { useRouter } from "next/navigation";

export type OpenChat = (chat: Chat) => void;
export type CloseChat = () => void;
export type UpdateChat = Dispatch<Chat>;

export const useChat = (): [
  Chat | undefined,
  boolean,
  UpdateChat,
  OpenChat,
  CloseChat,
] => {
  const [chat, setChat] = useState<Chat>();
  const [onChat, setOnChat] = useState(false);
  const router = useRouter();

  const openChat = useCallback((chat: Chat) => {
    setChat(chat);
    setOnChat(true);
    router.replace(`/chat?id=${chat.id}`);
  }, []);
  const closeChat = useCallback(() => {
    setChat(undefined);
    setOnChat(false);
    router.replace(`/chat`);
  }, []);

  return [chat, onChat, setChat, openChat, closeChat];
};
