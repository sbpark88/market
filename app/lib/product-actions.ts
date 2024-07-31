"use server";

import { Product } from "@/prisma/generated/prisma-client-js";
import { PRODUCTS_PER_PAGES } from "@/app/lib/constants";

export type ProductParams = {
  category?: string;
  latitude?: number;
  longitude?: number;
  page?: number;
  itemsPerPage?: number;
};

export async function getProducts({
  category,
  latitude,
  longitude,
  page = 1,
  itemsPerPage = PRODUCTS_PER_PAGES,
}: ProductParams): Promise<{
  data?: Product[];
  pagination: {
    page: number;
    totalItems: number;
    itemsPerPage: number;
  };
} | null> {
  try {
    let query: Record<string, unknown> = {};

    if (category) {
      query.category = category;
    }

    if (latitude) {
      query.latitude = {
        gte: latitude - 0.01,
        lte: latitude + 0.01,
      };
    }

    if (longitude) {
      query.longitude = {
        gte: longitude - 0.01,
        lte: longitude + 0.01,
      };
    }

    const totalItems = (await prisma?.product.count({ where: query })) ?? 0;

    const data = await prisma?.product.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
      skip: (page - 1) * itemsPerPage,
      take: itemsPerPage,
    });

    return {
      data,
      pagination: {
        page,
        totalItems,
        itemsPerPage,
      },
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
