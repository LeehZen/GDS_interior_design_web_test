import React, { useState } from 'react';
import { ArrowLeft, Share2, Check, Maximize2 } from 'lucide-react';
import { RESIDENCE_META } from '../data/residenceData';

interface HeroSectionProps {
  onOpenLightbox: (imageUrl: string, title: string, caption: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenLightbox }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 pt-24 pb-6">
      {/* Top Dossier Navigation & Index Marker */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 text-xs font-label">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 uppercase tracking-widest text-[#a098b0] hover:text-[#00ffcc] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Works Index</span>
          </button>
          <span className="text-[#5a5068]">/</span>
          <span className="uppercase tracking-widest text-[#00ffcc] font-semibold">
            {RESIDENCE_META.monographNumber}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-label">
          <span className="uppercase tracking-widest text-[#a098b0]">
            {RESIDENCE_META.archivedDate}
          </span>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1e1e30] border border-[#302840] text-[#e8e0f0] uppercase tracking-widest hover:border-[#ff2d78] hover:text-[#ff2d78] transition-all cursor-pointer shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#00ffcc]" />
                <span className="text-[#00ffcc]">Link Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Dossier</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Title & Monograph Introduction */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-8">
        <div className="lg:col-span-8 space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-[#004d3d]/50 border border-[#00ffcc]/30 text-[#00ffcc] font-label text-[11px] tracking-widest uppercase font-semibold">
            {RESIDENCE_META.tagline}
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#e8e0f0] tracking-tight leading-tight">
            {RESIDENCE_META.title}
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#a098b0] max-w-3xl leading-relaxed">
            {RESIDENCE_META.subtitle}
          </p>
        </div>

        <div className="lg:col-span-4 flex lg:justify-end pb-2">
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right font-label">
            <span className="text-[11px] text-[#a098b0] tracking-widest uppercase">Coordinates</span>
            <span className="text-sm text-[#e8e0f0] font-medium tracking-wide mt-0.5">
              {RESIDENCE_META.coordinates}
            </span>
            <span className="text-xs text-[#00ffcc] mt-1.5 tracking-wider font-semibold neon-glow-cyan">
              {RESIDENCE_META.award}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Full-Bleed Architectural Feature Frame */}
      <div className="relative w-full overflow-hidden rounded-xl bg-[#1e1e30] border border-[#302840]/60 group shadow-2xl">
        <div
          className="w-full h-[380px] sm:h-[480px] lg:h-[620px] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          style={{ backgroundImage: `url('${RESIDENCE_META.heroPlate.imageUrl}')` }}
          role="img"
          aria-label={RESIDENCE_META.heroPlate.alt}
        />
        
        {/* Top right quick expand */}
        <button
          onClick={() =>
            onOpenLightbox(
              RESIDENCE_META.heroPlate.imageUrl,
              RESIDENCE_META.heroPlate.title,
              RESIDENCE_META.heroPlate.description
            )
          }
          className="absolute top-4 right-4 p-2 rounded-full bg-[#0a0a12]/70 backdrop-blur-md text-[#e8e0f0] hover:text-[#00ffcc] hover:bg-[#0a0a12] transition-colors border border-[#302840]"
          title="Inspect High-Resolution Plate"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Bottom Scrim with Plate Caption */}
        <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 bg-gradient-to-t from-[#0a0a12]/95 via-[#0a0a12]/60 to-transparent flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="font-label text-xs tracking-widest uppercase text-[#00ffcc] block mb-1 font-semibold">
              {RESIDENCE_META.heroPlate.title}
            </span>
            <p className="font-headline text-lg sm:text-2xl text-[#e8e0f0] leading-snug">
              {RESIDENCE_META.heroPlate.description}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-[#141422]/80 backdrop-blur-md border border-[#302840] text-[#a098b0] font-label text-[11px] uppercase tracking-widest">
              {RESIDENCE_META.heroPlate.exposure}
            </span>
          </div>
        </div>
      </div>

      {/* Spec Sheet / Blueprint Meta Bar */}
      <div className="w-full bg-[#111118] border border-[#302840]/60 rounded-xl p-6 mt-6 shadow-md">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 font-label">
          {RESIDENCE_META.specs.map((spec, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-[10px] text-[#a098b0] uppercase tracking-widest block font-medium">
                {spec.label}
              </span>
              <p
                className={`text-sm font-medium leading-snug ${
                  spec.highlight ? 'text-[#00ffcc] font-semibold' : 'text-[#e8e0f0]'
                }`}
              >
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
