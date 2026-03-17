import { chapters } from "@/data/chapters";
import { SectionHeading } from "@/components/SectionHeading";
import { BookIcons } from "@/components/BookTooltip";
import { timelineBooks } from "@/data/timelineBooks";

export const metadata = { title: "Chapters \u2014 Time Travel \u2014 Diatom Art" };

const timelineEvents = [
  { year: "1201", text: "Bishop Albert founds Riga", chapter: 0 },
  { year: "1202", text: "Livonian Brothers of the Sword established", chapter: 0 },
  { year: "1282", text: "Riga joins the Hanseatic League", chapter: 0 },
  { year: "1330", text: "Riga Castle built by the Livonian Order", chapter: 0 },
  { year: "1513", text: "Riga Breviary \u2014 earliest known Riga-printed book", chapter: 1 },
  { year: "1521", text: "Reformation reaches Riga", chapter: 1 },
  { year: "1558", text: "Ivan the Terrible invades \u2014 Livonian Wars begin", chapter: 2 },
  { year: "1562", text: "Dissolution of the Livonian Order", chapter: 2 },
  { year: "1581", text: "Riga falls to Poland-Lithuania", chapter: 2 },
  { year: "1621", text: "Gustav II Adolf conquers Riga for Sweden", chapter: 3 },
  { year: "1632", text: "Riga becomes the largest city in the Swedish Empire", chapter: 3 },
  { year: "1695", text: "Great Famine strikes the Baltic", chapter: 3 },
  { year: "1710", text: "Russian siege \u2014 plague kills 2/3 of population", chapter: 4 },
  { year: "1721", text: "Treaty of Nystad \u2014 Baltic ceded to Russia", chapter: 4 },
  { year: "1795", text: "Third Partition of Poland \u2014 all Latvia under Russia", chapter: 5 },
  { year: "1812", text: "Riga suburbs burned to halt Napoleon", chapter: 5 },
  { year: "1817", text: "Serfdom abolished in Courland", chapter: 5 },
  { year: "1857", text: "Medieval city walls demolished \u2014 Riga expands", chapter: 5 },
  { year: "1873", text: "First Latvian Song Festival", chapter: 6 },
  { year: "1881", text: "Population reaches 170,000", chapter: 6 },
  { year: "1897", text: "Latvians rise to 45% of 282,000 population", chapter: 6 },
  { year: "1901", text: "Art Nouveau building boom begins", chapter: 6 },
  { year: "1905", text: "Revolution \u2014 Latvian national movement strengthens", chapter: 7 },
  { year: "1913", text: "Population nearly 600,000 \u2014 peak of Imperial Riga", chapter: 7 },
  { year: "1914", text: "World War I begins \u2014 end of an era", chapter: 7 },
];

const chapterColors = [
  "bg-ink/60",
  "bg-burgundy/70",
  "bg-burgundy",
  "bg-navy",
  "bg-navy-light",
  "bg-ink-light",
  "bg-gold/80",
  "bg-burgundy-light",
];

export default function ChaptersPage() {
  return (
    <>
      <section className="bg-navy text-parchment py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
            The Journey
          </p>
          <h1 className="font-display text-4xl sm:text-5xl mb-4">
            Seven Chapters
          </h1>
          <p className="text-parchment/70 text-lg">
            From the founding of Riga in 1201 to the eve of the Great War
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-parchment-dark border-b border-gold/20 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="Timeline of Riga"
            subtitle="713 years from founding to the First World War"
          />

          {/* Visual timeline bar */}
          <div className="mb-8">
            <div className="flex h-8 rounded overflow-hidden border border-gold/20">
              {chapters.map((ch, i) => {
                const startYear = parseInt(
                  ch.years.match(/\d{4}/)?.[0] || "1500"
                );
                const endMatch = ch.years.match(/\d{4}$/);
                const endYear = endMatch
                  ? parseInt(endMatch[0])
                  : startYear + 50;
                const totalSpan = 1914 - 1201;
                const left = ((startYear - 1201) / totalSpan) * 100;
                const width = ((endYear - startYear) / totalSpan) * 100;
                return (
                  <a
                    key={ch.id}
                    href={`#${ch.slug}`}
                    className={`${chapterColors[i + 1]} relative group flex items-center justify-center text-parchment text-[9px] tracking-wider hover:opacity-90 transition-opacity`}
                    style={{ width: `${width}%` }}
                    title={`${ch.title} (${ch.years})`}
                  >
                    <span className="hidden sm:inline truncate px-1">
                      Ch. {ch.id}
                    </span>
                  </a>
                );
              })}
            </div>
            <div className="flex justify-between mt-1 text-[10px] text-ink-light/50">
              <span>1201</span>
              <span>1400</span>
              <span>1600</span>
              <span>1800</span>
              <span>1914</span>
            </div>
          </div>

          {/* Timeline events */}
          <div className="relative">
            <div className="absolute left-[47px] top-0 bottom-0 w-px bg-gold/20" />
            <div className="space-y-3">
              {timelineEvents.map((e, i) => {
                const ch =
                  e.chapter > 0 ? chapters[e.chapter - 1] : undefined;
                return (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 text-right">
                      <span className="font-display text-sm text-gold">
                        {e.year}
                      </span>
                    </div>
                    <div className="relative mt-1.5">
                      <span
                        className={`block w-2.5 h-2.5 rounded-full border-2 border-parchment-dark ${
                          e.chapter === 0 ? "bg-ink/40" : "bg-gold"
                        }`}
                      />
                    </div>
                    <div className="flex-1 flex items-center gap-2 flex-wrap">
                      <p className="text-sm text-ink-light">{e.text}</p>
                      {ch && (
                        <a
                          href={`#${ch.slug}`}
                          className="text-[9px] text-burgundy/60 hover:text-burgundy transition-colors whitespace-nowrap"
                        >
                          Ch. {e.chapter}
                        </a>
                      )}
                      {timelineBooks[e.year] && (
                        <BookIcons books={timelineBooks[e.year]} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="space-y-16">
          {chapters.map((ch, idx) => (
            <article key={ch.id} id={ch.slug} className="scroll-mt-20">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-display text-6xl text-gold/30">
                  {String(ch.id).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-3xl text-ink">
                    {ch.title}
                  </h2>
                  <p className="text-ink-light">
                    {ch.years} &mdash; {ch.era}
                  </p>
                </div>
              </div>

              {/* Mini timeline for this chapter */}
              <div className="flex flex-wrap gap-2 mb-4">
                {timelineEvents
                  .filter((e) => e.chapter === ch.id)
                  .map((e, i) => (
                    <span
                      key={i}
                      className="text-[10px] border border-gold/20 px-2 py-0.5 text-ink-light"
                    >
                      <span className="text-gold font-display">{e.year}</span>{" "}
                      {e.text}
                    </span>
                  ))}
              </div>

              <p className="text-ink-light leading-relaxed mb-6 max-w-3xl">
                {ch.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-display text-lg text-burgundy mb-3">
                    Historical Highlights
                  </h3>
                  <ul className="space-y-2">
                    {ch.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-ink-light"
                      >
                        <span className="text-gold mt-1">{"\u25C6"}</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-lg text-burgundy mb-3">
                    Featured Documents
                  </h3>
                  <ul className="space-y-2">
                    {ch.documents.map((d, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-ink-light"
                      >
                        <span className="text-gold mt-1">{"\u25C7"}</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-xs text-ink-light/60 mt-4">
                Estimated pages: {ch.pageCount}
              </p>

              {ch.id < chapters.length && (
                <div className="border-b border-gold/15 mt-12" />
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
