"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/* ─────────────────────────────────────────────
   SVG medieval gravure illustrations
   Each returns an animated SVG in woodcut style
   ───────────────────────────────────────────── */

const gravureStyle = {
  stroke: "#2c1810",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function GravureShip() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <pattern id="hatch1" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="4" stroke="#2c1810" strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>
      {/* waves */}
      <g className="animate-waves">
        <path d="M0 240 Q50 225 100 240 Q150 255 200 240 Q250 225 300 240 Q350 255 400 240 V300 H0Z" fill="url(#hatch1)" {...gravureStyle} strokeWidth={1} />
        <path d="M0 250 Q60 235 120 250 Q180 265 240 250 Q300 235 360 250 Q390 258 400 250" {...gravureStyle} strokeWidth={0.8} />
        <path d="M0 260 Q40 248 80 260 Q120 272 160 260 Q200 248 240 260 Q280 272 320 260 Q360 248 400 260" {...gravureStyle} strokeWidth={0.6} />
      </g>
      {/* hull */}
      <g className="animate-rock">
        <path d="M100 230 Q90 210 120 180 L280 180 Q310 210 300 230 Z" fill="url(#hatch1)" {...gravureStyle} />
        {/* crosshatching on hull */}
        <line x1="120" y1="195" x2="280" y2="195" {...gravureStyle} strokeWidth={0.5} />
        <line x1="115" y1="205" x2="285" y2="205" {...gravureStyle} strokeWidth={0.5} />
        <line x1="110" y1="215" x2="290" y2="215" {...gravureStyle} strokeWidth={0.5} />
        {/* mast */}
        <line x1="200" y1="180" x2="200" y2="60" {...gravureStyle} strokeWidth={2} />
        {/* sail */}
        <path d="M200 70 L270 100 L270 160 L200 170 Z" fill="url(#hatch1)" {...gravureStyle} />
        {/* cross on sail */}
        <line x1="230" y1="90" x2="230" y2="150" {...gravureStyle} strokeWidth={2.5} />
        <line x1="215" y1="120" x2="250" y2="120" {...gravureStyle} strokeWidth={2.5} />
        {/* rigging */}
        <line x1="200" y1="60" x2="120" y2="180" {...gravureStyle} strokeWidth={0.5} />
        <line x1="200" y1="60" x2="280" y2="180" {...gravureStyle} strokeWidth={0.5} />
        {/* flag */}
        <path d="M200 60 L200 45 L220 50 L200 55" {...gravureStyle} fill="#2c1810" />
      </g>
      <style>{`
        .animate-waves { animation: waves 3s ease-in-out infinite; }
        .animate-rock { animation: rock 4s ease-in-out infinite; transform-origin: 200px 230px; }
        @keyframes waves { 0%,100% { transform: translateX(0); } 50% { transform: translateX(-8px); } }
        @keyframes rock { 0%,100% { transform: rotate(0deg); } 25% { transform: rotate(2deg); } 75% { transform: rotate(-2deg); } }
      `}</style>
    </svg>
  );
}

