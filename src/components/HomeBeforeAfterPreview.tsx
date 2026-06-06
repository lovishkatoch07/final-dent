/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HomeBeforeAfterPreviewProps {
  onNavigate: (page: string) => void;
}

export default function HomeBeforeAfterPreview({ onNavigate }: HomeBeforeAfterPreviewProps) {
  const previewCases = [
    {
      id: 'case1',
      title: 'Full Mouth Ceramic Makeover',
      before: '/before_makeover.png',
      after: '/makeover.png',
      label: 'Gaps & Alignment Corrected',
      beforeClass: 'sepia-[0.15] saturate-120 brightness-[0.92] contrast-[0.98]',
      afterClass: 'brightness-[1.05] contrast-[1.03]'
    },
    {
      id: 'case2',
      title: 'Advanced Titanium Implants',
      before: '/implants.png',
      after: '/implants.png',
      label: 'Molar Functionality Restored',
      beforeClass: 'brightness-90 contrast-95 saturate-[0.92]',
      afterClass: 'brightness-[1.02] contrast-[1.02]'
    },
    {
      id: 'case3',
      title: 'Laser Teeth Whitening Shade 8+',
      before: '/before_whitening.png',
      after: '/whitening.png',
      label: 'Deep Tea & Nicotine Stains Erased',
      beforeClass: 'sepia-[0.38] saturate-[1.75] brightness-[0.80] contrast-[0.95]',
      afterClass: 'brightness-[1.10] saturate-[0.88] contrast-[1.05]'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C9] bg-cyan-50 px-3.5 py-1.5 rounded-full inline-block">
            SMILE GALLERY PREVIEW
          </span>
          <h2 className="font-sans font-black text-3xl md:text-4xl text-[#1E293B] mt-4 tracking-tight leading-tight">
            Featured Smile Transformations
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#64748B] mt-3">
            Real patient results completed by Dr. Manik Gupta in our Jammu clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6.5">
          {previewCases.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-100/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300"
            >
              {/* Graphic side-by-side or overlapping images */}
              <div className="grid grid-cols-2 bg-slate-100 aspect-[4/3] relative">
                <div className="relative overflow-hidden group">
                  <img loading="lazy" decoding="async"
                    src={item.before}
                    alt="Before Treatment"
                    className={`w-full h-full object-cover filter ${item.beforeClass}`}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-slate-900/70 text-white font-bold text-[9px] uppercase tracking-wider py-1 px-2 rounded-md">
                    Before
                  </div>
                </div>

                <div className="relative overflow-hidden group border-l border-white/40">
                  <img loading="lazy" decoding="async"
                    src={item.after}
                    alt="After Treatment"
                    className={`w-full h-full object-cover filter ${item.afterClass}`}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 bg-emerald-600/90 text-white font-bold text-[9px] uppercase tracking-wider py-1 px-2 rounded-md">
                    After
                  </div>
                </div>
              </div>

              {/* Title & metrics tags */}
              <div className="p-6 md:p-8 space-y-2">
                <span className="text-[10px] font-black uppercase text-emerald-600 tracking-wider block bg-emerald-50 px-2 py-0.5 rounded w-fit">
                  {item.label}
                </span>
                <h3 className="font-sans font-extrabold text-sm md:text-base text-[#1E293B] leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('gallery')}
            className="px-6 py-4 bg-[#1F4E79] text-white hover:bg-[#4F81BD] hover:-translate-y-0.5 active:translate-y-0 font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 inline-flex items-center space-x-2 cursor-pointer shadow-md hover:shadow-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1F4E79] focus-visible:ring-offset-2"
          >
            <span>Interactive Smile Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

