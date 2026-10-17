import React, { useState } from 'react';
import { X, Send, CheckCircle, Sparkles } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    projectType: 'Private Residence Historic Conversion',
    estimatedFootprint: '3,000 – 6,000 sq ft',
    materialsInterest: ['Roman Travertine', 'Smoked European Oak'],
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const toggleMaterial = (material: string) => {
    setFormData((prev) => ({
      ...prev,
      materialsInterest: prev.materialsInterest.includes(material)
        ? prev.materialsInterest.filter((m) => m !== material)
        : [...prev.materialsInterest, material],
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0a0a12]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#0f0f1a] border border-[#ff2d78]/60 rounded-2xl shadow-[0_0_35px_rgba(255,45,120,0.25)] overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-modal-title"
      >
        {/* Header */}
        <div className="p-6 bg-[#141422] border-b border-[#302840] flex items-center justify-between">
          <div>
            <span className="font-label text-xs text-[#00ffcc] uppercase tracking-widest block font-semibold">
              Private Commission
            </span>
            <h3 id="inquiry-modal-title" className="font-headline text-xl text-[#e8e0f0] mt-0.5">
              Begin Architectural Inquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#a098b0] hover:text-[#e8e0f0] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#004d3d]/50 border-2 border-[#00ffcc] text-[#00ffcc] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,255,204,0.3)]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-headline text-2xl text-[#e8e0f0]">
                Commission Inquiry Transmitted
              </h4>
              <p className="font-sans text-sm text-[#a098b0] max-w-md mx-auto leading-relaxed">
                Thank you for your interest in Aura Studio. Clara Vane and our Kensington design team will review your project parameters and respond within two business days.
              </p>
              <div className="p-3 bg-[#141422] border border-[#302840] rounded-lg max-w-xs mx-auto text-xs font-label text-[#00ffcc]">
                Dossier Reference: INQ-2024-KMW-{(Math.random() * 9000 + 1000).toFixed(0)}
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-[#ff2d78] text-[#1a0010] font-label text-xs uppercase tracking-wider font-semibold hover:bg-[#00ffcc] transition-colors cursor-pointer"
                >
                  Return to Dossier
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-label text-xs uppercase tracking-wider text-[#a098b0] block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Lady Eleanor Vance"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#141422] border border-[#302840] text-sm text-[#e8e0f0] placeholder:text-[#5a5068] focus:border-[#ff2d78] focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-label text-xs uppercase tracking-wider text-[#a098b0] block">
                    Correspondence Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.vance@residence.co.uk"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#141422] border border-[#302840] text-sm text-[#e8e0f0] placeholder:text-[#5a5068] focus:border-[#ff2d78] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-label text-xs uppercase tracking-wider text-[#a098b0] block">
                    Property Location &amp; Region
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Chelsea, London / Côte d'Azur"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#141422] border border-[#302840] text-sm text-[#e8e0f0] placeholder:text-[#5a5068] focus:border-[#ff2d78] focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-label text-xs uppercase tracking-wider text-[#a098b0] block">
                    Project Typology
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#141422] border border-[#302840] text-sm text-[#e8e0f0] focus:border-[#ff2d78] focus:outline-none transition-colors"
                  >
                    <option>Private Residence Historic Conversion</option>
                    <option>New Build Architectural Villa</option>
                    <option>Penthouse Sanctuary &amp; Terrace</option>
                    <option>Bespoke Commercial Gallery / Atelier</option>
                  </select>
                </div>
              </div>

              {/* Materiality Interest Pills */}
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-wider text-[#a098b0] block">
                  Material Palette Preferences
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Roman Travertine', 'Smoked European Oak', 'Belgian Washed Linen', 'Patinated Raw Brass', 'Calacatta Vagli'].map((mat) => {
                    const isSelected = formData.materialsInterest.includes(mat);
                    return (
                      <button
                        type="button"
                        key={mat}
                        onClick={() => toggleMaterial(mat)}
                        className={`px-3 py-1.5 rounded-full text-xs font-label transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#004d3d] border border-[#00ffcc] text-[#00ffcc]'
                            : 'bg-[#141422] border border-[#302840] text-[#a098b0] hover:text-[#e8e0f0]'
                        }`}
                      >
                        {mat}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="font-label text-xs uppercase tracking-wider text-[#a098b0] block">
                  Brief Project Overview &amp; Conservation Mandates
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline key architectural goals, square footage, listed building status, and anticipated timeline..."
                  className="w-full px-4 py-2.5 rounded-lg bg-[#141422] border border-[#302840] text-sm text-[#e8e0f0] placeholder:text-[#5a5068] focus:border-[#ff2d78] focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-[#1e1e30] border border-[#302840] text-xs font-label text-[#a098b0] hover:text-[#e8e0f0] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ff2d78] text-[#1a0010] font-label text-xs uppercase tracking-wider font-semibold hover:bg-[#00ffcc] hover:text-[#001a1a] transition-all cursor-pointer shadow-[0_0_16px_rgba(255,45,120,0.35)]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
