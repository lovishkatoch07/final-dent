/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Plus, Minus, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';

interface FAQPageProps {
  onNavigate: (page: string) => void;
  onBookClick: (treatmentName?: string) => void;
}

export default function FAQPage({ onNavigate, onBookClick }: FAQPageProps) {
  const [openId, setOpenId] = useState<string | null>('faq1');
  const [searchQuery, setSearchQuery] = useState('');

  const faqData: (FAQItem & { category: string })[] = [
    {
      id: 'faq1',
      category: 'Pricing & Insurance',
      question: 'How much does teeth whitening cost in Jammu?',
      answer: 'Teeth whitening costs depend heavily on the starting shade stain severity and style. Elite Smile offers transparent, competitive rates for clinical laser whitening in Jammu starting around standard cosmetic benchmarks. For exact custom estimates, we suggest a quick diagnostic visit where we map your current enamel shade.',
    },
    {
      id: 'faq2',
      category: 'Teeth Whitening',
      question: 'How long does professional whitening last?',
      answer: 'Typically, professional laser whitening results last between 1 to 2 years. Enamel fade cycles depend on dietary habits (excessive consumption of strong tea, coffee, yellow gravies, or nicotine use). Regular twice-daily brushing and routine 6-month clinical maintenance significantly extend shade brilliance.',
    },
    {
      id: 'faq3',
      category: 'Dental Implants',
      question: 'Are dental implants safe?',
      answer: "Absolutely. Dental implants carry a global success rate of over 95%. Dr. Manik Gupta uses premium, biocompatible high-grade titanium and metal-free zirconium alloys which safely fuse into your natural jawbone. Over a few months, it creates an indestructible bond, functioning exactly like a natural roots system.",
    },
    {
      id: 'faq4',
      category: 'General Dentistry',
      question: 'How often should I visit Dr. Manik Gupta for scaling?',
      answer: 'For preventative care, we advise families to undergo clinical checkups and deep scaling twice a year (every 6 months). Regular scaling safely prevents tartar accumulation, avoids localized gum swelling, and detects cavities early when they are quick and inexpensive to seal.',
    },
    {
      id: 'faq5',
      category: 'Children Dentistry',
      question: 'Do you treat toddlers and children?',
      answer: 'Yes! Elite Smile is completely family-oriented. Kids dentistry focuses on stress-free behavior guidance, educational brushing demos, cavity-preventative dental sealants, and high-concentration fluoride gels designed to solidify young secondary enamel.',
    },
    {
      id: 'faq6',
      category: 'Cosmetic Dentistry',
      question: 'What solutions do you offer for chipped front teeth?',
      answer: 'Yes, cosmetic smile redesigning is one of our pinnacle specialties. Dr. Manik Gupta holds certifications in advanced dental veneers, custom-milled zirconia crowns, facial smile balance mapping, laser gum reshaping, and invisible aligners.',
    },
    {
      id: 'faq7',
      category: 'Root Canal Treatment',
      question: 'Is a single-sitting Root Canal (RCT) painful?',
      answer: 'No. With computerized digital rotary systems and modern computerized local anesthesia, the nerve area is completely isolated and numbed. Most patients report feeling only mild pressure during the procedure, similar to getting a standard dental filling.',
    },
    {
      id: 'faq8',
      category: 'Pricing & Insurance',
      question: 'Do you accept cash-less insurance or digital UPI?',
      answer: 'Yes, we accept major credit cards, UPI (GPay, Paytm, PhonePe), net banking, and cash payments. We also assist in structured paperwork generation to expedite personal medical insurance reimbursement claims.'
    }
  ];

  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="relative py-16 bg-[#1F4E79] text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#1F4E79] to-[#36B6C9] opacity-90" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C9] bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
            Information Center
          </span>
          <h1 className="font-sans font-black text-4xl md:text-5xl text-white mt-4 tracking-tight leading-tight">
            Patient FAQs & Guidelines
          </h1>
          <p className="font-sans text-xs md:text-sm text-slate-150 max-w-lg mx-auto mt-3">
            Search our complete index of professional dental inquiries regarding operations, sterilization, clinic fees, and treatment terms in Jammu.
          </p>

          {/* Search Box */}
          <div className="max-w-md mx-auto mt-8 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. RCT, cost, implants)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4.5 py-3.5 bg-white border-0 rounded-2xl text-slate-900 placeholder-slate-400 font-medium text-sm shadow-xl focus:ring-2 focus:ring-[#36B6C9] focus:outline-hidden"
            />
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-100 py-3.5 px-6">
        <div className="max-w-5xl mx-auto flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#64748B]">
          <button onClick={() => onNavigate('home')} className="hover:text-[#1F4E79] cursor-pointer">
            Home
          </button>
          <span>/</span>
          <span className="text-[#1E293B]">Frequently Asked Questions</span>
        </div>
      </div>

      {/* Accordion List */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-100 p-8 space-y-4">
              <span className="text-2xl block">🔍</span>
              <h3 className="font-bold text-lg text-[#1E293B]">No search results matches</h3>
              <p className="text-xs text-[#64748B] max-w-sm mx-auto leading-relaxed">
                We did not identify any questions match your precise lookup key. Please clear query or contact Dr. Manik Gupta directly.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-4.5 py-2 bg-[#1F4E79] text-white font-bold text-xs rounded-lg uppercase tracking-wider cursor-pointer"
              >
                Clear Search Query
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? 'bg-white border-[#1F4E79] shadow-md'
                        : 'bg-white border-slate-150 hover:border-slate-250 shadow-xs'
                    }`}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 font-sans font-bold text-sm md:text-base text-[#1E293B] hover:text-[#1F4E79] cursor-pointer"
                    >
                      <div>
                        <span className="text-[9px] font-black uppercase text-[#36B6C9] tracking-wider block bg-cyan-50/50 py-0.5 px-2 rounded-md w-fit mb-1.5 border border-cyan-150">
                          {item.category}
                        </span>
                        <span className="leading-snug">{item.question}</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-[#64748B] transition-transform shrink-0 ${isOpen && 'rotate-180 bg-[#1F4E79] text-white p-0.5 rounded'}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-[#64748B] leading-relaxed border-t border-slate-50/50 font-normal">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* Booking redirection Section */}
      <section className="py-16 md:py-24 bg-white text-center border-t">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
          <h2 className="font-sans font-black text-2xl md:text-3xl text-[#1E293B]">Have custom medical questions?</h2>
          <p className="text-[#64748B] text-xs md:text-sm leading-relaxed max-w-sm mx-auto">
            Contact Dr. Manik Gupta directly. He will address your personal dental diagnostics during your clinical diagnostic consultation.
          </p>
          <div className="pt-4 flex justify-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-[#1F4E79] text-white hover:bg-[#36B6C9] font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-md cursor-pointer"
            >
              Ask Dr. Manik Directly
            </button>
            <a
              href="tel:+919622294841"
              className="px-6 py-3.5 border border-[#1F4E79] text-[#1F4E79] hover:bg-slate-50 font-bold text-xs uppercase tracking-widest rounded-xl transition cursor-pointer text-center"
            >
              Call +91 96222 94841
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
