/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Smile,
  Sparkles,
  ShieldAlert,
  Award,
  Heart,
  Activity,
  Baby,
  Cpu,
  Bookmark,
  ChevronRight,
  Info,
  Calendar,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Service } from '../types';

interface ServicesProps {
  onBookClick: (treatmentName?: string) => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const servicesData: Service[] = [
    {
      id: 'implants',
      iconName: 'Award',
      title: 'Dental Implants',
      description: 'Permanent, premium and stable solutions for missing teeth. Replace lost roots and support pristine cosmetic zirconia teeth naturally.',
      benefits: [
        'Natural appearance and bite strength',
        'Preserves adjacent teeth and jawbone structural safety',
        'Premium high-grade titanium and metal-free zirconium implants',
        'Lifetime warranty on biocompatibility',
      ],
      duration: '2-3 Sessions',
    },
    {
      id: 'whitening',
      iconName: 'Sparkles',
      title: 'Teeth Whitening',
      description: 'Get up to 8 shades lighter in just 45 minutes using advanced laser activation safely. Remove deep medical and food stains immediately.',
      benefits: [
        'Instant clinical-grade results',
        'Formulated for zero post-care tooth sensitivity',
        'Removes nicotine, coffee, age-related, and extrinsic stains',
        'Includes take-home enamel reinforcement kit',
      ],
      duration: '45-60 Minutes',
    },
    {
      id: 'makeover',
      iconName: 'Smile',
      title: 'Smile Makeovers',
      description: 'Tailored cosmetic orchestrations merging facial symmetry, gum contouring, and alignment for your unique physical facial architecture.',
      benefits: [
        'Uses advanced dental visual mockups before treatment',
        'Tailored shape, shade, and alignment combinations',
        'Merges gum lasers with modern veneers',
        'Boosts clinical confidence permanently',
      ],
      duration: '2-3 Visits',
    },
    {
      id: 'rct',
      iconName: 'Activity',
      title: 'Root Canal Treatment',
      description: 'Virtually pain-free single-sitting computerized root canal therapy designed to save deeply diseased, traumatized, or painful teeth.',
      benefits: [
        '98% single-visit resolution rate',
        'Microscopic accuracy preventing secondary infection',
        'High flex nickel-titanium computerized rotary tools used',
        'Painless computer-controlled electronic anesthesia',
      ],
      duration: '1 Session',
    },
    {
      id: 'crowns',
      iconName: 'Bookmark',
      title: 'Zirconia Crowns',
      description: 'Unmatched structural resilience and natural translucency. Crafted using precise CAD/CAM 3D milling for an exact personalized bite fit.',
      benefits: [
        'Metal-free biocompatibility - zero dark lines at gum borders',
        'Virtually indestructible with natural high polish',
        'Custom 3D-milled ceramic matching exact surrounding teeth',
        'Up to 15 years premium structural seal warranty',
      ],
      duration: '2 Days',
    },
    {
      id: 'veneers',
      iconName: 'Heart',
      title: 'Dental Veneers',
      description: 'Razor-thin custom-made porcelain or composite shells bonded to anterior tooth faces to mask severe discoloration or minor chips.',
      benefits: [
        'Ultra-conservative: minimal natural tooth enamel preparation required',
        'Highly resistant to tea, coffee, and nicotine stains',
        'Instant cosmetic spacing, length and alignment adjustment',
      ],
      duration: '2 Sessions',
    },
    {
      id: 'ortho',
      iconName: 'Cpu',
      title: 'Orthodontics & Aligners',
      description: 'Straighten crooked teeth comfortably using advanced state-of-the-art clear aligners or premium mini-profile luxury ceramic braces.',
      benefits: [
        'Unobtrusive, transparent aligners custom milled for adults',
        'Shorter correction terms than traditional wire brackets',
        'Preserves perfect speech clarity and normal oral health routine',
      ],
      duration: '6-12 Months',
    },
    {
      id: 'pediat',
      iconName: 'Baby',
      title: 'Children Dentistry',
      description: 'Gentle, pediatric-focused preventative care. Fluoride seals, cavity blocks, and comfortable stress-free clinical experiences.',
      benefits: [
        'Anxiety-free friendly dentist speech techniques',
        'Fluoride treatments strengthening young enamel',
        'Pain-free preventative cavity protective sealants',
      ],
      duration: 'Ongoing',
    },
    {
      id: 'rehab',
      iconName: 'ShieldAlert',
      title: 'Full Mouth Rehabilitation',
      description: 'Comprehensive restorative engineering pairing implants, crowns, and muscle aligners to resolve severe attrition, pain, or widespread tooth loss.',
      benefits: [
        'Restores original facial vertical dimensions and lip support',
        'Corrects severe jaw attrition and TMJ bite soreness',
        'Combines cosmetic veneers and supportive bridge systems',
      ],
      duration: 'Custom schedule',
    },
  ];

