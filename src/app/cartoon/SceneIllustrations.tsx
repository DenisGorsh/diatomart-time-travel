"use client";

/**
 * Animated SVG illustrations for the 12 Riga Time Travel cartoon scenes.
 * Each scene uses a visual style matching its historical era:
 *   1–5  Medieval manuscript miniatures (bold outlines, flat colour, gold)
 *   6–7  Renaissance / woodcut (hatching, limited palette)
 *   8–9  Baroque / copperplate engraving (fine lines, dramatic)
 *  10    Early-19th-century lithograph
 *  11    Late-19th-century / Art Nouveau poster
 *  12    Early-20th-century propaganda / expressionist
 */

/* ── Scene 1 ─ The Crusaders Sail East (1198–1201) ── */
export function Scene1() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="s1sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a274a" />
          <stop offset="100%" stopColor="#3b5998" />
        </linearGradient>
        <linearGradient id="s1sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0d1b2a" />
        </linearGradient>
      </defs>
      <style>{`
        @keyframes s1wave1 { 0%,100%{transform:translateX(0)} 50%{transform:translateX(-40px)} }
        @keyframes s1wave2 { 0%,100%{transform:translateX(0)} 50%{transform:translateX(30px)} }
        @keyframes s1rock  { 0%,100%{transform:rotate(-2deg)} 50%{transform:rotate(2deg)} }
        @keyframes s1gull  { 0%{transform:translate(0,0)} 100%{transform:translate(120px,-30px)} }
        @keyframes s1flag  { 0%,100%{transform:skewX(0deg)} 50%{transform:skewX(-5deg)} }
        @keyframes s1star  { 0%,100%{opacity:0.3} 50%{opacity:1} }
      `}</style>

      {/* sky */}
      <rect width="800" height="500" fill="url(#s1sky)" />

      {/* stars */}
      {[{x:120,y:40,d:0},{x:250,y:65,d:0.5},{x:500,y:30,d:1},{x:650,y:55,d:1.5},{x:720,y:80,d:0.8},{x:380,y:20,d:2}].map((s,i)=>(
        <circle key={i} cx={s.x} cy={s.y} r="1.5" fill="#c4a35a" opacity="0.6"
          style={{animation:`s1star 2s ease-in-out ${s.d}s infinite`}} />
      ))}

      {/* moon */}
      <circle cx="680" cy="80" r="25" fill="#c4a35a" opacity="0.8" />
      <circle cx="690" cy="74" r="22" fill="#1a274a" />

      {/* distant shore */}
      <path d="M600,260 Q650,240 700,250 Q750,245 800,260 L800,280 L600,280Z" fill="#1a2744" opacity="0.6" />
      <rect x="660" y="230" width="3" height="30" fill="#1a2744" opacity="0.5" />
      <polygon points="660,232 680,240 660,248" fill="#1a2744" opacity="0.4" />

      {/* sea */}
      <rect y="270" width="800" height="230" fill="url(#s1sea)" />

      {/* waves back */}
      <g style={{animation:"s1wave1 6s ease-in-out infinite"}}>
        <path d="M0,290 Q50,275 100,290 Q150,305 200,290 Q250,275 300,290 Q350,305 400,290 Q450,275 500,290 Q550,305 600,290 Q650,275 700,290 Q750,305 800,290 L800,310 L0,310Z" fill="#1e3a5f" opacity="0.6" />
      </g>

      {/* ship group — rocking */}
      <g transform="translate(300,220)" style={{transformOrigin:"300px 320px", animation:"s1rock 4s ease-in-out infinite"}}>
        {/* hull — medieval cog */}
        <path d="M-60,60 Q-70,40 -50,20 L50,20 Q70,40 60,60 Z" fill="#5c3a1e" stroke="#2a1a0a" strokeWidth="2" />
        <path d="M-55,55 Q-65,38 -48,22 L48,22 Q65,38 55,55 Z" fill="#7a5230" />
        {/* waterline stripes */}
        <line x1="-55" y1="45" x2="55" y2="45" stroke="#4a2a10" strokeWidth="1.5" />
        <line x1="-50" y1="52" x2="50" y2="52" stroke="#4a2a10" strokeWidth="1" />

        {/* mast */}
        <rect x="-3" y="-90" width="6" height="110" fill="#4a2a10" rx="1" />
        {/* yard arm */}
        <rect x="-35" y="-80" width="70" height="4" fill="#4a2a10" rx="1" />

        {/* sail with cross */}
        <g style={{transformOrigin:"-35px -80px", animation:"s1flag 3s ease-in-out infinite"}}>
          <rect x="-32" y="-76" width="64" height="60" fill="#d4c8a0" stroke="#8a7a5a" strokeWidth="1" rx="1" />
          {/* red crusader cross */}
          <rect x="-5" y="-72" width="10" height="52" fill="#8b1a1a" />
          <rect x="-22" y="-56" width="44" height="10" fill="#8b1a1a" />
        </g>

        {/* stern castle */}
        <rect x="30" y="-5" width="25" height="25" fill="#6b4226" stroke="#2a1a0a" strokeWidth="1.5" />
        <rect x="32" y="0" width="8" height="8" fill="#1a274a" stroke="#2a1a0a" strokeWidth="0.5" />
        <rect x="44" y="0" width="8" height="8" fill="#1a274a" stroke="#2a1a0a" strokeWidth="0.5" />

        {/* bow castle */}
        <rect x="-55" y="-5" width="20" height="20" fill="#6b4226" stroke="#2a1a0a" strokeWidth="1.5" />

        {/* crew silhouettes */}
        <circle cx="-20" cy="8" r="4" fill="#1a1a1a" />
        <rect x="-22" y="12" width="4" height="8" fill="#1a1a1a" />
        <circle cx="10" cy="5" r="4" fill="#1a1a1a" />
        <rect x="8" y="9" width="4" height="10" fill="#1a1a1a" />
        <circle cx="-5" cy="10" r="3.5" fill="#1a1a1a" />
        <rect x="-7" y="13" width="4" height="7" fill="#1a1a1a" />
      </g>

      {/* waves front */}
      <g style={{animation:"s1wave2 5s ease-in-out infinite"}}>
        <path d="M0,320 Q40,305 80,320 Q120,335 160,320 Q200,305 240,320 Q280,335 320,320 Q360,305 400,320 Q440,335 480,320 Q520,305 560,320 Q600,335 640,320 Q680,305 720,320 Q760,335 800,320 L800,360 L0,360Z" fill="#15304f" opacity="0.8" />
      </g>
      <g style={{animation:"s1wave1 7s ease-in-out 1s infinite"}}>
        <path d="M0,350 Q50,338 100,350 Q150,362 200,350 Q250,338 300,350 Q350,362 400,350 Q450,338 500,350 Q550,362 600,350 Q650,338 700,350 Q750,362 800,350 L800,500 L0,500Z" fill="#0d1b2a" />
      </g>

      {/* foam highlights */}
      {[50,180,350,520,680].map((x,i)=>(
        <ellipse key={i} cx={x} cy={322} rx="15" ry="2" fill="white" opacity="0.15"
          style={{animation:`s1wave2 ${4+i*0.5}s ease-in-out ${i*0.3}s infinite`}} />
      ))}

      {/* seagulls */}
      <g style={{animation:"s1gull 12s linear infinite"}} opacity="0.5">
        <path d="M100,180 Q105,175 110,180 Q115,175 120,180" fill="none" stroke="#c4a35a" strokeWidth="1.5" />
      </g>
      <g style={{animation:"s1gull 15s linear 3s infinite"}} opacity="0.4">
        <path d="M150,160 Q154,156 158,160 Q162,156 166,160" fill="none" stroke="#c4a35a" strokeWidth="1.2" />
      </g>

      {/* manuscript border (medieval frame) */}
      <rect x="8" y="8" width="784" height="484" fill="none" stroke="#c4a35a" strokeWidth="2" opacity="0.25" rx="2" />
      <rect x="14" y="14" width="772" height="472" fill="none" stroke="#c4a35a" strokeWidth="1" opacity="0.15" rx="1" />
    </svg>
  );
}