function GravureCastle() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <pattern id="hatch2" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#2c1810" strokeWidth="0.4" opacity="0.25" />
        </pattern>
        <pattern id="brick" width="20" height="10" patternUnits="userSpaceOnUse">
          <rect width="20" height="10" fill="none" stroke="#2c1810" strokeWidth="0.3" opacity="0.3" />
          <line x1="10" y1="0" x2="10" y2="5" stroke="#2c1810" strokeWidth="0.3" opacity="0.3" />
        </pattern>
      </defs>
      {/* ground */}
      <path d="M0 260 Q100 255 200 258 Q300 261 400 256 V300 H0Z" fill="url(#hatch2)" {...gravureStyle} strokeWidth={0.8} />
      {/* main wall */}
      <rect x="80" y="160" width="240" height="100" fill="url(#brick)" {...gravureStyle} />
      {/* left tower */}
      <rect x="60" y="100" width="50" height="160" fill="url(#brick)" {...gravureStyle} />
      <path d="M60 100 L85 70 L110 100" {...gravureStyle} fill="url(#hatch2)" />
      {/* crenellations left */}
      {[62, 72, 82, 92, 102].map((x) => (
        <rect key={x} x={x} y="95" width="6" height="8" {...gravureStyle} strokeWidth={0.8} />
      ))}
      {/* right tower */}
      <rect x="290" y="110" width="50" height="150" fill="url(#brick)" {...gravureStyle} />
      <path d="M290 110 L315 75 L340 110" {...gravureStyle} fill="url(#hatch2)" />
      {/* crenellations right */}
      {[292, 302, 312, 322, 332].map((x) => (
        <rect key={x} x={x} y="105" width="6" height="8" {...gravureStyle} strokeWidth={0.8} />
      ))}
      {/* central keep */}
      <rect x="160" y="120" width="80" height="140" fill="url(#brick)" {...gravureStyle} />
      <path d="M160 120 L200 80 L240 120" {...gravureStyle} fill="url(#hatch2)" />
      {/* cross atop keep */}
      <line x1="200" y1="80" x2="200" y2="55" {...gravureStyle} strokeWidth={2} />
      <line x1="192" y1="65" x2="208" y2="65" {...gravureStyle} strokeWidth={2} />
      {/* gate */}
      <path d="M180 260 L180 210 Q200 195 220 210 L220 260" {...gravureStyle} fill="url(#hatch2)" />
      {/* windows */}
      <ellipse cx="200" cy="150" rx="6" ry="10" {...gravureStyle} />
      <ellipse cx="85" cy="140" rx="4" ry="7" {...gravureStyle} />
      <ellipse cx="315" cy="145" rx="4" ry="7" {...gravureStyle} />
      {/* flag on keep - animated */}
      <g className="animate-flag">
        <path d="M200 55 L225 48 L220 58 L200 55" fill="#6b1d2a" {...gravureStyle} strokeWidth={0.8} />
      </g>
      <style>{`
        .animate-flag { animation: flag 2s ease-in-out infinite; transform-origin: 200px 55px; }
        @keyframes flag { 0%,100% { transform: scaleX(1); } 50% { transform: scaleX(0.85); } }
      `}</style>
    </svg>
  );
}

function GravureBattle() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <pattern id="hatch3" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
          <line x1="0" y1="0" x2="0" y2="4" stroke="#2c1810" strokeWidth="0.5" opacity="0.2" />
        </pattern>
      </defs>
      {/* ground */}
      <path d="M0 270 Q200 260 400 270 V300 H0Z" fill="url(#hatch3)" {...gravureStyle} strokeWidth={0.5} />
      {/* Knight 1 - left, on horse, charging right */}
      <g className="animate-charge-left">
        {/* horse body */}
        <ellipse cx="130" cy="230" rx="45" ry="20" {...gravureStyle} fill="url(#hatch3)" />
        {/* horse legs */}
        <line x1="100" y1="245" x2="92" y2="270" {...gravureStyle} />
        <line x1="115" y1="248" x2="110" y2="270" {...gravureStyle} />
        <line x1="150" y1="248" x2="155" y2="270" {...gravureStyle} />
        <line x1="162" y1="245" x2="170" y2="270" {...gravureStyle} />
        {/* horse head */}
        <path d="M175 225 L195 210 L190 220 L175 230" {...gravureStyle} fill="url(#hatch3)" />
        {/* rider torso */}
        <rect x="120" y="195" width="20" height="35" rx="3" {...gravureStyle} fill="url(#hatch3)" />
        {/* helmet */}
        <circle cx="130" cy="188" r="10" {...gravureStyle} fill="url(#hatch3)" />
        <line x1="130" y1="178" x2="130" y2="172" {...gravureStyle} strokeWidth={1.5} />
        {/* lance */}
        <line x1="140" y1="200" x2="210" y2="185" {...gravureStyle} strokeWidth={1.5} />
        {/* shield with cross */}
        <ellipse cx="118" cy="210" rx="8" ry="12" {...gravureStyle} fill="url(#hatch3)" />
        <line x1="118" y1="202" x2="118" y2="218" {...gravureStyle} strokeWidth={1} />
        <line x1="112" y1="210" x2="124" y2="210" {...gravureStyle} strokeWidth={1} />
      </g>
      {/* Knight 2 - right, facing left */}
      <g className="animate-charge-right">
        {/* horse body */}
        <ellipse cx="280" cy="235" rx="40" ry="18" {...gravureStyle} fill="url(#hatch3)" />
        {/* horse legs */}
        <line x1="305" y1="248" x2="312" y2="270" {...gravureStyle} />
        <line x1="295" y1="250" x2="298" y2="270" {...gravureStyle} />
        <line x1="265" y1="250" x2="260" y2="270" {...gravureStyle} />
        <line x1="255" y1="248" x2="248" y2="270" {...gravureStyle} />
        {/* horse head */}
        <path d="M240 228 L220 215 L225 225 L240 232" {...gravureStyle} fill="url(#hatch3)" />
        {/* rider */}
        <rect x="270" y="200" width="18" height="33" rx="3" {...gravureStyle} fill="url(#hatch3)" />
        <circle cx="280" cy="193" r="9" {...gravureStyle} fill="url(#hatch3)" />
        {/* sword raised */}
        <line x1="270" y1="205" x2="240" y2="175" {...gravureStyle} strokeWidth={2} />
        <line x1="236" y1="178" x2="244" y2="172" {...gravureStyle} strokeWidth={1.5} />
      </g>
      {/* impact lines */}
      <g className="animate-clash" opacity="0.6">
        <line x1="205" y1="180" x2="215" y2="170" {...gravureStyle} strokeWidth={1} />
        <line x1="210" y1="185" x2="225" y2="178" {...gravureStyle} strokeWidth={1} />
        <line x1="208" y1="190" x2="218" y2="195" {...gravureStyle} strokeWidth={1} />
      </g>
      <style>{`
        .animate-charge-left { animation: chargeL 2s ease-in-out infinite; }
        .animate-charge-right { animation: chargeR 2s ease-in-out infinite; }
        .animate-clash { animation: clash 1s ease-in-out infinite; }
        @keyframes chargeL { 0%,100% { transform: translateX(0); } 50% { transform: translateX(8px); } }
        @keyframes chargeR { 0%,100% { transform: translateX(0); } 50% { transform: translateX(-8px); } }
        @keyframes clash { 0%,100% { opacity: 0; } 40%,60% { opacity: 0.8; } }
      `}</style>
    </svg>
  );
}

