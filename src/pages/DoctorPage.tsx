/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, GraduationCap, Heart, CheckCircle2, ShieldCheck, Calendar, Phone } from 'lucide-react';
import { motion } from 'motion/react';

interface DoctorPageProps {
  onNavigate: (page: string) => void;
  onBookClick: () => void;
}

export default function DoctorPage({ onNavigate, onBookClick }: DoctorPageProps) {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="relative py-20 bg-[#1F4E79] text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#1E293B] to-[#1F4E79] opacity-95" />
        <div className="absolute -right-48 -bottom-48 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C9] bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
                Chief Dental Director
              </span>
              <h1 className="font-sans font-black text-4xl md:text-5xl text-white mt-4 tracking-tight leading-tight">
                Dr. Manik Gupta
              </h1>
              <p className="text-cyan-200 font-mono text-sm tracking-widest uppercase font-bold mt-2">
                MDS — Conservative Dentistry & Endodontics
              </p>
              <p className="font-sans text-base text-slate-200 max-w-xl mt-4 leading-relaxed">
                A highly-accredited specialist committed to pain-free multi-sitting and single-sitting treatments, digital dental aesthetics, and comfortable family dentistry in Jammu.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-[#36B6C9] hover:bg-cyan-400 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition duration-300 shadow-md cursor-pointer shrink-0"
            >
              Book Clinical Consultation
            </button>
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
          <span className="text-[#1E293B]">Meet Dr. Manik Gupta</span>
        </div>
      </div>

      {/* Doctor Profile Presentation */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Visual Portrait Card (4 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 shadow-xl space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=650"
                  alt="Dr. Manik Gupta, MDS"
                  className="rounded-2xl object-cover w-full aspect-square md:aspect-11/12 shadow-inner"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 bg-white rounded-xl border border-slate-100 space-y-2">
                  <span className="text-[10px] font-black uppercase text-[#1F4E79] tracking-widest block">SPECIALTIES</span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">Microscopic RCT</span>
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">Computer Dental Implants</span>
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">Digital Veneers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Portfolio Case (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              <div>
                <span className="text-xs font-extrabold text-[#36B6C9] bg-cyan-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  BIOGRAPHY & ACADEMICS
                </span>
                <h2 className="font-sans font-extrabold text-3xl text-[#1E293B] mt-3 tracking-tight">
                  Expert Pediatric & Adult Restorative Specialist
                </h2>
                <p className="font-sans text-sm md:text-base text-[#64748B] mt-4 leading-relaxed font-normal">
                  Dr. Manik Gupta is one of Jammu's leading dental practitioners, heavily praised by families across the state for his patient, gentle, and transparent chair-side behavior. With extensive academic training and a Master of Dental Surgery (MDS) specialization, he focuses on conservative restoration methodologies that protect as much of the original natural tooth enamel as possible.
                </p>
                <p className="font-sans text-sm md:text-base text-[#64748B] mt-3 leading-relaxed font-normal">
                  Over his multi-year clinical background, Dr. Gupta has successfully resolved hundreds of complex endodontic and aesthetic cases, from highly painful decayed root networks to full mouth tooth rehabilition using CAD/CAM digital scans.
                </p>
              </div>

              {/* Milestones / Qualifications timeline */}
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#1E293B] border-b pb-2">Academic Credentials</h3>
                
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-blue-50 text-[#1F4E79] rounded-lg mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-sm md:text-base text-[#1E293B]">Master of Dental Surgery (MDS)</h4>
                    <span className="text-xs text-[#64748B] block mt-0.5">Conservative Dentistry & Endodontics Specialist</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-cyan-50 text-[#36B6C9] rounded-lg mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-sm md:text-base text-[#1E293B]">Clinical Implantology Certification</h4>
                    <span className="text-xs text-[#64748B] block mt-0.5">Specialized surgical protocols for titanium structures</span>
                  </div>
                </div>
              </div>

              {/* Treatment philosophy */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
                <div className="flex items-center space-x-2 text-rose-500">
                  <Heart className="w-5 h-5 fill-rose-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1E293B]">Clinical Philosophy</span>
                </div>
                <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                  "I strongly believe that dental care is as much about psychological comfort as it is about biomedical precision. There is no reason why a visit to the dentist should trigger fear. By explaining diagnostic imaging clearly and deploying state-of-the-art anesthetic delivery, we create a stress-free environment for both children and seniors."
                </p>
                <span className="text-xs font-bold text-[#1F4E79] block text-right">— Dr. Manik Gupta</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Trust Standards Box */}
      <section className="py-20 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-lg mx-auto mb-16">
            <h3 className="font-sans font-black text-2xl md:text-3xl text-[#1E293B] tracking-tight">
              Dr. Manik's Surgical Standards
            </h3>
            <p className="text-xs md:text-sm text-[#64748B] mt-2 leading-relaxed">
              Every procedure undergoes structured verification and patient preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex space-x-3 p-5 bg-white rounded-xl shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#1E293B]">98% Success Ratio on Single-sitting RCT</h4>
                <p className="text-xs text-[#64748B] mt-1">Saves tooth structures quickly with zero post-operative pain or complications.</p>
              </div>
            </div>

            <div className="flex space-x-3 p-5 bg-white rounded-xl shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#1E293B]">Custom 3D Digital Impressions</h4>
                <p className="text-xs text-[#64748B] mt-1">No messy dental pastes. Fast visual intraoral scanning for absolute crown precision.</p>
              </div>
            </div>

            <div className="flex space-x-3 p-5 bg-white rounded-xl shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#1E293B]">Non-Toxic Biocompatible Fillings</h4>
                <p className="text-xs text-[#64748B] mt-1">100% metal-free tooth fillings and aesthetic ceramic seals matching enamel perfectly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h3 className="font-sans font-extrabold text-3xl text-[#1E293B]">
            Ready to Schedule Your Consult?
          </h3>
          <p className="text-[#64748B] text-sm md:text-base max-w-lg mx-auto">
            Book an appointment with Dr. Manik Gupta today. Get professional clinical insight tailored strictly for your unique dental demands.
          </p>
          <div className="mt-8 flex justify-center gap-3.5">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-[#1F4E79] hover:bg-[#36B6C9] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-md cursor-pointer"
            >
              Book Consultation Now
            </button>
            <a
              href="tel:+919622294841"
              className="px-6 py-3.5 border border-[#1F4E79] text-[#1F4E79] hover:bg-slate-50 font-bold text-xs uppercase tracking-widest rounded-xl transition text-center inline-block"
            >
              Call +91 96222 94841
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
