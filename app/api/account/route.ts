import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const hashedPassword = await bcrypt.hash(body.password, 10);

  try {
    const user = await prisma?.user.create({
      data: {
        ...body,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ result: "success" });
  } catch (error) {
    console.error("Create account failed: ", error);
  }
}
