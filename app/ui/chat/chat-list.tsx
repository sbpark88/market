import clsx from "clsx";
import { OpenChat } from "@/app/lib/hooks/useChat";

export default function ChatList({
  onChat,
  openChat,
}: {
  onChat: boolean;
  openChat: OpenChat;
}) {
  return (
    <section
      className={clsx("bg-amber-300 md:block", {
        hidden: onChat,
      })}
    ></section>
  );
}