/* ── Scene 2 ─ The Sword Brothers (1202–1236) ── */
export function Scene2() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="s2sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8b1a1a" />
          <stop offset="60%" stopColor="#c4763a" />
          <stop offset="100%" stopColor="#d4a040" />
        </linearGradient>
      </defs>
      <style>{`
        @keyframes s2flame { 0%,100%{transform:scaleY(1);opacity:0.9} 50%{transform:scaleY(1.3);opacity:1} }
        @keyframes s2horse { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes s2smoke { 0%{transform:translateY(0);opacity:0.6} 100%{transform:translateY(-80px);opacity:0} }
        @keyframes s2banner { 0%,100%{transform:skewX(0)} 50%{transform:skewX(-8deg)} }
        @keyframes s2spark { 0%{transform:translateY(0);opacity:1} 100%{transform:translateY(-60px);opacity:0} }
      `}</style>

      {/* sky — blood red to orange */}
      <rect width="800" height="500" fill="url(#s2sky)" />

      {/* hills */}
      <path d="M0,350 Q100,310 200,340 Q350,300 500,330 Q650,310 800,340 L800,500 L0,500Z" fill="#2a1a0a" />
      <path d="M0,370 Q150,340 300,360 Q500,330 650,350 Q750,340 800,360 L800,500 L0,500Z" fill="#3a2a15" />

      {/* burning village */}
      <g transform="translate(580,280)">
        {/* huts */}
        <rect x="0" y="20" width="30" height="25" fill="#5c3a1e" stroke="#2a1a0a" strokeWidth="1.5" />
        <polygon points="0,20 15,-5 30,20" fill="#7a4a2a" stroke="#2a1a0a" strokeWidth="1" />
        <rect x="50" y="25" width="25" height="20" fill="#5c3a1e" stroke="#2a1a0a" strokeWidth="1.5" />
        <polygon points="50,25 62,-2 75,25" fill="#7a4a2a" stroke="#2a1a0a" strokeWidth="1" />
        <rect x="-30" y="22" width="22" height="23" fill="#5c3a1e" stroke="#2a1a0a" strokeWidth="1.5" />
        <polygon points="-30,22 -19,0 -8,22" fill="#7a4a2a" stroke="#2a1a0a" strokeWidth="1" />

        {/* flames */}
        {[{x:15,h:30},{x:62,h:25},{x:-19,h:22}].map((f,i)=>(
          <g key={i} style={{transformOrigin:`${f.x}px -5px`, animation:`s2flame ${0.4+i*0.15}s ease-in-out infinite`}}>
            <ellipse cx={f.x} cy={-f.h/2} rx="10" ry={f.h/2} fill="#ff6600" opacity="0.9" />
            <ellipse cx={f.x} cy={-f.h/2-5} rx="6" ry={f.h/3} fill="#ffcc00" opacity="0.8" />
          </g>
        ))}

        {/* smoke */}
        {[0,1,2,3].map(i=>(
          <circle key={i} cx={15+i*20} cy={-30} r={8+i*3} fill="#333" opacity="0.4"
            style={{animation:`s2smoke ${3+i*0.5}s ease-out ${i*0.8}s infinite`}} />
        ))}

        {/* sparks */}
        {[0,1,2,3,4].map(i=>(
          <circle key={i} cx={10+i*15} cy={-10} r="1.5" fill="#ffcc00"
            style={{animation:`s2spark ${1.5+i*0.3}s ease-out ${i*0.4}s infinite`}} />
        ))}
      </g>

      {/* mounted knight 1 (leader) */}
      <g transform="translate(200,300)" style={{animation:"s2horse 0.6s ease-in-out infinite"}}>
        {/* horse body */}
        <ellipse cx="0" cy="10" rx="35" ry="18" fill="#2a2a2a" />
        {/* horse legs */}
        <rect x="-25" y="25" width="5" height="25" fill="#2a2a2a" rx="2" />
        <rect x="-15" y="28" width="5" height="22" fill="#2a2a2a" rx="2" />
        <rect x="15" y="25" width="5" height="25" fill="#2a2a2a" rx="2" />
        <rect x="25" y="28" width="5" height="22" fill="#2a2a2a" rx="2" />
        {/* horse head */}
        <ellipse cx="-38" cy="-5" rx="12" ry="10" fill="#2a2a2a" transform="rotate(-20,-38,-5)" />
        {/* tail */}
        <path d="M35,5 Q50,0 45,15" stroke="#1a1a1a" fill="none" strokeWidth="3" />

        {/* rider torso */}
        <rect x="-8" y="-30" width="16" height="30" fill="#666" rx="2" />
        {/* helmet */}
        <rect x="-10" y="-44" width="20" height="16" fill="#888" rx="3" />
        <rect x="-12" y="-38" width="24" height="3" fill="#666" />
        {/* white surcoat with red cross */}
        <rect x="-7" y="-26" width="14" height="22" fill="#d4c8a0" />
        <rect x="-1.5" y="-24" width="3" height="18" fill="#8b1a1a" />
        <rect x="-6" y="-18" width="12" height="3" fill="#8b1a1a" />

        {/* sword raised */}
        <rect x="12" y="-55" width="3" height="30" fill="#aaa" transform="rotate(30,12,-55)" />
        <rect x="8" y="-28" width="10" height="3" fill="#8a7a5a" transform="rotate(30,12,-28)" />

        {/* shield */}
        <ellipse cx="-14" cy="-15" rx="8" ry="10" fill="#d4c8a0" stroke="#8a7a5a" strokeWidth="1" />
        <rect x="-15.5" y="-22" width="3" height="14" fill="#8b1a1a" />
        <rect x="-20" y="-17" width="12" height="3" fill="#8b1a1a" />
      </g>

      {/* knight 2 */}
      <g transform="translate(310,310)" style={{animation:"s2horse 0.55s ease-in-out 0.1s infinite"}}>
        <ellipse cx="0" cy="10" rx="30" ry="15" fill="#333" />
        <rect x="-20" y="22" width="4" height="22" fill="#333" rx="1" />
        <rect x="-10" y="24" width="4" height="20" fill="#333" rx="1" />
        <rect x="12" y="22" width="4" height="22" fill="#333" rx="1" />
        <rect x="22" y="24" width="4" height="20" fill="#333" rx="1" />
        <ellipse cx="-32" cy="0" rx="10" ry="8" fill="#333" transform="rotate(-15,-32,0)" />
        <rect x="-7" y="-25" width="14" height="26" fill="#555" rx="2" />
        <rect x="-9" y="-38" width="18" height="14" fill="#777" rx="3" />
        <rect x="-6" y="-22" width="12" height="19" fill="#d4c8a0" />
        <rect x="-1.5" y="-20" width="3" height="15" fill="#8b1a1a" />
        <rect x="-5" y="-15" width="10" height="3" fill="#8b1a1a" />
      </g>

      {/* knight 3 */}
      <g transform="translate(130,315)" style={{animation:"s2horse 0.65s ease-in-out 0.2s infinite"}}>
        <ellipse cx="0" cy="10" rx="28" ry="14" fill="#2a2a2a" />
        <rect x="-18" y="22" width="4" height="20" fill="#2a2a2a" rx="1" />
        <rect x="-8" y="24" width="4" height="18" fill="#2a2a2a" rx="1" />
        <rect x="10" y="22" width="4" height="20" fill="#2a2a2a" rx="1" />
        <rect x="18" y="24" width="4" height="18" fill="#2a2a2a" rx="1" />
        <ellipse cx="-30" cy="0" rx="9" ry="7" fill="#2a2a2a" transform="rotate(-15,-30,0)" />
        <rect x="-6" y="-22" width="12" height="24" fill="#555" rx="2" />
        <rect x="-8" y="-34" width="16" height="13" fill="#777" rx="2" />

        {/* banner on lance */}
        <rect x="10" y="-60" width="2" height="55" fill="#5c3a1e" />
        <g style={{transformOrigin:"12px -60px", animation:"s2banner 2s ease-in-out infinite"}}>
          <rect x="12" y="-58" width="28" height="18" fill="#d4c8a0" stroke="#8a7a5a" strokeWidth="0.8" />
          <rect x="23" y="-56" width="4" height="14" fill="#8b1a1a" />
          <rect x="17" y="-51" width="16" height="4" fill="#8b1a1a" />
        </g>
      </g>

      {/* sacred grove — trees being felled */}
      <g transform="translate(480,290)">
        <rect x="0" y="0" width="8" height="40" fill="#3a2a15" />
        <ellipse cx="4" cy="-10" rx="18" ry="22" fill="#2a4a1a" opacity="0.8" />
        <rect x="50" y="-5" width="7" height="45" fill="#3a2a15" transform="rotate(25,50,-5)" />
        <ellipse cx="53" cy="-15" rx="15" ry="18" fill="#2a4a1a" opacity="0.6" transform="rotate(25,53,-15)" />
      </g>

      {/* ground / path */}
      <path d="M0,380 Q200,365 400,375 Q600,360 800,370 L800,500 L0,500Z" fill="#3a2a15" />
      <path d="M0,400 L300,390 L500,395 L800,385 L800,500 L0,500Z" fill="#2a1a0a" opacity="0.5" />

      {/* medieval manuscript border */}
      <rect x="8" y="8" width="784" height="484" fill="none" stroke="#c4a35a" strokeWidth="2" opacity="0.25" rx="2" />
      <rect x="14" y="14" width="772" height="472" fill="none" stroke="#c4a35a" strokeWidth="1" opacity="0.15" />
    </svg>
  );
}

