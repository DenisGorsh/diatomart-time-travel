"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface Scene {
  id: number;
  title: string;
  year: string;
  narration: string;
  image: string;
  video: string;
  credit: string;
}

const scenes: Scene[] = [
  {
    id: 1,
    title: "The Crusaders Sail East",
    year: "1198 – 1201",
    narration:
      "Pope Celestine III declares a crusade against the last pagans of Europe. German knights board cog ships at Lübeck, crossing the grey Baltic toward a land of dark forests and ancient gods. Bishop Albert founds Riga at the mouth of the Daugava — a bridgehead for Christendom.",
    image: "/images/cartoon/generated/scene_01_crusaders.png",
    video: "/videos/cartoon/scene_01_crusaders.mp4",
    credit: "12th-century manuscript illumination style",
  },
  {
    id: 2,
    title: "The Sword Brothers",
    year: "1202 – 1236",
    narration:
      "The Order of the Sword Brothers wages permanent holy war across Livonia. Hill-forts burn, sacred groves are felled, entire peoples are baptised at swordpoint. The Livonians, Latgalians, and Estonians resist — but the armored cavalry is unstoppable on open ground.",
    image: "/images/cartoon/generated/scene_02_sword_brothers.png",
    video: "/videos/cartoon/scene_02_sword_brothers.mp4",
    credit: "13th-century chronicle manuscript miniature",
  },
  {
    id: 3,
    title: "The Catastrophe at Saule",
    year: "22 September 1236",
    narration:
      "The Sword Brothers march into Samogitia and walk into a trap. In marshy forest, the pagans surround the German army. Heavy cavalry cannot manoeuvre. Master Volkwin falls. The Order is annihilated in a single afternoon. From the ashes, the survivors merge with the Teutonic Order.",
    image: "/images/cartoon/generated/scene_03_saule.png",
    video: "/videos/cartoon/scene_03_saule.mp4",
    credit: "13th-century chronicle marginalia, ink and wash",
  },
  {
    id: 4,
    title: "Castles Rise Across Livonia",
    year: "1237 – 1290",
    narration:
      "The Teutonic Order transforms the landscape. Stone castles rise at every river crossing — Riga, Cēsis, Sigulda, Kuldīga, Dobele. Each fortress is monastery, barracks, and seat of government in one. Riga joins the Hanseatic League in 1282.",
    image: "/images/cartoon/generated/scene_04_castles.png",
    video: "/videos/cartoon/scene_04_castles.mp4",
    credit: "13th-century architectural manuscript drawing",
  },
  {
    id: 5,
    title: "The Chronicler's Quill",
    year: "c. 1290",
    narration:
      "An anonymous brother takes up his pen. In 12,000 lines of rhyming Middle High German verse he records a century of crusade — battles won and lost, brothers fallen, peoples conquered. His manuscript survives in Heidelberg: 148 parchment pages speaking across seven centuries.",
    image: "/images/cartoon/generated/scene_05_chronicler.png",
    video: "/videos/cartoon/scene_05_chronicler.mp4",
    credit: "Illuminated manuscript author portrait",
  },
  {
    id: 6,
    title: "The Age of Parchment",
    year: "c. 1500 – 1560",
    narration:
      "Riga is a powerful Hanseatic city. Latin manuscripts fill the monastery libraries. In 1513 the first book is printed in Riga. Then in 1521 the Reformation sweeps through — Protestant doctrines transform the city forever.",
    image: "/images/cartoon/generated/scene_06_parchment.png",
    video: "/videos/cartoon/scene_06_parchment.mp4",
    credit: "16th-century woodcut print",
  },
  {
    id: 7,
    title: "The Fall of Livonia",
    year: "1558 – 1621",
    narration:
      "Ivan the Terrible invades in 1558, igniting decades of war. The Livonian Order dissolves. Riga becomes a prize fought over by Russia, Poland, and Sweden. Armies march and counter-march across the ravaged land. In 1581 Riga falls to Poland-Lithuania.",
    image: "/images/cartoon/generated/scene_07_fall.png",
    video: "/videos/cartoon/scene_07_fall.mp4",
    credit: "16th-century Hogenberg siege engraving",
  },
  {
    id: 8,
    title: "The Swedish Crown",
    year: "1621 – 1710",
    narration:
      "Gustav II Adolf conquers Riga, making it the largest city in the entire Swedish Empire — larger than Stockholm itself. Schools are founded, Bibles translated, panoramic engravings capture the city's grandeur. But the Great Famine of 1695 brings death.",
    image: "/images/cartoon/generated/scene_08_swedish.png",
    video: "/videos/cartoon/scene_08_swedish.mp4",
    credit: "17th-century Baroque copperplate engraving",
  },
  {
    id: 9,
    title: "Peter's City",
    year: "1710 – 1795",
    narration:
      "The Russian siege of 1710 and a catastrophic plague kill two-thirds of the population. Peter the Great claims the ruined city. The Treaty of Nystad cedes the Baltic to Russia. Slowly, painfully, Riga rebuilds under imperial rule.",
    image: "/images/cartoon/generated/scene_09_peter.png",
    video: "/videos/cartoon/scene_09_peter.mp4",
    credit: "18th-century copperplate engraving, hand-tinted",
  },
  {
    id: 10,
    title: "The Industrial Titan",
    year: "1795 – 1860",
    narration:
      "Napoleon's Grande Armée approaches in 1812 — Riga's suburbs are burned as desperate defence. Serfdom is abolished. Railways arrive. The medieval walls come down. Riga transforms from a walled Hanseatic town into a modern industrial seaport.",
    image: "/images/cartoon/generated/scene_10_industrial.png",
    video: "/videos/cartoon/scene_10_industrial.mp4",
    credit: "Early 19th-century lithograph",
  },
  {
    id: 11,
    title: "The Latvian Awakening",
    year: "1860 – 1905",
    narration:
      "Population explodes from 77,000 to 282,000 in four decades. Latvians become the city's largest group. The first Song Festival in 1873 ignites national pride. Art Nouveau buildings soar skyward. Riga becomes the third-largest industrial city in the Russian Empire.",
    image: "/images/cartoon/generated/scene_11_awakening.png",
    video: "/videos/cartoon/scene_11_awakening.mp4",
    credit: "Late 19th-century chromolithograph poster",
  },
  {
    id: 12,
    title: "The Eve of War",
    year: "1905 – 1914",
    narration:
      "Imperial Riga reaches its zenith: nearly 600,000 souls, hundreds of Jugendstil masterpieces, a rich tapestry of Latvian, German, Russian, and Jewish cultures. Then in August 1914, mobilisation orders arrive. The Great War begins. An era ends. Nothing will ever be the same.",
    image: "/images/cartoon/generated/scene_12_war.png",
    video: "/videos/cartoon/scene_12_war.mp4",
    credit: "Early 20th-century expressionist woodcut",
  },
];

