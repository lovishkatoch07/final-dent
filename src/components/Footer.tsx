/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MapPin, Mail, Clock, ShieldCheck, Heart, Star } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { label: 'Dental Implants', href: '#/implants' },
    { label: 'Teeth Whitening', href: '#/whitening' },
    { label: 'Smile Makeovers', href: '#/makeover' },
    { label: 'Root Canal Treatment', href: '#/rct' },
    { label: 'Zirconia Crowns', href: '#/crowns' },
    { label: 'Braces & Aligners', href: '#/aligners' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#/' },
    { label: 'About Us', href: '#/about' },
    { label: 'Meet Dr. Manik', href: '#/doctor' },
    { label: 'Smile Gallery', href: '#/gallery' },
    { label: 'Patient Reviews', href: '#/reviews' },
    { label: 'FAQ', href: '#/faq' },
    { label: 'Contact Us', href: '#/contact' },
  ];

  return (
    <footer className="bg-[#111C24] text-slate-300 pt-20 pb-8 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-(--size-max-w-1200px) mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        
        {/* Top visual grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Column 1: App logo & Brand summary */}
          <div className="space-y-6">
            <a href="#/" className="flex items-center space-x-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-[#36B6C9] flex items-center justify-center text-white font-black text-lg shadow-sm">
                E
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-base text-white tracking-tight leading-none">
                  ELITE SMILE
                </span>
                <span className="text-[10px] text-[#4F81BD] uppercase tracking-wider font-semibold leading-tight mt-0.5">
                  Dental Clinic
                </span>
              </div>
            </a>

            <p className="text-xs md:text-sm text-slate-400 font-normal leading-relaxed max-w-[260px]">
              Combining expert surgical accuracy with a warm caregiver attitude near Gole Market, Gandhi Nagar, Jammu.
            </p>

            <div className="flex items-center space-x-2">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white uppercase tracking-wider">4.8 / 836+ reviews</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-black uppercase tracking-widest text-[#36B6C9]">
              Clinic Navigation
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 block py-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#36B6C9] rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services directory */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-black uppercase tracking-widest text-[#36B6C9]">
              Dental Specialties
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#36B6C9] transition-colors duration-200 block py-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#36B6C9] rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact metrics */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-black uppercase tracking-widest text-[#10B981]">
              Clinic Desk Support
            </h4>
            <div className="space-y-3.5 text-xs md:text-sm text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4.5 h-4.5 text-[#36B6C9] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  80-A/A, Near Gole Market, Gandhi Nagar, Jammu
                </span>
              </div>
              <a href="tel:+919622294841" aria-label="Call +91 96222 94841" className="flex items-center space-x-2.5 hover:text-white transition-colors py-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#36B6C9] rounded">
                <Phone className="w-4.5 h-4.5 text-[#36B6C9] shrink-0" />
                <span className="font-semibold text-white">+91 96222 94841</span>
              </a>
              <div className="flex items-start space-x-2.5 pt-1.5 border-t border-slate-800/80">
                <Clock className="w-4.5 h-4.5 text-slate-500 shrink-0 mt-0.5" />
                <div className="space-y-1 text-[11px]">
                  <p className="font-bold text-slate-300">Mon - Sat: 10:00 AM - 01:30 PM</p>
                  <p className="font-bold text-slate-300">Mon - Sat: 04:30 PM - 08:00 PM</p>
                  <p className="font-semibold text-rose-500 bg-rose-950/40 px-1.5 py-0.5 rounded w-fit uppercase text-[9px] tracking-wider">
                    Sunday Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright declaration */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="text-center md:text-left">
            &copy; {currentYear} Elite Smile Dental Clinic. All Rights Reserved. Near Gole Market, Gandhi Nagar, Jammu.
          </p>
          
          <div className="flex items-center space-x-2 leading-none text-[11px]">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="uppercase tracking-wider font-semibold text-slate-400">FDA Certified Sterile environment</span>
          </div>

          <div className="flex space-x-6 text-slate-400">
            <a href="#about" className="hover:text-white transition-colors py-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#36B6C9] rounded">Privacy Policy</a>
            <a href="#about" className="hover:text-white transition-colors py-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#36B6C9] rounded">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
