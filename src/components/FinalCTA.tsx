/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CalendarRange, Phone, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface FinalCTAProps {
  onBookClick: () => void;
}

export default function FinalCTA({ onBookClick }: FinalCTAProps) {
  return (
    <section className="py-20 relative bg-[#1F4E79] text-white overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none -ml-20 -mt-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -mr-20 -mb-20" />

      <div className="max-w-(--size-max-w-1200px) mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <div className="bg-white/5 border border-white/10 p-8 md:p-14 rounded-3xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Texts */}
            <div className="lg:col-span-8 flex flex-col space-y-4 text-left">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-xs font-bold tracking-widest uppercase text-cyan-200">
                  Join 836+ Satisfied Families In Jammu
                </span>
              </div>
              
              <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tight leading-none text-white">
                Ready To Transform Your Smile?
              </h2>
              
              <p className="font-sans text-[#E2E8F0] text-sm md:text-base max-w-[650px] leading-relaxed">
                Schedule your consultative checkup with Elite Smile Dental Clinic today. Experience clinical precision, pain-free lasers, and warm care from Dr. Manik Gupta.
              </p>

              <div className="flex items-center space-x-4 pt-2">
                <div className="flex items-center space-x-1 text-xs text-cyan-200 font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Sterile Clinicians</span>
                </div>
                <div className="text-white/45">•</div>
                <div className="text-xs text-white/80 font-bold uppercase tracking-wider">
                  Family-Safe Dentistry
                </div>
              </div>
            </div>

            {/* Right Buttons column */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 items-stretch justify-center">
              <button
                onClick={onBookClick}
                className="px-8 py-4 bg-white text-[#1F4E79] hover:bg-cyan-100 font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <CalendarRange className="w-4.5 h-4.5 text-[#1F4E79]" />
                <span>Book Appointment</span>
              </button>
              
              <a
                href="tel:+919622294841"
                className="px-8 py-4 bg-[#4F81BD] hover:bg-white/10 hover:border-white text-white border border-white/20 font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 text-center flex items-center justify-center space-x-2"
              >
                <Phone className="w-4.5 h-4.5 text-cyan-300" />
                <span>Call +91 96222 94841</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
