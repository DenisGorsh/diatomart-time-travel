interface DocumentCardProps {
  title: string;
  era: string;
  description: string;
}

export function DocumentCard({ title, era, description }: DocumentCardProps) {
  return (
    <div className="bg-parchment-dark/50 border border-gold/20 p-6 hover:border-gold/50 transition-colors">
      <p className="text-xs tracking-widest text-gold uppercase mb-2">{era}</p>
      <h3 className="font-display text-lg text-ink mb-2">{title}</h3>
      <p className="text-sm text-ink-light leading-relaxed">{description}</p>
    </div>
  );
}
