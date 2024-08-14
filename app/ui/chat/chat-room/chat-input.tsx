import { User } from "@/prisma/generated/prisma-client-js";
import { Chat } from "@/app/lib/definitions";
import React, { useCallback, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { IoImageOutline } from "react-icons/io5";
import { RiSendPlaneLine } from "react-icons/ri";
import useSWRMutation from "swr/mutation";
import ChatImagePreview from "@/app/ui/chat/chat-room/chat-image-preview";
import { imageUpload, previewImage } from "@/app/lib/image-upload";

export default function ChatInput({
  user,
  chatPartner,
  chat,
  height,
}: {
  user?: User;
  chatPartner?: User;
  chat?: Chat;
  height: string;
}) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string>();
  const [file, setFile] = useState<File>();
  const [image, setImage] = useState<string>();

  const clickInputFile = useCallback(() => {
    inputFileRef.current!.click();
  }, []);

  const { trigger } = useSWRMutation(`/api/chat/${chat?.id}`, sendMessage);

  const removeImage = useCallback(() => {
    setFile(undefined);
    setImage(undefined);
  }, []);

  const sendMessageHandler = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    if (!message && !file) return;

    const cloudinaryImageUrl = file && (await imageUpload(file));

    try {
      await trigger({
        text: message,
        image: cloudinaryImageUrl,
        senderId: user!.id,
        receiverId: chatPartner!.id,
      });
      setMessage("");
      setFile(undefined);
      setImage(undefined);
    } catch (error) {
      toast.error("메시지 전송을 실패했습니다.", {
        position: "bottom-center",
        hideProgressBar: true,
        autoClose: 1000,
      });
    }
  };

  return (
    <form
      className={`box-border absolute inset-x-0 bottom-0 gap-4 flex items-center pl-4 border border-gray-300 rounded-md shadow-sm bg-gray-50`}
      style={{ height }}
    >
      <ChatImagePreview image={image} removeImage={removeImage} />
      <textarea
        className="w-full h-full text-base outline-none text-black resize-none content-center"
        placeholder="메시지를 작성해주세요."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        ref={inputFileRef}
        type="file"
        className="hidden"
        accept="image/*"
        multiple={false}
        onChange={(event) => previewImage(event, setFile, setImage)}
      />
      <IoImageOutline
        className="text-2xl text-gray-400 cursor-pointer"
        onClick={clickInputFile}
      />
      <button
        type="submit"
        className="p-2 bg-orange-500 rounded-lg hover:bg-orange-600 disabled:opacity-60"
        onClick={sendMessageHandler}
      >
        <RiSendPlaneLine className="text-xl text-white" />
      </button>
    </form>
  );
}

async function sendMessage(
  url: string,
  {
    arg,
  }: {
    arg: {
      text?: string;
      image?: string;
      senderId: string;
      receiverId: string;
    };
  },
) {
  return axios.post(url, arg);
}