function GravureChurch() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <pattern id="hatch4" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#2c1810" strokeWidth="0.4" opacity="0.2" />
        </pattern>
      </defs>
      {/* ground */}
      <line x1="0" y1="270" x2="400" y2="270" {...gravureStyle} strokeWidth={0.8} />
      {/* main building */}
      <rect x="120" y="160" width="160" height="110" fill="url(#hatch4)" {...gravureStyle} />
      {/* roof */}
      <path d="M110 160 L200 90 L290 160" fill="url(#hatch4)" {...gravureStyle} />
      {/* steeple */}
      <rect x="185" y="60" width="30" height="30" fill="url(#hatch4)" {...gravureStyle} />
      <path d="M185 60 L200 25 L215 60" fill="url(#hatch4)" {...gravureStyle} />
      {/* cross */}
      <line x1="200" y1="25" x2="200" y2="8" {...gravureStyle} strokeWidth={2.5} />
      <line x1="193" y1="15" x2="207" y2="15" {...gravureStyle} strokeWidth={2.5} />
      {/* rose window */}
      <circle cx="200" cy="130" r="18" {...gravureStyle} />
      <circle cx="200" cy="130" r="12" {...gravureStyle} strokeWidth={0.8} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1={200 + Math.cos((angle * Math.PI) / 180) * 12}
          y1={130 + Math.sin((angle * Math.PI) / 180) * 12}
          x2={200 + Math.cos((angle * Math.PI) / 180) * 18}
          y2={130 + Math.sin((angle * Math.PI) / 180) * 18}
          {...gravureStyle}
          strokeWidth={0.6}
        />
      ))}
      {/* door */}
      <path d="M187 270 L187 230 Q200 218 213 230 L213 270" {...gravureStyle} fill="url(#hatch4)" />
      {/* side windows */}
      <path d="M145 200 L145 180 Q155 172 165 180 L165 200" {...gravureStyle} />
      <path d="M235 200 L235 180 Q245 172 255 180 L255 200" {...gravureStyle} />
      {/* bell glow */}
      <g className="animate-bell">
        <ellipse cx="200" cy="75" rx="5" ry="6" fill="#2c1810" opacity="0.4" />
      </g>
      <style>{`
        .animate-bell { animation: bell 3s ease-in-out infinite; transform-origin: 200px 68px; }
        @keyframes bell { 0%,100% { transform: rotate(0deg); } 25% { transform: rotate(8deg); } 75% { transform: rotate(-8deg); } }
      `}</style>
    </svg>
  );
}

