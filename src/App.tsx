/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SpatialNarrative } from './components/SpatialNarrative';
import { MaterialMatrix } from './components/MaterialMatrix';
import { FloorplanExplorer } from './components/FloorplanExplorer';
import { RoomMonograph } from './components/RoomMonograph';
import { EvolutionComparator } from './components/EvolutionComparator';
import { PressSection } from './components/PressSection';
import { Footer } from './components/Footer';
import { MaterialInspectorModal } from './components/MaterialInspectorModal';
import { FinishSchedulePdfModal } from './components/FinishSchedulePdfModal';
import { InquiryModal } from './components/InquiryModal';
import { LightboxModal } from './components/LightboxModal';
import { MaisonCapModal } from './components/MaisonCapModal';
import { MaterialSpec } from './types';

export default function App() {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialSpec | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [isMaisonCapModalOpen, setIsMaisonCapModalOpen] = useState(false);

  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    caption: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    caption: '',
  });

  const handleOpenLightbox = (imageUrl: string, title: string, caption: string) => {
    setLightbox({
      isOpen: true,
      imageUrl,
      title,
      caption,
    });
  };

  const handleCloseLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a12] text-[#e8e0f0] selection:bg-[#ff2d78]/30 selection:text-[#00ffcc] relative bg-blueprint-grid">
      {/* Fixed Navigation Bar */}
      <Navbar
        onOpenInquiry={() => setIsInquiryModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Architectural Monograph Content */}
      <main className="w-full relative z-10">
        <HeroSection onOpenLightbox={handleOpenLightbox} />
        <SpatialNarrative onOpenLightbox={handleOpenLightbox} />
        <MaterialMatrix
          onSelectMaterial={(mat) => setSelectedMaterial(mat)}
          onOpenPdfModal={() => setIsPdfModalOpen(true)}
        />
        <FloorplanExplorer />
        <RoomMonograph onOpenLightbox={handleOpenLightbox} />
        <EvolutionComparator />
        <PressSection onOpenMaisonCap={() => setIsMaisonCapModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenInquiry={() => setIsInquiryModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Modals & Drawers */}
      <MaterialInspectorModal
        material={selectedMaterial}
        onClose={() => setSelectedMaterial(null)}
        onOpenPdfModal={() => {
          setSelectedMaterial(null);
          setIsPdfModalOpen(true);
        }}
      />

      <FinishSchedulePdfModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />

      <LightboxModal
        isOpen={lightbox.isOpen}
        imageUrl={lightbox.imageUrl}
        title={lightbox.title}
        caption={lightbox.caption}
        onClose={handleCloseLightbox}
      />

      <MaisonCapModal
        isOpen={isMaisonCapModalOpen}
        onClose={() => setIsMaisonCapModalOpen(false)}
        onOpenInquiry={() => {
          setIsMaisonCapModalOpen(false);
          setIsInquiryModalOpen(true);
        }}
      />
    </div>
  );
}
