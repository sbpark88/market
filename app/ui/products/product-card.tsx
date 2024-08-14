"use client";

import { Product, User } from "@/prisma/generated/prisma-client-js";
import Image from "next/image";
import HeartButton from "@/app/ui/products/heart-button";
import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { fromNow } from "@/app/lib/dayjs";

export default function ProductCard({
  product,
  user,
}: {
  product: Product;
  user: User | undefined;
}) {
  const router = useRouter();

  const viewDetail = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      router.push(`/products/${product.id}`);
    },
    [router, product.id],
  );

  return (
    <article className="cursor-pointer" onClick={viewDetail}>
      <div className="flex flex-col w-full gap-2">
        <CardImage {...product} user={user} />
        <CardInfo {...product} />
      </div>
    </article>
  );
}

function CardImage({
  id,
  imageSrc,
  title,
  user,
}: {
  id: string;
  imageSrc: string;
  title: string;
  user: User | undefined;
}) {
  return (
    <div className="relative w-full overflow-hidden aspect-square rounded-xl">
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="auto"
        className="w-full h-full transition hover:scale-110"
      />
      <div className="absolute top-3 right-3">
        <HeartButton productId={id} user={user} />
      </div>
    </div>
  );
}

function CardInfo({
  title,
  category,
  price,
  createdAt,
}: {
  title: string;
  category: string;
  price: number;
  createdAt: Date;
}) {
  return (
    <>
      <p className="text-lg font-semibold">{title}</p>
      <p className="font-light text-neutral-500 dark:text-neutral-300">
        {category}
      </p>
      <div className="flex justify-between">
        <p className="font-semibold">
          {price}
          <span className="font-semibold">원</span>
        </p>
        <p>{fromNow(createdAt)}</p>
      </div>
    </>
  );
}