function GravureSiege() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <pattern id="hatch5" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="4" stroke="#2c1810" strokeWidth="0.4" opacity="0.25" />
        </pattern>
      </defs>
      {/* ground */}
      <path d="M0 270 L400 270 V300 H0Z" fill="url(#hatch5)" {...gravureStyle} strokeWidth={0.5} />
      {/* fortress wall */}
      <rect x="220" y="140" width="150" height="130" fill="url(#hatch5)" {...gravureStyle} />
      {/* crenellations */}
      {[225, 240, 255, 270, 285, 300, 315, 330, 345, 355].map((x) => (
        <rect key={x} x={x} y="132" width="8" height="12" {...gravureStyle} strokeWidth={0.8} />
      ))}
      {/* tower */}
      <rect x="340" y="100" width="40" height="170" fill="url(#hatch5)" {...gravureStyle} />
      <path d="M340 100 L360 70 L380 100" fill="url(#hatch5)" {...gravureStyle} />
      {/* flames on wall */}
      <g className="animate-flames">
        <path d="M260 135 Q265 115 270 135 Q275 110 280 135" stroke="#c45530" strokeWidth={1.5} fill="none" opacity="0.7" />
        <path d="M290 130 Q295 108 300 130 Q305 105 310 130" stroke="#c45530" strokeWidth={1.5} fill="none" opacity="0.6" />
      </g>
      {/* catapult */}
      <g className="animate-catapult">
        {/* base */}
        <rect x="40" y="250" width="80" height="15" rx="2" {...gravureStyle} fill="url(#hatch5)" />
        {/* wheels */}
        <circle cx="55" cy="268" r="8" {...gravureStyle} />
        <circle cx="105" cy="268" r="8" {...gravureStyle} />
        {/* arm */}
        <line x1="80" y1="250" x2="80" y2="200" {...gravureStyle} strokeWidth={2.5} />
        <line x1="80" y1="200" x2="140" y2="180" {...gravureStyle} strokeWidth={2} />
        {/* sling */}
        <circle cx="140" cy="178" r="4" fill="#2c1810" opacity="0.5" />
      </g>
      {/* projectile arc */}
      <g className="animate-projectile">
        <circle cx="200" cy="155" r="3" fill="#2c1810" opacity="0.6" />
      </g>
      {/* soldiers at base of wall */}
      {[230, 245, 260].map((x) => (
        <g key={x}>
          <circle cx={x} cy="255" r="4" {...gravureStyle} strokeWidth={0.8} />
          <line x1={x} y1="259" x2={x} y2="270" {...gravureStyle} strokeWidth={0.8} />
        </g>
      ))}
      <style>{`
        .animate-flames { animation: flames 0.8s ease-in-out infinite alternate; }
        .animate-catapult { animation: catapult 3s ease-in-out infinite; transform-origin: 80px 250px; }
        .animate-projectile { animation: projectile 3s ease-in-out infinite; }
        @keyframes flames { 0% { transform: translateY(0) scaleY(1); } 100% { transform: translateY(-3px) scaleY(1.15); } }
        @keyframes catapult { 0%,70% { transform: rotate(0deg); } 80% { transform: rotate(-5deg); } 90%,100% { transform: rotate(0deg); } }
        @keyframes projectile { 0%,75% { opacity: 0; transform: translate(0,0); } 80% { opacity: 1; transform: translate(0,0); } 95% { opacity: 1; transform: translate(40px, -10px); } 100% { opacity: 0; transform: translate(50px, 0px); } }
      `}</style>
    </svg>
  );
}

