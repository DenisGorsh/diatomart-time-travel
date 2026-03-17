import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "Sources — Time Travel — Diatom Art" };

const digitalSources = [
  { name: 'Latvian National Digital Library', url: 'digitalabiblioteka.lv', desc: '3.8 million items including 16th–18th century map collections' },
  { name: 'Historical Maps of Latvia', url: 'kartes.lnb.lv', desc: 'Interactive historic maps of Riga and Latvia, 1588–1983' },
  { name: 'Latvian Digital Book Collection', url: 'gramatas.lndb.lv', desc: '6,000+ digitized Latvian texts from multiple centuries' },
  { name: 'Latvian Periodicals Archive', url: 'periodika.lv', desc: '3,000+ newspaper titles, 3 million+ pages from 1612 onward' },
  { name: 'Lost Latvia', url: 'zudusilatvija.lv', desc: 'Historical photographs of Latvia, primarily 19th–20th century' },
  { name: 'NLL Cultural Portraits', url: 'lnb.lv', desc: '2,200+ pre-1914 portrait photographs' },
  { name: 'Bavarian State Library (MDZ)', url: 'digitale-sammlungen.de', desc: 'Hennenberger 1595 fully digitized' },
  { name: 'Polish Digital Library (KPBC)', url: 'kpbc.umk.pl', desc: 'Hennenberger 1595 and other Baltic materials' },
  { name: 'Wikimedia Commons', url: 'commons.wikimedia.org', desc: 'Old maps of Riga, 54 Hennenberger images, public domain materials' },
  { name: 'Library of Congress', url: 'loc.gov', desc: 'Baltic maps by Mercator, de Wit, Homann' },
];

const physicalSources = [
  { name: 'Latvian National Library', desc: 'Manuscripts & Rare Books Department — 18,000+ manuscripts from the 14th century' },
  { name: 'Latvian State Historical Archive', desc: 'Administrative records, church registers, guild documents' },
  { name: 'Swedish National Archives (Riksarkivet)', desc: 'Swedish-era administrative documents and maps of Livonia' },
];

export default function SourcesPage() {
  return (
    <>
      <section className="bg-navy text-parchment py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">Research</p>
          <h1 className="font-gothic text-4xl sm:text-5xl mb-4">Sources</h1>
          <p className="text-parchment/70 text-lg">Archives and digital collections feeding this project</p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <SectionHeading title="Digital Sources" subtitle="Online collections and digital archives" />
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {digitalSources.map((s) => (
            <div key={s.name} className="border border-gold/20 p-5 hover:border-gold/40 transition-colors">
              <h3 className="font-display text-lg text-ink mb-1">{s.name}</h3>
              <p className="text-xs text-gold mb-2">{s.url}</p>
              <p className="text-sm text-ink-light">{s.desc}</p>
            </div>
          ))}
        </div>

        <SectionHeading title="Physical Archives" subtitle="Institutions with original materials" />
        <div className="space-y-4">
          {physicalSources.map((s) => (
            <div key={s.name} className="border border-gold/20 p-5">
              <h3 className="font-display text-lg text-ink mb-1">{s.name}</h3>
              <p className="text-sm text-ink-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
