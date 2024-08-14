import React from "react";
import { CLOUDINARY_IMAGE_UPLOAD_URL } from "@/app/lib/constants";
import axios from "axios";

export const previewImage = (
  event: React.ChangeEvent<HTMLInputElement>,
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>,
  setImage: React.Dispatch<React.SetStateAction<string | undefined>>,
) => {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  setFile(file);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => setImage(reader.result as string);
};

export const imageUpload = async (image: File) => {
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!,
    );

    const { data } = await axios.post(CLOUDINARY_IMAGE_UPLOAD_URL, formData);
    return data.url;
  } catch (error) {
    console.error("Image upload failed: " + error);
    throw error;
  }
};
