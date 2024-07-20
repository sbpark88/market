"use client";

import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import Image from "next/image";

export default function ImageUpload({
  imageSrc,
  setImageSrc,
}: {
  imageSrc: string;
  setImageSrc: (value: string) => void;
}) {
  const handleOnSuccess = useCallback(
    (results: CloudinaryUploadWidgetResults) => {
      if ((results?.info as CloudinaryUploadWidgetInfo).secure_url) {
        setImageSrc((results.info as CloudinaryUploadWidgetInfo).secure_url);
      }
    },
    [setImageSrc],
  );

  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      onSuccess={handleOnSuccess}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <button
            onClick={() => open()}
            className="relative flex justify-center p-20 text-neutral-600 dark:text-zinc-400 border-2 border-neutral-300 border-dashed rounded-md transition hover:opacity-70"
          >
            <TbPhotoPlus size="50" />
            {imageSrc && (
              <div className="absolute inset-0">
                <Image
                  src={imageSrc}
                  alt="Cloudinary Upload Image"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </button>
        );
      }}
    </CldUploadWidget>
  );
}
