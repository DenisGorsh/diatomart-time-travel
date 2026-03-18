import Link from "next/link";
import { chapters } from "@/data/chapters";
import { ChapterCard } from "@/components/ChapterCard";
import { SectionHeading } from "@/components/SectionHeading";

/* ── Decorative sub-components (aged manuscript artifacts) ── */

function InkBlot({ top, left, size, opacity = 0.18 }: { top: string; left: string; size: number; opacity?: number }) {
  return (
    <div
      className="ink-blot"
      style={{
        top, left,
        width: size, height: size,
        background: `radial-gradient(ellipse at 40% 40%, rgba(30, 15, 5, ${opacity}) 0%, rgba(30, 15, 5, ${opacity * 0.4}) 50%, transparent 70%)`,
      }}
    />
  );
}

function FoxingSpot({ top, left, size }: { top: string; left: string; size: number }) {
  return <div className="foxing-spot" style={{ top, left, width: size, height: size }} />;
}

function WormHole({ top, left }: { top: string; left: string }) {
  return <div className="worm-hole" style={{ top, left }} />;
}

function MarginNote({ top, left, right, rotate, children, faded, width }: {
  top: string; left?: string; right?: string; rotate?: number; children: React.ReactNode; faded?: boolean; width?: string;
}) {
  return (
    <div
      className={`margin-note ${faded ? 'faded' : ''}`}
      style={{
        top, left, right,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        fontSize: '0.85rem',
        maxWidth: width || '160px',
      }}
    >
      {children}
    </div>
  );
}

function FolioNumber({ top, right, children }: { top: string; right: string; children: React.ReactNode }) {
  return <div className="folio-number" style={{ top, right }}>{children}</div>;
}

function PenScratch({ top, left, width, angle }: { top: string; left: string; width: number; angle: number }) {
  return <div className="pen-test" style={{ top, left, width, transform: `rotate(${angle}deg)` }} />;
}

function WaterStain({ top, left, size }: { top: string; left: string; size: number }) {
  return <div className="water-stain" style={{ top, left, width: size, height: size }} />;
}

