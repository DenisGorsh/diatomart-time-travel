import { SectionHeading } from "@/components/SectionHeading";
import { GalleryCard } from "@/components/GalleryCard";
import { galleryItems } from "@/data/galleryData";

export const metadata = { title: "Gallery \u2014 Time Travel \u2014 Diatom Art" };

export default function GalleryPage() {
  return (
    <>
      <section className="bg-navy text-parchment py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
            The Archive
          </p>
          <h1 className="font-gothic text-4xl sm:text-5xl mb-4">Gallery</h1>
          <p className="text-parchment/70 text-lg">
            {galleryItems.length} historical documents and images spanning seven
            centuries
          </p>
          <p className="text-parchment/50 text-sm mt-2">
            Click any item to reveal the original text and English translation
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Featured Documents"
          subtitle="High-resolution scans with original text transcriptions and translations"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {galleryItems.map((item) => (
            <GalleryCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-12 text-center bg-parchment-dark/50 border border-gold/20 p-8">
          <p className="font-display text-xl text-ink mb-2">
            Professional Archival Scans in Progress
          </p>
          <p className="text-sm text-ink-light max-w-2xl mx-auto">
            These images are sourced from major European digital libraries and
            archives. The final publication will include professional
            high-resolution scans from the Latvian National Archive
            Library&apos;s original materials, with full trilingual translations
            (Latvian, English, Russian).
          </p>
        </div>
      </section>
    </>
  );
}
