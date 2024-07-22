"use client";

import Header from "@/app/ui/header";
import Input from "@/app/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import React, { useCallback, useState } from "react";
import Button from "@/app/ui/button";
import ImageUpload from "@/app/ui/image-upload";
import Categories from "@/app/ui/products/categories";
import dynamic from "next/dynamic";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Product } from "@/prisma/generated/prisma-client-js";

export default function CreateForm() {
  const router = useRouter();
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

  const setForm = useCallback(
    function <T>(key: string) {
      return (value: T) => {
        setValue(key, value);
      };
    },
    [setValue],
  );

  const imageSrc = watch("imageSrc");
  const category = watch("category");
  const location = watch(["latitude", "longitude"]);
  const setImageSrc = setForm<string>("imageSrc");
  const setCategory = setForm<string>("category");
  const setLocation = useCallback(
    ([latitude, longitude]: number[]) => {
      setValue("latitude", latitude);
      setValue("longitude", longitude);
    },
    [setValue],
  );

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    setIsLoading(true);

    try {
      const { data } = await axios.post<Product>("/api/product", formData);
      router.push(`/products/${data.id}`);
    } catch (error) {
      console.error("Product enrollment error: ", error);
    }
    setIsLoading(false);
  };

  const KakaoMap = dynamic(() => import("@/app/ui/kakao-map"), {
    loading: () => (
      <div className="bg-gray-300 text-gray-800 w-full h-[360px] text-center content-center">
        Map Loading...
      </div>
    ),
    ssr: false,
  });

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
      <Categories category={category} setCategory={setCategory} />
      <KakaoMap location={location} setLocation={setLocation} />
      <Button label="상품 등록" />
    </form>
  );
}
