import React, { useState } from 'react';
import { PageId } from '../types';
import { VOLUNTEER_ROLES } from '../data/foundationData';
import { Users, HeartHandshake, MapPin, Clock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface VolunteerPageProps {
  onNavigate: (page: PageId) => void;
}

export const VolunteerPage: React.FC<VolunteerPageProps> = () => {
  const [selectedRole, setSelectedRole] = useState<string>('vol-01');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [motivation, setMotivation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Banner */}
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/15 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Front-line Change Makers
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white">
            Join 1,200+ RAISE Volunteers
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mt-3">
            Lend your skills, time, and heart to community health camps, digital literacy bootcamps, and emergency relief operations across Pakistan.
          </p>
        </div>
      </section>

      {/* Main Form & Roles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Open Roles List */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/10 px-3 py-1 rounded-full">
                Active Opportunities
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#111111] mt-2">
                Available Volunteer Positions
              </h2>
            </div>

            <div className="space-y-4">
              {VOLUNTEER_ROLES.map((role) => {
                const isSelected = selectedRole === role.id;
                return (
                  <div
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#D62828] bg-[#D62828]/5 shadow-md ring-2 ring-[#D62828]/20'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif font-bold text-base text-[#111111]">{role.title}</h3>
                      <span className="bg-[#111111] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-md">
                        {role.commitment}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 mb-3">{role.description}</p>

                    <div className="flex items-center gap-4 text-[11px] text-gray-500 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#D62828]" /> {role.location}
                      </span>
                      <span>• {role.department}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#111111]">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Thank you, <strong>{fullName}</strong>. Our Regional Volunteer Coordinator will review your application and contact you via email at <strong>{email}</strong> within 2-3 business days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#111111] text-white px-6 py-2.5 rounded-xl font-bold text-xs cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D62828] block mb-1">
                      Volunteer Application Form
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-[#111111]">
                      Start Your Journey as a Change Agent
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Usman Shah"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-[#D62828]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="usman@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-[#D62828]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 300 1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-[#D62828]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">City / Region</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lahore, Swat, Quetta"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-[#D62828]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Selected Role</label>
                    <select
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-gray-900 focus:outline-hidden focus:border-[#D62828]"
                    >
                      {VOLUNTEER_ROLES.map((r) => (
                        <option key={r.id} value={r.id}>{r.title} — {r.department}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Why do you want to volunteer with RAISE Pakistan?
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe your background, skills, and motivation..."
                      value={motivation}
                      onChange={(e) => setMotivation(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-[#D62828]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D62828] hover:bg-[#b51f1f] text-white py-4 rounded-xl font-bold text-sm shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <HeartHandshake className="w-5 h-5" />
                    <span>Submit Volunteer Application</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