function VideoCard({ scene }: { scene: Scene }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play().catch(() => setVideoFailed(true));
      setPlaying(true);
    }
  };

  return (
    <div className="bg-parchment-dark border border-gold/15 rounded overflow-hidden">
      {/* video / image area */}
      <div className="relative aspect-video bg-black cursor-pointer group" onClick={toggle}>
        {videoFailed ? (
          <Image
            src={scene.image}
            alt={scene.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={scene.video}
              poster={scene.image}
              muted
              loop
              playsInline
              onError={() => setVideoFailed(true)}
              onEnded={() => setPlaying(false)}
            />
            {/* play/pause overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity ${
                playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <div className="w-14 h-14 rounded-full bg-black/50 border border-gold/40 flex items-center justify-center">
                {playing ? (
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" className="text-gold">
                    <rect x="2" y="0" width="4" height="20" rx="1" />
                    <rect x="10" y="0" width="4" height="20" rx="1" />
                  </svg>
                ) : (
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" className="text-gold ml-1">
                    <polygon points="0,0 16,10 0,20" />
                  </svg>
                )}
              </div>
            </div>
          </>
        )}

        {/* scene number badge */}
        <span className="absolute top-2 left-2 bg-black/60 text-gold text-[10px] font-medieval px-2 py-0.5 rounded">
          {scene.id} / {scenes.length}
        </span>
      </div>

      {/* text area */}
      <div className="p-4">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-display text-2xl text-gold/30">
            {String(scene.id).padStart(2, "0")}
          </span>
          <h2 className="font-gothic text-xl text-ink leading-tight">
            {scene.title}
          </h2>
        </div>
        <p className="text-gold/70 font-medieval text-xs mb-2">{scene.year}</p>
        <p className="text-sm text-ink-light leading-relaxed">{scene.narration}</p>
        <p className="mt-2 text-[9px] text-ink-light/40 italic">{scene.credit}</p>
      </div>
    </div>
  );
}

export default function CartoonPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy text-parchment py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
            12 Animated Scenes
          </p>
          <h1 className="font-gothic text-4xl sm:text-5xl mb-4">
            Animations
          </h1>
          <p className="text-parchment/70 text-lg">
            718 years of Riga&rsquo;s history brought to life through period-accurate visual styles
          </p>
        </div>
      </section>

      {/* Video grid */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {scenes.map((scene) => (
            <VideoCard key={scene.id} scene={scene} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy text-parchment text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl mb-3">Continue the Journey</h2>
          <p className="text-parchment/70 mb-6">
            Explore the full timeline and read the Livonian Rhymed Chronicle.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/chapters"
              className="bg-gold text-ink px-8 py-3 tracking-wide hover:bg-gold-light transition-colors"
            >
              View Timeline
            </a>
            <a
              href="/books/livonian-chronicle"
              className="border border-parchment/30 px-8 py-3 tracking-wide hover:border-gold hover:text-gold transition-colors"
            >
              Open the Chronicle
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
