import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "Diatom Art — Publisher" };

export default function AuthorPage() {
  return (
    <>
      <section className="bg-navy text-parchment py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">The Publisher</p>
          <h1 className="font-gothic text-4xl sm:text-5xl mb-4">Diatom Art</h1>
          <p className="text-parchment/70 text-lg">Riga, Latvia</p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4">
        <div className="space-y-8 text-ink-light leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-ink mb-4">About the Publisher</h2>
            <p>
              Diatom Art is a Riga-based publishing house dedicated to preserving and
              celebrating Latvia’s cultural heritage through fine art books. Our work
              bridges past and present, making history accessible through high-quality
              visual publications.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink mb-4">Our First Book</h2>
            <div className="bg-parchment-dark border border-gold/20 p-6">
              <h3 className="font-display text-xl text-burgundy mb-2">Milota Pilsēta (Beloved City)</h3>
              <p>
                Our debut publication captured Riga from an extraordinary perspective —
                aerial photographs shot from a rented crane high above the city’s rooftops.
                The large-format hardcover book revealed Riga’s architectural beauty in
                unprecedented detail, from Art Nouveau facades to medieval spires.
              </p>
              <p className="mt-3">
                <em>Milota Pilsēta</em> established the visual standard and format that
                <em> Time Travel</em> will follow.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink mb-4">Our Mission</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                ['Preserve', 'Making fragile archival documents accessible to a wide audience through careful reproduction.'],
                ['Translate', 'Using AI-assisted translation to bridge centuries-old languages into modern Latvian, English, and Russian.'],
                ['Inspire', 'Connecting people to their city’s extraordinary past through the beauty of original documents.'],
              ].map(([title, desc]) => (
                <div key={title} className="border-t-2 border-gold/30 pt-4">
                  <h3 className="font-display text-lg text-ink mb-2">{title}</h3>
                  <p className="text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
