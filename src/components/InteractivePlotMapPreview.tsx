'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import { 
  MapPin, 
  CheckCircle2, 
  Clock, 
  FileCheck2, 
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';

interface PlotItem {
  id: string;
  number: string;
  sector: string;
  sizeSqFt: number;
  dimensions: string;
  facing: string;
  ratePerSqFt: number;
  status: 'available' | 'reserved' | 'booked' | 'registered';
  customer?: string;
  paidPercent?: number;
}

const SAMPLE_PLOTS: PlotItem[] = [
  { id: '1', number: 'A-101', sector: 'Sector A (Main Front)', sizeSqFt: 1500, dimensions: '30 x 50 ft', facing: 'East Facing', ratePerSqFt: 2800, status: 'booked', customer: 'Rameshwar Sharma', paidPercent: 65 },
  { id: '2', number: 'A-102', sector: 'Sector A (Main Front)', sizeSqFt: 1500, dimensions: '30 x 50 ft', facing: 'East Facing', ratePerSqFt: 2800, status: 'booked', customer: 'Kavita Chawla', paidPercent: 80 },
  { id: '3', number: 'A-103', sector: 'Sector A (Main Front)', sizeSqFt: 1800, dimensions: '30 x 60 ft', facing: 'Park Facing (PLC)', ratePerSqFt: 3100, status: 'available' },
  { id: '4', number: 'A-104', sector: 'Sector A (Main Front)', sizeSqFt: 1800, dimensions: '30 x 60 ft', facing: 'Park Facing (PLC)', ratePerSqFt: 3100, status: 'reserved', customer: 'Token Expiry in 48h' },
  { id: '5', number: 'A-105', sector: 'Sector A (Main Front)', sizeSqFt: 1200, dimensions: '25 x 48 ft', facing: 'North Facing', ratePerSqFt: 2750, status: 'available' },
  { id: '6', number: 'A-106', sector: 'Sector A (Main Front)', sizeSqFt: 2100, dimensions: '35 x 60 ft', facing: 'Corner (Dual Road)', ratePerSqFt: 3250, status: 'registered', customer: 'Dr. Alok Verma', paidPercent: 100 },
  { id: '7', number: 'B-201', sector: 'Sector B (Garden Enclave)', sizeSqFt: 1200, dimensions: '25 x 48 ft', facing: 'East Facing', ratePerSqFt: 2600, status: 'available' },
  { id: '8', number: 'B-202', sector: 'Sector B (Garden Enclave)', sizeSqFt: 1500, dimensions: '30 x 50 ft', facing: 'West Facing', ratePerSqFt: 2650, status: 'booked', customer: 'Sunil & Neha Saxena', paidPercent: 40 },
  { id: '9', number: 'B-203', sector: 'Sector B (Garden Enclave)', sizeSqFt: 1500, dimensions: '30 x 50 ft', facing: 'West Facing', ratePerSqFt: 2650, status: 'available' },
  { id: '10', number: 'B-204', sector: 'Sector B (Garden Enclave)', sizeSqFt: 1800, dimensions: '30 x 60 ft', facing: 'Park Facing (PLC)', ratePerSqFt: 2950, status: 'booked', customer: 'Deepak Patel', paidPercent: 90 },
  { id: '11', number: 'B-205', sector: 'Sector B (Garden Enclave)', sizeSqFt: 2400, dimensions: '40 x 60 ft', facing: 'Corner (Main Road)', ratePerSqFt: 3300, status: 'registered', customer: 'Rajesh Agrawal', paidPercent: 100 },
  { id: '12', number: 'B-206', sector: 'Sector B (Garden Enclave)', sizeSqFt: 1200, dimensions: '25 x 48 ft', facing: 'East Facing', ratePerSqFt: 2600, status: 'reserved', customer: 'Cheque in Vault (Under Clearance)' },
];

