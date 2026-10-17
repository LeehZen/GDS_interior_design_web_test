import React, { useState } from 'react';
import { X, MapPin, ShieldCheck, Thermometer, Box, Check, ExternalLink } from 'lucide-react';
import { MaterialSpec } from '../types';

interface MaterialInspectorModalProps {
  material: MaterialSpec | null;
  onClose: () => void;
  onOpenPdfModal: () => void;
}

export const MaterialInspectorModal: React.FC<MaterialInspectorModalProps> = ({
  material,
  onClose,
  onOpenPdfModal,
}) => {
  const [sampleOrdered, setSampleOrdered] = useState(false);

  if (!material) return null;

  const handleOrderSample = () => {
    setSampleOrdered(true);
    setTimeout(() => {
      setSampleOrdered(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0a0a12]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#0f0f1a] border border-[#ff2d78]/50 rounded-2xl shadow-[0_0_30px_rgba(255,45,120,0.25)] overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="material-title"
      >
        {/* Modal Header */}
        <div className="p-6 bg-[#141422] border-b border-[#302840] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-[#ff2d78]/20 border border-[#ff2d78]/40 text-[#ff2d78] font-label text-xs uppercase tracking-widest font-semibold">
              {material.code}
            </span>
            <span className="font-label text-xs text-[#a098b0] uppercase tracking-wider">
              Tactile Specimen Dossier
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#a098b0] hover:text-[#e8e0f0] hover:bg-[#1e1e30] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Swatch & Title Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-5 h-52 rounded-xl overflow-hidden bg-[#1e1e30] border border-[#302840] relative shadow-inner">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${material.imageUrl}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/60 to-transparent" />
            </div>

            <div className="sm:col-span-7 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-label text-[#00ffcc]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{material.sourceLocation}</span>
              </div>
              <h3 id="material-title" className="font-headline text-2xl sm:text-3xl text-[#e8e0f0]">
                {material.name}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#a098b0] leading-relaxed">
                {material.description}
              </p>
            </div>
          </div>

          {/* Technical Specifications Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#141422] border border-[#302840]/60 space-y-1">
              <span className="text-[10px] font-label text-[#a098b0] uppercase tracking-wider block">
                Surface Finishing Method
              </span>
              <p className="font-sans text-xs text-[#e8e0f0] font-medium leading-relaxed">
                {material.finish}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#141422] border border-[#302840]/60 space-y-1">
              <span className="text-[10px] font-label text-[#a098b0] uppercase tracking-wider block">
                Primary Application
              </span>
              <p className="font-sans text-xs text-[#e8e0f0] font-medium leading-relaxed">
                {material.application}
              </p>
            </div>

            {material.astmStandard && (
              <div className="p-4 rounded-xl bg-[#141422] border border-[#302840]/60 space-y-1">
                <span className="text-[10px] font-label text-[#a098b0] uppercase tracking-wider block">
                  Standard Compliance
                </span>
                <p className="font-sans text-xs text-[#00ffcc] font-medium">
                  {material.astmStandard}
                </p>
              </div>
            )}

            {material.thermalConductivity && (
              <div className="p-4 rounded-xl bg-[#141422] border border-[#302840]/60 space-y-1">
                <span className="text-[10px] font-label text-[#a098b0] uppercase tracking-wider block">
                  Thermal Conductivity / Density
                </span>
                <p className="font-sans text-xs text-[#ffe04a] font-medium">
                  {material.thermalConductivity}
                </p>
              </div>
            )}
          </div>

          {/* Maintenance & Provenance Notes */}
          <div className="p-4 rounded-xl bg-[#0a0a12] border border-[#302840] space-y-2">
            <div className="flex items-center gap-2 text-xs font-label text-[#00ffcc] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Architectural Care Regimen &amp; Natural Patina</span>
            </div>
            <p className="font-sans text-xs text-[#a098b0] leading-relaxed">
              {material.maintenance}
            </p>
            <p className="font-sans text-xs text-[#e8e0f0]/80 italic pt-1 border-t border-[#302840]/40">
              Note: {material.provenanceNote}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#141422] border-t border-[#302840] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onOpenPdfModal();
            }}
            className="inline-flex items-center gap-2 text-xs font-label text-[#a098b0] hover:text-[#00ffcc] transition-colors cursor-pointer"
          >
            <span>View Full Specification Schedule</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleOrderSample}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-label text-xs uppercase tracking-wider transition-all duration-300 font-semibold cursor-pointer ${
                sampleOrdered
                  ? 'bg-[#00ffcc] text-[#001a1a] shadow-[0_0_16px_rgba(0,255,204,0.4)]'
                  : 'bg-[#ff2d78] text-[#1a0010] hover:bg-[#00ffcc] hover:text-[#001a1a] shadow-[0_0_16px_rgba(255,45,120,0.3)]'
              }`}
            >
              {sampleOrdered ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Sample Box Requested</span>
                </>
              ) : (
                <>
                  <Box className="w-4 h-4" />
                  <span>Request Physical Swatch Box</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
