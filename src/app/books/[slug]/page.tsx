"use client";

import { use, useState, useEffect, useRef, useCallback } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { books } from "@/data/books";
import { chroniclePages } from "@/data/chroniclePages";
import { allFolioTranslations } from "@/data/chronicleTranslations";
import { fullFolioTranslations } from "@/data/fullTranslations";
import { chroniconPages } from "@/data/chroniconPages";
import { chroniconFullTranslations } from "@/data/chroniconFullTranslations";

/* ---------- build merged page data ---------- */
interface PageData {
  idx: number;
  label: string;
  file: string;
  original?: string;
  english: string;
  notes?: string;
}

function buildPages(slug: string): PageData[] {
  if (slug === "chronicon-livoniae") {
    return chroniconPages.map((p, i) => {
      const full = chroniconFullTranslations[p.label];
      return {
        idx: i,
        label: p.label,
        file: p.file,
        original: full?.original || undefined,
        english: full?.english || "",
        notes: undefined,
      };
    });
  }

  // Default: Livonian Rhymed Chronicle
  return chroniclePages.map((p, i) => {
    const full = fullFolioTranslations[p.label];
    const t = allFolioTranslations[p.label];
    return {
      idx: i,
      label: p.label,
      file: p.file,
      original: full?.original || t?.original || undefined,
      english: full?.english || t?.english || "",
      notes: t?.notes || undefined,
    };
  });
}

/* ---------- chunk size for lazy loading ---------- */
const CHUNK = 10;

