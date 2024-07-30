"use client";

import usePagination from "@lucasmogari/react-pagination";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";
import type { Page } from "@lucasmogari/react-pagination/dist/src/types";

export default function Pagination({
  page,
  totalItems,
  itemsPerPage,
}: {
  page: number;
  totalItems: number;
  itemsPerPage: number;
}) {
  const { currentPage, getPageItem, size, totalPages } = usePagination({
    page,
    totalItems,
    itemsPerPage,
    maxPageItems: 3,
  });
  const searchParams = useSearchParams();

  return (
    <ul className="flex justify-center">
      {Array.from({ length: size }).map((_, i) => {
        const { page, current } = getPageItem(i);
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", getPageValue({ page, currentPage, totalPages }));
        const href = `?${params.toString()}`;
        const Icon = getPageIcon(page);

        return <PageItem key={i} href={href} current={current} Icon={Icon} />;
      })}
    </ul>
  );
}

function PageItem({
  href,
  current,
  Icon,
}: {
  href: string;
  current?: boolean;
  Icon: string;
}) {
  return (
    <li className="mt-6 mb-4">
      <Link
        href={href}
        className={clsx("mx-2", current ? "font-bold" : "text-neutral-400")}
      >
        {Icon}
      </Link>
    </li>
  );
}

const getPageValue = ({
  page,
  currentPage = 0,
  totalPages,
}: {
  page: Page;
  currentPage?: number;
  totalPages: number;
}) => {
  if (typeof page !== "string") return page;
  switch (page) {
    case "previous":
      return Math.max(1, currentPage - 1);
    case "next":
      return Math.min(totalPages, currentPage + 1);
    case "gap":
    default:
      return page;
  }
};

const getPageIcon = (page: Page) => {
  switch (page) {
    case "previous":
      return "<";
    case "next":
      return ">";
    case "gap":
      return "...";
    default:
      return page;
  }
};
