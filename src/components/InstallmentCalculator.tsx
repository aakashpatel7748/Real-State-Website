'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
    <section id="roi-calculator" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-900 border border-teal-200 mb-3 shadow-xs">
            <Calculator className="h-3.5 w-3.5 text-teal-600" />
            <span>Builder Cashflow Calculator</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight">
            Dekhein Aapki Kist (Installment) Recovery Kitni Fast Hogi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Manual phone call aur Word me notice banane ki jagah automated milestone demand letters se kitna samay aur paisa bachega:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
          {/* Controls Side (6 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800">
                  Total Plotted / High-Rise Units:
                </label>
                <span className="text-lg font-bold text-teal-800">{totalUnits} Plots / Units</span>
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
                <span>Small Colony (20 Units)</span>
                <span>Large Township (500 Units)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800">
                  Average Plot / Unit Price:
                </label>
                <span className="text-lg font-black text-emerald-700">₹ {avgPriceLakhs} Lakhs</span>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={avgPriceLakhs}
                onChange={(e) => setAvgPriceLakhs(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-1">
                <span>Affordable Plots (₹10 L)</span>
                <span>Luxury Villas / Commercial (₹2.5 Cr)</span>
              </div>
            </div>

            <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-4 text-xs sm:text-sm text-slate-700 space-y-1.5">
              <div className="font-bold text-teal-900">Automated ERP Advantage:</div>
              <p>
                Milestone certify hote hi (Plinth, Slab, Road) sabhi buyers ke demand notice WhatsApp aur Email par ek sath nikalte hain. 
                Pehle jo paisa aane me 45 din lagte the, wo 10 se 12 din me account me credit ho jata hai.
              </p>
            </div>
          </div>

          {/* Results Side (6 Cols) */}
          <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Estimated Financial Benefits
            </span>

            <div className="mt-6 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3.5">
                <div>
                  <div className="text-xs font-semibold text-slate-500">Total Project Value</div>
                  <div className="text-[11px] text-slate-400">Sabhi phases ko jodkar</div>
                </div>
                <div className="text-2xl font-black text-slate-900">
                  ₹ {totalProjectValueCr.toFixed(2)} Cr
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200 pb-3.5">
                <div>
                  <div className="text-xs font-semibold text-slate-500">Faster Cashflow Unlocked</div>
                  <div className="text-[11px] text-slate-400">Attki hui kist 11 din me recover</div>
                </div>
                <div className="text-2xl font-black text-emerald-700">
                  ₹ {estimatedStuckCashFlowLakhs.toLocaleString('en-IN')} Lakh
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200 pb-3.5">
                <div>
                  <div className="text-xs font-semibold text-slate-500">Bank Interest Saved</div>
                  <div className="text-[11px] text-slate-400">Early home loan &amp; installment realization</div>
                </div>
                <div className="text-2xl font-black text-amber-600">
                  ₹ {annualInterestSavedLakhs} Lakh
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-500">Staff Time Saved</div>
                  <div className="text-[11px] text-slate-400">Manual calling aur receipt typing ki bachat</div>
                </div>
                <div className="text-2xl font-bold text-teal-800">
                  {hoursSavedPerMonth} Hours / Month
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#042026] hover:bg-[#083c47] py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all"
              >
                <Sparkles className="h-4 w-4 text-emerald-400" />
                <span>Apni Colony ke Liye Free Demo Book Karein</span>
                <ArrowRight className="h-4 w-4 text-slate-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
