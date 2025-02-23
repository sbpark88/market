export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-[300px_1fr] w-full h-[calc(100dvh-3.5rem)]">
      {children}
    </main>
  );
}
