import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  caption: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageUrl,
  title,
  caption,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0a0a12]/95 backdrop-blur-lg animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-[#1e1e30] border border-[#302840] text-[#e8e0f0] hover:text-[#00ffcc] transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-full overflow-hidden rounded-xl bg-[#141422] border border-[#302840] shadow-2xl flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[75vh] w-auto max-w-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="w-full mt-4 p-4 rounded-xl bg-[#141422]/90 border border-[#302840] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h4 className="font-headline text-lg text-[#e8e0f0]">{title}</h4>
            <p className="font-sans text-xs text-[#a098b0] mt-0.5">{caption}</p>
          </div>
          <span className="font-label text-[10px] text-[#00ffcc] uppercase tracking-widest px-2.5 py-1 rounded bg-[#004d3d]/50 border border-[#00ffcc]/30">
            High-Resolution Architectural Plate
          </span>
        </div>
      </div>
    </div>
  );
};
