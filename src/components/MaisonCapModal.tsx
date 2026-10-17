import React from 'react';
import { X, ArrowRight, MapPin, Compass } from 'lucide-react';

interface MaisonCapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const MaisonCapModal: React.FC<MaisonCapModalProps> = ({
  isOpen,
  onClose,
  onOpenInquiry,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0a0a12]/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#0f0f1a] border border-[#00ffcc]/60 rounded-2xl shadow-[0_0_40px_rgba(0,255,204,0.25)] overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="maison-title"
      >
        <div className="p-6 bg-[#141422] border-b border-[#302840] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-label text-xs text-[#00ffcc] uppercase tracking-widest font-semibold">
              Sequential Monograph • No. 049
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#a098b0] hover:text-[#e8e0f0] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden bg-[#1e1e30] border border-[#302840]">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0kNlAHF_kFnEF5t4P9lXtN4-xOtMuTXTE6BxfvP2vwmFTwwe87hfp45z5pwugWlb5g5OzYfyd1ka_-xXlrQAbVaHGroMBwrXUIW8zi-_TTrD8pxR_A_wVEQZ4KVihyVuSxWOFPWVQnlOUzg5ngD5A1rjokhPIL59Jz9MEt4a_FO6XR-9cadA7WGJkab8XrsfCy5DzxmKiC-kEtK44LmumBds1HRE6HxS9dDOuXkkaWxtgS7ihUNtL')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div>
                <span className="font-label text-xs text-[#00ffcc] uppercase tracking-widest block">
                  Cap d'Antibes, Côte d'Azur, France
                </span>
                <h3 id="maison-title" className="font-headline text-2xl sm:text-3xl text-[#e8e0f0]">
                  Maison Cap d'Antibes
                </h3>
              </div>
              <span className="font-label text-[10px] text-[#e8e0f0] px-3 py-1 rounded-full bg-[#141422]/80 border border-[#302840]">
                Completed Summer 2024
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-label text-xs">
            <div className="p-3.5 rounded-lg bg-[#141422] border border-[#302840]/60">
              <span className="text-[#a098b0] uppercase tracking-wider block text-[10px]">Footprint</span>
              <span className="text-sm text-[#e8e0f0] font-medium mt-1 block">6,200 sq ft • 575 m²</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#141422] border border-[#302840]/60">
              <span className="text-[#a098b0] uppercase tracking-wider block text-[10px]">Primary Stone</span>
              <span className="text-sm text-[#00ffcc] font-medium mt-1 block">Rocamadour Limestone</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#141422] border border-[#302840]/60">
              <span className="text-[#a098b0] uppercase tracking-wider block text-[10px]">Structural Engineering</span>
              <span className="text-sm text-[#e8e0f0] font-medium mt-1 block">Cantilevered Post-Tensioned</span>
            </div>
          </div>

          <p className="font-sans text-sm text-[#a098b0] leading-relaxed">
            Embedded directly into the steep maritime limestone cliffs overlooking the Mediterranean Sea, Maison Cap d'Antibes achieves spatial drama through deep board-formed concrete terraces and frameless 4-meter glass sliders. The residence integrates sea-water geothermal cooling and native maritime pine gardens.
          </p>
        </div>

        <div className="p-6 bg-[#141422] border-t border-[#302840] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-label text-[#a098b0] hover:text-[#e8e0f0] transition-colors cursor-pointer"
          >
            Close Preview
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenInquiry();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ff2d78] text-[#1a0010] font-label text-xs uppercase tracking-wider font-semibold hover:bg-[#00ffcc] transition-colors cursor-pointer shadow-[0_0_16px_rgba(255,45,120,0.3)]"
          >
            <span>Inquire About Coastal Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
