import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { Category } from "@/app/lib/definitions";
import { GiBoatFishing, GiIsland, GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import React from "react";
import CategoryItem from "@/app/ui/products/category-item";

export default function Categories({
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

const categories: Category[] = [
  {
    label: "디지털기기",
    path: "digital",
    icon: TbBeach,
    description: "디지털기기 카테고리입니다.",
  },
  {
    label: "생활가전",
    path: "appliances",
    icon: GiWindmill,
    description: "생활가전 카테고리입니다.",
  },
  {
    label: "가구/인테리어",
    path: "interior",
    icon: MdOutlineVilla,
    description: "가구/인테리어 카테고리입니다.",
  },
  {
    label: "여성의류",
    path: "women-clothing",
    icon: TbMountain,
    description: "여성의류 카테고리입니다.",
  },
  {
    label: "남성패션/잡화",
    path: "men-fashion",
    icon: TbPool,
    description: "남성패션/잡화 카테고리입니다.",
  },
  {
    label: "뷰티/미용",
    path: "beauty",
    icon: GiIsland,
    description: "뷰티/미용 카테고리입니다.",
  },
  {
    label: "스포츠/레저",
    path: "sports",
    icon: GiBoatFishing,
    description: "스포츠/레저 카테고리입니다.",
  },
  {
    label: "중고차",
    path: "used-car",
    icon: FaSkiing,
    description: "중고차 카테고리입니다.",
  },
];
