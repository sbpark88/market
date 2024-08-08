import { User } from "@/prisma/generated/prisma-client-js";
import Header from "@/app/ui/atomic/header";
import Image from "next/image";
import HeartButton from "@/app/ui/products/heart-button";

export default function ProductHead({
  id,
  title,
  imageSrc,
  description,
  user,
}: {
  id: string;
  title: string;
  imageSrc: string;
  description: string;
  user?: User;
}) {
  return (
    <>
      <Header title={title} />
      <div className="relative w-full h-[60vh] overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={description}
          fill
          className="object-cover w-full"
        />
        <div className="absolute top-3 right-3">
          <HeartButton productId={id} user={user} />
        </div>
      </div>
    </>
  );
}
