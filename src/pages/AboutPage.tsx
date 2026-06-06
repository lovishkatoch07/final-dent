/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Heart, Award, Sparkles, MapPin, Calendar, Clock, Star, UserCheck, Shield, IndianRupee, Users } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onBookClick: () => void;
}

export default function AboutPage({ onNavigate, onBookClick }: AboutPageProps) {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="relative py-20 bg-[#1F4E79] text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#1F4E79] to-[#36B6C9] opacity-90" />
        <div className="absolute -right-48 -bottom-48 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -left-48 -top-48 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C9] bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
            Elite Smile Jammu
          </span>
          <h1 className="font-sans font-black text-4xl md:text-6xl text-white mt-4 tracking-tight leading-tight">
            About Our Medical Clinic
          </h1>
          <p className="font-sans text-lg md:text-xl text-slate-100 max-w-2xl mx-auto mt-6 leading-relaxed">
            Discover the patient-first philosophy, premium global standards, and surgical precision of Elite Smile Dental Clinic in Gandhi Nagar, Jammu.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-[#36B6C9] hover:bg-cyan-400 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition duration-300 shadow-md cursor-pointer"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => onNavigate('doctor')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm uppercase tracking-wider rounded-xl transition duration-300 cursor-pointer"
            >
              Meet Dr. Manik Gupta
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
          <span className="text-[#1E293B]">About Us</span>
        </div>
      </div>

      {/* Core Presentation Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-tr from-[#1F4E79]/20 to-transparent rounded-3xl -rotate-2" />
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&q=80"
                alt="Elite Smile clinic infrastructure"
                className="relative rounded-3xl object-cover shadow-xl border-4 border-white transform hover:scale-101 transition duration-300 w-full aspect-14/10"
                referrerPolicy="no-referrer"
              />
              {/* FDA Approved Setup Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#1F4E79] text-white p-5 rounded-2xl shadow-lg border border-white/10 hidden sm:flex items-center space-x-3.5 z-10">
                <div className="p-3 bg-white/10 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <span className="text-white text-xs font-black block uppercase tracking-wider">FDA Approved Setup</span>
                  <span className="text-cyan-200 text-[10px] uppercase font-bold block mt-0.5">100% Autoclaved tools</span>
                </div>
              </div>
              <div className="absolute right-6 -bottom-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-50 flex items-center space-x-3.5 z-10">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <span className="text-xs text-[#64748B] uppercase tracking-wider block font-bold leading-none">Hygiene Level</span>
                  <span className="text-sm font-extrabold text-[#1E293B] mt-1 block">Class-B Autoclave</span>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C9] bg-cyan-50 px-3.5 py-1.5 rounded-full inline-block">
                WHO WE ARE
              </span>
              <h2 className="font-sans font-black text-3xl md:text-4xl text-[#1E293B] tracking-tight leading-tight">
                Benchmark Family Dental Ecosystem in Jammu
              </h2>
              <div className="font-sans text-[#64748B] text-xs md:text-sm space-y-4 leading-relaxed font-normal">
                <p>
                  Elite Smile Dental Clinic is recognized as a pinnacle of dental wellness in Jammu, combining high-grade surgical accuracy with an empathetic, human-centric approach. Under the expert leadership of <strong>Dr. Manik Gupta (MDS)</strong>, we serve as a premier destination for cosmetic, implant, and restorative therapies.
                </p>
                <p>
                  From pain-free, specialized laser tooth extraction to custom titanium multi-implant placements, our clinical frameworks adhere strictly to premium global safety markers. Every diagnosis is supported by computerized imaging and advanced sterilization metrics.
                </p>
                <p>
                  Our core philosophy centers on patient-first care, assuring that visits are completely serene, informative, and devoid of the stress traditionally associated with getting dental work done.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Values Cards */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#1F4E79]">OUR CORE PRINCIPLES</span>
            <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-[#1E293B] mt-2 tracking-tight">
              Driven By Patient-Centric Values
            </h3>
            <p className="text-[#64748B] text-xs md:text-sm mt-3">
              We operate strictly according to healthcare medical ethics, transparency, and clinical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value card 1 */}
            <div className="p-7 bg-white rounded-2xl border border-slate-100 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1F4E79] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-lg text-[#1E293B]">Absolute Hygiene and Safety</h4>
              <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                Using microscopic multi-cycle autoclaving processes and premium disposable dental kits to ensure sterilized, risk-free care.
              </p>
            </div>

            {/* Value card 2 */}
            <div className="p-7 bg-white rounded-2xl border border-slate-100 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#36B6C9] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-lg text-[#1E293B]">Empathetic & Stress-Free</h4>
              <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                No rushed diagnostics. Dr. Manik Gupta takes his time explaining clinical pathways, making sure children and anxious adults feel comfortable.
              </p>
            </div>

            {/* Value card 3 */}
            <div className="p-7 bg-white rounded-2xl border border-slate-100 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-lg text-[#1E293B]">Digital Dentistry Era</h4>
              <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                Utilizing state-of-the-art intraoral digital scanner cameras, computerized pain-free rotary tools, and custom CAD/CAM dental mills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C9] bg-cyan-50 px-3.5 py-1.5 rounded-full inline-block">
              OUR ADVANTAGES
            </span>
            <h2 className="font-sans font-black text-3xl md:text-4xl text-[#1E293B] mt-4 tracking-tight leading-tight">
              Why Patients Choose Elite Smile
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#64748B] mt-3">
              Combining rigorous standards and compassionate guidance to build lifelong beautiful smiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 p-5 rounded-2xl bg-[#F5F7FA] border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="p-3.5 rounded-xl bg-white border border-slate-100 shadow-2xs shrink-0">
                <UserCheck className="w-6 h-6 text-[#1F4E79]" />
              </div>
              <div className="space-y-1.5 pt-1">
                <h3 className="font-sans font-bold text-sm md:text-base text-[#1E293B] leading-tight">
                  Experienced Dentists
                </h3>
                <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                  Led by premium specialist Dr. Manik Gupta (MDS) with advanced training in micro-surgeries.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 rounded-2xl bg-[#F5F7FA] border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="p-3.5 rounded-xl bg-white border border-slate-100 shadow-2xs shrink-0">
                <Shield className="w-6 h-6 text-[#36B6C9]" />
              </div>
              <div className="space-y-1.5 pt-1">
                <h3 className="font-sans font-bold text-sm md:text-base text-[#1E293B] leading-tight">
                  Modern Technology
                </h3>
                <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                  Equipped with computer rotary channels, precise digital x-rays, and soft laser tools.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 rounded-2xl bg-[#F5F7FA] border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="p-3.5 rounded-xl bg-white border border-slate-100 shadow-2xs shrink-0">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <div className="space-y-1.5 pt-1">
                <h3 className="font-sans font-bold text-sm md:text-base text-[#1E293B] leading-tight">
                  Gentle Treatments
                </h3>
                <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                  Patient care is custom-designed for zero physical anxiety or distress during surgical operations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 rounded-2xl bg-[#F5F7FA] border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="p-3.5 rounded-xl bg-white border border-slate-100 shadow-2xs shrink-0">
                <IndianRupee className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="space-y-1.5 pt-1">
                <h3 className="font-sans font-bold text-sm md:text-base text-[#1E293B] leading-tight">
                  Affordable Care
                </h3>
                <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                  Clear and competitive packages with zero hidden diagnostic fees on any standard procedure.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 rounded-2xl bg-[#F5F7FA] border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="p-3.5 rounded-xl bg-white border border-slate-100 shadow-2xs shrink-0">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <div className="space-y-1.5 pt-1">
                <h3 className="font-sans font-bold text-sm md:text-base text-[#1E293B] leading-tight">
                  Family Friendly
                </h3>
                <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                  Experienced dental methods appropriate for elder patients as well as little toddlers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 rounded-2xl bg-[#F5F7FA] border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="p-3.5 rounded-xl bg-white border border-slate-100 shadow-2xs shrink-0">
                <MapPin className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="space-y-1.5 pt-1">
                <h3 className="font-sans font-bold text-sm md:text-base text-[#1E293B] leading-tight">
                  Convenient Location
                </h3>
                <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                  Located at Main Stop near Gole Market in Gandhi Nagar, Jammu with street parking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Preview Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-1 mb-4 bg-emerald-50 text-emerald-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase">
            <Star className="w-3.5 h-3.5 fill-emerald-600" />
            <span>Top Rated Dental Surgeon</span>
          </div>
          <h3 className="font-sans font-extrabold text-3xl text-[#1E293B] tracking-tight">
            Consult Directly with Dr. Manik Gupta
          </h3>
          <p className="text-slate-500 font-sans text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Interested in restoring missing teeth, getting single-visit painless root canal solutions, or designing your dream cosmetic veneers? Tap below to explore the clinical credentials of our head surgeon.
          </p>
          <div className="mt-8">
            <button
              onClick={() => onNavigate('doctor')}
              className="px-7 py-3.5 bg-[#1F4E79] hover:bg-[#36B6C9] text-white font-bold text-sm uppercase tracking-wider rounded-xl transition duration-300 shadow-sm cursor-pointer"
            >
              Meet Dr. Manik Gupta, MDS →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
