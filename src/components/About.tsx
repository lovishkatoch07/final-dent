/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, HeartHandshake, Sparkles, CheckCircle2, ShieldAlert, GraduationCap, MapPin, Milestone } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  onBookClick: () => void;
}

export default function About({ onBookClick }: AboutProps) {
  const doctorCredentials = [
    {
      title: 'BDS, MDS (Prosthodontics & Implantology)',
      desc: 'Master of Dental Surgery specialized in tooth replacements, full ceramic crowns, cosmetic design, veneers, and titanium implants.',
      icon: <GraduationCap className="w-5 h-5 text-[#36B6C9]" />
    },
    {
      title: 'Dental Implantologist Certification',
      desc: 'Formally educated in guided bone regeneration, sinus lift surgeries, and painless immediate osseointegratative dental implants.',
      icon: <Award className="w-5 h-5 text-[#1F4E79]" />
    },
    {
      title: '12+ Years of Clinical Practice',
      desc: 'Proven clinical history of treating over 14,000+ happy families inside Jammu, from simple tooth fillings to complete cosmetic smile makeovers.',
      icon: <Milestone className="w-5 h-5 text-emerald-600" />
    }
  ];

  const expertPillars = [
    {
      title: 'Soft Pain-Anesthesia Promise',
      desc: 'Anxiety-free local anesthetic delivery. Dr. Manik Gupta employs topical numbing gels so you never feel traditional needle pressure.',
      icon: <CheckCircle2 className="w-5 h-5 text-slate-800" />
    },
    {
      title: 'Rotary Single-Sitting RCT Expert',
      desc: 'Specialized state-of-the-art computerized rotary drilling that cleans compromised roots safely and files teeth in under 45 mins.',
      icon: <Sparkles className="w-5 h-5 text-[#36B6C9]" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F5F7FA] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E79] bg-blue-100/60 px-3.5 py-1.5 rounded-full inline-block">
            MEET THE PRINCIPAL SPECIALIST
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-[#1E293B] mt-4 tracking-tight leading-tight">
            Meet Dr. Manik Gupta
          </h2>
          <p className="font-sans text-base text-[#64748B] mt-4">
            Get personalized cosmetic & restorative clinical treatment directed by one of the leading dental surgeons in Gandhi Nagar, Jammu.
          </p>
        </div>

        {/* Detailed Dr. Profile Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side Column: Large Premium Portrait with Credentials Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Core Portrait Card frame */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative z-10 aspect-[4/5] max-w-[390px] mx-auto bg-slate-200"
              >
                <img loading="lazy" decoding="async"
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600&h=750"
                  alt="Dr. Manik Gupta - BDS MDS Principal Dentist Gandhi Nagar Jammu"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded dynamic overlay label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-6 text-white">
                  <span className="text-[10px] font-black tracking-widest text-[#36B6C9] uppercase">Principal Dental Specialist</span>
                  <p className="font-sans font-extrabold text-xl leading-tight mt-0.5">Dr. Manik Gupta</p>
                  <p className="text-xs text-slate-200 mt-1 font-medium">BDS, MDS (Oral Restorations & Prosthodontics)</p>
                  
                  <div className="flex items-center space-x-1.5 mt-3.5 text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Practice: Gandhi Nagar Jammu</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating trust badges overlapping portrait */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="absolute -right-4 -bottom-6 bg-[#1F4E79] text-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px]"
              >
                <div className="text-3xl font-black text-[#36B6C9] tracking-tight leading-none">12+</div>
                <div className="text-xs font-bold leading-snug mt-2 text-slate-100">Years Clinical Restoration History in Jammu</div>
                <div className="w-10 h-1 bg-[#36B6C9] mt-3" />
              </motion.div>

              {/* Dotted grid background overlay decoration */}
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] [background-size:12px_12px] opacity-50 z-0" />
            </div>
          </div>

          {/* Right Side Column: Dental Expert Bio & Specialized Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-[#1F4E79] bg-blue-150/40 px-3.5 py-1.5 rounded-full inline-block">
                CLINICAL PROFICIENCY
              </span>
              <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-[#1E293B] leading-tight tracking-tight">
                Academic Background & Expertise
              </h3>
              <p className="font-sans text-sm md:text-base text-[#64748B] leading-relaxed font-normal">
                Dr. Manik Gupta completed his Master of Dental Surgery (MDS), a premium postgraduate degree specializing in Prosthodontics and Oral Restorations. This allows him to perform delicate gum shaping, permanent titanium implants post placement, and lightweight custom ceramic crowns with high aesthetic alignment.
              </p>
            </div>

            {/* Academic Credentials breakdown list */}
            <div className="space-y-4.5 pt-2">
              {doctorCredentials.map((credential, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white border border-slate-150 flex items-center justify-center shadow-xs text-[#1F4E79]">
                    {credential.icon}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-[#1E293B] leading-none">
                      {credential.title}
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-[#64748B] mt-1.5 leading-relaxed">
                      {credential.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote of Dr. Manik Gupta */}
            <div className="p-5 bg-white border-l-4 border-[#36B6C9] rounded-r-2xl shadow-xs italic mt-2">
              <p className="text-xs md:text-sm text-[#1E293B] font-semibold leading-relaxed">
                "My clinical focus is simple: to make modern, high-tech dentistry comfortable and entirely transparent. Whether you are coming in for a single-sitting root canal or a full smile makeover, our team ensures a zero-anxiety sterile experience."
              </p>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#64748B] block mt-2 text-right">
                — Dr. Manik Gupta, MDS Principal Specialist
              </span>
            </div>

            {/* CTA Book consultation button */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-slate-155">
              <button
                onClick={onBookClick}
                className="px-7 py-4 bg-[#1F4E79] hover:bg-[#4F81BD] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-colors duration-200 text-center shadow-md cursor-pointer"
              >
                Schedule Consultation
              </button>
              
              <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg border border-slate-150">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-[10px] font-extrabold text-[#64748B] uppercase tracking-wider">
                  MDS Restorative Care Standard
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