/* ── Scene 3 ─ The Catastrophe at Saule (1236) ── */
export function Scene3() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="s3sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#2c1810" />
        </linearGradient>
        <filter id="s3fog">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>
      <style>{`
        @keyframes s3arrow { 0%{transform:translate(0,0);opacity:1} 100%{transform:translate(80px,40px);opacity:0} }
        @keyframes s3fall  { 0%{transform:rotate(0deg)} 100%{transform:rotate(90deg);opacity:0} }
        @keyframes s3fog   { 0%,100%{opacity:0.15} 50%{opacity:0.3} }
        @keyframes s3drip  { 0%{transform:translateY(0)} 100%{transform:translateY(20px);opacity:0} }
      `}</style>

      <rect width="800" height="500" fill="url(#s3sky)" />

      {/* fog layer */}
      <rect width="800" height="500" filter="url(#s3fog)" opacity="0.08" style={{animation:"s3fog 8s ease-in-out infinite"}} />

      {/* dark forest */}
      {[0,80,160,240,320,400,480,560,640,720].map((x,i)=>(
        <g key={i}>
          <rect x={x+10} y={120+i%3*20} width="12" height={250-i%3*20} fill="#1a120a" />
          <polygon points={`${x+16},${80+i%3*15} ${x-15},${200+i%3*20} ${x+47},${200+i%3*20}`} fill={i%2===0?"#1a2a10":"#152008"} opacity="0.9" />
          <polygon points={`${x+16},${110+i%3*10} ${x-8},${180+i%3*15} ${x+40},${180+i%3*15}`} fill={i%2===0?"#223015":"#1a2a10"} opacity="0.8" />
        </g>
      ))}

      {/* marsh ground */}
      <path d="M0,380 Q100,370 200,385 Q300,375 400,380 Q500,370 600,385 Q700,375 800,380 L800,500 L0,500Z" fill="#1a1208" />
      {/* water puddles */}
      {[100,280,450,620].map((x,i)=>(
        <ellipse key={i} cx={x} cy={400+i%2*10} rx="35" ry="5" fill="#1e2a3f" opacity="0.4" />
      ))}

      {/* fallen knight (centre) */}
      <g transform="translate(350,360)">
        <rect x="0" y="0" width="40" height="12" fill="#666" rx="2" transform="rotate(15)" />
        <circle cx="-5" cy="-2" r="8" fill="#888" />
        <rect x="35" y="-10" width="3" height="35" fill="#aaa" transform="rotate(-20,35,-10)" />
        <ellipse cx="10" cy="8" rx="8" ry="5" fill="#d4c8a0" />
        <rect x="7" y="4" width="6" height="3" fill="#8b1a1a" />
      </g>

      {/* fallen knight 2 */}
      <g transform="translate(500,370)" style={{transformOrigin:"500px 370px", animation:"s3fall 3s ease-out forwards"}} opacity="0.8">
        <rect x="0" y="0" width="35" height="10" fill="#555" rx="2" transform="rotate(-10)" />
        <circle cx="-3" cy="-1" r="7" fill="#777" />
      </g>

      {/* pagan warriors (silhouettes among trees) */}
      {[{x:150,y:300},{x:250,y:310},{x:550,y:295},{x:650,y:305}].map((w,i)=>(
        <g key={i} transform={`translate(${w.x},${w.y})`}>
          <circle cx="0" cy="-20" r="6" fill="#1a1a1a" />
          <rect x="-4" y="-14" width="8" height="20" fill="#1a1a1a" />
          {/* spear */}
          <rect x="5" y="-45" width="2" height="40" fill="#3a2a15" />
          <polygon points="6,-48 2,-40 10,-40" fill="#888" />
        </g>
      ))}

      {/* flying arrows */}
      {[{x:100,y:200,d:0},{x:200,y:180,d:0.5},{x:450,y:190,d:1},{x:600,y:210,d:1.5}].map((a,i)=>(
        <g key={i} style={{animation:`s3arrow 2s linear ${a.d}s infinite`}}>
          <line x1={a.x} y1={a.y} x2={a.x+20} y2={a.y-8} stroke="#5c3a1e" strokeWidth="2" />
          <polygon points={`${a.x+20},${a.y-8} ${a.x+24},${a.y-12} ${a.x+22},${a.y-6}`} fill="#666" />
        </g>
      ))}

      {/* blood drops — subtle */}
      {[{x:370,y:375,d:0},{x:390,y:380,d:0.8},{x:510,y:385,d:1.5}].map((b,i)=>(
        <circle key={i} cx={b.x} cy={b.y} r="2" fill="#8b1a1a" opacity="0.6"
          style={{animation:`s3drip 2s ease-in ${b.d}s infinite`}} />
      ))}

      {/* medieval frame */}
      <rect x="8" y="8" width="784" height="484" fill="none" stroke="#8b1a1a" strokeWidth="2" opacity="0.2" rx="2" />
    </svg>
  );
}

/* ── Scene 4 ─ Castles Rise Across Livonia (1237–1290) ── */
export function Scene4() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="s4sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a6fa5" />
          <stop offset="100%" stopColor="#c4a35a" />
        </linearGradient>
      </defs>
      <style>{`
        @keyframes s4build { 0%{transform:translateY(20px);opacity:0} 100%{transform:translateY(0);opacity:1} }
        @keyframes s4flag  { 0%,100%{transform:skewX(0)} 50%{transform:skewX(-10deg)} }
        @keyframes s4cloud { 0%{transform:translateX(-100px)} 100%{transform:translateX(900px)} }
        @keyframes s4bird  { 0%{transform:translateX(0)} 100%{transform:translateX(-800px)} }
        @keyframes s4pulse { 0%,100%{opacity:0.6} 50%{opacity:1} }
      `}</style>

      <rect width="800" height="500" fill="url(#s4sky)" />

      {/* clouds */}
      {[{x:100,d:0},{x:400,d:8},{x:650,d:16}].map((c,i)=>(
        <g key={i} style={{animation:`s4cloud 30s linear ${c.d}s infinite`}} opacity="0.3">
          <ellipse cx={c.x} cy={60+i*20} rx="60" ry="20" fill="white" />
          <ellipse cx={c.x+30} cy={55+i*20} rx="40" ry="15" fill="white" />
        </g>
      ))}

      {/* rolling hills */}
      <path d="M0,320 Q100,290 200,310 Q350,280 500,300 Q650,280 800,310 L800,500 L0,500Z" fill="#5a7a3a" />
      <path d="M0,350 Q150,330 300,340 Q500,320 700,340 L800,335 L800,500 L0,500Z" fill="#4a6a2a" />

      {/* river */}
      <path d="M0,420 Q100,410 200,425 Q350,415 500,430 Q650,420 800,435 L800,445 Q650,430 500,440 Q350,430 200,440 Q100,430 0,435Z" fill="#3a6a8a" opacity="0.6" />

      {/* castle — central, building up with animation */}
      <g transform="translate(350,200)">
        {/* main keep */}
        <g style={{animation:"s4build 2s ease-out forwards"}}>
          <rect x="-30" y="20" width="60" height="100" fill="#a09080" stroke="#5a4a3a" strokeWidth="2" />
          {/* windows */}
          <rect x="-20" y="40" width="10" height="15" fill="#2a1a0a" rx="5 5 0 0" />
          <rect x="10" y="40" width="10" height="15" fill="#2a1a0a" rx="5 5 0 0" />
          <rect x="-5" y="70" width="10" height="20" fill="#2a1a0a" rx="5 5 0 0" />
          {/* stone texture lines */}
          {[30,45,60,75,90,105].map((y,i)=>(
            <line key={i} x1="-28" y1={y} x2="28" y2={y} stroke="#8a7a6a" strokeWidth="0.5" opacity="0.5" />
          ))}
        </g>

        {/* left tower */}
        <g style={{animation:"s4build 2s ease-out 0.5s both"}}>
          <rect x="-60" y="10" width="30" height="110" fill="#908070" stroke="#5a4a3a" strokeWidth="2" />
          {/* crenellations */}
          {[-58,-50,-42,-34].map((x,i)=>(
            <rect key={i} x={x} y="5" width="5" height="8" fill="#908070" stroke="#5a4a3a" strokeWidth="1" />
          ))}
          <rect x="-50" y="50" width="8" height="12" fill="#2a1a0a" rx="4 4 0 0" />
        </g>

        {/* right tower */}
        <g style={{animation:"s4build 2s ease-out 1s both"}}>
          <rect x="30" y="10" width="30" height="110" fill="#908070" stroke="#5a4a3a" strokeWidth="2" />
          {[-58+90,-50+90,-42+90,-34+90].map((x,i)=>(
            <rect key={i} x={x} y="5" width="5" height="8" fill="#908070" stroke="#5a4a3a" strokeWidth="1" />
          ))}
          <rect x="40" y="50" width="8" height="12" fill="#2a1a0a" rx="4 4 0 0" />
        </g>

        {/* top crenellations on keep */}
        <g style={{animation:"s4build 2s ease-out 1.5s both"}}>
          {[-28,-18,-8,2,12,22].map((x,i)=>(
            <rect key={i} x={x} y="14" width="6" height="8" fill="#a09080" stroke="#5a4a3a" strokeWidth="1" />
          ))}
        </g>

        {/* flag on pole */}
        <g style={{animation:"s4build 2s ease-out 2s both"}}>
          <rect x="-2" y="-20" width="3" height="40" fill="#5a4a3a" />
          <g style={{transformOrigin:"1px -20px", animation:"s4flag 2.5s ease-in-out infinite"}}>
            <polygon points="1,-18 30,-12 1,-3" fill="#c4a35a" stroke="#8a6a2a" strokeWidth="1" />
            <rect x="8" y="-15" width="3" height="10" fill="#8b1a1a" />
            <rect x="5" y="-11" width="9" height="3" fill="#8b1a1a" />
          </g>
        </g>

        {/* gate */}
        <rect x="-12" y="95" width="24" height="28" fill="#2a1a0a" rx="12 12 0 0" />
        <rect x="-10" y="100" width="2" height="20" fill="#5a4a3a" />
        <rect x="8" y="100" width="2" height="20" fill="#5a4a3a" />
      </g>

      {/* smaller distant castles */}
      <g transform="translate(120,290)" opacity="0.5" style={{animation:"s4build 2s ease-out 2.5s both"}}>
        <rect x="0" y="0" width="20" height="35" fill="#8a7a6a" />
        <rect x="-8" y="-5" width="12" height="40" fill="#7a6a5a" />
        <rect x="18" y="-3" width="12" height="38" fill="#7a6a5a" />
        {[-6,0,6,20,26].map((x,i)=>(<rect key={i} x={x} y={-8} width="3" height="5" fill="#7a6a5a" />))}
      </g>
      <g transform="translate(620,285)" opacity="0.4" style={{animation:"s4build 2s ease-out 3s both"}}>
        <rect x="0" y="0" width="18" height="30" fill="#8a7a6a" />
        <rect x="-6" y="-3" width="10" height="33" fill="#7a6a5a" />
        <rect x="16" y="-2" width="10" height="32" fill="#7a6a5a" />
      </g>

      {/* workers at base (silhouettes) */}
      {[{x:310,y:330},{x:340,y:325},{x:400,y:328}].map((w,i)=>(
        <g key={i} style={{animation:`s4pulse 2s ease-in-out ${i*0.5}s infinite`}}>
          <circle cx={w.x} cy={w.y-8} r="3" fill="#2a1a0a" />
          <rect x={w.x-2} y={w.y-5} width="4" height="10" fill="#2a1a0a" />
        </g>
      ))}

      {/* birds */}
      <g style={{animation:"s4bird 20s linear infinite"}}>
        {[700,720,740].map((x,i)=>(
          <path key={i} d={`M${x},${100+i*15} Q${x+5},${95+i*15} ${x+10},${100+i*15}`} fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        ))}
      </g>

      {/* manuscript frame */}
      <rect x="8" y="8" width="784" height="484" fill="none" stroke="#c4a35a" strokeWidth="2" opacity="0.25" rx="2" />
    </svg>
  );
}

