import Link from "next/link";

export default function FloatingButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="fixed right-5 bottom-5 text-3xl w-14 aspect-square rounded-full border-none shadow-xl cursor-pointer
      flex justify-center items-center bg-orange-400 transition-colors hover:bg-orange-500"
    >
      {children}
    </Link>
  );
}
