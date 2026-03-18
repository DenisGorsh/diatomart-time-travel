import Link from "next/link";
import { chapters } from "@/data/chapters";
import { ChapterCard } from "@/components/ChapterCard";
import { SectionHeading } from "@/components/SectionHeading";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-parchment py-24 sm:py-36">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/images/texture.svg)', backgroundSize: '200px' }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Diatom Art Presents</p>
          <h1 className="font-medieval text-5xl sm:text-8xl mb-4 leading-tight">
            Rīgas Laika Ceļojums
          </h1>
          <p className="font-gothic text-2xl sm:text-3xl text-parchment/70 mb-1">
            Riga Time Travel
          </p>
          <p className="font-display text-lg sm:text-xl text-parchment/50 italic">
            Рига — Путешествие во Времени
          </p>
          <div className="flex items-center justify-center gap-3 my-8">
            <span className="block w-16 h-px bg-gold/50" />
            <span className="block w-2 h-2 rotate-45 border border-gold" />
            <span className="block w-16 h-px bg-gold/50" />
          </div>
          <p className="text-lg text-parchment/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            A visual journey through 400 years of Riga’s history, told through
            original archival documents from the Latvian National Archive Library.
          </p>
          <div className="flex justify-center">
            <Link href="/chapters" className="bg-gold text-ink px-10 py-3 text-lg tracking-wide hover:bg-gold-light transition-colors">
              Start Time Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-parchment-dark py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ['700+', 'Years of History'],
            ['80–120', 'Archive Documents'],
            ['3', 'Languages'],
            ['7', 'Chapters'],
          ].map(([num, label]) => (
            <div key={label}>
              <p className="font-display text-3xl text-burgundy">{num}</p>
              <p className="text-sm text-ink-light mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Concept */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <SectionHeading title="The Concept" subtitle="Original documents. AI-assisted translations. 400 years of Riga." />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-ink-light leading-relaxed">
            <p>
              Each spread presents an original archival document — in Latin, German,
              Polish, or Russian — alongside trilingual translations into Latvian,
              English, and Russian.
            </p>
            <p>
              Original graphics, engravings, maps, and typography are preserved in their
              full glory. From medieval parchment manuscripts to pre-WWI panoramic
              photographs, every page is a window into Riga’s extraordinary past.
            </p>
          </div>
          <div className="space-y-4 text-ink-light leading-relaxed">
            <p>
              Following the success of <em>Milota Pilsēta</em> (Beloved City) —
              a photo book of Riga shot from a rented crane — <em>Time Travel</em> is
              Diatom Art’s most ambitious project yet.
            </p>
            <p>
              Sourced from the Latvian National Archive Library’s collection of over
              18,000 manuscripts dating from the 14th century, this book brings
              forgotten history back to life.
            </p>
          </div>
        </div>
      </section>

      {/* Chapters preview */}
      <section className="py-20 bg-parchment-dark/50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title="Eight Chapters" subtitle="From the founding crusade to the eve of the Great War" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.slice(0, 6).map((ch) => (
              <ChapterCard key={ch.id} number={ch.id} title={ch.title} years={ch.years} era={ch.era} description={ch.description} slug={ch.slug} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/chapters" className="text-burgundy hover:text-burgundy-light transition-colors tracking-wide">
              View All Chapters →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-parchment text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl mb-4">Explore the Archive</h2>
          <p className="text-parchment/70 mb-8">
            Browse our digital collection of medieval manuscripts, maps,
            engravings, and historical documents spanning seven centuries.
          </p>
          <Link href="/gallery" className="inline-block bg-gold text-ink px-10 py-3 tracking-wide hover:bg-gold-light transition-colors">
            View the Gallery
          </Link>
        </div>
      </section>
    </>
  );
}