/* ── Scene 5 ─ The Chronicler's Quill (c. 1290) ── */
export function Scene5() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="s5candle" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#ffcc00" />
          <stop offset="100%" stopColor="#ff8800" />
        </linearGradient>
        <radialGradient id="s5glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#c4a35a" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c4a35a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <style>{`
        @keyframes s5flicker  { 0%,100%{opacity:0.8;transform:scaleY(1)} 25%{opacity:1;transform:scaleY(1.1)} 50%{opacity:0.7;transform:scaleY(0.95)} 75%{opacity:0.95;transform:scaleY(1.05)} }
        @keyframes s5write    { 0%{width:0} 100%{width:180px} }
        @keyframes s5quill    { 0%,100%{transform:rotate(-5deg)} 50%{transform:rotate(5deg)} }
        @keyframes s5glow     { 0%,100%{opacity:0.25} 50%{opacity:0.4} }
        @keyframes s5textfade { 0%{opacity:0} 100%{opacity:0.7} }
      `}</style>

      {/* dark room */}
      <rect width="800" height="500" fill="#1a120a" />

      {/* warm glow around candle area */}
      <ellipse cx="550" cy="200" rx="300" ry="250" fill="url(#s5glow)" style={{animation:"s5glow 3s ease-in-out infinite"}} />

      {/* stone wall */}
      <rect x="0" y="0" width="800" height="200" fill="#2a2018" />
      {[0,40,80,120,160,200,240,280,320,360,400,440,480,520,560,600,640,680,720,760].map((x,i)=>(
        <rect key={i} x={x} y={(i%2)*20} width="38" height="18" fill="none" stroke="#3a3028" strokeWidth="0.8" />
      ))}

      {/* window — arched with moonlight */}
      <g transform="translate(150,50)">
        <rect x="0" y="20" width="60" height="80" fill="#1a274a" />
        <path d="M0,20 Q30,-10 60,20" fill="#1a274a" />
        <rect x="28" y="15" width="4" height="85" fill="#3a3028" />
        <rect x="5" y="55" width="50" height="3" fill="#3a3028" />
        <circle cx="30" cy="8" r="8" fill="#c4a35a" opacity="0.15" />
      </g>

      {/* desk */}
      <path d="M280,280 L700,280 L720,500 L260,500Z" fill="#5c3a1e" />
      <rect x="280" y="275" width="420" height="10" fill="#7a5230" />

      {/* parchment on desk */}
      <g transform="translate(350,285)">
        <rect x="0" y="0" width="200" height="140" fill="#d4c8a0" rx="2" transform="rotate(-2)" />
        {/* already-written lines */}
        {[15,28,41,54,67,80].map((y,i)=>(
          <rect key={i} x="15" y={y} width={140-i*10} height="2" fill="#5a3a1e" opacity="0.4" rx="1" transform="rotate(-2)" />
        ))}
        {/* line being written — animated */}
        <rect x="15" y="93" height="2" fill="#5a3a1e" opacity="0.6" rx="1" transform="rotate(-2)"
          style={{animation:"s5write 4s linear infinite"}} />
      </g>

      {/* scribe figure */}
      <g transform="translate(430,230)">
        {/* robe */}
        <path d="M-15,20 L-20,80 L20,80 L15,20Z" fill="#3a3028" />
        {/* hood/cowl */}
        <path d="M-12,20 Q0,5 12,20" fill="#2a2018" />
        {/* head */}
        <circle cx="0" cy="12" r="10" fill="#c4a080" />
        {/* tonsure */}
        <circle cx="0" cy="6" r="7" fill="#7a6050" />
        <circle cx="0" cy="4" r="5" fill="#c4a080" />

        {/* writing arm + quill */}
        <g style={{transformOrigin:"10px 35px", animation:"s5quill 1.5s ease-in-out infinite"}}>
          <path d="M10,30 L40,50" stroke="#c4a080" strokeWidth="4" fill="none" />
          {/* quill */}
          <line x1="35" y1="45" x2="55" y2="20" stroke="#d4c8a0" strokeWidth="2" />
          <path d="M55,20 Q60,15 58,25" fill="#d4c8a0" />
          {/* ink at tip */}
          <circle cx="35" cy="47" r="1.5" fill="#1a1a1a" />
        </g>
      </g>

      {/* candle */}
      <g transform="translate(550,210)">
        <rect x="-4" y="0" width="8" height="30" fill="#d4c8a0" />
        <rect x="-8" y="28" width="16" height="5" fill="#8a7a5a" rx="1" />
        {/* flame */}
        <g style={{transformOrigin:"0px -5px", animation:"s5flicker 0.5s ease-in-out infinite"}}>
          <ellipse cx="0" cy="-8" rx="5" ry="10" fill="url(#s5candle)" />
          <ellipse cx="0" cy="-10" rx="2.5" ry="5" fill="#fff8e0" />
        </g>
        {/* wick */}
        <rect x="-0.5" y="-2" width="1" height="4" fill="#2a1a0a" />
      </g>

      {/* ink pot */}
      <g transform="translate(600,275)">
        <rect x="-8" y="0" width="16" height="12" fill="#2a2a2a" rx="2" />
        <ellipse cx="0" cy="0" rx="8" ry="3" fill="#333" />
        <ellipse cx="0" cy="2" rx="5" ry="2" fill="#0a0a1a" />
      </g>

      {/* decorative text appearing — simulating manuscript lines */}
      {[0,1,2,3].map(i=>(
        <text key={i} x="370" y={310+i*13} fontSize="8" fill="#5a3a1e" opacity="0"
          style={{animation:`s5textfade 1s ease-out ${2+i*0.5}s forwards`}} fontFamily="serif">
          {["Dô quam von Brêmen Albrecht","der bischof als êrste genant","ze Rîge in der Lîven lant","daz was sîn êrstez vaterland"][i]}
        </text>
      ))}

      {/* second candle glow */}
      <circle cx="550" cy="205" r="40" fill="#c4a35a" opacity="0.08" style={{animation:"s5glow 2s ease-in-out 0.5s infinite"}} />

      {/* frame — illuminated manuscript style */}
      <rect x="8" y="8" width="784" height="484" fill="none" stroke="#c4a35a" strokeWidth="2.5" opacity="0.3" rx="3" />
      {/* corner decorations */}
      {[[15,15],[775,15],[15,475],[775,475]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="6" fill="none" stroke="#c4a35a" strokeWidth="1.5" opacity="0.25" />
      ))}
    </svg>
  );
}

