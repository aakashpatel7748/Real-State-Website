import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  FileText,
  Clock,
  ShieldCheck,
  Share2,
  Lock,
  TrendingUp,
  Check,
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pre-Sales CRM & WhatsApp Lead Management for Real Estate Colonizers',
  description:
    'Capture inquiries instantly with dedicated webhooks for 99acres, MagicBricks, Housing.com and Meta. Features automated SHA-256 deduplication, WhatsApp click-to-chat, and quotation PDFs with 1-click booking conversion.',
};

export default function PreSalesPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Top 2-Column Showcase: Left Text & Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Breadcrumb, Heading, Benefits & CTA */}
          <ScrollReveal direction="left" duration={850} className="lg:col-span-5 space-y-6">
            <div>

              <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold tracking-tight text-slate-800 leading-normal sm:leading-relaxed lg:leading-[1.38]">
                Pre-Sales Pipeline &amp; <br />
                <span className="text-[#0d9488]">WhatsApp Lead Automation</span>
              </h1>
            </div>

            {/* Value Checkpoints */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">Instant Multi-Portal Webhooks:</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Leads from 99acres, MagicBricks, Housing &amp; Meta land on agent phones within 2 seconds.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">1-Click WhatsApp Engagement:</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Send colony layout brochures and cost sheets without saving phone numbers.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">Stage-Wise Deal Pipeline:</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Real-time tracking of New &rarr; Contacted &rarr; Site Visit &rarr; Negotiation &rarr; Booked.</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-xl bg-[#042026] hover:bg-[#083c47] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 active:scale-95 text-center"
              >
                <span>Schedule a Live Demo</span>
                <ArrowRight className="h-4 w-4 text-emerald-400" />
              </Link>

            </div>
          </ScrollReveal>

          {/* Right Column: Actual Real Software Sales Dashboard Showcase */}
          <ScrollReveal direction="right" duration={850} delay={150} className="lg:col-span-7">
            <div className="group relative rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/10 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-teal-300">

              {/* macOS/SaaS Window Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-200/90 bg-slate-100/95 px-4 py-2.5 select-none">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-[11px] font-semibold text-slate-600 hidden sm:inline">
                    Plotline ERP &bull; Pre-Sales &amp; CRM Dashboard
                  </span>
                </div>

                {/* Simulated Address Bar */}
                <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] text-slate-600 font-mono shadow-xs whitespace-nowrap">
                  <Lock className="h-3 w-3 text-emerald-600 shrink-0" />
                  <span>plotline-erp.com/crm</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 hidden sm:inline">Live Sync</span>
                </div>
              </div>

              {/* Real Software Sales Dashboard Vector SVG */}
              <div className="relative overflow-hidden bg-slate-950">
                <img
                  src="/screenshots/plotline-pre-sales-clean.svg"
                  alt="Plotline ERP Live Pre-Sales & Sales Conversion Dashboard"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Bottom Real Pipeline Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/90 bg-slate-50 px-4 py-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-slate-800">Green Valley Enclave</span>
                  <span className="text-slate-400">&bull;</span>
                  <span className="text-slate-500">Sales Dashboard</span>
                </div>
                <div className="flex items-center gap-4 text-[11px] font-medium">
                  <span className="text-emerald-700 font-semibold">&bull; 4 New Inquiries</span>
                  <span className="text-teal-700 font-semibold">&bull; 5 Bookings (₹1.95 Cr)</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Feature Grid with Staggered Scroll Reveal */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-slate-800 leading-normal sm:leading-relaxed lg:leading-[1.35]">
              Everything You Need to Scale Real Estate Sales
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Complete pre-sales toolset engineered specifically for plotted colonies, townships, and commercial layouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal direction="up" delay={50} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 font-bold mb-4">
                <Share2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Multi-Portal Webhook Ingestion</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dedicated webhook endpoints for every portal. Incoming leads are validated for duplicates and routed immediately to available sales executives.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={120} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold mb-4">
                <PhoneCall className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">1-Click WhatsApp Engagement</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Send greeting templates, layout brochures, and price sheets directly via WhatsApp without manually saving buyer phone numbers.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={190} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 font-bold mb-4">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Cost Sheet &amp; Quotation PDF</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Generate branded quotation PDFs factoring base rate, PLC charges, corner premiums, and installment schedules in under 10 seconds.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={260} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 font-bold mb-4">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">30-Minute Follow-Up Alerts</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Background schedulers remind sales teams of scheduled site visits and callback commitments so high-intent prospects stay engaged.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={330} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 font-bold mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Lost Reason Analytics</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When a prospect drops off, log root causes (Price, Distance, Loan Rejection) to optimize advertising campaigns and pricing strategies.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 font-bold mb-4">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Broker &amp; Channel Partner Tracking</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Property broker commissions accrue automatically upon confirmed bookings and unlock stage-wise as agreed buyer installments are cleared.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* CTA Banner with Scroll Reveal */}
        <ScrollReveal direction="up" delay={200} className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-xl transition-all duration-300">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-800">See the Pre-Sales CRM in Action</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">Schedule a 30-minute walkthrough to discover how colonizers accelerate lead conversion by 35%.</p>
          </div>
          <Link
            href="/contact"
            className="btn-shimmer rounded-xl bg-[#042026] hover:bg-[#083c47] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all shrink-0 active:scale-95"
          >
            Schedule Live Demo
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
