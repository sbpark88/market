"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import useDebounceFn from "@/app/lib/performance/useDebounceFn";
import { SignIn } from "@/app/ui/auth/signin-button";
import { SignOut } from "@/app/ui/auth/signout-button";
import { User } from "@/prisma/generated/prisma-client-js";

export default function TopNav({ user }: { user?: User }) {
  const [open, setOpen] = useState(false);

  const closeNav = useDebounceFn(() => {
    if (window.innerWidth >= 768) {
      setOpen(false);
    }
  });

  useEffect(() => {
    window.addEventListener("resize", closeNav);
    return () => window.removeEventListener("resize", closeNav);
  }, [closeNav]);

  return (
    <nav className="relative h-14 z-40 w-full text-white bg-orange-400">
      <div className="h-full flex justify-between items-center flex-col md:flex-row">
        <div
          className={clsx(
            "px-5 sm:px-10 h-full w-full flex justify-between items-center text-2xl bg-orange-400 z-50 md:w-auto",
            {
              "border-b-2": open,
            },
          )}
        >
          <Link href="/">Logo</Link>
          <button
            className="md:hidden text-4xl"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? "-" : "+"}
          </button>
        </div>
        <div
          className={clsx(
            "absolute bg-orange-400 left-0 top-0 right-0 duration-300 transform-gpu md:static md:visible md:opacity-100 md:pr-10",
            open
              ? "translate-y-14 visible opacity-100"
              : "translate-y-0 invisible opacity-0",
          )}
        >
          <div
            className={clsx(
              "flex flex-col items-center content-center md:block",
            )}
          >
            <NavLinks />
            {user ? <SignOut /> : <SignIn />}
          </div>
        </div>
      </div>
    </nav>
  );
}

const links = [
  { name: "Admin", href: "/admin" },
  { name: "User", href: "/user" },
  { name: "Chat", href: "/chat" },
];

function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <Link key={link.name} href={link.href} className="py-2 md:ml-5">
          {link.name}
        </Link>
      ))}
    </>
  );
}
