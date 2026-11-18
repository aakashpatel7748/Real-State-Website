import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  FileText,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Download,
  ReceiptIndianRupee,
  AlertTriangle,
  Lock,
  Check,
  ArrowRight,
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Post-Sales, Milestone Demand Letters & Dues Aging for Real Estate Builders',
  description:
    'Automate construction milestone demand letters (PDF), Builder Buyer Agreements (BBA), allotment letters, sale deed registry tracking, and dues aging follow-ups.',
};

export default function PostSalesPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Top 2-Column Showcase: Left Text & Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Heading, Benefits & CTA */}
          <ScrollReveal direction="left" duration={850} className="lg:col-span-5 space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold tracking-tight text-slate-800 leading-normal sm:leading-relaxed lg:leading-[1.38]">
                Post-Sales Operations &amp; <br />
                <span className="text-[#0d9488]">Automated Demand Notices</span>
              </h1>
            </div>

            {/* Value Checkpoints */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">1-Click Milestone Demand PDFs:</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Certify plinth or road completion to dispatch branded demand notices with RERA bank RTGS instructions.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">Builder-Buyer Agreements (BBA):</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Track stamp paper drafting, signature dates, and statutory RERA terms archived in buyer cloud repositories.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">Dues Aging Buckets (30/60/90+ Days):</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Automated WhatsApp payment alerts and phone callback logs accelerate cash collection by 4.5x.</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-xl bg-[#042026] hover:bg-[#083c47] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 active:scale-95 text-center"
              >
                <span>Preview Demand Notices</span>
                <ArrowRight className="h-4 w-4 text-emerald-400" />
              </Link>


            </div>
          </ScrollReveal>

          {/* Right Column: Actual Real Software Post-Sales & Demand Notice Showcase */}
          <ScrollReveal direction="right" duration={850} delay={150} className="lg:col-span-7">
            <div className="group relative rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/10 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-teal-300">

              {/* Post-Sales Themed Tech Illustration */}
              <div className="relative overflow-hidden bg-white p-2 sm:p-4 flex items-center justify-center">
                <img
                  src="/screenshots/post-sales-illustration.png"
                  alt="Plotline ERP Post-Sales Operations & Construction Milestone Recovery"
                  className="w-full h-auto object-contain rounded-xl select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Feature Grid with Staggered Scroll Reveal */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-slate-800 leading-normal sm:leading-relaxed lg:leading-[1.35]">
              Accelerate Installment Cashflows &amp; Eliminate Dues Aging
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              End-to-end milestone management from allotment letter and BBA to registry execution and possession certificate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal direction="up" delay={50} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 font-bold mb-4">
                <Download className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Bulk Milestone Demand Notices</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upon certifying plinth or road asphalt completion, generate all buyer demand notices in 1 click. PDFs summarize historical receipts, current dues, and RERA bank RTGS instructions.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={120} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold mb-4">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Builder-Buyer Agreements (BBA)</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Track BBA stamp paper drafting, customer signature dates, and statutory RERA terms. All signed agreements are securely archived in the customer cloud repository.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={190} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 font-bold mb-4">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Dues Aging Buckets (30/60/90+ Days)</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Segment receivables into aging categories. Log customer phone call promises, scheduled payment commitments, and automated reminder histories.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={260} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 font-bold mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Official Allotment Letters</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Generate tamper-proof allotment letters complete with developer branding, plot dimensions, co-applicant records, and home loan bank account endorsements.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={330} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 font-bold mb-4">
                <ReceiptIndianRupee className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Cancellations &amp; Reversible Ledgers</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Apply contractual forfeiture deductions and establish refund schedules upon cancellation. Journal entries and broker commissions reverse automatically.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 font-bold mb-4">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Sale Deed Registry &amp; Possession</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Track sub-registrar appointments, stamp duty clearance, registry execution, and issue final possession handover certificates upon 100% dues clearance.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* CTA Banner with Scroll Reveal */}
        <ScrollReveal direction="up" delay={200} className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-xl transition-all duration-300">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-800">Eliminate manual installment reminder calls</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">Discover how automated milestone demand letters accelerate collections by 4.5x.</p>
          </div>
          <Link
            href="/contact"
            className="btn-shimmer rounded-xl bg-[#042026] hover:bg-[#083c47] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all shrink-0 active:scale-95"
          >
            Preview Demand Notices
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
