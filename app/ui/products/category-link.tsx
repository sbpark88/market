import { Category } from "@/app/lib/definitions";
import Link from "next/link";
import clsx from "clsx";

export default function CategoryLink({
  category,
  selected,
}: {
  category: Category;
  selected: boolean;
}) {
  const Icon = category.icon;
  return (
    <Link
      href={`?category=${category.path}`}
      className={clsx(
        "flex flex-col items-center gap-2 p-3 border-b-2 transition hover:text-neutral-800 dark:hover:text-neutral-300",
        selected
          ? "border-b-neutral-800 dark:border-b-neutral-300 text-neutral-800 dark:text-neutral-300"
          : "border-transparent text-neutral-500",
      )}
    >
      <Icon className="w-6 h-6 lg:w-7 lg:h-7" />
      <div className="font-medium text-sm">{category.label}</div>
    </Link>
  );
}
