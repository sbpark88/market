import { getUserInfoFromSession } from "@/app/lib/auth-actions";
import ChatClient from "@/app/ui/chat/chat-client";

export default async function Page() {
  const user = await getUserInfoFromSession();

  return <ChatClient user={user} />;
}
