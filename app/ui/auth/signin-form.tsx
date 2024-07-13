"use client";

import Input from "@/app/ui/input";
import Button from "@/app/ui/button";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Redirect from "@/app/ui/auth/redirect";
import { signInAction } from "@/app/lib/actions";

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
      await signInAction(formData as FormData);
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
