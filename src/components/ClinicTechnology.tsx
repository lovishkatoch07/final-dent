/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Monitor, Zap, Activity, Cpu, CheckCircle2 } from 'lucide-react';

interface TechItem {
  id: string;
  name: string;
  tag: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  spec: { label: string; value: string }[];
}

export default function ClinicTechnology() {
  const [activeTechId, setActiveTechId] = useState('tech1');

  const technologies: TechItem[] = [
    {
      id: 'tech1',
      name: 'Class-B Autoclave Sterilization Unit',
      tag: 'SAFETY & SANITIZATION',
      icon: <Shield className="w-5 h-5 text-emerald-600" />,
      tagline: 'European gold-standard multi-vacuum dental sterilization systems.',
      description: 'We prioritize safety above everything else. Our clinic uses European Class-B vacuum autoclave technology that sterilizes dental surgical tools under high pressures to eliminate 100% of bacterial pathogens, spores, and viruses.',
      benefits: [
        'Exceeds standard WHO dental hygiene regulations',
        'Physical printout records logged for every sterilization cycle',
        'Chemical indicators placed in individual instrument packs'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600&h=450',
      spec: [
        { label: 'Standard', value: 'EN 13060 Class-B' },
        { label: 'Cycle Registry', value: 'Automatic Digital Microprinter' },
        { label: 'Safety Log', value: 'Daily Verification Protocols' }
      ]
    },
    {
      id: 'tech2',
      name: 'High-Definition Intraoral Digital Cameras',
      tag: 'REAL-TIME DIAGNOSTICS',
      icon: <Monitor className="w-5 h-5 text-[#1F4E79]" />,
      tagline: 'See what the doctor sees instantly on overhead dental display monitor.',
      description: 'No more confusing hand-drawn sketches or technical jargon. Our intraoral cameras glide effortlessly inside your mouth, capturing crystal clear 1080p high-definition live video feeds and close-ups of specific micro-cavities, cracks, or enamel wear.',
      benefits: [
        '100% transparent diagnostics with zero guesswork',
        'Helps patients capture visual evidence for insurance claims',
        'Precision tracking of pre-treatment and post-treatment results'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1629807501173-639c2a13d4d1?auto=format&fit=crop&q=80&w=600&h=450',
      spec: [
        { label: 'Resolution', value: 'Full HD 1080p Macro Lens' },
        { label: 'Illumination', value: '6x Circular Cool-LED Ring' },
        { label: 'Capture Mode', value: 'Direct Footpedal Video Snap' }
      ]
    },
    {
      id: 'tech3',
      name: 'Intelligent Rotary Endo Motors',
      tag: 'PAIN-FREE ROOT CANALS',
      icon: <Zap className="w-5 h-5 text-[#36B6C9]" />,
      tagline: 'Silent, high-speed computerized rotary systems for single-sitting root canals.',
      description: 'Gone are the days of manual, noisy hand-filing that makes patients tense up. Dr. Manik Gupta utilizes computerized rotary files that safely adapt their rotation torque depending on root-canal depth, resulting in pain-free, sterile, and rapid results.',
      benefits: [
        'Cleans micro-canals with 5x higher accuracy on teeth corners',
        'Saves time by completing entire root canals in a single visit',
        'Gentle and continuous file motion reduces tooth pressure'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1513224502586-d1e602410265?auto=format&fit=crop&q=80&w=600&h=450',
      spec: [
        { label: 'Torque Control', value: 'Auto-Reverse safety feedback' },
        { label: 'Operating Speed', value: 'Silent brushless DC induction' },
        { label: 'Precision', value: 'Built-in multi-frequency apex locator' }
      ]
    },
    {
      id: 'tech4',
      name: 'Ultra-Low Dose Digital RVG X-Rays',
      tag: 'DIGITAL IMAGING & SPEED',
      icon: <Cpu className="w-5 h-5 text-[#1F4E79]" />,
      tagline: '90% lower radiation exposure than traditional film X-rays.',
      description: 'Get immediate high-contrast diagnostic imagery on screen within seconds without harsh environmental chemical film processing. RVG sensors allow the principal dentist to zoom, color-analyze, and measure bone density with millimeter level precision.',
      benefits: [
        'Minimal safety radiation limits appropriate for kids and seniors',
        'Perfect diagnosis mapping for implants and deep wisdom extractions',
        'Instant digital record sharing'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=600&h=450',
      spec: [
        { label: 'Exposure Reduction', value: 'Up to 90% versus film' },
        { label: 'Capture Time', value: 'Under 2 seconds for full display' },
        { label: 'Sensor Type', value: 'Active Pixel CMOS RVG Sensor' }
      ]
    }
  ];

  const activeTech = technologies.find((t) => t.id === activeTechId) || technologies[0];

  return (
    <section id="technology" className="py-24 bg-gradient-to-b from-[#F5F7FA] to-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E79] bg-blue-50 px-3.5 py-1.5 rounded-full inline-block">
            CLINICAL EXCELLENCE
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-[#1E293B] mt-4 tracking-tight leading-tight">
            Advanced Technology Hub
          </h2>
          <p className="font-sans text-base text-[#64748B] mt-4">
            We invest in state-of-the-art dental equipment to achieve pain-free delivery, surgical precision, and absolute hygiene for patients in Jammu.
          </p>
        </div>

        {/* Outer Tech Display Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive Navigation Buttons */}
          <div className="lg:col-span-4 flex flex-col space-y-3.5 justify-center">
            {technologies.map((tech) => (
              <button
                key={tech.id}
                onClick={() => setActiveTechId(tech.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 flex items-center space-x-4 border cursor-pointer ${
                  activeTechId === tech.id
                    ? 'bg-white border-[#1F4E79] shadow-md scale-[1.02] z-10'
                    : 'bg-white/40 hover:bg-white border-transparent hover:border-slate-100 hover:shadow-xs'
                }`}
              >
                <div className={`p-3 rounded-xl transition-all duration-300 ${
                  activeTechId === tech.id ? 'bg-[#1F4E79] text-white' : 'bg-[#E1EAF4] text-[#1F4E79]'
                }`}>
                  {tech.icon}
                </div>
                <div>
                  <span className="text-[10px] font-black text-[#36B6C9] uppercase tracking-wider block">
                    {tech.tag}
                  </span>
                  <h4 className="font-sans font-bold text-sm text-[#1E293B] mt-0.5 leading-tight">
                    {tech.name}
                  </h4>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Immersive Tech Showcase with Animation */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col justify-between overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTechId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                
                {/* Tech specifications text details */}
                <div className="md:col-span-7 space-y-5">
                  <span className="text-[11px] font-bold text-[#1F4E79] bg-blue-50 px-3 py-1 rounded-sm uppercase tracking-widest inline-block">
                    {activeTech.tag}
                  </span>
                  
                  <h3 className="font-sans font-bold text-2xl md:text-3xl text-[#1E293B] leading-tight">
                    {activeTech.name}
                  </h3>

                  <p className="text-sm font-bold text-[#1F4E79] italic leading-snug">
                    "{activeTech.tagline}"
                  </p>

                  <p className="font-sans text-xs md:text-sm text-[#64748B] leading-relaxed">
                    {activeTech.description}
                  </p>

                  {/* Bullet Benefits list */}
                  <div className="space-y-2 pt-2">
                    {activeTech.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-[#1E293B] font-medium leading-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech image & specification values */}
                <div className="md:col-span-5 space-y-6">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 bg-slate-50">
                    <img
                      src={activeTech.imageUrl}
                      alt={activeTech.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Specs Table Banner */}
                  <div className="bg-[#F5F7FA] p-4.5 rounded-xl border border-slate-150 space-y-2">
                    <span className="text-[10px] font-extrabold text-[#64748B] uppercase tracking-wider block border-b border-slate-200 pb-1.5 mb-2">
                      Technical Benchmarks:
                    </span>
                    {activeTech.spec.map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-[11px] leading-none">
                        <span className="text-[#64748B] font-bold">{item.label}</span>
                        <span className="text-[#1F4E79] font-black uppercase tracking-wider">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Safety standards callout footer banner */}
        <div className="mt-16 bg-[#1F4E79] rounded-2xl p-6 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="font-sans font-bold text-lg md:text-xl">Zero Compromise Sterilization Standards</h4>
            <p className="text-xs text-slate-100 mt-1 max-w-[650px]">
              Every dental tool is single-use or high-vacuum autoclaved inside separate chemical indicator bags, unwrapped right in front of you. Sterile, safe, and transparent dental care in Jammu.
            </p>
          </div>
          <div className="shrink-0 bg-[#36B6C9] hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-lg shadow-md transition-colors relative z-10">
            Certified Care Ecosystem
          </div>
          
          {/* Accent decoration overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial-gradient from-cyan-400/10 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
