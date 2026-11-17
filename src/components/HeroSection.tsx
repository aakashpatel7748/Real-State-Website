import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Calendar,
  Sparkles,
  Layers,
  FileCheck2
} from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-bold text-blue-700 shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Built Specifically for Indian Colonizers &amp; Plotted Developers</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>

          {/* Main H1 Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]">
            India&apos;s Complete <span className="text-blue-600">Colony &amp; Real Estate ERP</span> Software
          </h1>

          {/* Clean Legible Subheadline */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Ab Excel sheets aur purane register chodiye. <strong>Interactive Colony Naksha (Layout Map)</strong>, 
            <strong> Live Unit Status (Sold, Unsold, Blocked)</strong>, <strong>Kist (Installment) Demand Letters</strong>, 
            <strong> Post-Dated Cheque (PDC) Vault</strong>, aur <strong>Khasra-Khata Land Management</strong> — sab kuch ek hi software me.
          </p>

          {/* Conversion Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition-all hover:scale-[1.02]"
            >
              <Calendar className="h-4 w-4" />
              <span>Book 1-on-1 Free Live Demo</span>
            </Link>

            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-800 hover:bg-slate-50 transition-all shadow-sm"
            >
              <Phone className="h-4 w-4 text-blue-600" />
              <span>Talk to Real Estate Consultant</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5 text-emerald-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>100% RERA &amp; GST Ready</span>
            </span>
            <span className="flex items-center gap-1.5 text-blue-700">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              <span>Zero Double-Booking Guarantee</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-slate-600" />
              <span>Single-Entry PDC Clearance</span>
            </span>
          </div>
        </div>

        {/* Hero Product Screenshot (Actual Software Preview) */}
        <div className="mt-12 sm:mt-16 relative mx-auto max-w-6xl">
          <div className="rounded-2xl border-4 border-slate-300/80 bg-slate-900 p-1 sm:p-2 shadow-2xl shadow-slate-900/15">
            {/* Visual Image / SVG Mockup */}
            <img
              src="/screenshots/dashboard-preview.svg"
              alt="Plotline Real Estate ERP Dashboard Screenshot"
              className="w-full h-auto rounded-xl block"
              loading="eager"
            />
          </div>

          {/* Floating Callout Badges */}
          <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 font-bold">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Unit Locking Engine</div>
              <div className="text-[11px] text-slate-500">Atomic lock stops double bookings</div>
            </div>
          </div>

          <div className="hidden md:flex absolute -top-6 -right-6 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 font-bold">
              <FileCheck2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Bulk Milestone Demands</div>
              <div className="text-[11px] text-slate-500">One-click PDF dispatch to all buyers</div>
            </div>
          </div>
        </div>

        {/* Key Quick Metrics Bar */}
        <div className="mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-4">
          <div className="border-r border-slate-100 pr-4">
            <div className="text-2xl sm:text-3xl font-black text-slate-900">100%</div>
            <div className="text-xs font-semibold text-slate-500 mt-1">Audit-Ready RERA &amp; GST Compliance</div>
          </div>
          <div className="sm:border-r border-slate-100 pr-4">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">4.5x</div>
            <div className="text-xs font-semibold text-slate-500 mt-1">Tez Kist (Installment) Recovery</div>
          </div>
          <div className="border-r border-slate-100 pr-4">
            <div className="text-2xl sm:text-3xl font-black text-blue-600">0%</div>
            <div className="text-xs font-semibold text-slate-500 mt-1">Double Booking Ka Khatra</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-600">All-in-One</div>
            <div className="text-xs font-semibold text-slate-500 mt-1">Map + CRM + Dues + Accounts + Land</div>
          </div>
        </div>
      </div>
    </section>
  );
}
