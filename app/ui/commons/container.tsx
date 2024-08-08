import clsx from "clsx";

export default function Container({
  maxWidth,
  children,
}: {
  maxWidth?: string;
  children: React.ReactNode;
}) {
  return (
    <main
      className={clsx(
        "mx-auto sm:px-2 px-4 md:px-10 lg:px-20 py-6",
        maxWidth ? maxWidth : "max-w-[2520px]",
      )}
    >
      {children}
    </main>
  );
}
