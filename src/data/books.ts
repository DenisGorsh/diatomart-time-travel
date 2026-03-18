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
  {
    slug: "chronicon-livoniae",
    title: "Chronicle of Henry of Livonia",
    subtitle: "Heinrici Chronicon Livoniae",
    date: "c. 1227",
    author: "Henry of Livonia (Henricus de Lettis)",
    language: "Latin",
    source: "Monumenta Germaniae Historica (Arbusow ed., 1955)",
    sourceUrl: "archive.org/details/heinrici-chronicon-livoniae-1955",
    totalPages: 222,
    description: "The most important eyewitness account of the Northern Crusades in the Baltic. Written by a priest who participated in the events, it covers the Christianization of Livonia from 1184 to 1227 \u2014 the founding of Riga, the establishment of the Livonian Brothers of the Sword, wars with the native Livonians, Letts, and Estonians, and the arrival of the Teutonic Order. Henry\u2019s vivid Latin prose records battles, baptisms, diplomacy, and daily life on Christendom\u2019s northeastern frontier.",
    thumbnail: "/images/chronicon/p001.jpg",
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}
