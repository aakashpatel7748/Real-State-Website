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
  keywords: [
    'Real Estate Double Entry Accounting Software',
    'Post Dated Cheque PDC Register ERP',
    'Real Estate GST Voucher Calculator',
    'Colony Developer Balance Sheet Trial Balance',
    'FIFO installment receipt allocation software',
    'Customer ledger credit debit note real estate',
  ],
};

export default function AccountingPage() {
  return (
    <div className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:text-cyan-300">Home</Link>
            <span>/</span>
            <span>ERP Modules</span>
            <span>/</span>
            <span className="text-slate-400">Accounts & PDC</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Real Estate Accounts, PDC Vault & <br />
            <span className="text-gradient-primary">Double-Entry Financials</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Generic accounting packages like Tally often struggle with complex multi-installment demand schedules 
            and post-dated cheques. Plotline provides purpose-built colonizer accounting where booking receipts, 
            vendor bills, land payments, and GST vouchers balance automatically.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 mb-4">
              <Clock className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Post-Dated Cheques (PDC) Vault</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Log future installment cheques with bank name, branch, cheque number, amount, and maturity date. 
              The system reminds you before banking dates, and creates official customer receipts and ledger entries 
              strictly upon clearance.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 mb-4">
              <ReceiptIndianRupee className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">FIFO Installment Allocation</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              When a payment arrives, the system allocates funds first to the oldest overdue installment (First-In, First-Out). 
              Handles partial payments, overpayments, and advance booking deposits without manual calculation errors.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-4">
              <Scale className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Double-Entry General Ledger</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Standard chart of accounts for builders: Land & Development, Construction in Progress (WIP), 
              Customer Receivables, Vendor Payables, and Bank Accounts. Generates Trial Balance, P&L, and Balance Sheet directly.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 mb-4">
              <Percent className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">GST Vouchers (CGST / SGST / IGST)</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Automatic tax breakdown for commercial properties, under-construction residential flats, and preferential 
              location services. Computes input tax credit from vendor bills against output tax liability.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 mb-4">
              <FileSpreadsheet className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Reversible Credit & Debit Notes</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Issue adjustments for negotiated discounts, interest waivers, or extra development works. 
              If a customer cancels, all related credit/debit notes unwind automatically in the ledger.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 mb-4">
              <BadgeIndianRupee className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Multi-Bank Account Reconciliations</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Maintain separate RERA designated accounts, collection escrow accounts, and operational accounts. 
              Track opening balances, cheque issuance, and daily closing balances with complete audit logs.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-950/60 to-slate-900 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Ready for error-free real estate accounting?</h3>
            <p className="text-sm text-slate-300 mt-1">See how our PDC vault and double-entry engine save days of audit preparation.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg hover:shadow-cyan-500/30 transition-all shrink-0"
          >
            Schedule Accounting Walkthrough
          </Link>
        </div>
      </div>
    </div>
  );
}
