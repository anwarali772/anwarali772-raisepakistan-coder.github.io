import React, { useState } from 'react';
import { GalleryItem, PageId } from '../types';
import { GALLERY_ITEMS } from '../data/foundationData';
import { MapPin, Calendar, X, Eye, Image as ImageIcon } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Clean Water', 'Education', 'Emergency Relief', 'Healthcare', 'Youth Labs'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Banner */}
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/15 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Visual Evidence of Impact
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white">
            Photo & Media Showcase
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mt-3">
            A visual record of water plant inaugurations, classroom moments, medical drives, and emergency relief distribution across Pakistan.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#D62828] text-white shadow-md'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity p-5 flex flex-col justify-between">
                  <span className="self-start bg-[#111111]/80 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md backdrop-blur-xs">
                    {item.category}
                  </span>

                  <div className="text-white space-y-1">
                    <div className="flex items-center gap-3 text-[11px] text-gray-300">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#D62828]" /> {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-amber-400" /> {item.date}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-base text-white group-hover:text-[#D62828] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="max-w-4xl w-full bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col">
            
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 text-white bg-black/60 p-2 rounded-full hover:bg-[#D62828] transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={activeItem.thumbnail}
                alt={activeItem.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 text-white space-y-2">
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="bg-[#D62828] text-white px-2.5 py-0.5 rounded-md font-bold uppercase text-[10px]">
                  {activeItem.category}
                </span>
                <span>{activeItem.location}</span>
                <span>•</span>
                <span>{activeItem.date}</span>
              </div>

              <h2 className="font-serif font-bold text-2xl text-white">
                {activeItem.title}
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed">
                {activeItem.description}
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
