"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { GalleryItem } from "@/data/galleryData";

export function GalleryCard({ item }: { item: GalleryItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gold/20 hover:border-gold/50 transition-all overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left cursor-pointer"
      >
        <div className="relative aspect-[4/3] bg-parchment-dark overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
          {item.bookSlug && (
            <span className="absolute top-2 right-2 bg-burgundy text-parchment text-[9px] px-2 py-0.5 tracking-wider uppercase">
              Full Book
            </span>
          )}
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[10px] tracking-widest text-gold uppercase">
              {item.type}
            </p>
            <p className="text-[10px] text-ink-light/60">{item.era}</p>
          </div>
          <h3 className="font-display text-base text-ink mb-1">{item.title}</h3>
          <p className="text-xs text-ink-light leading-relaxed line-clamp-2">
            {item.desc}
          </p>
          <div className="flex items-center justify-between mt-2">
            <p className="text-[9px] text-ink-light/40">{item.source}</p>
            <span className="text-[10px] text-burgundy">
              {open ? "Close" : "Translation \u2192"}
            </span>
          </div>
        </div>
      </button>

      {open && (
        <div className="border-t border-gold/20 bg-parchment-dark/40 p-4 space-y-3">
          {item.originalText && (
            <div>
              <p className="text-[10px] tracking-widest text-gold uppercase mb-1">
                Original ({item.originalLang})
              </p>
              <p className="text-xs text-ink italic leading-relaxed">
                {item.originalText}
              </p>
            </div>
          )}
          <div>
            <p className="text-[10px] tracking-widest text-gold uppercase mb-1">
              Translation &amp; Commentary
            </p>
            <p className="text-xs text-ink-light leading-relaxed">
              {item.translation}
            </p>
          </div>
          {item.bookSlug && (
            <Link
              href={`/books/${item.bookSlug}`}
              className="block text-center bg-burgundy text-parchment text-sm px-4 py-2 tracking-wide hover:bg-burgundy-light transition-colors mt-3"
            >
              Read Full Book (148 pages) &rarr;
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
