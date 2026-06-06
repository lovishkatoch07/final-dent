/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Send,
  CalendarCheck2,
  CalendarDays,
  Sparkles,
  ArrowRight,
  User,
  AlertCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AppointmentFormData } from '../types';

interface ContactProps {
  preselectedTreatment: string;
  onClearPreselected: () => void;
}

export default function Contact({ preselectedTreatment, onClearPreselected }: ContactProps) {
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

  // Update selected treatment when prop changes
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
    <section id="contact" className="py-24 bg-[#F5F7FA] relative">
      <div className="max-w-(--size-max-w-1200px) mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Coordinates details & Interactive map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E79] bg-blue-100/70 px-3.5 py-1.5 rounded-full inline-block">
                  GET IN TOUCH
                </span>
                <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#1E293B] mt-4 tracking-tight leading-tight">
                  Connect With Our Jammu Clinic
                </h2>
                <p className="font-sans text-sm md:text-base text-[#64748B] mt-3 font-normal leading-relaxed">
                  Have an emergency pain state or want to book cosmetic sessions? Call us directly, navigate with the Google map below, or submit details.
                </p>
              </div>

              {/* Toggles for Info vs Hours */}
              <div className="flex border-b border-slate-200">
                <button
                  onClick={() => setActiveTab('info')}
                  className={`pb-3 font-sans text-xs font-black uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                    activeTab === 'info' ? 'border-[#1F4E79] text-[#1F4E79]' : 'border-transparent text-[#64748B]'
                  }`}
                >
                  Contact Info
                </button>
                <button
                  onClick={() => setActiveTab('hours')}
                  className={`pb-3 ml-6 font-sans text-xs font-black uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                    activeTab === 'hours' ? 'border-[#1F4E79] text-[#1F4E79]' : 'border-transparent text-[#64748B]'
                  }`}
                >
                  Working Hours
                </button>
              </div>

              {/* Toggle Area */}
              <div className="min-h-[140px] flex items-center">
                {activeTab === 'info' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4 w-full"
                  >
                    <a
                      href="https://maps.google.com/?q=Main Stop, 80-A/A, Near Gole Market, Gandhi Nagar, Jammu, Jammu & Kashmir 180004"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-3.5 p-4 rounded-xl bg-white border border-slate-100 hover:border-[#1F4E79]/35 transition-all group"
                    >
                      <div className="p-2.5 rounded-lg bg-blue-50 text-[#1F4E79] shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase tracking-wider text-[#1E293B]">Clinical Location</div>
                        <p className="text-sm text-[#64748B] font-semibold mt-1">
                          Main Stop, 80-A/A, Near Gole Market, Gandhi Nagar, Jammu, J&K 180004
                        </p>
                      </div>
                    </a>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <a
                        href="tel:+919622294841"
                        className="flex items-center space-x-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-[#1F4E79]/35 transition-all"
                      >
                        <div className="p-2.5 rounded-lg bg-cyan-50 text-cyan-600 shrink-0">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-wider text-[#1E293B]">Mobile Hot</div>
                          <p className="text-sm font-bold text-[#1F4E79]">+91 96222 94841</p>
                        </div>
                      </a>

                      <a
                        href="mailto:katoch5677@gmail.com"
                        className="flex items-center space-x-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-[#1F4E79]/35 transition-all"
                      >
                        <div className="p-2.5 rounded-lg bg-rose-50 text-rose-500 shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-wider text-[#1E293B]">Email Desk</div>
                          <p className="text-xs font-bold text-[#1F4E79] truncate max-w-[120px]">katoch5677@gmail.com</p>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full bg-white p-5 rounded-xl border border-slate-100 space-y-3"
                  >
                    <div className="flex items-center space-x-2 text-[#1F4E79] mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-black uppercase tracking-widest">Clinic Timing Matrix</span>
                    </div>

                    <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-2">
                      <span className="font-bold text-[#1E293B]">Monday - Saturday (Morning)</span>
                      <span className="font-semibold text-[#64748B]">10:00 AM - 01:30 PM</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-2">
                      <span className="font-bold text-[#1E293B]">Monday - Saturday (Evening)</span>
                      <span className="font-semibold text-[#64748B]">04:30 PM - 08:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-bold text-rose-600">Sunday</span>
                      <span className="font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md text-xs uppercase tracking-wider">
                        Closed
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Real precise Google Maps Embed for Elite Smile */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200/60 aspect-[4/3] bg-white h-[260px]">
              <iframe
                title="Elite Smile Dental Clinic Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.591024354228!2d74.86248987625126!3d32.710188673693206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e84ef2ff17581%3A0x6fb8bf305ce6385a!2sElite%20smile%20dental%20clinic!5e0!3m2!1sen!2sin!4v1717318534125!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Dynamic Form / Success Dialogue box */}
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
                        Book Your Consultation
                      </h3>
                      <p className="text-xs text-[#64748B] mt-0.5">Please submit correct details. We will callback to seal the hour.</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {validationError && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-rose-50 text-rose-700 text-xs font-bold rounded-xl border border-rose-100 flex items-center space-x-2.5"
                      >
                        <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{validationError}</span>
                      </motion.div>
                    )}
                    {/* Full Name */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="fullName" className="text-xs font-black text-[#1E293B] uppercase tracking-wider flex items-center space-x-1">
                        <User className="w-3.5 h-3.5 text-[#36B6C9]" />
                        <span>Full Patient Name *</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="E.g., Simran Jeet Singh"
                        className="w-full px-4.5 py-3.5 text-sm rounded-xl border border-slate-200 focus:outline-[#1F4E79] focus:ring-1 focus:ring-[#1F4E79] bg-slate-50/50"
                      />
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          placeholder="E.g., +91 96222 XXXXX"
                          className="w-full px-4.5 py-3.5 text-sm rounded-xl border border-slate-200 focus:outline-[#1F4E79] focus:ring-1 focus:ring-[#1F4E79] bg-slate-50/50"
                        />
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="email" className="text-xs font-black text-[#1E293B] uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="E.g., name@gmail.com"
                          className="w-full px-4.5 py-3.5 text-sm rounded-xl border border-slate-200 focus:outline-[#1F4E79] focus:ring-1 focus:ring-[#1F4E79] bg-slate-50/50"
                        />
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          className="w-full px-4.5 py-3.5 text-sm rounded-xl border border-slate-200 focus:outline-[#1F4E79] focus:ring-1 focus:ring-[#1F4E79] bg-slate-50/50"
                        />
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="time" className="text-xs font-black text-[#1E293B] uppercase tracking-wider">
                          Preferred Slot
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4.5 py-3.5 text-sm rounded-xl border border-slate-200 focus:outline-[#1F4E79] focus:ring-1 focus:ring-[#1F4E79] bg-slate-50/50"
                        >
                          <option value="">Choose slot timing...</option>
                          <option value="Morning">Morning Slot (10:00 AM - 01:30 PM)</option>
                          <option value="Evening">Evening Slot (04:30 PM - 08:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    {/* Requested Treatment */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="treatment" className="text-xs font-black text-[#1E293B] uppercase tracking-wider">
                        Requested Dental Specialty
                      </label>
                      <select
                        id="treatment"
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                        className="w-full px-4.5 py-3.5 text-sm rounded-xl border border-slate-200 focus:outline-[#1F4E79] focus:ring-1 focus:ring-[#1F4E79] bg-slate-50/50 font-semibold"
                      >
                        {treatmentsList.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {preselectedTreatment && (
                        <span className="text-[10px] text-[#1F4E79] font-black uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded w-fit mt-1">
                          Successfully auto-inserted: {preselectedTreatment}
                        </span>
                      )}
                    </div>

                    {/* Brief Clinical Notes */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="notes" className="text-xs font-black text-[#1E293B] uppercase tracking-wider">
                        Doctor note or symptoms
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={2}
                        value={formData.notes || ''}
                        onChange={handleChange}
                        placeholder="E.g., Teeth chipping or deep sensitivity, scaling request..."
                        className="w-full px-4.5 py-3 text-sm rounded-xl border border-slate-200 focus:outline-[#1F4E79] focus:ring-1 focus:ring-[#1F4E79] bg-slate-50/50"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4.5 bg-[#1F4E79] hover:bg-[#36B6C9] text-white font-bold text-sm uppercase tracking-widest rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer mt-2"
                    >
                      <Send className="w-4 h-4 text-cyan-200" />
                      <span>Request Guided Appointment</span>
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-50 text-[#10B981] flex items-center justify-center mx-auto border-4 border-emerald-100 shadow-md">
                    <CalendarCheck2 className="w-10 h-10 animate-bounce" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-600">
                      Request Confirmed Successfully
                    </span>
                    <h3 className="font-sans font-black text-3xl text-[#1E293B]">
                      Thank You, {formData.fullName}!
                    </h3>
                    <p className="font-sans text-sm text-[#64748B] max-w-sm mx-auto leading-relaxed">
                      We've safely registered your appointment parameters in our clinical queue. Dr. Manik Gupta's desk in Jammu will contact you via **{formData.phone}** shortly to confirm the target hour.
                    </p>
                  </div>

                  {/* Booking parameters visual review */}
                  <div className="bg-[#F5F7FA] p-5 rounded-2xl text-left border border-slate-150 max-w-md mx-auto space-y-2 text-xs font-semibold text-[#1E293B]">
                    <div className="flex justify-between border-b border-white pb-2.5">
                      <span className="text-[#64748B]">Primary Specialty:</span>
                      <span className="font-bold text-[#1F4E79]">{formData.treatment}</span>
                    </div>
                    <div className="flex justify-between border-b border-white pb-2.5">
                      <span className="text-[#64748B]">Requested Date:</span>
                      <span className="font-bold text-[#1F4E79]">{formData.date}</span>
                    </div>
                    <div className="flex justify-between pb-1.5">
                      <span className="text-[#64748B]">Time Slot:</span>
                      <span className="font-bold text-[#10B981]">{formData.time || 'General Queue'}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-[#1F4E79] font-bold text-xs uppercase tracking-widest rounded-xl transition duration-200 cursor-pointer inline-flex items-center space-x-1"
                  >
                    <span>Submit another booking</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
