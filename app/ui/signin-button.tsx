import { signIn } from "next-auth/react";

export function SignIn() {
  return (
    <button onClick={() => signIn()} className="py-2 md:ml-5">
      Sign In
    </button>
  );
}
