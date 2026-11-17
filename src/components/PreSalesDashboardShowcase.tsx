'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  Sparkles,
  CheckCircle2,
  Phone,
  ArrowRight,
  Lock,
  MessageCircle,
  TrendingUp,
  Target,
  CalendarCheck,
  FileSpreadsheet,
} from 'lucide-react';

export function PreSalesDashboardShowcase() {
  return (
    <section id="pre-sales-crm" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading with Scroll Reveal */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-900 border border-teal-200 mb-3 shadow-xs">
            <TrendingUp className="h-3.5 w-3.5 text-teal-600" />
            <span>Pre-Sales &amp; Lead Conversion CRM</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-slate-800 leading-normal sm:leading-relaxed lg:leading-[1.4]">
            Live Sales Pipeline &amp; Lead Conversion Dashboard
          </h2>
          <p className="mt-3.5 text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
            Never lose prospective buyers in unstructured WhatsApp chats or misplaced diaries.
            Track inquiries, site visits, and booked revenue in real time:
          </p>
        </ScrollReveal>

        {/* 2-Column Balanced Grid: Left Text (5 cols) & Right Image (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column: Key Features & High-Converting Value Copy (5 Cols) */}
          <ScrollReveal direction="left" delay={150} duration={850} className="lg:col-span-5 space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 mb-2">
                <Sparkles className="h-3.5 w-3.5 text-teal-600" />
                <span>Automated Real Estate CRM</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-semibold text-slate-800 leading-normal sm:leading-relaxed lg:leading-[1.35]">
                Convert More Inquiries into Confirmed Token Bookings
              </h3>

            </div>

            {/* 2x2 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-3.5 shadow-2xs hover:border-teal-300 transition-colors">
                <div className="h-7 w-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mb-2">
                  <Target className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-semibold text-slate-800">
                  Instant Portal Webhook Sync
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Automatic lead capture from 99acres, MagicBricks, and Facebook Ads.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-3.5 shadow-2xs hover:border-teal-300 transition-colors">
                <div className="h-7 w-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mb-2">
                  <CalendarCheck className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-semibold text-slate-800">
                  Site Visit &amp; Follow-up Alerts
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Automated reminders ensure zero missed callbacks and tracked site visits.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-3.5 shadow-2xs hover:border-teal-300 transition-colors">
                <div className="h-7 w-7 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 mb-2">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-semibold text-slate-800">
                  Stage-Wise Deal Pipeline
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Monitor New, Contacted, Site Visit, Negotiation, and Booked milestones.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-3.5 shadow-2xs hover:border-teal-300 transition-colors">
                <div className="h-7 w-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mb-2">
                  <FileSpreadsheet className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-semibold text-slate-800">
                  WhatsApp Cost Quotations
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Generate branded plot cost sheets and dispatch to WhatsApp in 1-click.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-1 space-y-3">
              <Link
                href="/contact"
                className="btn-shimmer w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#042026] hover:bg-[#083c47] py-3.5 px-6 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
              >
                <span>Schedule a 1-on-1 Pre-Sales Live Demo</span>
                <ArrowRight className="h-4 w-4 text-emerald-400 shrink-0" />
              </Link>


            </div>
          </ScrollReveal>

          {/* Right Column: Actual Real Software Sales Dashboard Showcase (7 Cols) */}
          <ScrollReveal direction="right" delay={450} duration={850} className="lg:col-span-7">
            <div className="group relative rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/10 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-teal-300">

              {/* Modern macOS/SaaS Window Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-200/90 bg-slate-100/95 px-4 py-2.5 select-none">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-[11px] font-semibold text-slate-600 hidden sm:inline">
                    Plotline ERP &bull; Pre-Sales &amp; CRM Dashboard
                  </span>
                </div>

                {/* Simulated Secure Address Bar */}
                <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-600 font-mono shadow-xs">
                  <Lock className="h-3 w-3 text-emerald-600" />
                  <span>plotline-erp.com/pre-sales/dashboard</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 hidden sm:inline">Live Sync</span>
                </div>
              </div>

              {/* Real Software Sales Dashboard Vector SVG (Zero patches, pure native vector) */}
              <div className="relative overflow-hidden bg-slate-950">
                <img
                  src="/screenshots/plotline-pre-sales-clean.svg"
                  alt="Plotline ERP Live Pre-Sales & Sales Conversion Dashboard"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Bottom Real Pipeline Status Bar */}
              <div className="border-t border-slate-800 bg-[#0c1922] px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-[11px] font-medium">
                  <span className="text-emerald-400 font-semibold">Active Metrics:</span>
                  <span>4 New Inquiries</span>
                  <span>&bull;</span>
                  <span>5 Bookings (₹1.95 Cr)</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>99acres &bull; MagicBricks &bull; Meta Lead Ads Sync Active</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
