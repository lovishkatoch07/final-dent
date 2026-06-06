/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, Play, Pause, Volume2, Search, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState('All');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [vSubtitleIndex, setVSubtitleIndex] = useState(0);
  const [videoVolume, setVideoVolume] = useState(80);

  // Written slider testimonials
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

  // Google Reviews Showcases Grid with localized identities
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
      rating: 5,
      role: 'Medical Colleague',
      tag: 'Dental Implants',
      date: '3 months ago',
      text: 'Being a health expert myself, I am very critical of autoclave sterilization. Elite Smiles vacuum B-Class indicators are highly pristine. Beautiful clinical setup with top dental tech.'
    }
  ];

  // Simulated synchronized video subtitles representing clinical interview
  const videoSubtitles = [
    '“Hi, I am Sneha from Jammu, and Dr. Manik Gupta completely transformed my confidence...”',
    '“I had multiple missing back molars and could not chew comfortably for months.”',
    '“Elite Smile designed computerized titanium implants. The procedure are painfee!”',
    '“Now, I can smile and chew with absolute comfort. Highly recommend Dr. Manik Gupta!”'
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isVideoPlaying) {
      timer = setInterval(() => {
        setVSubtitleIndex((prev) => (prev + 1) % videoSubtitles.length);
      }, 4200);
    }
    return () => clearInterval(timer);
  }, [isVideoPlaying]);

  // Auto slide cycle for written reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

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
    <section id="testimonials" className="py-24 bg-[#F5F7FA] relative overflow-hidden">
      {/* Decorative quotes background watermark */}
      <Quote className="absolute right-10 top-12 w-96 h-96 text-slate-200/40 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C9] bg-cyan-100/60 px-3.5 py-1.5 rounded-full inline-block">
            PATIENT VOICES & MEDIA
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-[#1E293B] mt-4 tracking-tight leading-tight">
            Patient Success Stories
          </h2>
          <p className="font-sans text-base text-[#64748B] mt-4">
            Elite Smile holds an exceptional 4.8-star rank on Google with over 836+ local reviews. Read firsthand accounts and watch real smile makeovers.
          </p>
        </div>

        {/* TOP SUB-GRID: Interactive Media Component (Video Testimonial + Verified Slider) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-24">
          
          {/* Left Sub-Grid: VIDEO TESTIMONIAL PREVIEW (True interactive UI simulation) */}
          <div className="lg:col-span-6 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between overflow-hidden relative">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-black tracking-widest text-red-600 uppercase">
                  Media Case Room
                </span>
                <span className="text-[10px] font-bold text-[#64748B]">| IMPLANT STORY</span>
              </div>
              <h3 className="font-sans font-extrabold text-xl text-[#1E293B] leading-tight">
                Watch Patient Video Diary:
              </h3>
              <p className="font-sans text-xs text-[#64748B] leading-relaxed mt-1">
                Real clinical testimonial representing teeth replacement and front restoration.
              </p>
            </div>

            {/* Immersive interactive mock player box */}
            <div className="relative w-full aspect-[16/10] bg-slate-900 rounded-2xl overflow-hidden mt-6 shadow-md select-none group">
              {/* Simulated patient thumbnail */}
              <img loading="lazy" decoding="async"
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800&h=500"
                alt="Sneha - Dental Implant Patient Jammu"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isVideoPlaying ? 'filter brightness-40 saturate-50 scale-105' : 'filter brightness-90 saturate-100'
                }`}
                referrerPolicy="no-referrer"
              />

              {/* Central Trigger Action */}
              <button
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/95 text-[#1F4E79] shadow-2xl flex items-center justify-center border-4 border-white/50 hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
                aria-label={isVideoPlaying ? 'Pause Testimonial' : 'Play Testimonial'}
              >
                {isVideoPlaying ? (
                  <Pause className="w-6 h-6 fill-[#1F4E79]" />
                ) : (
                  <Play className="w-6 h-6 fill-[#1F4E79] ml-1" />
                )}
              </button>

              {/* Dynamic synchronized captions overlay */}
              {isVideoPlaying && (
                <div className="absolute inset-x-4 bottom-14 bg-black/75 backdrop-blur-xs text-white p-3.5 rounded-xl text-center border border-white/10 z-10">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={vSubtitleIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs font-bold font-sans italic leading-relaxed text-slate-100"
                    >
                      {videoSubtitles[vSubtitleIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              )}

              {/* Control dock inside player */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 to-black/0 p-4 text-white flex items-center justify-between text-[10px] font-bold tracking-wider opacity-90">
                <span className="flex items-center text-[#36B6C9]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-650 inline-block mr-1.5 animate-ping" />
                  {isVideoPlaying ? 'STREAMING ACTIVE' : 'LOCKED PREVIEW'}
                </span>

                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="flex items-center space-x-1.5">
                    <Volume2 className="w-3.5 h-3.5" />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={videoVolume}
                      onChange={(e) => setVideoVolume(Number(e.target.value))}
                      className="w-12 h-1 accent-[#36B6C9] rounded-lg bg-slate-700 outline-none cursor-pointer"
                    />
                  </div>
                  <span>02:14</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-[#F5F7FA] rounded-xl border border-slate-150 flex items-center justify-between text-xs text-[#64748B]">
              <span className="font-bold uppercase tracking-wider text-[#1F4E79]">Verified Local Case</span>
              <span className="font-semibold">Gandhi Nagar Jammu Clinic</span>
            </div>
          </div>

          {/* Right Sub-Grid: DR. MANIK GUPTA VERIFIED WRITTEN SLIDER */}
          <div className="lg:col-span-6 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-extrabold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-sm ml-2">
                      5.0 Rating
                    </span>
                  </div>
                  
                  <span className="inline-flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
                    Verified Jammu Native
                  </span>
                </div>

                <h3 className="font-sans font-bold text-xl md:text-2xl text-[#1F4E79] leading-tight">
                  "{testimonials[activeIndex].snippet}"
                </h3>

                <p className="font-sans text-xs md:text-sm text-[#64748B] font-normal leading-relaxed italic">
                  {testimonials[activeIndex].fullReview}
                </p>

                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="font-sans font-extrabold text-base text-[#1E293B]">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-xs text-[#64748B] font-semibold mt-0.5">
                      Case verified on {testimonials[activeIndex].date}
                    </div>
                  </div>

                  <div className="bg-[#F5F7FA] px-4.5 py-1.5 rounded-xl border border-slate-150">
                    <span className="text-[11px] font-bold text-[#1F4E79] uppercase tracking-wider">
                      Treatment: <span className="text-[#36B6C9]">{testimonials[activeIndex].treatment}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              {/* Page indicators */}
              <div className="flex items-center space-x-1.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3.5 h-1.5 rounded-full transition-all cursor-pointer ${
                      activeIndex === index ? 'bg-[#1F4E79] w-7' : 'bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Show review ${index + 1}`}
                  />
                ))}
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 bg-slate-50 hover:bg-slate-100 text-[#1F4E79] rounded-xl transition duration-200 cursor-pointer border border-slate-150"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 bg-slate-50 hover:bg-slate-100 text-[#1F4E79] rounded-xl transition duration-200 cursor-pointer border border-slate-150"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: GOOGLE REVIEWS SHOWCASE ARCHITECTURE with filters */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-xl space-y-8">
          
          {/* Showcase header block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 font-bold text-[#1E293B]">
                <span className="text-xl md:text-2xl font-black">Google Reviews Showcase</span>
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="font-sans text-xs md:text-sm text-[#64748B] leading-relaxed">
                Filter and verify live feedback left by standard local directory profiles. Real people, real dental successes.
              </p>
            </div>

            {/* Filter Pills with lucide icon */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center text-xs font-bold text-[#64748B] uppercase tracking-wider mr-2 bg-[#F5F7FA] py-1.5 px-3 rounded-lg border border-slate-200">
                <SlidersHorizontal className="w-3.5 h-3.5 mr-1.5 text-[#1F4E79]" />
                <span>Filter Categories:</span>
              </div>
              {['All', 'Dental Implants', 'Teeth Whitening', 'Root Canal', 'Smile Makeover'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-[#1F4E79] text-white border-transparent shadow-xs'
                      : 'bg-white text-[#64748B] border-slate-200 hover:border-slate-350'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Grid display layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredGoogleReviews.map((review, idx) => (
                <motion.div
                  layout
                  key={review.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  className="p-6 bg-[#F5F7FA] border border-slate-150 rounded-2xl flex flex-col justify-between hover:shadow-md hover:bg-white hover:border-[#1F4E79]/20 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Header information */}
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-sans font-bold text-sm text-[#1E293B]">
                          {review.author}
                        </h4>
                        <div className="flex items-center space-x-1.5 text-[10px] leading-tight mt-0.5 font-bold">
                          <span className={`${review.role === 'Local Guide' ? 'text-amber-600 bg-amber-50' : 'text-emerald-700 bg-emerald-50'} px-2 py-0.5 rounded-sm uppercase tracking-wide`}>
                            {review.role}
                          </span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-500 font-semibold">{review.date}</span>
                        </div>
                      </div>

                      <div className="flex text-amber-500">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-3 h-3 fill-amber-500" />
                        ))}
                      </div>
                    </div>

                    {/* Review quote content */}
                    <p className="font-sans text-xs md:text-sm text-[#64748B] leading-relaxed line-clamp-4">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Treatment association footer */}
                  <div className="border-t border-slate-200 pt-4.5 mt-5 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <span>Verified Review</span>
                    <span className="text-[#36B6C9]">{review.tag}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Interactive footer links */}
          <div className="text-center pt-4 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#64748B] font-semibold leading-relaxed">
              Consistently rated 5 stars by Jammu families for rotary root canals, implants, and polite staff.
            </span>
            <a
              href="https://maps.google.com/?q=Main Stop, 80-A/A, Near Gole Market, Gandhi Nagar, Jammu, Jammu & Kashmir 180004"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-black text-[#1F4E79] hover:text-[#36B6C9] uppercase tracking-widest underline"
            >
              <span>Verify all reviews directly on Google Maps</span>
              <Search className="w-4 h-4 text-[#36B6C9]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

