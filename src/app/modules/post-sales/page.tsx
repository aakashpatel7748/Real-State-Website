import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Download, 
  ReceiptIndianRupee,
  AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Post-Sales, Milestone Demand Letters & Dues Aging for Real Estate Builders',
  description:
    'Automate construction milestone demand letters (PDF), Builder Buyer Agreements (BBA), allotment letters, sale deed registry tracking, and dues aging follow-ups.',
};

export default function PostSalesPage() {
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
            <span className="text-slate-500">Post-Sales Operations</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight text-slate-900 leading-tight">
            Post-Sales Operations &amp; <br />
            <span className="text-[#0d9488]">Automated Demand Notices</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Seamlessly navigate from booking confirmation to registry execution and possession handover. 
            Generate bulk milestone demand notices (Plinth, Road, Slab) with automated dues aging follow-ups.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 font-bold mb-4">
              <Download className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Bulk Milestone Demand Notices</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Upon certifying plinth or road asphalt completion, generate all buyer demand notices in 1 click. PDFs summarize historical receipts, current dues, and RERA bank RTGS instructions.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold mb-4">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Builder-Buyer Agreements (BBA)</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Track BBA stamp paper drafting, customer signature dates, and statutory RERA terms. All signed agreements are securely archived in the customer cloud repository.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 font-bold mb-4">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Dues Aging Buckets (30/60/90+ Days)</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Segment receivables into aging categories. Log customer phone call promises, scheduled payment commitments, and automated reminder histories.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 font-bold mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Official Allotment Letters</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Generate tamper-proof allotment letters complete with developer branding, plot dimensions, co-applicant records, and home loan bank account endorsements.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 font-bold mb-4">
              <ReceiptIndianRupee className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Cancellations &amp; Reversible Ledgers</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Apply contractual forfeiture deductions and establish refund schedules upon cancellation. Journal entries and broker commissions reverse automatically.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 font-bold mb-4">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Sale Deed Registry &amp; Possession</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Track sub-registrar appointments, stamp duty clearance, registry execution, and issue final possession handover certificates upon 100% dues clearance.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Eliminate manual installment reminder calls</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">Discover how automated milestone demand letters accelerate collections by 4.5x.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-[#042026] hover:bg-[#083c47] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all shrink-0"
          >
            Preview Demand Notices
          </Link>
        </div>
      </div>
    </div>
  );
}
