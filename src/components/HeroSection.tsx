import React from 'react';
import Link from 'next/link';
import { 
  Building, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  ReceiptIndianRupee,
  Layers,
  Sparkles
} from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Glows & Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-tr from-indigo-600/20 via-primary-500/15 to-emerald-500/10 blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300 backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-emerald-400">Complete Builder ERP</span>
            <span className="text-slate-400">|</span>
            <span>Plotted Townships, Flats, Villas & Commercial Shops</span>
            <ArrowRight className="h-3.5 w-3.5 text-indigo-400" />
          </div>

          {/* Main H1 - Crucial for SEO */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            The Purpose-Built ERP for <br />
            <span className="text-gradient-primary">Indian Colonizers</span> &{' '}
            <span className="text-gradient-emerald">Township Builders</span>
          </h1>

          {/* Subtitle with exact domain keywords */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-slate-300 max-w-3xl mx-auto">
            Stop losing lakhs in delayed installment demands, chaotic Excel sheets, and untracked broker commissions. 
            From <strong>Khasra/Khata land acquisition</strong> to <strong>interactive SVG plot maps</strong>, 
            <strong> WhatsApp lead capture</strong>, <strong>PDC cheque clearance</strong>, and <strong>double-entry accounting</strong> — 
            all in one 100% server-rendered, RERA-compliant platform.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-emerald-500 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all"
            >
              <Sparkles className="h-4 w-4" />
              <span>Schedule Live Product Demo</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/#interactive-map"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-slate-200 hover:bg-white/[0.08] hover:text-white backdrop-blur-md transition-all"
            >
              <MapPin className="h-4 w-4 text-emerald-400" />
              <span>Try Live Interactive Colony Map</span>
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Zero Double-Booking Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Bulk Milestone Demand Letters (PDF)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Single-Entry PDC Cheque Clearance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Multi-Company & Project RBAC</span>
            </div>
          </div>
        </div>

        {/* Quick Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl sm:grid-cols-4 lg:gap-8">
          <div className="border-r border-white/5 pr-4">
            <div className="text-3xl font-extrabold text-white">100%</div>
            <div className="text-xs text-slate-400 mt-1">Audit-Ready RERA & GST Compliance</div>
          </div>
          <div className="sm:border-r border-white/5 pr-4">
            <div className="text-3xl font-extrabold text-emerald-400">4.5x</div>
            <div className="text-xs text-slate-400 mt-1">Faster Dues Collection with Aging Alerts</div>
          </div>
          <div className="border-r border-white/5 pr-4">
            <div className="text-3xl font-extrabold text-indigo-400">0</div>
            <div className="text-xs text-slate-400 mt-1">Double Bookings with Unit Locking Engine</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-amber-400">5-in-1</div>
            <div className="text-xs text-slate-400 mt-1">CRM + Inventory + Accounts + Land + Billing</div>
          </div>
        </div>
      </div>
    </section>
  );
}
