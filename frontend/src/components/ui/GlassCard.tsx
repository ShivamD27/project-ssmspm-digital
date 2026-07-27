interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-gray-200
        bg-white/80
        backdrop-blur-xl
        shadow-md
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-[var(--primary)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}