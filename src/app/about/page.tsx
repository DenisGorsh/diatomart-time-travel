import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";

export const metadata = { title: "About the Project — Time Travel — Diatom Art" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-parchment py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">About the Project</p>
          <h1 className="font-gothic text-4xl sm:text-5xl mb-4">Time Travel</h1>
          <p className="text-parchment/70 text-lg">A non-profit cultural project &mdash; 400 years of Riga through the lens of its archives</p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4">
        <div className="prose-custom space-y-8 text-ink-light leading-relaxed">
          <div className="bg-parchment-dark/60 border border-gold/20 p-6 mb-4">
            <p className="font-display text-sm text-burgundy tracking-wide uppercase mb-2">Non-Profit Cultural Initiative</p>
            <p>
              <em>Time Travel</em> is a non-profit cultural and educational project by Diatom Art (Riga, Latvia).
              All proceeds from book sales are reinvested into archival research, digitisation of historical
              documents, and making Riga&rsquo;s heritage accessible to the public. This project receives
              no commercial sponsorship and operates solely for the preservation and dissemination of Baltic cultural history.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink mb-4">The Vision</h2>
            <p>
              <em>Time Travel</em> is a large-format hardcover book that traces Riga&rsquo;s
              extraordinary journey from a medieval Hanseatic trading port to one of the
              great cities of the Russian Empire. Every page features an original archival
              document — handwritten manuscripts in Latin, printed decrees in German,
              royal privileges in Polish, administrative records in Russian — each one
              a direct physical connection to the past.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink mb-4">Trilingual Experience</h2>
            <p>
              Each document is accompanied by AI-assisted translations into three languages:
              Latvian, English, and Russian. Historical context, annotations, and commentary
              make even the most obscure 16th-century manuscript accessible to modern readers.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink mb-4">Layout Concept</h2>
            <div className="bg-parchment-dark border border-gold/20 p-6 font-mono text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gold/30 p-4 text-center">
                  <p className="text-gold text-xs tracking-widest mb-2">LEFT PAGE</p>
                  <p>Original Document</p>
                  <p className="text-xs mt-2 text-ink-light">Preserved typography, graphics, original language</p>
                </div>
                <div className="border border-gold/30 p-4 text-center">
                  <p className="text-gold text-xs tracking-widest mb-2">RIGHT PAGE</p>
                  <p>Translation & Commentary</p>
                  <p className="text-xs mt-2 text-ink-light">Latvian / English / Russian + historical context</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink mb-4">Book Specifications</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ['Format', 'Large hardcover (matching Milota Pilsēta)'],
                ['Pages', '220–280'],
                ['Documents', '80–120 original archive pieces'],
                ['Chapters', '7 + Prologue + Epilogue'],
                ['Languages', 'Latvian, English, Russian'],
                ['Time Span', 'c. 1500 — 1914'],
                ['Source', 'Latvian National Archive Library'],
                ['Publisher', 'Diatom Art, Riga'],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3">
                  <span className="text-gold font-display whitespace-nowrap">{label}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-8">
            <Link href="/chapters" className="bg-burgundy text-parchment px-8 py-3 tracking-wide hover:bg-burgundy-light transition-colors">
              Explore the Chapters
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
