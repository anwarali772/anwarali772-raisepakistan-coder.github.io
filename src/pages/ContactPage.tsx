import React, { useState } from 'react';
import { PageId } from '../types';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Is my donation to RAISE Pakistan tax-deductible?',
      a: 'Yes. RAISE Pakistan Foundation is a SECP-registered non-profit organization with FBR Tax Exempt status under Section 2(36) of the Income Tax Ordinance. Official tax exemption receipts are issued for all contributions.'
    },
    {
      q: 'How does RAISE ensure 100% Zakat compliance?',
      a: 'We maintain a strict separate bank account and audit ledger exclusively for Zakat funds. 100% of Zakat is delivered directly to Shariah-eligible beneficiaries (widows, orphans, destitute medical patients, and needy students).'
    },
    {
      q: 'Can international donors contribute?',
      a: 'Yes! International donors can contribute securely via Credit/Debit Cards or PayPal in USD, GBP, EUR, CAD, or AUD.'
    },
    {
      q: 'How can our corporate organization partner for CSR?',
      a: 'We welcome corporate sponsorships for water filtration plants, school adoption, and solar projects. Contact our CSR team directly at csr@raisepakistan.org.'
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Banner */}
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/15 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white">
            Contact & Office Locations
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mt-3">
            Have questions about donating, CSR partnerships, or volunteering? Our team in Islamabad, Lahore, and Karachi is ready to assist you.
          </p>
        </div>
      </section>

      {/* Office Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-3">
            <div className="w-10 h-10 bg-[#D62828] text-white rounded-xl flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#111111]">Islamabad (Headquarters)</h3>
            <p className="text-xs text-gray-600">Sector F-8/3, Service Road East, Islamabad, Pakistan</p>
            <div className="text-xs font-semibold text-gray-800 pt-2 border-t border-gray-100">
              Phone: +92 (51) 889-7247
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-3">
            <div className="w-10 h-10 bg-[#111111] text-white rounded-xl flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#111111]">Lahore Regional Office</h3>
            <p className="text-xs text-gray-600">Gulberg III, Main Boulevard, Lahore, Pakistan</p>
            <div className="text-xs font-semibold text-gray-800 pt-2 border-t border-gray-100">
              Phone: +92 (42) 357-1290
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-3">
            <div className="w-10 h-10 bg-[#111111] text-white rounded-xl flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#111111]">Karachi Regional Hub</h3>
            <p className="text-xs text-gray-600">PECHS Block 6, Shahrah-e-Faisal, Karachi, Pakistan</p>
            <div className="text-xs font-semibold text-gray-800 pt-2 border-t border-gray-100">
              Phone: +92 (21) 343-8102
            </div>
          </div>

        </div>
      </section>

      {/* Form & FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#111111]">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out, <strong>{name}</strong>. Our communications team will review your message and reply to <strong>{email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#111111] text-white px-6 py-2.5 rounded-xl font-bold text-xs cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D62828] block mb-1">Send Us a Direct Message</span>
                  <h2 className="text-2xl font-serif font-bold text-[#111111]">How Can We Assist You?</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Hamid Khan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-[#D62828]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="hamid@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-[#D62828]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CSR Partnership / Water Project Sponsorship"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-[#D62828]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type your message or inquiry here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-[#D62828]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D62828] hover:bg-[#b51f1f] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/10 px-3 py-1 rounded-full">
                Help & Clarifications
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#111111] mt-2">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full p-4 text-left font-serif font-bold text-sm text-[#111111] flex justify-between items-center gap-2 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-[#D62828]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
