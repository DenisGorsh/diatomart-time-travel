"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { books } from "@/data/books";
import { chroniclePages } from "@/data/chroniclePages";
import { allFolioTranslations } from "@/data/chronicleTranslations";
import { fullFolioTranslations } from "@/data/fullTranslations";
import { BookReader } from "@/components/BookReader";

export default function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const book = books.find((b) => b.slug === slug);

  if (!book) return notFound();

  const pages = chroniclePages.map((p, i) => ({
    num: i + 1,
    path: p.file,
    label: `Folio ${p.label}`,
  }));

  const translations: Record<
    number,
    { original?: string; english: string; notes?: string }
  > = {};
  chroniclePages.forEach((p, i) => {
    // Use full manuscript translations when available, fall back to summaries
    const full = fullFolioTranslations[p.label];
    const t = allFolioTranslations[p.label];
    if (full) {
      translations[i + 1] = {
        original: full.original || undefined,
        english: full.english,
        notes: t?.notes || undefined,
      };
    } else if (t) {
      translations[i + 1] = {
        original: t.original || undefined,
        english: t.english,
        notes: t.notes || undefined,
      };
    }
  });

  return (
    <>
      <section className="bg-navy text-parchment py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-parchment/50 mb-4">
            <Link href="/gallery" className="hover:text-gold transition-colors">
              Gallery
            </Link>
            <span>/</span>
            <span className="text-parchment/70">{book.title}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-4xl mb-1">
            {book.title}
          </h1>
          <p className="text-parchment/60 text-lg italic">{book.subtitle}</p>
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-parchment/50">
            <span>{book.date}</span>
            <span>&bull;</span>
            <span>{book.author}</span>
            <span>&bull;</span>
            <span>{book.language}</span>
            <span>&bull;</span>
            <span>{book.totalPages} pages</span>
          </div>
        </div>
      </section>

      <section className="py-6 max-w-7xl mx-auto px-4">
        <BookReader book={book} pages={pages} translations={translations} />
      </section>
    </>
  );
}
