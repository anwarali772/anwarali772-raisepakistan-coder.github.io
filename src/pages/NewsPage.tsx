import React, { useState } from 'react';
import { NewsArticle, PageId } from '../types';
import { NEWS_ARTICLES } from '../data/foundationData';
import { Calendar, Clock, User, X, ArrowRight, Share2, FileText, Search } from 'lucide-react';

interface NewsPageProps {
  onNavigate: (page: PageId) => void;
}

export const NewsPage: React.FC<NewsPageProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Press Release', 'Field Report', 'Impact Story', 'Announcement'];

  const filteredNews = NEWS_ARTICLES.filter((article) => {
    const matchCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchQuery = !searchQuery || article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchQuery;
  });

  return (
    <div className="space-y-16 pb-16">
      
      {/* Banner */}
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/15 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Media & Field Dispatch
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white">
            News, Reports & Announcements
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mt-3">
            Read the latest updates from our water plant inaugurations, financial audit disclosures, and beneficiary success stories.
          </p>

          {/* Search & Category Bar */}
          <div className="max-w-xl mx-auto mt-8 space-y-4">
            <div className="bg-gray-800 p-2 rounded-xl border border-gray-700 flex items-center gap-2">
              <Search className="w-4 h-4 text-gray-400 shrink-0 ml-2" />
              <input
                type="text"
                placeholder="Search news or field reports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent w-full text-xs text-white placeholder-gray-400 focus:outline-hidden"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#D62828] text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#111111] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-gray-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#D62828]" /> {article.date}
                    </span>
                    <span>• {article.readTime}</span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#111111] group-hover:text-[#D62828] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-[#111111] border-t border-gray-100 pt-4">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 text-[#D62828]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Article Modal Reader */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            
            <div className="relative h-60 shrink-0">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-full hover:bg-[#D62828] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 overflow-y-auto space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-medium">
                <span className="bg-[#D62828] text-white font-bold text-[10px] uppercase px-2.5 py-1 rounded-md">
                  {selectedArticle.category}
                </span>
                <span>{selectedArticle.date}</span>
                <span>• By {selectedArticle.author}</span>
                <span>• {selectedArticle.readTime}</span>
              </div>

              <h1 className="font-serif font-bold text-2xl sm:text-3xl text-[#111111]">
                {selectedArticle.title}
              </h1>

              <div className="prose text-gray-700 text-sm leading-relaxed space-y-4">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-gray-500">Tags:</span>
                  {selectedArticle.tags.map(t => (
                    <span key={t} className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md font-medium">
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => alert('Article link copied to clipboard!')}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Article</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
