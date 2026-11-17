import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  HardHat, 
  MapPin, 
  FileText, 
  ReceiptIndianRupee, 
  CheckCircle2, 
  ShieldCheck, 
  Building,
  TrendingUp
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Land Acquisition (Khasra/Khata) & Site Construction ERP for Colonizers',
  description:
    'Track agricultural land parcels with Khasra & Khata numbers, owner negotiation, agreements, and registry. Manage site contractors, milestone work orders, and expenses to control cost per sq.ft.',
};

export default function LandConstructionPage() {
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
            <span className="text-slate-500">Land &amp; Site Works</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight text-slate-900 leading-tight">
            Land Acquisition (Khasra/Khata) &amp; <br />
            <span className="text-[#0d9488]">Site Construction Management</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Real estate profitability is determined by land purchase and contractor efficiency. 
            Track Khasra/Khata agricultural parcels from initial token bayana to final registry, alongside contractor work orders and cost per sq.ft analytics.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-700 font-bold mb-4">
              <MapPin className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Khasra &amp; Khata Land Parcels</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Log village names, survey numbers, Khasra/Khata IDs, bigha/acre areas, and agreed acquisition rates per acre. Maintain clear ownership share ratios across landowners.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold mb-4">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Bayana → Agreement → Registry</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Manage acquisition stages: initial token bayana, legal title search clearance, registered agreement to sell, final deed execution, and T&amp;CP land diversion.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 font-bold mb-4">
              <ReceiptIndianRupee className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Land Capital Ledgers</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Payments to farmers debit directly to the Land &amp; Capital asset account. Maintain full audit trails for stamp duty, registration charges, and legal advocacy fees.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 font-bold mb-4">
              <HardHat className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Contractor Work Orders &amp; RA Bills</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Issue formal work orders for earthmoving, boundary walls, sewerage, and road works. Invoices are strictly verified against approved rate contracts and measurements.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 font-bold mb-4">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">True Cost per Sq.Ft Analytics</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Aggregate land acquisition, regulatory approvals, boundary construction, and road costs to compute actual landed cost per sq.ft and safeguard developer margins.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 font-bold mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Digital Document Vault</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Site inspection photographs, town planning drawings, RERA sanctions, and diversion documents are securely archived with role-based access controls.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Control Land Costs &amp; Contractor Budgets</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">Explore how Khasra parcel ledgers and work order management eliminate construction cost overruns.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-[#042026] hover:bg-[#083c47] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all shrink-0"
          >
            Schedule Land ERP Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