  // Helper function to resolve icon from string
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#1F4E79]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#36B6C9]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-[#1F4E79]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#36B6C9]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-rose-500" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-emerald-600" />;
      case 'Baby':
        return <Baby className="w-6 h-6 text-sky-500" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#4F81BD]" />;
      default:
        return <Bookmark className="w-6 h-6 text-[#1F4E79]" />;
    }
  };

  return (
    <>
      <section id="services" className="py-24 bg-white relative">
      <div className="max-w-(--size-max-w-1200px) mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E79] bg-blue-50 px-3.5 py-1.5 rounded-full inline-block">
              OUR SPECIALTIES
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-5xl text-[#1E293B] mt-4 tracking-tight">
              Premium Dental Services In Jammu
            </h2>
          </div>
          <p className="font-sans text-base text-[#64748B] max-w-md md:mt-0 leading-relaxed font-normal">
            We deliver state-of-the-art procedures under strict sterilization matching top global standards. Tap any card below to reveal diagnostic details.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative bg-[#F5F7FA] hover:bg-white rounded-2xl p-7 border border-slate-100 hover:border-[#1F4E79]/25 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/50 flex items-center justify-center shadow-xs transition-colors group-hover:bg-[#1F4E79]/5">
                    {renderIcon(service.iconName)}
                  </div>
                  {service.duration && (
                    <span className="text-[11px] font-bold text-[#64748B] bg-slate-200/50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {service.duration}
                    </span>
                  )}
                </div>

                <h3 className="font-sans font-bold text-xl text-[#1E293B] mt-6 group-hover:text-[#1F4E79] transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-[#64748B] font-normal leading-relaxed mt-3">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/40 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="font-sans text-xs font-bold uppercase tracking-wider text-[#1F4E79] group-hover:text-[#36B6C9] flex items-center space-x-1 hover:underline cursor-pointer"
                >
                  <span>Learn Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onBookClick(service.title)}
                  className="font-sans text-xs font-bold uppercase tracking-wider bg-white py-1.5 px-3 rounded-lg border border-slate-200 hover:bg-[#1F4E79] hover:text-white transition-all cursor-pointer"
                >
                  Book
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All / Trust Footnote */}
        <div className="mt-16 text-center">
          <p className="text-sm font-semibold text-[#64748B]">
            All treatments are preceded by an exhaustive digital diagnostic consultation with{' '}
            <span className="text-[#1F4E79] font-bold">Dr. Manik Gupta</span>.
          </p>
        </div>

      </div>
    </section>

      {/* Service Details Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900"
            />
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-2xl w-full max-w-[550px] overflow-hidden shadow-2xl relative z-10"
            >
              {/* Header block */}
              <div className="bg-[#1F4E79] p-6 text-white flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    {renderIcon(selectedService.iconName)}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-lg leading-none">{selectedService.title}</h4>
                    <span className="text-[10px] text-cyan-200 uppercase tracking-widest font-bold mt-1 inline-block">
                      Diagnostic Insights
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  aria-label="Close Service Details"
                  className="p-1.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h5 className="text-xs font-black text-[#1E293B] uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                    <Info className="w-4 h-4 text-[#36B6C9]" />
                    <span>Clinical Profile</span>
                  </h5>
                  <p className="font-sans text-sm text-[#64748B] leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                {selectedService.benefits && (
                  <div>
                    <h5 className="text-xs font-black text-[#1E293B] uppercase tracking-wider mb-3">
                      Key Treatment Benefits
                    </h5>
                    <ul className="space-y-2.5">
                      {selectedService.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-sm text-[#1E293B]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#36B6C9] mt-2 shrink-0" />
                          <span className="leading-tight">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center space-x-2 text-[#64748B]">
                    <Calendar className="w-4.5 h-4.5 text-[#36B6C9]" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Expected Term: <span className="text-[#1E293B]">{selectedService.duration}</span>
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      const name = selectedService.title;
                      setSelectedService(null);
                      onBookClick(name);
                    }}
                    className="px-5 py-2.5 bg-[#1F4E79] hover:bg-[#36B6C9] text-white text-xs font-bold rounded-lg uppercase tracking-wider cursor-pointer shadow-sm"
                  >
                    Select & Book Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
