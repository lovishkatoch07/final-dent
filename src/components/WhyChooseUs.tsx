/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  ShieldCheck,
  Users2,
  HeartPulse,
  IndianRupee,
  Activity,
  Home,
  Star,
  MapPin,
  Check,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Feature } from '../types';

export default function WhyChooseUs() {
  const features: Feature[] = [
    {
      id: 'tech',
      iconName: 'ShieldCheck',
      title: 'Advanced Technology',
      description: 'Leveraging computerized diagnostic mapping, laser dental systems, and high-precision CAD/CAM restorations.',
    },
    {
      id: 'dentists',
      iconName: 'Users2',
      title: 'Experienced Dentists',
      description: 'Directed by Dr. Manik Gupta, carrying specialized credentials and extensive treatment background.',
    },
    {
      id: 'care',
      iconName: 'HeartPulse',
      title: 'Personalized Care',
      description: 'Every treatment path is fully custom-made. We never expedite diagnoses or standardise plans.',
    },
    {
      id: 'pricing',
      iconName: 'IndianRupee',
      title: 'Affordable Treatments',
      description: 'Premium healthcare is structured with pocket-friendly, transparent pricing and clear step-by-step payment terms.',
    },
    {
      id: 'pain',
      iconName: 'Activity',
      title: 'Pain-Free Procedures',
      description: 'Employing state-of-the-art anesthetic application protocols, tranquil environments, and soothing procedures.',
    },
    {
      id: 'infra',
      iconName: 'Home',
      title: 'Modern Infrastructure',
      description: 'Strict, multi-tier vacuum autoclaves, dust-free diagnostics, and fully air-conditioned aesthetic suites.',
    },
    {
      id: 'reviews',
      iconName: 'Star',
      title: '836+ Positive Reviews',
      description: 'Consistently validated by families in Jammu for polite doctor behaviour and outstanding results.',
    },
    {
      id: 'location',
      iconName: 'MapPin',
      title: 'Convenient Location',
      description: 'Right near Gole Market in Gandhi Nagar, Jammu. Ample surrounding parking and swift approach pathways.',
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#36B6C9]" />;
      case 'Users2':
        return <Users2 className="w-5 h-5 text-[#1F4E79]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-rose-500" />;
      case 'IndianRupee':
        return <IndianRupee className="w-5 h-5 text-emerald-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-indigo-600" />;
      case 'Home':
        return <Home className="w-5 h-5 text-[#4F81BD]" />;
      case 'Star':
        return <Star className="w-5 h-5 text-amber-500 fill-amber-500" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#1F4E79]" />;
      default:
        return <Check className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-(--size-max-w-1200px) mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E79] bg-blue-50 px-3.5 py-1.5 rounded-full inline-block">
            WHY BOOK WITH ELITE SMILE
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-[#1E293B] mt-4 tracking-tight leading-tight">
            Our Care Standard Difference
          </h2>
          <p className="font-sans text-base text-[#64748B] mt-4">
            We operate Jammu's benchmark family dental ecosystem, combining premium doctor proficiency with warm patient comfort.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="p-6 bg-[#F5F7FA] rounded-2xl border border-slate-100 hover:border-[#1F4E79]/20 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-xs transition-colors group-hover:bg-slate-50">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="font-sans font-bold text-base text-[#1E293B] mt-5 group-hover:text-[#1F4E79] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-[#64748B] font-normal leading-relaxed mt-2.5">
                  {item.description}
                </p>
              </div>
              
              <div className="mt-6 flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1F4E79] opacity-30" />
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Verified Clinic Feature</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
