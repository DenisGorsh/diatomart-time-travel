"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/* ─── scene data ─── */
interface Scene {
  id: number;
  title: string;
  year: string;
  narration: string;
  bg: string;          // CSS gradient/color for backdrop
  elements: string;    // emoji-based illustration (rendered large)
  mood: "dawn" | "battle" | "fire" | "sea" | "dark" | "gold" | "winter" | "triumph";
}

const scenes: Scene[] = [
  {
    id: 1,
    title: "The Call to Crusade",
    year: "c. 1198",
    narration:
      "Pope Celestine III declares a crusade against the last pagans of Europe. German missionaries have tried preaching — now the sword will finish the work. Knights and monks answer the call, sailing east across the cold Baltic Sea toward a land of dark forests and fierce warriors.",
    bg: "linear-gradient(180deg, #1a2744 0%, #2a3754 40%, #3a5070 100%)",
    elements: "⛪",
    mood: "dawn",
  },
  {
    id: 2,
    title: "Landing at the Daugava",
    year: "1201",
    narration:
      "Bishop Albert founds the city of Riga at the mouth of the Daugava River — a bridgehead for the German crusade. Ships unload knights, horses, and supplies. The Order of the Sword Brothers is established to wage permanent holy war. The Livonian peoples watch from the forest, uncertain of what is to come.",
    bg: "linear-gradient(180deg, #2a3754 0%, #4a6a8a 50%, #8ab4d0 100%)",
    elements: "⚓",
    mood: "sea",
  },
  {
    id: 3,
    title: "Fire and Baptism",
    year: "1201–1230",
    narration:
      "The Sword Brothers sweep through Livonia, conquering tribe after tribe. Hill-forts burn, sacred groves are felled, and entire peoples are baptized at swordpoint. The Livonians, Latgalians, and Estonians resist with desperate courage, but the German heavy cavalry is unstoppable on open ground. The forest runs red.",
    bg: "linear-gradient(180deg, #6b1d2a 0%, #8b3030 50%, #c45530 100%)",
    elements: "🔥",
    mood: "fire",
  },
  {
    id: 4,
    title: "The Estonian Wars",
    year: "1208–1227",
    narration:
      "Estonia proves the hardest conquest. The Estonians build massive hill-forts and fight with a ferocity the chronicle grudgingly admires. Denmark enters the contest, King Waldemar II seizing northern Estonia from Tallinn. The Pope must mediate between rival Christian powers even as the pagan resistance continues.",
    bg: "linear-gradient(180deg, #1a2744 0%, #3a4a60 40%, #6a7a90 100%)",
    elements: "🏰",
    mood: "dark",
  },
  {
    id: 5,
    title: "Alexander Nevsky",
    year: "1240–1242",
    narration:
      "From the east comes a new threat: Prince Alexander of Novgorod, called Nevsky. He smashes a Swedish invasion on the Neva, then turns against the Order. At the Battle on the Ice on Lake Peipus, Alexander's heavy Russian cavalry crushes the German knights. The Order's eastern expansion is halted forever.",
    bg: "linear-gradient(180deg, #c0d8ef 0%, #a0c0dd 30%, #708090 100%)",
    elements: "❄️",
    mood: "winter",
  },
  {
    id: 6,
    title: "The Catastrophe at Saule",
    year: "September 22, 1236",
    narration:
      "The Sword Brothers march into Samogitia — and walk into a trap. In the marshy forests near Saule, the Samogitians surround the German army. The heavy cavalry cannot maneuver. Master Volkwin falls. The Order is annihilated in a single afternoon. Of the brothers who marched out, almost none return.",
    bg: "linear-gradient(180deg, #2c1810 0%, #4a2a18 40%, #6b3a20 100%)",
    elements: "⚔️",
    mood: "battle",
  },
  {
    id: 7,
    title: "Rebirth: The Teutonic Order",
    year: "1237",
    narration:
      "From the ashes, a merger. The shattered Sword Brothers are absorbed into the mighty Teutonic Order — Europe's most powerful military-monastic organization. Prussian brothers arrive in Livonia with fresh troops, new discipline, and vast resources. The white mantle with the black cross replaces the red sword. The crusade is reborn.",
    bg: "linear-gradient(180deg, #f5f0e8 0%, #e8dfd0 40%, #c4a35a 100%)",
    elements: "✝️",
    mood: "gold",
  },
  {
    id: 8,
    title: "Mindaugas: The Pagan King",
    year: "1251–1263",
    narration:
      "Lithuania's grand duke Mindaugas plays a dangerous game. He accepts baptism and a royal crown from the Pope — but continues worshipping the old gods in secret. The Order suspects treachery but cannot defy the papacy. When Mindaugas finally renounces Christianity, the brothers feel vindicated. War resumes with redoubled fury.",
    bg: "linear-gradient(180deg, #2c1810 0%, #5a3a28 50%, #c4a35a 100%)",
    elements: "👑",
    mood: "dark",
  },
  {
    id: 9,
    title: "The Semigallian Wars",
    year: "1250s–1290",
    narration:
      "The Semigallians — brave, stubborn, and proud — refuse to submit. They revolt again and again, tearing down crosses and burning churches. The Order responds with total war: hill-forts stormed, crops burned, populations scattered. Finally, the last Semigallian fortress falls. Entire clans flee to Lithuania rather than live under German rule. A people disappears.",
    bg: "linear-gradient(180deg, #6b1d2a 0%, #4a2a18 60%, #2c1810 100%)",
    elements: "🏔️",
    mood: "fire",
  },
  {
    id: 10,
    title: "Castles of Stone",
    year: "1260s–1290s",
    narration:
      "The Order transforms the Baltic landscape. Stone castles rise where wooden forts once stood — Riga, Cēsis, Sigulda, Kuldīga, Dobele. Each fortress is a monastery, barracks, and government office in one. The brothers build roads, found towns, and open trade routes connecting the Baltic to western Europe. A new civilization takes shape.",
    bg: "linear-gradient(180deg, #e8dfd0 0%, #c4a35a 50%, #a08840 100%)",
    elements: "🏗️",
    mood: "gold",
  },
  {
    id: 11,
    title: "The Reisen: Crusading Tourists",
    year: "1280s–1290s",
    narration:
      "Knights from England, France, and Bohemia travel to the Baltic for seasonal crusading campaigns — the Reisen. They feast at the Order's castles, ride into Lithuanian territory, burn a few villages, and return home with tales of adventure and spiritual merit. It is crusading as sport — deadly sport, but sport nonetheless.",
    bg: "linear-gradient(180deg, #2a3754 0%, #3a5070 40%, #5a7a9a 100%)",
    elements: "🐴",
    mood: "dawn",
  },
  {
    id: 12,
    title: "War Without End",
    year: "c. 1290",
    narration:
      "A century of crusading, and still Lithuania stands unconquered. The Order fights on three fronts — Lithuanians from the south, Russians from the east, and restive natives within. The brothers are too few, the territory too vast, the enemies too many. Yet they persevere, sustained by faith and iron discipline. The war has no end in sight.",
    bg: "linear-gradient(180deg, #1a2744 0%, #2c1810 100%)",
    elements: "🛡️",
    mood: "dark",
  },
  {
    id: 13,
    title: "The Chronicler's Quill",
    year: "c. 1290",
    narration:
      "An anonymous brother takes up his pen. In rhyming Middle High German verse, he records the Order's century of struggle — the battles won and lost, the brothers who fell, the peoples conquered and converted. His chronicle is partisan, vivid, and invaluable. It is the voice of the crusade itself, speaking across seven centuries.",
    bg: "linear-gradient(180deg, #5a3a28 0%, #2c1810 100%)",
    elements: "📜",
    mood: "gold",
  },
  {
    id: 14,
    title: "What Remains",
    year: "Today",
    narration:
      "The manuscript survives in the Heidelberg University Library — 148 parchment pages of medieval German verse, written in a careful Gothic hand. The castle ruins still dot the Latvian and Estonian landscape. The peoples the chronicle described — Livonians, Semigallians, Curonians — live on in the DNA and place names of the modern Baltic states.",
    bg: "linear-gradient(180deg, #f5f0e8 0%, #e8dfd0 60%, #c4a35a 100%)",
    elements: "📖",
    mood: "triumph",
  },
  {
    id: 15,
    title: "Diatom Art Presents",
    year: "",
    narration:
      'Read the complete manuscript — all 148 folios with full English translations — in the Riga Time Travel digital book reader. The Livonian Rhymed Chronicle: where every page is a window into the medieval Baltic.',
    bg: "linear-gradient(180deg, #1a2744 0%, #2a3754 60%, #c4a35a 100%)",
    elements: "🌟",
    mood: "triumph",
  },
];

