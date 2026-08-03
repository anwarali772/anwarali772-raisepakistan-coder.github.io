import React, { useState } from 'react';
import { Search, X, ArrowRight, FolderKanban, GraduationCap, Newspaper, Users } from 'lucide-react';
import { PageId } from '../types';
import { CORE_PROGRAMS, FEATURED_PROJECTS, NEWS_ARTICLES, TEAM_MEMBERS } from '../data/foundationData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const q = query.toLowerCase().trim();

  const matchedPrograms = q ? CORE_PROGRAMS.filter(p => 
    p.title.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
  ) : [];

  const matchedProjects = q ? FEATURED_PROJECTS.filter(p => 
    p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || p.province.toLowerCase().includes(q)
  ) : [];

  const matchedNews = q ? NEWS_ARTICLES.filter(n => 
    n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q) || n.tags.some(t => t.toLowerCase().includes(q))
  ) : [];

  const matchedTeam = q ? TEAM_MEMBERS.filter(t => 
    t.name.toLowerCase().includes(q) || t.role.toLowerCase().includes(q) || t.location.toLowerCase().includes(q)
  ) : [];

  const totalResults = matchedPrograms.length + matchedProjects.length + matchedNews.length + matchedTeam.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
        
        {/* Input Bar */}
        <div className="p-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search programs, water plants, flood relief, news, team..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-hidden"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose} 
            className="text-xs font-bold text-gray-500 hover:text-gray-900 px-2 py-1 bg-gray-200 rounded-md"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {!query ? (
            <div className="text-center py-8 text-gray-400 text-sm">
              <p className="font-medium text-gray-600 mb-2">Popular Searches:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Tharparkar Water', 'Girls Education', 'Flood Relief', 'Zakat', 'Volunteering', 'Scholarships'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="bg-gray-100 hover:bg-[#D62828]/10 hover:text-[#D62828] text-gray-700 text-xs px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-10 text-gray-500 text-sm">
              No direct matches found for "{query}". Try keywords like "water", "school", "medical", or "Tharparkar".
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Programs */}
              {matchedPrograms.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[#D62828]" /> Programs ({matchedPrograms.length})
                  </h4>
                  <div className="space-y-2">
                    {matchedPrograms.map((p) => (
                      <div 
                        key={p.id}
                        onClick={() => { onNavigate('programs'); onClose(); }}
                        className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer transition-colors flex items-center justify-between"
                      >
                        <div>
                          <div className="font-bold text-sm text-gray-900">{p.title}</div>
                          <div className="text-xs text-gray-500 line-clamp-1">{p.shortDesc}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects */}
              {matchedProjects.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FolderKanban className="w-4 h-4 text-emerald-600" /> Ground Projects ({matchedProjects.length})
                  </h4>
                  <div className="space-y-2">
                    {matchedProjects.map((proj) => (
                      <div 
                        key={proj.id}
                        onClick={() => { onNavigate('projects'); onClose(); }}
                        className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer transition-colors flex items-center justify-between"
                      >
                        <div>
                          <div className="font-bold text-sm text-gray-900">{proj.title}</div>
                          <div className="text-xs text-gray-500">{proj.location} • Raised ${proj.raisedAmount.toLocaleString()}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* News */}
              {matchedNews.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Newspaper className="w-4 h-4 text-blue-600" /> News & Field Reports ({matchedNews.length})
                  </h4>
                  <div className="space-y-2">
                    {matchedNews.map((news) => (
                      <div 
                        key={news.id}
                        onClick={() => { onNavigate('news'); onClose(); }}
                        className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer transition-colors flex items-center justify-between"
                      >
                        <div>
                          <div className="font-bold text-sm text-gray-900">{news.title}</div>
                          <div className="text-xs text-gray-500">{news.date} • {news.category}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Team */}
              {matchedTeam.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-amber-600" /> Team ({matchedTeam.length})
                  </h4>
                  <div className="space-y-2">
                    {matchedTeam.map((t) => (
                      <div 
                        key={t.id}
                        onClick={() => { onNavigate('team'); onClose(); }}
                        className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer transition-colors flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5">
                          <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full object-cover" />
                          <div>
                            <div className="font-bold text-sm text-gray-900">{t.name}</div>
                            <div className="text-xs text-gray-500">{t.role}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
