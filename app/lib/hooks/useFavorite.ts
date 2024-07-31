import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import axios from "axios";
import type { User } from "@/prisma/generated/prisma-client-js";
import { toast } from "react-toastify";
import { pipe } from "@/app/lib/functional";

type Props = {
  productId: string;
  user: User | undefined;
};

const addFavorite = pipe(
  (productId) => axios.post(`/api/favorites/${productId}`),
  () =>
    toast.success("즐겨찾기 추가", {
      position: "bottom-center",
      autoClose: 1000,
    }),
);

const removeFavorite = pipe(
  (productId) => axios.delete(`/api/favorites/${productId}`),
  () =>
    toast.success("즐겨찾기 삭제", {
      position: "bottom-center",
      autoClose: 1000,
    }),
);

const useFavorite = ({
  productId,
  user,
}: Props): [
  isFavorite: boolean | undefined,
  toggleFavorite: (event: React.MouseEvent<HTMLDivElement>) => Promise<void>,
] => {
  const router = useRouter();

  const isFavorite = useMemo(() => {
    return user?.favoriteIds.includes(productId);
  }, [user, productId]);

  const toggleFavorite = async (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (!user) {
      toast.warn("로그인을 해주세요.");
      return;
    }

    try {
      await (isFavorite ? removeFavorite(productId) : addFavorite(productId));

      router.refresh();
    } catch (error) {}
  };

  return [isFavorite, toggleFavorite];
};

export { useFavorite };
