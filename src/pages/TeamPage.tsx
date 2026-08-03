import React, { useState } from 'react';
import { PageId, TeamMember } from '../types';
import { TEAM_MEMBERS } from '../data/foundationData';
import { Mail, Linkedin, MapPin, ShieldCheck, Users } from 'lucide-react';

interface TeamPageProps {
  onNavigate: (page: PageId) => void;
}

export const TeamPage: React.FC<TeamPageProps> = () => {
  const [category, setCategory] = useState<string>('all');

  const filteredTeam = category === 'all'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter(t => t.category === category);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Banner */}
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/15 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Governance & Leadership
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white">
            Leadership & Advisory Council
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mt-3">
            Experienced humanitarians, public health doctors, logistics directors, and academic policy experts guiding RAISE Pakistan Foundation.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Team Members' },
              { id: 'leadership', label: 'Executive Leadership' },
              { id: 'field', label: 'Field Directors' },
              { id: 'advisory', label: 'Advisory Board' },
              { id: 'ambassadors', label: 'Youth Ambassadors' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  category === tab.id
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

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-[#D62828]/20"
                  />
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#111111]">{member.name}</h3>
                    <p className="text-xs text-[#D62828] font-bold">{member.role}</p>
                    <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-1">
                      <MapPin className="w-3 h-3" /> {member.location}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {member.bio}
                </p>
              </div>

              {member.email && (
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Mail className="w-3.5 h-3.5 text-[#D62828]" /> {member.email}
                  </span>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 text-gray-400 hover:text-[#D62828] transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
