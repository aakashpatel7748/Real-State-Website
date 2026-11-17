import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ReceiptIndianRupee, 
  Clock, 
  CheckCircle2, 
  FileSpreadsheet, 
  ShieldCheck, 
  Scale,
  Percent,
  BadgeIndianRupee
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Real Estate Double-Entry Accounting, PDC Register & GST Vouchers for Builders',
  description:
    'Dedicated double-entry accounting for Indian colonizers and developers. Features Post-Dated Cheque (PDC) vault with single clearance entry, FIFO installment receipts, GST vouchers (CGST/SGST/IGST), and balance sheets.',
};

export default function AccountingPage() {
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
            <span className="text-slate-500">Accounts &amp; PDC Vault</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-slate-800 leading-tight">
            Real Estate Accounting, PDC Vault &amp; <br />
            <span className="text-[#0d9488]">Double-Entry Financials</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Generic accounting software struggles with multi-installment schedules and post-dated cheques. 
            Plotline maintains synchronized customer receipts, contractor bills, landowner payments, and GST vouchers seamlessly.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 font-bold mb-4">
              <Clock className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">PDC Cheque Vault &amp; Realization</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Log advance post-dated cheques securely. Automated maturity notifications trigger ahead of deposit dates; receipts and ledger credits generate only upon verified clearance.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold mb-4">
              <ReceiptIndianRupee className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">FIFO Installment Allocation</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              When buyers submit installment payments, incoming funds automatically settle earliest overdue milestones first. Partial settlements and advance balances stay fully traceable.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 font-bold mb-4">
              <Scale className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">Double-Entry General Ledger</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Standardized Chart of Accounts tailored for developers: Land Capital, Construction WIP, Customer Receivables, and Trade Payables with real-time Trial Balance and P&amp;L reports.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 font-bold mb-4">
              <Percent className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">GST Vouchers (CGST / SGST / IGST)</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Automated tax calculation across commercial property and construction milestones. Match input tax credits from contractor invoices against buyer collections for net tax liabilities.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 font-bold mb-4">
              <FileSpreadsheet className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">Credit &amp; Debit Adjustment Notes</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Issue adjustment vouchers for promotional discounts, interest waivers, or supplementary development charges. Upon deal cancellation, adjustments unwind cleanly.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 font-bold mb-4">
              <BadgeIndianRupee className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">RERA Escrow Account Reconciliation</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Reconcile designated RERA escrow accounts (70% rule) independently from operational current accounts. Track deposit ratios, cheque clearances, and audit logs.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-800">Simplify Audits &amp; Financial Compliance</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">Explore how the PDC vault and double-entry real estate ledgers provide audit-ready clarity.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-[#042026] hover:bg-[#083c47] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all shrink-0"
          >
            Schedule Finance Walkthrough
          </Link>
        </div>
      </div>
    </div>
  );
}
