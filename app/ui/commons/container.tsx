export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-[2520px] mx-auto sm:px-2 px-4 md:px-10 lg:px-20 py-6">
      {children}
    </main>
  );
}
