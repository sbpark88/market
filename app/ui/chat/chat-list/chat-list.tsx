import { User } from "@/prisma/generated/prisma-client-js";
import { Chat } from "@/app/lib/definitions";
import { OpenChat } from "@/app/lib/hooks/useChat";
import Avatar from "@/app/ui/auth/avatar";
import dayjs from "@/app/lib/dayjs";

export default function ChatList({
  user,
  chatList,
  openChat,
}: {
  user?: User;
  chatList?: Chat[];
  openChat: OpenChat;
}) {
  return (
    <aside className="w-full h-full overflow-auto">
      <h1 className="m-4 text-2xl font-semibold">Chat</h1>
      <hr />
      <div className="flex flex-col">
        {chatList
          ?.map(findPartner.bind(null, user))
          .map(([chat, partner]) => (
            <ChatListItem
              key={chat.id}
              openChat={openChat}
              chat={chat}
              partner={partner}
            />
          ))}
      </div>
    </aside>
  );
}

const findPartner = (me?: User, chat?: Chat): [Chat, User] => {
  const partner = chat!.Users.find(
    (chatUser) => chatUser.id !== me!.id,
  ) as User;

  return [chat!, partner];
};

function ChatListItem({
  openChat,
  chat,
  partner,
}: {
  openChat: OpenChat;
  chat: Chat;
  partner: User;
}) {
  const latestMessage = [...chat.Messages].pop();

  return (
    <div
      onClick={() => openChat(chat)}
      className="grid grid-cols-[40px_1fr_50px] grid-rows-[40px] gap-3 py-3 px-4 border-b cursor-pointer hover:bg-orange-500"
    >
      <Avatar user={partner} />
      <div className="overflow-hidden">
        <h3>{partner.name}</h3>
        {latestMessage && (
          <p className="overflow-hidden text-base font-medium leading-none">
            {getTextFirstLine(latestMessage.text)}
          </p>
        )}
        {latestMessage && latestMessage.image && (
          <p className="text-xs font-medium text-gray-500 dark:text-gray-300">
            [이미지]
          </p>
        )}
      </div>
      <div className="flex justify-end items-center text-xs text-gray-500 dark:text-gray-300">
        {latestMessage && <p>{dayjs(latestMessage.createdAt).fromNow()}</p>}
      </div>
    </div>
  );
}

const getTextFirstLine = (text: string | null) =>
  text ? text.split("\n")[0] : "";
