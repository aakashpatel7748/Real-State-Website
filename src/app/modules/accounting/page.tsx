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
    <div className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:text-blue-900">Home</Link>
            <span>/</span>
            <span>Modules</span>
            <span>/</span>
            <span className="text-slate-500">Accounts &amp; PDC Vault</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Real Estate Accounts, PDC Vault &amp; <br />
            <span className="text-blue-600">Double-Entry Financials</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Tally jaise generic accounting packages colonizer ke multi-installment schedules aur post-dated cheques 
            ko theek se handle nahi kar paate. Plotline me booking receipt, thekedar bill, kisan payment aur GST vouchers sab balanced rehte hain.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 font-bold mb-4">
              <Clock className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">PDC Cheque Vault &amp; Clearance</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Customer se aage ki kishton ke liye liye gaye cheques vault me log hote hain. 
              Maturity date par reminder milta hai aur bank clearance par hi receipt generate hoti hai.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold mb-4">
              <ReceiptIndianRupee className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">FIFO Kist Allocation</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Jab bhi customer installment deta hai, system sabse pehle purani baaki kist ko settle karta hai. 
              Partial payment aur advance deposit ka hisab bilkul clear rehta hai.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 font-bold mb-4">
              <Scale className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Double-Entry General Ledger</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Standard chart of accounts: Land Capital, Construction WIP, Customer Receivables, aur Vendor Payables. 
              Trial Balance, P&amp;L aur Balance Sheet real-time generate hoti hai.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 font-bold mb-4">
              <Percent className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">GST Vouchers (CGST / SGST / IGST)</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Commercial property aur construction services par automatic tax calculation. 
              Vendor bills se milne wale input tax credit aur customer se liye gaye tax ka net payable report.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 font-bold mb-4">
              <FileSpreadsheet className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Reversible Credit &amp; Debit Notes</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Special discount, interest waiver ya extra development charge ke liye adjustment vouchers. 
              Cancellation hone par ye entries automatically unwind ho jaati hain.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 font-bold mb-4">
              <BadgeIndianRupee className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">RERA Escrow Account Tracking</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              RERA designated bank account aur operational accounts ka alag-alag reconciliation. 
              Cheque issue, deposit aur daily closing balance with audit logs.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-slate-900">CA aur Audit ke jhanjhat se mukti paayein</h3>
            <p className="text-sm text-slate-500 mt-1">PDC vault aur double-entry real estate accounts ka live session dekhein.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-blue-600 px-7 py-4 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-blue-700 transition-all shrink-0"
          >
            Accounts Demo Schedule Karein
          </Link>
        </div>
      </div>
    </div>
  );
}
