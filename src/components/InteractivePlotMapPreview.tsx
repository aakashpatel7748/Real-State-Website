'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
    <section id="interactive-map" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200 mb-3">
            <MapPin className="h-3.5 w-3.5" />
            <span>Interactive Layout Feature</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Live Colony Naksha (Plot Layout Map)
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Kisi bhi plot par click karke dekhein. Site par sales rep ya office staff sabhi ko real-time status dikhta hai:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Plot Grid (8 Columns) */}
          <div className="lg:col-span-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-400">
                  Township Project
                </span>
                <h3 className="text-lg font-black text-slate-900">Royal Palm Enclave — Sector A &amp; B</h3>
              </div>

              {/* Status Legend */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-md bg-emerald-500 shadow-sm" />
                  <span className="text-slate-700">Available (Hara)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-md bg-amber-500 shadow-sm" />
                  <span className="text-slate-700">Reserved (Peela)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-md bg-rose-500 shadow-sm" />
                  <span className="text-slate-700">Booked (Laal)</span>
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
                let bgStyle = '';
                let borderStyle = '';
                let textBadge = '';

                if (plot.status === 'available') {
                  bgStyle = 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900';
                  borderStyle = isSelected ? 'border-emerald-600 ring-2 ring-emerald-500/30' : 'border-emerald-300';
                  textBadge = 'bg-emerald-600 text-white';
                } else if (plot.status === 'reserved') {
                  bgStyle = 'bg-amber-50 hover:bg-amber-100 text-amber-900';
                  borderStyle = isSelected ? 'border-amber-600 ring-2 ring-amber-500/30' : 'border-amber-300';
                  textBadge = 'bg-amber-600 text-white';
                } else if (plot.status === 'booked') {
                  bgStyle = 'bg-rose-50 hover:bg-rose-100 text-rose-900';
                  borderStyle = isSelected ? 'border-rose-600 ring-2 ring-rose-500/30' : 'border-rose-300';
                  textBadge = 'bg-rose-600 text-white';
                } else {
                  bgStyle = 'bg-slate-100 hover:bg-slate-200 text-slate-800';
                  borderStyle = isSelected ? 'border-slate-600 ring-2 ring-slate-400' : 'border-slate-300';
                  textBadge = 'bg-slate-600 text-white';
                }

                return (
                  <button
                    key={plot.id}
                    onClick={() => setSelectedPlot(plot)}
                    className={`flex flex-col text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${bgStyle} ${borderStyle}`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="text-base font-black">{plot.number}</span>
                      <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${textBadge}`}>
                        {plot.status}
                      </span>
                    </div>
                    <div className="text-xs font-semibold opacity-90">{plot.sizeSqFt} sq.ft</div>
                    <div className="text-[10px] opacity-75 mt-0.5 line-clamp-1">{plot.facing}</div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 rounded-xl bg-white p-3.5 border border-slate-200 text-xs text-slate-600 shadow-sm">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-blue-600 shrink-0" />
                <span>AutoCAD / CorelDraw / Town Planning se nikla SVG naksha direct support hota hai.</span>
              </div>
              <span className="font-bold text-emerald-700">Pinch-to-Zoom Supported</span>
            </div>
          </div>

          {/* Plot Inspector Drawer (4 Columns) */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Unit Inspector
                </span>
                <h4 className="text-2xl font-black text-slate-900">Plot {selectedPlot.number}</h4>
              </div>
              <span
                className={`rounded-lg px-2.5 py-1 text-xs font-bold uppercase ${
                  selectedPlot.status === 'available'
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : selectedPlot.status === 'reserved'
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : selectedPlot.status === 'booked'
                    ? 'bg-rose-100 text-rose-800 border border-rose-300'
                    : 'bg-slate-200 text-slate-800'
                }`}
              >
                {selectedPlot.status}
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Sector / Block</span>
                <span className="font-bold text-slate-900">{selectedPlot.sector}</span>
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
                <span className="text-slate-900 font-bold">Total Plot Value</span>
                <span className="font-black text-lg text-blue-700">₹ {calculateTotal(selectedPlot)}</span>
              </div>

              {selectedPlot.customer && (
                <div className="rounded-xl bg-slate-50 p-3 mt-3 border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-medium">Customer / Booking Status:</div>
                  <div className="font-bold text-slate-900 mt-0.5">{selectedPlot.customer}</div>
                  {selectedPlot.paidPercent && (
                    <div className="mt-2">
                      <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                        <span>Milestone Kist Paid</span>
                        <span className="text-emerald-700 font-bold">{selectedPlot.paidPercent}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-600 rounded-full"
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
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-blue-700 transition-all"
              >
                <Sparkles className="h-4 w-4" />
                <span>Apni Colony ka Naksha Dekhne ke Liye Demo Book Karein</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
