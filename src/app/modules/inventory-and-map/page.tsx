import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import { 
  MapPin, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  Car, 
  ShieldCheck,
  Building
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interactive SVG Colony Plot Layout Map & Master Inventory Management',
  description:
    'Visual SVG layout map with live unit status (Available, Reserved, Booked, Registered). Zero double-bookings with transactional locks, dynamic price index repricing, and parking slot management.',
};

export default function InventoryMapPage() {
  return (
    <div className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header with Scroll Reveal */}
        <ScrollReveal direction="up" className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-800 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:text-teal-950">Home</Link>
            <span>/</span>
            <span>Modules</span>
            <span>/</span>
            <span className="text-slate-500">Colony Naksha &amp; Inventory</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-slate-800 leading-tight">
            Interactive Colony Naksha &amp; <br />
            <span className="text-[#0d9488]">Master Inventory Control</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Replace outdated flex banners and printed paper maps with interactive digital vector layouts. 
            Color-coded plot availability updates in real time: Available (Green), Reserved (Yellow), and Booked (Red) with 0% double-booking risk.
          </p>
        </ScrollReveal>

        {/* Feature Grid with Staggered Scroll Reveal */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal direction="up" delay={50} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 font-bold mb-4">
              <MapPin className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">Live Vector SVG Layout Map</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Upload vector SVG maps exported from AutoCAD, CorelDraw, or Town Planning departments. Click any plot boundary to inspect unit dimensions and pricing.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={120} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">Zero Double-Booking Guarantee</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Atomic database locking: placing a token bayana reservation locks that plot across all user devices with a countdown timer, preventing duplicate sales.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={190} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 font-bold mb-4">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">Dynamic Rate Indexing</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Adjust base rate per sq.ft as infrastructure milestones advance (roads, street lights, boundary walls) without altering past customer agreements.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={260} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 font-bold mb-4">
              <Building className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">Plots, Flats, Villas &amp; Commercial</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Manage mixed township developments spanning residential plots, multistory towers, duplex villas, and commercial retail shops across sectors.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={330} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 font-bold mb-4">
              <Car className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">Parking Slot Allocation</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Maintain structured inventory of stilt and open parking slots. Link parking numbers directly to customer allotment agreements.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 font-bold mb-4">
              <Layers className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">PLC &amp; Premium Charges</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Automatically calculate preferential location charges (PLC) for corner plots, park-facing units, and main road frontages.
            </p>
          </ScrollReveal>
        </div>

        {/* CTA Banner with Scroll Reveal */}
        <ScrollReveal direction="up" delay={200} className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-xl transition-all duration-300">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-800">Want to see your colony map on the platform?</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">Send us your layout drawing or PDF; our engineering team will render it during your live demo.</p>
          </div>
          <Link
            href="/contact"
            className="btn-shimmer rounded-xl bg-[#042026] hover:bg-[#083c47] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all shrink-0 active:scale-95"
          >
            Schedule Map Demo
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
