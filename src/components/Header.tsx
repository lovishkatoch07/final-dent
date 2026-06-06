/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#/' },
    { label: 'About Us', href: '#/about' },
    { label: 'Meet Dr. Manik', href: '#/doctor' },
    { label: 'Smile Gallery', href: '#/gallery' },
    { label: 'Patient Reviews', href: '#/reviews' },
    { label: 'FAQ', href: '#/faq' },
    { label: 'Contact', href: '#/contact' },
  ];

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md border-b border-slate-100 py-3'
            : 'bg-white/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none py-5'
        }`}
      >
        <div className="max-w-(--size-max-w-1200px) mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#/" className="flex items-center space-x-2 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#1F4E79] flex items-center justify-center text-white font-bold text-xl shadow-sm transition-transform duration-350 group-hover:scale-105">
              E
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg md:text-xl text-[#1E293B] leading-none tracking-tight">
                ELITE SMILE
              </span>
              <span className="text-[10px] md:text-xs text-[#4F81BD] uppercase tracking-wider font-semibold leading-tight mt-0.5">
                Dental Clinic
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-xs font-semibold text-[#475569] hover:text-[#1F4E79] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1F4E79] focus-visible:ring-offset-2 rounded-md px-1.5 py-0.5 transition-colors duration-200 uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919622294841"
              className="flex items-center space-x-2 text-sm font-semibold text-[#1F4E79] hover:text-[#4F81BD] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#36B6C9]" />
              <span>+91 96222 94841</span>
            </a>
            <button
              onClick={onBookClick}
              className="px-6 py-3 bg-[#1F4E79] text-white font-semibold text-sm rounded-xl hover:bg-[#4F81BD] shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 hover:shadow-md cursor-pointer"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center space-x-3">
            <a
              href="tel:+919622294841"
              aria-label="Call Clinic"
              className="p-2.5 rounded-xl bg-slate-100 text-[#1F4E79] active:bg-slate-200"
            >
              <Phone className="w-5 h-5 text-[#1F4E79]" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="p-2.5 rounded-xl border border-slate-100 text-[#1E293B] active:bg-slate-50 cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white z-50 p-6 flex flex-col justify-between shadow-2xl lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-[#1F4E79] flex items-center justify-center text-white font-bold text-base">
                      E
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans font-bold text-base text-[#1E293B] leading-none">
                        ELITE SMILE
                      </span>
                      <span className="text-[9px] text-[#4F81BD] tracking-wider uppercase font-semibold leading-none mt-0.5">
                        Dental Clinic
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close Mobile Menu"
                    className="p-2 rounded-lg text-slate-400 hover:bg-slate-50 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-8 flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="font-sans text-base font-semibold text-[#1E293B] hover:text-[#1F4E79] py-2 border-b border-slate-50 tracking-wide"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col space-y-3 pt-6 border-t border-slate-100">
                <a
                  href="tel:+919622294841"
                  className="flex items-center justify-center space-x-2 py-3 border border-[#1F4E79] rounded-xl font-bold text-[#1F4E79]"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call +91 96222 94841</span>
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onBookClick();
                  }}
                  className="w-full py-4 bg-[#1F4E79] text-white font-bold rounded-xl flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
