export interface Book {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  language: string;
  source: string;
  sourceUrl: string;
  totalPages: number;
  description: string;
  thumbnail: string;
}

export const books: Book[] = [
  {
    slug: "livonian-chronicle",
    title: "Livonian Rhymed Chronicle",
    subtitle: "Livl\u00e4ndische Reimchronik",
    date: "c. 1290 (copied 1415)",
    author: "Anonymous (Livonian Order)",
    language: "Middle High German",
    source: "Heidelberg University Library",
    sourceUrl: "digi.ub.uni-heidelberg.de/diglit/cpg367",
    totalPages: 148,
    description: "The earliest known historical narrative of the Baltic crusades, composed in 12,017 rhyming couplets. Describes the founding of Riga, the Livonian Brothers of the Sword, and the conquest of the indigenous Baltic peoples. Codex Palatinus Germanicus 367.",
    thumbnail: "/images/gallery/manuscript-livonian-chronicle-192r.jpg",
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}
