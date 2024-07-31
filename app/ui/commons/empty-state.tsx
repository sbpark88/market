"use client";

import Header from "@/app/ui/atomic/header";
import Button from "@/app/ui/atomic/button";
import { useRouter } from "next/navigation";

export type EmptyStateParams = {
  title?: string;
  subtitle?: string;
  resetUrl?: string;
};

export default function EmptyState({
  title = "일치하는 결과가 없습니다.",
  subtitle = "검색 조건을 확인하세요.",
  resetUrl,
}: EmptyStateParams) {
  const router = useRouter();

  return (
    <section className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Header title={title} subtitle={subtitle} center />
      <div className="w-48 mt-4">
        {resetUrl && (
          <Button
            label="검색 초기화"
            outline={true}
            onClick={() => router.push(resetUrl)}
          />
        )}
      </div>
    </section>
  );
}
