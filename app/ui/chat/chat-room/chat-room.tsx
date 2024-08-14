import { User } from "@/prisma/generated/prisma-client-js";
import { Chat } from "@/app/lib/definitions";
import { CloseChat } from "@/app/lib/hooks/useChat";
import ChatHeader from "@/app/ui/chat/chat-room/chat-header";
import React, { useCallback, useEffect, useRef } from "react";
import ChatInput from "@/app/ui/chat/chat-room/chat-input";
import ChatMessage from "@/app/ui/chat/chat-room/chat-message";

const HEADER_HEIGHT = "4rem";
const INPUT_HEIGHT = "3rem";

export default function ChatRoom({
  user,
  chat,
  onChat,
  closeChat,
}: {
  user?: User;
  chat?: Chat;
  onChat: boolean;
  closeChat: CloseChat;
}) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatPartner = findPartner(user, chat);
  const latestMessage = chat?.Messages && [...chat.Messages].pop();

  const scrollToBottom = useCallback(
    (behavior: ScrollBehavior = "smooth") => {
      chat &&
        messagesEndRef?.current?.scrollIntoView({
          behavior,
        });
    },
    [chat],
  );

  useEffect(() => {
    scrollToBottom("instant");
  }, [chat]);

  return (
    <div className="box-border w-full h-full">
      <ChatHeader
        chatPartner={chatPartner}
        latestMessage={latestMessage}
        closeChat={closeChat}
        height={HEADER_HEIGHT}
      />
      <div
        className={`flex flex-col gap-8 px-4 pb-4 overflow-auto`}
        style={{
          height: `calc(100% - ${HEADER_HEIGHT} - ${INPUT_HEIGHT})`,
        }}
      >
        {isChatExist(chat) &&
          chat!.Messages.map((Message) => (
            <ChatMessage
              key={Message.id}
              user={user}
              chatPartner={chatPartner}
              message={Message}
            />
          ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput
        user={user}
        chatPartner={chatPartner}
        chat={chat}
        height={INPUT_HEIGHT}
      />
    </div>
  );
}

const findPartner = (me?: User, chat?: Chat): User | undefined => {
  return chat?.Users.find((chatUser) => chatUser.id !== me!.id);
};

const isChatExist = (chat?: Chat): boolean => {
  const messages = chat?.Messages;
  if (messages === undefined) return false;
  return messages.length !== 0;
};
