interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-display text-3xl sm:text-4xl text-ink mb-3">{title}</h2>
      {subtitle && <p className="text-ink-light text-lg max-w-2xl mx-auto">{subtitle}</p>}
      <div className="mt-4 flex items-center justify-center gap-3">
        <span className="block w-12 h-px bg-gold" />
        <span className="block w-2 h-2 rotate-45 border border-gold" />
        <span className="block w-12 h-px bg-gold" />
      </div>
    </div>
  );
}