function GravureCityscape() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <pattern id="hatch6" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(60)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#2c1810" strokeWidth="0.3" opacity="0.2" />
        </pattern>
      </defs>
      {/* river */}
      <g className="animate-river">
        <path d="M0 260 Q100 250 200 260 Q300 270 400 260 V300 H0Z" fill="url(#hatch6)" {...gravureStyle} strokeWidth={0.6} />
      </g>
      {/* skyline - multiple buildings */}
      {/* church spire */}
      <rect x="50" y="150" width="30" height="110" fill="url(#hatch6)" {...gravureStyle} />
      <path d="M50 150 L65 100 L80 150" fill="url(#hatch6)" {...gravureStyle} />
      <line x1="65" y1="100" x2="65" y2="85" {...gravureStyle} strokeWidth={1.5} />
      <line x1="60" y1="90" x2="70" y2="90" {...gravureStyle} strokeWidth={1.5} />
      {/* guild hall */}
      <rect x="90" y="170" width="50" height="90" fill="url(#hatch6)" {...gravureStyle} />
      <path d="M85 170 L115 140 L145 170" fill="url(#hatch6)" {...gravureStyle} />
      {/* tower */}
      <rect x="155" y="130" width="25" height="130" fill="url(#hatch6)" {...gravureStyle} />
      <path d="M155 130 L167 105 L180 130" fill="url(#hatch6)" {...gravureStyle} />
      {/* merchant houses */}
      <rect x="190" y="185" width="35" height="75" fill="url(#hatch6)" {...gravureStyle} />
      <path d="M188 185 L207 165 L227 185" fill="url(#hatch6)" {...gravureStyle} />
      <rect x="230" y="180" width="30" height="80" fill="url(#hatch6)" {...gravureStyle} />
      <path d="M228 180 L245 158 L262 180" fill="url(#hatch6)" {...gravureStyle} />
      {/* factory chimney */}
      <rect x="280" y="160" width="15" height="100" fill="url(#hatch6)" {...gravureStyle} />
      <rect x="275" y="155" width="25" height="8" {...gravureStyle} />
      {/* smoke */}
      <g className="animate-smoke">
        <circle cx="287" cy="140" r="6" {...gravureStyle} strokeWidth={0.6} opacity="0.4" />
        <circle cx="295" cy="128" r="8" {...gravureStyle} strokeWidth={0.6} opacity="0.3" />
        <circle cx="290" cy="115" r="10" {...gravureStyle} strokeWidth={0.6} opacity="0.2" />
      </g>
      {/* more buildings */}
      <rect x="310" y="190" width="35" height="70" fill="url(#hatch6)" {...gravureStyle} />
      <path d="M308 190 L327 170 L347 190" fill="url(#hatch6)" {...gravureStyle} />
      <rect x="350" y="175" width="30" height="85" fill="url(#hatch6)" {...gravureStyle} />
      <path d="M348 175 L365 150 L382 175" fill="url(#hatch6)" {...gravureStyle} />
      {/* windows (dots) */}
      {[100,110,120,130, 195,205,215, 235,245, 315,325,335, 355,365].map((x,i) => (
        <rect key={i} x={x} y={210 + (i%3)*15} width="4" height="5" {...gravureStyle} strokeWidth={0.5} />
      ))}
      <style>{`
        .animate-river { animation: river 4s ease-in-out infinite; }
        .animate-smoke { animation: smoke 5s ease-in-out infinite; }
        @keyframes river { 0%,100% { transform: translateX(0); } 50% { transform: translateX(-5px); } }
        @keyframes smoke { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(-20px); opacity: 0; } }
      `}</style>
    </svg>
  );
}

