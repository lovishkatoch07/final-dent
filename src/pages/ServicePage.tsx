/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, Calendar, HelpCircle, ChevronRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicePageProps {
  serviceKey: string;
  onNavigate: (page: string) => void;
  onBookClick: (treatmentName?: string) => void;
}

interface ServiceConfig {
  title: string;
  heroText: string;
  imgUrl: string;
  benefits: string[];
  processSteps: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  beforeImage: string;
  afterImage: string;
  expectedTerm: string;
  classification: string;
}

const SERVICES_DATA: Record<string, ServiceConfig> = {
  'service-implants': {
    title: 'Dental Implants Restoration',
    classification: 'Surgical Bio-Restorations',
    heroText: 'Surgically-guided premium titanium and metal-free zirconium root fixtures supporting highly-aesthetic lifelike crowns.',
    imgUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=720&h=480',
    benefits: [
      'Indestructible structural biocompatibility - fuses into natural bone',
      'Protects nearby teeth - avoids grinding down surrounding enamel layers',
      'Restores 100% biting force so you can eat and speak comfortably',
      'Prevents structural alveolar bone collapse and facial contour changes'
    ],
    processSteps: [
      { step: '01', title: '3D Diagnostics & CBCT Scan', desc: 'Detailed bone volume layout mapping to verify implant site stability.' },
      { step: '02', title: 'Implant Post Placement', desc: 'Painless, computer-guided fixture of premium grade-5 titanium root post.' },
      { step: '03', title: 'Osseointegration Phase', desc: 'Natural bone fusing over 3 to 6 months to create an indestructible foundation.' },
      { step: '04', title: 'Custom Zirconia Crown Fitting', desc: 'Secure loading of computerized CAD/CAM milled ceramic teeth.' }
    ],
    faqs: [
      { q: 'Are dental implants painful?', a: 'Not at all. The procedure is performed using computer-controlled painless local anesthesia. Post-operative sensations are managed with simple mild anti-inflammatory tablets.' },
      { q: 'How long do implants last?', a: 'Dental implants are designed to be a permanent, lifetime cosmetic solution with standard oral hygiene and professional 6-month cleaning checks.' }
    ],
    beforeImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=500&h=350',
    afterImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=500&h=350',
    expectedTerm: '3-6 Months total'
  },
  'service-whitening': {
    title: 'Advanced Laser Teeth Whitening',
    classification: 'In-office Laser Bleaching',
    heroText: 'Safely map and brighten dull or yellow-shaded dentin structure up to 8 shades lighter in just 45 minutes.',
    imgUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=720&h=480',
    benefits: [
      'Lifts decades of nicotine, strong tea, coffee, and intrinsic stains safety',
      'Clinical-grade pH-balanced whitening formula protecting gums and pulp',
      'Features advanced post-treatment enamel remineralization coating',
      'Yields direct, professional shade results far outclassing domestic kits'
    ],
    processSteps: [
      { step: '01', title: 'Enamel Scale Mapping', desc: 'Deep plaque removal to ensure uniform laser-gel penetration.' },
      { step: '02', title: 'Gingival Barrier Protection', desc: 'Applying clinical liquid rubber sheet dam to protect soft gums.' },
      { step: '03', title: 'Photodynamic Gel Activation', desc: 'Coating teeth with precise concentrations of bleaching materials.' },
      { step: '04', title: 'Laser Activation cycles', desc: 'Activating bleaching molecules using safe blue light over 3 short cycles.' }
    ],
    faqs: [
      { q: 'Will whitening trigger heavy teeth sensitivity?', a: 'We use premium clinical bleaching compounds formulated with sensitivity-reducing agents. Over 98% of patients undergo whitening with zero post-procedure discomfort.' },
      { q: 'How long can I maintain laser whitening shades?', a: 'Typically 1 to 2 years. We suggest limiting stained beverages (like black tea and coffee) for the first 48 hours for enamel pigmentation stabilization.' }
    ],
    beforeImage: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=500&h=350',
    afterImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=500&h=350&brightness=1.12',
    expectedTerm: '45-60 Minutes'
  },
  'service-makeover': {
    title: 'Cosmetic Smile Makeovers',
    classification: 'Full Mouth Asthetic Re-contouring',
    heroText: 'Design your custom physical facial blueprint aligning laser gum shaping, alignment, and razor-thin veneers.',
    imgUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=720&h=480',
    benefits: [
      'Tailors tooth height, width, and shade proportions to face landmarks',
      'Instantly corrects visible gaps, surface enamel chips, and crowding',
      'Provides customizable preview models using diagnostic wax-ups',
      'Creates a highly-confident, symmetrical, and youthful smile aesthetic'
    ],
    processSteps: [
      { step: '01', title: 'Diagnostic Facial Mockup', desc: 'Capturing photo proportions to map individual golden ratios.' },
      { step: '02', title: 'Conservative Enamel Prep', desc: 'Precision aesthetic tooth contouring, saving natural pulp structures.' },
      { step: '03', title: 'Provisional Mock Testing', desc: 'Wearing comfortable temporary smile mockups to trial appearance.' },
      { step: '04', title: 'Veneer Fusion & Bonding', desc: 'Microscopic polymer cementation of bespoke, high-polish porcelain veneers.' }
    ],
    faqs: [
      { q: 'How many visits are vital for a Smile Makeover?', a: 'Typically completed in 2 to 3 clinic visits over a fortnight. This permits ideal laboratory handcrafting of porcelain veneers.' },
      { q: 'Are dental veneers permanent?', a: 'Ceramic veneers are highly durable, lasting between 10 to 15 years with routine care. Composite veneers have slightly shorter lifespans.' }
    ],
    beforeImage: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=500&h=350',
    afterImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=500&h=350',
    expectedTerm: '2-3 Visits total'
  },
  'service-rct': {
    title: 'Single-Sitting Root Canal',
    classification: 'Microscopic Endodontic Solutions',
    heroText: 'Save decayed, infected, or damaged natural tooth roots in a single comfortable visit with motorized precision.',
    imgUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=720&h=480',
    benefits: [
      'Virtually pain-free - uses advanced computerized electronic anesthesia',
      'Cleans dental root canals microscopically to prevent any secondary infections',
      'Reduces chair sessions - solves nerve infections in a single sitting',
      'Saves natural tooth structures from extraction and preserves biting'
    ],
    processSteps: [
      { step: '01', title: 'Digital X-Ray Localization', desc: 'High-contrast imaging to locate precise roots infection ranges.' },
      { step: '02', title: 'Rubber Dam Isolation', desc: 'Ensuring aseptic isolated working field to secure canals.' },
      { step: '03', title: 'Computerized rotary extraction', desc: 'Eliminating damaged nerve pulp using computerized rotary systems.' },
      { step: '04', title: 'Canals Sealing and Core', desc: 'Filling canals with sterile bio-compounds followed by structural support.' }
    ],
    faqs: [
      { q: 'Is single-visit RCT safe?', a: 'Yes. With modern apex-locating electronic equipment and high-flex rotary tools, a single-sitting RCT carries a high safety and resolution track records.' },
      { q: 'Will I require a crown after an RCT?', a: 'While the root is infection-free, a treated tooth is structurally fragile and easily fractures. A capping crown yields long-term dental preservation.' }
    ],
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=500&h=350',
    afterImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=500&h=350',
    expectedTerm: '1 Session (45 Mins)'
  },
  'service-crowns': {
    title: 'Premium CAD/CAM Zirconia Crowns',
    classification: 'Aesthetic Protective Crown Prosthesis',
    heroText: 'Protect fragile, damaged tooth walls with biocompatible, highly durable metal-free Zirconia milled of 3D logs.',
    imgUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=720&h=480',
    benefits: [
      '100% metal-free biocompatibility - avoids dark lines at gum lines',
      'Extreme hardness properties matching chewing loads on posterior molars',
      'Excellent translucency indices mimicking real enamel light-paths',
      'Unmatched wear margins - resistant to heavy extrinsic coffee stains'
    ],
    processSteps: [
      { step: '01', title: 'Tooth prep & mapping', desc: 'Trimming damaged structure conservingly to optimize fitting.' },
      { step: '02', title: 'Digital Intraoral Scanning', desc: 'Capturing exact digital 3D models with oral scanners.' },
      { step: '03', title: 'CAD/CAM milling', desc: 'Sculpting solid zirconium block with 3D precision mills.' },
      { step: '04', title: 'Bonding of the Crown', desc: 'Luting of the custom-fused crown with clinical adhesive polymers.' }
    ],
    faqs: [
      { q: 'How long do Zirconia Crowns last?', a: 'With standard hygiene practices, high-quality CAD/CAM milled zirconia crowns last 15+ years easily.' },
      { q: 'Is a Zirconia crown better than porcelain-fused-metal?', a: 'Yes, zirconia avoids metal gum rings completely, allows superior shade matching, and is virtually indestructible under normal loads.' }
    ],
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=500&h=350',
    afterImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=500&h=350',
    expectedTerm: '2 Days work'
  },
  'service-aligners': {
    title: 'Clear Aligners & Orthodontics',
    classification: 'Non-surgical Alignment System',
    heroText: 'Align crowded or spaced teeth comfortably with clear, customized orthodontic templates or mini multi-ceramic brackets.',
    imgUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=720&h=480',
    benefits: [
      '100% transparent design - stays fully invisible during professional interaction',
      'Removable retainers allow you to brush, floss, and eat without restrictions',
      'Precision movement mapping ensures optimal correction schedules',
      'Eliminates soft-tissue lacerations common with old wire brackets'
    ],
    processSteps: [
      { step: '01', title: '3D Teeth Scan & simulation', desc: 'Creating step-by-step progress projection videos of your movement.' },
      { step: '02', title: 'Custom aligners printing', desc: 'Milling clear polyurethane trays customized to exact microns.' },
      { step: '03', title: 'Progressive wearer plan', desc: 'Swapping retainers every 10 to 14 days to steer tooth movement.' },
      { step: '04', title: 'Periodic alignment check', desc: 'Brief clinical checks to check progression and dental health.' }
    ],
    faqs: [
      { q: 'How many daily hours is standard for aligners?', a: 'For best results, we suggest keeping clear aligners on for 20 to 22 hours per day, removing them during eating.' },
      { q: 'Is orthodontic clear aligner safe for adults?', a: 'Absolutely. It is the premier, selected path for adults because of its comfort, aesthetics, and predictable dental results.' }
    ],
    beforeImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=500&h=350',
    afterImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=500&h=350',
    expectedTerm: '6-12 Months'
  }
};

