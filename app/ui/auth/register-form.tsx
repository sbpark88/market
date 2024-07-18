"use client";

import { useState } from "react";
import Input from "@/app/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import Button from "@/app/ui/button";
import Redirect from "@/app/ui/auth/redirect";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/account", formData);
      router.push("/auth/login");
    } catch (error) {
      console.error("Sign up error: ", error);
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 min-w-[350px]"
    >
      <h1 className="text-2xl">Create your account</h1>
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
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
      <Button label="Sign up" />
      <Redirect
        paragraph="Already have an account?"
        url="/auth/login"
        label="Sign in"
      />
    </form>
  );
}
