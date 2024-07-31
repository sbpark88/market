import { auth } from "@/auth";
import { z } from "zod";
import { NextResponse } from "next/server";

const FormSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  imageSrc: z.string(),
  category: z.string(),
  price: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0." }),
  latitude: z.number(),
  longitude: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const CreateProduct = FormSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.error();
  const formData = await request.json();
  const validatedFields = CreateProduct.safeParse(formData);

  if (!validatedFields.success) {
    return {
      message: "Missing Fields. Failed to Create Product.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, description, imageSrc, category, price, latitude, longitude } =
    validatedFields.data;

  const createdProduct = await prisma?.product.create({
    data: {
      userId: session.user.id,
      title,
      description,
      imageSrc,
      category,
      price,
      latitude,
      longitude,
    },
  });

  return NextResponse.json(createdProduct);
}
