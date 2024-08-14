import { CgClose } from "react-icons/cg";
import React from "react";

export default function ChatImagePreview({
  image,
  removeImage,
}: {
  image?: string;
  removeImage: () => void;
}) {
  if (!image) return null;

  return (
    <div className="absolute right-0 bottom-12 w-full overflow-hidden rounded-md max-w-72 shadow-md">
      <img src={image} alt="preview image" className="object-contain" />
      <CgClose
        className="absolute top-2 right-2 w-6 h-6 p-1 rounded-full text-white bg-gray-900 opacity-60 hover:opacity-100"
        onClick={removeImage}
      />
    </div>
  );
}
