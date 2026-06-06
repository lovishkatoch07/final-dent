/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CreditCard, ShieldCheck, ClipboardCheck, ArrowUpRight, Calculator, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PaymentMethod {
  title: string;
  desc: string;
  badge: string;
  icon: React.ReactNode;
}

export default function PaymentOptions() {
  const [selectedEstimatorTreatment, setSelectedEstimatorTreatment] = useState('implant');

  const paymentMethods: PaymentMethod[] = [
    {
      title: 'Easy 0% EMI Schemes',
      desc: 'Spread high-value dental expenses (like implants or veneers) into comfortable 3, 6, or 12 monthly payments with zero added interest. Partnered with major financial services.',
      badge: 'FINANCIAL COMFORT',
      icon: <Calculator className="w-5 h-5 text-[#36B6C9]" />
    },
    {
      title: 'Cashless UPI & Card Support',
      desc: 'Seamlessly pay via Google Pay, PhonePe, Paytm, or any credit/debit cards without any extra processing surcharges. Safe, paperless transactions right in Gandhi Nagar.',
      badge: '100% SECURE',
      icon: <CreditCard className="w-5 h-5 text-[#1F4E79]" />
    },
    {
      title: 'Insurance & Reimbursement Assistance',
      desc: 'We assist with detailed treatment files, diagnostic prints, doctor declarations, and stamp-certified bills to ensure smooth dental insurance or corporate standard claims.',
      badge: 'HASSLE-FREE CLAIMS',
      icon: <ClipboardCheck className="w-5 h-5 text-emerald-600" />
    }
  ];

  // Realistic transparent treatment price insights
  const treatmentPrices = {
    implant: {
      name: 'Titanium Dental Implants',
      range: '₹18,000 - ₹35,000',
      emi: 'Starting from ₹2,500 / Month',
      breakdown: [
        'Premium FDA-approved titanium root post',
        'Zirconia/ceramic crown attachment included',
        'Digital surgical guide mapping & diagnostic scans'
      ]
    },
    rct: {
      name: 'Rotary Single-Sitting RCT',
      range: '₹3,500 - ₹6,500',
      emi: 'Easy UPI payments accepted',
      breakdown: [
        'Single sitting sterile root canal treatment',
        'State-of-the-art torque-controlled rotary motors',
        'Digital RVG assessment and final composite fillings'
      ]
    },
    whitening: {
      name: 'Advanced Laser Teeth Whitening',
      range: '₹5,500 - ₹12,000',
      emi: 'Affordable cosmetic plans',
      breakdown: [
        'Advanced chemical bleaching under clinic laser control',
        'Up to 8 shades lighter teeth whitening',
        'Comprehensive post-procedural sensitivity safety shield'
      ]
    },
    veneers: {
      name: 'Ceramic Veneers & Design',
      range: '₹9,500 - ₹16,000 / Tooth',
      emi: '0% EMI Starting from ₹1,200 / Month',
      breakdown: [
        'Ultra-strong custom-crafted porcelain restorations',
        'Interactive mock-up bite trial before baking',
        'Natural-translucency matching protocols'
      ]
    }
  };

  const selectedPriceData = treatmentPrices[selectedEstimatorTreatment as keyof typeof treatmentPrices];

  return (
    <section id="pricing-insurance" className="py-24 bg-[#F5F7FA] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E79] bg-blue-100/50 px-3.5 py-1.5 rounded-full inline-block">
            FINANCES & TREATMENT COST
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-[#1E293B] mt-4 tracking-tight leading-tight">
            Insurance & Payment Pathways
          </h2>
          <p className="font-sans text-base text-[#64748B] mt-4">
            We champion transparent dental billing. Elite Smile is renowned for offering affordable price tags with clear payment plans tailored right to your family budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: List of Payment Schemes */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {paymentMethods.map((method, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-slate-100 rounded-2xl shadow-xs hover:shadow-md transition-shadow flex items-start space-x-5"
              >
                <div className="p-3 bg-[#F5F7FA] rounded-xl border border-slate-150 text-[#1F4E79] shrink-0">
                  {method.icon}
                </div>
                <div className="space-y-1.5">
                  <span className="text-[9px] font-black tracking-widest text-[#36B6C9] uppercase block">
                    {method.badge}
                  </span>
                  <h3 className="font-sans font-bold text-base text-[#1E293B]">
                    {method.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-[#64748B] leading-relaxed">
                    {method.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Quick Insurance Banner Callout */}
            <div className="bg-gradient-to-r from-[#1F4E79] to-[#2d6f9a] text-white p-6 rounded-2xl flex items-center justify-between shadow-lg">
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-sm tracking-wide uppercase text-[#36B6C9]">Government & Corporate Standard Bills</h4>
                <p className="text-xs text-slate-100 max-w-[420px]">
                  We provide official GST invoices, prescription copies, and case logs required for corporate, government (CGHS/ECHS/State medical boards) insurance files.
                </p>
              </div>
              <ShieldCheck className="w-10 h-10 text-white shrink-0 hidden sm:block opacity-80" />
            </div>
          </div>

          {/* Right Column: Approximate Cost & EMI Calculator Tool */}
          <div className="lg:col-span-5 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-2.5 pb-4 border-b border-slate-150">
                <Calculator className="w-5 h-5 text-[#36B6C9]" />
                <h3 className="font-sans font-extrabold text-base text-[#1E293B] uppercase tracking-wider">
                  Price Guide Estimator
                </h3>
              </div>

              <p className="font-sans text-xs text-[#64748B] leading-normal">
                Click on the diagnostic treatment lines below to view approximated cost benchmarks and installment plans built for patients in Jammu.
              </p>

              {/* Treatment selector tabs inside the budget widget */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedEstimatorTreatment('implant')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all text-center border cursor-pointer ${
                    selectedEstimatorTreatment === 'implant'
                      ? 'bg-[#1F4E79] text-white border-transparent shadow-xs'
                      : 'bg-slate-50 text-[#64748B] border-slate-150'
                  }`}
                >
                  Dental Implant
                </button>
                <button
                  onClick={() => setSelectedEstimatorTreatment('rct')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all text-center border cursor-pointer ${
                    selectedEstimatorTreatment === 'rct'
                      ? 'bg-[#1F4E79] text-white border-transparent shadow-xs'
                      : 'bg-slate-50 text-[#64748B] border-slate-150'
                  }`}
                >
                  Root Canal
                </button>
                <button
                  onClick={() => setSelectedEstimatorTreatment('whitening')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all text-center border cursor-pointer ${
                    selectedEstimatorTreatment === 'whitening'
                      ? 'bg-[#1F4E79] text-white border-transparent shadow-xs'
                      : 'bg-slate-50 text-[#64748B] border-slate-150'
                  }`}
                >
                  Teeth Whitening
                </button>
                <button
                  onClick={() => setSelectedEstimatorTreatment('veneers')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all text-center border cursor-pointer ${
                    selectedEstimatorTreatment === 'veneers'
                      ? 'bg-[#1F4E79] text-white border-transparent shadow-xs'
                      : 'bg-slate-50 text-[#64748B] border-slate-150'
                  }`}
                >
                  Veneers
                </button>
              </div>

              {/* Selected treatment details preview */}
              <div className="bg-[#F5F7FA] p-5 rounded-xl border border-slate-150">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedEstimatorTreatment}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="text-[9px] font-black text-[#64748B] uppercase tracking-widest block">
                        ESTIMATED INVESTMENT IN JAMMU
                      </span>
                      <h4 className="font-sans font-bold text-sm text-[#1E293B] mt-0.5">
                        {selectedPriceData.name}
                      </h4>
                    </div>

                    <div className="flex justify-between items-baseline py-2.5 border-y border-slate-200">
                      <span className="text-2xl font-black text-[#1E293B] tracking-tight">{selectedPriceData.range}</span>
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{selectedPriceData.emi}</span>
                    </div>

                    <div className="space-y-2 pt-1">
                      <span className="text-[10px] font-black text-[#1F4E79] uppercase tracking-wider block">
                        Included Deliverables:
                      </span>
                      {selectedPriceData.breakdown.map((item, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-[11px] text-[#64748B] font-semibold leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="border-t border-slate-150 pt-5 mt-6">
              <a
                href="#contact"
                className="w-full py-3 bg-[#1F4E79] hover:bg-[#4F81BD] text-white font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center space-x-1 shadow-md transition-colors"
              >
                <span>Get Customized Quote</span>
                <ArrowUpRight className="w-4 h-4 text-[#36B6C9]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
