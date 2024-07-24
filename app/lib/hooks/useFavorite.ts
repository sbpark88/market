import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import axios from "axios";
import type { User } from "@/prisma/generated/prisma-client-js";

type Props = {
  productId: string;
  user: User | undefined;
};

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
      return;
    }

    try {
      isFavorite
        ? await axios.delete(`/api/favorites/${productId}`)
        : await axios.post(`/api/favorites/${productId}`);

      router.refresh();
    } catch (error) {}
  };

  return [isFavorite, toggleFavorite];
};

export { useFavorite };