function GravureScribe() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <pattern id="hatch7" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
          <line x1="0" y1="0" x2="0" y2="4" stroke="#2c1810" strokeWidth="0.4" opacity="0.2" />
        </pattern>
      </defs>
      {/* desk */}
      <path d="M100 200 L300 200 L320 270 L80 270 Z" fill="url(#hatch7)" {...gravureStyle} />
      {/* legs */}
      <line x1="105" y1="270" x2="95" y2="295" {...gravureStyle} />
      <line x1="295" y1="270" x2="305" y2="295" {...gravureStyle} />
      {/* book/manuscript */}
      <rect x="140" y="175" width="70" height="50" rx="2" fill="url(#hatch7)" {...gravureStyle} />
      <line x1="175" y1="178" x2="175" y2="222" {...gravureStyle} strokeWidth={0.5} />
      {/* text lines on book */}
      {[185, 190, 195, 200, 205, 210, 215].map((y) => (
        <line key={y} x1="148" y1={y} x2="168" y2={y} {...gravureStyle} strokeWidth={0.3} opacity="0.5" />
      ))}
      {/* figure - monk/scribe */}
      {/* body */}
      <path d="M190 160 Q200 120 210 160 L215 200 L185 200 Z" fill="url(#hatch7)" {...gravureStyle} />
      {/* head */}
      <circle cx="200" cy="110" r="14" {...gravureStyle} fill="url(#hatch7)" />
      {/* tonsure */}
      <path d="M190 103 Q200 98 210 103" {...gravureStyle} strokeWidth={0.6} />
      {/* writing arm - animated */}
      <g className="animate-write">
        <line x1="210" y1="155" x2="230" y2="190" {...gravureStyle} strokeWidth={1.2} />
        {/* quill */}
        <line x1="230" y1="190" x2="220" y2="195" {...gravureStyle} strokeWidth={1} />
        <line x1="230" y1="190" x2="245" y2="175" {...gravureStyle} strokeWidth={0.8} />
        <path d="M245 175 Q250 165 248 160" {...gravureStyle} strokeWidth={0.6} />
      </g>
      {/* ink well */}
      <ellipse cx="250" cy="195" rx="8" ry="5" fill="#2c1810" opacity="0.4" />
      {/* candle */}
      <rect x="125" y="165" width="6" height="20" fill="url(#hatch7)" {...gravureStyle} />
      <g className="animate-flame">
        <path d="M128 165 Q125 155 128 148 Q131 155 128 165" fill="#c4a35a" opacity="0.6" />
      </g>
      {/* shelf with books behind */}
      <line x1="100" y1="90" x2="300" y2="90" {...gravureStyle} strokeWidth={1} />
      {[110, 130, 148, 170, 195, 210, 240, 260, 275].map((x) => (
        <rect key={x} x={x} y="60" width="12" height="30" fill="url(#hatch7)" {...gravureStyle} strokeWidth={0.5} />
      ))}
      <style>{`
        .animate-write { animation: write 1.5s ease-in-out infinite; transform-origin: 210px 155px; }
        .animate-flame { animation: flame 0.6s ease-in-out infinite alternate; transform-origin: 128px 165px; }
        @keyframes write { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(3deg); } }
        @keyframes flame { 0% { transform: scaleY(1) scaleX(1); } 100% { transform: scaleY(1.2) scaleX(0.85); } }
      `}</style>
    </svg>
  );
}

/* ─── scene definitions ─── */
interface Scene {
  id: number;
  title: string;
  year: string;
  narration: string;
  bg: string;
  Illustration: () => React.JSX.Element;
}

