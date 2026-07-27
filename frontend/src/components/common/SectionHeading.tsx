interface Props {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-24 max-w-4xl text-center">

      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-5xl font-bold lg:text-6xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        {description}
      </p>

    </div>
  );
}