import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Download, 
  ReceiptIndianRupee,
  AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Post-Sales, Milestone Demand Letters & Dues Aging for Real Estate Builders',
  description:
    'Automate construction milestone demand letters (PDF), Builder Buyer Agreements (BBA), allotment letters, sale deed registry tracking, and dues aging follow-ups.',
};

export default function PostSalesPage() {
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
            <span className="text-slate-500">Post-Sales Operations</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Post-Sales Operations &amp; <br />
            <span className="text-blue-600">Automated Demand Letters</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Customer booking se lekar registry aur possession tak ka har ek step. Construction stage (Plinth, Road, Slab) 
            complete hote hi bulk demand notice bhejein aur baaki kist ka aging follow-up maintain karein.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 font-bold mb-4">
              <Download className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Bulk Milestone Demand Letters</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Plinth ya road asphalt hone par us stage se jude sabhi buyers ke demand notice ek click me generate karein. 
              PDF me purani payments, current amount aur bank RTGS account details shamil hoti hain.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold mb-4">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Builder-Buyer Agreements (BBA)</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              BBA stamp paper draft, customer signature date, aur RERA standard terms ki digital tracking. 
              Sabhi legal documents customer profile me cloud par secure rehte hain.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 font-bold mb-4">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Dues Aging Buckets (30/60/90+ Din)</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Overdue accounts ko aging buckets me dekhein. Kis buyer ne phone par kya promise kiya tha, 
              next calling date, aur reminder notice history sab kuch recorded rehta hai.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 font-bold mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Official Allotment Letters</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Company logo, plot boundaries, co-applicant details, aur bank home loan account number ke sath 
              tamper-proof allotment letter PDF generate karein.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 font-bold mb-4">
              <ReceiptIndianRupee className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Cancellations &amp; Reversible Ledgers</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Booking cancel hone par forfeiture charge katkar refund schedule set karein. 
              Ledger me journal vouchers aur broker commission automatically reverse ho jate hain.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 font-bold mb-4">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Sale Deed Registry &amp; Possession</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sub-registrar appointment, stamp duty, registry execution date aur 100% dues clear hone par 
              possession certificate handover karein.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-slate-900">Phone par kist mangna band karein</h3>
            <p className="text-sm text-slate-500 mt-1">Automated demand letters se 4.5x fast installment collection dekhein.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-blue-600 px-7 py-4 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-blue-700 transition-all shrink-0"
          >
            Demand Notice Demo Dekhein
          </Link>
        </div>
      </div>
    </div>
  );
}
