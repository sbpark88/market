import { getProducts, ProductParams } from "@/app/lib/product-actions";
import Container from "@/app/ui/commons/container";
import EmptyState from "@/app/ui/commons/empty-state";
import ProductCard from "@/app/ui/products/product-card";
import GridContainer from "@/app/ui/commons/grid-container";
import FloatingButton from "@/app/ui/commons/floating-button";
import { SessionProvider } from "next-auth/react";
import { getUserInfoFromSession } from "@/app/lib/auth-actions";
import NavCategories from "@/app/ui/products/nav-categories";
import Pagination from "@/app/ui/commons/pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: ProductParams;
}) {
  const response = await getProducts(searchParams);
  const user = await getUserInfoFromSession();
  const products = response?.data;
  const pagination = response?.pagination;

  return (
    <SessionProvider>
      <Container>
        <NavCategories selectedCategory={searchParams.category} />
        {products?.length ? (
          <>
            <GridContainer>
              {products!.map((product) => (
                <ProductCard key={product.id} product={product} user={user} />
              ))}
            </GridContainer>
            <FloatingButton href="/products/upload">+</FloatingButton>
          </>
        ) : (
          <EmptyState resetUrl="/" />
        )}
        {pagination && <Pagination {...pagination} />}
      </Container>
    </SessionProvider>
  );
}
