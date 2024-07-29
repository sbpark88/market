import { signOut } from "next-auth/react";

export function SignOut() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="py-2 md:ml-5"
    >
      Sign Out
    </button>
  );
}
