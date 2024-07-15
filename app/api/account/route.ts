import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const formData = await request.json();
  const hashedPassword = await bcrypt.hash(formData.password, 10);

  try {
    const user = await prisma?.user.create({
      data: {
        ...formData,
        password: hashedPassword,
      },
    });

    return Response.json(user);
  } catch (error) {
    console.error("Create account failed: ", error);
  }
}
