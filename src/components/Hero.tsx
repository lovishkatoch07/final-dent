/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, ShieldCheck, Award, Zap, Phone, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  // Container variants for staggered load animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 lg:pb-24 flex items-center overflow-hidden"
    >
      {/* Animated Background Image */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-[url('/hero_bg.png')] bg-cover bg-center bg-no-repeat opacity-40" 
        />
      </motion.div>

      {/* Elegant Gradient Overlay for Readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/95 via-white/85 to-[#36B6C9]/10" />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 z-0" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20 z-0" />

      <div className="max-w-(--size-max-w-1200px) mx-auto px-6 md:px-10 lg:px-12 w-full pt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-8"
          >
            {/* Top Tagline Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 items-center">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-[#1F4E79] border border-blue-100 uppercase tracking-widest leading-none">
                Best Dentist in Jammu | Dr. Manik Gupta
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase tracking-wider leading-none">
                <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                <span>4.8 Rating (836+ Google Reviews)</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-sans font-extrabold text-[34px] sm:text-[42px] lg:text-[64px] text-[#1E293B] leading-[1.1] tracking-tight"
            >
              Best Dental Clinic In Jammu For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F4E79] to-[#36B6C9]">Confident, Healthy</span> Smiles
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-lg md:text-xl text-[#64748B] font-normal leading-relaxed max-w-[620px]"
            >
              Experience premium family & cosmetic dentistry at Elite Smile, the leading dental clinic in Gandhi Nagar, Jammu. Dr. Manik Gupta offers pain-free root canal treatment, dental implants, teeth whitening, zirconia crowns, and complete smile makeovers.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onBookClick}
                className="px-8 py-4.5 bg-[#1F4E79] hover:bg-[#4F81BD] text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center space-x-2.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-[#36B6C9]" />
                <span>Book Appointment</span>
              </button>
              <a
                href="tel:+919622294841"
                className="px-8 py-4.5 bg-white hover:bg-slate-50 border border-slate-200 text-[#1F4E79] font-bold text-base rounded-xl transition-all duration-300 text-center flex items-center justify-center space-x-2.5 shadow-xs hover:border-slate-300"
              >
                <Phone className="w-5 h-5 text-[#36B6C9]" />
                <span>Call +91 96222 94841</span>
              </a>
            </motion.div>

            {/* Key Trust Highlights */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="p-2 bg-blue-50 rounded-lg text-[#1F4E79]">
                  <Star className="w-4 h-4 fill-[#1F4E79]" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#1E293B]">4.8 Google</div>
                  <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">836+ Reviews</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="p-2 bg-blue-50 rounded-lg text-[#1F4E79]">
                  <Award className="w-4 h-4 text-[#1F4E79]" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#1E293B]">Expert Care</div>
                  <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Dr. Manik Gupta</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="p-2 bg-blue-50 rounded-lg text-[#1F4E79]">
                  <ShieldCheck className="w-4 h-4 text-[#1F4E79]" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#1E293B]">Family friendly</div>
                  <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">All Ages Welcome</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="p-2 bg-blue-50 rounded-lg text-[#1F4E79]">
                  <Zap className="w-4 h-4 text-[#1F4E79]" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#1E293B]">Modern Tech</div>
                  <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Advanced Setup</div>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Visual Layout with overlapping images */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px] aspect-square">
              
              {/* Decorative Circle Grid */}
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Clinic Interior - Main Large Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=800"
                  alt="State-of-the-art Dental Chair setup at Elite Smile Dental Clinic Jammu"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Tech Highlight Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, type: 'spring' }}
                className="absolute -left-6 top-8 bg-[#36B6C9] text-white px-4 py-2.5 rounded-xl shadow-lg border border-cyan-400 flex items-center space-x-2"
              >
                <div className="p-1 bg-white/25 rounded-md">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-wider uppercase leading-none text-cyan-50">Sterilization Block</div>
                  <div className="text-xs font-black tracking-wide uppercase mt-0.5">100% Certified</div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
