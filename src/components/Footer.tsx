'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronRight,
  ArrowUp,
  MessageCircle,
  Clock,
  Layers,
  Lock,
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#021317] text-slate-300 overflow-hidden border-t border-teal-900/40">
      {/* Top illuminated accent gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

      {/* Subtle atmospheric ambient glow effects */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 relative z-10">
        
        {/* Pre-Footer Action / Trust Strip */}
        <div className="mb-12 rounded-2xl border border-teal-800/40 bg-teal-950/30 p-5 sm:p-6 backdrop-blur-xs flex flex-col md:flex-row items-center justify-between gap-5 shadow-lg text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3.5">
            <div className="h-10 w-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0 text-emerald-400">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Engineered Specifically for Indian Colonizers &amp; Plotted Townships
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Multi-phase layouts, CAD/SVG plot map vectorization, and 100% RERA milestone demand recovery.
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-5 py-2.5 text-xs font-semibold text-[#042026] shadow-md transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Book 1-on-1 Walkthrough</span>
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20Plotline%20Team,%20I%20am%20interested%20in%20a%20demo%20of%20the%20Colony%20ERP."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-teal-700/60 bg-teal-900/40 hover:bg-teal-900/70 px-5 py-2.5 text-xs font-semibold text-teal-200 transition-all active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        {/* Main 4-Column Layout (12 cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand, Value Proposition & Trust Badges (4 cols) */}
          <div className="lg:col-span-4 space-y-5 text-center sm:text-left flex flex-col items-center sm:items-start">
            <Link href="/" className="inline-flex items-center justify-center sm:justify-start gap-2.5">
              <svg viewBox="0 0 32 32" className="h-9 w-9 shrink-0 shadow-sm" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="#0f766e" />
                <path d="M7 9h8v6H7zM17 9h8v6h-8zM7 17h8v6H7z" fill="#ecfdf5" />
                <path d="M17 17h8v6h-8z" fill="#f59e0b" />
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-semibold tracking-tight text-white font-sans">
                  Plotline
                </span>
                <span className="rounded bg-teal-900/80 px-1.5 py-0.5 text-[10px] font-bold text-teal-300 border border-teal-700/60">
                  ERP
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 text-center sm:text-left">
              India&apos;s leading Colony &amp; Plotted Real Estate management platform. Eliminate double bookings with atomic plot locking, automate milestone demand letters on WhatsApp, and manage land parcels from Khasra registry to customer handover.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-xs">
              <div className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-300 font-medium">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>100% RERA &amp; GST Ready</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-teal-500/30 bg-teal-500/10 px-2.5 py-1 text-teal-300 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                <span>Double-Entry Ledgers</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-cyan-300 font-medium">
                <Lock className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span>256-Bit SSL Backup</span>
              </div>
            </div>

            {/* Geographical Footprint */}
            <div className="pt-2 text-xs text-slate-400 flex items-center sm:items-start justify-center sm:justify-start gap-2 text-center sm:text-left">
              <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-semibold text-slate-300">Regional Colonizer Onboarding:</span>{' '}
                Madhya Pradesh &bull; Uttar Pradesh &bull; Rajasthan &bull; Gujarat &bull; NCR &bull; Maharashtra &bull; Chhattisgarh
              </div>
            </div>
          </div>

          {/* Column 2: Software Modules (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center gap-1.5 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              <span>Core Modules</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/modules/pre-sales" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="h-3 w-3 text-teal-500/60 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  <span>Pre-Sales &amp; Lead CRM</span>
                </Link>
              </li>
              <li>
                <Link href="/modules/inventory-and-map" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="h-3 w-3 text-teal-500/60 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  <span>Interactive Layout Map</span>
                </Link>
              </li>
              <li>
                <Link href="/modules/post-sales" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="h-3 w-3 text-teal-500/60 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  <span>Post-Sales &amp; Demands</span>
                </Link>
              </li>
              <li>
                <Link href="/modules/accounting" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="h-3 w-3 text-teal-500/60 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  <span>Accounts &amp; PDC Vault</span>
                </Link>
              </li>
              <li>
                <Link href="/modules/land-and-construction" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="h-3 w-3 text-teal-500/60 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  <span>Khasra Land &amp; Works</span>
                </Link>
              </li>
              <li>
                <Link href="/#interactive-map" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="h-3 w-3 text-teal-500/60 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  <span>Vector Map Engine</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform & Resources (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center gap-1.5 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              <span>Platform &amp; Tools</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/#screenshots" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="h-3 w-3 text-teal-500/60 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  <span>Product Screenshots</span>
                </Link>
              </li>
              <li>
                <Link href="/#pre-sales-crm" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="h-3 w-3 text-teal-500/60 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  <span>Sales &amp; Lead CRM</span>
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="h-3 w-3 text-teal-500/60 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  <span>Why Plotline ERP</span>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="h-3 w-3 text-teal-500/60 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  <span>Plans &amp; Pricing</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="h-3 w-3 text-teal-500/60 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  <span>Frequently Asked Questions</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="h-3 w-3 text-teal-500/60 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  <span>Schedule Live Demo</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Dedicated Colonizer Helpline & Support Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-teal-800/50 bg-gradient-to-b from-teal-950/50 via-[#032026]/60 to-[#021317] p-5 sm:p-6 shadow-xl backdrop-blur-sm relative overflow-hidden">
              {/* Top accent badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Direct Colonizer Support Desk
                </span>
                <span className="text-[10px] font-semibold rounded bg-teal-900/60 border border-teal-700/50 px-2 py-0.5 text-teal-300">
                  Priority
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Have questions about digitizing your colony layout map or migrating from Excel registers? Contact our engineering desk:
              </p>

              <div className="space-y-2.5 text-xs">
                {/* Phone Link */}
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 rounded-xl border border-teal-800/60 bg-teal-900/30 p-2.5 hover:bg-teal-900/60 transition-colors text-white"
                >
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">+91 98765 43210 / +91 755 4900000</div>
                    <div className="text-[10px] text-slate-400">Direct Colonizer Helpline (9:30 AM – 7:30 PM IST)</div>
                  </div>
                </a>

                {/* Email Link */}
                <a
                  href="mailto:sales@plotline-erp.com"
                  className="flex items-center gap-3 rounded-xl border border-teal-800/60 bg-teal-900/30 p-2.5 hover:bg-teal-900/60 transition-colors text-white"
                >
                  <div className="h-8 w-8 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">sales@plotline-erp.com</div>
                    <div className="text-[10px] text-slate-400">Request proposal, feature list or contract terms</div>
                  </div>
                </a>
              </div>

              {/* Free Migration Guarantee Pill */}
              <div className="mt-4 pt-3 border-t border-teal-900/50 flex items-center gap-2 text-[11px] text-emerald-300/90 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>Free CAD layout map vectorization with onboarding</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights, Status and Quick Links Bar */}
        <div className="mt-12 border-t border-slate-800/80 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Plotline Technologies Pvt Ltd. All rights reserved.
          </div>

          {/* Operational Status Pill */}
          <div className="flex items-center gap-2 rounded-full border border-teal-900/60 bg-teal-950/40 px-3 py-1 text-[11px] text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-slate-300 font-medium">All Cloud Systems Operational</span>
            <span className="text-slate-600">&bull;</span>
            <span>RERA Escrow Compliant</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <span>&bull;</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-teal-300 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
