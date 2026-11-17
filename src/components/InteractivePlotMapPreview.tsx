'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Layers, 
  CheckCircle2, 
  Clock, 
  ShieldAlert, 
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
  { id: '1', number: 'A-101', sector: 'Sector A (Front Boulevard)', sizeSqFt: 1500, dimensions: '30 x 50 ft', facing: 'East Facing', ratePerSqFt: 2800, status: 'booked', customer: 'Rameshwar Sharma', paidPercent: 65 },
  { id: '2', number: 'A-102', sector: 'Sector A (Front Boulevard)', sizeSqFt: 1500, dimensions: '30 x 50 ft', facing: 'East Facing', ratePerSqFt: 2800, status: 'booked', customer: 'Kavita Chawla', paidPercent: 80 },
  { id: '3', number: 'A-103', sector: 'Sector A (Front Boulevard)', sizeSqFt: 1800, dimensions: '30 x 60 ft', facing: 'Park Facing (PLC)', ratePerSqFt: 3100, status: 'available' },
  { id: '4', number: 'A-104', sector: 'Sector A (Front Boulevard)', sizeSqFt: 1800, dimensions: '30 x 60 ft', facing: 'Park Facing (PLC)', ratePerSqFt: 3100, status: 'reserved', customer: 'Token Expiry in 48h' },
  { id: '5', number: 'A-105', sector: 'Sector A (Front Boulevard)', sizeSqFt: 1200, dimensions: '25 x 48 ft', facing: 'North Facing', ratePerSqFt: 2750, status: 'available' },
  { id: '6', number: 'A-106', sector: 'Sector A (Front Boulevard)', sizeSqFt: 2100, dimensions: '35 x 60 ft', facing: 'Corner (Dual Road)', ratePerSqFt: 3250, status: 'registered', customer: 'Dr. Alok Verma', paidPercent: 100 },
  { id: '7', number: 'B-201', sector: 'Sector B (Garden Enclave)', sizeSqFt: 1200, dimensions: '25 x 48 ft', facing: 'East Facing', ratePerSqFt: 2600, status: 'available' },
  { id: '8', number: 'B-202', sector: 'Sector B (Garden Enclave)', sizeSqFt: 1500, dimensions: '30 x 50 ft', facing: 'West Facing', ratePerSqFt: 2650, status: 'booked', customer: 'Sunil & Neha Saxena', paidPercent: 40 },
  { id: '9', number: 'B-203', sector: 'Sector B (Garden Enclave)', sizeSqFt: 1500, dimensions: '30 x 50 ft', facing: 'West Facing', ratePerSqFt: 2650, status: 'available' },
  { id: '10', number: 'B-204', sector: 'Sector B (Garden Enclave)', sizeSqFt: 1800, dimensions: '30 x 60 ft', facing: 'Park Facing (PLC)', ratePerSqFt: 2950, status: 'booked', customer: 'Deepak Patel', paidPercent: 90 },
  { id: '11', number: 'B-205', sector: 'Sector B (Garden Enclave)', sizeSqFt: 2400, dimensions: '40 x 60 ft', facing: 'Corner (Main Road)', ratePerSqFt: 3300, status: 'registered', customer: 'Rajesh Agrawal', paidPercent: 100 },
  { id: '12', number: 'B-206', sector: 'Sector B (Garden Enclave)', sizeSqFt: 1200, dimensions: '25 x 48 ft', facing: 'East Facing', ratePerSqFt: 2600, status: 'reserved', customer: 'Cheque Clearance in Progress' },
];

