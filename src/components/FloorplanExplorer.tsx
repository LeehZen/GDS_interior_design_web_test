import React, { useState } from 'react';
import { Sun, Volume2, Compass, Layers, Info } from 'lucide-react';
import { FLOOR_LEVELS } from '../data/residenceData';
import { BlueprintZone } from '../types';

export const FloorplanExplorer: React.FC = () => {
  const [activeLevelId, setActiveLevelId] = useState<'00' | '01' | '02'>('01');
  const [selectedZone, setSelectedZone] = useState<BlueprintZone | null>(null);

  const currentLevel = FLOOR_LEVELS.find((lvl) => lvl.id === activeLevelId) || FLOOR_LEVELS[1];

  const handleSelectLevel = (levelId: '00' | '01' | '02') => {
    setActiveLevelId(levelId);
    setSelectedZone(null);
  };

  return (
    <section id="circulation" className="w-full px-4 sm:px-8 lg:px-16 py-16 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Narrative, Level Switcher & Environmental Metrics */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="font-label text-xs text-[#00ffcc] uppercase tracking-widest block font-semibold">
              03 / Circulation &amp; Flow
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-[#e8e0f0] leading-tight">
              {currentLevel.label}: {currentLevel.name.split('&')[0]}
            </h2>
            <div className="flex items-center gap-3 text-xs font-label text-[#a098b0] pt-1">
              <span className="text-[#00ffcc] font-medium">{currentLevel.elevation}</span>
              <span>•</span>
              <span>{currentLevel.area}</span>
            </div>
          </div>

          <p className="font-sans text-sm text-[#a098b0] leading-relaxed">
            {currentLevel.description}
          </p>

          {/* Level Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {FLOOR_LEVELS.map((lvl) => {
              const isActive = lvl.id === activeLevelId;
              return (
                <button
                  key={lvl.id}
                  onClick={() => handleSelectLevel(lvl.id as '00' | '01' | '02')}
                  className={`px-4 py-2 rounded-full font-label text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#ff2d78] text-[#1a0010] font-semibold shadow-[0_0_16px_rgba(255,45,120,0.4)]'
                      : 'bg-[#1e1e30] text-[#a098b0] hover:text-[#e8e0f0] hover:bg-[#28283e] border border-[#302840]'
                  }`}
                >
                  {lvl.label}
                </button>
              );
            })}
          </div>

          {/* Environmental Performance Metrics */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-[#141422] border border-[#302840]/60 rounded-xl space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-label text-[#a098b0] uppercase tracking-wider">
                <Sun className="w-3.5 h-3.5 text-[#ffe04a]" />
                <span>Light Transmittance</span>
              </div>
              <span className="font-headline text-2xl sm:text-3xl text-[#e8e0f0] block">
                {currentLevel.daylightFactor}
              </span>
              <span className="font-sans text-[11px] text-[#a098b0] block">
                Daylight Factor via Lightwell
              </span>
            </div>

            <div className="p-4 bg-[#141422] border border-[#302840]/60 rounded-xl space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-label text-[#a098b0] uppercase tracking-wider">
                <Volume2 className="w-3.5 h-3.5 text-[#00ffcc]" />
                <span>Acoustic Rating</span>
              </div>
              <span className="font-headline text-2xl sm:text-3xl text-[#00ffcc] block">
                {currentLevel.acousticRating.split(' ')[0]}
              </span>
              <span className="font-sans text-[11px] text-[#a098b0] block">
                Mews Street Isolation
              </span>
            </div>
          </div>

          {/* Interactive Zone Detail Inspector Box (Appears when user clicks or hovers a blueprint room) */}
          {selectedZone ? (
            <div className="p-4 rounded-xl bg-[#0a0a12] border border-[#00ffcc]/60 shadow-[0_0_16px_rgba(0,255,204,0.15)] space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-xs font-label">
                <span className="text-[#00ffcc] uppercase tracking-wider font-semibold">
                  Zone Inspector: {selectedZone.name}
                </span>
                <span className="text-[#a098b0]">{selectedZone.dimensions}</span>
              </div>
              <p className="font-sans text-xs text-[#e8e0f0] leading-relaxed">
                {selectedZone.description}
              </p>
              <div className="flex items-center gap-3 text-[11px] font-label text-[#a098b0] pt-1 border-t border-[#302840]/50">
                <span>Material: <span className="text-[#e8e0f0]">{selectedZone.materiality}</span></span>
                <span>•</span>
                <span>Daylight: <span className="text-[#ffe04a]">{selectedZone.daylightFactor}</span></span>
              </div>
            </div>
          ) : (
            <div className="p-3 rounded-lg bg-[#141422]/60 border border-[#302840]/40 flex items-center gap-2 text-xs text-[#a098b0] font-sans">
              <Info className="w-4 h-4 text-[#00ffcc] shrink-0" />
              <span>Hover or click any room on the blueprint schematic to inspect dimensions and finishes.</span>
            </div>
          )}
        </div>

        {/* Right Column: Architectural Vector Blueprint Diagram */}
        <div className="lg:col-span-7 bg-[#0a0a12] border border-[#302840] rounded-2xl p-6 shadow-2xl flex flex-col">
          {/* Blueprint Header */}
          <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#302840]/60 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ffcc] shadow-[0_0_8px_#00ffcc]" />
              <span className="font-label text-xs text-[#e8e0f0] uppercase tracking-widest font-semibold">
                Plan Elevation: {currentLevel.label} Circulation
              </span>
            </div>
            <span className="font-label text-[11px] text-[#5a5068] uppercase tracking-widest font-medium">
              Scale 1:100 @ A3 • Vector CAD Rev. D
            </span>
          </div>

          {/* SVG Blueprint Canvas */}
          <div className="relative w-full aspect-[16/10] bg-[#07070d] rounded-xl flex items-center justify-center p-2 sm:p-4 overflow-hidden mt-4 border border-[#302840]/40">
            <svg
              className="w-full h-full text-[#e8e0f0] select-none"
              fill="none"
              viewBox="0 0 800 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#5a5068"
                    strokeOpacity="0.12"
                    strokeWidth="1"
                  />
                </pattern>
                <radialGradient id="lightwellGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00ffcc" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#00ffcc" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Grid Background */}
              <rect width="800" height="500" fill="url(#archGrid)" />

              {/* Outer Envelope (1882 Victorian Masonry Walls) */}
              <rect
                x="60"
                y="60"
                width="680"
                height="380"
                rx="4"
                stroke="#e8e0f0"
                strokeWidth="3.5"
                strokeOpacity="0.85"
              />
              <rect
                x="68"
                y="68"
                width="664"
                height="364"
                stroke="#a098b0"
                strokeWidth="1"
                strokeOpacity="0.3"
              />

              {/* LEVEL 01 (Ground) Render */}
              {activeLevelId === '01' && (
                <g>
                  {/* Entrance Vestibule */}
                  <path
                    d="M 60 210 L 150 210 L 150 290 L 60 290"
                    stroke="#00ffcc"
                    strokeWidth="2"
                    strokeOpacity="0.7"
                    className="cursor-pointer hover:stroke-[#ff2d78]"
                    onClick={() => setSelectedZone(currentLevel.zones[0])}
                  />
                  <text
                    x="80"
                    y="254"
                    fill="#00ffcc"
                    fontSize="9"
                    letterSpacing="1.5"
                    className="font-label font-semibold"
                  >
                    ENTRY
                  </text>

                  {/* Main Living Salon Zone */}
                  <rect
                    x="180"
                    y="90"
                    width="280"
                    height="320"
                    fill={selectedZone?.id === 'zone-living' ? 'rgba(255,45,120,0.1)' : 'rgba(255,255,255,0.02)'}
                    stroke="#e8e0f0"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    strokeOpacity="0.5"
                    className="cursor-pointer transition-colors hover:fill-[rgba(0,255,204,0.08)]"
                    onClick={() => setSelectedZone(currentLevel.zones[1])}
                  />
                  <text
                    x="255"
                    y="245"
                    fill="#e8e0f0"
                    fontSize="13"
                    className="font-headline tracking-wide"
                  >
                    LIVING SALON
                  </text>
                  <text
                    x="248"
                    y="266"
                    fill="#a098b0"
                    fontSize="8.5"
                    letterSpacing="1.5"
                    className="font-label"
                  >
                    TRAVERTINE FLOORING
                  </text>

                  {/* Sculptural Hearth & Chimney */}
                  <rect
                    x="300"
                    y="85"
                    width="80"
                    height="20"
                    rx="2"
                    fill="#ff2d78"
                    fillOpacity="0.85"
                    className="cursor-pointer shadow-[0_0_8px_#ff2d78]"
                    onClick={() => setSelectedZone(currentLevel.zones[1])}
                  />
                  <text
                    x="318"
                    y="98"
                    fill="#ffffff"
                    fontSize="7.5"
                    className="font-label font-bold"
                  >
                    HEARTH
                  </text>

                  {/* Bespoke Kitchen Island & Area */}
                  <rect
                    x="490"
                    y="90"
                    width="230"
                    height="160"
                    fill={selectedZone?.id === 'zone-kitchen' ? 'rgba(0,255,204,0.1)' : 'transparent'}
                    stroke="#e8e0f0"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    strokeOpacity="0.5"
                    className="cursor-pointer hover:fill-[rgba(0,255,204,0.06)]"
                    onClick={() => setSelectedZone(currentLevel.zones[2])}
                  />
                  <rect
                    x="535"
                    y="135"
                    width="140"
                    height="50"
                    rx="2"
                    fill="#1e1e30"
                    stroke="#00ffcc"
                    strokeWidth="1.5"
                    className="cursor-pointer"
                    onClick={() => setSelectedZone(currentLevel.zones[2])}
                  />
                  <text
                    x="555"
                    y="164"
                    fill="#00ffcc"
                    fontSize="9.5"
                    className="font-label font-bold tracking-wider"
                  >
                    KITCHEN MONOLITH
                  </text>

                  {/* Central Lightwell Core */}
                  <rect
                    x="420"
                    y="270"
                    width="140"
                    height="140"
                    rx="4"
                    fill="url(#lightwellGlow)"
                    stroke="#00ffcc"
                    strokeWidth="2"
                    className="cursor-pointer"
                    onClick={() => setSelectedZone(currentLevel.zones[3])}
                  />
                  <line x1="420" y1="270" x2="560" y2="410" stroke="#00ffcc" strokeOpacity="0.4" strokeWidth="1" />
                  <line x1="560" y1="270" x2="420" y2="410" stroke="#00ffcc" strokeOpacity="0.4" strokeWidth="1" />
                  <circle cx="490" cy="340" r="28" fill="#0f0f1a" stroke="#00ffcc" strokeWidth="1.5" />
                  <text x="458" y="338" fill="#00ffcc" fontSize="8" fontWeight="bold" className="font-label">
                    LIGHTWELL
                  </text>
                  <text x="452" y="352" fill="#ffe04a" fontSize="7" className="font-label">
                    +14.2M VERTICAL
                  </text>

                  {/* Sunken Courtyard */}
                  <rect
                    x="580"
                    y="270"
                    width="140"
                    height="140"
                    fill={selectedZone?.id === 'zone-courtyard' ? 'rgba(0,255,204,0.1)' : 'rgba(255,255,255,0.03)'}
                    stroke="#e8e0f0"
                    strokeWidth="1.5"
                    className="cursor-pointer hover:fill-[rgba(0,255,204,0.08)]"
                    onClick={() => setSelectedZone(currentLevel.zones[4])}
                  />
                  <text x="612" y="345" fill="#a098b0" fontSize="9.5" className="font-label tracking-wider font-semibold">
                    COURTYARD
                  </text>

                  {/* Circulation Vectors */}
                  <path
                    d="M 120 250 C 220 250, 240 210, 310 210 S 450 240, 500 240"
                    stroke="#ff2d78"
                    strokeWidth="1.75"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                  />
                  <circle cx="500" cy="240" r="3.5" fill="#ff2d78" />
                  <path
                    d="M 380 230 C 430 230, 450 300, 490 310"
                    stroke="#ff2d78"
                    strokeWidth="1.75"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                  />
                </g>
              )}

              {/* LEVEL 00 (Basement) Render */}
              {activeLevelId === '00' && (
                <g>
                  {/* Spa & Steam Vault */}
                  <rect
                    x="160"
                    y="110"
                    width="230"
                    height="200"
                    fill={selectedZone?.id === 'zone-spa' ? 'rgba(0,255,204,0.1)' : 'rgba(255,255,255,0.03)'}
                    stroke="#00ffcc"
                    strokeWidth="1.5"
                    className="cursor-pointer"
                    onClick={() => setSelectedZone(currentLevel.zones[0])}
                  />
                  <circle cx="275" cy="210" r="45" stroke="#00ffcc" strokeDasharray="3 3" strokeWidth="1" />
                  <text x="220" y="210" fill="#00ffcc" fontSize="11" className="font-headline">
                    STEAM &amp; HYDRO SPA
                  </text>
                  <text x="235" y="228" fill="#a098b0" fontSize="8" className="font-label">
                    HEATED TRAVERTINE
                  </text>

                  {/* Sunken Courtyard lower basin */}
                  <rect
                    x="420"
                    y="250"
                    width="150"
                    height="160"
                    fill="url(#lightwellGlow)"
                    stroke="#ffe04a"
                    strokeWidth="1.5"
                    className="cursor-pointer"
                    onClick={() => setSelectedZone(currentLevel.zones[1])}
                  />
                  <text x="440" y="330" fill="#ffe04a" fontSize="10" className="font-label font-bold">
                    MOSS &amp; PINE BASIN
                  </text>
                  <text x="450" y="346" fill="#a098b0" fontSize="7.5" className="font-label">
                    SUBGRADE VOID
                  </text>

                  {/* Wine Archive */}
                  <rect
                    x="590"
                    y="110"
                    width="130"
                    height="140"
                    fill={selectedZone?.id === 'zone-wine' ? 'rgba(255,45,120,0.1)' : 'rgba(255,255,255,0.03)'}
                    stroke="#e8e0f0"
                    strokeWidth="1.5"
                    className="cursor-pointer"
                    onClick={() => setSelectedZone(currentLevel.zones[2])}
                  />
                  <text x="612" y="180" fill="#e8e0f0" fontSize="9.5" className="font-label font-semibold">
                    WINE ARCHIVE
                  </text>
                  <text x="618" y="198" fill="#a098b0" fontSize="7.5" className="font-label">
                    1,200 BOTTLES
                  </text>
                </g>
              )}

              {/* LEVEL 02 (Suites) Render */}
              {activeLevelId === '02' && (
                <g>
                  {/* Master Suite Retreat */}
                  <rect
                    x="170"
                    y="90"
                    width="250"
                    height="310"
                    fill={selectedZone?.id === 'zone-suite' ? 'rgba(255,45,120,0.1)' : 'rgba(255,255,255,0.03)'}
                    stroke="#e8e0f0"
                    strokeWidth="1.5"
                    className="cursor-pointer"
                    onClick={() => setSelectedZone(currentLevel.zones[0])}
                  />
                  <text x="210" y="240" fill="#e8e0f0" fontSize="13" className="font-headline">
                    MASTER BEDROOM
                  </text>
                  <text x="215" y="260" fill="#a098b0" fontSize="8" className="font-label">
                    SMOKED OAK FLOORING
                  </text>

                  {/* Carved Bath Sanctuary */}
                  <rect
                    x="440"
                    y="90"
                    width="190"
                    height="170"
                    fill={selectedZone?.id === 'zone-bath' ? 'rgba(0,255,204,0.1)' : 'rgba(255,255,255,0.03)'}
                    stroke="#00ffcc"
                    strokeWidth="1.5"
                    className="cursor-pointer"
                    onClick={() => setSelectedZone(currentLevel.zones[1])}
                  />
                  <ellipse cx="535" cy="175" rx="40" ry="24" fill="#141422" stroke="#00ffcc" strokeWidth="1.5" />
                  <text x="495" y="178" fill="#00ffcc" fontSize="8.5" className="font-label font-bold">
                    1.8T BOULDER TUB
                  </text>

                  {/* Study Mezzanine overlooking lightwell */}
                  <rect
                    x="440"
                    y="280"
                    width="270"
                    height="130"
                    fill={selectedZone?.id === 'zone-study' ? 'rgba(255,224,74,0.1)' : 'rgba(255,255,255,0.02)'}
                    stroke="#ffe04a"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="cursor-pointer"
                    onClick={() => setSelectedZone(currentLevel.zones[2])}
                  />
                  <text x="500" y="345" fill="#ffe04a" fontSize="10.5" className="font-label font-semibold">
                    STUDY MEZZANINE &amp; LIBRARY
                  </text>
                </g>
              )}

              {/* Dimension indicators */}
              <line x1="60" y1="460" x2="740" y2="460" stroke="#5a5068" strokeOpacity="0.4" strokeWidth="1" />
              <line x1="60" y1="455" x2="60" y2="465" stroke="#5a5068" strokeOpacity="0.6" strokeWidth="1" />
              <line x1="740" y1="455" x2="740" y2="465" stroke="#5a5068" strokeOpacity="0.6" strokeWidth="1" />
              <text x="375" y="475" fill="#a098b0" fontSize="9" className="font-label">
                24.5 METERS
              </text>
            </svg>
          </div>

          {/* Blueprint Footer Legend */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 pt-2 text-xs font-label text-[#a098b0]">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00ffcc]" /> Atrium Void
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e8e0f0]/30" /> Structural Masonry
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff2d78]" /> Circulation Axis
              </span>
            </div>
            <span className="text-[#00ffcc] font-medium">AutoCAD Vector Spec Rev. D</span>
          </div>
        </div>
      </div>
    </section>
  );
};