/* ── Scene 6 ─ The Age of Parchment (1500–1560) ── */
export function Scene6() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="s6sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a4a3a" />
          <stop offset="100%" stopColor="#8a7a60" />
        </linearGradient>
      </defs>
      <style>{`
        @keyframes s6press { 0%,100%{transform:translateY(0)} 50%{transform:translateY(15px)} }
        @keyframes s6page  { 0%{transform:translateY(0);opacity:0} 50%{opacity:1} 100%{transform:translateY(-30px);opacity:0} }
        @keyframes s6cross { 0%,100%{opacity:0.6} 50%{opacity:1} }
      `}</style>

      {/* woodcut-style background — hatched */}
      <rect width="800" height="500" fill="#d4c8a0" />
      {/* horizontal hatching */}
      {Array.from({length:100},(_,i)=>(
        <line key={i} x1="0" y1={i*5} x2="800" y2={i*5} stroke="#b0a080" strokeWidth="0.5" opacity="0.3" />
      ))}

      {/* Riga cathedral silhouette */}
      <g transform="translate(550,100)">
        <rect x="-25" y="0" width="50" height="200" fill="#3a2a15" />
        <polygon points="-25,0 0,-80 25,0" fill="#3a2a15" />
        <circle cx="0" cy="-85" r="5" fill="#3a2a15" />
        <line x1="0" y1="-90" x2="0" y2="-100" stroke="#3a2a15" strokeWidth="2" />
        <line x1="-5" y1="-95" x2="5" y2="-95" stroke="#3a2a15" strokeWidth="2" />
        {/* windows */}
        {[40,80,120,160].map((y,i)=>(
          <rect key={i} x="-8" y={y} width="16" height="20" fill="#d4c8a0" rx="8 8 0 0" stroke="#3a2a15" strokeWidth="1" />
        ))}
        {/* rose window */}
        <circle cx="0" cy="30" r="12" fill="#d4c8a0" stroke="#3a2a15" strokeWidth="1.5" />
        <circle cx="0" cy="30" r="8" fill="none" stroke="#3a2a15" strokeWidth="0.8" />
        {[0,60,120,180,240,300].map((a,i)=>(
          <line key={i} x1="0" y1="30" x2={Math.cos(a*Math.PI/180)*12} y2={30+Math.sin(a*Math.PI/180)*12} stroke="#3a2a15" strokeWidth="0.8" transform="translate(0,0)" />
        ))}
      </g>

      {/* buildings */}
      <rect x="420" y="180" width="60" height="120" fill="#3a2a15" />
      <polygon points="420,180 450,150 480,180" fill="#3a2a15" />
      <rect x="620" y="200" width="50" height="100" fill="#3a2a15" />
      <polygon points="620,200 645,170 670,200" fill="#3a2a15" />
      <rect x="680" y="220" width="40" height="80" fill="#3a2a15" />

      {/* ground */}
      <rect x="0" y="300" width="800" height="200" fill="#3a2a15" />
      <rect x="0" y="300" width="800" height="5" fill="#2a1a0a" />

      {/* printing press — woodcut style */}
      <g transform="translate(180,200)">
        {/* frame */}
        <rect x="0" y="0" width="80" height="100" fill="none" stroke="#d4c8a0" strokeWidth="3" />
        <rect x="5" y="5" width="70" height="90" fill="#5a4a30" />
        {/* press arm */}
        <g style={{animation:"s6press 2s ease-in-out infinite"}}>
          <rect x="15" y="15" width="50" height="10" fill="#d4c8a0" stroke="#8a7a5a" strokeWidth="1" />
        </g>
        {/* type block */}
        <rect x="15" y="50" width="50" height="30" fill="#2a1a0a" />
        {/* tiny letters on type */}
        {[0,1,2,3,4].map(i=>(
          <rect key={i} x={20+i*9} y="55" width="5" height="8" fill="#8a7a5a" rx="0.5" />
        ))}
        {/* screw */}
        <rect x="37" y="-20" width="6" height="25" fill="#8a7a5a" />
        <circle cx="40" cy="-22" r="8" fill="none" stroke="#d4c8a0" strokeWidth="2" />
      </g>

      {/* pages floating out */}
      {[0,1,2].map(i=>(
        <rect key={i} x={280+i*20} y={260} width="20" height="28" fill="#d4c8a0" stroke="#8a7a5a" strokeWidth="0.8" rx="1"
          style={{animation:`s6page 3s ease-out ${i*0.8}s infinite`}} />
      ))}

      {/* monk figure (woodcut style) */}
      <g transform="translate(100,240)">
        <circle cx="0" cy="-10" r="8" fill="#d4c8a0" stroke="#3a2a15" strokeWidth="2" />
        <path d="M-12,0 L-15,60 L15,60 L12,0Z" fill="#d4c8a0" stroke="#3a2a15" strokeWidth="2" />
        <path d="M-10,-2 Q0,-12 10,-2" fill="#3a2a15" />
        {/* holding book */}
        <rect x="12" y="15" width="12" height="16" fill="#8a7a5a" stroke="#3a2a15" strokeWidth="1" />
      </g>

      {/* Luther's cross glowing — Reformation reference */}
      <g transform="translate(700,140)" style={{animation:"s6cross 3s ease-in-out infinite"}}>
        <rect x="-2" y="-15" width="4" height="30" fill="#d4c8a0" />
        <rect x="-10" y="-8" width="20" height="4" fill="#d4c8a0" />
      </g>

      {/* woodcut border */}
      <rect x="6" y="6" width="788" height="488" fill="none" stroke="#3a2a15" strokeWidth="3" />
      <rect x="12" y="12" width="776" height="476" fill="none" stroke="#3a2a15" strokeWidth="1" />
    </svg>
  );
}

/* ── Scene 7 ─ The Fall of Livonia (1558–1621) ── */
export function Scene7() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <style>{`
        @keyframes s7cannon { 0%{transform:translateX(0)} 10%{transform:translateX(-8px)} 100%{transform:translateX(0)} }
        @keyframes s7ball   { 0%{transform:translate(0,0);opacity:1} 100%{transform:translate(250px,-50px);opacity:0} }
        @keyframes s7smoke  { 0%{transform:scale(1);opacity:0.8} 100%{transform:scale(3);opacity:0} }
        @keyframes s7fire   { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(1.4)} }
        @keyframes s7rubble { 0%{transform:translateY(0)} 100%{transform:translateY(30px);opacity:0} }
      `}</style>

      {/* sky — smoky */}
      <rect width="800" height="500" fill="#2c1810" />
      <rect width="800" height="200" fill="#4a2a1a" opacity="0.5" />

      {/* smoke clouds */}
      {[{x:300,y:80},{x:450,y:60},{x:550,y:90}].map((s,i)=>(
        <ellipse key={i} cx={s.x} cy={s.y} rx="80" ry="30" fill="#444" opacity="0.3" />
      ))}

      {/* city walls — being breached */}
      <g transform="translate(350,150)">
        {/* wall sections */}
        <rect x="-150" y="80" width="120" height="120" fill="#7a6a5a" stroke="#4a3a2a" strokeWidth="2" />
        <rect x="30" y="80" width="120" height="120" fill="#7a6a5a" stroke="#4a3a2a" strokeWidth="2" />
        {/* breach in middle */}
        <polygon points="-30,200 -10,120 10,140 30,120 30,200" fill="#2c1810" />
        {/* rubble */}
        {[{x:-20,y:180,d:0},{x:0,y:170,d:0.5},{x:15,y:185,d:1}].map((r,i)=>(
          <rect key={i} x={r.x} y={r.y} width="8" height="6" fill="#7a6a5a" rx="1"
            style={{animation:`s7rubble 3s ease-in ${r.d}s infinite`}} />
        ))}

        {/* towers */}
        <rect x="-160" y="40" width="30" height="160" fill="#8a7a6a" stroke="#4a3a2a" strokeWidth="2" />
        <rect x="140" y="50" width="30" height="150" fill="#8a7a6a" stroke="#4a3a2a" strokeWidth="2" />
        {/* crenellations */}
        {[-158,-148,-138].map((x,i)=>(<rect key={i} x={x} y="35" width="6" height="8" fill="#8a7a6a" />))}
        {[142,152,162].map((x,i)=>(<rect key={i} x={x} y="45" width="6" height="8" fill="#8a7a6a" />))}

        {/* fire on tower */}
        <g transform="translate(-145,30)" style={{transformOrigin:"0 0", animation:"s7fire 0.5s ease-in-out infinite"}}>
          <ellipse cx="0" cy="-10" rx="12" ry="18" fill="#ff6600" opacity="0.8" />
          <ellipse cx="0" cy="-14" rx="6" ry="10" fill="#ffcc00" opacity="0.7" />
        </g>
      </g>

      {/* cannons — left side (attackers) */}
      <g transform="translate(80,350)">
        <g style={{animation:"s7cannon 2s ease-out infinite"}}>
          <rect x="0" y="-8" width="40" height="16" fill="#444" rx="3" />
          <circle cx="0" cy="0" r="10" fill="#333" />
        </g>
        {/* wheels */}
        <circle cx="10" cy="12" r="8" fill="#5c3a1e" stroke="#3a2a15" strokeWidth="2" />
        <circle cx="30" cy="12" r="8" fill="#5c3a1e" stroke="#3a2a15" strokeWidth="2" />

        {/* muzzle flash + smoke */}
        <circle cx="50" cy="0" r="15" fill="#ff8800" opacity="0.6"
          style={{animation:"s7smoke 2s ease-out infinite"}} />

        {/* cannonball */}
        <circle cx="55" cy="-2" r="4" fill="#1a1a1a"
          style={{animation:"s7ball 2s ease-in infinite"}} />
      </g>

      {/* soldiers silhouettes (attackers) */}
      {[{x:40,y:360},{x:120,y:355},{x:160,y:365},{x:200,y:358}].map((s,i)=>(
        <g key={i} transform={`translate(${s.x},${s.y})`}>
          <circle cx="0" cy="-12" r="5" fill="#1a1a1a" />
          <rect x="-3" y="-7" width="6" height="15" fill="#1a1a1a" />
          <rect x="4" y="-20" width="1.5" height="25" fill="#5a4a3a" />
          <polygon points="4.5,-22 3,-18 6,-18" fill="#666" />
        </g>
      ))}

      {/* defenders on walls */}
      {[{x:250,y:218},{x:420,y:218},{x:530,y:228}].map((d,i)=>(
        <g key={i} transform={`translate(${d.x},${d.y})`}>
          <circle cx="0" cy="-8" r="4" fill="#666" />
          <rect x="-3" y="-4" width="6" height="10" fill="#555" />
        </g>
      ))}

      {/* ground */}
      <path d="M0,380 L800,370 L800,500 L0,500Z" fill="#2a1a0a" />

      {/* woodcut border */}
      <rect x="6" y="6" width="788" height="488" fill="none" stroke="#8a7a5a" strokeWidth="3" />
    </svg>
  );
}

