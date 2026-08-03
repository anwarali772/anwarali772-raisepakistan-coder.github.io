import React, { useState } from 'react';
import { PageId, Program } from '../types';
import { CORE_PROGRAMS } from '../data/foundationData';
import { CheckCircle2, GraduationCap, Droplet, ShieldAlert, Sparkles, Laptop, Heart, ArrowRight, Users } from 'lucide-react';

interface ProgramsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonateModal: (cause?: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onNavigate, onOpenDonateModal }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredPrograms = activeTab === 'all' 
    ? CORE_PROGRAMS 
    : CORE_PROGRAMS.filter(p => p.category === activeTab);

  const getIcon = (category: string) => {
    switch (category) {
      case 'education': return <GraduationCap className="w-5 h-5 text-[#D62828]" />;
      case 'health': return <Droplet className="w-5 h-5 text-blue-600" />;
      case 'relief': return <ShieldAlert className="w-5 h-5 text-amber-600" />;
      case 'women': return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'youth': return <Laptop className="w-5 h-5 text-emerald-600" />;
      default: return <Users className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Page Banner */}
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/15 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Core Development Sectors
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white">
            Our Key Impact Programs
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mt-3">
            Targeted, community-owned development initiatives designed to deliver sustainable human impact across Pakistan.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Programs' },
              { id: 'education', label: 'Education for All' },
              { id: 'health', label: 'Healthcare & Water' },
              { id: 'relief', label: 'Disaster Relief' },
              { id: 'women', label: 'Women Empowerment' },
              { id: 'youth', label: 'Youth & Tech' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#D62828] text-white shadow-md'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Program Detailed Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredPrograms.map((program) => (
          <div 
            key={program.id}
            className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Image Column */}
            <div className="lg:col-span-5 relative min-h-[280px]">
              <img 
                src={program.featuredImage} 
                alt={program.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="bg-[#111111]/90 text-white p-3 rounded-xl backdrop-blur-xs flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D62828] rounded-lg flex items-center justify-center">
                    {getIcon(program.category)}
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase">Impact Delivered</div>
                    <div className="font-serif font-bold text-lg text-white">{program.impactMetric}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-100 text-gray-800 text-xs font-bold uppercase px-3 py-1 rounded-md">
                    {program.category}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    Beneficiaries: {program.beneficiaryCount}
                  </span>
                </div>

                <h2 className="text-3xl font-serif font-bold text-[#111111]">
                  {program.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.fullDesc}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Key On-Ground Initiatives:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {program.initiatives.map((init, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-700 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{init}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenDonateModal(program.id)}
                  className="bg-[#D62828] hover:bg-[#b51f1f] text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Support {program.title}</span>
                </button>

                <button
                  onClick={() => onNavigate('projects')}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Active Projects in This Category</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        ))}
      </section>

    </div>
  );
};
