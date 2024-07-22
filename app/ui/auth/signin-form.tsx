"use client";

import Input from "@/app/ui/input";
import Button from "@/app/ui/button";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Redirect from "@/app/ui/auth/redirect";
import { signInAction } from "@/app/lib/actions";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    setIsLoading(true);
    try {
      // server action 을 사용. 이 경우 반드시 서버 session 을 사용해야한다. 안 그러면 바로 갱신이 안 됨.
      const res = await signInAction(formData as FormData);
      res?.message ? setError(res.message) : setError("");
      router.replace("/user");

      // 처음부터 next-auth/react 에 있는 signIn 을 사용. 클라이언트 session 이 바로 갱신된다.
      // await signIn("credentials", formData);
    } catch (error) {
      console.error("Sign in error: ", error);
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex flex-col gap-4 min-w-[350px]"
    >
      <h1 className="text-2xl">Sign In</h1>
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Button label="Sign in" />
      <Redirect
        paragraph="New to Market?"
        url="/auth/register"
        label="Create your Market account"
      />
      {
        <p className="absolute -bottom-7 w-full text-center text-red-600">
          {error}
        </p>
      }
    </form>
  );
}