/* ── Scene 8 ─ The Swedish Crown (1621–1710) ── */
export function Scene8() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="s8sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a274a" />
          <stop offset="50%" stopColor="#4a6fa5" />
          <stop offset="100%" stopColor="#c4a35a" />
        </linearGradient>
      </defs>
      <style>{`
        @keyframes s8crown  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes s8wave   { 0%,100%{transform:translateX(0)} 50%{transform:translateX(-20px)} }
        @keyframes s8sail   { 0%,100%{transform:skewX(0)} 50%{transform:skewX(-3deg)} }
        @keyframes s8gleam  { 0%,100%{opacity:0.5} 50%{opacity:1} }
      `}</style>

      {/* baroque engraving style */}
      <rect width="800" height="500" fill="#d4c8a0" />
      {/* fine line hatching */}
      {Array.from({length:60},(_,i)=>(
        <line key={i} x1="0" y1={i*8+50} x2="800" y2={i*8+50} stroke="#8a7a60" strokeWidth="0.3" opacity="0.4" />
      ))}

      {/* sky wash */}
      <rect width="800" height="250" fill="url(#s8sky)" opacity="0.3" />

      {/* Swedish crown — top center */}
      <g transform="translate(400,60)" style={{animation:"s8crown 4s ease-in-out infinite"}}>
        <path d="M-30,20 L-35,0 L-15,10 L0,-10 L15,10 L35,0 L30,20Z" fill="#c4a35a" stroke="#8a6a2a" strokeWidth="2" />
        <rect x="-30" y="18" width="60" height="8" fill="#c4a35a" stroke="#8a6a2a" strokeWidth="1.5" rx="2" />
        {/* jewels */}
        <circle cx="0" cy="22" r="3" fill="#4a6fa5" style={{animation:"s8gleam 2s ease-in-out infinite"}} />
        <circle cx="-15" cy="22" r="2" fill="#8b1a1a" />
        <circle cx="15" cy="22" r="2" fill="#8b1a1a" />
        {/* cross on top */}
        <rect x="-2" y="-18" width="4" height="12" fill="#c4a35a" />
        <rect x="-5" y="-14" width="10" height="4" fill="#c4a35a" />
      </g>

      {/* Riga panorama — baroque engraving style */}
      <g transform="translate(0,200)">
        {/* church spires */}
        <rect x="150" y="0" width="8" height="90" fill="#3a2a15" />
        <polygon points="154,-15 148,0 160,0" fill="#3a2a15" />
        <circle cx="154" cy="-18" r="3" fill="#3a2a15" />

        <rect x="300" y="-10" width="10" height="100" fill="#3a2a15" />
        <polygon points="305,-30 296,-10 314,-10" fill="#3a2a15" />

        <rect x="500" y="5" width="8" height="85" fill="#3a2a15" />
        <polygon points="504,-10 498,5 510,5" fill="#3a2a15" />

        {/* buildings row */}
        {[0,50,100,180,250,340,420,470,540,600,660,720].map((x,i)=>(
          <g key={i}>
            <rect x={x} y={50+i%3*5} width={40+i%2*10} height={40+i%2*10} fill="#3a2a15" />
            <polygon points={`${x},${50+i%3*5} ${x+20+i%2*5},${35+i%3*5} ${x+40+i%2*10},${50+i%3*5}`} fill="#3a2a15" />
          </g>
        ))}

        {/* wall line */}
        <line x1="0" y1="90" x2="800" y2="90" stroke="#3a2a15" strokeWidth="2" />
      </g>

      {/* river Daugava */}
      <rect x="0" y="300" width="800" height="80" fill="#3a6a8a" opacity="0.3" />
      <g style={{animation:"s8wave 5s ease-in-out infinite"}}>
        {Array.from({length:20},(_,i)=>(
          <path key={i} d={`M${i*42},${310+i%2*10} Q${i*42+10},${305+i%2*10} ${i*42+20},${310+i%2*10}`}
            fill="none" stroke="#3a2a15" strokeWidth="0.8" />
        ))}
      </g>

      {/* ships in harbor */}
      {[{x:200,s:0.8},{x:500,s:0.7},{x:650,s:0.6}].map((ship,i)=>(
        <g key={i} transform={`translate(${ship.x},320) scale(${ship.s})`}>
          <path d="M-25,10 Q-30,0 -20,-5 L20,-5 Q30,0 25,10Z" fill="#3a2a15" />
          <rect x="-2" y="-40" width="4" height="38" fill="#3a2a15" />
          <g style={{transformOrigin:"-2px -38px", animation:`s8sail 3s ease-in-out ${i*0.5}s infinite`}}>
            <polygon points="-2,-35 -2,-10 20,-20" fill="#d4c8a0" stroke="#3a2a15" strokeWidth="1" />
          </g>
          {/* Swedish flag */}
          <rect x="0" y="-42" width="12" height="8" fill="#4a6fa5" />
          <rect x="3" y="-42" width="2" height="8" fill="#c4a35a" />
          <rect x="0" y="-39" width="12" height="2" fill="#c4a35a" />
        </g>
      ))}

      {/* ground */}
      <rect x="0" y="380" width="800" height="120" fill="#3a2a15" opacity="0.2" />

      {/* engraving border — ornate */}
      <rect x="10" y="10" width="780" height="480" fill="none" stroke="#3a2a15" strokeWidth="2" />
      <rect x="15" y="15" width="770" height="470" fill="none" stroke="#3a2a15" strokeWidth="0.5" />
    </svg>
  );
}

/* ── Scene 9 ─ Peter's City (1710–1795) ── */
export function Scene9() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <style>{`
        @keyframes s9rain  { 0%{transform:translateY(-10px)} 100%{transform:translateY(510px)} }
        @keyframes s9eagle { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }
        @keyframes s9smoke { 0%{transform:translateY(0);opacity:0.4} 100%{transform:translateY(-50px);opacity:0} }
      `}</style>

      {/* dark copperplate style */}
      <rect width="800" height="500" fill="#1a274a" />
      {/* cross-hatching */}
      {Array.from({length:50},(_,i)=>(
        <line key={`h${i}`} x1="0" y1={i*10} x2="800" y2={i*10} stroke="#2a3a5a" strokeWidth="0.3" opacity="0.5" />
      ))}
      {Array.from({length:40},(_,i)=>(
        <line key={`v${i}`} x1={i*20} y1="0" x2={i*20} y2="500" stroke="#2a3a5a" strokeWidth="0.3" opacity="0.3" />
      ))}

      {/* rain */}
      {Array.from({length:30},(_,i)=>(
        <line key={i} x1={i*28} y1="0" x2={i*28+5} y2="15" stroke="#4a6a8a" strokeWidth="0.5" opacity="0.3"
          style={{animation:`s9rain ${1+i%3*0.3}s linear ${i*0.1}s infinite`}} />
      ))}

      {/* Russian imperial eagle — center */}
      <g transform="translate(400,120)" style={{animation:"s9eagle 4s ease-in-out infinite"}}>
        {/* body */}
        <ellipse cx="0" cy="0" rx="20" ry="15" fill="#c4a35a" stroke="#8a6a2a" strokeWidth="1.5" />
        {/* two heads */}
        <circle cx="-12" cy="-12" r="8" fill="#c4a35a" stroke="#8a6a2a" strokeWidth="1" />
        <circle cx="12" cy="-12" r="8" fill="#c4a35a" stroke="#8a6a2a" strokeWidth="1" />
        {/* beaks */}
        <polygon points="-20,-14 -14,-12 -18,-10" fill="#8a6a2a" />
        <polygon points="20,-14 14,-12 18,-10" fill="#8a6a2a" />
        {/* wings spread */}
        <path d="M-20,0 Q-50,-10 -55,10 Q-40,5 -20,5Z" fill="#c4a35a" stroke="#8a6a2a" strokeWidth="1" />
        <path d="M20,0 Q50,-10 55,10 Q40,5 20,5Z" fill="#c4a35a" stroke="#8a6a2a" strokeWidth="1" />
        {/* crowns */}
        <path d="M-15,-20 L-13,-16 L-11,-20 L-9,-16 L-7,-20" fill="none" stroke="#c4a35a" strokeWidth="1" />
        <path d="M7,-20 L9,-16 L11,-20 L13,-16 L15,-20" fill="none" stroke="#c4a35a" strokeWidth="1" />
        {/* tail */}
        <path d="M-5,15 L0,30 L5,15" fill="#c4a35a" stroke="#8a6a2a" strokeWidth="0.8" />
      </g>

      {/* ruined city skyline */}
      <g transform="translate(0,220)">
        {[0,70,140,220,300,380,460,540,620,700].map((x,i)=>{
          const h = 40+i%3*20;
          return (
            <g key={i}>
              <rect x={x} y={80-h} width={50+i%2*15} height={h+20} fill="#0d1b2a" stroke="#2a3a5a" strokeWidth="0.8" />
              {/* damage marks */}
              {i%3===0 && <polygon points={`${x+10},${80-h+10} ${x+20},${80-h} ${x+25},${80-h+15}`} fill="#1a274a" />}
            </g>
          );
        })}
        {/* damaged spire */}
        <rect x="350" y="-20" width="8" height="100" fill="#0d1b2a" stroke="#2a3a5a" strokeWidth="0.8" />
        <polygon points="354,-35 346,-20 362,-20" fill="#0d1b2a" />

        {/* smoke from ruins */}
        {[100,350,550].map((x,i)=>(
          <circle key={i} cx={x} cy={40} r="12" fill="#4a6a8a" opacity="0.2"
            style={{animation:`s9smoke 4s ease-out ${i*1.5}s infinite`}} />
        ))}
      </g>

      {/* ground */}
      <rect x="0" y="340" width="800" height="160" fill="#0d1b2a" />

      {/* skeletal figures — plague reference */}
      {[{x:200,y:360},{x:400,y:370},{x:600,y:365}].map((f,i)=>(
        <g key={i} transform={`translate(${f.x},${f.y})`} opacity="0.3">
          <circle cx="0" cy="-10" r="4" fill="none" stroke="#4a6a8a" strokeWidth="1" />
          <line x1="0" y1="-6" x2="0" y2="10" stroke="#4a6a8a" strokeWidth="1" />
          <line x1="-6" y1="0" x2="6" y2="0" stroke="#4a6a8a" strokeWidth="1" />
        </g>
      ))}

      {/* copperplate border */}
      <rect x="8" y="8" width="784" height="484" fill="none" stroke="#4a6a8a" strokeWidth="2" />
      <rect x="12" y="12" width="776" height="476" fill="none" stroke="#4a6a8a" strokeWidth="0.5" />
    </svg>
  );
}

