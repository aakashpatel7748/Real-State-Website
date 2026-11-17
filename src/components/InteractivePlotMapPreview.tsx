'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  MapPin,
  ShieldCheck,
  Layers,
  Lock,
  CheckCircle2,
  Sparkles,
  Phone,
  ZoomIn,
  Eye,
  ArrowRight,
} from 'lucide-react';

export function InteractivePlotMapPreview() {
  return (
    <section id="interactive-map" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Scroll Reveal */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-900 border border-teal-200 mb-3 shadow-xs">
            <MapPin className="h-3.5 w-3.5 text-teal-600" />
            <span>Interactive Vector Layout Engine</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-slate-800 leading-tight">
            Live Colony Layout Map with 0% Double-Booking Lock
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Eliminate Excel spreadsheets and outdated paper blueprints. Here is how your colony layout map 
            displays live in the authentic <strong>Plotline ERP</strong> cloud interface:
          </p>
        </ScrollReveal>

        {/* 2-Column Balanced Grid (Image and Text Perfectly Aligned) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Authentic Enterprise Product Interface (7 Cols) */}
          <ScrollReveal direction="left" delay={150} duration={850} className="lg:col-span-7">
            <div className="group relative rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/10 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-teal-300">
              
              {/* Modern macOS/SaaS Window Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-200/90 bg-slate-100/95 px-4 py-2.5 select-none">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-[11px] font-semibold text-slate-600 hidden sm:inline">
                    Plotline ERP &bull; Units &amp; Layout Map
                  </span>
                </div>

                {/* Simulated Secure Address Bar */}
                <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-600 font-mono shadow-xs">
                  <Lock className="h-3 w-3 text-emerald-600" />
                  <span>plotline-erp.com/master/units-inventory/map</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 hidden sm:inline">Live Cloud Sync</span>
                </div>
              </div>

              {/* Enterprise High-DPI Colony Map Visual (No test accounts, pure realistic data) */}
              <div className="relative overflow-hidden bg-slate-100">
                <img
                  src="/screenshots/real-plot-map-enterprise.png"
                  alt="Plotline ERP Live Interactive Colony Plot Layout Map Interface"
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Bottom Real Color-Code Status Bar */}
              <div className="border-t border-slate-200/90 bg-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-slate-500 font-semibold text-[11px]">
                  <Eye className="h-3.5 w-3.5 text-slate-400" />
                  <span>Live Legend:</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] font-medium text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]" />
                    <span>Available (32)</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
                    <span>Reserved (6)</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3b82f6]" />
                    <span>Booked (20)</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#8b5cf6]" />
                    <span>Sold (4)</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#64748b]" />
                    <span>Blocked (2)</span>
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Key Commercial & Operational Advantages (5 Cols, Balanced Height) */}
          <ScrollReveal direction="right" delay={450} duration={850} className="lg:col-span-5 space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 mb-2">
                <Sparkles className="h-3.5 w-3.5 text-teal-600" />
                <span>Purpose-Built For Colonizers</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-semibold text-slate-800 leading-tight">
                Every Plot Synchronized Across Your Entire Sales Team
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Never allow two sales executives to take booking tokens on the same plot. The instant an agent holds a unit on mobile, it turns yellow/blue across all office screens within 200ms.
              </p>
            </div>

            {/* 2x2 Balanced Feature Grid (Compact and Clean) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-2xs hover:border-teal-300 transition-colors">
                <div className="h-7 w-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mb-2">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-semibold text-slate-800">
                  Live Color-Coded Status
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Real-time color tracking for Available, Reserved, Booked, and Sold units.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-2xs hover:border-teal-300 transition-colors">
                <div className="h-7 w-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mb-2">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-semibold text-slate-800">
                  0% Double-Booking Lock
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Atomic database lock prevents simultaneous token reservations on same unit.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-2xs hover:border-teal-300 transition-colors">
                <div className="h-7 w-7 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 mb-2">
                  <ZoomIn className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-semibold text-slate-800">
                  Instant Commercials &amp; PLC
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Click any plot for dimensions (30x60), Park/Corner PLC, and total value.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-2xs hover:border-teal-300 transition-colors">
                <div className="h-7 w-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mb-2">
                  <Layers className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-semibold text-slate-800">
                  Free CAD Digitization
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  We vectorize your AutoCAD (.dwg/.dxf) layout map during onboarding at zero cost.
                </p>
              </div>
            </div>

            {/* Action Button & Contact Pill (Never Wraps or Breaks) */}
            <div className="pt-1 space-y-3">
              <Link
                href="/contact"
                className="btn-shimmer w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#042026] hover:bg-[#083c47] py-3.5 px-6 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
              >
                <span>Upload Your Colony Map for a Live Demo</span>
                <ArrowRight className="h-4 w-4 text-emerald-400 shrink-0" />
              </Link>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 px-1">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-1.5 font-semibold text-slate-800 hover:text-teal-700 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Call Helpline: +91 98765 43210</span>
                </a>
                <span className="text-emerald-700 font-medium inline-flex items-center gap-1 text-[11px]">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                  <span>Free Excel Migration Included</span>
                </span>
              </div>
            </div>

          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
