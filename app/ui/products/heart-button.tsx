"use client";

import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useFavorite } from "@/app/lib/hooks/useFavorite";
import { getUserInfoFromSession } from "@/app/lib/auth-actions";
import { User } from "@/prisma/generated/prisma-client-js";

export default function HeartButton({
  productId,
  user,
}: {
  productId: string;
  user: User | undefined;
}) {
  const [isFavorite, toggleFavorite] = useFavorite({ productId, user });

  return (
    <div
      onClick={toggleFavorite}
      className="relative cursor-pointer transition hover:opacity-80"
    >
      <AiOutlineHeart
        size="28"
        className="absolute -top-[2px] -left-[2px] fill-white"
      />
      <AiFillHeart
        size="24"
        className={isFavorite ? "fill-rose-500" : "fill-neutral-500/50"}
      />
    </div>
  );
}
