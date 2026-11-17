'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import { 
  Calculator, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Clock,
  ShieldCheck
} from 'lucide-react';

export function InstallmentCalculator() {
  const [totalUnits, setTotalUnits] = useState(120);
  const [avgPriceLakhs, setAvgPriceLakhs] = useState(35); // in Lakhs

  const totalProjectValueCr = (totalUnits * avgPriceLakhs) / 100;
  const estimatedStuckCashFlowLakhs = Math.round(totalUnits * avgPriceLakhs * 0.18);
  const annualInterestSavedLakhs = ((estimatedStuckCashFlowLakhs * 0.12) / 12 * 4).toFixed(1);
  const hoursSavedPerMonth = Math.round(totalUnits * 1.5);

  return (
    <section id="roi-calculator" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Scroll Reveal */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-900 border border-teal-200 mb-3 shadow-xs">
            <Calculator className="h-3.5 w-3.5 text-teal-600" />
            <span>Builder Cashflow Recovery Calculator</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-slate-800 leading-normal sm:leading-relaxed lg:leading-[1.38]">
            See How Fast Your Installment Collections Accelerate
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Replace manual phone calls and spreadsheet reminders with automated milestone demand notices:
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xl shadow-slate-900/5">
          {/* Controls Side with Scroll Reveal from Left */}
          <ScrollReveal direction="left" delay={150} duration={850} className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-700">
                  Total Plotted / High-Rise Units:
                </label>
                <span className="text-lg font-semibold text-teal-800">{totalUnits} Plots / Units</span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="10"
                value={totalUnits}
                onChange={(e) => setTotalUnits(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0d9488]"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-1">
                <span>Small Plotted Enclave (20 Units)</span>
                <span>Large Integrated Township (500 Units)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-700">
                  Average Plot / Unit Price:
                </label>
                <span className="text-lg font-semibold text-teal-800">₹ {avgPriceLakhs} Lakhs</span>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={avgPriceLakhs}
                onChange={(e) => setAvgPriceLakhs(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0d9488]"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-1">
                <span>Affordable Plots (₹10 L)</span>
                <span>Luxury Villas / Commercial (₹2.5 Cr)</span>
              </div>
            </div>

            <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-4 text-xs sm:text-sm text-slate-700 space-y-1.5">
              <div className="font-bold text-teal-900">Automated ERP Advantage:</div>
              <p>
                As soon as a site milestone is certified (Plinth, Road, Slab), milestone demand letters are dispatched automatically via WhatsApp and Email. 
                Collections that previously took 45+ days are realized in 10 to 12 days.
              </p>
            </div>
          </ScrollReveal>

          {/* Results Side with Scroll Reveal from Right */}
          <ScrollReveal direction="right" delay={450} duration={850} className="lg:col-span-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Estimated Financial Benefits
            </span>

            <div className="mt-6 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3.5 hover:bg-slate-100/50 p-1.5 rounded-lg transition-colors">
                <div>
                  <div className="text-xs font-semibold text-slate-500">Total Project Gross Value</div>
                  <div className="text-[11px] text-slate-400">Combined phase valuation</div>
                </div>
                <div className="text-2xl font-semibold text-slate-800">
                  ₹ {totalProjectValueCr.toFixed(2)} Cr
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200 pb-3.5 hover:bg-slate-100/50 p-1.5 rounded-lg transition-colors">
                <div>
                  <div className="text-xs font-semibold text-slate-500">Faster Cashflow Unlocked</div>
                  <div className="text-[11px] text-slate-400">Recover stuck installments in ~12 days</div>
                </div>
                <div className="text-2xl font-semibold text-emerald-700">
                  ₹ {estimatedStuckCashFlowLakhs.toLocaleString('en-IN')} Lakh
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200 pb-3.5 hover:bg-slate-100/50 p-1.5 rounded-lg transition-colors">
                <div>
                  <div className="text-xs font-semibold text-slate-500">Bank Interest Expenses Saved</div>
                  <div className="text-[11px] text-slate-400">Early home loan &amp; installment realization</div>
                </div>
                <div className="text-2xl font-bold text-amber-600">
                  ₹ {annualInterestSavedLakhs} Lakh
                </div>
              </div>

              <div className="flex items-center justify-between hover:bg-slate-100/50 p-1.5 rounded-lg transition-colors">
                <div>
                  <div className="text-xs font-semibold text-slate-500">Staff Labor Hours Saved</div>
                  <div className="text-[11px] text-slate-400">Manual calling &amp; paper typing eliminated</div>
                </div>
                <div className="text-2xl font-bold text-teal-800">
                  {hoursSavedPerMonth} Hours / Month
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200">
              <Link
                href="/contact"
                className="btn-shimmer w-full flex items-center justify-center gap-2 rounded-xl bg-[#042026] hover:bg-[#083c47] py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all text-center hover:-translate-y-0.5 active:scale-95"
              >
                <Sparkles className="h-4 w-4 text-emerald-400" />
                <span>Book a Free 1-on-1 Cashflow Consultation</span>
                <ArrowRight className="h-4 w-4 text-slate-300" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
