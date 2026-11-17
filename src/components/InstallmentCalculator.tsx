'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  TrendingUp, 
  ReceiptIndianRupee, 
  Clock, 
  FileCheck2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export function InstallmentCalculator() {
  const [totalUnits, setTotalUnits] = useState(120);
  const [avgPriceLakhs, setAvgPriceLakhs] = useState(35); // in Lakhs

  const totalProjectValueCr = (totalUnits * avgPriceLakhs) / 100;
  // Based on Indian real estate benchmarks:
  // Delayed payments average 15-20% of project cashflow stuck without automated demand letters
  const estimatedStuckCashFlowLakhs = Math.round(totalUnits * avgPriceLakhs * 0.18);
  const annualInterestSavedLakhs = ((estimatedStuckCashFlowLakhs * 0.12) / 12 * 4).toFixed(1); // 4 months faster recovery at 12% p.a.
  const hoursSavedPerMonth = Math.round(totalUnits * 1.5);

  return (
    <section id="roi-calculator" className="relative py-20 lg:py-28 bg-[#070b14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 mb-3">
            <Calculator className="h-3.5 w-3.5" />
            <span>Builder Cashflow Calculator</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Calculate How Much Faster Your <br />
            <span className="text-gradient-primary">Installments Will Be Recovered</span>
          </h2>
          <p className="mt-4 text-base text-slate-400">
            See the direct financial impact of automated milestone demand letters, aging alerts, and single-clearance PDC registers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-white/10 bg-slate-900/40 p-6 sm:p-10 backdrop-blur-xl">
          {/* Controls Side (6 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-white">
                  Total Plotted / High-Rise Units:
                </label>
                <span className="text-lg font-bold text-indigo-400">{totalUnits} Units</span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="10"
                value={totalUnits}
                onChange={(e) => setTotalUnits(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>Small Colony (20 Units)</span>
                <span>Large Township (500 Units)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-white">
                  Average Unit Price:
                </label>
                <span className="text-lg font-bold text-emerald-400">₹ {avgPriceLakhs} Lakhs</span>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={avgPriceLakhs}
                onChange={(e) => setAvgPriceLakhs(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>Affordable Plots (₹10 L)</span>
                <span>Luxury Villas / Commercial (₹2.5 Cr)</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#080d19] p-4 text-xs text-slate-400 space-y-2">
              <div className="font-semibold text-white">Automated ERP Advantage:</div>
              <p>
                Instead of office staff typing individual demand notices in Word, Plotline runs project-wide 
                demand crons, tracking every overdue milestone (Plinth, Brickwork, Slab, Finishing) with automated interest calculations.
              </p>
            </div>
          </div>

          {/* Results Side (6 Cols) */}
          <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-emerald-950/30 p-6 sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Estimated Monthly & Project Gains
            </span>

            <div className="mt-6 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs text-slate-400">Total Project Value</div>
                  <div className="text-xs text-slate-400 font-normal">Across all phases</div>
                </div>
                <div className="text-2xl font-extrabold text-white">
                  ₹ {totalProjectValueCr.toFixed(2)} Cr
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs text-slate-400">Faster Cashflow Unlocked</div>
                  <div className="text-xs text-slate-400 font-normal">Overdue dues recovered in 11 days vs 45 days</div>
                </div>
                <div className="text-2xl font-extrabold text-emerald-400">
                  ₹ {estimatedStuckCashFlowLakhs.toLocaleString('en-IN')} Lakh
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs text-slate-400">Capital Interest Saved</div>
                  <div className="text-xs text-slate-400 font-normal">Through early bank loan disbursements</div>
                </div>
                <div className="text-2xl font-extrabold text-amber-400">
                  ₹ {annualInterestSavedLakhs} Lakh
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Staff Time Reclaimed</div>
                  <div className="text-xs text-slate-400 font-normal">Automating demands, receipts & ledger entries</div>
                </div>
                <div className="text-2xl font-extrabold text-indigo-400">
                  {hoursSavedPerMonth} Hours / Mo
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-emerald-500 py-3 text-xs sm:text-sm font-semibold text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
              >
                <Sparkles className="h-4 w-4" />
                <span>Get a Custom Cashflow Plan for Your Township</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
