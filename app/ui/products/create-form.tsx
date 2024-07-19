"use client";

import Header from "@/app/ui/header";
import Input from "@/app/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import React, { useCallback, useState } from "react";
import Button from "@/app/ui/button";
import ImageUpload from "@/app/ui/image-upload";

export default function CreateForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      latitude: 33.5563,
      longitude: 126.79581,
      imageSrc: "",
      price: "",
    },
  });
  const imageSrc = watch("imageSrc");
  const setImageSrc = useCallback(
    (value: string) => {
      setValue("imageSrc", value);
    },
    [setValue],
  );

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    setIsLoading(true);
    try {
    } catch (error) {
      console.error("Product enrollment error: ", error);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <Header title="Product Upload" subtitle="upload your product" />
      <ImageUpload imageSrc={imageSrc} setImageSrc={setImageSrc} />
      <hr />
      <Input
        id="title"
        label="Title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="description"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="price"
        label="Price"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <hr />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {/* Category */}
      </section>
      <section>{/* Kakao Map */}</section>
      <Button label="상품 등록" />
    </form>
  );
}
