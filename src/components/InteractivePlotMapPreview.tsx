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
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-900 border border-teal-200 mb-3 shadow-xs">
            <MapPin className="h-3.5 w-3.5 text-teal-600" />
            <span>Interactive Vector Layout Engine</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-slate-800 leading-tight">
            Live Colony Layout Map with 0% Double-Booking Lock
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Eliminate Excel spreadsheets and outdated paper blueprints. Here is how your colony layout map 
            displays live in the authentic <strong>Plotline ERP</strong> cloud interface:
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Improved Product Screenshot Showcase (7 Columns) with Scroll Reveal */}
          <ScrollReveal direction="left" delay={150} duration={850} className="lg:col-span-7">
            <div className="group relative rounded-2xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden transition-all duration-300 hover:shadow-3xl hover:border-teal-300">
              
              {/* Modern macOS/SaaS Window Top Header */}
              <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-100/90 px-4 py-3 select-none">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-400/90" />
                  <div className="h-3 w-3 rounded-full bg-amber-400/90" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400/90" />
                  <span className="ml-2 text-[11px] font-medium text-slate-500 hidden sm:inline">
                    Plotline ERP &bull; Units &amp; Layout Map
                  </span>
                </div>

                {/* Simulated Secure Cloud Address Bar */}
                <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-600 font-mono shadow-xs">
                  <Lock className="h-3 w-3 text-emerald-600" />
                  <span>plotline-erp.com/master/units-inventory/map</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-700 hidden sm:inline">Live Sync</span>
                </div>
              </div>

              {/* Real Product Screenshot with Floating Interactive Badges */}
              <div className="relative overflow-hidden bg-slate-50">
                <img
                  src="/screenshots/real-plot-map-clean-hd.png"
                  alt="Plotline ERP Live Interactive Colony Plot Layout Map Interface"
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                  loading="lazy"
                />

                {/* Floating Badge 1: Top Right Vector Engine Tag */}
                <div className="absolute top-3 right-3 rounded-lg border border-slate-200/90 bg-white/95 px-3 py-1.5 shadow-md backdrop-blur-xs flex items-center gap-1.5 text-[11px] font-semibold text-slate-800">
                  <Layers className="h-3.5 w-3.5 text-teal-600" />
                  <span>Vector CAD / SVG Engine</span>
                </div>

                {/* Floating Badge 2: Bottom Left Atomic Lock */}
                <div className="absolute bottom-3 left-3 rounded-lg border border-emerald-500/30 bg-emerald-950/85 px-3 py-1.5 shadow-md backdrop-blur-xs flex items-center gap-2 text-[11px] font-semibold text-emerald-300">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>0% Double-Booking Atomic Lock Active</span>
                </div>
              </div>

              {/* Bottom Color-Code Status Bar */}
              <div className="border-t border-slate-200 bg-white px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-slate-500 font-medium text-[11px]">
                  <Eye className="h-3.5 w-3.5 text-slate-400" />
                  <span>Live Legend:</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] font-medium text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]" />
                    <span>Available</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
                    <span>Reserved (Token)</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3b82f6]" />
                    <span>Booked</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#8b5cf6]" />
                    <span>Sold</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#64748b]" />
                    <span>Blocked</span>
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Key Commercial & Operational Advantages (5 Columns) with Scroll Reveal */}
          <ScrollReveal direction="right" delay={450} duration={850} className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 mb-2">
                <Sparkles className="h-3.5 w-3.5 text-teal-600" />
                <span>Purpose-Built For Colonizers</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-slate-800 leading-tight">
                Every Plot Synchronized Across Your Entire Sales Team
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Never allow two sales executives to take booking tokens on the same plot. The instant an agent holds a unit on their mobile phone, the unit turns yellow/blue across all office screens within 200ms.
              </p>
            </div>

            {/* 4 Feature Highlights */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-2xs hover:border-teal-300 transition-colors">
                <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-800">
                    Real-Time Color-Coded Status
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Available (Green), Reserved (Yellow), Booked (Blue), Sold (Purple), and Blocked (Grey) maintain complete clarity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-2xs hover:border-teal-300 transition-colors">
                <div className="h-8 w-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-800">
                    Atomic Database Lock (0% Double-Booking)
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Database-level isolation lock prevents simultaneous booking submissions on overlapping plots and corner units.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-2xs hover:border-teal-300 transition-colors">
                <div className="h-8 w-8 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 mt-0.5">
                  <ZoomIn className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-800">
                    Instant Plot Commercials &amp; PLC
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Hover or tap any plot to view dimensions (30x50, 40x60), square yards, road width, Park/Corner PLC, and total calculated value.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-2xs hover:border-teal-300 transition-colors">
                <div className="h-8 w-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-800">
                    Free AutoCAD / PDF Layout Digitization
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Our engineering team vectorizes your AutoCAD (.dwg/.dxf) or town-planning PDF map during onboarding at zero extra cost.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/contact"
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#042026] hover:bg-[#083c47] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <span>Upload Your Colony Map for a Demo</span>
                <ArrowRight className="h-4 w-4 text-emerald-400" />
              </Link>

              <a
                href="tel:+919876543210"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-700 transition-all active:scale-95"
              >
                <Phone className="h-4 w-4 text-emerald-600" />
                <span>+91 98765 43210</span>
              </a>
            </div>

            <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
              <span>Free Excel unit list migration included with every setup.</span>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
