import clsx from "clsx";

export default function ChatRoom({ onChat }: { onChat: boolean }) {
  return (
    <section
      className={clsx("bg-blue-700 md:block", {
        hidden: !onChat,
      })}
    ></section>
  );
}
