/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, GraduationCap, ChevronRight } from 'lucide-react';

interface HomeDoctorSpotlightProps {
  onNavigate: (page: string) => void;
}

export default function HomeDoctorSpotlight({ onNavigate }: HomeDoctorSpotlightProps) {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#1F4E79] rounded-3xl overflow-hidden shadow-xl text-white relative">
          <div className="absolute inset-0 bg-[#0C1F30]/30 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Short Bio Text */}
            <div className="lg:col-span-7 p-8 md:p-12 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#36B6C9] bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
                  FOUNDER SPOTLIGHT
                </span>
                <h2 className="font-sans font-black text-3xl md:text-4xl text-white tracking-tight">
                  Meet Dr. Manik Gupta
                </h2>
                <p className="text-cyan-200 text-xs md:text-sm font-bold uppercase tracking-wider">
                  MDS (Master of Dental Surgery) • Oral Implantology & Aesthetics Specialist
                </p>
              </div>

              <p className="text-xs md:text-sm text-slate-200 leading-relaxed max-w-xl">
                Dr. Manik Gupta is a renowned surgical expert practicing in Jammu, acclaimed for his pristine aesthetic transformations and flawless local rating records. Dedicated to integrating pain-free rotary techniques, he personally consults on every implant and cosmetic treatment plan.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-100 pt-2">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-cyan-300" />
                  <span>Master of Dental Surgery (MDS)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-cyan-300" />
                  <span>Certified Implantologist</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('doctor')}
                  className="px-6 py-3.5 bg-white text-[#1F4E79] hover:bg-[#36B6C9] hover:text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition duration-200 inline-flex items-center space-x-2.5 cursor-pointer shadow-md"
                >
                  <span>Meet Dr. Manik Gupta</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Doctor Photo */}
            <div className="lg:col-span-5 h-full min-h-[300px] lg:min-h-[450px] relative">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
                alt="Dr. Manik Gupta"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