const scenes: Scene[] = [
  {
    id: 1, title: "The Crusaders Sail East", year: "1198–1201",
    narration: "Pope Celestine III declares a crusade against the last pagans of Europe. German knights and monks board ships at Lübeck, sailing across the grey Baltic toward an unknown land of dark forests, fierce tribes, and ancient gods. Bishop Albert founds Riga at the mouth of the Daugava — the crusade's bridgehead.",
    bg: "linear-gradient(180deg, #1a2744 0%, #2a3754 40%, #4a6a8a 100%)",
    Illustration: GravureShip,
  },
  {
    id: 2, title: "The Sword Brothers", year: "1202–1236",
    narration: "The Order of the Sword Brothers is established to wage permanent holy war. They sweep through Livonia, conquering tribe after tribe. Hill-forts burn, sacred groves are felled, and entire peoples are baptized at swordpoint. The Livonians, Estonians, and Curonians resist with desperate courage — but the armored cavalry is unstoppable.",
    bg: "linear-gradient(180deg, #6b1d2a 0%, #4a2a18 60%, #2c1810 100%)",
    Illustration: GravureBattle,
  },
  {
    id: 3, title: "The Catastrophe at Saule", year: "1236",
    narration: "The Sword Brothers march into Samogitia and walk into a trap. In the marshy forests near Saule, the pagans surround the German army. Heavy cavalry cannot maneuver. Master Volkwin falls. The Order is annihilated in a single afternoon. From the ashes, the survivors merge with the mighty Teutonic Order. The white mantle replaces the red sword.",
    bg: "linear-gradient(180deg, #2c1810 0%, #4a2a18 50%, #6b3a20 100%)",
    Illustration: GravureSiege,
  },
  {
    id: 4, title: "Castles Rise Across Livonia", year: "1237–1290",
    narration: "The Teutonic Order transforms the Baltic landscape. Stone castles rise at every river crossing — Riga, Cēsis, Sigulda, Kuldīga, Dobele. Each fortress is monastery, barracks, and government seat in one. The brothers build roads, found towns, and open trade routes. Riga joins the Hanseatic League in 1282, linking the Baltic to the markets of Europe.",
    bg: "linear-gradient(180deg, #e8dfd0 0%, #c4a35a 60%, #a08840 100%)",
    Illustration: GravureCastle,
  },
  {
    id: 5, title: "The Age of Parchment", year: "c. 1500–1560",
    narration: "Riga is a powerful Hanseatic city under Catholic dominion. Latin manuscripts fill the monastery libraries. In 1513, the first book is printed in Riga. Then in 1521, the Reformation sweeps through — Protestant doctrines transform the city. The medieval world gives way to a new age, recorded in parchment and ink.",
    bg: "linear-gradient(180deg, #5a3a28 0%, #c4a35a 100%)",
    Illustration: GravureChurch,
  },
  {
    id: 6, title: "The Fall of Livonia", year: "1558–1621",
    narration: "Ivan the Terrible invades in 1558, igniting decades of war. The Livonian Order dissolves. Riga becomes a prize fought over by Russia, Poland, and Sweden. Armies march and counter-march across the ravaged land. Fortifications are besieged and stormed. In 1581, Riga falls to Poland-Lithuania. The wars will not end until Sweden triumphs in 1621.",
    bg: "linear-gradient(180deg, #2c1810 0%, #6b1d2a 50%, #8b2d3a 100%)",
    Illustration: GravureSiege,
  },
  {
    id: 7, title: "The Swedish Crown", year: "1621–1710",
    narration: "Gustav II Adolf conquers Riga, making it the largest city in the entire Swedish Empire — larger than Stockholm itself. A golden era begins. Schools are founded, Bibles translated, panoramic engravings capture the city's grandeur. But the Great Famine of 1695 brings death, and the Northern War approaches like a storm.",
    bg: "linear-gradient(180deg, #2a3754 0%, #c4a35a 100%)",
    Illustration: GravureShip,
  },
  {
    id: 8, title: "Peter's City", year: "1710–1795",
    narration: "The Russian siege of 1709–1710 and a catastrophic plague kill two-thirds of Riga's population. Tsar Peter the Great claims the ruined city. The Treaty of Nystad cedes the Baltic to Russia forever. Slowly, painfully, Riga rebuilds — German merchants retain their privileges while Russian imperial power reshapes the political order.",
    bg: "linear-gradient(180deg, #1a2744 0%, #2a3754 100%)",
    Illustration: GravureCastle,
  },
  {
    id: 9, title: "The Industrial Titan", year: "1795–1860",
    narration: "Napoleon's Grande Armée approaches in 1812 — Riga's suburbs are burned as desperate defense. Serfdom is abolished. Railways arrive. The medieval walls come down in 1857. Riga transforms from a walled Hanseatic town into a modern industrial seaport, the first Latvian newspapers heralding a new consciousness.",
    bg: "linear-gradient(180deg, #5a3a28 0%, #2c1810 100%)",
    Illustration: GravureCityscape,
  },
  {
    id: 10, title: "The Latvian Awakening", year: "1860–1905",
    narration: "Riga's population explodes from 77,000 to 282,000 in four decades. Latvians rise to become the city's largest group. The first Song Festival in 1873 ignites national pride. Art Nouveau buildings soar skyward. Riga becomes the third-largest industrial city in the Russian Empire. In 1905, revolution shakes the foundations.",
    bg: "linear-gradient(180deg, #c4a35a 0%, #e8dfd0 100%)",
    Illustration: GravureCityscape,
  },
  {
    id: 11, title: "The Eve of War", year: "1905–1914",
    narration: "Imperial Riga reaches its zenith: nearly 600,000 souls, hundreds of Jugendstil masterpieces, a rich tapestry of Latvian, German, Russian, and Jewish cultures. Factories hum, theaters fill, newspapers multiply. Then, in August 1914, the mobilization orders arrive. The Great War begins. An era ends. Nothing will ever be the same.",
    bg: "linear-gradient(180deg, #6b1d2a 0%, #1a2744 100%)",
    Illustration: GravureChurch,
  },
  {
    id: 12, title: "The Chronicler's Quill", year: "c. 1290 — Today",
    narration: "An anonymous brother once took up his pen in rhyming German verse, recording a century of crusade. His manuscript survives in Heidelberg — 148 parchment pages, now fully translated. The castle ruins still dot the landscape. The peoples he described live on in the DNA and place names of the modern Baltic. Open the chronicle and read for yourself.",
    bg: "linear-gradient(180deg, #2c1810 0%, #5a3a28 50%, #c4a35a 100%)",
    Illustration: GravureScribe,
  },
];

