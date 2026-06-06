/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, Volume2, Search, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Testimonial } from '../types';

interface ReviewsPageProps {
  onNavigate: (page: string) => void;
  onBookClick: (treatmentName?: string) => void;
}

export default function ReviewsPage({ onNavigate, onBookClick }: ReviewsPageProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState('All');

  const testimonials: Testimonial[] = [
    {
      id: 'test1',
      name: 'Amit Kumar',
      rating: 5,
      snippet: 'Excellent service and friendly staff.',
      fullReview: 'Excellent service and friendly staff. The clinic is incredibly clean, and the staff treat you with absolute respect. Dr. Manik Gupta handles each patient with personal care.',
      treatment: 'Dental Veneers & Styling',
      date: 'May 2026',
    },
    {
      id: 'test2',
      name: 'Karan Sharma',
      rating: 5,
      snippet: 'Value for money and very gentle behaviour of doctor.',
      fullReview: 'Value for money and very gentle behaviour of doctor. The root canal was virtually pain-free. I highly recommend Dr. Manik Gupta to anyone who is scared of dental visits.',
      treatment: 'Root Canal Treatment',
      date: 'April 2026',
    },
    {
      id: 'test3',
      name: 'Simran Jeet Kaur',
      rating: 5,
      snippet: 'Dr. Manik Gupta explained every treatment in detail.',
      fullReview: 'Dr. Manik Gupta explained every treatment in detail. I went for a smile makeover and teeth whitening. The entire diagnostic process was super clear and digital. Highly satisfied!',
      treatment: 'Smile Makeover & Laser Whitening',
      date: 'March 2026',
    },
    {
      id: 'test4',
      name: 'Pranav Mahajan',
      rating: 5,
      snippet: 'Very hygiene setup, high end machine.',
      fullReview: 'Highly advanced clinical setup! Dr. Manik Gupta is exceptional. Best dental implants experience in Jammu. Very hygienic and zero complications afterward.',
      treatment: 'Titanium Dental Implants',
      date: 'February 2026',
    },
  ];

  const googleReviews = [
    {
      id: 'g1',
      author: 'Rajesh Manhas',
      rating: 5,
      role: 'Local Guide',
      tag: 'Dental Implants',
      date: '2 weeks ago',
      text: 'My father completed full mouth implants at Elite Smile. Dr. Manik Gupta was incredibly patient, explaining the bone density setup step by step. He handled the surgical placements with zero complaints or issues. Highly respect his work.'
    },
    {
      id: 'g2',
      author: 'Pooja Chib',
      rating: 5,
      role: 'Verified Patient',
      tag: 'Teeth Whitening',
      date: '1 month ago',
      text: 'Did my laser teeth whitening at Elite Smile Dental Clinic. The yellow stains from heavy tea drinking are entirely gone. They even matched my teeth shading and gave practical tips to maintain it. Outstanding results!'
    },
    {
      id: 'g3',
      author: 'Vikram Singh Jamwal',
      rating: 5,
      role: 'Local Guide',
      tag: 'Root Canal',
      date: '3 weeks ago',
      text: 'Had severe molar wisdom pain. Went to Elite Smile Clinic for single-sitting RCT. The computer rotary system they use is silent and fast. Virtually zero pain during and after the file operations. Perfect clinical environment.'
    },
    {
      id: 'g4',
      author: 'Jasmeet Kour',
      rating: 5,
      role: 'Verified Patient',
      tag: 'Smile Makeover',
      date: '2 months ago',
      text: 'Best cosmetic dentist in Gandhi Nagar! Dr. Manik and his team turned my chipped front incisors into custom zirconia crowns. The shade is indistinguishable from my natural front teeth. Exceptional care.'
    },
    {
      id: 'g5',
      author: 'Raman Gupta',
      rating: 5,
      role: 'Verified Patient',
      tag: 'Root Canal',
      date: '1 week ago',
      text: 'Very polite doctor behavior and professional dental hygiene. Dr. Maniks hand is very light. He makes you feel relaxed before any standard injection or decay operation.'
    },
    {
      id: 'g6',
      author: 'Dr. Neha Sharma',
      role: 'Medical Colleague',
      tag: 'Dental Implants',
      date: '3 months ago',
      text: 'Being a health expert myself, I am very critical of autoclave sterilization. Elite Smiles vacuum B-Class indicators are highly pristine. Beautiful clinical setup with top dental tech.'
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const filteredGoogleReviews = selectedTag === 'All'
    ? googleReviews
    : googleReviews.filter(r => r.tag === selectedTag);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="relative py-16 bg-[#1F4E79] text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#1F4E79] to-[#36B6C9] opacity-90" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-200 bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
            Verified Experiences
          </span>
          <h1 className="font-sans font-black text-4xl md:text-5xl text-white mt-4 tracking-tight leading-tight">
            Patient Satisfaction Score
          </h1>
          <p className="font-sans text-base text-slate-100 max-w-2xl mx-auto mt-4 leading-relaxed">
            Consistently rated 4.8 stars on Google Business Directory with over 836+ reviews in Gandhi Nagar, Jammu.
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-100 py-3.5 px-6">
        <div className="max-w-5xl mx-auto flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#64748B]">
          <button onClick={() => onNavigate('home')} className="hover:text-[#1F4E79] cursor-pointer">
            Home
          </button>
          <span>/</span>
          <span className="text-[#1E293B]">Patient Reviews</span>
        </div>
      </div>

      {/* Slider Testimonial Block */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#F5F7FA] border border-slate-100 rounded-3xl p-6 md:p-10 shadow-md relative flex flex-col justify-between min-h-80">
            <Quote className="absolute right-6 top-6 w-32 h-32 text-slate-200/50 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 relative z-10"
              >
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-bold text-xs text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded ml-2">
                    5/5 Verified Result
                  </span>
                </div>

                <h3 className="font-sans font-black text-xl md:text-2xl text-[#1F4E79]">
                  "{testimonials[activeIndex].snippet}"
                </h3>
                <p className="text-xs md:text-sm text-[#64748B] leading-relaxed italic">
                  {testimonials[activeIndex].fullReview}
                </p>

                <div className="pt-4 border-t border-slate-200/50 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="font-extrabold text-sm md:text-base text-[#1E293B] block">{testimonials[activeIndex].name}</span>
                    <span className="text-xs text-[#64748B] block mt-0.5">Verified on {testimonials[activeIndex].date}</span>
                  </div>
                  <span className="text-[10px] font-black text-[#1F4E79] bg-blue-50 py-1.5 px-3 rounded uppercase tracking-wider border">
                    {testimonials[activeIndex].treatment}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 pt-6 border-t border-slate-150 flex items-center justify-between relative z-10">
              <div className="flex space-x-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-3.5 h-1.5 rounded-full transition-all cursor-pointer ${
                      activeIndex === i ? 'bg-[#1F4E79] w-7' : 'bg-slate-300'
                    }`}
                    aria-label={`View review ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 bg-white text-[#1F4E79] border rounded-lg cursor-pointer hover:bg-slate-100"
                  aria-label="Previous clinical review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 bg-white text-[#1F4E79] border rounded-lg cursor-pointer hover:bg-slate-100"
                  aria-label="Next clinical review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory cards section with category filtering */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-6">
            <div>
              <h3 className="font-sans font-black text-2xl text-[#1E293B]">Clinical Directory Feed</h3>
              <p className="text-xs text-[#64748B] mt-1">Audit independent patient notes regarding specific dental care plans.</p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mr-2">Category:</span>
              {['All', 'Dental Implants', 'Teeth Whitening', 'Root Canal', 'Smile Makeover'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-bold border transition cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-[#1F4E79] text-white border-transparent'
                      : 'bg-white text-[#64748B] border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGoogleReviews.map((review) => (
              <div
                key={review.id}
                className="p-6 bg-white border border-slate-100 rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-sm text-[#1E293B]">{review.author}</h4>
                      <span className="text-[9px] text-[#64748B] font-bold uppercase tracking-wider block mt-0.5">{review.date}</span>
                    </div>
                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4.5 mt-5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  <span className="flex items-center text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                    Verified
                  </span>
                  <span className="text-[#36B6C9]">{review.tag}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Booking redirection Section */}
      <section className="py-16 md:py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
          <h2 className="font-sans font-black text-2xl md:text-3xl text-[#1E293B]">Ready to Schedule Your Treatment?</h2>
          <p className="text-[#64748B] text-xs md:text-sm leading-relaxed max-w-md mx-auto">
            Become another family story at Elite Smile Dental Clinic. Schedule your checkup or treatment with Dr. Manik Gupta today.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-[#1F4E79] text-white hover:bg-[#36B6C9] font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-md cursor-pointer inline-block"
            >
              Book Clinical Diagnosis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