export function InteractivePlotMapPreview() {
  const [selectedPlot, setSelectedPlot] = useState<PlotItem>(SAMPLE_PLOTS[2]);

  const calculateTotal = (plot: PlotItem) => {
    return (plot.sizeSqFt * plot.ratePerSqFt).toLocaleString('en-IN');
  };

  return (
    <section id="interactive-map" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 mb-3">
            <MapPin className="h-3.5 w-3.5" />
            <span>Interactive Layout Engine</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Live Colony Layout Map with <br />
            <span className="text-gradient-emerald">Instant Unit Locking</span>
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Never suffer double-bookings again. Your sales staff sees live plot availability, dimensions, facing, rate index pricing, and reservation expiry dates. Click any plot below to inspect:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Plot Grid (8 Columns) */}
          <div className="lg:col-span-8 rounded-3xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Project Layout
                </span>
                <h3 className="text-lg font-bold text-white">Royal Palm Enclave — Sector A & B</h3>
              </div>

              {/* Status Legend */}
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-md bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                  <span className="text-slate-300">Available</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-md bg-amber-500 shadow-sm shadow-amber-500/50" />
                  <span className="text-slate-300">Reserved (Token)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-md bg-rose-500 shadow-sm shadow-rose-500/50" />
                  <span className="text-slate-300">Booked (Agreement)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-md bg-slate-600" />
                  <span className="text-slate-300">Registered</span>
                </span>
              </div>
            </div>

            {/* Interactive Grid Map */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {SAMPLE_PLOTS.map((plot) => {
                const isSelected = selectedPlot.id === plot.id;
                let bgStyle = '';
                let borderStyle = '';
                let textColor = '';

                if (plot.status === 'available') {
                  bgStyle = 'bg-emerald-950/30 hover:bg-emerald-950/50';
                  borderStyle = isSelected ? 'border-emerald-400 ring-2 ring-emerald-400/30' : 'border-emerald-500/30';
                  textColor = 'text-emerald-400';
                } else if (plot.status === 'reserved') {
                  bgStyle = 'bg-amber-950/30 hover:bg-amber-950/50';
                  borderStyle = isSelected ? 'border-amber-400 ring-2 ring-amber-400/30' : 'border-amber-500/30';
                  textColor = 'text-amber-400';
                } else if (plot.status === 'booked') {
                  bgStyle = 'bg-rose-950/30 hover:bg-rose-950/50';
                  borderStyle = isSelected ? 'border-rose-400 ring-2 ring-rose-400/30' : 'border-rose-500/30';
                  textColor = 'text-rose-400';
                } else {
                  bgStyle = 'bg-slate-800/40 hover:bg-slate-800/60';
                  borderStyle = isSelected ? 'border-slate-300 ring-2 ring-slate-300/30' : 'border-slate-600/40';
                  textColor = 'text-slate-400';
                }

                return (
                  <button
                    key={plot.id}
                    onClick={() => setSelectedPlot(plot)}
                    className={`flex flex-col text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${bgStyle} ${borderStyle}`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="text-base font-bold text-white">{plot.number}</span>
                      <span className={`text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded ${textColor} bg-white/5`}>
                        {plot.status}
                      </span>
                    </div>
                    <div className="text-xs text-slate-300 font-medium">{plot.sizeSqFt} sq.ft</div>
                    <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">{plot.facing}</div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between rounded-xl bg-white/[0.03] p-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-indigo-400" />
                <span>Supports custom SVG vector overlays uploaded directly from AutoCAD / Town Planning maps.</span>
              </div>
              <span className="text-emerald-400 font-medium">Pan & Zoom Supported</span>
            </div>
          </div>

          {/* Plot Inspector Drawer (4 Columns) */}
          <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Unit Inspector
                </span>
                <h4 className="text-2xl font-extrabold text-white">Plot {selectedPlot.number}</h4>
              </div>
              <span
                className={`rounded-lg px-2.5 py-1 text-xs font-bold uppercase ${
                  selectedPlot.status === 'available'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : selectedPlot.status === 'reserved'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : selectedPlot.status === 'booked'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : 'bg-slate-700 text-slate-300'
                }`}
              >
                {selectedPlot.status}
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Sector / Block</span>
                <span className="font-medium text-white">{selectedPlot.sector}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Dimensions</span>
                <span className="font-medium text-white">{selectedPlot.dimensions}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Plot Area</span>
                <span className="font-medium text-white">{selectedPlot.sizeSqFt} sq.ft ({(selectedPlot.sizeSqFt / 9).toFixed(1)} sq.yd)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Facing / PLC</span>
                <span className="font-medium text-emerald-400">{selectedPlot.facing}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Price Index Rate</span>
                <span className="font-medium text-white">₹ {selectedPlot.ratePerSqFt.toLocaleString('en-IN')} / sq.ft</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400 font-semibold">Total Basic Value</span>
                <span className="font-extrabold text-base text-indigo-400">₹ {calculateTotal(selectedPlot)}</span>
              </div>

              {selectedPlot.customer && (
                <div className="rounded-xl bg-white/5 p-3 mt-3 border border-white/5">
                  <div className="text-[11px] text-slate-400">Booking / Customer:</div>
                  <div className="font-semibold text-white mt-0.5">{selectedPlot.customer}</div>
                  {selectedPlot.paidPercent && (
                    <div className="mt-2">
                      <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                        <span>Milestone Installments Paid</span>
                        <span className="text-emerald-400 font-bold">{selectedPlot.paidPercent}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
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
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-emerald-500 py-3 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all"
              >
                <Sparkles className="h-4 w-4" />
                <span>Book a Demo to See Full Layout Editor</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
