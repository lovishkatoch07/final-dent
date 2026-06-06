/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Mail, Send, CalendarCheck2, CalendarDays, User, AlertCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AppointmentFormData } from '../types';

interface ContactPageProps {
  preselectedTreatment: string;
  onClearPreselected: () => void;
  onNavigate: (page: string) => void;
}

export default function ContactPage({ preselectedTreatment, onClearPreselected, onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    treatment: 'General Consultation',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'info' | 'hours'>('info');
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (preselectedTreatment) {
      setFormData((prev) => ({ ...prev, treatment: preselectedTreatment }));
    }
  }, [preselectedTreatment]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) {
      setValidationError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setValidationError('Please enter a valid patient name.');
      return;
    }
    if (!formData.phone.trim()) {
      setValidationError('Please enter a valid telephone number.');
      return;
    }
    if (!formData.date) {
      setValidationError('Please specify your preferred appointment date.');
      return;
    }
    setValidationError('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      treatment: 'General Consultation',
      notes: '',
    });
    setValidationError('');
    setIsSubmitted(false);
    onClearPreselected();
  };

  const treatmentsList = [
    'General Consultation',
    'Dental Implants',
    'Teeth Whitening',
    'Smile Makeovers',
    'Root Canal Treatment',
    'Zirconia Crowns',
    'Dental Veneers',
    'Orthodontics',
    'Children Dentistry',
    'Full Mouth Rehabilitation',
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="relative py-16 bg-[#1F4E79] text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#1F4E79] to-[#36B6C9] opacity-90" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C9] bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
            Clinic Access Desk
          </span>
          <h1 className="font-sans font-black text-4xl md:text-5xl text-white mt-4 tracking-tight leading-tight">
            Contact & Consultation
          </h1>
          <p className="font-sans text-xs md:text-sm text-slate-150 max-w-lg mx-auto mt-3">
            Directions, opening tables, direct booking, and prompt travel guidance to Gandhi Nagar, Jammu.
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-100 py-3.5 px-6">
        <div className="max-w-5xl mx-auto flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#64748B]">
          <button onClick={() => onNavigate('home')} className="hover:text-[#1F4E79] cursor-pointer">
            Home
          </button>
          <span>/</span>
          <span className="text-[#1E293B]">Contact Us</span>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div>
                  <h2 className="font-sans font-bold text-2xl md:text-3xl text-[#1E293B] leading-tight">
                    Visit Elite Smile Jammu
                  </h2>
                  <p className="font-sans text-xs md:text-sm text-[#64748B] mt-2 font-normal leading-relaxed">
                    Main Stop near Gandhi Nagar Gole market. Extremely straightforward approach and available street side parking bounds.
                  </p>
                </div>

                {/* Info Toggles */}
                <div className="flex border-b border-slate-200">
                  <button
                    onClick={() => setActiveTab('info')}
                    className={`pb-3.5 font-sans text-xs font-black uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                      activeTab === 'info' ? 'border-[#1F4E79] text-[#1F4E79]' : 'border-transparent text-[#64748B]'
                    }`}
                  >
                    Contact Info
                  </button>
                  <button
                    onClick={() => setActiveTab('hours')}
                    className={`pb-3.5 ml-6 font-sans text-xs font-black uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                      activeTab === 'hours' ? 'border-[#1F4E79] text-[#1F4E79]' : 'border-transparent text-[#64748B]'
                    }`}
                  >
                    Working Hours
                  </button>
                </div>

                {/* Tab content area */}
                <div className="min-h-[150px] flex items-center">
                  {activeTab === 'info' ? (
                    <div className="space-y-4 w-full">
                      <a
                        href="https://maps.google.com/?q=Main Stop, 80-A/A, Near Gole Market, Gandhi Nagar, Jammu, Jammu & Kashmir 180004"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-start space-x-3.5 p-4 rounded-xl bg-white border border-slate-100 shadow-xs"
                      >
                        <div className="p-2.5 rounded-lg bg-blue-50 text-[#1F4E79] shrink-0 mt-0.5">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-black uppercase tracking-wider text-[#1E293B]">Clinical Coordinates</div>
                          <p className="text-xs md:text-sm text-[#64748B] font-semibold mt-1">
                            Main Stop, 80-A/A, Near Gole Market, Gandhi Nagar, Jammu, J&K 180004
                          </p>
                        </div>
                      </a>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <a
                          href="tel:+919622294841"
                          className="flex items-center space-x-3 p-4 bg-white border border-slate-100 rounded-xl"
                        >
                          <div className="p-2.5 bg-cyan-50 text-cyan-650 rounded-lg">
                            <Phone className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[9px] text-[#64748B] font-bold block uppercase">Call Desk</span>
                            <span className="text-xs font-black text-[#1F4E79]">+91 96222 94841</span>
                          </div>
                        </a>

                        <a
                          href="mailto:katoch5677@gmail.com"
                          className="flex items-center space-x-3 p-4 bg-white border border-slate-100 rounded-xl"
                        >
                          <div className="p-2.5 bg-rose-50 text-rose-500 rounded-lg">
                            <Mail className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[9px] text-[#64748B] font-bold block uppercase">Email desk</span>
                            <span className="text-xs font-black text-[#1F4E79] truncate max-w-[120px] block">katoch5677@gmail.com</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full bg-white p-5 rounded-2xl border border-slate-100 space-y-3">
                      <div className="flex justify-between items-center text-xs md:text-sm border-b pb-2">
                        <span className="font-bold text-[#1E293B]">Monday - Saturday (Morning)</span>
                        <span className="font-semibold text-[#64748B]">10:00 AM - 01:30 PM</span>
                      </div>
                      <div className="flex justify-between items-center text-xs md:text-sm border-b pb-2">
                        <span className="font-bold text-[#1E293B]">Monday - Saturday (Evening)</span>
                        <span className="font-semibold text-[#64748B]">04:30 PM - 08:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center text-xs md:text-sm">
                        <span className="font-bold text-rose-600">Sunday</span>
                        <span className="font-black text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded text-xs uppercase tracking-widest">
                          Closed
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Precise interactive Map Frame */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[4/3] bg-white h-60">
                <iframe
                  title="Elite Smile Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.591024354228!2d74.86248987625126!3d32.710188673693206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e84ef2ff17581%3A0x6fb8bf305ce6385a!2sElite%20smile%20dental%20clinic!5e0!3m2!1sen!2sin!4v1717318534125!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right Booking Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-2 bg-blue-50 text-[#1F4E79] rounded-lg">
                        <CalendarCheck2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-sans font-extrabold text-xl md:text-2xl text-[#1E293B]">
                          Schedule Clinical Evaluation
                        </h3>
                        <p className="text-xs text-[#64748B] mt-0.5">Please fill details down. We will contact you to solidify timing.</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                      {validationError && (
                        <div className="p-3.5 bg-rose-50 text-rose-700 text-xs font-bold rounded-xl border border-rose-100 flex items-center space-x-2">
                          <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
                          <span>{validationError}</span>
                        </div>
                      )}

                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="fullName" className="text-xs font-black text-[#1E293B] uppercase tracking-wider flex items-center space-x-1">
                          <User className="w-3.5 h-3.5 text-[#36B6C9]" />
                          <span>Patient Name *</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Karan Sharma"
                          className="w-full px-4 py-3 text-xs md:text-sm rounded-xl border focus:outline-hidden focus:ring-1 focus:ring-[#1F4E79] bg-slate-50/50"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <label htmlFor="phone" className="text-xs font-black text-[#1E293B] uppercase tracking-wider">
                            Mobile Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g. +91 96222 XXXXX"
                            className="w-full px-4 py-3 text-xs md:text-sm rounded-xl border focus:outline-hidden focus:ring-1 focus:ring-[#1F4E79] bg-slate-50/50"
                          />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                          <label htmlFor="email" className="text-xs font-black text-[#1E293B] uppercase tracking-wider">
                            Email address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. name@gmail.com"
                            className="w-full px-4 py-3 text-xs md:text-sm rounded-xl border focus:outline-hidden focus:ring-1 focus:ring-[#1F4E79] bg-slate-50/50"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <label htmlFor="date" className="text-xs font-black text-[#1E293B] uppercase tracking-wider flex items-center space-x-1">
                            <CalendarDays className="w-4 h-4 text-[#36B6C9]" />
                            <span>Preferred Date *</span>
                          </label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-1.5 text-xs md:text-sm rounded-xl border focus:outline-hidden focus:ring-1 focus:ring-[#1F4E79] bg-slate-50/50"
                          />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                          <label htmlFor="time" className="text-xs font-black text-[#1E293B] uppercase tracking-wider">
                            Time Slot
                          </label>
                          <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full px-4 py-3 text-xs md:text-sm rounded-xl border focus:outline-hidden focus:ring-1 focus:ring-[#1F4E79] bg-slate-50/50"
                          >
                            <option value="">Select preffered slot...</option>
                            <option value="Morning">Morning (10:00 AM - 01:30 PM)</option>
                            <option value="Evening">Evening (04:30 PM - 08:00 PM)</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="treatment" className="text-xs font-black text-[#1E293B] uppercase tracking-wider">
                          Requested Dental Specialty
                        </label>
                        <select
                          id="treatment"
                          name="treatment"
                          value={formData.treatment}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-xs md:text-sm rounded-xl border focus:outline-hidden focus:ring-1 focus:ring-[#1F4E79] bg-slate-50/50 font-semibold text-slate-800"
                        >
                          {treatmentsList.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="notes" className="text-xs font-black text-[#1E293B] uppercase tracking-wider">
                          Symptoms or Doctor Note
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows={2}
                          value={formData.notes || ''}
                          onChange={handleChange}
                          placeholder="e.g., Scaling request, front tooth gap correction, or emergency tooth pain..."
                          className="w-full px-4 py-3 text-xs md:text-sm rounded-xl border focus:outline-hidden focus:ring-1 focus:ring-[#1F4E79] bg-slate-50/50"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-[#1F4E79] hover:bg-[#36B6C9] text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer mt-3"
                      >
                        <Send className="w-4 h-4 text-cyan-205" />
                        <span>Book Clinic Slot</span>
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#10B981] flex items-center justify-center mx-auto border-4 border-emerald-100 shadow-sm">
                      <CalendarCheck2 className="w-8 h-8 animate-bounce" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase text-emerald-600 tracking-wider">Appointment request lodged</span>
                      <h3 className="font-sans font-black text-2xl text-[#1E293B]">Thanks, {formData.fullName}!</h3>
                      <p className="text-xs text-[#64748B] max-w-sm mx-auto leading-relaxed">
                        We have recorded your booking choice. Our Jammu help desk will call you shortly on **{formData.phone}** to finalize.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl text-left border text-xs max-w-xs mx-auto space-y-2">
                      <div className="flex justify-between pb-2 border-b">
                        <span className="text-slate-400 font-medium">Specialty:</span>
                        <span className="font-extrabold text-[#1F4E79]">{formData.treatment}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b">
                        <span className="text-slate-400 font-medium">Date:</span>
                        <span className="font-extrabold text-[#1F4E79]">{formData.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400 font-medium">Slot:</span>
                        <span className="font-extrabold text-emerald-700">{formData.time || 'General priority'}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 bg-[#F5F7FA] hover:bg-slate-200 text-[#1F4E79] font-black text-xs uppercase tracking-wider border rounded-lg inline-flex items-center space-x-1 cursor-pointer"
                    >
                      <span>New Request</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
