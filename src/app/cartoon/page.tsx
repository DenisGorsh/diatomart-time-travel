"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface Scene {
  id: number;
  title: string;
  year: string;
  narration: string;
  image: string;
  credit: string;
  tint: string;
  /** CSS animation name — each scene gets a unique motion */
  animation: string;
}

const scenes: Scene[] = [
  {
    id: 1,
    title: "The Crusaders Sail East",
    year: "1198 – 1201",
    narration:
      "Pope Celestine III declares a crusade against the last pagans of Europe. German knights board cog ships at Lübeck, crossing the grey Baltic toward a land of dark forests and ancient gods. Bishop Albert founds Riga at the mouth of the Daugava — a bridgehead for Christendom.",
    image: "/images/cartoon/generated/scene_01_crusaders.png",
    credit: "12th-century manuscript illumination style",
    tint: "rgba(26,39,68,0.25)",
    animation: "panRight",        // ship sailing east
  },
  {
    id: 2,
    title: "The Sword Brothers",
    year: "1202 – 1236",
    narration:
      "The Order of the Sword Brothers wages permanent holy war across Livonia. Hill-forts burn, sacred groves are felled, entire peoples are baptised at swordpoint. The Livonians, Latgalians, and Estonians resist — but the armored cavalry is unstoppable on open ground.",
    image: "/images/cartoon/generated/scene_02_sword_brothers.png",
    credit: "13th-century chronicle manuscript miniature",
    tint: "rgba(107,29,42,0.2)",
    animation: "panLeft",         // cavalry charging left-to-right, camera tracks
  },
  {
    id: 3,
    title: "The Catastrophe at Saule",
    year: "22 September 1236",
    narration:
      "The Sword Brothers march into Samogitia and walk into a trap. In marshy forest, the pagans surround the German army. Heavy cavalry cannot manoeuvre. Master Volkwin falls. The Order is annihilated in a single afternoon. From the ashes, the survivors merge with the Teutonic Order.",
    image: "/images/cartoon/generated/scene_03_saule.png",
    credit: "13th-century chronicle marginalia, ink and wash",
    tint: "rgba(44,24,16,0.2)",
    animation: "zoomIn",          // closing in on the carnage
  },
  {
    id: 4,
    title: "Castles Rise Across Livonia",
    year: "1237 – 1290",
    narration:
      "The Teutonic Order transforms the landscape. Stone castles rise at every river crossing — Riga, Cēsis, Sigulda, Kuldīga, Dobele. Each fortress is monastery, barracks, and seat of government in one. Riga joins the Hanseatic League in 1282.",
    image: "/images/cartoon/generated/scene_04_castles.png",
    credit: "13th-century architectural manuscript drawing",
    tint: "rgba(196,163,90,0.15)",
    animation: "tiltUp",          // camera tilts up as castles rise
  },
  {
    id: 5,
    title: "The Chronicler's Quill",
    year: "c. 1290",
    narration:
      "An anonymous brother takes up his pen. In 12,000 lines of rhyming Middle High German verse he records a century of crusade — battles won and lost, brothers fallen, peoples conquered. His manuscript survives in Heidelberg: 148 parchment pages speaking across seven centuries.",
    image: "/images/cartoon/generated/scene_05_chronicler.png",
    credit: "Illuminated manuscript author portrait",
    tint: "rgba(90,58,40,0.15)",
    animation: "gentleZoom",      // slow intimate zoom on the scribe
  },
  {
    id: 6,
    title: "The Age of Parchment",
    year: "c. 1500 – 1560",
    narration:
      "Riga is a powerful Hanseatic city. Latin manuscripts fill the monastery libraries. In 1513 the first book is printed in Riga. Then in 1521 the Reformation sweeps through — Protestant doctrines transform the city forever.",
    image: "/images/cartoon/generated/scene_06_parchment.png",
    credit: "16th-century woodcut print",
    tint: "rgba(90,58,40,0.1)",
    animation: "panRight",        // scanning across the workshop
  },
  {
    id: 7,
    title: "The Fall of Livonia",
    year: "1558 – 1621",
    narration:
      "Ivan the Terrible invades in 1558, igniting decades of war. The Livonian Order dissolves. Riga becomes a prize fought over by Russia, Poland, and Sweden. Armies march and counter-march across the ravaged land. In 1581 Riga falls to Poland-Lithuania.",
    image: "/images/cartoon/generated/scene_07_fall.png",
    credit: "16th-century Hogenberg siege engraving",
    tint: "rgba(107,29,42,0.15)",
    animation: "zoomIn",          // zooming into the besieged city
  },
  {
    id: 8,
    title: "The Swedish Crown",
    year: "1621 – 1710",
    narration:
      "Gustav II Adolf conquers Riga, making it the largest city in the entire Swedish Empire — larger than Stockholm itself. Schools are founded, Bibles translated, panoramic engravings capture the city's grandeur. But the Great Famine of 1695 brings death.",
    image: "/images/cartoon/generated/scene_08_swedish.png",
    credit: "17th-century Baroque copperplate engraving",
    tint: "rgba(26,39,68,0.1)",
    animation: "panLeft",         // panoramic sweep across the harbor
  },
  {
    id: 9,
    title: "Peter's City",
    year: "1710 – 1795",
    narration:
      "The Russian siege of 1710 and a catastrophic plague kill two-thirds of the population. Peter the Great claims the ruined city. The Treaty of Nystad cedes the Baltic to Russia. Slowly, painfully, Riga rebuilds under imperial rule.",
    image: "/images/cartoon/generated/scene_09_peter.png",
    credit: "18th-century copperplate engraving, hand-tinted",
    tint: "rgba(26,39,68,0.15)",
    animation: "zoomOut",         // pulling back to reveal the devastation
  },
  {
    id: 10,
    title: "The Industrial Titan",
    year: "1795 – 1860",
    narration:
      "Napoleon's Grande Armée approaches in 1812 — Riga's suburbs are burned as desperate defence. Serfdom is abolished. Railways arrive. The medieval walls come down. Riga transforms from a walled Hanseatic town into a modern industrial seaport.",
    image: "/images/cartoon/generated/scene_10_industrial.png",
    credit: "Early 19th-century lithograph",
    tint: "rgba(44,24,16,0.1)",
    animation: "panRight",        // following the train
  },
  {
    id: 11,
    title: "The Latvian Awakening",
    year: "1860 – 1905",
    narration:
      "Population explodes from 77,000 to 282,000 in four decades. Latvians become the city's largest group. The first Song Festival in 1873 ignites national pride. Art Nouveau buildings soar skyward. Riga becomes the third-largest industrial city in the Russian Empire.",
    image: "/images/cartoon/generated/scene_11_awakening.png",
    credit: "Late 19th-century chromolithograph poster",
    tint: "rgba(196,163,90,0.1)",
    animation: "tiltUp",          // sweeping up to the flags
  },
  {
    id: 12,
    title: "The Eve of War",
    year: "1905 – 1914",
    narration:
      "Imperial Riga reaches its zenith: nearly 600,000 souls, hundreds of Jugendstil masterpieces, a rich tapestry of Latvian, German, Russian, and Jewish cultures. Then in August 1914, mobilisation orders arrive. The Great War begins. An era ends. Nothing will ever be the same.",
    image: "/images/cartoon/generated/scene_12_war.png",
    credit: "Early 20th-century expressionist woodcut",
    tint: "rgba(107,29,42,0.15)",
    animation: "dramaPush",       // dramatic slow push into the marching column
  },
];

