/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Sparkles, Smile, ShieldAlert, Cpu, Layers, ArrowRight } from 'lucide-react';

interface HomeFeaturedServicesProps {
  onNavigate: (page: string) => void;
}

export default function HomeFeaturedServices({ onNavigate }: HomeFeaturedServicesProps) {
  const services = [
    {
      key: 'service-implants',
      icon: <Target className="w-4 h-4 text-[#1F4E79]" />,
      image: '/implants.png',
      title: 'Dental Implants',
      desc: 'Permanent titanium anchors designed to replace lost teeth roots, recovering native bite force and visual realism.',
    },
    {
      key: 'service-whitening',
      icon: <Sparkles className="w-4 h-4 text-[#36B6C9]" />,
      image: '/whitening.png',
      title: 'Teeth Whitening',
      desc: 'Clinical power-laser bleach system to eliminate deep enamel coffee, tea, and aging stains safely.',
    },
    {
      key: 'service-makeover',
      icon: <Smile className="w-4 h-4 text-emerald-600" />,
      image: '/makeover.png',
      title: 'Smile Makeovers',
      desc: 'Bespoke integration of porcelain veneers, alignment modifications, and contour mapping for perfect aesthetics.',
    },
    {
      key: 'service-rct',
      icon: <ShieldAlert className="w-4 h-4 text-rose-500" />,
      image: '/rct.png',
      title: 'Root Canal Treatment',
      desc: 'Highly precise rotary single-sitting root treatments to eliminate infection stress and save natural molars.',
    },
    {
      key: 'service-crowns',
      icon: <Cpu className="w-4 h-4 text-indigo-600" />,
      image: '/crowns.png',
      title: 'Zirconia Crowns',
      desc: 'Strong CAD/CAM customized crowns offering unmatched damage protection and lifelike light transmission.',
    },
    {
      key: 'service-aligners',
      icon: <Layers className="w-4 h-4 text-amber-600" />,
      image: '/aligners.png',
      title: 'Braces & Aligners',
      desc: 'Clear teeth straightening options for teens and adults to repair crowded profiles comfortably.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C9] bg-cyan-100/60 px-3.5 py-1.5 rounded-full">
            CLINICAL SPECIALTIES
          </span>
          <h2 className="font-sans font-black text-3xl md:text-4xl text-[#1E293B] mt-4 tracking-tight leading-tight">
            Our Featured Treatments
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#64748B] mt-3">
            Click into any specialized medical service down to analyze diagnostic timelines, custom benefits, and full options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div
              key={item.key}
              className="bg-white border border-slate-100/80 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[#1F4E79]/20 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* 16:9 Image at top */}
                <div className="aspect-video w-full overflow-hidden bg-slate-100 relative">
                  <img loading="lazy" decoding="async"
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle float indicator */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1.5 rounded-lg text-[10px] font-black text-[#1E293B] border border-slate-100 uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                    {item.icon}
                    <span>Service</span>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-3">
                  <h3 className="font-sans font-black text-base md:text-lg text-[#1E293B] group-hover:text-[#1F4E79] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 border-t border-slate-50">
                <button
                  onClick={() => onNavigate(item.key)}
                  className="w-full py-3.5 bg-[#1F4E79]/5 text-[#1F4E79] hover:bg-[#1F4E79] hover:text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors duration-300 inline-flex items-center justify-center space-x-1.5 cursor-pointer leading-none focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1F4E79] focus-visible:ring-offset-1"
                >
                  <span>Learn More Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

