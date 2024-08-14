import { ReactNode } from "react";

export default function AuthFormWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="grid h-[calc(100dvh-3.5rem)] place-items-center">
      {children}
    </section>
  );
}