const SCENE_DURATION = 25000;

export default function CartoonPage() {
  const [cur, setCur] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [fade, setFade] = useState(true);
  const [progress, setProgress] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const t0 = useRef(Date.now());

  const scene = scenes[cur];
  const N = scenes.length;

  const goTo = useCallback(
    (i: number) => {
      if (i < 0 || i >= N) return;
      setFade(false);
      setTimeout(() => {
        setCur(i);
        t0.current = Date.now();
        setProgress(0);
        setFade(true);
      }, 500);
    },
    [N]
  );

  useEffect(() => {
    if (!playing) {
      if (timer.current) clearInterval(timer.current);
      return;
    }
    t0.current = Date.now();
    timer.current = setInterval(() => {
      const p = Math.min((Date.now() - t0.current) / SCENE_DURATION, 1);
      setProgress(p);
      if (p >= 1) {
        if (cur < N - 1) goTo(cur + 1);
        else setPlaying(false);
      }
    }, 80);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing, cur, N, goTo]);

  const toggle = () => {
    if (!playing) t0.current = Date.now() - progress * SCENE_DURATION;
    setPlaying((p) => !p);
  };

  const sec = Math.round((cur * SCENE_DURATION + progress * SCENE_DURATION) / 1000);
  const tot = N * (SCENE_DURATION / 1000);
  const mm = (s: number) =>
    `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* ── animation keyframes ── */}
      <style>{`
        @keyframes panRight {
          0%   { transform: scale(1.15) translateX(-4%); }
          100% { transform: scale(1.15) translateX(4%); }
        }
        @keyframes panLeft {
          0%   { transform: scale(1.15) translateX(4%); }
          100% { transform: scale(1.15) translateX(-4%); }
        }
        @keyframes zoomIn {
          0%   { transform: scale(1.0); }
          100% { transform: scale(1.2); }
        }
        @keyframes zoomOut {
          0%   { transform: scale(1.25); }
          100% { transform: scale(1.0); }
        }
        @keyframes tiltUp {
          0%   { transform: scale(1.2) translateY(5%); }
          100% { transform: scale(1.2) translateY(-5%); }
        }
        @keyframes gentleZoom {
          0%   { transform: scale(1.0) translate(0, 0); }
          100% { transform: scale(1.12) translate(-1%, -2%); }
        }
        @keyframes dramaPush {
          0%   { transform: scale(1.0) translateY(0); }
          60%  { transform: scale(1.15) translateY(-1%); }
          100% { transform: scale(1.22) translateY(-2%); }
        }
      `}</style>

      {/* ── image + overlay ── */}
      <div
        className={`flex-1 relative overflow-hidden transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
      >
        {/* animated background image */}
        <div
          className="absolute inset-0"
          key={scene.id}
          style={{
            animation: `${scene.animation} 10s ease-in-out forwards`,
          }}
        >
          <Image
            src={scene.image}
            alt={scene.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* colour tint */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: scene.tint }}
        />

        {/* vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        {/* back link */}
        <a
          href="/chapters"
          className="absolute top-4 left-4 z-10 text-parchment/50 hover:text-gold text-xs font-medieval transition-colors"
        >
          &larr; Back to Timeline
        </a>

        {/* text overlay — bottom */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div
            className="px-6 sm:px-12 pb-6 pt-24"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)",
            }}
          >
            <p className="text-gold/50 tracking-[0.35em] uppercase text-[10px] mb-1 font-medieval">
              {scene.id} / {N}
            </p>
            <h1 className="font-gothic text-3xl sm:text-5xl text-parchment mb-1 leading-tight">
              {scene.title}
            </h1>
            <p className="text-gold font-medieval text-sm mb-3">
              {scene.year}
            </p>
            <p className="max-w-2xl text-parchment/80 text-sm sm:text-base leading-relaxed">
              {scene.narration}
            </p>
            {cur === N - 1 && (
              <a
                href="/books/livonian-chronicle"
                className="mt-4 inline-block px-6 py-2 bg-gold text-ink text-sm font-medieval rounded hover:bg-gold-light transition-colors"
              >
                Open the Chronicle
              </a>
            )}
            <p className="mt-2 text-parchment/20 text-[9px] italic">
              {scene.credit}
            </p>
          </div>
        </div>
      </div>

      {/* ── controls ── */}
      <div className="bg-black/90 px-4 py-3 flex-shrink-0">
        {/* dots */}
        <div className="flex justify-center gap-1.5 mb-2">
          {scenes.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                goTo(i);
                setPlaying(true);
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === cur
                  ? "w-6 bg-gold"
                  : i < cur
                    ? "w-1.5 bg-gold/40"
                    : "w-1.5 bg-parchment/15"
              }`}
              aria-label={`Scene ${i + 1}`}
            />
          ))}
        </div>

        {/* progress bar */}
        <div className="w-full h-[2px] bg-parchment/10 rounded overflow-hidden mb-2">
          <div
            className="h-full bg-gold/50 transition-[width] duration-75"
            style={{ width: `${((cur + progress) / N) * 100}%` }}
          />
        </div>

        {/* buttons row */}
        <div className="flex items-center justify-between text-parchment/50 text-xs">
          <button
            onClick={() => goTo(cur - 1)}
            disabled={cur === 0}
            className="px-3 py-1 hover:text-gold disabled:opacity-20 transition-colors font-medieval"
          >
            &laquo; Prev
          </button>

          <div className="flex items-center gap-3">
            <span className="tabular-nums text-[10px] text-parchment/30">
              {mm(sec)} / {mm(tot)}
            </span>
            <button
              onClick={toggle}
              className="w-8 h-8 rounded-full border border-parchment/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              {playing ? (
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="currentColor"
                >
                  <rect x="1" y="0" width="3" height="12" rx="0.5" />
                  <rect x="6" y="0" width="3" height="12" rx="0.5" />
                </svg>
              ) : (
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="currentColor"
                >
                  <polygon points="1,0 10,6 1,12" />
                </svg>
              )}
            </button>
          </div>

          <button
            onClick={() => goTo(cur + 1)}
            disabled={cur === N - 1}
            className="px-3 py-1 hover:text-gold disabled:opacity-20 transition-colors font-medieval"
          >
            Next &raquo;
          </button>
        </div>
      </div>
    </div>
  );
}
