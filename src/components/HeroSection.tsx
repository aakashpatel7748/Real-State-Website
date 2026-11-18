import React from 'react';
import Link from 'next/link';
import {
  Building2,
  MapPin,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Phone,
  Calendar,
  Sparkles,
  TrendingUp,
  Check
} from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdfa]/60 via-white to-slate-50/60 pt-6 lg:mt-8 pb-14 lg:pt-14 lg:pb-25 border-b border-slate-200/80">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
      <div className="absolute top-20 left-10 -z-10 h-72 w-72 rounded-full bg-teal-100/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 2-Column Responsive Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Heading, Value Proposition & CTAs (Smooth Entrance from Left) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left animate-hero-left">

            {/* Top Category Tag */}
            <div className="inline-flex items-center gap-2 rounded-full /80 px-3.5 py-1 text-xs font-semibold text-teal-900 mb-4">
            </div>

            {/* Main H1 Title in Poppins, ~40px scale */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-slate-800 leading-normal sm:leading-relaxed lg:leading-[1.38]">
              India&apos;s Complete{' '}
              <span className="text-[#0d9488] relative inline-block">
                Colony &amp; Real Estate ERP
                <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-teal-300 -z-10 opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>{' '}
              Software
            </h1>



            {/* 4 Key Value Checkpoints */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 transition-transform hover:translate-x-1 duration-200">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <span>Interactive Vector Layout Map</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 transition-transform hover:translate-x-1 duration-200">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <span>0% Double-Booking Atomic Lock</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 transition-transform hover:translate-x-1 duration-200">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <span>Automated Milestone Demand PDFs</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 transition-transform hover:translate-x-1 duration-200">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <span>Khasra Land &amp; Farmer Registry</span>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Link
                href="/contact"
                className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-xl bg-[#042026] hover:bg-[#083c47] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-950/20 transition-all hover:translate-y-[-2px] hover:shadow-xl text-center active:scale-95"
              >
                <Calendar className="h-4 w-4 text-emerald-400" />
                <span>Book 1-on-1 Free Live Demo</span>
                <ArrowRight className="h-4 w-4 text-slate-300" />
              </Link>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-5 py-3.5 text-sm font-semibold text-slate-800 transition-all shadow-sm text-center hover:translate-y-[-1px] active:scale-95"
              >
                <Phone className="h-4 w-4 text-[#0d9488]" />
                <span>Call: +91 98765 43210</span>
              </a>
            </div>

            {/* Trust Micro-Text */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>100% RERA &amp; GST Ready</span>
              </span>
              <span>•</span>
              <span>Zero Setup Fee</span>
              <span>•</span>
              <span>Free Legacy Data &amp; Map Migration</span>
            </div>
          </div>

          {/* Right Column: Real Product Preview (Smooth Entrance from Right) */}
          <div className="lg:col-span-6 relative animate-hero-right">

            {/* Browser Window Frame Wrapper */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-2 sm:p-2.5 shadow-2xl shadow-slate-900/10 transition-transform hover:scale-[1.015] duration-300">

              {/* Window Title Bar */}
              <div className="flex items-center justify-between rounded-t-xl bg-slate-100/90 px-3 py-2 border-b border-slate-200 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-1.5 rounded-md bg-white px-3 py-0.5 text-[11px] font-medium text-slate-600 shadow-xs border border-slate-200/60">
                  <span className="text-emerald-600">🔒</span>
                  <span>app.plotline.in/dashboard</span>
                </div>
                <div className="text-[10px] font-semibold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded">
                  Live ERP
                </div>
              </div>

              {/* Cleaned Real ERP Dashboard Screenshot */}
              <div className="relative overflow-hidden rounded-b-xl bg-slate-50 border border-slate-100">
                <img
                  src="/screenshots/plotline-main-dashboard-clean.svg"
                  alt="Plotline Real Estate ERP Clean Dashboard"
                  className="w-full h-auto block select-none"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating Metric Badge 1: Sales & Bookings (Subtle Floating Animation) */}
            <div className="hidden sm:flex absolute -bottom-5 -left-4 items-center gap-3 rounded-xl border border-slate-200/90 bg-white/95 backdrop-blur-md p-3 shadow-xl animate-float-slow hover:pause">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-800">₹1.95 Cr Bookings</div>
                <div className="text-[11px] text-slate-500">5 Units Booked this month</div>
              </div>
            </div>

            {/* Floating Metric Badge 2: Unit Lock Engine (Subtle Reverse Floating Animation) */}
            <div className="hidden sm:flex absolute -top-4 -right-3 items-center gap-2.5 rounded-xl border border-slate-200/90 bg-[#042026] text-white p-2.5 shadow-xl animate-float-reverse hover:pause">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">0% Double-Booking</div>
                <div className="text-[10px] text-slate-300">Live atomic plot lock</div>
              </div>
            </div>

          </div>

        </div>



      </div>
    </section>
  );
}
