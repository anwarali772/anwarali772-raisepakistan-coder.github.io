import React from 'react';
import { PageId } from '../types';
import { 
  FOUNDATION_STATS, 
  CORE_PROGRAMS, 
  FEATURED_PROJECTS, 
  TESTIMONIALS 
} from '../data/foundationData';
import { 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  Droplet, 
  GraduationCap, 
  ShieldAlert, 
  Sparkles, 
  Laptop, 
  MapPin, 
  Calculator, 
  Users, 
  ShieldCheck,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonateModal: (cause?: string, prefilledUSD?: number) => void;
  onOpenZakatCalc: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenDonateModal,
  onOpenZakatCalc
}) => {
  return (
    <div className="space-y-20 pb-16">
      
      {/* Hero Banner */}
      <section className="relative bg-[#111111] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        
        {/* Subtle Background Accent Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#D62828]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 bg-[#D62828]/15 border border-[#D62828]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#D62828] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECP & FBR Registered Non-Profit • Reg # 1882-PK-2021</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.1]">
                Empowering Communities, <br />
                <span className="text-[#D62828]">Transforming Lives</span> Across Pakistan.
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                RAISE Pakistan Foundation delivers sustainable education, solar clean drinking water, emergency disaster relief, and youth digital bootcamps across 38 districts in Pakistan.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start">
                <button
                  onClick={() => onOpenDonateModal('water-tharparkar', 50)}
                  className="bg-[#D62828] hover:bg-[#b51f1f] text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Heart className="w-5 h-5 fill-white" />
                  <span>Support Water Appeal ($50)</span>
                </button>

                <button
                  onClick={() => onNavigate('projects')}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer border border-gray-700"
                >
                  <span>Explore Ground Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-gray-800 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Direct Ground Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tax Exempt Sec 2(36)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Audited Financial Transparency</span>
                </div>
              </div>

            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#1C1C1C] border border-gray-800 rounded-2xl p-6 shadow-2xl relative">
                
                {/* Emergency Appeal Tag */}
                <div className="bg-[#D62828] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md inline-block mb-4">
                  Featured Appeal
                </div>

                <div className="relative rounded-xl overflow-hidden mb-4 aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800" 
                    alt="Solar Water Plant" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                    <span className="text-white text-sm font-bold flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#D62828]" /> Tharparkar, Sindh
                    </span>
                  </div>
                </div>

                <h3 className="font-serif font-bold text-xl text-white mb-2">
                  Tharparkar Solar Clean Water Complex
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  Constructing a deep solar-powered tubewell and 10,000L filtration storage facility providing clean water to 3 desert villages.
                </p>

                {/* Progress Bar */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-emerald-400">$14,200 Raised</span>
                    <span className="text-gray-400">Goal: $18,000</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '78%' }} />
                  </div>
                  <div className="text-[11px] text-gray-500 text-right">
                    78% Funded • Serves 4,500 Residents
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenDonateModal('water-tharparkar', 50)}
                    className="w-full bg-[#D62828] hover:bg-[#b51f1f] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>Donate to Water</span>
                  </button>

                  <button
                    onClick={onOpenZakatCalc}
                    className="w-full bg-amber-500/10 border border-amber-500/30 text-[#F59E0B] hover:bg-amber-500/20 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Calculate Zakat</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FOUNDATION_STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl hover:border-[#D62828]/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl sm:text-4xl font-serif font-extrabold text-[#111111] group-hover:text-[#D62828] transition-colors">
                  {stat.value}
                </span>
                <div className="w-10 h-10 bg-[#D62828]/10 text-[#D62828] rounded-xl flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
              <h4 className="font-bold text-sm text-gray-900 mb-1">{stat.label}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Programs / Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/10 px-3.5 py-1.5 rounded-full">
            Our Pillars of Action
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111111] mt-3">
            Sustainable Solutions for Lasting Impact
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            We focus on five interconnected development sectors to break cycles of poverty and unlock human potential across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_PROGRAMS.map((program) => {
            return (
              <div 
                key={program.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.featuredImage} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <span className="bg-[#111111]/80 text-white text-xs font-bold px-2.5 py-1 rounded-md backdrop-blur-xs flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#D62828]" />
                      <span>{program.impactMetric}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#111111] group-hover:text-[#D62828] transition-colors mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed mb-4">
                      {program.shortDesc}
                    </p>

                    <ul className="space-y-1.5 mb-6">
                      {program.initiatives.slice(0, 2).map((init, i) => (
                        <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{init}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onNavigate('programs')}
                    className="text-xs font-bold text-[#111111] hover:text-[#D62828] flex items-center gap-1 cursor-pointer pt-2 border-t border-gray-100"
                  >
                    <span>Learn More About {program.title}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Urgent Projects */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/10 px-3.5 py-1.5 rounded-full">
                Active Ground Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111111] mt-3">
                Current Appeals Seeking Support
              </h2>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="bg-[#111111] hover:bg-black text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-colors flex items-center gap-2 cursor-pointer self-start md:self-auto"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.slice(0, 3).map((project) => {
              const percent = Math.min(100, Math.round((project.raisedAmount / project.targetAmount) * 100));
              return (
                <div 
                  key={project.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md flex flex-col"
                >
                  <div className="relative h-44">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-[#111111] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                      {project.category}
                    </div>
                    {project.zakatEligible && (
                      <div className="absolute top-3 right-3 bg-amber-500 text-black font-bold text-[10px] uppercase px-2.5 py-1 rounded-md shadow-xs">
                        Zakat Eligible
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 font-medium mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#D62828]" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="font-serif font-bold text-lg text-[#111111] line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-emerald-600">${project.raisedAmount.toLocaleString()} Raised</span>
                        <span className="text-gray-500">Goal: ${project.targetAmount.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-[#D62828] h-2 rounded-full" style={{ width: `${percent}%` }} />
                      </div>

                      <button
                        onClick={() => onOpenDonateModal(project.id, 50)}
                        className="w-full mt-3 bg-[#D62828] hover:bg-[#b51f1f] text-white py-2.5 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Heart className="w-3.5 h-3.5 fill-white" />
                        <span>Support This Project</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Regional Footprint Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div className="space-y-4">
              <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/20 px-3.5 py-1 rounded-full inline-block">
                National Reach
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Active Across All Provinces & Autonomous Regions
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                From the desert plains of Tharparkar in Sindh to the remote mountain communities of Gilgit-Baltistan and AJK, RAISE Pakistan operates through local volunteer chapters and field offices.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { region: 'Punjab', detail: 'Primary schools & health camps' },
                  { region: 'Sindh', detail: 'Solar water filtration plants' },
                  { region: 'KPK', detail: 'Flood relief & shelter rebuild' },
                  { region: 'Balochistan', detail: 'Mobile eye surgery camps' },
                  { region: 'Gilgit-Baltistan', detail: 'Youth IT & coding labs' },
                  { region: 'AJK', detail: 'Women vocational hubs' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-900 border border-gray-800 rounded-xl p-3">
                    <div className="font-bold text-sm text-white flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D62828]" /> {item.region}
                    </div>
                    <div className="text-[10px] text-gray-400 mt-0.5">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Callout */}
            <div className="bg-[#1C1C1C] border border-gray-800 rounded-2xl p-6 space-y-6">
              <h3 className="font-serif font-bold text-xl text-white">
                Voices of Beneficiaries
              </h3>
              
              <div className="space-y-4">
                {TESTIMONIALS.map((t) => (
                  <div key={t.id} className="bg-[#111111] p-4 rounded-xl border border-gray-800 space-y-2">
                    <p className="text-xs text-gray-300 italic">"{t.quote}"</p>
                    <div className="flex items-center gap-2 pt-1 border-t border-gray-800">
                      <img src={t.avatar} alt={t.name} className="w-7 h-7 rounded-full object-cover" />
                      <div>
                        <div className="font-bold text-xs text-white">{t.name}</div>
                        <div className="text-[10px] text-gray-400">{t.role} • {t.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#D62828] to-[#b51f1f] text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <span className="bg-black/20 text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full inline-block mb-3">
              Join Our Network
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
              Become a RAISE Volunteer Today
            </h2>
            <p className="text-white/90 text-sm leading-relaxed">
              Join over 1,200 dedicated youth, teachers, doctors, and logistics volunteers serving communities in need across Pakistan.
            </p>
          </div>

          <button
            onClick={() => onNavigate('volunteer')}
            className="bg-white text-[#111111] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-sm shadow-lg transition-all cursor-pointer shrink-0"
          >
            Apply as Volunteer
          </button>
        </div>
      </section>

    </div>
  );
};
