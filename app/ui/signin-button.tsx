import React from "react";
import Link from "next/link";

export function SignIn() {
  return (
    <Link href="/auth/login" className="py-2 md:ml-5">
      Sign In
    </Link>
  );
}
