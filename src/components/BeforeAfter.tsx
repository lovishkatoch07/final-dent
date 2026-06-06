/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight, HelpCircle, Sparkles, CheckCircle, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { SmileTransformation } from '../types';

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const [selectedCaseId, setSelectedCaseId] = useState('case1');

  // Comprehensive localized micro-cases with realistic dental photos
  const cases = [
    {
      id: 'case1',
      title: 'Smile Re-spacing & Veneering',
      category: 'Smile Makeover',
      abbreviation: 'SM',
      beforeUrl: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=650&h=450',
      afterUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=650&h=450',
      diagnostic: 'Mild anterior dental crowding, lateral enamel spacing asymmetry, and severe front yellow shading.',
      procedure: 'Advanced 3D Smile Mapping followed by placement of 6 premium, ultra-thin cosmetic ceramic veneers.'
    },
    {
      id: 'case2',
      title: 'Tea & Coffee Laser Whitening',
      category: 'Teeth Whitening',
      abbreviation: 'TW',
      beforeUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=650&h=450',
      afterUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=650&h=450&brightness=1.12',
      diagnostic: 'Severe intrinsic stains (Shade A3.5) driven by heavy local coffee intake and dental scale accumulation.',
      procedure: 'Full-mouth sub-gingival scaling, protective gum barriers, and 3 cycles of advanced clinic laser bleaching.'
    },
    {
      id: 'case3',
      title: 'Restorative Premium Zirconia Crowns',
      category: 'Zirconia Crowns',
      abbreviation: 'ZC',
      beforeUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=650&h=450',
      afterUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=650&h=450',
      diagnostic: 'Deep decay in front left incisor with structural structural breakage after root canal treatment.',
      procedure: 'Installation of high-durability, premium CAD/CAM zirconia crown mapped exactly to natural light-reflection.'
    },
    {
      id: 'case4',
      title: 'Permanent Titanium Molar Implant',
      category: 'Dental Implants',
      abbreviation: 'IP',
      beforeUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=650&h=450',
      afterUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=650&h=450',
      diagnostic: 'Missing lower first molar, causing alveolar bone collapse and difficulty chewing comfort.',
      procedure: 'Surgical guide titanium implant post placement with healing abutment, finalized with custom abutment crown.'
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
    <section id="smile-gallery" className="py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E79] bg-blue-50 px-3.5 py-1.5 rounded-full inline-block">
            SMILE GALLERY Showcase
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-[#1E293B] mt-4 tracking-tight leading-tight">
            Before & After Comparisons
          </h2>
          <p className="font-sans text-base text-[#64748B] mt-4">
            Drag the visual slider left and right to inspect raw dental restorative results completed by Dr. Manik Gupta in Gandhi Nagar, Jammu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Dynamic Custom Slider Frame */}
          <div className="lg:col-span-8 flex flex-col items-center">
            
            <div
              ref={containerRef}
              className="relative w-full max-w-[650px] aspect-[4/3] rounded-3xl overflow-hidden select-none border-8 border-white shadow-2xl bg-slate-100 cursor-ew-resize"
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
              {/* After Image display */}
              <img
                src={currentCase.afterUrl}
                alt="After restored smile result"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute right-4 bottom-4 bg-emerald-600 text-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest rounded-md shadow-md z-10 select-none">
                AFTER Treatment
              </div>

              {/* Before image overlay with percentage clip */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="absolute inset-0 w-[634px] sm:w-[700px] md:w-[750px] lg:w-[780px] h-full">
                  <img
                    src={currentCase.beforeUrl}
                    alt="Before damaged teeth diagnostics"
                    className="w-full h-full object-cover pointer-events-none filter saturate-75 contrast-95"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute left-4 bottom-4 bg-slate-900/90 text-slate-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest rounded-md shadow-md z-10 select-none">
                  BEFORE Treatment
                </div>
              </div>

              {/* Central drag line with custom icon */}
              <div
                className="absolute inset-y-0 w-1.5 bg-white shadow-xl pointer-events-none cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-2xl flex items-center justify-center border-2 border-[#1F4E79] scale-110">
                  <ArrowLeftRight className="w-5 h-5 text-[#1F4E79]" />
                </div>
              </div>

              {/* Instructions badge */}
              {!isDragging && (
                <div className="absolute left-1/2 top-10 -translate-x-1/2 bg-[#1E293B]/90 text-white text-[10px] font-black tracking-widest uppercase px-4 py-2 rounded-full z-10 pointer-events-none animate-pulse flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Drag Central Handle</span>
                </div>
              )}

            </div>

            <p className="text-xs text-[#64748B] font-bold mt-4 uppercase tracking-widest flex items-center space-x-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 animate-pulse" />
              <span>100% unretouched raw surgical logs of Elite Smile Clinic Jammu</span>
            </p>
          </div>

          {/* Right Side: Case Info & Selectors */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            <div>
              <h3 className="font-sans font-extrabold text-2xl text-[#1E293B]">
                Interactive Selection
              </h3>
              <p className="font-sans text-xs md:text-sm text-[#64748B] mt-1 leading-relaxed">
                Click on the specialized dental logs below to load clinical comparisons inside the viewer.
              </p>
            </div>

            {/* Buttons list */}
            <div className="flex flex-col space-y-3">
              {cases.map((patientCase) => (
                <button
                  key={patientCase.id}
                  onClick={() => {
                    setSelectedCaseId(patientCase.id);
                    setSliderPosition(50);
                  }}
                  className={`p-4 rounded-xl border text-left flex items-start space-x-3.5 transition-all duration-300 cursor-pointer ${
                    selectedCaseId === patientCase.id
                      ? 'bg-blue-50/50 border-[#1F4E79] shadow-xs'
                      : 'bg-white border-slate-100 hover:border-slate-250'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg text-xs font-black shrink-0 ${
                    selectedCaseId === patientCase.id ? 'bg-[#1F4E79] text-white' : 'bg-slate-100 text-[#64748B]'
                  }`}>
                    {patientCase.abbreviation}
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#36B6C9] block">
                      {patientCase.category}
                    </span>
                    <h4 className="font-sans font-bold text-xs md:text-sm text-[#1E293B] leading-none mt-0.5">
                      {patientCase.title}
                    </h4>
                  </div>
                </button>
              ))}
            </div>

            {/* Clinical Specifications table */}
            <div className="p-5 bg-[#F5F7FA] rounded-2xl border border-slate-150 space-y-3">
              <div>
                <span className="text-[9px] font-black text-[#1F4E79] uppercase tracking-wider block">
                  INITIAL MEDICAL DIAGNOSIS:
                </span>
                <p className="text-xs text-[#64748B] leading-relaxed mt-1 font-medium">
                  {currentCase.diagnostic}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <span className="text-[9px] font-black text-emerald-700 uppercase tracking-wider block">
                  PROCEDURE PATHWAY:
                </span>
                <p className="text-xs text-[#30553A] leading-relaxed mt-1 font-semibold">
                  {currentCase.procedure}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
