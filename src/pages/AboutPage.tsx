import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, Target, Eye, Heart, Award, CheckCircle2, ArrowRight, Building, FileText, Users } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonateModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenDonateModal }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-[#111111] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/15 px-3.5 py-1.5 rounded-full inline-block mb-3">
            About RAISE Pakistan Foundation
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white max-w-3xl mx-auto leading-tight">
            Driven by Integrity, Defined by Ground Impact.
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Registered with SECP and FBR as a non-profit foundation, we work alongside local communities to establish sustainable education, clean water, healthcare, and economic empowerment.
          </p>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg space-y-4">
            <div className="w-12 h-12 bg-[#D62828]/10 text-[#D62828] rounded-xl flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-2xl text-[#111111]">Our Mission</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              To alleviate socio-economic hardship in Pakistan by building resilient community infrastructure, providing equal access to quality primary education, clean water, and emergency disaster relief, while fostering self-reliance through youth skill development and women empowerment.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg space-y-4">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-2xl text-[#111111]">Our Vision</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              A prosperous, educated, and climate-resilient Pakistan where every individual—regardless of geographic location or economic standing—enjoys access to clean water, quality education, dignified healthcare, and sustainable livelihood opportunities.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/10 px-3.5 py-1.5 rounded-full">
            Our Guiding Principles
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#111111] mt-3">
            The Core Values That Guide Our Work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Uncompromised Transparency',
              desc: 'Every donor rupee is audited independently. We maintain an open financial disclosure policy with 91.2% program allocation.',
              icon: ShieldCheck,
              color: 'text-emerald-600'
            },
            {
              title: 'Community Ownership',
              desc: 'Projects are co-designed and maintained with local village committees to ensure long-term self-sustainability.',
              icon: Users,
              color: 'text-blue-600'
            },
            {
              title: 'Compassion & Dignity',
              desc: 'All relief drives and educational programs treat beneficiaries with utmost respect and zero discrimination.',
              icon: Heart,
              color: 'text-[#D62828]'
            },
            {
              title: 'Impact Excellence',
              desc: 'We measure success through verifiable long-term metrics: literacy retention, health improvement, and income growth.',
              icon: Award,
              color: 'text-amber-600'
            }
          ].map((val, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md space-y-3">
              <val.icon className={`w-8 h-8 ${val.color}`} />
              <h3 className="font-serif font-bold text-lg text-[#111111]">{val.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Financial Transparency & Governance */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/10 px-3.5 py-1.5 rounded-full">
                Governance & Audits
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111111]">
                100% Accountable Non-Profit Governance
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                RAISE Pakistan Foundation is governed by an independent Board of Trustees and adheres strictly to corporate governance standards defined by the SECP and FBR.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Registered Non-Profit under SECP (Reg No: 1882-PK-2021)',
                  'FBR Tax Exempt Status under Section 2(36) Income Tax Ordinance',
                  'Annual Financial Audits conducted by Certified Chartered Accountants',
                  '100% Shariah Compliant Zakat Fund Isolation & Audit Trail',
                  'Zero Political or Sectarian Affiliations'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={onOpenDonateModal}
                  className="bg-[#D62828] hover:bg-[#b51f1f] text-white px-6 py-3 rounded-xl font-bold text-xs cursor-pointer shadow-md"
                >
                  Support Our Mission
                </button>
                <button
                  onClick={() => onNavigate('team')}
                  className="bg-[#111111] hover:bg-black text-white px-6 py-3 rounded-xl font-bold text-xs cursor-pointer"
                >
                  Meet Leadership Board
                </button>
              </div>
            </div>

            {/* Financial Breakdown Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#111111] text-white p-8 rounded-3xl border border-gray-800 space-y-6">
                <div className="border-b border-gray-800 pb-4">
                  <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Fund Allocation Ratio</span>
                  <div className="text-3xl font-serif font-bold text-white mt-1">
                    91.2% Direct Ground Allocation
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-emerald-400">Direct Program Execution (Water, Edu, Relief)</span>
                      <span>91.2%</span>
                    </div>
                    <div className="w-full bg-gray-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '91.2%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-amber-400">Audits, Compliance & Administration</span>
                      <span>5.5%</span>
                    </div>
                    <div className="w-full bg-gray-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '5.5%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-blue-400">Volunteer Logistics & Field Coordination</span>
                      <span>3.3%</span>
                    </div>
                    <div className="w-full bg-gray-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '3.3%' }} />
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-gray-400 flex items-center gap-2 border-t border-gray-800">
                  <FileText className="w-4 h-4 text-[#D62828]" />
                  <span>Download full audited 2025 Financial Statement from News portal.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/10 px-3.5 py-1.5 rounded-full">
            Our History
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#111111] mt-3">
            The Journey of RAISE Pakistan Foundation
          </h2>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            {
              year: '2021',
              title: 'Foundation Established in Islamabad',
              desc: 'Founded by Anwar Ali and dedicated humanitarian volunteers following severe water scarcity crises in rural Sindh.'
            },
            {
              year: '2022',
              title: 'Rapid Flood Relief Deployments',
              desc: 'Deployed emergency teams during nationwide floods, providing 100,000+ meals and emergency shelters across 14 districts.'
            },
            {
              year: '2023-2024',
              title: 'Expansion into Education & IT Bootcamps',
              desc: 'Built first model girls school in DG Khan and launched digital skills labs for mountain youth in Gilgit-Baltistan.'
            },
            {
              year: '2025-2026',
              title: '85th Clean Water Plant & 250,000+ Lives Served',
              desc: 'Expanded permanent presence to 38 districts with 1,200+ active volunteers.'
            }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
              <div className="bg-[#111111] text-white font-serif font-bold text-sm px-3 py-1.5 rounded-lg shrink-0">
                {item.year}
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-[#111111]">{item.title}</h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
