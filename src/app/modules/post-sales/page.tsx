import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Download, 
  Send,
  AlertTriangle,
  ReceiptIndianRupee
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Post-Sales, Milestone Demand Letters & Dues Aging for Real Estate Builders',
  description:
    'Automate construction milestone demand letters (PDF), Builder Buyer Agreements (BBA), allotment letters, sale deed registry tracking, and dues aging follow-ups for Indian plotted colonies & apartments.',
  keywords: [
    'Milestone Demand Letters PDF Real Estate',
    'Builder Buyer Agreement BBA Software',
    'Real Estate Allotment Letter Generator',
    'Real Estate Dues Aging Follow-up Software',
    'Sale Deed Registry Tracking ERP',
    'Possession letter real estate automation',
  ],
};

export default function PostSalesPage() {
  return (
    <div className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:text-indigo-300">Home</Link>
            <span>/</span>
            <span>ERP Modules</span>
            <span>/</span>
            <span className="text-slate-400">Post-Sales</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Post-Sales Operations & <br />
            <span className="text-gradient-primary">Automated Demand Letters</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            The bridge between customer bookings and financial cashflow. Run bulk demand letters tied to on-site 
            construction milestones, track signed Builder-Buyer Agreements, manage possession handovers, and recover 
            overdue installments with structured aging buckets.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-4">
              <Download className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Bulk Milestone Demand Letters</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              When a site milestone is certified (e.g. Plinth, 1st Slab, or Road Asphalt), trigger demand letters 
              for every unit linked to that stage in one click. Generates personalized PDFs with complete installment breakdown.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 mb-4">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Builder-Buyer Agreements (BBA)</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Monitor BBA drafting, stamp paper procurement, customer signatures, and execution dates. 
              Maintains full audit trails and RERA clause compliance.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 mb-4">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Dues Aging & Recovery Logs</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Categorize pending balances into aging buckets: 0-30 days, 31-60 days, 61-90 days, and 90+ days. 
              Log call promises, follow-up dates, and send automated payment reminder letters.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Allotment Letters (PDF)</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Generate official company allotment letters with QR codes, co-applicant signatures, unit boundaries, 
              and sanctioned bank loan accounts with home loan financers.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 mb-4">
              <ReceiptIndianRupee className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Cancellations & Reversible Ledgers</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Handle booking cancellations with configurable forfeiture charges and refund payment plans. 
              Associated journal vouchers, broker commissions, and unit status automatically unwind safely.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 mb-4">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Sale Deed & Possession Letters</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Track sub-registrar appointments, stamp duty clearance, sale deed registry execution, and issue official 
              possession handover letters once 100% dues and maintenance charges are cleared.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-950/60 to-slate-900 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Stop chasing installments manually on phone calls</h3>
            <p className="text-sm text-slate-300 mt-1">See how automated demand letters accelerate collections by 4.5x.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-emerald-500 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg hover:shadow-indigo-500/30 transition-all shrink-0"
          >
            Explore Post-Sales Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
