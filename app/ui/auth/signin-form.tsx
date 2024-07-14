"use client";

import Input from "@/app/ui/input";
import Button from "@/app/ui/button";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Redirect from "@/app/ui/auth/redirect";
import { signInAction } from "@/app/lib/actions";
import { signIn } from "next-auth/react";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);

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
      // server action 을 사용.
      // await signInAction(formData as FormData);
      // await signIn()  // 클라이언트 session 이 갱신되지 않아 강제로 갱신 처리.

      // 처음부터 next-auth/react 에 있는 signIn 을 사용.
      await signIn("credentials", formData);
    } catch (error) {
      console.error("Sign in error:", error);
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 min-w-[350px]"
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
    </form>
  );
}
