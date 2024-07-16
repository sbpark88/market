"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Page({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const searchParams = useSearchParams();
  useEffect(() => {
    // Optionally log the error to an error reporting service
  }, [searchParams]);

  return (
    <main className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-center">
      <h2 className="text-center">인증 실패</h2>
      <Link
        href="/auth/login"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        다시 로그인 하기
      </Link>
    </main>
  );
}
