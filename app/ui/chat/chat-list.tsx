import clsx from "clsx";

export default function ChatList({ onChat }: { onChat: boolean }) {
  return (
    <section
      className={clsx("bg-amber-300 md:block", {
        hidden: onChat,
      })}
    ></section>
  );
}