/* ── Main page ── */

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          HERO — styled as the title page of an 18th-century folio
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative manuscript-page page-shadow overflow-hidden py-20 sm:py-32">
        {/* Deterioration layer */}
        <WaterStain top="-60px" left="60%" size={400} />
        <WaterStain top="40%" left="-80px" size={280} />
        <FoxingSpot top="12%" left="8%" size={25} />
        <FoxingSpot top="35%" left="88%" size={18} />
        <FoxingSpot top="60%" left="15%" size={30} />
        <FoxingSpot top="75%" left="82%" size={22} />
        <FoxingSpot top="22%" left="72%" size={14} />
        <FoxingSpot top="85%" left="45%" size={20} />
        <FoxingSpot top="5%" left="55%" size={12} />
        <InkBlot top="8%" left="4%" size={35} opacity={0.12} />
        <InkBlot top="92%" left="78%" size={20} opacity={0.15} />
        <WormHole top="18%" left="3%" />
        <WormHole top="22%" left="3.3%" />
        <WormHole top="26%" left="2.8%" />
        <WormHole top="30%" left="3.1%" />
        <WormHole top="65%" left="96%" />
        <WormHole top="67%" left="96.3%" />
        <PenScratch top="6%" left="82%" width={45} angle={-15} />
        <PenScratch top="6.5%" left="84%" width={30} angle={25} />

        {/* Margin handwritten notes */}
        <MarginNote top="15%" left="2%" rotate={-2}>
          NB. — vid. pag. 42<br/>
          de fundatione<br/>
          civitatis Rigensis
        </MarginNote>

        <MarginNote top="55%" right="1.5%" rotate={1.5} faded width="140px">
          pertinet ad<br/>
          Cap. III &amp; IV
        </MarginNote>

        <MarginNote top="82%" left="2.5%" rotate={-1} faded width="130px">
          Identity Confirmd<br/>
          J. C. Brotze 1792
        </MarginNote>

        <FolioNumber top="3%" right="6%">fol. 1r.</FolioNumber>

        {/* Page edge wear */}
        <div className="page-edge-left" />

        {/* Actual content — typeset like a baroque title page */}
        <div className="relative max-w-3xl mx-auto px-8 text-center z-10">

          {/* Printer's device / top ornament */}
          <div className="ornament-line mb-6">
            <span className="text-burgundy/40 text-2xl tracking-[0.4em]">* * *</span>
          </div>

          <p className="tracking-[0.4em] uppercase text-[11px] text-ink-light/60 mb-6">
            Diatom Art &middot; Rigae &middot; Anno MMXXVI
          </p>

          {/* Main title — red & black like a 1700s title page */}
          <h1 className="font-medieval text-5xl sm:text-7xl lg:text-8xl mb-3 leading-[0.95] text-burgundy">
            Rīgas Laika
          </h1>
          <h1 className="font-medieval text-5xl sm:text-7xl lg:text-8xl mb-5 leading-[0.95] text-ink">
            Ceļojums
          </h1>

          <div className="ornament-line my-4">
            <span className="text-gold/50 text-lg">&#10043;</span>
          </div>

          <p className="font-gothic text-xl sm:text-2xl text-ink/60 mb-1">
            Riga &mdash; A Journey through Time
          </p>
          <p className="font-display text-base sm:text-lg text-ink/35 italic mb-6">
            Рига &mdash; Путешествіе во Времени
          </p>

          {/* Descriptive subtitle block — typical of baroque title pages */}
          <div className="max-w-xl mx-auto mb-8">
            <p className="font-display text-sm sm:text-base text-ink/50 leading-relaxed">
              Wherein is contained a faithful Collection<br/>
              of <span className="text-burgundy/70">Original Archival Documents</span>,<br/>
              Manuscripts, Maps, Engravings &amp; Panoramas<br/>
              from the <span className="italic">Latvian National Archive Library</span>,<br/>
              tracing Four Hundred Years of the Illustrious<br/>
              City of <span className="font-gothic text-lg">Riga</span> in Livonia.
            </p>
          </div>

          <div className="ornament-line my-6">
            <span className="text-gold/40 text-sm tracking-[0.3em]">&#8258; &#8258; &#8258;</span>
          </div>

          {/* Imprint line */}
          <p className="text-[11px] text-ink/30 tracking-[0.15em] uppercase mb-10">
            Printed for Diatom Art Publishers &middot; at Riga in Livonia
          </p>

          <div className="flex justify-center">
            <Link
              href="/chapters"
              className="relative bg-burgundy/90 text-parchment px-10 py-3 text-base tracking-[0.15em] hover:bg-burgundy transition-colors border border-burgundy/30"
              style={{ fontFamily: 'var(--font-fell)' }}
            >
              Open the Book
            </Link>
          </div>
        </div>

        {/* Bottom ink splatter */}
        <InkBlot top="88%" left="12%" size={50} opacity={0.08} />
        <InkBlot top="90%" left="14%" size={15} opacity={0.2} />
        <InkBlot top="91%" left="11%" size={8} opacity={0.25} />
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          STATS — as a ruled manuscript table
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative manuscript-page page-shadow overflow-hidden py-12 border-t border-ink/10">
        <FoxingSpot top="20%" left="75%" size={35} />
        <FoxingSpot top="50%" left="10%" size={20} />
        <WormHole top="80%" left="92%" />

        <MarginNote top="10%" right="2%" rotate={2} faded width="120px">
          Summa totalis
        </MarginNote>

        <div className="relative max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center z-10">
          {[
            ['DCC+', '700+', 'Years of History'],
            ['III', '3', 'Primary Source Books'],
            ['CMXXVI', '926', 'Digitized Pages'],
            ['VIII', '8', 'Chapters'],
          ].map(([roman, num, label]) => (
            <div key={label}>
              <p className="font-medieval text-3xl text-burgundy/80">{roman}</p>
              <p className="text-xs text-ink/30 italic mt-0.5">({num})</p>
              <p className="text-sm text-ink-light mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CONCEPT — as body text of an 18th-century book, two columns
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative manuscript-page page-shadow overflow-hidden py-20">
        <WaterStain top="10%" left="70%" size={320} />
        <FoxingSpot top="45%" left="5%" size={28} />
        <FoxingSpot top="15%" left="90%" size={16} />
        <FoxingSpot top="70%" left="50%" size={22} />
        <InkBlot top="38%" left="48%" size={12} opacity={0.2} />
        <WormHole top="55%" left="2.5%" />
        <WormHole top="57%" left="2.3%" />
        <PenScratch top="30%" left="92%" width={35} angle={-30} />

        <FolioNumber top="3%" right="6%">fol. 2r.</FolioNumber>

        <MarginNote top="22%" left="1.5%" rotate={-1.5} width="150px">
          de conceptu operis<br/>
          &amp; de fontibus<br/>
          primariis ✝
        </MarginNote>

        <MarginNote top="65%" right="1%" rotate={1} faded width="135px">
          cfr. Milota Pilsēta<br/>
          (opus praecedens)
        </MarginNote>

        <div className="relative max-w-4xl mx-auto px-8 z-10">
          <SectionHeading title="The Concept" subtitle="Original documents. AI-assisted translations. 400 years of Riga." />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-ink-light leading-relaxed drop-cap-ornate">
              <p>
                Each spread presents an original archival document — in Latin, German,
                Polish, or Russian — alongside trilingual translations into Latvian,
                English, and Russian.
              </p>
              <p>
                Original graphics, engravings, maps, and typography are preserved in their
                full glory. From medieval parchment manuscripts to pre-WWI panoramic
                photographs, every page is a window into Riga&rsquo;s extraordinary past.
              </p>
            </div>
            <div className="space-y-4 text-ink-light leading-relaxed">
              <p>
                Following the success of <em>Milota Pilsēta</em> (Beloved City) —
                a photo book of Riga shot from a rented crane — <em>Time Travel</em> is
                Diatom Art&rsquo;s most ambitious project yet.
              </p>
              <p>
                Sourced from the Latvian National Archive Library&rsquo;s collection of over
                18,000 manuscripts dating from the 14th century, this book brings
                forgotten history back to life.
              </p>
            </div>
          </div>
        </div>

        {/* Ink drip near the gutter */}
        <InkBlot top="75%" left="49.5%" size={6} opacity={0.35} />
        <InkBlot top="77%" left="49.8%" size={4} opacity={0.25} />
        <InkBlot top="78.5%" left="49.6%" size={3} opacity={0.2} />
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CHAPTERS — as a table of contents leaf
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative manuscript-page page-shadow overflow-hidden py-20 border-t border-ink/5">
        <FoxingSpot top="8%" left="20%" size={20} />
        <FoxingSpot top="55%" left="85%" size={25} />
        <FoxingSpot top="80%" left="30%" size={18} />
        <FoxingSpot top="35%" left="5%" size={32} />
        <WaterStain top="60%" left="-40px" size={250} />
        <WormHole top="12%" left="97%" />
        <WormHole top="14%" left="96.8%" />
        <WormHole top="16%" left="97.1%" />
        <InkBlot top="3%" left="45%" size={25} opacity={0.06} />

        <FolioNumber top="3%" right="6%">fol. 3r.</FolioNumber>

        <MarginNote top="8%" left="1.5%" rotate={-2} width="140px">
          Tabula Capitum<br/>
          huius Operis
        </MarginNote>

        <MarginNote top="45%" right="1%" rotate={2} width="120px">
          ☞ Cap. V notatu<br/>
          dignissimum
        </MarginNote>

        <MarginNote top="88%" left="2%" rotate={-0.5} faded width="150px">
          — finis tabulae —
        </MarginNote>

        <div className="relative max-w-6xl mx-auto px-8 z-10">
          <SectionHeading title="Eight Chapters" subtitle="From the founding crusade to the eve of the Great War" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.slice(0, 6).map((ch) => (
              <ChapterCard key={ch.id} number={ch.id} title={ch.title} years={ch.years} era={ch.era} description={ch.description} slug={ch.slug} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/chapters" className="text-burgundy hover:text-burgundy-light transition-colors tracking-wide" style={{ fontFamily: 'var(--font-fell)' }}>
              View All Chapters &#8594;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PRIMARY SOURCES — dark section, like an engraved plate page
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden" style={{
        background: 'radial-gradient(ellipse at 50% 50%, #1e2d4a 0%, #141f35 60%, #0e1628 100%)'
      }}>
        {/* Simulated plate tone / vignette */}
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.4) 100%)'
        }} />

        <FoxingSpot top="10%" left="15%" size={40} />
        <FoxingSpot top="70%" left="80%" size={30} />

        <MarginNote top="5%" right="2.5%" rotate={1} width="130px">
          <span style={{ color: 'rgba(196, 163, 90, 0.35)' }}>
            Fontes primarij<br/>
            (&amp; Chronica)
          </span>
        </MarginNote>

        <div className="relative max-w-5xl mx-auto px-8 z-10">
          <div className="text-center mb-12">
            <h2 className="font-gothic text-3xl sm:text-4xl text-parchment/80 mb-3">Primary Sources</h2>
            <p className="text-parchment/40 text-lg max-w-2xl mx-auto">Read the original chronicles with full English translations</p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="block w-12 h-px bg-gold/30" />
              <span className="block w-2 h-2 rotate-45 border border-gold/30" />
              <span className="block w-12 h-px bg-gold/30" />
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Chronicle of Henry of Livonia", subtitle: "Chronicon Livoniae", date: "c. 1227", lang: "Latin", pages: 222, href: "/books/chronicon-livoniae", desc: "Eyewitness account of the founding of Riga and the Northern Crusades" },
              { title: "Livonian Rhymed Chronicle", subtitle: "Livl\u00e4ndische Reimchronik", date: "c. 1290", lang: "Middle High German", pages: 148, href: "/books/livonian-chronicle", desc: "12,017 rhyming verses chronicling the Baltic crusades" },
              { title: "Hennenberger 1595", subtitle: "Erclerung der Preussischen Landtaffel", date: "1595", lang: "German", pages: 556, href: "/books/hennenberger-1595", desc: "Geographic masterwork of Prussia and Livonia with woodcut illustrations" },
            ].map((b) => (
              <Link key={b.href} href={b.href} className="group border border-gold/15 hover:border-gold/40 p-5 transition-all relative overflow-hidden" style={{
                background: 'linear-gradient(135deg, rgba(245,240,232,0.04) 0%, rgba(245,240,232,0.01) 100%)'
              }}>
                <p className="font-display text-lg text-gold/80 group-hover:text-gold-light transition-colors">{b.title}</p>
                <p className="text-xs text-parchment/35 italic mb-3">{b.subtitle}</p>
                <p className="text-sm text-parchment/55 leading-relaxed mb-3">{b.desc}</p>
                <div className="flex justify-between text-[10px] text-parchment/30">
                  <span>{b.date} &middot; {b.lang}</span>
                  <span>{b.pages} pp.</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/books" className="text-gold/60 hover:text-gold-light transition-colors tracking-wide" style={{ fontFamily: 'var(--font-fell)' }}>
              View All Sources &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA / GALLERY — final leaf, most deteriorated
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative manuscript-page page-shadow overflow-hidden py-20 text-center">
        {/* Heavy damage on the last page */}
        <WaterStain top="-20%" left="25%" size={500} />
        <WaterStain top="50%" left="65%" size={350} />
        <FoxingSpot top="10%" left="30%" size={35} />
        <FoxingSpot top="25%" left="70%" size={28} />
        <FoxingSpot top="60%" left="15%" size={40} />
        <FoxingSpot top="40%" left="85%" size={20} />
        <FoxingSpot top="80%" left="55%" size={25} />
        <FoxingSpot top="15%" left="50%" size={15} />
        <InkBlot top="70%" left="8%" size={45} opacity={0.1} />
        <InkBlot top="72%" left="10%" size={12} opacity={0.22} />
        <InkBlot top="5%" left="88%" size={30} opacity={0.08} />
        <WormHole top="40%" left="2%" />
        <WormHole top="42%" left="2.2%" />
        <WormHole top="44%" left="1.9%" />
        <WormHole top="46%" left="2.1%" />
        <WormHole top="48%" left="2.3%" />
        <PenScratch top="85%" left="75%" width={55} angle={-10} />
        <PenScratch top="86%" left="77%" width={35} angle={20} />
        <PenScratch top="85.5%" left="76%" width={20} angle={-40} />

        <FolioNumber top="3%" right="6%">fol. 4v.</FolioNumber>

        <MarginNote top="20%" left="1.5%" rotate={-3} width="140px">
          Inspice Tabulam<br/>
          Imaginum ☞<br/>
          <span className="struck-through">pag. 12</span> pag. 14
        </MarginNote>

        <MarginNote top="30%" right="1.5%" rotate={2} width="150px">
          Opus insigne!<br/>
          Commendatur<br/>
          omnibus Studiosis<br/>
          Historiae Patriae
        </MarginNote>

        <MarginNote top="75%" left="3%" rotate={-1} faded width="120px">
          Ex libris<br/>
          Bibl. Acad. Rig.
        </MarginNote>

        <div className="relative max-w-2xl mx-auto px-8 z-10">
          <h2 className="font-gothic text-3xl sm:text-4xl mb-4 text-ink/80">Explore the Gallery</h2>
          <div className="ornament-line my-4">
            <span className="text-gold/40 text-lg">&#10043;</span>
          </div>
          <p className="text-ink-light/70 mb-8 leading-relaxed">
            Browse our digital collection of medieval manuscripts, maps,
            engravings, and historical documents spanning seven centuries.
          </p>
          <Link
            href="/gallery"
            className="inline-block bg-burgundy/90 text-parchment px-10 py-3 tracking-[0.15em] hover:bg-burgundy transition-colors border border-burgundy/30"
            style={{ fontFamily: 'var(--font-fell)' }}
          >
            View the Gallery
          </Link>

          {/* Colophon */}
          <div className="mt-16 pt-8 border-t border-ink/10">
            <p className="text-[10px] text-ink/25 tracking-[0.2em] uppercase">
              F &nbsp; I &nbsp; N &nbsp; I &nbsp; S
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
