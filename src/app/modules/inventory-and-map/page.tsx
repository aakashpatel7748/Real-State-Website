import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  MapPin, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  Car, 
  Sparkles, 
  ShieldCheck,
  Building
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interactive SVG Colony Plot Layout Map & Master Inventory Management',
  description:
    'Visual SVG layout map with live unit status (Available, Reserved, Booked, Registered). Zero double-bookings with transactional locks, dynamic price index repricing, and parking slot management for plotted townships & high-rises.',
  keywords: [
    'Interactive Colony Layout Map Software',
    'Real Estate SVG Plot Map',
    'Real Estate Plot Inventory Management',
    'AutoCAD plot layout overlay software',
    'Dynamic property price index repricing',
    'Township parking slot management software',
  ],
};

export default function InventoryMapPage() {
  return (
    <div className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:text-emerald-300">Home</Link>
            <span>/</span>
            <span>ERP Modules</span>
            <span>/</span>
            <span className="text-slate-400">Inventory & Layout Map</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Interactive Colony Layout Map & <br />
            <span className="text-gradient-emerald">Master Inventory Control</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Replace static flex banners and confusing CAD prints with a real-time, interactive SVG layout map. 
            Color-coded unit statuses update across your team within milliseconds, completely eliminating the risk 
            of selling the same plot twice.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 mb-4">
              <MapPin className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Live SVG Colony Plot Map</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Smooth pan, zoom, and SVG vector inspection. Upload your town planning map directly or use our built-in 
              layout coordinate editor to assign polygon coordinates to plot numbers.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Zero Double-Booking Lock</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              When a sales executive initiates a token reservation, the unit is atomically locked in the database. 
              No other user can touch it until the token period either completes or expires via background crons.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 mb-4">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Dynamic Rate & Price Indexes</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              As roads, parks, and boundary walls are built, increase your rate per sq.ft across remaining unsold plots 
              automatically. Existing customer bookings and signed payment schedules remain 100% untouched.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 mb-4">
              <Building className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Plotted, Flats, Villas & Commercial</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Supports mixed-use townships with residential plots, multi-storey apartment towers, luxury villas, 
              and commercial retail shops. Manage phases, towers, floor numbers, carpet and super areas seamlessly.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 mb-4">
              <Car className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Parking Slot Allocation</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Track stilt, basement, and open parking slots. Link parking numbers directly to unit allotment letters 
              to avoid handover disputes during final possession.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 mb-4">
              <Layers className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Charge Master (PLC & Club)</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Standardize preferential location charges (PLC) for corner plots, park-facing units, and main road frontages. 
              Automatically add development charges and club membership fees into the booking summary.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-950/60 to-slate-900 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Want to see your colony map rendered on Plotline?</h3>
            <p className="text-sm text-slate-300 mt-1">Send us your layout PDF/CAD, and we will demonstrate it live.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-500 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg hover:shadow-emerald-500/30 transition-all shrink-0"
          >
            Upload Layout & Schedule Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
