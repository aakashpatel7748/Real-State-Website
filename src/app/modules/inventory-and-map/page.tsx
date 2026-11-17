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
  Building,
  Lock,
  Check,
  ArrowRight,
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interactive SVG Colony Plot Layout Map & Master Inventory Management',
  description:
    'Visual SVG layout map with live unit status (Available, Reserved, Booked, Registered). Zero double-bookings with transactional locks, dynamic price index repricing, and parking slot management.',
};

export default function InventoryMapPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column Showcase: Left Text & Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Breadcrumb, Heading, Benefits & CTA */}
          <ScrollReveal direction="left" duration={850} className="lg:col-span-5 space-y-6">
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-bold text-teal-800 mb-3 uppercase tracking-wider">
                <Link href="/" className="hover:text-teal-950">Home</Link>
                <span>/</span>
                <Link href="/#modules" className="hover:text-teal-950">Modules</Link>
                <span>/</span>
                <span className="text-slate-500">Colony Naksha &amp; Inventory</span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-900 border border-teal-200 mb-3 shadow-xs">
                <MapPin className="h-3.5 w-3.5 text-teal-600" />
                <span>Purpose-Built for Colony Developers &amp; Builders</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold tracking-tight text-slate-800 leading-normal sm:leading-relaxed lg:leading-[1.38]">
                Interactive Colony Naksha &amp; <br />
                <span className="text-[#0d9488]">Master Inventory Control</span>
              </h1>

              <p className="mt-4 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                Replace static paper blueprints, printed flex boards, and outdated Excel registries with interactive digital vector layouts. 
                Synchronize real-time plot availability across your entire on-site and remote sales team within 200 milliseconds.
              </p>
            </div>

            {/* Value Checkpoints */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">Real-Time Color-Coded Status:</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Available (Green), Reserved (Yellow), Booked (Blue), Sold (Purple), and Blocked (Grey).</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">Atomic 0% Double-Booking Lock:</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Database-level isolation lock prevents simultaneous booking submissions on the same plot.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">Instant Plot Commercials &amp; PLC:</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Hover or tap any plot to view dimensions (30x50, 40x60), sq yards, road width, and PLC values.</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-xl bg-[#042026] hover:bg-[#083c47] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 active:scale-95 text-center"
              >
                <span>Upload Colony Map for Demo</span>
                <ArrowRight className="h-4 w-4 text-emerald-400" />
              </Link>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 transition-all shadow-xs text-center"
              >
                <Phone className="h-4 w-4 text-[#0d9488]" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive Plot Map Vector SVG Showcase */}
          <ScrollReveal direction="right" duration={850} delay={150} className="lg:col-span-7">
            <div className="group relative rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/10 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-teal-300">
              
              {/* macOS/SaaS Window Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-200/90 bg-slate-100/95 px-4 py-2.5 select-none">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-[11px] font-semibold text-slate-600 hidden sm:inline">
                    Plotline ERP &bull; Units &amp; Layout Map
                  </span>
                </div>

                {/* Simulated Address Bar */}
                <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-600 font-mono shadow-xs">
                  <Lock className="h-3 w-3 text-emerald-600" />
                  <span>plotline-erp.com/master/units-inventory/map</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 hidden sm:inline">Live Sync</span>
                </div>
              </div>

              {/* Real Software Colony Plot Map Vector SVG */}
              <div className="relative overflow-hidden bg-slate-50">
                <img
                  src="/screenshots/plotline-plot-map-clean.svg"
                  alt="Plotline ERP Interactive Colony Plot Map & Unit Inventory"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Bottom Real Map Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/90 bg-white px-4 py-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-slate-800">Green Valley Enclave</span>
                  <span className="text-slate-400">&bull;</span>
                  <span className="text-slate-500">Master Colony Map</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-medium">
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span> Available (3)
                  </span>
                  <span className="inline-flex items-center gap-1 text-blue-700 font-semibold">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span> Booked (5)
                  </span>
                  <span className="inline-flex items-center gap-1 text-purple-700 font-semibold">
                    <span className="h-2 w-2 rounded-full bg-purple-500"></span> Sold (1)
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Feature Grid with Staggered Scroll Reveal */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-slate-800 leading-normal sm:leading-relaxed lg:leading-[1.35]">
              Engineered for Plotted Colonies &amp; Integrated Townships
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Manage sectors, phases, residential plots, villas, and commercial spaces with total transactional integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal direction="up" delay={50} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 font-bold mb-4">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Live Vector SVG Layout Map</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upload vector SVG maps exported from AutoCAD, CorelDraw, or Town Planning departments. Click any plot boundary to inspect unit dimensions and pricing.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={120} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Zero Double-Booking Guarantee</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Atomic database locking: placing a token bayana reservation locks that plot across all user devices with a countdown timer, preventing duplicate sales.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={190} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 font-bold mb-4">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Dynamic Rate Indexing</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Adjust base rate per sq.ft as infrastructure milestones advance (roads, street lights, boundary walls) without altering past customer agreements.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={260} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 font-bold mb-4">
                <Building className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Plots, Flats, Villas &amp; Commercial</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Manage mixed township developments spanning residential plots, multistory towers, duplex villas, and commercial retail shops across sectors.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={330} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 font-bold mb-4">
                <Car className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Parking Slot Allocation</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Maintain structured inventory of stilt and open parking slots. Link parking numbers directly to customer allotment agreements.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 font-bold mb-4">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">PLC &amp; Premium Charges</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automatically calculate preferential location charges (PLC) for corner plots, park-facing units, and main road frontages.
              </p>
            </ScrollReveal>
          </div>
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
