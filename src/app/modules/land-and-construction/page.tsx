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
  keywords: [
    'Khasra Khata Land Acquisition Software',
    'Real Estate Contractor Work Order ERP',
    'Site Construction Milestone Billing Software',
    'Indian Colonizer Land Registry Ledger',
    'Project Cost per sqft calculation software',
    'Real estate vendor bill approval system',
  ],
};

export default function LandConstructionPage() {
  return (
    <div className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-violet-400 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:text-violet-300">Home</Link>
            <span>/</span>
            <span>ERP Modules</span>
            <span>/</span>
            <span className="text-slate-400">Land & Site Works</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Land Acquisition (Khasra/Khata) & <br />
            <span className="text-gradient-primary">Site Construction Control</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Real estate profits are decided during land purchase and site execution. Track individual Khasra/Khata 
            agricultural parcels from initial negotiation to registry and town planning conversion. Issue milestone work orders 
            to contractors and ensure bills never exceed approved limits.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 mb-4">
              <MapPin className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Khasra & Khata Land Parcels</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Log individual agricultural land parcels with village names, survey numbers, Khasra/Khata IDs, 
              land owners, bigha/acre areas, and agreed consideration rates per acre.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 mb-4">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Negotiation → Agreement → Registry</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Track the full acquisition pipeline: initial token bayana, legal title search reports, registered agreement to sell, 
              final sale deed execution, and diversion/T&CP conversion status.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 mb-4">
              <ReceiptIndianRupee className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Land Capital Ledgers</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              All payment installments to farmers and land partners post directly to the Land & Development Capital ledger. 
              Track stamp duty, registration charges, and legal consultant fees accurately.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 mb-4">
              <HardHat className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Contractor Work Orders & Limits</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Create formal work orders for earthmoving, boundary walls, sewerage, asphalt roads, and clubhouses. 
              Built-in budget checks guarantee vendor bills cannot exceed the sanctioned order value.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 mb-4">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Cost per Sq.Ft Analysis</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Consolidate land cost, infrastructure development expenses, and government licensing charges 
              to determine your true cost per square foot, ensuring healthy developer profit margins.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Signed Document Storage</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Store site photographs, structural drawings, RERA approvals, and municipal diversion orders in secure private storage 
              with short-lived signed download links.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-950/60 to-slate-900 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Ready to control land & site costs with precision?</h3>
            <p className="text-sm text-slate-300 mt-1">Book a consultation to see our Khasra parcel ledger in action.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg hover:shadow-violet-500/30 transition-all shrink-0"
          >
            Schedule Land & Site Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
