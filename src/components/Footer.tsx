import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Heart, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenDonateModal: () => void;
  onOpenZakatCalc: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenDonateModal,
  onOpenZakatCalc
}) => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubmitted(true);
      setEmailInput('');
      setTimeout(() => setEmailSubmitted(false), 5000);
    }
  };

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter CTA */}
        <div className="bg-[#1C1C1C] rounded-2xl p-8 mb-16 border border-gray-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/10 px-3 py-1 rounded-full inline-block mb-3">
              Stay Connected With Our Impact
            </span>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              Subscribe to Field Updates & Impact Reports
            </h3>
            <p className="text-gray-400 text-sm">
              Receive quarterly audited reports, emergency relief bulletins, and inspirational beneficiary stories directly in your inbox.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {emailSubmitted ? (
              <div className="bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 px-6 py-3.5 rounded-xl font-medium text-sm flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Thank you for subscribing! You will receive our next quarterly bulletin.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full sm:w-[420px]">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="bg-[#111111] border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-hidden focus:border-[#D62828] text-sm flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#D62828] hover:bg-[#b51f1f] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Column 1: Organization Intro */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D62828] rounded-xl flex items-center justify-center font-bold text-white shadow-md">
                <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
                  <path d="M30 70 L50 30 L70 70 M40 52 L60 52" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className="font-serif font-extrabold text-xl text-white">RAISE Pakistan</span>
                <p className="text-xs text-gray-400 font-medium">Foundation</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              RAISE Pakistan Foundation is a non-profit non-governmental organization registered with the Securities & Exchange Commission of Pakistan (SECP) and the Ministry of Social Welfare (Reg No: 1882-PK-2021).
            </p>

            <div className="pt-2 space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tax Exempt Status: Section 2(36) Income Tax Ordinance</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Zakat Certified & Shariah Compliant</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-[#D62828] flex items-center justify-center transition-colors text-gray-300 hover:text-white" title="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-[#D62828] flex items-center justify-center transition-colors text-gray-300 hover:text-white" title="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-[#D62828] flex items-center justify-center transition-colors text-gray-300 hover:text-white" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-[#D62828] flex items-center justify-center transition-colors text-gray-300 hover:text-white" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-[#D62828] flex items-center justify-center transition-colors text-gray-300 hover:text-white" title="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Core Pages */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 border-l-2 border-[#D62828] pl-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us & Governance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors cursor-pointer">
                  Core Programs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-white transition-colors cursor-pointer">
                  Ground Projects
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors cursor-pointer">
                  Photo & Video Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('team')} className="hover:text-white transition-colors cursor-pointer">
                  Leadership & Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 border-l-2 border-[#D62828] pl-3">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button onClick={onOpenDonateModal} className="text-[#D62828] font-semibold hover:underline cursor-pointer flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 fill-current" /> Donate Now
                </button>
              </li>
              <li>
                <button onClick={onOpenZakatCalc} className="text-[#F59E0B] font-semibold hover:underline cursor-pointer">
                  Zakat Calculator Tool
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('volunteer')} className="hover:text-white transition-colors cursor-pointer">
                  Become a Volunteer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('news')} className="hover:text-white transition-colors cursor-pointer">
                  News & Field Updates
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact & HQ Locations
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Head Office Info */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 border-l-2 border-[#D62828] pl-3">
              Headquarters
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D62828] shrink-0 mt-0.5" />
                <span>Sector F-8/3, Service Road, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D62828] shrink-0" />
                <span>+92 (51) 889-7247</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D62828] shrink-0" />
                <span>info@raisepakistan.org</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#D62828] shrink-0" />
                <span>www.raisepakistan.org</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            © {new Date().getFullYear()} RAISE Pakistan Foundation. All rights reserved. Registered Charity No: 1882-PK-2021.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Financial Audit Disclosures</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
