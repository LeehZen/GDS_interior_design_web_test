import React, { useState } from 'react';
import { Maximize2, History, CheckCircle } from 'lucide-react';
import { ROOM_PLATES } from '../data/residenceData';
import { RoomPlate } from '../types';

interface RoomMonographProps {
  onOpenLightbox: (imageUrl: string, title: string, caption: string) => void;
}

export const RoomMonograph: React.FC<RoomMonographProps> = ({ onOpenLightbox }) => {
  const [displayMode, setDisplayMode] = useState<'finished' | 'demolition'>('finished');

  return (
    <section id="execution" className="w-full px-4 sm:px-8 lg:px-16 py-16 scroll-mt-20">
      {/* Section Header & Display Mode Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="font-label text-xs text-[#00ffcc] uppercase tracking-widest block mb-2 font-semibold">
            04 / Spatial Execution
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-[#e8e0f0]">
            Room-by-Room Monograph
          </h2>
          <p className="font-sans text-sm text-[#a098b0] mt-2">
            Detailed plate studies documenting material intersections and architectural millwork.
          </p>
        </div>

        {/* Display Mode Toggle */}
        <div className="flex items-center gap-3">
          <span className="font-label text-xs text-[#a098b0] uppercase tracking-widest hidden sm:inline">
            Archive View:
          </span>
          <div className="p-1 bg-[#141422] border border-[#302840] rounded-full flex items-center gap-1">
            <button
              onClick={() => setDisplayMode('finished')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full font-label text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                displayMode === 'finished'
                  ? 'bg-[#ff2d78] text-[#1a0010] font-semibold shadow-[0_0_12px_rgba(255,45,120,0.4)]'
                  : 'text-[#a098b0] hover:text-[#e8e0f0]'
              }`}
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Finished State</span>
            </button>
            <button
              onClick={() => setDisplayMode('demolition')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full font-label text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                displayMode === 'demolition'
                  ? 'bg-[#ffe04a] text-[#1a1000] font-semibold shadow-[0_0_12px_rgba(255,224,74,0.4)]'
                  : 'text-[#a098b0] hover:text-[#e8e0f0]'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              <span>Before Demolition</span>
            </button>
          </div>
        </div>
      </div>

      {/* Editorial Mosaic Grid */}
      <div className="space-y-16">
        {/* Feature 1: Sculptural Hearth & Living Salon (Plate 01) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 overflow-hidden rounded-xl bg-[#141422] border border-[#302840]/60 group relative shadow-xl">
            <div
              className="h-[360px] sm:h-[460px] lg:h-[520px] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('${
                  displayMode === 'finished'
                    ? ROOM_PLATES[0].finishedImageUrl
                    : ROOM_PLATES[0].demolitionImageUrl
                }')`,
              }}
              role="img"
              aria-label={ROOM_PLATES[0].alt}
            />
            <button
              onClick={() =>
                onOpenLightbox(
                  displayMode === 'finished'
                    ? ROOM_PLATES[0].finishedImageUrl
                    : ROOM_PLATES[0].demolitionImageUrl,
                  ROOM_PLATES[0].plateTitle,
                  ROOM_PLATES[0].description
                )
              }
              className="absolute top-4 right-4 p-2 rounded-full bg-[#0a0a12]/70 text-[#e8e0f0] opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#00ffcc] border border-[#302840]"
              title="Expand Plate"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <div className="absolute top-4 left-4">
              <span
                className={`px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest backdrop-blur-md ${
                  displayMode === 'finished'
                    ? 'bg-[#004d3d]/80 text-[#00ffcc] border border-[#00ffcc]/40'
                    : 'bg-[#665200]/80 text-[#ffe04a] border border-[#ffe04a]/40'
                }`}
              >
                {displayMode === 'finished' ? 'Completed Oct 2024' : 'Strip-Out Jan 2022'}
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-5 lg:pl-2">
            <span className="font-label text-xs text-[#00ffcc] uppercase tracking-widest block font-semibold">
              {ROOM_PLATES[0].plateNumber}
            </span>
            <h3 className="font-headline text-2xl text-[#e8e0f0]">
              {ROOM_PLATES[0].plateTitle}
            </h3>
            <p className="font-sans text-sm text-[#a098b0] leading-relaxed">
              {displayMode === 'finished'
                ? ROOM_PLATES[0].description
                : 'Prior to intervention: Low acoustic drop-ceilings and decayed softwood joists from the 1970s conversion were meticulously removed down to the original 1882 carriage brickwork.'}
            </p>
            <div className="pt-2 space-y-2 border-t border-[#302840]/60 font-label text-xs">
              <div className="flex justify-between text-[#a098b0] pb-1">
                <span>Fittings</span>
                <span className="text-[#e8e0f0] font-medium">{ROOM_PLATES[0].fittings}</span>
              </div>
              <div className="flex justify-between text-[#a098b0] pb-1">
                <span>Surfaces</span>
                <span className="text-[#e8e0f0] font-medium">{ROOM_PLATES[0].surfaces}</span>
              </div>
              {ROOM_PLATES[0].luminaires && (
                <div className="flex justify-between text-[#a098b0]">
                  <span>Luminaires</span>
                  <span className="text-[#00ffcc] font-medium">{ROOM_PLATES[0].luminaires}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Feature 2: Chef's Minimalist Kitchen & Dining (Plate 02) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-4 lg:order-1 order-2 space-y-5 lg:pr-2">
            <span className="font-label text-xs text-[#00ffcc] uppercase tracking-widest block font-semibold">
              {ROOM_PLATES[1].plateNumber}
            </span>
            <h3 className="font-headline text-2xl text-[#e8e0f0]">
              {ROOM_PLATES[1].plateTitle}
            </h3>
            <p className="font-sans text-sm text-[#a098b0] leading-relaxed">
              {displayMode === 'finished'
                ? ROOM_PLATES[1].description
                : 'Strip-out phase: Historic brick masonry underpinning along party wall to establish floor load tolerance for the 3.8-tonne Calacatta marble island block.'}
            </p>
            <div className="pt-2 space-y-2 border-t border-[#302840]/60 font-label text-xs">
              <div className="flex justify-between text-[#a098b0] pb-1">
                <span>Stone Surface</span>
                <span className="text-[#e8e0f0] font-medium">{ROOM_PLATES[1].surfaces}</span>
              </div>
              <div className="flex justify-between text-[#a098b0] pb-1">
                <span>Fittings</span>
                <span className="text-[#e8e0f0] font-medium">{ROOM_PLATES[1].fittings}</span>
              </div>
              {ROOM_PLATES[1].luminaires && (
                <div className="flex justify-between text-[#a098b0]">
                  <span>Luminaires</span>
                  <span className="text-[#00ffcc] font-medium">{ROOM_PLATES[1].luminaires}</span>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-8 lg:order-2 order-1 overflow-hidden rounded-xl bg-[#141422] border border-[#302840]/60 group relative shadow-xl">
            <div
              className="h-[360px] sm:h-[460px] lg:h-[520px] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('${
                  displayMode === 'finished'
                    ? ROOM_PLATES[1].finishedImageUrl
                    : ROOM_PLATES[1].demolitionImageUrl
                }')`,
              }}
              role="img"
              aria-label={ROOM_PLATES[1].alt}
            />
            <button
              onClick={() =>
                onOpenLightbox(
                  displayMode === 'finished'
                    ? ROOM_PLATES[1].finishedImageUrl
                    : ROOM_PLATES[1].demolitionImageUrl,
                  ROOM_PLATES[1].plateTitle,
                  ROOM_PLATES[1].description
                )
              }
              className="absolute top-4 right-4 p-2 rounded-full bg-[#0a0a12]/70 text-[#e8e0f0] opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#00ffcc] border border-[#302840]"
              title="Expand Plate"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <div className="absolute top-4 left-4">
              <span
                className={`px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest backdrop-blur-md ${
                  displayMode === 'finished'
                    ? 'bg-[#004d3d]/80 text-[#00ffcc] border border-[#00ffcc]/40'
                    : 'bg-[#665200]/80 text-[#ffe04a] border border-[#ffe04a]/40'
                }`}
              >
                {displayMode === 'finished' ? 'Completed Oct 2024' : 'Strip-Out Jan 2022'}
              </span>
            </div>
          </div>
        </div>

        {/* Plates 03 & 04 Two-Column Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Plate 03: Primary Suite Bath */}
          <div className="space-y-4">
            <div className="h-[340px] sm:h-[420px] w-full rounded-xl overflow-hidden bg-[#141422] border border-[#302840]/60 relative group shadow-md">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${
                    displayMode === 'finished'
                      ? ROOM_PLATES[2].finishedImageUrl
                      : ROOM_PLATES[2].demolitionImageUrl
                  }')`,
                }}
                role="img"
                aria-label={ROOM_PLATES[2].alt}
              />
              <button
                onClick={() =>
                  onOpenLightbox(
                    displayMode === 'finished'
                      ? ROOM_PLATES[2].finishedImageUrl
                      : ROOM_PLATES[2].demolitionImageUrl,
                    ROOM_PLATES[2].plateTitle,
                    ROOM_PLATES[2].description
                  )
                }
                className="absolute top-4 right-4 p-2 rounded-full bg-[#0a0a12]/70 text-[#e8e0f0] opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#00ffcc] border border-[#302840]"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
            <div>
              <span className="font-label text-xs text-[#00ffcc] uppercase tracking-widest block font-semibold">
                {ROOM_PLATES[2].plateNumber}
              </span>
              <h3 className="font-headline text-xl text-[#e8e0f0] mt-1">
                {ROOM_PLATES[2].plateTitle}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#a098b0] mt-2 leading-relaxed">
                {ROOM_PLATES[2].description}
              </p>
            </div>
          </div>

          {/* Plate 04: Subterranean Courtyard */}
          <div className="space-y-4">
            <div className="h-[340px] sm:h-[420px] w-full rounded-xl overflow-hidden bg-[#141422] border border-[#302840]/60 relative group shadow-md">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${
                    displayMode === 'finished'
                      ? ROOM_PLATES[3].finishedImageUrl
                      : ROOM_PLATES[3].demolitionImageUrl
                  }')`,
                }}
                role="img"
                aria-label={ROOM_PLATES[3].alt}
              />
              <button
                onClick={() =>
                  onOpenLightbox(
                    displayMode === 'finished'
                      ? ROOM_PLATES[3].finishedImageUrl
                      : ROOM_PLATES[3].demolitionImageUrl,
                    ROOM_PLATES[3].plateTitle,
                    ROOM_PLATES[3].description
                  )
                }
                className="absolute top-4 right-4 p-2 rounded-full bg-[#0a0a12]/70 text-[#e8e0f0] opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#00ffcc] border border-[#302840]"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
            <div>
              <span className="font-label text-xs text-[#00ffcc] uppercase tracking-widest block font-semibold">
                {ROOM_PLATES[3].plateNumber}
              </span>
              <h3 className="font-headline text-xl text-[#e8e0f0] mt-1">
                {ROOM_PLATES[3].plateTitle}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#a098b0] mt-2 leading-relaxed">
                {ROOM_PLATES[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
