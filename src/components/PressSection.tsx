import React from 'react';
import { Award, ArrowRight } from 'lucide-react';
import { ACCOLADES } from '../data/residenceData';

interface PressSectionProps {
  onOpenMaisonCap: () => void;
}

export const PressSection: React.FC<PressSectionProps> = ({ onOpenMaisonCap }) => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-16">
      {/* 3-Column Editorial Press Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {ACCOLADES.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-[#111118] border border-[#302840]/60 space-y-3 relative group hover:border-[#00ffcc]/40 transition-colors shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="font-label text-xs text-[#00ffcc] uppercase tracking-widest font-semibold">
                {item.publication}
              </span>
              <Award className="w-4 h-4 text-[#ff2d78]/60 group-hover:text-[#ff2d78] transition-colors" />
            </div>
            <p className="font-headline text-lg sm:text-xl text-[#e8e0f0] leading-snug">
              {item.quote}
            </p>
            <div className="pt-2 text-xs font-label text-[#a098b0] border-t border-[#302840]/40 flex justify-between">
              <span>{item.issue}</span>
              {item.awardCategory && (
                <span className="text-[#ffe04a]">{item.awardCategory}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Next Project Navigation Footer Anchor: Maison Cap d'Antibes */}
      <div className="w-full rounded-2xl bg-[#1e1e30] border border-[#302840] p-8 sm:p-12 relative overflow-hidden group shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="font-label text-xs text-[#00ffcc] uppercase tracking-widest block font-semibold">
              Sequential Monograph
            </span>
            <span className="font-label text-sm text-[#a098b0] block uppercase tracking-wider">
              Next Commission
            </span>
            <h2
              onClick={onOpenMaisonCap}
              className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#e8e0f0] group-hover:text-[#00ffcc] transition-colors duration-300 cursor-pointer"
            >
              Maison Cap d'Antibes →
            </h2>
            <p className="font-sans text-sm text-[#a098b0] max-w-lg leading-relaxed pt-1">
              A coastal modernist villa embedded into the limestone cliffs of the French Riviera. Completed Summer 2024.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenMaisonCap}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#ff2d78] text-[#1a0010] font-label text-xs tracking-wider uppercase hover:bg-[#00ffcc] hover:text-[#001a1a] transition-all duration-300 shadow-[0_0_16px_rgba(255,45,120,0.35)] font-bold cursor-pointer"
            >
              <span>Explore Maison Cap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Ambient atmospheric glow backdrops */}
        <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#00ffcc]/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -top-24 w-80 h-80 rounded-full bg-[#ff2d78]/10 blur-3xl pointer-events-none" />
      </div>
    </section>
  );
};
