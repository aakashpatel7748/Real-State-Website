import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  FileText, 
  Clock, 
  ShieldCheck,
  Share2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pre-Sales CRM & WhatsApp Lead Management for Real Estate Colonizers',
  description:
    'Capture inquiries instantly with dedicated webhooks for 99acres, MagicBricks, Housing.com and Meta. Features automated SHA-256 deduplication, WhatsApp click-to-chat, and quotation PDFs with 1-click booking conversion.',
};

export default function PreSalesPage() {
  return (
    <div className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-800 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:text-teal-950">Home</Link>
            <span>/</span>
            <span>Modules</span>
            <span>/</span>
            <span className="text-slate-500">Pre-Sales CRM</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-slate-800 leading-tight">
            Pre-Sales Pipeline &amp; <br />
            <span className="text-[#0d9488]">WhatsApp Lead Automation</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Never miss an inbound inquiry from 99acres, MagicBricks, Housing.com, or Meta ads. 
            Automated SHA-256 deduplication, direct WhatsApp click-to-chat, and 1-click quotation PDF generation.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 font-bold mb-4">
              <Share2 className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">Multi-Portal Webhook Ingestion</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dedicated webhook endpoints for every portal. Incoming leads are validated for duplicates and routed immediately to available sales executives.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold mb-4">
              <PhoneCall className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">1-Click WhatsApp Engagement</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Send greeting templates, layout brochures, and price sheets directly via WhatsApp without manually saving buyer phone numbers.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 font-bold mb-4">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">Cost Sheet &amp; Quotation PDF</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Generate branded quotation PDFs factoring base rate, PLC charges, corner premiums, and installment schedules in under 10 seconds.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 font-bold mb-4">
              <Clock className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">30-Minute Follow-Up Alerts</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Background schedulers remind sales teams of scheduled site visits and callback commitments so high-intent prospects stay engaged.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 font-bold mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">Lost Reason Analytics</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              When a prospect drops off, log root causes (Price, Distance, Loan Rejection) to optimize advertising campaigns and pricing strategies.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 font-bold mb-4">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">Broker &amp; Channel Partner Tracking</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Property broker commissions accrue automatically upon confirmed bookings and unlock stage-wise as agreed buyer installments are cleared.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-800">See the Pre-Sales CRM in Action</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">Schedule a 30-minute walkthrough to discover how colonizers accelerate lead conversion by 35%.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-[#042026] hover:bg-[#083c47] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all shrink-0"
          >
            Schedule Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
