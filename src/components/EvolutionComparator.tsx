import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sliders, Code2, ArrowLeftRight } from 'lucide-react';

export const EvolutionComparator: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const completedImage =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC3An4sufG50TKI-RexcZVWUFOwvEeCyTtGloQH7MSuIWYnejxKWce4b0eMJnjrEv1mvZSxj42Qt2OXr-Nz9sKTOnAACbhM9YMuhAakriqqX-Evl0Ho5Y0wIBEUfYCEGWBKmK3OoBLpVsXryj71QzVLg4UCF_Edg8L_2FsXC3r230AyatT-ABxChFxpl3gMy6pKPOEV5kS622FcR4--WsrJnGb9qXGghunRpI1it34_XCwVW-qyBxeq';
  const demolitionImage =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBUXCi0SV1DiMRDsz5eDWOcvsi44zOaz61hemoHiLAuo4k0RVx0btRhzJNoWTAnoGmqESiLkTtZ57B0rU1PATi9KN41g5m5IVz9JfEftIkI_mf3Vpj5ZlD_UPAaasdZFpJlbk1wYbfZC4C46hYgIBHhTyjnhiIkp2gbdHugLMfuj_8cUPx8JjuHtcOaIQH-vCXVZTm_GJaGyfkOwG6ynzZE3B65dkChLQ2Htz6Uctbpie3vht3Zs-qk';

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    if (pos < 2) pos = 2;
    if (pos > 98) pos = 98;
    setSliderPos(pos);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPos((prev) => Math.max(prev - 5, 2));
    } else if (e.key === 'ArrowRight') {
      setSliderPos((prev) => Math.min(prev + 5, 98));
    }
  };

  return (
    <section id="evolution" className="w-full px-4 sm:px-8 lg:px-16 py-16 scroll-mt-20">
      <div className="w-full bg-[#111118] border border-[#302840]/70 rounded-2xl p-6 sm:p-10 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div className="max-w-2xl">
            <span className="font-label text-xs text-[#00ffcc] uppercase tracking-widest block mb-1 font-semibold">
              Structural Evolution
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl text-[#e8e0f0]">
              Demolition vs. Completion Split
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#a098b0] mt-1">
              Drag the interactive slider or use the presets to reveal the raw 1882 carriage framework transformed into the current salon.
            </p>
          </div>

          {/* Quick Presets */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-label text-[#a098b0] uppercase tracking-wider hidden md:inline">
              Split:
            </span>
            {[0, 25, 50, 75, 100].map((preset) => (
              <button
                key={preset}
                onClick={() => setSliderPos(preset === 0 ? 2 : preset === 100 ? 98 : preset)}
                className={`px-2.5 py-1 rounded text-[11px] font-label transition-colors cursor-pointer ${
                  Math.abs(sliderPos - preset) < 8
                    ? 'bg-[#ff2d78] text-[#1a0010] font-bold'
                    : 'bg-[#1e1e30] text-[#a098b0] hover:text-[#e8e0f0] border border-[#302840]'
                }`}
              >
                {preset}%
              </button>
            ))}
          </div>
        </div>

        {/* Comparator Box */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="slider"
          aria-valuenow={Math.round(sliderPos)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Before and after demolition comparison slider"
          className="relative w-full h-[360px] sm:h-[480px] lg:h-[560px] rounded-xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-[#302840] focus:outline-none focus:ring-2 focus:ring-[#ff2d78]"
        >
          {/* Background: Oct 2024 Completed */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${completedImage}')` }}
          >
            <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#ff2d78]/85 backdrop-blur-md text-[#1a0010] font-label text-[10px] uppercase tracking-widest font-bold shadow-[0_0_12px_rgba(255,45,120,0.5)]">
              Oct 2024 • Completed
            </span>
          </div>

          {/* Foreground: Jan 2022 Strip Out (Clipped via width percentage) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden bg-cover bg-center border-r border-[#ff2d78]"
            style={{
              width: `${sliderPos}%`,
              backgroundImage: `url('${demolitionImage}')`,
              backgroundPosition: 'left center',
              backgroundSize: 'cover',
            }}
          >
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0a0a12]/85 backdrop-blur-md text-[#00ffcc] font-label text-[10px] uppercase tracking-widest font-bold border border-[#00ffcc]/30 shadow-sm">
              Jan 2022 • Strip Out
            </span>
          </div>

          {/* Divider Line & Draggable Handle */}
          <div
            className="absolute inset-y-0 -ml-[1px] w-0.5 bg-[#ff2d78] pointer-events-none shadow-[0_0_8px_#ff2d78]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0a0a12] border-2 border-[#ff2d78] shadow-[0_0_16px_rgba(255,45,120,0.6)] flex items-center justify-center text-[#ff2d78]">
              <ArrowLeftRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Caption below comparator */}
        <div className="mt-4 flex flex-wrap items-center justify-between text-xs font-label text-[#a098b0]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ffe04a]" />
            <span>Exposed 1882 London stock brickwork &amp; structural steel insertion</span>
          </span>
          <span className="text-[#00ffcc]">Click or drag anywhere on frame</span>
        </div>
      </div>
    </section>
  );
};
