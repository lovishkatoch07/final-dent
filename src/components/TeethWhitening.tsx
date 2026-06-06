/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Clock, CheckCircle2, UserCheck, Eye, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface TeethWhiteningProps {
  onBookClick: () => void;
}

export default function TeethWhitening({ onBookClick }: TeethWhiteningProps) {
  const [activeTab, setActiveTab] = useState<'benefits' | 'procedure' | 'candidate'>('benefits');

  const whiteningBenefits = [
    { title: '8 Shades Lighter', desc: 'Powerful laser-activated formula removes years of coffee, tea, smoking, and age stains.' },
    { title: 'Zero Sensitivity', desc: 'State-of-the-art pH-neutral gel prevents nerve irritation, maintaining enamel health.' },
    { title: 'Enamel Protective Coated', desc: 'Finished with a protective fluoride remineralization paste to seal and shield the teeth.' },
    { title: 'Long-Lasting Radiance', desc: 'Keep your smile bright for up to 2 years with proper basic post-procedure hygiene.' },
  ];

  const whiteningStepProcedure = [
    { step: '01', title: 'Preparation & Mapping', desc: 'Dr. Manik Gupta maps your starting tooth shade and applies a soft gum barrier to shield sensitive tissues.' },
    { step: '02', title: 'Gel Application', desc: 'A medical-grade hydrogen peroxide whitening compound is evenly placed onto teeth faces.' },
    { step: '03', title: 'Laser Activation', desc: 'Our clinical cold-light laser triggers the gel, gently dissolving deep extrinsic and intrinsic stains.' },
    { step: '04', title: 'Rinse & Mineral Shield', desc: 'The gel is rinsed and a clinical desensitizing relief sealant is applied to reinforce raw enamel.' },
  ];

  const candidatePoints = [
    { condition: 'Stained Teeth', isFit: true, info: 'Perfect for yellow/brown staining from dietary habits.' },
    { condition: 'Healthy Gums', isFit: true, info: 'Candidates must not have active untreated periodontal disease.' },
    { condition: 'Natural Teeth', isFit: true, info: 'Whitening compounds do not alter the shade of crowns, veneers, or fillings.' },
    { condition: 'Tooth Sensitivity', isFit: false, info: 'Extremely worn enamel requires dynamic pre-treatment before whitening passes.' },
  ];

  return (
    <section id="whitening" className="py-24 bg-[#F5F7FA] overflow-hidden">
      <div className="max-w-(--size-max-w-1200px) mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Context Details */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C9] bg-cyan-100/60 px-3.5 py-1.5 rounded-full inline-block">
                Cosmetic Excellence
              </span>
              <h2 className="font-sans font-bold text-3xl md:text-5xl text-[#1E293B] mt-4 tracking-tight leading-tight">
                Professional Teeth Whitening In Jammu
              </h2>
              <p className="font-sans text-base text-[#64748B] mt-4 leading-relaxed font-normal">
                Unlock your brilliant, confident smile under clinical supervision. Unlike supermarket kits, Elite Smile's advanced laser system guarantees powerful shade lifts safely while fully shielding sensitive gums.
              </p>
            </div>

            {/* Premium Selector Tabs */}
            <div className="flex border-b border-slate-200">
              <button
                onClick={() => setActiveTab('benefits')}
                className={`pb-4 px-2 font-sans text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                  activeTab === 'benefits'
                    ? 'border-[#1F4E79] text-[#1F4E79]'
                    : 'border-transparent text-[#64748B] hover:text-[#1F4E79]'
                }`}
              >
                Key Benefits
              </button>
              <button
                onClick={() => setActiveTab('procedure')}
                className={`pb-4 px-2 ml-6 font-sans text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                  activeTab === 'procedure'
                    ? 'border-[#1F4E79] text-[#1F4E79]'
                    : 'border-transparent text-[#64748B] hover:text-[#1F4E79]'
                }`}
              >
                Clinical Procedure
              </button>
              <button
                onClick={() => setActiveTab('candidate')}
                className={`pb-4 px-2 ml-6 font-sans text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                  activeTab === 'candidate'
                    ? 'border-[#1F4E79] text-[#1F4E79]'
                    : 'border-transparent text-[#64748B] hover:text-[#1F4E79]'
                }`}
              >
                Am I A Candidate?
              </button>
            </div>

            {/* Tab Contents with animation */}
            <div className="py-4">
              {activeTab === 'benefits' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {whiteningBenefits.map((benefit, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-xs flex space-x-3">
                      <div className="p-2 h-fit rounded-lg bg-cyan-50 text-[#36B6C9]">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-sm text-[#1E293B]">{benefit.title}</h4>
                        <p className="font-sans text-xs md:text-sm text-[#64748B] mt-1 leading-normal">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'procedure' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  {whiteningStepProcedure.map((flow, i) => (
                    <div key={i} className="bg-white p-4.5 rounded-xl border border-slate-100 flex items-center space-x-4">
                      <span className="font-mono text-xl font-black text-[#36B6C9]">{flow.step}</span>
                      <div className="w-px h-10 bg-slate-100" />
                      <div>
                        <h4 className="font-sans font-bold text-sm text-[#1E293B]">{flow.title}</h4>
                        <p className="font-sans text-xs text-[#64748B] mt-0.5 leading-normal">{flow.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'candidate' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {candidatePoints.map((point, i) => (
                    <div key={i} className="bg-white p-4.5 rounded-xl border border-slate-100 flex items-start space-x-3">
                      <div className="mt-0.5">
                        {point.isFit ? (
                          <div className="p-1 rounded bg-emerald-50 text-emerald-600">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                        ) : (
                          <div className="p-1 rounded bg-rose-50 text-rose-500">
                            <HelpCircle className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#1E293B]">{point.condition}</h4>
                        <p className="font-sans text-xs text-[#64748B] mt-1 leading-normal">{point.info}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Stats block & primary button */}
            <div className="pt-6 border-t border-slate-200/60 flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#1F4E79]" />
                <div>
                  <div className="text-xs font-bold uppercase text-[#64748B]">Duration</div>
                  <div className="text-sm font-extrabold text-[#1E293B]">45 - 60 Min Sessions</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <div>
                  <div className="text-xs font-bold uppercase text-[#64748B]">FDA Safety</div>
                  <div className="text-sm font-extrabold text-[#1E293B]">100% Certified Formula</div>
                </div>
              </div>

              <button
                onClick={onBookClick}
                className="ml-auto px-6 py-3 bg-[#1F4E79] hover:bg-[#36B6C9] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-sm"
              >
                Schedule Whitening
              </button>
            </div>

          </div>

          {/* Right Column: Premium Clinical imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-blue-100 rounded-full blur-2xl pointer-events-none" />
              
              <div className="rounded-2xl overflow-hidden border-8 border-white shadow-2xl relative aspect-square max-w-[420px] mx-auto">
                <img loading="lazy" decoding="async"
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600&h=600"
                  alt="Elite Smile Professional Teeth Whitening treatment result"
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating review card */}
              <div className="absolute left-6 -bottom-6 bg-white py-3.5 px-4.5 rounded-xl border border-slate-100 shadow-2xl flex items-center space-x-3 max-w-[240px]">
                <div className="w-8 h-8 rounded-full bg-[#1F4E79] flex items-center justify-center text-white font-bold text-xs uppercase shrink-0">
                  A
                </div>
                <div>
                  <div className="text-[11px] font-black text-[#1E293B]">"Immediate White Shade Lift!"</div>
                  <p className="text-[10px] text-[#64748B] mt-0.5">Amit K., Jammu resident</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

