import { Category } from "@/app/lib/definitions";
import clsx from "clsx";

export default function CategoryItem({
  category,
  setCategory,
  selected,
}: {
  category: Category;
  setCategory: (value: string) => void;
  selected: boolean;
}) {
  const Icon = category.icon;

  return (
    <div
      onClick={() => setCategory(category.path)}
      className={clsx(
        "border-2 rounded-xl p-4 transition hover:border-orange-400 cursor-pointer",
        selected ? "border-orange-500" : "border-neutral-200",
      )}
    >
      <Icon size="30" className="mb-3" />
      <div className="font-semibold">{category.label}</div>
    </div>
  );
}
