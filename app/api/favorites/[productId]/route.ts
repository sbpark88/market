import { getUserInfoFromSession } from "@/app/lib/auth-actions";

type Params = {
  productId: string;
};

export async function POST(request: Request, context: { params: Params }) {
  const user = await getUserInfoFromSession();
  if (!user) return Response.error();

  try {
    const { productId } = context.params;
    const oldFavoriteIds = new Set(user.favoriteIds);
    const newFavoriteIds = [...oldFavoriteIds.add(productId)];

    await prisma?.user.update({
      data: {
        favoriteIds: newFavoriteIds,
      },
      where: {
        id: user.id,
      },
    });
    return Response.json({ result: "success" });
  } catch (error) {
    console.error(
      "Error occurred when adding user's favorite products: ",
      error,
    );
    return Response.error();
  }
}

export async function DELETE(request: Request, context: { params: Params }) {
  const user = await getUserInfoFromSession();
  if (!user) return Response.error();

  try {
    const { productId } = context.params;
    const newFavoriteIds = user.favoriteIds.filter(
      (favoriteId) => favoriteId !== productId,
    );

    await prisma?.user.update({
      data: {
        favoriteIds: newFavoriteIds,
      },
      where: {
        id: user.id,
      },
    });
    return Response.json({ result: "success" });
  } catch (error) {
    console.error(
      "Error occurred when removing user's favorite products: ",
      error,
    );
    return Response.error();
  }
}
