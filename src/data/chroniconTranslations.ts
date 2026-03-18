// Chronicon Livoniae (Henry of Livonia) — translation data
// Auto-generated from chronicon_full_translations.jsonl via integrate_chronicon_translations.js

export interface ChroniconTranslation {
  page: string;
  original: string;
  english: string;
  notes?: string;
}

// Full translations keyed by page label (e.g. "p001")
export const chroniconFullTranslations: Record<string, { original: string; english: string }> = {};

// Fallback section translations for pages not yet fully translated
export const chroniconFallbackTranslations: Record<string, { english: string; notes?: string }> = {};

// Merged: full translations take priority, then fallback
export const allChroniconTranslations: Record<string, { original?: string; english: string; notes?: string }> = {};
