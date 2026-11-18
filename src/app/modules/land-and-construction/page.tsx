import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  HardHat,
  MapPin,
  FileText,
  ReceiptIndianRupee,
  CheckCircle2,
  ShieldCheck,
  Building,
  TrendingUp,
  Check,
  ArrowRight,
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Land Acquisition (Khasra/Khata) & Site Construction ERP for Colonizers',
  description:
    'Track agricultural land parcels with Khasra & Khata numbers, owner negotiation, agreements, and registry. Manage site contractors, milestone work orders, and expenses to control cost per sq.ft.',
};

export default function LandConstructionPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Top 2-Column Showcase: Left Text & Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Heading, Benefits & CTA */}
          <ScrollReveal direction="left" duration={850} className="lg:col-span-5 space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold tracking-tight text-slate-800 leading-normal sm:leading-relaxed lg:leading-[1.38]">
                Land Acquisition (Khasra/Khata) &amp; <br />
                <span className="text-[#0d9488]">Site Construction Management</span>
              </h1>
            </div>

            {/* Value Checkpoints */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">Khasra &amp; Khata Land Parcels:</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Track survey numbers, bigha/acre areas, landowner negotiations, and acquisition rates per acre.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">Bayana &rarr; Agreement &rarr; Registry:</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Manage complete acquisition lifecycle from initial token bayana to deed execution and T&amp;CP land diversion.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">Contractor Work Orders &amp; RA Bills:</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Issue work orders for earthmoving, roads, and boundary walls with true cost per sq.ft analytics.</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-xl bg-[#042026] hover:bg-[#083c47] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 active:scale-95 text-center"
              >
                <span>Schedule Land ERP Demo</span>
                <ArrowRight className="h-4 w-4 text-emerald-400" />
              </Link>


            </div>
          </ScrollReveal>

          {/* Right Column: Land & Construction Showcase */}
          <ScrollReveal direction="right" duration={850} delay={150} className="lg:col-span-7">
            <div className="group relative rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/10 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-teal-300">

              {/* Land & Construction Themed Tech Illustration */}
              <div className="relative overflow-hidden bg-white p-2 sm:p-4 flex items-center justify-center min-h-[320px]">
                <img
                  src="/screenshots/land-construction-illustration.png"
                  alt="Plotline ERP Land Acquisition (Khasra/Khata) & Site Construction Management"
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
              Full Visibility from Farm Land Purchase to Township Delivery
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Eliminate revenue leakage in landowner payments, title searches, and contractor excavation contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal direction="up" delay={50} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-700 font-bold mb-4">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Khasra &amp; Khata Land Parcels</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Log village names, survey numbers, Khasra/Khata IDs, bigha/acre areas, and agreed acquisition rates per acre. Maintain clear ownership share ratios across landowners.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={120} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold mb-4">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Bayana &rarr; Agreement &rarr; Registry</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Manage acquisition stages: initial token bayana, legal title search clearance, registered agreement to sell, final deed execution, and T&amp;CP land diversion.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={190} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 font-bold mb-4">
                <ReceiptIndianRupee className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Land Capital Ledgers</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Payments to farmers debit directly to the Land &amp; Capital asset account. Maintain full audit trails for stamp duty, registration charges, and legal advocacy fees.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={260} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 font-bold mb-4">
                <HardHat className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Contractor Work Orders &amp; RA Bills</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Issue formal work orders for earthmoving, boundary walls, sewerage, and road works. Invoices are strictly verified against approved rate contracts and measurements.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={330} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 font-bold mb-4">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">True Cost per Sq.Ft Analytics</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Aggregate land acquisition, regulatory approvals, boundary construction, and road costs to compute actual landed cost per sq.ft and safeguard developer margins.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 font-bold mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Digital Document Vault</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Site inspection photographs, town planning drawings, RERA sanctions, and diversion documents are securely archived with role-based access controls.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* CTA Banner with Scroll Reveal */}
        <ScrollReveal direction="up" delay={200} className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-xl transition-all duration-300">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-800">Control Land Costs &amp; Contractor Budgets</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">Explore how Khasra parcel ledgers and work order management eliminate construction cost overruns.</p>
          </div>
          <Link
            href="/contact"
            className="btn-shimmer rounded-xl bg-[#042026] hover:bg-[#083c47] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all shrink-0 active:scale-95"
          >
            Schedule Land ERP Demo
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
