import { getProductById } from "@/app/lib/product-actions";
import { getUserInfoFromSession } from "@/app/lib/auth-actions";
import EmptyState from "@/app/ui/commons/empty-state";
import ProductDetail from "@/app/ui/products/product-detail";

export default async function Page({
  params,
}: {
  params: { productId: string };
}) {
  const user = await getUserInfoFromSession();
  const product = await getProductById({ ...params });

  if (!product) {
    return (
      <EmptyState
        title="상품을 찾을 수 없습니다."
        subtitle="존재하는 상품인지 확인하세요."
        resetUrl="/"
      />
    );
  }

  return <ProductDetail product={product} user={user} />;
}
