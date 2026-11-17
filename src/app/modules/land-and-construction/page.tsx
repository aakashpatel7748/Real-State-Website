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
    <div className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-violet-700 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:text-violet-900">Home</Link>
            <span>/</span>
            <span>Modules</span>
            <span>/</span>
            <span className="text-slate-500">Land &amp; Site Works</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Land Acquisition (Khasra/Khata) &amp; <br />
            <span className="text-violet-700">Site Construction Control</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Real estate ka munafa zameen khareed aur thekedar ke kharche par nirbhar karta hai. 
            Khasra/Khata agricultural parcels ka token bayana se registry tak ka hisab, thekedar work orders, 
            aur accurate cost per sq.ft tracking.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 font-bold mb-4">
              <MapPin className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Khasra &amp; Khata Land Parcels</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Gaon ka naam, survey number, Khasra/Khata ID, bigha/acre area aur agreed rate per acre log karein. 
              Sabhi zameen malik aur partners ke share clear rehte hain.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold mb-4">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Bayana → Agreement → Registry</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Zameen khareed ke charan: initial token bayana, legal title search report, registered agreement to sell, 
              final sale deed execution, aur town planning (T&amp;CP) diversion status.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 font-bold mb-4">
              <ReceiptIndianRupee className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Land Capital Ledgers</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Kisanon ko diye gaye payment direct Land &amp; Development account me debit hote hain. 
              Stamp duty, registration charges aur legal vakil fees ka poora audit trail.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 font-bold mb-4">
              <HardHat className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Thekedar Work Orders &amp; Limits</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Earthmoving, boundary wall, sewerage aur road ke thekedaro ke formal work orders. 
              Thekedar ka bill approved order value se zyada pass nahi hota.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 font-bold mb-4">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Real Cost per Sq.Ft Analysis</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Zameen khareed, licensing, boundary aur sadak ke kharche jodkar exact cost per sq.ft nikaalein 
              taaki colonizer ka profit margin har unit par safe rahe.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 font-bold mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Digital Document Storage</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Site photos, town planning drawings, RERA sanctions aur diversion documents cloud par private storage 
              me secure rehte hain with signed download links.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-slate-900">Zameen aur thekedar ke kharche control karein</h3>
            <p className="text-sm text-slate-500 mt-1">Khasra land ledger aur work order approval system ka demo dekhein.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-violet-700 px-7 py-4 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-violet-800 transition-all shrink-0"
          >
            Land &amp; Site Demo Schedule Karein
          </Link>
        </div>
      </div>
    </div>
  );
}
