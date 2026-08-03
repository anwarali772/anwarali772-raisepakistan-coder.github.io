import React, { useState } from 'react';
import { PageId, Project } from '../types';
import { FEATURED_PROJECTS } from '../data/foundationData';
import { MapPin, Heart, CheckCircle2, ShieldAlert, Filter, Calculator } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonateModal: (cause?: string, prefilledUSD?: number) => void;
  onOpenZakatCalc: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenDonateModal,
  onOpenZakatCalc
}) => {
  const [provinceFilter, setProvinceFilter] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    const matchProvince = provinceFilter === 'All' || p.province === provinceFilter;
    const matchStatus = statusFilter === 'All' || p.status === statusFilter;
    return matchProvince && matchStatus;
  });

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/15 px-3.5 py-1.5 rounded-full inline-block mb-3">
            On-Ground Development
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white">
            Active & Completed Ground Projects
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mt-3">
            Real-time trackable projects delivering clean water complexes, resilient schools, and emergency housing across Pakistan.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-md flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
            <Filter className="w-4 h-4 text-[#D62828]" />
            <span>Filter Projects:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            {/* Province Selector */}
            <select
              value={provinceFilter}
              onChange={(e) => setProvinceFilter(e.target.value)}
              className="bg-gray-50 border border-gray-200 px-3 py-2 rounded-xl font-bold text-gray-800 focus:outline-hidden"
            >
              <option value="All">All Regions</option>
              <option value="Sindh">Sindh</option>
              <option value="Punjab">Punjab</option>
              <option value="KPK">KPK</option>
              <option value="Balochistan">Balochistan</option>
              <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
              <option value="AJK">AJK</option>
            </select>

            {/* Status Selector */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-gray-50 border border-gray-200 px-3 py-2 rounded-xl font-bold text-gray-800 focus:outline-hidden"
            >
              <option value="All">All Statuses</option>
              <option value="Urgent">Urgent Appeals</option>
              <option value="Ongoing">Ongoing Projects</option>
              <option value="Completed">Completed Projects</option>
            </select>
          </div>

          <button
            onClick={onOpenZakatCalc}
            className="bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100 px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-amber-600" />
            <span>Calculate Zakat For Projects</span>
          </button>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const percent = Math.min(100, Math.round((project.raisedAmount / project.targetAmount) * 100));
            return (
              <div 
                key={project.id}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    
                    <div className="absolute top-3 left-3 bg-[#111111]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase px-3 py-1 rounded-md">
                      {project.category}
                    </div>

                    <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                      <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-md shadow-xs ${
                        project.status === 'Urgent' 
                          ? 'bg-[#D62828] text-white animate-pulse' 
                          : project.status === 'Completed'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-blue-600 text-white'
                      }`}>
                        {project.status}
                      </span>

                      {project.zakatEligible && (
                        <span className="bg-amber-500 text-black font-bold text-[10px] uppercase px-2 py-0.5 rounded-md">
                          Zakat
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-[#D62828]" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-[#111111] leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="bg-gray-50 p-3 rounded-xl text-xs text-gray-700 border border-gray-100 font-medium">
                      <strong className="text-gray-900 block mb-0.5">Key Deliverable:</strong>
                      {project.keyOutcome}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-3">
                  {/* Funding Bar */}
                  <div className="space-y-1.5 pt-3 border-t border-gray-100">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-emerald-600">${project.raisedAmount.toLocaleString()} Raised</span>
                      <span className="text-gray-500">Target: ${project.targetAmount.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className={`h-2.5 rounded-full ${project.status === 'Completed' ? 'bg-emerald-500' : 'bg-[#D62828]'}`} 
                        style={{ width: `${percent}%` }} 
                      />
                    </div>
                    <div className="text-[11px] text-gray-500 text-right">
                      {percent}% Funded
                    </div>
                  </div>

                  <button
                    disabled={project.status === 'Completed'}
                    onClick={() => onOpenDonateModal(project.id, 50)}
                    className="w-full bg-[#D62828] disabled:bg-emerald-600 disabled:cursor-default hover:bg-[#b51f1f] text-white py-3 rounded-xl font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {project.status === 'Completed' ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Project Fully Funded!</span>
                      </>
                    ) : (
                      <>
                        <Heart className="w-4 h-4 fill-white" />
                        <span>Sponsor This Project</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