const SCENE_DURATION = 20000; // 20 seconds per scene

/* ─── mood-based CSS classes ─── */
function moodOverlay(mood: Scene["mood"]) {
  switch (mood) {
    case "battle":
      return "animate-pulse-slow opacity-20 bg-red-900";
    case "fire":
      return "opacity-15 bg-gradient-to-t from-orange-700 to-transparent";
    case "sea":
      return "opacity-10 bg-gradient-to-b from-blue-400 to-transparent";
    case "winter":
      return "opacity-20 bg-gradient-to-b from-white to-transparent";
    case "dark":
      return "opacity-10 bg-black";
    case "gold":
      return "opacity-10 bg-gradient-to-b from-yellow-600 to-transparent";
    case "dawn":
      return "opacity-10 bg-gradient-to-t from-orange-300 to-transparent";
    case "triumph":
      return "opacity-15 bg-gradient-to-b from-yellow-400 to-transparent";
  }
}

export default function CartoonPage() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [fade, setFade] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef(Date.now());

  const scene = scenes[current];
  const total = scenes.length;

  const goTo = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= total) return;
      setFade(false);
      setTimeout(() => {
        setCurrent(idx);
        startRef.current = Date.now();
        setProgress(0);
        setFade(true);
      }, 400);
    },
    [total]
  );

  /* auto-advance */
  useEffect(() => {
    if (!playing) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    startRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min(elapsed / SCENE_DURATION, 1);
      setProgress(pct);
      if (pct >= 1) {
        if (current < total - 1) {
          goTo(current + 1);
        } else {
          setPlaying(false);
        }
      }
    }, 100);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing, current, total, goTo]);

  const togglePlay = () => {
    if (!playing) startRef.current = Date.now() - progress * SCENE_DURATION;
    setPlaying((p) => !p);
  };

  const elapsed = Math.round(
    (current * SCENE_DURATION + progress * SCENE_DURATION) / 1000
  );
  const totalSec = total * (SCENE_DURATION / 1000);
  const mm = (n: number) =>
    `${Math.floor(n / 60)}:${String(Math.floor(n % 60)).padStart(2, "0")}`;

  return (
    <>
      {/* ── full-screen cinema ── */}
      <div
        className="fixed inset-0 z-50 flex flex-col"
        style={{ background: scene.bg }}
      >
        {/* mood overlay */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${moodOverlay(scene.mood)}`}
        />

        {/* back link */}
        <a
          href="/books/livonian-chronicle"
          className="absolute top-4 left-4 z-10 text-parchment/60 hover:text-gold text-sm font-medieval transition-colors"
        >
          &larr; Back to Chronicle
        </a>

        {/* ── main content area ── */}
        <div
          className={`flex-1 flex flex-col items-center justify-center px-6 transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
        >
          {/* big emoji illustration */}
          <div
            className="text-[120px] sm:text-[160px] mb-4 drop-shadow-lg select-none"
            style={{
              filter: "saturate(0.7) brightness(1.1)",
              animation: "float 4s ease-in-out infinite",
            }}
          >
            {scene.elements}
          </div>

          {/* scene number */}
          <p className="text-gold/60 tracking-[0.4em] uppercase text-xs mb-2">
            Scene {scene.id} of {total}
          </p>

          {/* title */}
          <h1 className="font-gothic text-3xl sm:text-5xl text-parchment text-center mb-1 drop-shadow-md">
            {scene.title}
          </h1>

          {/* year */}
          {scene.year && (
            <p className="text-gold font-medieval text-lg mb-6">
              {scene.year}
            </p>
          )}

          {/* narration */}
          <p className="max-w-2xl text-center text-parchment/85 text-base sm:text-lg leading-relaxed font-serif">
            {scene.narration}
          </p>

          {/* CTA on last scene */}
          {current === total - 1 && (
            <a
              href="/books/livonian-chronicle"
              className="mt-8 inline-block px-8 py-3 bg-gold text-ink font-medieval rounded hover:bg-gold-light transition-colors"
            >
              Open the Chronicle
            </a>
          )}
        </div>

        {/* ── bottom controls ── */}
        <div className="relative z-10 px-4 pb-4 pt-2">
          {/* scene dots */}
          <div className="flex justify-center gap-1.5 mb-3">
            {scenes.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  goTo(i);
                  setPlaying(true);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-gold"
                    : i < current
                      ? "w-1.5 bg-gold/50"
                      : "w-1.5 bg-parchment/20"
                }`}
                aria-label={`Scene ${i + 1}`}
              />
            ))}
          </div>

          {/* progress bar */}
          <div className="w-full h-0.5 bg-parchment/10 rounded overflow-hidden mb-3">
            <div
              className="h-full bg-gold/60 transition-[width] duration-100"
              style={{
                width: `${((current + progress) / total) * 100}%`,
              }}
            />
          </div>

          {/* controls row */}
          <div className="flex items-center justify-between text-parchment/60 text-sm">
            <button
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              className="px-3 py-1 hover:text-gold disabled:opacity-30 transition-colors font-medieval"
            >
              &laquo; Prev
            </button>

            <div className="flex items-center gap-4">
              <span className="tabular-nums text-xs">
                {mm(elapsed)} / {mm(totalSec)}
              </span>
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full border border-parchment/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                {playing ? (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <rect x="2" y="1" width="3.5" height="12" rx="1" />
                    <rect x="8.5" y="1" width="3.5" height="12" rx="1" />
                  </svg>
                ) : (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <polygon points="3,1 13,7 3,13" />
                  </svg>
                )}
              </button>
            </div>

            <button
              onClick={() => goTo(current + 1)}
              disabled={current === total - 1}
              className="px-3 py-1 hover:text-gold disabled:opacity-30 transition-colors font-medieval"
            >
              Next &raquo;
            </button>
          </div>
        </div>
      </div>

      {/* float animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