/* ── Scene 10 ─ The Industrial Titan (1795–1860) ── */
export function Scene10() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="s10sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a5a5a" />
          <stop offset="100%" stopColor="#8a7a6a" />
        </linearGradient>
      </defs>
      <style>{`
        @keyframes s10smoke  { 0%{transform:translate(0,0) scale(1);opacity:0.6} 100%{transform:translate(30px,-60px) scale(2.5);opacity:0} }
        @keyframes s10wheel  { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        @keyframes s10train  { 0%{transform:translateX(-200px)} 100%{transform:translateX(1000px)} }
        @keyframes s10piston { 0%,100%{transform:translateX(0)} 50%{transform:translateX(5px)} }
      `}</style>

      {/* lithograph style — sepia tones */}
      <rect width="800" height="500" fill="#d4c8a0" />
      <rect width="800" height="250" fill="url(#s10sky)" opacity="0.3" />

      {/* factories */}
      <g transform="translate(500,120)">
        {/* main building */}
        <rect x="0" y="50" width="120" height="130" fill="#5a4a3a" />
        <polygon points="0,50 60,20 120,50" fill="#6a5a4a" />
        {/* windows grid */}
        {[0,1,2,3].map(r=>[0,1,2,3].map(c=>(
          <rect key={`${r}${c}`} x={15+c*28} y={65+r*28} width="15" height="18" fill="#c4a35a" opacity="0.4" rx="1" />
        )))}
        {/* chimney 1 */}
        <rect x="20" y="-30" width="15" height="80" fill="#4a3a2a" />
        {/* smoke */}
        {[0,1,2,3].map(i=>(
          <circle key={i} cx={27} cy={-35} r={8+i*4} fill="#666"
            style={{animation:`s10smoke ${3+i}s ease-out ${i*0.8}s infinite`}} />
        ))}
        {/* chimney 2 */}
        <rect x="85" y="-15" width="12" height="65" fill="#4a3a2a" />
        {[0,1,2].map(i=>(
          <circle key={i} cx={91} cy={-20} r={6+i*3} fill="#666"
            style={{animation:`s10smoke ${2.5+i}s ease-out ${i*0.6+0.3}s infinite`}} />
        ))}
      </g>

      {/* second factory */}
      <g transform="translate(650,150)" opacity="0.7">
        <rect x="0" y="30" width="80" height="100" fill="#5a4a3a" />
        <rect x="15" y="-20" width="10" height="50" fill="#4a3a2a" />
        {[0,1,2].map(i=>(
          <circle key={i} cx={20} cy={-25} r={5+i*3} fill="#555"
            style={{animation:`s10smoke 3s ease-out ${i*0.7}s infinite`}} />
        ))}
      </g>

      {/* ground level */}
      <rect x="0" y="300" width="800" height="200" fill="#5a4a3a" opacity="0.3" />

      {/* railway tracks */}
      <line x1="0" y1="360" x2="800" y2="360" stroke="#4a3a2a" strokeWidth="2" />
      <line x1="0" y1="370" x2="800" y2="370" stroke="#4a3a2a" strokeWidth="2" />
      {Array.from({length:40},(_,i)=>(
        <rect key={i} x={i*20} y="358" width="3" height="14" fill="#4a3a2a" />
      ))}

      {/* train */}
      <g style={{animation:"s10train 12s linear infinite"}}>
        {/* locomotive */}
        <rect x="0" y="330" width="60" height="28" fill="#2a1a0a" rx="3" />
        <rect x="50" y="325" width="15" height="33" fill="#2a1a0a" />
        {/* boiler */}
        <ellipse cx="30" cy="340" rx="25" ry="12" fill="#333" stroke="#2a1a0a" strokeWidth="1" />
        {/* smokestack */}
        <rect x="10" y="310" width="10" height="20" fill="#2a1a0a" />
        <rect x="7" y="308" width="16" height="5" fill="#333" rx="1" />
        {/* smoke from train */}
        {[0,1,2].map(i=>(
          <circle key={i} cx={15} cy={305} r={6+i*4} fill="#666" opacity="0.5"
            style={{animation:`s10smoke 2s ease-out ${i*0.4}s infinite`}} />
        ))}
        {/* wheels */}
        {[10,30,55].map((x,i)=>(
          <g key={i} style={{transformOrigin:`${x}px 362px`, animation:"s10wheel 1s linear infinite"}}>
            <circle cx={x} cy="362" r="8" fill="#2a1a0a" stroke="#5a4a3a" strokeWidth="1" />
            <line x1={x-5} y1="362" x2={x+5} y2="362" stroke="#5a4a3a" strokeWidth="1" />
            <line x1={x} y1="357" x2={x} y2="367" stroke="#5a4a3a" strokeWidth="1" />
          </g>
        ))}
        {/* piston */}
        <rect x="25" y="355" width="25" height="3" fill="#5a4a3a" style={{animation:"s10piston 0.5s ease-in-out infinite"}} />

        {/* wagons */}
        {[80,140,200].map((wx,i)=>(
          <g key={i}>
            <rect x={wx} y="332" width="50" height="26" fill="#5a3a1e" stroke="#3a2a15" strokeWidth="1" />
            <circle cx={wx+10} cy="362" r="6" fill="#2a1a0a" />
            <circle cx={wx+40} cy="362" r="6" fill="#2a1a0a" />
          </g>
        ))}
      </g>

      {/* medieval wall fragments being demolished */}
      <g transform="translate(100,250)">
        <rect x="0" y="0" width="15" height="50" fill="#8a7a6a" />
        <rect x="25" y="10" width="12" height="40" fill="#8a7a6a" />
        <rect x="20" y="15" width="5" height="8" fill="#8a7a6a" transform="rotate(15,22,19)" />
      </g>

      {/* lithograph border */}
      <rect x="8" y="8" width="784" height="484" fill="none" stroke="#5a4a3a" strokeWidth="2.5" />
    </svg>
  );
}

