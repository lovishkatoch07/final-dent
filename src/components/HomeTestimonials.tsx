/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HomeTestimonialsProps {
  onNavigate: (page: string) => void;
}

export default function HomeTestimonials({ onNavigate }: HomeTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const bestReviews = [
    {
      name: 'Amit Kumar',
      text: 'Excellent service and friendly staff. The clinic is incredibly clean, and the staff treat you with absolute respect. Dr. Manik Gupta handles each patient with personal care.',
      topic: 'Dental Veneers & Styling',
    },
    {
      name: 'Karan Sharma',
      text: 'Value for money and very gentle behaviour of doctor. The root canal was virtually pain-free. I highly recommend Dr. Manik Gupta to anyone who is scared of dental visits.',
      topic: 'Pain-Free Root Canal',
    },
    {
      name: 'Simran Jeet Kaur',
      text: 'Dr. Manik Gupta explained every treatment in detail. I went for a smile makeover and teeth whitening. The entire diagnostic process was super clear and digital. Highly satisfied!',
      topic: 'Smile Makeover',
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + bestReviews.length) % bestReviews.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % bestReviews.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C9] bg-cyan-50 px-3.5 py-1.5 rounded-full inline-block">
            PATIENT STORIES
          </span>
          <h2 className="font-sans font-black text-3xl md:text-4xl text-[#1E293B] mt-4 tracking-tight leading-tight">
            Review Verified Experiences
          </h2>
        </div>

        <div className="bg-[#F5F7FA] border border-slate-100 rounded-3xl p-6.5 md:p-10 shadow-sm relative min-h-[280px] flex flex-col justify-between">
          <Quote className="absolute right-6 top-6 w-24 h-24 text-slate-205/50 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 relative z-10"
            >
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xs md:text-sm text-[#64748B] leading-relaxed italic">
                "{bestReviews[activeIndex].text}"
              </p>

              <div>
                <span className="font-extrabold text-sm text-[#1E293B] block">{bestReviews[activeIndex].name}</span>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#1F4E79] bg-blue-50/70 border border-blue-100 px-2 py-0.5 rounded w-fit block mt-1.5">
                  {bestReviews[activeIndex].topic}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 pt-6 border-t border-slate-150 flex items-center justify-between relative z-10">
            <div className="flex space-x-1">
              {bestReviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-1 rounded-full transition-all cursor-pointer ${
                    activeIndex === i ? 'bg-[#1F4E79] w-6' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-1.5 bg-white text-[#1F4E79] border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-100"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 bg-white text-[#1F4E79] border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-100"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate('reviews')}
            className="px-5 py-3 border border-[#1F4E79] text-[#1F4E79] hover:bg-slate-50 font-bold text-xs uppercase tracking-widest rounded-xl transition duration-200 inline-flex items-center space-x-2 cursor-pointer"
          >
            <span>View All Google Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
