import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, Sparkles } from 'lucide-react';
import { MaterialSpec } from '../types';
import { MATERIALS_DATA } from '../data/residenceData';

interface MaterialMatrixProps {
  onSelectMaterial: (material: MaterialSpec) => void;
  onOpenPdfModal: () => void;
}

export const MaterialMatrix: React.FC<MaterialMatrixProps> = ({
  onSelectMaterial,
  onOpenPdfModal,
}) => {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <section id="materiality" className="w-full px-4 sm:px-8 lg:px-16 py-16 scroll-mt-20">
      <div className="w-full bg-[#111118] border border-[#302840]/70 rounded-2xl p-6 sm:p-10 shadow-xl">
        {/* Section Header */}
        <div className="max-w-4xl mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-label text-xs text-[#00ffcc] uppercase tracking-widest font-semibold">
              02 / Materiality
            </span>
            <span className="text-[#5a5068] text-xs">/</span>
            <span className="font-label text-[11px] text-[#a098b0] uppercase tracking-wider">
              Authentic Mineral & Timber Provenance
            </span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-[#e8e0f0]">
            Tactile Material Matrix
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#a098b0] mt-3 leading-relaxed">
            Every material was sourced raw within Europe and left unfinished or sealed with natural beeswax to encourage organic oxidation, thermal conductivity, and tactile warmth. Click any specimen to inspect technical tolerances and quarry provenance.
          </p>
        </div>

        {/* 5-Column Swatch Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {MATERIALS_DATA.map((mat) => {
            const isHovered = activeHoverId === mat.id;
            return (
              <div
                key={mat.id}
                onClick={() => onSelectMaterial(mat)}
                onMouseEnter={() => setActiveHoverId(mat.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                className={`bg-[#0a0a12] rounded-xl p-5 border transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden ${
                  isHovered
                    ? 'border-[#ff2d78] shadow-[0_0_20px_rgba(255,45,120,0.25)] -translate-y-1'
                    : 'border-[#302840]/60 hover:border-[#00ffcc]/60'
                }`}
              >
                {/* Visual Swatch */}
                <div>
                  <div className="w-full h-44 rounded-lg bg-cover bg-center mb-4 overflow-hidden relative shadow-inner">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                      style={{ backgroundImage: `url('${mat.imageUrl}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-[#0a0a12]/80 backdrop-blur-sm border border-[#302840] font-label text-[9px] text-[#00ffcc] uppercase tracking-wider">
                      Specimen
                    </span>
                  </div>

                  {/* Metadata */}
                  <div className="space-y-1.5">
                    <span className="font-label text-[10px] text-[#00ffcc] uppercase tracking-widest block font-medium">
                      {mat.source}
                    </span>
                    <h4 className="font-headline text-lg text-[#e8e0f0] group-hover:text-[#ff2d78] transition-colors leading-snug">
                      {mat.name}
                    </h4>
                    <p className="font-sans text-xs text-[#a098b0] line-clamp-2 leading-relaxed">
                      {mat.application}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-3 border-t border-[#302840]/40 flex justify-between items-center text-xs font-label">
                  <span className="text-[#a098b0]">{mat.code}</span>
                  <span className="text-[#00ffcc] font-semibold group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Material Inspector Drawer / Bar */}
        <div className="mt-8 p-5 rounded-xl bg-[#141422] border border-[#302840] flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-sm">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2 rounded-lg bg-[#004d3d]/50 text-[#00ffcc] shrink-0 border border-[#00ffcc]/30">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="font-label text-xs uppercase tracking-wider text-[#e8e0f0] font-semibold flex items-center gap-2">
                <span>Material Specification & Provenance Guarantee</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#302840] text-[#00ffcc]">RIBA Part 3 Vetted</span>
              </p>
              <p className="font-sans text-xs text-[#a098b0] mt-0.5">
                All stone blocks were personally vetted at the Carrara and Tivoli quarries for mineral consistency and soft vein orientation.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenPdfModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2d78] text-[#1a0010] font-label text-xs tracking-widest uppercase hover:bg-[#00ffcc] hover:text-[#001a1a] transition-all duration-300 font-semibold shadow-[0_0_16px_rgba(255,45,120,0.3)] whitespace-nowrap cursor-pointer shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download Finish Schedule PDF</span>
          </button>
        </div>
      </div>
    </section>
  );
};
