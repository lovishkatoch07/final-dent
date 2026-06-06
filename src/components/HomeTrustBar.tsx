/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, ShieldCheck, Sparkles, UserCheck, Heart } from 'lucide-react';

export default function HomeTrustBar() {
  const items = [
    { icon: <Star className="w-5 h-5 text-amber-500 fill-amber-500" />, text: '4.8 Google Rating' },
    { icon: <Sparkles className="w-5 h-5 text-cyan-500" />, text: '836+ Reviews' },
    { icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />, text: 'Advanced Technology' },
    { icon: <Heart className="w-5 h-5 text-rose-500 fill-rose-500/20" />, text: 'Family Dental Care' },
    { icon: <UserCheck className="w-5 h-5 text-[#1F4E79]" />, text: 'Experienced Dentist' },
  ];

  return (
    <div className="bg-[#1F4E79]/5 border-y border-slate-100 py-6">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-4 md:divide-x md:divide-slate-200">
          {items.map((item, idx) => (
            <div
              key={item.text}
              className={`flex items-center space-x-2.5 ${idx !== 0 ? 'md:pl-6' : ''} grow justify-center md:grow-0`}
            >
              <div className="shrink-0">{item.icon}</div>
              <span className="font-sans font-bold text-xs md:text-sm text-[#1E293B] tracking-tight leading-none">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
