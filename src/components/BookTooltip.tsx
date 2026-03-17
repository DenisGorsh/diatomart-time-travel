"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { TimelineBook } from "@/data/timelineBooks";

function BookIcon() {
  return (
    <svg viewBox="0 0 24 30" fill="currentColor" className="w-full h-full">
      <rect x="1" y="0" width="22" height="28" rx="2" fill="currentColor" opacity="0.15" />
      <rect x="3" y="1" width="18" height="26" rx="1" fill="currentColor" opacity="0.25" />
      <path d="M5 4h14v2H5zm0 4h14v1H5zm0 3h14v1H5zm0 3h10v1H5z" fill="currentColor" opacity="0.4" />
      <rect x="1" y="0" width="3" height="28" rx="1" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function BookIcons({ books }: { books: TimelineBook[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <span className="inline-flex gap-1.5 ml-2 relative items-end">
      {books.map((book, i) => {
        const hasReader = !!book.bookSlug;
        return (
          <span key={i} className="relative">
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className={`w-8 h-10 inline-flex items-center justify-center rounded overflow-hidden transition-all hover:scale-110 cursor-pointer ${
                hasReader
                  ? "border-2 border-burgundy shadow-sm shadow-burgundy/20 bg-parchment-dark"
                  : "border border-gold/20 hover:border-gold/50 bg-parchment-dark opacity-60 hover:opacity-100"
              }`}
              title={book.title}
              aria-label={`Book: ${book.title}`}
            >
              {book.thumbnail ? (
                <Image
                  src={book.thumbnail}
                  alt={book.title}
                  width={32}
                  height={40}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-ink-light/30 w-5 h-7">
                  <BookIcon />
                </span>
              )}
            </button>

            {openIdx === i && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setOpenIdx(null)}
                />
                <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 bg-ink text-parchment shadow-xl border border-gold/30 overflow-hidden">
                  {book.thumbnail && (
                    <div className="relative h-32 w-full bg-parchment-dark">
                      <Image
                        src={book.thumbnail}
                        alt={book.title}
                        fill
                        className="object-cover opacity-80"
                        sizes="288px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
                    </div>
                  )}

                  <div className="p-3 relative">
                    <p className="font-display text-sm text-gold leading-tight mb-1">
                      {book.title}
                    </p>
                    <p className="text-xs text-parchment/70">{book.author}</p>
                    <div className="flex justify-between mt-1.5 text-parchment/50 text-[10px]">
                      <span>{book.year}</span>
                      <span>{book.lang}</span>
                    </div>

                    {hasReader ? (
                      <Link
                        href={`/books/${book.bookSlug}`}
                        className="block mt-3 text-center bg-burgundy text-parchment text-xs py-2 tracking-wide hover:bg-burgundy-light transition-colors"
                      >
                        Read Full Book &rarr;
                      </Link>
                    ) : (
                      <p className="mt-3 text-center text-[10px] text-parchment/40 italic">
                        Coming soon
                      </p>
                    )}
                  </div>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-ink" />
                </div>
              </>
            )}
          </span>
        );
      })}
    </span>
  );
}
