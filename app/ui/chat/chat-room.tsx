import clsx from "clsx";
import { CloseChat } from "@/app/lib/hooks/useChat";
import { ChatPartner } from "@/app/lib/definitions";

export default function ChatRoom({
  onChat,
  chatPartner,
  closeChat,
}: {
  onChat: boolean;
  chatPartner?: ChatPartner;
  closeChat: CloseChat;
}) {
  return (
    <section
      className={clsx("bg-blue-700 md:block", {
        hidden: !onChat,
      })}
    ></section>
  );
}
