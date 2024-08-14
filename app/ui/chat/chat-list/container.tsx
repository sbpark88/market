import clsx from "clsx";

export default function ChatListContainer({
  onChat,
  children,
}: {
  onChat: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={clsx("relative h-[calc(100dvh-3.5rem)] md:block border-r", {
        hidden: onChat,
      })}
    >
      {children}
    </section>
  );
}
