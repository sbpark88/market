import clsx from "clsx";

export default function ChatRoomContainer({
  onChat,
  children,
}: {
  onChat: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden">
      <section
        className={clsx(
          "relative h-[calc(100dvh-3.5rem)] md:block transform transition",
          onChat ? "translate-x-0" : "translate-x-full",
        )}
      >
        {children}
      </section>
    </div>
  );
}
