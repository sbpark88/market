"use server";

import { Product } from "@/prisma/generated/prisma-client-js";

export type ProductParams = {
  category?: string;
  latitude?: number;
  longitude?: number;
};

export async function getProducts({
  category,
  latitude,
  longitude,
}: ProductParams): Promise<Product[] | undefined> {
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

    return await prisma?.product.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
