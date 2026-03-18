import Link from "next/link";

interface ChapterCardProps {
  number: number;
  title: string;
  years: string;
  era: string;
  description: string;
  slug: string;
}

export function ChapterCard({ number, title, years, era, description, slug }: ChapterCardProps) {
  return (
    <Link href={"/chapters#" + slug} className="block group">
      <div className="border border-gold/20 p-6 hover:border-gold/50 hover:bg-parchment-dark/30 transition-all">
        <div className="flex items-baseline gap-4 mb-3">
          <span className="font-display text-4xl text-gold/40 group-hover:text-gold transition-colors">
            {number === 0 ? '\u2020' : String(number).padStart(2, '0')}
          </span>
          <div>
            <h3 className="font-display text-xl text-ink">{title}</h3>
            <p className="text-sm text-ink-light">{years} — {era}</p>
          </div>
        </div>
        <p className="text-sm text-ink-light leading-relaxed line-clamp-3">{description}</p>
      </div>
    </Link>
  );
}