const SCENE_DURATION = 25000; // 25s per scene = 5 min total

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
      }, 500);
    },
    [total]
  );

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
        if (current < total - 1) goTo(current + 1);
        else setPlaying(false);
      }
    }, 100);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [playing, current, total, goTo]);

  const togglePlay = () => {
    if (!playing) startRef.current = Date.now() - progress * SCENE_DURATION;
    setPlaying((p) => !p);
  };

  const elapsed = Math.round((current * SCENE_DURATION + progress * SCENE_DURATION) / 1000);
  const totalSec = total * (SCENE_DURATION / 1000);
  const mm = (n: number) => `${Math.floor(n / 60)}:${String(Math.floor(n % 60)).padStart(2, "0")}`;

  const Illust = scene.Illustration;

  return (
    <>
      <div className="fixed inset-0 z-50 flex flex-col" style={{ background: scene.bg }}>
        {/* back */}
        <a href="/chapters" className="absolute top-4 left-4 z-10 text-parchment/60 hover:text-gold text-sm font-medieval transition-colors">
          &larr; Back to Timeline
        </a>

        {/* main */}
        <div className={`flex-1 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 gap-6 transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}>
          {/* illustration panel */}
          <div className="w-full max-w-[400px] lg:w-1/2 lg:max-w-[480px] aspect-[4/3] relative">
            <div className="absolute inset-0 border border-parchment/15 rounded-sm bg-parchment/5 p-4">
              <Illust />
            </div>
          </div>

          {/* text panel */}
          <div className="w-full lg:w-1/2 max-w-lg text-center lg:text-left">
            <p className="text-gold/50 tracking-[0.4em] uppercase text-[10px] mb-2">
              Scene {scene.id} of {total}
            </p>
            <h1 className="font-gothic text-2xl sm:text-4xl text-parchment mb-1 drop-shadow-md">
              {scene.title}
            </h1>
            {scene.year && (
              <p className="text-gold font-medieval text-base mb-4">{scene.year}</p>
            )}
            <p className="text-parchment/80 text-sm sm:text-base leading-relaxed font-serif">
              {scene.narration}
            </p>
            {current === total - 1 && (
              <a href="/books/livonian-chronicle" className="mt-6 inline-block px-6 py-2.5 bg-gold text-ink font-medieval rounded hover:bg-gold-light transition-colors text-sm">
                Open the Chronicle
              </a>
            )}
          </div>
        </div>

        {/* controls */}
        <div className="relative z-10 px-4 pb-4 pt-2">
          <div className="flex justify-center gap-1.5 mb-3">
            {scenes.map((_, i) => (
              <button key={i} onClick={() => { goTo(i); setPlaying(true); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-gold" : i < current ? "w-1.5 bg-gold/50" : "w-1.5 bg-parchment/20"}`}
                aria-label={`Scene ${i + 1}`} />
            ))}
          </div>
          <div className="w-full h-0.5 bg-parchment/10 rounded overflow-hidden mb-3">
            <div className="h-full bg-gold/60 transition-[width] duration-100" style={{ width: `${((current + progress) / total) * 100}%` }} />
          </div>
          <div className="flex items-center justify-between text-parchment/60 text-sm">
            <button onClick={() => goTo(current - 1)} disabled={current === 0} className="px-3 py-1 hover:text-gold disabled:opacity-30 transition-colors font-medieval">&laquo; Prev</button>
            <div className="flex items-center gap-4">
              <span className="tabular-nums text-xs">{mm(elapsed)} / {mm(totalSec)}</span>
              <button onClick={togglePlay} className="w-10 h-10 rounded-full border border-parchment/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                {playing ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="2" y="1" width="3.5" height="12" rx="1" /><rect x="8.5" y="1" width="3.5" height="12" rx="1" /></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><polygon points="3,1 13,7 3,13" /></svg>
                )}
              </button>
            </div>
            <button onClick={() => goTo(current + 1)} disabled={current === total - 1} className="px-3 py-1 hover:text-gold disabled:opacity-30 transition-colors font-medieval">Next &raquo;</button>
          </div>
        </div>
      </div>
    </>
  );
}
