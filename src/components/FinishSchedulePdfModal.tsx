import React, { useState } from 'react';
import { X, Printer, Download, Check, FileCheck } from 'lucide-react';
import { MATERIALS_DATA, RESIDENCE_META } from '../data/residenceData';

interface FinishSchedulePdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FinishSchedulePdfModal: React.FC<FinishSchedulePdfModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0a0a12]/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#0f0f1a] border border-[#00ffcc]/50 rounded-2xl shadow-[0_0_40px_rgba(0,255,204,0.2)] overflow-hidden max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="schedule-modal-title"
      >
        {/* Modal Top Action Bar */}
        <div className="p-5 bg-[#141422] border-b border-[#302840] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#00ffcc]/10 border border-[#00ffcc]/40 text-[#00ffcc]">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="schedule-modal-title" className="font-headline text-lg text-[#e8e0f0]">
                Architectural Finish Schedule PDF Preview
              </h3>
              <span className="font-label text-xs text-[#a098b0]">
                AURA STUDIO • DOC REF: AS-2024-KMW-FS-REV4
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-[#1e1e30] border border-[#302840] text-[#a098b0] hover:text-[#e8e0f0] transition-colors cursor-pointer hidden sm:inline-flex items-center gap-1.5 text-xs font-label"
              title="Print Specification"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-full bg-[#ff2d78] text-[#1a0010] font-label text-xs uppercase tracking-wider font-semibold hover:bg-[#00ffcc] hover:text-[#001a1a] transition-all cursor-pointer flex items-center gap-1.5 shadow-[0_0_12px_rgba(255,45,120,0.3)]"
            >
              {downloaded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>PDF Saved</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#a098b0] hover:text-[#e8e0f0] transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Architectural Document Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0a0a12] text-[#e8e0f0]">
          {/* Document Header */}
          <div className="border-b-2 border-[#302840] pb-6 flex flex-col sm:flex-row justify-between gap-4 font-label">
            <div className="space-y-1">
              <span className="text-xs text-[#00ffcc] uppercase tracking-widest font-bold">
                Aura Studio Interior Architecture
              </span>
              <h2 className="font-headline text-2xl text-[#e8e0f0]">
                Specification Schedule of Finishes
              </h2>
              <p className="text-xs text-[#a098b0]">
                Project: {RESIDENCE_META.title} • {RESIDENCE_META.monographNumber}
              </p>
            </div>
            <div className="text-left sm:text-right space-y-1 text-xs text-[#a098b0]">
              <p>Location: Kensington, London W8</p>
              <p>Lead Architect: Clara Vane, RIBA (Reg. #098421)</p>
              <p className="text-[#00ffcc]">Status: Issued for Construction (IFC)</p>
            </div>
          </div>

          {/* Schedule Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left font-label text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#302840] text-[#00ffcc] uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-3">Item Spec</th>
                  <th className="py-3 px-3">Material Designation</th>
                  <th className="py-3 px-3">Quarry / Mill Provenance</th>
                  <th className="py-3 px-3">Surface Finish Method</th>
                  <th className="py-3 px-3">Standard / Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#302840]/60">
                {MATERIALS_DATA.map((mat) => (
                  <tr key={mat.id} className="hover:bg-[#141422]/50 transition-colors">
                    <td className="py-3.5 px-3 font-semibold text-[#ff2d78] whitespace-nowrap">
                      {mat.code}
                    </td>
                    <td className="py-3.5 px-3 font-headline text-sm text-[#e8e0f0]">
                      {mat.name}
                    </td>
                    <td className="py-3.5 px-3 text-[#a098b0]">
                      {mat.sourceLocation}
                    </td>
                    <td className="py-3.5 px-3 text-xs font-sans text-[#a098b0] max-w-xs leading-relaxed">
                      {mat.finish}
                    </td>
                    <td className="py-3.5 px-3 text-[#00ffcc] whitespace-nowrap">
                      {mat.astmStandard || 'BS EN 12164'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Architectural Notes & RIBA Stamp Box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t border-[#302840] font-sans text-xs text-[#a098b0]">
            <div className="md:col-span-8 space-y-2">
              <span className="font-label text-[11px] uppercase tracking-wider text-[#e8e0f0] font-semibold block">
                General Architectural Contractor Instructions
              </span>
              <p className="leading-relaxed">
                1. Stone blocks shall be dry-laid on site under supervision of the project architect to verify continuous soft veining prior to final epoxy bedding.
              </p>
              <p className="leading-relaxed">
                2. Smoked European Oak must acclimatize on site for 14 calendar days at ambient relative humidity between 45% and 60% before tongue-and-groove blind fastening.
              </p>
              <p className="leading-relaxed">
                3. All brass work is unlacquered; contractors must wear lint-free cotton gloves during final installation to avoid premature uneven finger oxidation.
              </p>
            </div>

            <div className="md:col-span-4 p-4 rounded-xl bg-[#141422] border border-[#00ffcc]/30 flex flex-col justify-between font-label">
              <div>
                <span className="text-[10px] text-[#00ffcc] uppercase tracking-widest block font-bold">
                  RIBA Chartered Practice
                </span>
                <p className="text-[11px] text-[#e8e0f0] mt-1 font-semibold">
                  Aura Studio London Atelier
                </p>
                <p className="text-[10px] text-[#a098b0] mt-0.5">
                  14 Berkeley Sq, Mayfair, London W1J 6BL
                </p>
              </div>
              <div className="pt-4 border-t border-[#302840] flex justify-between items-center text-[10px]">
                <span className="text-[#a098b0]">Seal Verification:</span>
                <span className="text-[#00ffcc] font-mono">VERIFIED • 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