export function InteractivePlotMapPreview() {
  const [selectedPlot, setSelectedPlot] = useState<PlotItem>(SAMPLE_PLOTS[2]);

  const calculateTotal = (plot: PlotItem) => {
    return (plot.sizeSqFt * plot.ratePerSqFt).toLocaleString('en-IN');
  };

  return (
    <section id="interactive-map" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Scroll Reveal */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-900 border border-teal-200 mb-3 shadow-xs">
            <MapPin className="h-3.5 w-3.5 text-teal-600" />
            <span>Interactive Layout Feature</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-slate-800 leading-tight">
            Live Interactive Colony Plot Layout Map
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Click on any plot to preview live status, dimensions, facing, and customer payment progress:
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Plot Grid (8 Columns) with Scroll Reveal from Left */}
          <ScrollReveal direction="left" delay={150} duration={850} className="lg:col-span-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Township Project
                </span>
                <h3 className="text-lg font-semibold text-slate-800">Royal Palm Enclave — Sector A &amp; B</h3>
              </div>

              {/* Status Legend */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-md bg-emerald-500 shadow-sm" />
                  <span className="text-slate-700">Available (Green)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-md bg-amber-500 shadow-sm" />
                  <span className="text-slate-700">Reserved (Yellow)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-md bg-rose-500 shadow-sm" />
                  <span className="text-slate-700">Booked (Red)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-md bg-slate-500" />
                  <span className="text-slate-700">Registry Done</span>
                </span>
              </div>
            </div>

            {/* Interactive Grid Map */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {SAMPLE_PLOTS.map((plot) => {
                const isSelected = selectedPlot.id === plot.id;
                let bgStyle = 'bg-emerald-50 border-emerald-300 text-emerald-950 hover:bg-emerald-100';
                let badgeStyle = 'bg-emerald-600 text-white';
                let label = 'Available';

                if (plot.status === 'reserved') {
                  bgStyle = 'bg-amber-50 border-amber-300 text-amber-950 hover:bg-amber-100';
                  badgeStyle = 'bg-amber-500 text-white';
                  label = 'Reserved';
                } else if (plot.status === 'booked') {
                  bgStyle = 'bg-rose-50 border-rose-300 text-rose-950 hover:bg-rose-100';
                  badgeStyle = 'bg-rose-600 text-white';
                  label = 'Booked';
                } else if (plot.status === 'registered') {
                  bgStyle = 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200';
                  badgeStyle = 'bg-slate-600 text-white';
                  label = 'Registry Done';
                }

                return (
                  <button
                    key={plot.id}
                    onClick={() => setSelectedPlot(plot)}
                    className={`rounded-xl border-2 p-3 text-left transition-all duration-200 cursor-pointer relative hover:-translate-y-0.5 active:scale-95 ${bgStyle} ${
                      isSelected ? 'ring-2 ring-teal-600 ring-offset-2 scale-102 shadow-md' : 'shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-semibold tracking-tight">{plot.number}</span>
                      <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${badgeStyle}`}>
                        {label}
                      </span>
                    </div>
                    <div className="text-[11px] font-medium opacity-80">{plot.dimensions}</div>
                    <div className="text-[11px] font-semibold mt-1">₹ {plot.ratePerSqFt} / sq.ft</div>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Selected Unit Details (4 Columns) with Scroll Reveal from Right */}
          <ScrollReveal direction="right" delay={450} duration={850} className="lg:col-span-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
              <Info className="h-4 w-4 text-teal-600" />
              <span>Selected Unit Details</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800">
              Plot {selectedPlot.number}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">{selectedPlot.sector}</p>

            <div className="mt-5 space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Status</span>
                <span className="font-bold capitalize text-slate-900">{selectedPlot.status}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Dimensions</span>
                <span className="font-bold text-slate-900">{selectedPlot.dimensions}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Plot Area</span>
                <span className="font-bold text-slate-900">{selectedPlot.sizeSqFt} sq.ft ({(selectedPlot.sizeSqFt / 9).toFixed(1)} sq.yd)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Facing / PLC</span>
                <span className="font-bold text-emerald-700">{selectedPlot.facing}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Rate per Sq.Ft</span>
                <span className="font-bold text-slate-900">₹ {selectedPlot.ratePerSqFt.toLocaleString('en-IN')} / sq.ft</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-700 font-semibold">Total Plot Value</span>
                <span className="font-semibold text-lg text-teal-800">₹ {calculateTotal(selectedPlot)}</span>
              </div>

              {selectedPlot.customer && (
                <div className="rounded-xl bg-slate-50 p-3 mt-3 border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-medium">Customer / Booking Status:</div>
                  <div className="font-bold text-slate-900 mt-0.5">{selectedPlot.customer}</div>
                  {selectedPlot.paidPercent && (
                    <div className="mt-2">
                      <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                        <span>Milestone Installment Paid</span>
                        <span className="text-emerald-700 font-bold">{selectedPlot.paidPercent}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                          style={{ width: `${selectedPlot.paidPercent}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="mt-6 pt-2">
              <Link
                href="/contact"
                className="btn-shimmer w-full flex items-center justify-center gap-2 rounded-xl bg-[#042026] hover:bg-[#083c47] py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition-all text-center hover:-translate-y-0.5 active:scale-95"
              >
                <Sparkles className="h-4 w-4 text-emerald-400" />
                <span>Upload Your Colony Map for a Demo</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
