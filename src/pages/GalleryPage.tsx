/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight, CheckCircle, Sparkles, Home, ChevronRight, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
  onBookClick: (treatmentName?: string) => void;
}

export default function GalleryPage({ onNavigate, onBookClick }: GalleryPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedCaseId, setSelectedCaseId] = useState('case1');

  const cases = [
    {
      id: 'case1',
      title: 'Smile Re-spacing & Veneering',
      category: 'Smile Makeover',
      abbreviation: 'SM',
      beforeUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=650&h=450',
      afterUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=650&h=450',
      diagnostic: 'Mild anterior dental crowding, lateral spacing asymmetry, and deep extrinsic discoloration.',
      procedure: 'Full aesthetic Digital Smile Design mapping, completed with 6 custom artisan glass veneers.',
      beforeClass: 'sepia-[0.15] saturate-120 brightness-[0.92] contrast-[0.98]',
      afterClass: 'brightness-[1.05] contrast-[1.03]'
    },
    {
      id: 'case2',
      title: 'Coffee & Tobacco Stain Elimination',
      category: 'Teeth Whitening',
      abbreviation: 'TW',
      beforeUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=650&h=450',
      afterUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=650&h=450',
      diagnostic: 'Advanced intrinsic yellow staining with heavy coffee residue and tartar margins.',
      procedure: 'Deep clinical laser micro-bleaching system yielding up to Shade 8+ scale improvement.',
      beforeClass: 'sepia-[0.42] saturate-[1.8] brightness-[0.78] contrast-[0.95]',
      afterClass: 'brightness-[1.12] saturate-[0.85] contrast-[1.05]'
    },
    {
      id: 'case3',
      title: 'Incisor Restorative Crown Capping',
      category: 'Zirconia Crowns',
      abbreviation: 'ZC',
      beforeUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=650&h=450',
      afterUrl: 'https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&q=80&w=650&h=450',
      diagnostic: 'Extensive dental caries resulting in complete crown cleavage post root treatment.',
      procedure: 'Constructing high-strength biocompatible zirconia core, luting precise custom translucent overlayer.',
      beforeClass: 'brightness-[0.88] saturate-[0.95]',
      afterClass: 'brightness-[1.02] contrast-[1.02]'
    },
    {
      id: 'case4',
      title: 'Molar Implant Post Installation',
      category: 'Dental Implants',
      abbreviation: 'IM',
      beforeUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=650&h=450',
      afterUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=650&h=450',
      diagnostic: 'Lower molar missing for 1.5 years triggering adjacent tooth shifting and ridge atrophy.',
      procedure: 'CBCT bone modeling, titanium implant placement, capped with state-of-the-art precision CAD/CAM crown.',
      beforeClass: 'brightness-[0.95] contrast-[1.02]',
      afterClass: 'brightness-[1.04] contrast-[1.02]'
    }
  ];

  const currentCase = cases.find((c) => c.id === selectedCaseId) || cases[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="py-16 bg-[#1F4E79] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#1E293B] to-[#1F4E79] opacity-95" />
        <div className="relative max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold text-[#36B6C9] bg-white/10 px-3 py-1 rounded-md uppercase tracking-wider">
            Surgical Logbooks
          </span>
          <h1 className="font-sans font-black text-3xl md:text-5xl text-white mt-3 tracking-tight">
            Smile Transformations
          </h1>
          <p className="text-slate-100 text-sm md:text-base max-w-lg mx-auto mt-4 leading-relaxed">
            Drag the handle to observe the surgical results produced by Dr. Manik Gupta. Clean, raw unretouched photos of real dental cases.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-100 py-3.5 px-6">
        <div className="max-w-5xl mx-auto flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#64748B]">
          <button onClick={() => onNavigate('home')} className="hover:text-[#1F4E79] cursor-pointer">
            Home
          </button>
          <span>/</span>
          <span className="text-[#1E293B]">Before & After Gallery</span>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side comparitive slider */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div
                ref={containerRef}
                className="relative w-full max-w-[620px] aspect-[4/3] rounded-3xl overflow-hidden select-none border-4 border-slate-150 shadow-2xl bg-neutral-100 cursor-ew-resize"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                  handleMove(e.clientX);
                }}
                onTouchStart={(e) => {
                  setIsDragging(true);
                  if (e.touches[0]) handleMove(e.touches[0].clientX);
                }}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                <img loading="lazy" decoding="async"
                  src={currentCase.afterUrl}
                  alt="Post surgical result"
                  className={`absolute inset-0 w-full h-full object-cover pointer-events-none filter ${currentCase.afterClass || ''}`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute right-4 bottom-4 bg-emerald-600 text-white px-3 py-1 text-xs font-bold uppercase rounded z-10-none">
                  AFTER Treatment
                </div>

                <div
                  className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="absolute inset-0 w-[550px] sm:w-[620px] lg:w-[680px] h-full">
                    <img loading="lazy" decoding="async"
                      src={currentCase.beforeUrl}
                      alt="Pre diagnosis teeth"
                      className={`w-full h-full object-cover pointer-events-none filter ${currentCase.beforeClass || ''}`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute left-4 bottom-4 bg-slate-900/90 text-white px-3 py-1 text-xs font-bold uppercase rounded z-10-none">
                    BEFORE Treatment
                  </div>
                </div>

                <div
                  className="absolute inset-y-0 w-1 bg-white shadow-xl pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center border border-[#1F4E79]">
                    <ArrowLeftRight className="w-4.5 h-4.5 text-[#1F4E79]" />
                  </div>
                </div>

                {!isDragging && (
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 bg-[#1E293B]/90 text-white text-[9px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full z-10 animate-pulse flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                    <span>Slide left/right</span>
                  </div>
                )}
              </div>

              <span className="text-xs text-[#64748B] font-bold mt-4 uppercase tracking-wider flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Original Jammu Patient Records (Elite Smile)</span>
              </span>
            </div>

            {/* Right side case selectors */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#1E293B]">Clinical Selectors</h3>
                <p className="text-xs text-[#64748B] mt-1">Tap a card below to load the diagnosis on the interactive slider.</p>
              </div>

              <div className="flex flex-col space-y-3">
                {cases.map((cs) => (
                  <button
                    key={cs.id}
                    onClick={() => {
                      setSelectedCaseId(cs.id);
                      setSliderPosition(50);
                    }}
                    className={`p-3.5 rounded-xl border text-left flex items-center space-x-3 transition cursor-pointer ${
                      selectedCaseId === cs.id
                        ? 'bg-blue-50/50 border-[#1F4E79] scale-102 shadow-xs'
                        : 'bg-white border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <div className={`p-2 rounded-lg text-[10px] font-black ${
                      selectedCaseId === cs.id ? 'bg-[#1F4E79] text-white' : 'bg-slate-100 text-[#64748B]'
                    }`}>
                      {cs.abbreviation}
                    </div>
                    <div>
                      <span className="text-[8px] font-bold text-[#36B6C9] uppercase block">{cs.category}</span>
                      <span className="font-bold text-xs md:text-sm text-[#1E293B] block leading-tight">{cs.title}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Diagnosis detail board */}
              <div className="p-5 bg-slate-50 border rounded-2xl text-xs space-y-2.5">
                <div>
                  <span className="font-black text-[9px] text-[#1F4E79] uppercase tracking-wider block">Initial Diagnosis:</span>
                  <p className="text-[#64748B] mt-0.5 leading-relaxed font-semibold">{currentCase.diagnostic}</p>
                </div>
                <div className="pt-2 border-t border-slate-250">
                  <span className="font-black text-[9px] text-emerald-800 uppercase tracking-wider block">Procedure Framework:</span>
                  <p className="text-[#30553A] mt-0.5 leading-relaxed font-bold">{currentCase.procedure}</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Booking CTA section */}
      <section className="py-16 md:py-24 bg-[#1F4E79] text-white text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
          <h2 className="font-sans font-black text-2xl md:text-3xl">Achieve Your Own Ideal Smile Profile</h2>
          <p className="text-slate-100 text-xs md:text-sm leading-relaxed max-w-md mx-auto">
            Book a diagnostic consultation with Dr. Manik Gupta and review custom plaster mockup options.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-[#36B6C9] text-white hover:bg-cyan-400 font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-md cursor-pointer inline-block"
            >
              Book Clinical Diagnosis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

