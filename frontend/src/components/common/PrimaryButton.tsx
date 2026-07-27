import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function PrimaryButton({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full bg-[var(--primary)] px-8 py-4 text-white transition hover:scale-105"
    >
      {children}
    </Link>
  );
}