"use client";

import { Product, User } from "@/prisma/generated/prisma-client-js";
import Container from "@/app/ui/commons/container";
import ProductHead from "@/app/ui/products/product-head";
import ProductInfo from "@/app/ui/products/product-info";
import dynamic from "next/dynamic";
import Button from "@/app/ui/atomic/button";
import { useRouter } from "next/navigation";
import { categories } from "@/app/lib/data";
import axios from "axios";
import { toast } from "react-toastify";

export default function ProductDetail({
  product,
  user,
}: {
  product: Product & { user: User };
  user?: User;
}) {
  const router = useRouter();
  const openChat = async (event: React.MouseEvent) => {
    try {
      const {
        data: { chatUrl },
      } = await axios.post<{ chatUrl: string }>(`/api/chat`, {
        partnerId: product.user.id,
      });
      router.push(chatUrl);
    } catch (error) {
      toast.error("채팅방 생성에 실패했습니다.", {
        position: "bottom-center",
        hideProgressBar: true,
        autoClose: 2000,
      });
    }
  };

  const KakaoMap = dynamic(() => import("@/app/ui/commons/kakao-map"), {
    loading: () => (
      <div className="bg-gray-300 text-gray-800 w-full h-[360px] text-center content-center">
        Map Loading...
      </div>
    ),
    ssr: false,
  });

  const category = categories.find(
    (category) => category.path === product.category,
  );

  return (
    <Container maxWidth="max-w-screen-lg">
      <div>
        <ProductHead {...product} user={user} />
        <div className="grid grid-cols-1 mt-6 md:grid-cols-2 md:gap-10">
          <ProductInfo {...product} category={category} />
          <KakaoMap viewer location={[product.latitude, product.longitude]} />
        </div>

        {user?.id !== product.user.id && (
          <div className="mt-10">
            <Button
              label="이 유저와 채팅하기"
              type="button"
              onClick={openChat}
            />
          </div>
        )}
      </div>
    </Container>
  );
}
