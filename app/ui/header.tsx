import clsx from "clsx";

export default function Header({
  title,
  subtitle,
  center = false,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <header className={clsx(center ? "text-center" : "text-start")}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <h3 className="mt-2 font-light text-neutral-500 dark:text-gray-200">
        {subtitle}
      </h3>
    </header>
  );
}
