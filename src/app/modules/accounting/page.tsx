import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import { 
  ReceiptIndianRupee, 
  Clock, 
  CheckCircle2, 
  FileSpreadsheet, 
  ShieldCheck, 
  Scale,
  Percent,
  BadgeIndianRupee,
  Lock,
  Check,
  ArrowRight,
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Real Estate Double-Entry Accounting, PDC Register & GST Vouchers for Builders',
  description:
    'Dedicated double-entry accounting for Indian colonizers and developers. Features Post-Dated Cheque (PDC) vault with single clearance entry, FIFO installment receipts, GST vouchers (CGST/SGST/IGST), and balance sheets.',
};

export default function AccountingPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column Showcase: Left Text & Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Benefits & CTA */}
          <ScrollReveal direction="left" duration={850} className="lg:col-span-5 space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold tracking-tight text-slate-800 leading-normal sm:leading-relaxed lg:leading-[1.38]">
                Real Estate Accounting, PDC Vault &amp; <br />
                <span className="text-[#0d9488]">Double-Entry Financials</span>
              </h1>
            </div>

            {/* Value Checkpoints */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">PDC Cheque Vault &amp; Clearance:</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Advance post-dated cheques trigger maturity alerts; ledger credits generate only upon verified clearance.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">Double-Entry General Ledger:</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Land capital, construction WIP, customer receivables, and trade payables with real-time Trial Balance and P&amp;L.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">RERA Escrow (70% Rule) &amp; GST:</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Reconcile designated project escrow accounts and generate automated GST tax vouchers (CGST/SGST/IGST).</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-xl bg-[#042026] hover:bg-[#083c47] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 active:scale-95 text-center"
              >
                <span>Schedule Finance Walkthrough</span>
                <ArrowRight className="h-4 w-4 text-emerald-400" />
              </Link>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 transition-all shadow-xs text-center"
              >
                <Phone className="h-4 w-4 text-[#0d9488]" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Right Column: Accounting & PDC Showcase */}
          <ScrollReveal direction="right" duration={850} delay={150} className="lg:col-span-7">
            <div className="group relative rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/10 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-teal-300">
              
              {/* macOS/SaaS Window Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-200/90 bg-slate-100/95 px-4 py-2.5 select-none">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-[11px] font-semibold text-slate-600 hidden sm:inline">
                    Plotline ERP &bull; Accounts &amp; PDC Vault
                  </span>
                </div>

                {/* Simulated Address Bar */}
                <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-600 font-mono shadow-xs">
                  <Lock className="h-3 w-3 text-emerald-600" />
                  <span>plotline-erp.com/accounts/pdc-vault</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 hidden sm:inline">Live Sync</span>
                </div>
              </div>

              {/* Accounting Illustration */}
              <div className="relative overflow-hidden bg-white p-2 sm:p-4 flex items-center justify-center min-h-[320px]">
                <img
                  src="/screenshots/accounting-illustration.png"
                  alt="Plotline ERP Real Estate Accounting, PDC Vault & Double-Entry Financials"
                  className="w-full h-auto object-contain rounded-xl select-none"
                  loading="lazy"
                />
              </div>

              {/* Bottom Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/90 bg-slate-50 px-4 py-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-slate-800">Financial Management Hub</span>
                  <span className="text-slate-400">&bull;</span>
                  <span className="text-slate-500">PDC Vault &amp; General Ledger</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-medium">
                  <span className="text-emerald-700 font-semibold">&bull; 100% Audit Ready</span>
                  <span className="text-teal-700 font-semibold">&bull; RERA Escrow Compliant</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Feature Grid with Staggered Scroll Reveal */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-slate-800 leading-normal sm:leading-relaxed lg:leading-[1.35]">
              Built Specifically for Real Estate Balance Sheets
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Handle land acquisition costs, development WIP, PDC clearance pipelines, and multi-tier broker brokerage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal direction="up" delay={50} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 font-bold mb-4">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">PDC Cheque Vault &amp; Realization</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Log advance post-dated cheques securely. Automated maturity notifications trigger ahead of deposit dates; receipts and ledger credits generate only upon verified clearance.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={120} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold mb-4">
                <ReceiptIndianRupee className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">FIFO Installment Allocation</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When buyers submit installment payments, incoming funds automatically settle earliest overdue milestones first. Partial settlements and advance balances stay fully traceable.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={190} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 font-bold mb-4">
                <Scale className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Double-Entry General Ledger</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Standardized Chart of Accounts tailored for developers: Land Capital, Construction WIP, Customer Receivables, and Trade Payables with real-time Trial Balance and P&amp;L reports.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={260} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 font-bold mb-4">
                <Percent className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">GST Vouchers (CGST / SGST / IGST)</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated tax calculation across commercial property and construction milestones. Match input tax credits from contractor invoices against buyer collections for net tax liabilities.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={330} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 font-bold mb-4">
                <FileSpreadsheet className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Credit &amp; Debit Adjustment Notes</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Issue adjustment vouchers for promotional discounts, interest waivers, or supplementary development charges. Upon deal cancellation, adjustments unwind cleanly.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 font-bold mb-4">
                <BadgeIndianRupee className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">RERA Escrow Account Reconciliation</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Reconcile designated RERA escrow accounts (70% rule) independently from operational current accounts. Track deposit ratios, cheque clearances, and audit logs.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* CTA Banner with Scroll Reveal */}
        <ScrollReveal direction="up" delay={200} className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-xl transition-all duration-300">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-800">Simplify Audits &amp; Financial Compliance</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">Explore how the PDC vault and double-entry real estate ledgers provide audit-ready clarity.</p>
          </div>
          <Link
            href="/contact"
            className="btn-shimmer rounded-xl bg-[#042026] hover:bg-[#083c47] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all shrink-0 active:scale-95"
          >
            Schedule Finance Walkthrough
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
