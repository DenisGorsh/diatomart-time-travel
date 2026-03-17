"use client";

import Image from "next/image";
import { useState } from "react";
import type { Book } from "@/data/books";

interface BookReaderProps {
  book: Book;
  pages: { num: number; path: string; label?: string }[];
  translations?: Record<
    number,
    { original?: string; english: string; notes?: string }
  >;
}

export function BookReader({ book, pages, translations = {} }: BookReaderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const page = pages[currentPage];
  const trans = translations[page?.num];

  return (
    <>
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between mb-6 border-b border-gold/20 pb-4 gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="border border-gold/30 px-3 py-1.5 text-sm text-ink-light hover:border-gold hover:text-ink transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            &larr; Prev
          </button>
          <span className="text-sm text-ink-light">
            <span className="font-display text-ink">
              {page?.label || `Page ${page?.num}`}
            </span>{" "}
            &mdash; {currentPage + 1} of {pages.length}
          </span>
          <button
            onClick={() =>
              setCurrentPage(Math.min(pages.length - 1, currentPage + 1))
            }
            disabled={currentPage === pages.length - 1}
            className="border border-gold/30 px-3 py-1.5 text-sm text-ink-light hover:border-gold hover:text-ink transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next &rarr;
          </button>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
            className="border border-gold/30 bg-parchment px-2 py-1.5 text-sm text-ink focus:border-gold focus:outline-none max-w-[160px]"
          >
            {pages.map((p, i) => (
              <option key={i} value={i}>
                {p.label || `Page ${p.num}`}
              </option>
            ))}
          </select>
          <button
            onClick={() => setShowGrid(!showGrid)}
            className="border border-gold/30 px-3 py-1.5 text-sm text-ink-light hover:border-gold hover:text-ink transition-colors"
          >
            {showGrid ? "Reader" : "Thumbnails"}
          </button>
        </div>
      </div>

      {showGrid ? (
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-1.5">
          {pages.map((p, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentPage(i);
                setShowGrid(false);
              }}
              className={`relative aspect-[3/4] overflow-hidden border-2 transition-colors ${
                i === currentPage
                  ? "border-gold"
                  : "border-gold/10 hover:border-gold/40"
              }`}
            >
              <Image
                src={p.path}
                alt={p.label || `Page ${p.num}`}
                fill
                className="object-cover"
                sizes="8vw"
              />
              <span className="absolute bottom-0 left-0 right-0 bg-ink/70 text-parchment text-[7px] text-center py-0.5">
                {p.label || p.num}
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Page image */}
          <div className="lg:flex-1">
            <div className="relative aspect-[3/4] bg-parchment-dark border border-gold/20">
              <Image
                src={page.path}
                alt={page.label || `Page ${page.num}`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
          </div>

          {/* Translation panel */}
          <div className="lg:w-[420px] space-y-5">
            <div>
              <h2 className="font-display text-2xl text-ink mb-1">
                {page.label || `Page ${page.num}`}
              </h2>
              <p className="text-xs text-ink-light/60">
                {book.title} &bull; {book.date}
              </p>
            </div>

            {trans ? (
              <>
                {trans.original && (
                  <div>
                    <h3 className="font-display text-sm text-gold uppercase tracking-widest mb-2">
                      Original ({book.language})
                    </h3>
                    <p className="text-sm text-ink italic leading-relaxed whitespace-pre-line">
                      {trans.original}
                    </p>
                  </div>
                )}
                <div>
                  <h3 className="font-display text-sm text-gold uppercase tracking-widest mb-2">
                    English Translation
                  </h3>
                  <p className="text-sm text-ink-light leading-relaxed whitespace-pre-line">
                    {trans.english}
                  </p>
                </div>
                {trans.notes && (
                  <div className="bg-parchment-dark/60 border border-gold/15 px-4 py-3">
                    <h3 className="font-display text-sm text-gold uppercase tracking-widest mb-2">
                      Notes
                    </h3>
                    <p className="text-xs text-ink-light leading-relaxed">
                      {trans.notes}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="space-y-4">
                <div className="bg-parchment-dark/40 border border-gold/15 p-4">
                  <p className="text-sm text-ink-light leading-relaxed">
                    {book.description}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-ink-light/60">
                    <strong>Author:</strong> {book.author}
                    <br />
                    <strong>Language:</strong> {book.language}
                    <br />
                    <strong>Source:</strong> {book.source}
                  </p>
                </div>
              </div>
            )}

            <div className="border-t border-gold/20 pt-3">
              <p className="text-[10px] text-ink-light/50">
                {book.source} &bull; {book.sourceUrl}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
