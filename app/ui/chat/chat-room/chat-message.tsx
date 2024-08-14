import { Message, User } from "@/prisma/generated/prisma-client-js";
import Avatar from "@/app/ui/auth/avatar";
import { fromNow } from "@/app/lib/dayjs";
import clsx from "clsx";
import Image from "next/image";

export default function ChatMessage({
  user,
  chatPartner,
  message,
}: {
  user?: User;
  chatPartner?: User;
  message: Message;
}) {
  const isMyMessage = user?.id === message.senderId;

  return (
    <div
      className="grid w-full grid-cols-[40px_1fr] gap-3 mx-auto"
      style={{ direction: isMyMessage ? "rtl" : "ltr" }}
    >
      <div className="self-end">
        <Avatar user={isMyMessage ? user : chatPartner} />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium">
            {isMyMessage ? "나" : chatPartner?.name}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-300 opacity-80">
            {fromNow(message.createdAt)}
          </span>
        </div>
        {message.image && (
          <div className="overflow-hidden rounded-md mx-[0.6rem] max-w-[80%]">
            <Image
              src={message.image}
              alt="message image"
              width={300}
              height={300}
            />
          </div>
        )}
        {message.text && (
          <div
            className={clsx(
              "p-2 break-all text-white rounded-lg max-w-[60%]",
              isMyMessage ? "bg-green-500" : "bg-gray-600",
            )}
          >
            <p>{message.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}
