"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import { galleryItems } from "@/data/galleryData";
import type { GalleryItem } from "@/data/galleryData";

export default function GalleryPage() {
  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(() => new Set([0, 1, 2]));
  const stripRef = useRef<HTMLDivElement>(null);

  const item = galleryItems[idx];
  const total = galleryItems.length;

  const go = useCallback(
    (i: number) => {
      const next = Math.max(0, Math.min(total - 1, i));
      setIdx(next);
      // preload neighbours
      setLoaded((prev) => {
        const s = new Set(prev);
        for (let d = -1; d <= 2; d++) {
          const n = next + d;
          if (n >= 0 && n < total) s.add(n);
        }
        return s;
      });
    },
    [total],
  );

  // keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(idx - 1);
      else if (e.key === "ArrowRight") go(idx + 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [idx, go]);

  // scroll active thumbnail into view
  useEffect(() => {
    const el = stripRef.current?.children[idx] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [idx]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header bar */}
      <div className="bg-navy text-parchment py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-gothic text-2xl sm:text-3xl">Gallery</h1>
            <p className="text-parchment/50 text-xs mt-0.5">
              {total} documents &middot; Use &larr; &rarr; keys or swipe
            </p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={idx}
              onChange={(e) => go(Number(e.target.value))}
              className="border border-gold/30 bg-navy text-parchment px-2 py-1.5 text-sm focus:border-gold focus:outline-none max-w-[200px]"
            >
              {galleryItems.map((g, i) => (
                <option key={i} value={i}>
                  {g.era} — {g.title}
                </option>
              ))}
            </select>
            <span className="text-sm text-parchment/60 hidden sm:inline">
              {idx + 1} / {total}
            </span>
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="bg-navy/95 border-b border-gold/20">
        <div
          ref={stripRef}
          className="flex gap-1 py-2 px-2 overflow-x-auto scrollbar-thin max-w-7xl mx-auto"
        >
          {galleryItems.map((g, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 overflow-hidden border-2 transition-colors ${
                i === idx
                  ? "border-gold"
                  : "border-transparent hover:border-gold/40"
              }`}
            >
              {loaded.has(i) ? (
                <Image
                  src={g.image}
                  alt={g.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              ) : (
                <div className="w-full h-full bg-parchment-dark/20" />
              )}
              {i === idx && (
                <span className="absolute inset-0 ring-2 ring-gold ring-inset" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Image panel */}
            <div className="lg:flex-1 relative">
              {/* Nav buttons */}
              <button
                onClick={() => go(idx - 1)}
                disabled={idx === 0}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-ink/60 text-parchment w-10 h-10 flex items-center justify-center hover:bg-ink/80 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                &larr;
              </button>
              <button
                onClick={() => go(idx + 1)}
                disabled={idx === total - 1}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-ink/60 text-parchment w-10 h-10 flex items-center justify-center hover:bg-ink/80 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                &rarr;
              </button>

              <div className="relative aspect-[4/3] sm:aspect-[3/2] bg-parchment-dark border border-gold/20">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                {item.bookSlug && (
                  <Link
                    href={`/books/${item.bookSlug}`}
                    className="absolute top-3 right-3 bg-burgundy text-parchment text-[10px] px-3 py-1 tracking-wider uppercase hover:bg-burgundy-light transition-colors"
                  >
                    Full Book &rarr;
                  </Link>
                )}
              </div>

              {/* Title bar below image */}
              <div className="flex items-center justify-between mt-3 px-1">
                <div>
                  <div className="flex items-center gap-3 mb-0.5">
                    <p className="text-[10px] tracking-widest text-gold uppercase">
                      {item.type}
                    </p>
                    <p className="text-[10px] text-ink-light/60">{item.era}</p>
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl text-ink">
                    {item.title}
                  </h2>
                </div>
                <p className="text-[10px] text-ink-light/40 text-right max-w-[200px] hidden sm:block">
                  {item.source}
                </p>
              </div>
            </div>

            {/* Translation panel */}
            <div className="lg:w-[400px] space-y-4">
              <div className="border border-gold/20 bg-parchment-dark/30 p-5 space-y-4">
                {/* Description */}
                <p className="text-sm text-ink-light leading-relaxed">
                  {item.desc}
                </p>

                {/* Original text */}
                {item.originalText && (
                  <div>
                    <p className="text-[10px] tracking-widest text-gold uppercase mb-2">
                      Original ({item.originalLang})
                    </p>
                    <p className="text-sm text-ink italic leading-relaxed">
                      {item.originalText}
                    </p>
                  </div>
                )}

                {/* Translation */}
                <div>
                  <p className="text-[10px] tracking-widest text-gold uppercase mb-2">
                    Translation &amp; Commentary
                  </p>
                  <p className="text-sm text-ink-light leading-relaxed">
                    {item.translation}
                  </p>
                </div>
              </div>

              {/* Source citation */}
              <div className="px-1">
                <p className="text-[9px] text-ink-light/40 leading-relaxed sm:hidden">
                  {item.source}
                </p>
              </div>

              {item.bookSlug && (
                <Link
                  href={`/books/${item.bookSlug}`}
                  className="block text-center bg-burgundy text-parchment text-sm px-4 py-2.5 tracking-wide hover:bg-burgundy-light transition-colors"
                >
                  Read Full Book (148 pages) &rarr;
                </Link>
              )}

              {/* Quick nav */}
              <div className="flex justify-between pt-2 border-t border-gold/15">
                <button
                  onClick={() => go(idx - 1)}
                  disabled={idx === 0}
                  className="text-sm text-ink-light hover:text-ink transition-colors disabled:opacity-30"
                >
                  &larr; {idx > 0 ? galleryItems[idx - 1].title : ""}
                </button>
                <button
                  onClick={() => go(idx + 1)}
                  disabled={idx === total - 1}
                  className="text-sm text-ink-light hover:text-ink transition-colors disabled:opacity-30 text-right"
                >
                  {idx < total - 1 ? galleryItems[idx + 1].title : ""} &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
