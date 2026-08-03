import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Heart, 
  Menu, 
  X, 
  Calculator, 
  Search, 
  PhoneCall, 
  ShieldAlert, 
  ChevronRight,
  Globe
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenZakatCalc: () => void;
  onOpenDonateModal: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenZakatCalc,
  onOpenDonateModal,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'volunteer', label: 'Volunteer' },
    { id: 'donate', label: 'Donate' },
    { id: 'team', label: 'Team' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNav = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-xs">
      {/* Top Emergency Announcement Bar */}
      <div className="bg-[#111111] text-white text-xs font-medium py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-[#D62828] text-white px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider text-[10px]">
              <ShieldAlert className="w-3 h-3 animate-pulse" /> Emergency Appeal
            </span>
            <span className="hidden sm:inline text-gray-300">
              Solar Clean Water Plant Appeal in Tharparkar — Help 4,500 Desert Residents
            </span>
          </div>

          <div className="flex items-center gap-4 text-gray-300 text-xs">
            <button 
              onClick={onOpenZakatCalc} 
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-[#F59E0B] font-semibold"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Zakat Calculator</span>
            </button>
            <span className="text-gray-600 hidden md:inline">|</span>
            <div className="hidden md:flex items-center gap-1 text-gray-300">
              <PhoneCall className="w-3 h-3 text-[#D62828]" />
              <span>Helpline: +92 (51) 889-7247</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => handleNav('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 bg-[#111111] rounded-xl flex items-center justify-center shadow-md group-hover:bg-[#D62828] transition-colors duration-300">
              <svg className="w-7 h-7 text-[#D62828] group-hover:text-white transition-colors" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" rx="20" fill="currentColor" fillOpacity="0" />
                <path d="M30 70 L50 30 L70 70 M40 52 L60 52" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="font-serif font-extrabold text-xl tracking-tight text-[#111111] flex items-center gap-1.5">
                RAISE <span className="text-[#D62828] font-sans font-bold text-xs uppercase tracking-widest bg-[#D62828]/10 px-1.5 py-0.5 rounded">PK</span>
              </div>
              <div className="text-[11px] text-gray-500 font-medium tracking-wide">
                Pakistan Foundation
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-[#111111] text-white shadow-xs'
                      : 'text-gray-700 hover:text-[#D62828] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-gray-600 hover:text-[#111111] hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              title="Search Site"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenDonateModal}
              className="bg-[#D62828] hover:bg-[#b51f1f] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenDonateModal}
              className="bg-[#D62828] text-white px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1 sm:hidden"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Donate</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl">
          <div className="flex items-center gap-2 pb-2 mb-2 border-b border-gray-100">
            <button
              onClick={onOpenSearch}
              className="flex-1 flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg text-sm text-gray-500"
            >
              <Search className="w-4 h-4 text-gray-400" />
              <span>Search programs, projects...</span>
            </button>
            
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenZakatCalc(); }}
              className="bg-[#F59E0B]/10 text-[#D97706] p-2 rounded-lg font-semibold text-xs flex items-center gap-1"
            >
              <Calculator className="w-4 h-4" />
              <span>Zakat</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    active
                      ? 'bg-[#111111] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-100 flex gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDonateModal(); }}
              className="w-full bg-[#D62828] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Make a Donation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
