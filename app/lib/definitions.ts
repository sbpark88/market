import type { IconType } from "react-icons";
import {
  Conversation,
  Message,
  User,
} from "@/prisma/generated/prisma-client-js";

export type Category = {
  label: string;
  path: string;
  icon: IconType;
  description: string;
};

export type Chat = Conversation & {
  Users: User[];
  Messages: Message[];
};

export type ChatPartner = {
  id: string;
  name: string;
  image?: string;
};