export default function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const book = books.find((b) => b.slug === slug);
  if (!book) return notFound();

  const allPages = useRef(buildPages(slug)).current;
  const total = allPages.length;

  const pageLabel = slug === "chronicon-livoniae" ? "Page" : "Folio";

  const [loadedTo, setLoadedTo] = useState(CHUNK);
  const [activeIdx, setActiveIdx] = useState(0);
  const [showStrip, setShowStrip] = useState(true);

  const folioRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stripRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const visiblePages = allPages.slice(0, loadedTo);

  /* load more when sentinel enters viewport */
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && loadedTo < total) {
          setLoadedTo((prev) => Math.min(prev + CHUNK, total));
        }
      },
      { rootMargin: "600px" },
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, [loadedTo, total]);

  /* track which folio is in viewport → update active index */
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            if (!isNaN(idx)) setActiveIdx(idx);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    observerRef.current = obs;
    folioRefs.current.forEach((el) => {
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [loadedTo]);

  /* scroll strip thumb into view */
  useEffect(() => {
    const el = stripRef.current?.children[activeIdx] as
      | HTMLElement
      | undefined;
    el?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIdx]);

  /* jump to folio */
  const jumpTo = useCallback(
    (idx: number) => {
      if (idx >= loadedTo) setLoadedTo(Math.min(idx + CHUNK, total));
      requestAnimationFrame(() => {
        folioRefs.current[idx]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    },
    [loadedTo, total],
  );

  /* keyboard nav */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") jumpTo(Math.max(0, activeIdx - 1));
      else if (e.key === "ArrowRight")
        jumpTo(Math.min(total - 1, activeIdx + 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIdx, jumpTo, total]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-navy text-parchment py-4 px-4 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h1 className="font-display text-lg sm:text-xl truncate">
              {book.title}
            </h1>
            <p className="text-parchment/50 text-xs truncate">
              {book.author} &middot; {book.date} &middot; {book.language}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <select
              value={activeIdx}
              onChange={(e) => jumpTo(Number(e.target.value))}
              className="border border-gold/30 bg-navy text-parchment px-2 py-1.5 text-sm focus:border-gold focus:outline-none max-w-[150px]"
            >
              {allPages.map((p, i) => (
                <option key={i} value={i}>
                  {p.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => setShowStrip(!showStrip)}
              className="border border-gold/30 px-3 py-1.5 text-xs text-parchment/70 hover:border-gold hover:text-parchment transition-colors"
            >
              {showStrip ? "Hide" : "Pages"}
            </button>
            <span className="text-xs text-parchment/50 hidden sm:inline">
              {activeIdx + 1}/{total}
            </span>
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      {showStrip && (
        <div className="bg-navy/95 border-b border-gold/20 sticky top-[60px] z-20">
          <div
            ref={stripRef}
            className="flex gap-1 py-1.5 px-2 overflow-x-auto max-w-6xl mx-auto"
          >
            {allPages.map((p, i) => (
              <button
                key={i}
                onClick={() => jumpTo(i)}
                className={`relative flex-shrink-0 w-10 h-12 sm:w-12 sm:h-14 overflow-hidden border-2 transition-colors ${
                  i === activeIdx
                    ? "border-gold"
                    : i < loadedTo
                      ? "border-transparent hover:border-gold/40"
                      : "border-transparent opacity-40"
                }`}
              >
                {i < loadedTo ? (
                  <Image
                    src={p.file}
                    alt={p.label}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                ) : (
                  <div className="w-full h-full bg-parchment-dark/20" />
                )}
                <span className="absolute bottom-0 left-0 right-0 bg-ink/70 text-parchment text-[6px] text-center">
                  {p.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Continuous reading area */}
      <div className="flex-1 bg-parchment">
        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Book intro */}
          <div className="text-center mb-12">
            <h2 className="font-gothic text-3xl sm:text-4xl text-ink mb-2">
              {book.title}
            </h2>
            <p className="font-display text-lg text-ink-light italic mb-1">
              {book.subtitle}
            </p>
            <p className="text-sm text-ink-light/60">
              {book.date} &middot; {book.author} &middot; {book.language}{" "}
              &middot; {total} pages
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="block w-12 h-px bg-gold" />
              <span className="block w-2 h-2 rotate-45 border border-gold" />
              <span className="block w-12 h-px bg-gold" />
            </div>
            <p className="text-sm text-ink-light max-w-2xl mx-auto mt-4 leading-relaxed">
              {book.description}
            </p>
          </div>

          {/* Folios — continuous flow */}
          {visiblePages.map((page) => (
            <div
              key={page.idx}
              ref={(el) => {
                folioRefs.current[page.idx] = el;
              }}
              data-idx={page.idx}
              className="mb-16 scroll-mt-28"
            >
              {/* Folio divider */}
              <div className="flex items-center gap-4 mb-6">
                <span className="block flex-1 h-px bg-gold/30" />
                <span className="font-display text-sm text-gold tracking-widest uppercase">
                  {pageLabel} {page.label}
                </span>
                <span className="text-[10px] text-ink-light/40">
                  {page.idx + 1} of {total}
                </span>
                <span className="block flex-1 h-px bg-gold/30" />
              </div>

              {/* Two-column: image + text */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Manuscript image */}
                <div className="md:w-[280px] lg:w-[320px] flex-shrink-0">
                  <div className="relative aspect-[3/4] bg-parchment-dark border border-gold/20 sticky top-36">
                    <Image
                      src={page.file}
                      alt={`${pageLabel} ${page.label}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0 space-y-4">
                  {page.original && (
                    <div>
                      <p className="text-[10px] tracking-widest text-gold uppercase mb-2">
                        Original ({book.language})
                      </p>
                      <p className="text-sm text-ink italic leading-relaxed whitespace-pre-line">
                        {page.original}
                      </p>
                    </div>
                  )}

                  {page.english ? (
                    <div>
                      <p className="text-[10px] tracking-widest text-gold uppercase mb-2">
                        English Translation
                      </p>
                      <div className="text-[15px] text-ink-light leading-[1.8] whitespace-pre-line">
                        {page.english}
                      </div>
                    </div>
                  ) : (
                    <div className="py-8 text-center">
                      <p className="text-sm text-ink-light/40 italic">
                        Translation in progress...
                      </p>
                    </div>
                  )}

                  {page.notes && (
                    <div className="bg-parchment-dark/60 border border-gold/15 px-4 py-3 mt-4">
                      <p className="text-[10px] tracking-widest text-gold uppercase mb-1">
                        Notes
                      </p>
                      <p className="text-xs text-ink-light leading-relaxed">
                        {page.notes}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Load-more sentinel */}
          {loadedTo < total && (
            <div ref={sentinelRef} className="text-center py-12">
              <p className="text-sm text-ink-light/50">
                Loading more pages&hellip; ({loadedTo} of {total} loaded)
              </p>
            </div>
          )}

          {/* End marker */}
          {loadedTo >= total && (
            <div className="text-center py-12 border-t border-gold/30">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="block w-12 h-px bg-gold" />
                <span className="block w-2 h-2 rotate-45 border border-gold" />
                <span className="block w-12 h-px bg-gold" />
              </div>
              <p className="font-display text-lg text-ink">Finis</p>
              <p className="text-sm text-ink-light/60 mt-1">
                End of {book.title} &middot; {total} pages
              </p>
              <p className="text-[10px] text-ink-light/40 mt-3">
                {book.source}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
