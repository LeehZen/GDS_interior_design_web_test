import React from 'react';
import { Quote, Maximize2 } from 'lucide-react';
import { RESIDENCE_META } from '../data/residenceData';

interface SpatialNarrativeProps {
  onOpenLightbox: (imageUrl: string, title: string, caption: string) => void;
}

export const SpatialNarrative: React.FC<SpatialNarrativeProps> = ({ onOpenLightbox }) => {
  return (
    <section id="narrative" className="w-full px-4 sm:px-8 lg:px-16 py-16 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Sticky Title & Client Commission */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
          <div className="space-y-2">
            <span className="font-label text-xs text-[#00ffcc] uppercase tracking-widest block font-semibold">
              01 / Spatial Narrative
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-[#e8e0f0] leading-tight">
              Excavating quietude behind Victorian brickwork.
            </h2>
          </div>

          <div className="p-6 rounded-xl bg-[#141422] border border-[#302840]/60 relative shadow-sm">
            <Quote className="w-6 h-6 text-[#ff2d78]/40 mb-2" />
            <span className="font-label text-[10px] text-[#a098b0] uppercase tracking-widest block mb-2 font-semibold">
              Client Commission
            </span>
            <p className="font-sans text-sm text-[#e8e0f0]/90 italic leading-relaxed">
              {RESIDENCE_META.clientQuote}
            </p>
          </div>
        </div>

        {/* Right Column: Narrative Texts & Architectural Figures */}
        <div className="lg:col-span-8 space-y-10 text-[#a098b0]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="space-y-4">
              <h3 className="font-headline text-xl text-[#e8e0f0]">The Historic Predicament</h3>
              <p className="text-sm leading-relaxed text-[#a098b0]">
                Dating to 1882, the property had served first as a stable and carriage room for aristocratic townhouses on adjacent Queen's Gate, later compartmentalized in the mid-1970s into a maze of low-ceilinged living quarters devoid of cross-ventilation.
              </p>
              <p className="text-sm leading-relaxed text-[#a098b0]">
                Rigid conservation mandates prohibited alterations to the protected façade masonry. The architectural intervention therefore required an excavation from within: carving out the core of the structure to establish a four-level central atrium.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-headline text-xl text-[#e8e0f0]">Light as Structural Mass</h3>
              <p className="text-sm leading-relaxed text-[#a098b0]">
                Rather than introducing artificial partition walls, spatial zones are demarcated through changes in level, rhythmic walnut cabinetry, and varying ceiling planes clad in micro-textured lime plaster.
              </p>
              <p className="text-sm leading-relaxed text-[#a098b0]">
                A 14-meter subterranean lightwell cascades morning light down into a subterranean spa and sunken sculpture courtyard, turning what was once a pitch-dark basement into the emotional epicenter of the home.
              </p>
            </div>
          </div>

          {/* Inline Visual Pair with Metadata Captions */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
            {/* Fig 2.1 */}
            <div className="md:col-span-7 overflow-hidden rounded-xl bg-[#141422] border border-[#302840]/60 group relative shadow-md">
              <div
                className="h-80 sm:h-96 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${RESIDENCE_META.narrativeFigures[0].imageUrl}')` }}
                role="img"
                aria-label={RESIDENCE_META.narrativeFigures[0].alt}
              />
              <button
                onClick={() =>
                  onOpenLightbox(
                    RESIDENCE_META.narrativeFigures[0].imageUrl,
                    RESIDENCE_META.narrativeFigures[0].label,
                    RESIDENCE_META.narrativeFigures[0].caption
                  )
                }
                className="absolute top-3 right-3 p-1.5 rounded-full bg-[#0a0a12]/70 text-[#e8e0f0] opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#00ffcc]"
                title="Expand Figure"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              <div className="p-4 bg-[#111118] flex justify-between items-center text-xs font-label border-t border-[#302840]/50">
                <span className="uppercase tracking-wider text-[#a098b0]">
                  {RESIDENCE_META.narrativeFigures[0].label}
                </span>
                <span className="text-[#00ffcc] font-medium">
                  {RESIDENCE_META.narrativeFigures[0].caption}
                </span>
              </div>
            </div>

            {/* Fig 2.2 */}
            <div className="md:col-span-5 overflow-hidden rounded-xl bg-[#141422] border border-[#302840]/60 group relative shadow-md">
              <div
                className="h-80 sm:h-96 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${RESIDENCE_META.narrativeFigures[1].imageUrl}')` }}
                role="img"
                aria-label={RESIDENCE_META.narrativeFigures[1].alt}
              />
              <button
                onClick={() =>
                  onOpenLightbox(
                    RESIDENCE_META.narrativeFigures[1].imageUrl,
                    RESIDENCE_META.narrativeFigures[1].label,
                    RESIDENCE_META.narrativeFigures[1].caption
                  )
                }
                className="absolute top-3 right-3 p-1.5 rounded-full bg-[#0a0a12]/70 text-[#e8e0f0] opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#00ffcc]"
                title="Expand Figure"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              <div className="p-4 bg-[#111118] flex justify-between items-center text-xs font-label border-t border-[#302840]/50">
                <span className="uppercase tracking-wider text-[#a098b0]">
                  {RESIDENCE_META.narrativeFigures[1].label}
                </span>
                <span className="text-[#00ffcc] font-medium">
                  {RESIDENCE_META.narrativeFigures[1].caption}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
