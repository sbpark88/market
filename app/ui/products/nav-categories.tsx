import { categories } from "@/app/lib/data";
import CategoryLink from "@/app/ui/products/category-link";

export default function NavCategories({
  selectedCategory,
}: {
  selectedCategory?: string;
}) {
  return (
    <div className="max-w-[1000px] inset-x-0 mx-auto">
      <div className="grid grid-cols-4 lg:grid-cols-8">
        {categories.map((category) => (
          <CategoryLink
            key={category.label}
            category={category}
            selected={selectedCategory === category.path}
          />
        ))}
      </div>
    </div>
  );
}
