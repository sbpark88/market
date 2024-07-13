import Link from "next/link";

export default function Redirect({
  paragraph,
  url,
  label,
}: {
  paragraph: string;
  url: string;
  label: string;
}) {
  return (
    <section className="text-center">
      <p className="text-gray-600 dark:text-gray-300">{paragraph}</p>
      <Link href={url} className="text-black dark:text-white hover:underline">
        {label}
      </Link>
    </section>
  );
}
