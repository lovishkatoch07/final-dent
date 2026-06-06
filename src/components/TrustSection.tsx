/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, Flame, Award, Shield, UserCheck, ActivitySquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrustSection() {
  const trustCards = [
    {
      icon: <Star className="w-6 h-6 text-amber-500 fill-amber-500" />,
      title: '4.8 Google Rating',
      desc: 'Based on 836+ unsolicited, verified patient reviews in Jammu.',
      bgColor: 'bg-amber-50',
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#1F4E79]" />,
      title: '836+ Happy Patients',
      desc: 'Countless beautiful smile transformations and life-changing results.',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <Award className="w-6 h-6 text-[#36B6C9]" />,
      title: 'Years of Experience',
      desc: 'Led by seasoned clinician Dr. Manik Gupta with certified qualifications.',
      bgColor: 'bg-cyan-50',
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      title: 'Advanced Equipment',
      desc: 'Laser treatments, digital radiographs, and world-class diagnostic tools.',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: <Flame className="w-6 h-6 text-rose-500" />,
      title: 'Emergency Support',
      desc: 'Same-day emergency dental relief, trauma support, and pain alleviation.',
      bgColor: 'bg-rose-50',
    },
    {
      icon: <ActivitySquare className="w-6 h-6 text-emerald-600" />,
      title: 'Family Dental Care',
      desc: 'From geriatric root canals to gentle pediatric checkups, all in one place.',
      bgColor: 'bg-emerald-50',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-(--size-max-w-1200px) mx-auto px-6 md:px-10 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C9] bg-cyan-50 px-3 py-1.5 rounded-full">
            Clinical Indicators
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#1E293B] mt-3 tracking-tight">
            Designed for Trust, Crafted for Comfort
          </h2>
          <p className="font-sans text-base text-[#64748B] mt-4">
            Elite Smile Dental Clinic is engineered to provide premium safety, verified medical excellence, and a welcoming ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start space-x-4 p-6 rounded-2xl bg-[#F5F7FA] border border-slate-100 hover:border-[#1F4E79]/25 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`p-4.5 rounded-xl ${card.bgColor} transition-transform duration-300 group-hover:scale-108 shrink-0`}>
                {card.icon}
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-[#1E293B] group-hover:text-[#1F4E79] transition-colors leading-tight">
                  {card.title}
                </h3>
                <p className="font-sans text-sm text-[#64748B] font-normal leading-relaxed mt-2">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
