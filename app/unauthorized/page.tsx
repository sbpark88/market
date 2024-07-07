import Link from "next/link";

export default function Page() {
  return (
    <main className="fixed flex justify-center items-center w-full h-full flex-col gap-4">
      <p className="text-2xl md:text-4xl lg:text-5xl">권한이 없습니다</p>
      <Link
        href="/"
        className="block bg-gray-200 text-gray-700 py-3 px-10 rounded-lg font-semibold text-lg tracking-widest"
      >
        홈으로
      </Link>
    </main>
  );
}
