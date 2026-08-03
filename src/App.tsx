import React, { useState } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ZakatCalculatorModal } from './components/ZakatCalculatorModal';
import { QuickDonateModal } from './components/QuickDonateModal';
import { SearchModal } from './components/SearchModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { VolunteerPage } from './pages/VolunteerPage';
import { DonatePage } from './pages/DonatePage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { NewsPage } from './pages/NewsPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Modals
  const [isZakatCalcOpen, setIsZakatCalcOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Donate Modal Prefill
  const [donatePrefillCause, setDonatePrefillCause] = useState<string | undefined>(undefined);
  const [donatePrefillUSD, setDonatePrefillUSD] = useState<number | undefined>(undefined);

  const handleOpenDonate = (cause?: string, prefilledUSD?: number) => {
    setDonatePrefillCause(cause);
    setDonatePrefillUSD(prefilledUSD);
    setIsDonateModalOpen(true);
  };

  const handleZakatToDonate = (amountUSD: number, amountPKR: number) => {
    setDonatePrefillCause('zakat-fund');
    setDonatePrefillUSD(amountUSD);
    setIsDonateModalOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenDonateModal={handleOpenDonate}
            onOpenZakatCalc={() => setIsZakatCalcOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={setCurrentPage}
            onOpenDonateModal={() => handleOpenDonate()}
          />
        );
      case 'programs':
        return (
          <ProgramsPage
            onNavigate={setCurrentPage}
            onOpenDonateModal={(cause) => handleOpenDonate(cause)}
          />
        );
      case 'projects':
        return (
          <ProjectsPage
            onNavigate={setCurrentPage}
            onOpenDonateModal={(cause, usd) => handleOpenDonate(cause, usd)}
            onOpenZakatCalc={() => setIsZakatCalcOpen(true)}
          />
        );
      case 'gallery':
        return <GalleryPage onNavigate={setCurrentPage} />;
      case 'volunteer':
        return <VolunteerPage onNavigate={setCurrentPage} />;
      case 'donate':
        return (
          <DonatePage
            onNavigate={setCurrentPage}
            onOpenZakatCalc={() => setIsZakatCalcOpen(true)}
          />
        );
      case 'team':
        return <TeamPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      case 'news':
        return <NewsPage onNavigate={setCurrentPage} />;
      default:
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenDonateModal={handleOpenDonate}
            onOpenZakatCalc={() => setIsZakatCalcOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#111111] antialiased">
      
      {/* Global Header */}
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenZakatCalc={() => setIsZakatCalcOpen(true)}
        onOpenDonateModal={() => handleOpenDonate()}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenDonateModal={() => handleOpenDonate()}
        onOpenZakatCalc={() => setIsZakatCalcOpen(true)}
      />

      {/* Zakat Calculator Modal */}
      <ZakatCalculatorModal
        isOpen={isZakatCalcOpen}
        onClose={() => setIsZakatCalcOpen(false)}
        onDonateZakat={handleZakatToDonate}
      />

      {/* Quick Donate Modal */}
      <QuickDonateModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
        prefilledCause={donatePrefillCause}
        prefilledAmountUSD={donatePrefillUSD}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={setCurrentPage}
      />

    </div>
  );
}

export default App;
