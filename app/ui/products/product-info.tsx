import { User } from "@/prisma/generated/prisma-client-js";
import { Category } from "@/app/lib/definitions";
import Avatar from "@/app/ui/auth/avatar";
import dayjs from "@/app/lib/dayjs";

export default function ProductInfo({
  description,
  createdAt,
  category,
  user,
}: {
  description: string;
  createdAt: Date;
  category?: Category;
  user?: User;
}) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <ProductUser user={user} />
        <p className="mt-2">{dayjs(createdAt).format("YYYY-M-D A h:m")}</p>
      </div>
      <hr />
      <ProductCategory category={category} />
      <hr />
      <ProductDescription description={description} />
    </div>
  );
}

function ProductUser({ user }: { user?: User }) {
  return (
    <div className="flex items-center gap-4">
      <Avatar user={user} />
      <div>{user?.name}</div>
    </div>
  );
}

function ProductCategory({ category }: { category?: Category }) {
  if (!category) return null;
  const { icon: Icon, label, description } = category;

  return (
    <div className="flex gap-4 items-center">
      <Icon size="40" className="text-neutral-600 dark:text-neutral-400" />
      <div>
        <div className="text-lg font-semibold">{label}</div>
        <div className="font-light text-neutral-500 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
}

function ProductDescription({ description }: { description: string }) {
  return (
    <div className="text-lg font-light text-neutral-500 dark:text-neutral-300">
      {description}
    </div>
  );
}