/* ── Scene 11 ─ The Latvian Awakening (1860–1905) ── */
export function Scene11() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="s11sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4a35a" />
          <stop offset="100%" stopColor="#4a6fa5" />
        </linearGradient>
        <linearGradient id="s11artnouveau" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6a8a4a" />
          <stop offset="100%" stopColor="#4a6a2a" />
        </linearGradient>
      </defs>
      <style>{`
        @keyframes s11sing  { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(1.05)} }
        @keyframes s11note  { 0%{transform:translate(0,0);opacity:1} 100%{transform:translate(20px,-40px);opacity:0} }
        @keyframes s11grow  { 0%{transform:scaleY(0)} 100%{transform:scaleY(1)} }
        @keyframes s11wave  { 0%,100%{transform:skewX(0)} 50%{transform:skewX(-5deg)} }
        @keyframes s11pulse { 0%,100%{opacity:0.6} 50%{opacity:1} }
      `}</style>

      {/* Art Nouveau colours */}
      <rect width="800" height="500" fill="#f0e8d0" />
      <rect width="800" height="200" fill="url(#s11sky)" opacity="0.2" />

      {/* Art Nouveau building (Jugendstil) */}
      <g transform="translate(550,80)">
        <g style={{transformOrigin:"60px 300px", animation:"s11grow 3s ease-out forwards"}}>
          <rect x="0" y="50" width="120" height="250" fill="#8a7a6a" stroke="#5a4a3a" strokeWidth="2" />
          {/* ornate facade */}
          <rect x="10" y="60" width="100" height="8" fill="#c4a35a" rx="2" />
          <rect x="10" y="150" width="100" height="5" fill="#c4a35a" rx="2" />
          <rect x="10" y="220" width="100" height="5" fill="#c4a35a" rx="2" />
          {/* art nouveau windows — arched */}
          {[0,1,2].map(r=>[0,1,2].map(c=>(
            <g key={`${r}${c}`}>
              <rect x={15+c*35} y={75+r*65} width="25" height="40" fill="#4a6fa5" opacity="0.3" rx="12 12 0 0" />
              {/* face/mask ornament */}
              {r===0 && <circle cx={27+c*35} cy={70+r*65} r="6" fill="#c4a35a" stroke="#8a6a2a" strokeWidth="0.8" />}
            </g>
          )))}
          {/* top ornament */}
          <path d="M30,50 Q60,20 90,50" fill="none" stroke="#c4a35a" strokeWidth="2" />
          <circle cx="60" cy="28" r="10" fill="#c4a35a" stroke="#8a6a2a" strokeWidth="1" />
          {/* art nouveau curves */}
          <path d="M5,160 Q20,155 35,160 Q50,165 65,160 Q80,155 95,160 Q110,165 115,160" fill="none" stroke="#6a8a4a" strokeWidth="1.5" opacity="0.6" />
        </g>
      </g>

      {/* second building */}
      <g transform="translate(680,120)" opacity="0.6">
        <g style={{transformOrigin:"40px 250px", animation:"s11grow 3s ease-out 0.5s both"}}>
          <rect x="0" y="30" width="80" height="230" fill="#7a6a5a" stroke="#5a4a3a" strokeWidth="1.5" />
          {[0,1,2,3].map(r=>[0,1].map(c=>(
            <rect key={`${r}${c}`} x={10+c*40} y={45+r*50} width="22" height="30" fill="#4a6fa5" opacity="0.2" rx="11 11 0 0" />
          )))}
        </g>
      </g>

      {/* Song festival — chorus of people */}
      <g transform="translate(100,250)">
        {/* stage / bandstand */}
        <path d="M-20,80 L300,80 L280,90 L0,90Z" fill="#5a4a3a" />
        <path d="M50,-10 Q150,-40 250,-10 L250,80 L50,80Z" fill="#7a6a5a" opacity="0.3" />

        {/* rows of singers */}
        {[0,1,2].map(row=>
          Array.from({length:8+row*2},(_,i)=>(
            <g key={`${row}-${i}`} transform={`translate(${60+i*25-row*10},${20+row*20})`}
              style={{animation:`s11sing 1.5s ease-in-out ${i*0.1+row*0.2}s infinite`}}>
              <circle cx="0" cy="0" r="5" fill={row===0?"#c4a35a":"#8a7a6a"} />
              <rect x="-4" y="5" width="8" height="12" fill={["#5a4a3a","#6a5a4a","#7a6a5a"][row]} rx="1" />
            </g>
          ))
        )}

        {/* musical notes floating up */}
        {[{x:80,d:0},{x:140,d:1},{x:200,d:2},{x:120,d:1.5},{x:180,d:0.5}].map((n,i)=>(
          <text key={i} x={n.x} y={-10} fontSize="14" fill="#c4a35a" opacity="0.7"
            style={{animation:`s11note 3s ease-out ${n.d}s infinite`}}>
            &#9835;
          </text>
        ))}
      </g>

      {/* Latvian flag */}
      <g transform="translate(380,180)">
        <rect x="0" y="0" width="3" height="60" fill="#5a4a3a" />
        <g style={{transformOrigin:"3px 0px", animation:"s11wave 2.5s ease-in-out infinite"}}>
          <rect x="3" y="2" width="35" height="8" fill="#9b1b30" />
          <rect x="3" y="10" width="35" height="5" fill="white" />
          <rect x="3" y="15" width="35" height="8" fill="#9b1b30" />
        </g>
      </g>

      {/* ground */}
      <rect x="0" y="370" width="800" height="130" fill="#5a4a3a" opacity="0.2" />

      {/* Art Nouveau ornamental border */}
      <rect x="8" y="8" width="784" height="484" fill="none" stroke="#6a8a4a" strokeWidth="2" rx="5" />
      {/* corner flourishes */}
      {[[20,20,0],[780,20,90],[780,480,180],[20,480,270]].map(([x,y,r],i)=>(
        <path key={i} d={`M${x},${y} Q${x+(r===0||r===270?15:-15)},${y+(r===0||r===90?15:-15)} ${x+(r===0||r===270?25:-25)},${y}`}
          fill="none" stroke="#6a8a4a" strokeWidth="1.5" opacity="0.5" />
      ))}
    </svg>
  );
}

/* ── Scene 12 ─ The Eve of War (1905–1914) ── */
export function Scene12() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="s12sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8b1a1a" />
          <stop offset="40%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#2a1a0a" />
        </linearGradient>
      </defs>
      <style>{`
        @keyframes s12march { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
        @keyframes s12flash { 0%,50%{opacity:0} 55%{opacity:0.8} 60%{opacity:0} }
        @keyframes s12flag  { 0%,100%{transform:skewX(0)} 50%{transform:skewX(-8deg)} }
        @keyframes s12pulse { 0%,100%{opacity:0.3} 50%{opacity:0.7} }
        @keyframes s12drift { 0%{transform:translateX(0)} 100%{transform:translateX(100px)} }
      `}</style>

      {/* dramatic sky */}
      <rect width="800" height="500" fill="url(#s12sky)" />

      {/* lightning flash */}
      <rect width="800" height="500" fill="white" style={{animation:"s12flash 5s ease-out infinite"}} />

      {/* ominous clouds */}
      {[{x:100,y:50},{x:300,y:30},{x:550,y:60},{x:700,y:40}].map((c,i)=>(
        <g key={i} style={{animation:`s12drift ${20+i*5}s linear infinite`}} opacity="0.3">
          <ellipse cx={c.x} cy={c.y} rx="80" ry="25" fill="#333" />
          <ellipse cx={c.x+40} cy={c.y-10} rx="50" ry="18" fill="#333" />
        </g>
      ))}

      {/* Riga skyline — grand but darkened */}
      <g transform="translate(0,180)">
        {/* Art Nouveau buildings silhouette */}
        {[0,60,120,180,240,310,380,450,520,590,660,730].map((x,i)=>{
          const h = 60+i%4*25;
          return <rect key={i} x={x} y={100-h} width={50+i%3*10} height={h+50} fill="#1a1a1a" />;
        })}
        {/* spires */}
        <rect x="200" y="-30" width="6" height="130" fill="#1a1a1a" />
        <polygon points="203,-45 197,-30 209,-30" fill="#1a1a1a" />
        <rect x="450" y="-20" width="8" height="120" fill="#1a1a1a" />
        <polygon points="454,-35 448,-20 460,-20" fill="#1a1a1a" />
        <rect x="650" y="-10" width="6" height="110" fill="#1a1a1a" />
      </g>

      {/* marching soldiers — expressionist silhouettes */}
      <g transform="translate(0,350)">
        {Array.from({length:16},(_,i)=>(
          <g key={i} transform={`translate(${50+i*45},0)`}
            style={{animation:`s12march 0.6s ease-in-out ${i*0.08}s infinite`}}>
            {/* soldier silhouette */}
            <circle cx="0" cy="-25" r="6" fill="#1a1a1a" />
            <rect x="-5" y="-19" width="10" height="20" fill="#1a1a1a" />
            {/* legs marching */}
            <rect x="-4" y="1" width="3" height="14" fill="#1a1a1a" transform={`rotate(${i%2===0?10:-10},-2,1)`} />
            <rect x="1" y="1" width="3" height="14" fill="#1a1a1a" transform={`rotate(${i%2===0?-10:10},2,1)`} />
            {/* rifle */}
            <rect x="5" y="-30" width="1.5" height="28" fill="#333" />
            {/* bayonet */}
            <polygon points="5.5,-32 4,-28 7,-28" fill="#666" />
            {/* helmet */}
            <ellipse cx="0" cy="-28" rx="7" ry="3" fill="#1a1a1a" />
          </g>
        ))}
      </g>

      {/* red glow on horizon — war approaching */}
      <ellipse cx="400" cy="300" rx="400" ry="80" fill="#8b1a1a" opacity="0.15"
        style={{animation:"s12pulse 3s ease-in-out infinite"}} />

      {/* year "1914" faintly */}
      <text x="400" y="480" textAnchor="middle" fontSize="60" fontFamily="serif" fill="#8b1a1a" opacity="0.15"
        style={{animation:"s12pulse 4s ease-in-out infinite"}}>
        1914
      </text>

      {/* ground */}
      <rect x="0" y="380" width="800" height="120" fill="#0a0a0a" />

      {/* stark border — expressionist */}
      <rect x="4" y="4" width="792" height="492" fill="none" stroke="#8b1a1a" strokeWidth="3" />
    </svg>
  );
}

/* ── Export map ── */
const sceneComponents: Record<number, React.FC> = {
  1: Scene1,
  2: Scene2,
  3: Scene3,
  4: Scene4,
  5: Scene5,
  6: Scene6,
  7: Scene7,
  8: Scene8,
  9: Scene9,
  10: Scene10,
  11: Scene11,
  12: Scene12,
};

export default function SceneIllustration({ sceneId }: { sceneId: number }) {
  const Component = sceneComponents[sceneId];
  if (!Component) return null;
  return <Component />;
}
