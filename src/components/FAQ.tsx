/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq1');

  const faqData: FAQItem[] = [
    {
      id: 'faq1',
      question: 'How much does teeth whitening cost?',
      answer: 'Teeth whitening costs depend heavily on the starting shade stain severity and style. Elite Smile offers transparent, competitive rates for clinical laser whitening in Jammu starting around standard cosmetic benchmarks. For exact custom estimates, we suggest a quick diagnostic visit where we map your current enamel shade.',
    },
    {
      id: 'faq2',
      question: 'How long does whitening last?',
      answer: 'Typically, professional laser whitening results last between 1 to 2 years. Enamel fade cycles depend on dietary habits (excessive consumption of strong tea, coffee, yellow gravies, or nicotine use). Regular twice-daily brushing and routine 6-month clinical maintenance significantly extend shade brilliance.',
    },
    {
      id: 'faq3',
      question: 'Are dental implants safe?',
      answer: "Absolutely. Dental implants carry a global success rate of over 95%. Dr. Manik Gupta uses premium, biocompatible high-grade titanium and metal-free zirconium alloys which safely fuse into your natural jawbone. Over a few months, it creates an indestructible bond, functioning exactly like a natural roots system.",
    },
    {
      id: 'faq4',
      question: 'How often should I visit a dentist?',
      answer: 'For preventative care, we advise families to undergo clinical checkups and deep scaling twice a year (every 6 months). Regular scaling safely prevents tartar accumulation, avoids localized gum swelling, and detects cavities early when they are quick and inexpensive to seal.',
    },
    {
      id: 'faq5',
      question: 'Do you treat children?',
      answer: 'Yes! Elite Smile is completely family-oriented. Kids dentistry focuses on stress-free behavior guidance, educational brushing demos, cavity-preventative dental sealants, and high-concentration fluoride gels designed to solidify young secondary enamel.',
    },
    {
      id: 'faq6',
      question: 'Do you offer cosmetic dentistry?',
      answer: 'Yes, cosmetic smile redesigning is one of our pinnacle specialties. Dr. Manik Gupta holds certifications in advanced dental veneers, custom-milled zirconia crowns, facial smile balance mapping, laser gum reshaping, and invisible aligners.',
    },
  ];

  const handleToggle = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-(--size-max-w-1200px) mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E79] bg-blue-50 px-3.5 py-1.5 rounded-full inline-block">
            PATIENT INFORMATION
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-[#1E293B] mt-4 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-base text-[#64748B] mt-4">
            Get instant expert clarity regarding common dental treatments, clinical costs, safety procedures, and appointments at Elite Smile.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="max-w-3xl mx-auto flex flex-col space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-slate-50/50 border-[#1F4E79] shadow-xs'
                    : 'bg-white border-slate-100 hover:border-slate-200'
                }`}
              >
                {/* Trigger bar */}
                <button
                  type="button"
                  onClick={() => handleToggle(item.id)}
                  className="w-full px-6 py-5.5 text-left flex items-center justify-between gap-4 font-sans font-bold text-[#1E293B] hover:text-[#1F4E79] transition-colors cursor-pointer outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base leading-snug">{item.question}</span>
                  <div
                    className={`p-1.5 rounded-lg border border-slate-100 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'bg-[#1F4E79] text-white rotate-180' : 'bg-slate-50 text-[#64748B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-[#64748B] leading-relaxed border-t border-slate-100/50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Global info callbox */}
        <div className="text-center mt-12">
          <p className="text-xs text-[#64748B] font-bold uppercase tracking-wider">
            Have another query not mentioned above?{' '}
            <a href="#contact" className="text-[#1F4E79] hover:text-[#36B6C9] underline">
              Ask Dr. Manik Gupta Directly →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
