import { useCallback, useState } from "react";
import { ChatPartner } from "@/app/lib/definitions";

export type OpenChat = (chatPartner: ChatPartner) => void;
export type CloseChat = () => void;

export const useChat = (): [
  ChatPartner | undefined,
  boolean,
  OpenChat,
  CloseChat,
] => {
  const [chatPartner, setChatPartner] = useState<ChatPartner>();
  const [onChat, setOnChat] = useState(false);

  const openChat = useCallback((chatPartner: ChatPartner) => {
    setChatPartner(chatPartner);
    setOnChat(true);
  }, []);
  const closeChat = useCallback(() => {
    setChatPartner(undefined);
    setOnChat(false);
  }, []);

  return [chatPartner, onChat, openChat, closeChat];
};
