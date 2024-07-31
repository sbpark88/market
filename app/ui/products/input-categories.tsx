import React from "react";
import CategoryItem from "@/app/ui/products/category-item";
import { categories } from "@/app/lib/data";

export default function InputCategories({
  category: selectedCategory,
  setCategory,
}: {
  category: unknown;
  setCategory: (value: string) => void;
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
      {categories.map((category) => (
        <CategoryItem
          key={category.label}
          category={category}
          setCategory={setCategory}
          selected={selectedCategory === category.path}
        />
      ))}
    </section>
  );
}