export default function ServicePage({ serviceKey, onNavigate, onBookClick }: ServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const service = SERVICES_DATA[serviceKey] || SERVICES_DATA['service-whitening'];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* 1. Hero Block */}
      <section className="relative py-20 bg-[#1F4E79] text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#1F4E79] to-[#36B6C9] opacity-95" />
        <div className="absolute -right-48 -bottom-48 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-200 bg-white/10 px-3 py-1 rounded-md inline-block">
                {service.classification}
              </span>
              <h1 className="font-sans font-black text-4xl md:text-5xl text-white mt-4 tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="font-sans text-base md:text-lg text-slate-100 mt-6 leading-relaxed">
                {service.heroText}
              </p>
            </div>
            
            <div className="lg:col-span-5 bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
              <span className="text-[10px] text-cyan-200 font-bold uppercase tracking-widest block">Expected Treatment Schedule</span>
              <span className="text-2xl font-extrabold text-white mt-1 block">{service.expectedTerm}</span>
              <div className="mt-5 pt-4 border-t border-white/20">
                <button
                  onClick={() => onBookClick(service.title)}
                  className="w-full py-3.5 bg-white text-[#1F4E79] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-cyan-50 transition shadow-md cursor-pointer text-center block"
                >
                  Book Instant Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-100 py-3.5 px-6">
        <div className="max-w-5xl mx-auto flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#64748B]">
          <button onClick={() => onNavigate('home')} className="hover:text-[#1F4E79] cursor-pointer">
            Home
          </button>
          <span>/</span>
          <span className="text-slate-400">Treatments</span>
          <span>/</span>
          <span className="text-[#1E293B]">{service.title}</span>
        </div>
      </div>

      {/* 2. Benefits Column */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <img
                src={service.imgUrl}
                alt={service.title}
                className="rounded-3xl object-cover w-full aspect-13/10 shadow-lg border border-slate-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-5 -right-5 bg-cyan-500 text-white p-4.5 rounded-2xl shadow-xl border-4 border-white">
                <ShieldCheck className="w-8 h-8" />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-black text-[#1F4E79] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md">
                Treatment Safeguards
              </span>
              <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-[#1E293B]">
                Key Clinical Advantages
              </h2>
              <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
                Elite Smile ensures medical precision and personalized custom treatment. Check the raw core benefits below:
              </p>
              
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm font-medium leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Treatment Process Flow */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-b border-slate-150">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-black uppercase text-[#1F4E79] tracking-widest bg-blue-50 px-2.5 py-1 rounded-md">How It Works</span>
            <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-[#1E293B] mt-3">
              Step-by-Step Patient Pathway
            </h3>
            <p className="text-[#64748B] text-xs md:text-sm mt-2">
              Every procedure is systematically documented and executed to match elite standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((stepItem, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs relative flex flex-col justify-between h-48">
                <div>
                  <span className="font-mono font-black text-2xl text-slate-200 block leading-none">{stepItem.step}</span>
                  <h4 className="font-sans font-black text-sm text-[#1E293B] mt-4 leading-tight">{stepItem.title}</h4>
                </div>
                <p className="text-[11px] md:text-xs text-[#64748B] leading-relaxed mt-2">{stepItem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Before & After Panel */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">Clinical Case Review</span>
              <h3 className="font-sans font-extrabold text-2xl text-[#1E293B]">
                Smile Restoration Preview
              </h3>
              <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                Authentic, diagnostic results showing pre-staged and completed clinical steps handled explicitly by Dr. Manik Gupta.
              </p>
              <div>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="text-xs font-bold uppercase tracking-wider text-[#1F4E79] flex items-center space-x-1 hover:underline cursor-pointer"
                >
                  <span>Explore Full Smile Gallery</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div className="relative rounded-2xl overflow-hidden shadow-sm">
                <img src={service.beforeImage} alt="Before Treatment" className="w-full aspect-10/8 object-cover" />
                <div className="absolute bottom-2 left-2 bg-slate-900/80 text-white text-[9px] font-bold uppercase py-0.5 px-2 rounded">Before</div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-sm">
                <img src={service.afterImage} alt="After Treatment" className="w-full aspect-10/8 object-cover" />
                <div className="absolute bottom-2 left-2 bg-emerald-600 text-white text-[9px] font-bold uppercase py-0.5 px-2 rounded">After</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs specific Accordion */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-150">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase text-[#1F4E79] tracking-widest bg-blue-50 px-2.5 py-1 rounded-md">TREATMENT CLARITY</span>
            <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-[#1E293B] mt-3">
              FAQ on {service.title}
            </h3>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-slate-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left font-bold text-sm md:text-base text-[#1E293B] hover:text-[#1F4E79] py-4.5 px-6 flex items-center justify-between cursor-pointer focus:outline-hidden"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#64748B] transition-transform ${isOpen && 'rotate-180 bg-[#1F4E79] text-white p-0.5 rounded'}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs md:text-sm text-[#64748B] leading-relaxed px-6 pb-5 pt-0.5 border-t border-slate-50">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA Footer */}
      <section className="py-20 bg-[#1F4E79] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1E293B]/40" />
        <div className="relative max-w-2xl mx-auto px-6 space-y-5">
          <h3 className="font-sans font-black text-2xl md:text-3xl text-white">
            Schedule Your Specific Visit Today
          </h3>
          <p className="text-slate-100 text-xs md:text-sm leading-relaxed max-w-md mx-auto">
            Ready to initiate your dental treatment path under the direct medical care of Dr. Manik Gupta? Contact us now.
          </p>
          <div className="pt-4 flex justify-center gap-3">
            <button
              onClick={() => onBookClick(service.title)}
              className="px-6 py-3.5 bg-[#36B6C9] hover:bg-cyan-400 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-md cursor-pointer"
            >
              Book {service.title}
            </button>
            <a
              href="tel:+919622294841"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-widest rounded-xl transition cursor-pointer text-center"
            >
              Call Clinic Direct
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
