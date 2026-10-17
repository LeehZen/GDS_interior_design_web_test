import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry, onNavigateSection }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="w-full bg-[#111118] text-[#e8e0f0] border-t border-[#302840]/70 mt-20">
      <div className="w-full px-4 sm:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Column 1: Journal Subscription */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="font-label text-xs uppercase tracking-widest text-[#00ffcc] block font-semibold">
                The Journal
              </span>
              <h3 className="font-headline text-xl sm:text-2xl text-[#e8e0f0] max-w-md">
                Reflections on materiality, daylighting, and spatial quietude.
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#a098b0] max-w-sm leading-relaxed">
                A private bi-monthly dispatch curating architectural monographs, atelier dispatches, and material discoveries.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="mt-4 flex items-center max-w-md bg-[#0a0a12] border border-[#302840] rounded-lg p-1.5 shadow-inner"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your correspondence email"
                className="flex-1 bg-transparent px-3 py-1.5 font-sans text-xs sm:text-sm text-[#e8e0f0] placeholder:text-[#5a5068] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[#ff2d78] text-[#1a0010] px-4 py-2 font-label text-xs tracking-wider uppercase font-semibold hover:bg-[#00ffcc] hover:text-[#001a1a] transition-all duration-300 cursor-pointer shadow-[0_0_12px_rgba(255,45,120,0.3)] shrink-0"
              >
                {subscribed ? (
                  <span className="flex items-center gap-1 text-[#00ffcc]">
                    <Check className="w-3.5 h-3.5" /> Subscribed
                  </span>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          </div>

          {/* Column 2: Studio Locations */}
          <div className="lg:col-span-4 grid grid-cols-3 gap-6 pt-4 lg:pt-0 font-label">
            <div>
              <span className="text-xs text-[#00ffcc] uppercase tracking-widest block mb-2 font-semibold">
                London
              </span>
              <p className="font-sans text-xs text-[#a098b0] leading-relaxed">
                Mayfair Atelier<br />
                14 Berkeley Sq<br />
                W1J 6BL
              </p>
            </div>
            <div>
              <span className="text-xs text-[#00ffcc] uppercase tracking-widest block mb-2 font-semibold">
                Paris
              </span>
              <p className="font-sans text-xs text-[#a098b0] leading-relaxed">
                Saint-Germain<br />
                28 Rue Bonaparte<br />
                75006
              </p>
            </div>
            <div>
              <span className="text-xs text-[#00ffcc] uppercase tracking-widest block mb-2 font-semibold">
                New York
              </span>
              <p className="font-sans text-xs text-[#a098b0] leading-relaxed">
                Tribeca Gallery<br />
                72 Franklin St<br />
                NY 10013
              </p>
            </div>
          </div>

          {/* Column 3: Atelier Index & Social Links */}
          <div className="lg:col-span-3 flex flex-col justify-between pt-4 lg:pt-0">
            <div className="space-y-3">
              <span className="font-label text-xs text-[#00ffcc] uppercase tracking-widest block font-semibold">
                Atelier Index
              </span>
              <ul className="space-y-2 font-sans text-xs text-[#a098b0]">
                <li>
                  <button
                    onClick={() => onNavigateSection('narrative')}
                    className="hover:text-[#e8e0f0] transition-colors text-left"
                  >
                    Spatial Narrative (Victorian Intervention)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateSection('materiality')}
                    className="hover:text-[#e8e0f0] transition-colors text-left"
                  >
                    Material Manifesto &amp; Provenance
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateSection('circulation')}
                    className="hover:text-[#e8e0f0] transition-colors text-left"
                  >
                    Level 01 Circulation Blueprint
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateSection('execution')}
                    className="hover:text-[#e8e0f0] transition-colors text-left"
                  >
                    Room-by-Room Monograph Plates
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenInquiry}
                    className="text-[#ff2d78] hover:text-[#00ffcc] transition-colors text-left font-medium"
                  >
                    Private Commission Inquiries →
                  </button>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-4 pt-6 font-label text-xs tracking-widest text-[#a098b0]">
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="hover:text-[#00ffcc] transition-colors"
              >
                INSTAGRAM
              </a>
              <a
                href="#pinterest"
                onClick={(e) => e.preventDefault()}
                className="hover:text-[#00ffcc] transition-colors"
              >
                PINTEREST
              </a>
              <a
                href="#architizer"
                onClick={(e) => e.preventDefault()}
                className="hover:text-[#00ffcc] transition-colors"
              >
                ARCHITIZER
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Chartered Bar */}
        <div className="pt-8 border-t border-[#302840]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-label text-[11px] text-[#a098b0]">
          <div className="flex items-center gap-3">
            <span>© 2025 AURA STUDIO. ALL RIGHTS RESERVED.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#00ffcc]">RIBA &amp; AIA CHARTERED PRACTICE</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#e8e0f0] cursor-pointer">TERMS OF ENGAGEMENT</span>
            <span className="hover:text-[#e8e0f0] cursor-pointer">CONFIDENTIALITY ARCHIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
