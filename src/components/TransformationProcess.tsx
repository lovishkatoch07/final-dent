/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Layers, Activity, CheckCircle, Clock, Sparkles } from 'lucide-react';

interface ProcessStep {
  phase: string;
  title: string;
  icon: React.ReactNode;
  duration: string;
  tagline: string;
  details: string;
  milestones: string[];
  patientRole: string;
}

export default function TransformationProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: ProcessStep[] = [
    {
      phase: 'Phase 01',
      title: 'Digital Diagnostics & Consultation',
      icon: <Calendar className="w-5 h-5" />,
      duration: 'Day 1 (45 mins)',
      tagline: 'Your complete custom mapping and deep shade valuation analysis.',
      details: 'We begin with a personalized diagnostic session. Dr. Manik Gupta uses high-definition intraoral cameras and ultra-low-dose digital RVG displays to map your current jaw alignment, gums health, and shade details while answering your cosmetic questions.',
      milestones: [
        'Full high-definition digital teeth imaging',
        'Pre-operative treatment photos & documentation',
        '1-on-1 dialogue with Dr. Manik Gupta to define your exact goals'
      ],
      patientRole: 'Share your smile goals, tooth sensitivities, or anxieties so we can customize your pain-free setting.'
    },
    {
      phase: 'Phase 02',
      title: 'Custom Blueprint & 3D Mockup Trial',
      icon: <Layers className="w-5 h-5" />,
      duration: 'Day 3 (30 mins)',
      tagline: 'See and test your virtual dental restorations ahead of clinical action.',
      details: 'No guesswork required. For smile makeovers or extensive implants, we design a physical or digital 3D model mock-up. You can actually test-drive the look, length, and feel of your temporary teeth design on your natural bite before crowns or veneers are manufactured.',
      milestones: [
        'Precision shade-matching against natural surrounding enamel',
        '3D simulated model preview (Digital Smile Design)',
        'Bite comfort evaluation and structural feedback corrections'
      ],
      patientRole: 'Examine shape, shade, and bite in the clinic mirrors and provide feedback before our labs bake the ceramics.'
    },
    {
      phase: 'Phase 03',
      title: 'Painless Treatment Delivery',
      icon: <Activity className="w-5 h-5" />,
      duration: 'Day 7 (60-90 mins)',
      tagline: 'Gentle, sterile, and computerized restorative dentistry execution.',
      details: 'Using computer-controlled dental micro-motors, dental lasers, and advanced anesthesia techniques, we deliver your veneers, titanium implants, or zirconia crowns in a sterile clinical room. Rest assured, you will experience a swift and virtually friction-free procedure.',
      milestones: [
        'Computerized rotary filing or painless laser teeth shaping',
        'Medical-grade zirconia or ceramic bonding with light curing',
        'Direct structural integrity assessment'
      ],
      patientRole: 'Relax in our ergonomic soft dental chair under warm lighting; signal if you require rests.'
    },
    {
      phase: 'Phase 04',
      title: 'Perfect Smile Unveiled & Recovery',
      icon: <CheckCircle className="w-5 h-5" />,
      duration: 'Ongoing Comfort',
      tagline: 'Final polishing, hygiene directions, and lifetime smile tracking.',
      details: 'We inspect physical alignment and complete professional cosmetic polishing. Dr. Manik Gupta drafts a personalized dental-care kit report covering eating instructions, flossing techniques, and schedules post-op checks to ensure your implants, veneers, or crowns last a lifetime.',
      milestones: [
        'Fine occlusion bite assessment and custom contour adjustments',
        'Complimentary dental care blueprint pack delivered',
        '6-month recurring checkup reminders'
      ],
      patientRole: 'Enjoy showing off your gorgeous new smile, follow direct advice, and celebrate your custom aesthetic transformation!'
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E79] bg-blue-50 px-3.5 py-1.5 rounded-full inline-block">
            TREATMENT STRATEGY
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-[#1E293B] mt-4 tracking-tight leading-tight">
            Our Smile Transformation Journey
          </h2>
          <p className="font-sans text-base text-[#64748B] mt-4">
            We follow an engineering-exact, 4-step medical roadmap to ensure every root canal, veneering, or implant restoration is comfortable and perfectly aligned.
          </p>
        </div>

        {/* Process Steps Timeline Navigation Bar */}
        <div className="mb-12 relative">
          {/* Horizontal connecting line (hidden on small mobile) */}
          <div className="absolute top-[28px] left-8 right-8 h-1 bg-slate-100 hidden md:block z-0" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`p-4 md:p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#1F4E79] shadow-md scale-[1.01]'
                      : 'bg-[#F5F7FA] border-transparent hover:border-slate-250'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-[#1F4E79] text-white shadow-lg shadow-blue-900/10 scale-105'
                      : 'bg-white text-[#64748B] border border-slate-200'
                  }`}>
                    {step.icon}
                  </div>
                  <span className="text-[10px] font-black text-[#36B6C9] uppercase tracking-widest mt-4">
                    {step.phase}
                  </span>
                  <h4 className="font-sans font-bold text-xs md:text-sm text-[#1E293B] mt-1 line-clamp-1 leading-snug">
                    {step.title}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Information Panel */}
        <div className="bg-[#F5F7FA] border border-slate-100 rounded-3xl p-6 md:p-12 shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              
              {/* Left Column: Description & Milestones */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[10px] font-extrabold px-3 py-1 bg-[#1F4E79] text-white rounded-md uppercase tracking-widest leading-none">
                    {steps[activeStep].phase}
                  </span>
                  <div className="flex items-center text-xs font-bold text-[#64748B] uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-[#36B6C9]" />
                    <span>Duration: {steps[activeStep].duration}</span>
                  </div>
                </div>

                <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-[#1E293B] leading-tight">
                  {steps[activeStep].title}
                </h3>

                <p className="font-sans text-xs md:text-sm text-[#1F4E79] font-bold leading-relaxed italic border-l-4 border-[#36B6C9] pl-4">
                  "{steps[activeStep].tagline}"
                </p>

                <p className="font-sans text-sm text-[#64748B] leading-relaxed">
                  {steps[activeStep].details}
                </p>

                {/* Milestones checklists */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-black text-[#1E293B] uppercase tracking-wider">
                    Clinical Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-1 gap-2">
                    {steps[activeStep].milestones.map((milestone, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-[#1E293B] font-medium leading-relaxed">{milestone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Roles & Patient Guidelines */}
              <div className="lg:col-span-5 bg-white border border-slate-150 p-6 md:p-8 rounded-2xl shadow-sm self-stretch flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
                    <Sparkles className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#1E293B]">
                      Patient Preparation Rule
                    </h4>
                  </div>
                  <p className="font-sans text-xs md:text-sm text-[#64748B] leading-relaxed mt-4">
                    {steps[activeStep].patientRole}
                  </p>
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 mt-6 flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">
                      Sterile & Pain-Free Guarantee
                    </span>
                    <p className="text-[11px] text-emerald-800 leading-normal mt-0.5">
                      All diagnostic mapping, models, and handpieces are sterilized inside vacuum packs under EN-13060 medical codes.
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
