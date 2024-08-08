import { User } from "@/prisma/generated/prisma-client-js";
import Image from "next/image";

const NO_USER_AVAAR = "https://via.placeholder.com/400x400?text=user";

export default function Avatar({ user }: { user?: User }) {
  const imageSrc = user?.image ?? NO_USER_AVAAR;

  return (
    <Image
      src={imageSrc}
      alt="Avatar"
      width={"30"}
      height="30"
      className="w-10 h-10 rounded-full"
    />
  );
}
