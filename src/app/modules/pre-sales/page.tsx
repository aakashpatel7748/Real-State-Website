import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  FileText, 
  Clock, 
  ShieldCheck,
  Share2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pre-Sales CRM & WhatsApp Lead Management for Real Estate Colonizers',
  description:
    'Capture inquiries instantly with dedicated webhooks for 99acres, MagicBricks, Housing.com and Facebook. Features automated SHA-256 de-duplication, WhatsApp click-to-chat, and quotation PDFs with 1-click booking conversion.',
};

export default function PreSalesPage() {
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
            <span className="text-slate-500">Pre-Sales CRM</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Pre-Sales Pipeline &amp; <br />
            <span className="text-blue-600">WhatsApp Lead Automation</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            99acres, MagicBricks, Housing.com aur Facebook ads se aane wali koi bhi inquiry miss na ho. 
            Automatic SHA-256 de-duplication, direct WhatsApp click-to-chat, aur 1-click quotation PDF generator.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 font-bold mb-4">
              <Share2 className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Multi-Portal Webhook Ingestion</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Har portal ke liye dedicated webhook URL. Lead aate hi automatically check hoti hai ki duplicate toh nahi hai, aur turant sales executive ko assign ho jaati hai.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold mb-4">
              <PhoneCall className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">WhatsApp 1-Click Message</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Bina number save kiye WhatsApp par direct greeting message, site brochure, aur colony naksha bhej sakte hain. Sabhi message customer timeline me log hote hain.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 font-bold mb-4">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Cost Sheet &amp; Quotation PDF</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Base price, PLC charges, corner charges aur installment plan jodkar 10 second me branded Quotation PDF banti hai, jise ek click me booking me badal sakte hain.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 font-bold mb-4">
              <Clock className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">30-Minute Follow-Up Alerts</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Background cron job sales team ko yaad dilata hai ki kaunse customer se site visit ya phone call ki baat hui thi taaki hot leads thandi na paden.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 font-bold mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Lost Reasons Analytics</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Agar koi customer deal cancel karta hai, toh reason track hota hai (Price zyada, location dur, loan reject) taaki marketing budget sahi jagah kharch ho.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 font-bold mb-4">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Broker / Agent Commission</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Property dealers aur brokers ka commission booking confirm hone par accrue hota hai aur agreed installment aane par release hota hai.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-slate-900">Apni sales team ke liye Live CRM Demo dekhein</h3>
            <p className="text-sm text-slate-500 mt-1">30 minute ke session me samjhein ki leads kaise 35% zyada convert hoti hain.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-blue-600 px-7 py-4 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-blue-700 transition-all shrink-0"
          >
            Live Demo Schedule Karein
          </Link>
        </div>
      </div>
    </div>
  );
}
