import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, onNavigateSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f0f1a]/90 backdrop-blur-md border-b border-[#302840]/60">
      <div className="h-20 w-full px-4 sm:px-8 lg:px-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark & Monogram Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <img
            alt="Aura Studio Monogram Logo"
            className="h-8 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(0,255,204,0.3)]"
            src="https://lh3.googleusercontent.com/aida/AEtjO1V7zHKKSQKP7dxlsJQ9LwEKssm9m4_fpE9UpUqRp5V-Zz4dbKYXJw4n6_9jaRTeSP6y7cPPlxJLnJ8OHWRFpi1xHXPEUoXtFnClLrCj4T7ozLGWc0RQby0cs8ET0ArcpXygAOqL1cz6Z7TRp6J8Mz9rkjDyZybHJGo7pOx14os8je3_SrUnY2Qemf-QAMbUQPDjZkxKCpXg_P0quE3lN5Gxcp4GMCUHdyizjja-Sfx3ZGCMKwBUXGVK0Q"
            referrerPolicy="no-referrer"
          />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col text-left group cursor-pointer focus:outline-none"
          >
            <span className="font-display font-medium text-lg tracking-tight text-[#e8e0f0] leading-none group-hover:text-[#00ffcc] transition-colors">
              AURA STUDIO
            </span>
            <span className="font-label text-[10px] text-[#a098b0] tracking-[0.2em] mt-1 font-semibold">
              INTERIOR ARCHITECTURE
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links (1-2 word single-line) */}
        <nav className="hidden xl:flex items-center gap-8 text-sm font-medium">
          <button
            onClick={() => handleNavClick('narrative')}
            className="text-[#a098b0] hover:text-[#e8e0f0] transition-colors whitespace-nowrap cursor-pointer"
          >
            Narrative
          </button>
          <button
            onClick={() => handleNavClick('materiality')}
            className="text-[#a098b0] hover:text-[#e8e0f0] transition-colors whitespace-nowrap cursor-pointer"
          >
            Materiality
          </button>
          <button
            onClick={() => handleNavClick('circulation')}
            className="text-[#a098b0] hover:text-[#e8e0f0] transition-colors whitespace-nowrap cursor-pointer"
          >
            Circulation
          </button>
          <button
            onClick={() => handleNavClick('execution')}
            className="text-[#00ffcc] font-medium underline underline-offset-8 decoration-[#00ffcc]/60 whitespace-nowrap cursor-pointer"
          >
            Case Study 048
          </button>
          <button
            onClick={() => handleNavClick('evolution')}
            className="text-[#a098b0] hover:text-[#e8e0f0] transition-colors whitespace-nowrap cursor-pointer"
          >
            Evolution
          </button>
          <button
            onClick={onOpenInquiry}
            className="text-[#a098b0] hover:text-[#e8e0f0] transition-colors whitespace-nowrap cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 Primary CTA & Profile Anchor */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#ff2d78] text-[#1a0010] font-semibold px-6 py-2 text-xs tracking-widest uppercase hover:bg-[#00ffcc] hover:text-[#001a1a] transition-all duration-300 shadow-[0_0_16px_rgba(255,45,120,0.35)] hover:shadow-[0_0_16px_rgba(0,255,204,0.4)] whitespace-nowrap cursor-pointer"
          >
            <span>Begin Inquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2 pl-1 border-l border-[#302840]">
            <img
              alt="Clara Vane RIBA Lead Architect"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-[#00ffcc]/40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX1OiX5RPwVPh8BwM4ewmZJr-mYrd9PdWTQmaxU5dXgPu8aV__o8u_PXCR9nT8qNUO5h6OFHB6ZbeXJzzLoesw8nWzq1XQDaOtKMMh_8knElG_IHu87hBJ6L_fYXOdBnpPC4xpM0IGNGTa3jC8_1t2UCvR1IYGOytysC-eOMUkAC1__ooJ_JfA2j5m7IkipRJ7_vt7TZAULStweqt7l8opnon1xdStyeO6wduwVMDz4YKcExWDGrj-"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#e8e0f0] hover:text-[#00ffcc] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0f0f1a] border-b border-[#302840] px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3 font-display text-sm tracking-wide">
            <button
              onClick={() => handleNavClick('narrative')}
              className="text-left text-[#a098b0] hover:text-[#00ffcc] py-2 border-b border-[#302840]/40"
            >
              01 / Spatial Narrative
            </button>
            <button
              onClick={() => handleNavClick('materiality')}
              className="text-left text-[#a098b0] hover:text-[#00ffcc] py-2 border-b border-[#302840]/40"
            >
              02 / Material Matrix
            </button>
            <button
              onClick={() => handleNavClick('circulation')}
              className="text-left text-[#a098b0] hover:text-[#00ffcc] py-2 border-b border-[#302840]/40"
            >
              03 / Circulation & Flow
            </button>
            <button
              onClick={() => handleNavClick('execution')}
              className="text-left text-[#00ffcc] font-medium py-2 border-b border-[#302840]/40"
            >
              04 / Room-by-Room Monograph
            </button>
            <button
              onClick={() => handleNavClick('evolution')}
              className="text-left text-[#a098b0] hover:text-[#00ffcc] py-2 border-b border-[#302840]/40"
            >
              Structural Evolution (Before/After)
            </button>
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full text-center py-3 rounded-full bg-[#ff2d78] text-[#1a0010] font-semibold text-xs tracking-widest uppercase hover:bg-[#00ffcc] transition-colors shadow-[0_0_16px_rgba(255,45,120,0.35)]"
            >
              Begin Commission Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
