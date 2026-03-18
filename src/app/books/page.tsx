import Link from "next/link";
import Image from "next/image";
import { books } from "@/data/books";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "Books \u2014 Time Travel \u2014 Diatom Art" };

export default function BooksIndexPage() {
  return (
    <>
      <section className="bg-navy text-parchment py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
            Digital Library
          </p>
          <h1 className="font-gothic text-4xl sm:text-5xl mb-4">
            Primary Sources
          </h1>
          <p className="text-parchment/70 text-lg">
            Read the original chronicles with full English translations
          </p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <SectionHeading
          title="Available Books"
          subtitle="Page-by-page reading with original text and translation"
        />

        <div className="grid sm:grid-cols-2 gap-8">
          {books.map((book) => (
            <Link
              key={book.slug}
              href={`/books/${book.slug}`}
              className="group block border border-gold/20 hover:border-gold/50 transition-all"
            >
              <div className="relative h-48 bg-parchment-dark overflow-hidden">
                <Image
                  src={book.thumbnail}
                  alt={book.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="font-display text-lg text-parchment">
                    {book.title}
                  </p>
                  <p className="text-xs text-parchment/60">
                    {book.subtitle}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between text-xs text-ink-light/60 mb-2">
                  <span>{book.author}</span>
                  <span>{book.date}</span>
                </div>
                <p className="text-sm text-ink-light leading-relaxed line-clamp-3">
                  {book.description}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-ink-light/50">
                    {book.totalPages} pages &middot; {book.language}
                  </span>
                  <span className="text-xs text-burgundy group-hover:text-burgundy-light transition-colors">
                    Read &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
