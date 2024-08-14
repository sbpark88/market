import { CloseChat } from "@/app/lib/hooks/useChat";
import Avatar from "@/app/ui/auth/avatar";
import { IoMdExit } from "react-icons/io";
import { formatDate } from "@/app/lib/dayjs";
import { Message, User } from "@/prisma/generated/prisma-client-js";

export default function ChatHeader({
  chatPartner,
  latestMessage,
  closeChat,
  height,
}: {
  chatPartner?: User;
  latestMessage?: Message;
  closeChat: CloseChat;
  height: string;
}) {
  return (
    <div
      className={`box-border grid grid-cols-[40px_1fr_40px] grid-rows-2 gap-x-3 px-4 py-2 items-center`}
      style={{ height }}
    >
      <div className="row-span-2 grid items-center">
        <Avatar />
      </div>
      <h3 className="col-start-2 col-end-3 row-start-1">{chatPartner?.name}</h3>
      <p className="col-start-2 col-end-3 row-start-2">
        {latestMessage && formatDate(latestMessage.createdAt)}
      </p>
      <IoMdExit
        className="-col-start-1 -col-end-2 row-span-2 text-3xl justify-self-end"
        onClick={closeChat}
      />
    </div>
  );
}
