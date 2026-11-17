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
  keywords: [
    'Real Estate Lead Management India',
    '99acres webhook integration ERP',
    'Magicbricks lead sync CRM',
    'WhatsApp real estate quotation software',
    'Cost sheet and quotation PDF builder',
    'Real estate follow-up reminder job',
  ],
};

export default function PreSalesPage() {
  return (
    <div className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:text-indigo-300">Home</Link>
            <span>/</span>
            <span>ERP Modules</span>
            <span>/</span>
            <span className="text-slate-400">Pre-Sales</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Pre-Sales Pipeline & <br />
            <span className="text-gradient-primary">WhatsApp Lead Automation</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Eliminate lead leakage across property portals. Inbound webhooks from 99acres, MagicBricks, 
            Housing.com, and Facebook Ads flow directly into your sales executive queue with automatic 
            de-duplication, activity logs, and instant quotation generation.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-4">
              <Share2 className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Multi-Portal Webhook Ingestion</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Generate unique secure webhook URLs for each channel (99acres, MagicBricks, Housing, website). 
              Our ingest engine hashes phone numbers with SHA-256 to stop duplicate leads and assign them to the right executive.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 mb-4">
              <PhoneCall className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">WhatsApp Click-to-Chat & Templates</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Sales reps can trigger pre-approved WhatsApp greeting and brochure templates with one click directly 
              from the lead card. Every outgoing message is timestamped and logged into the customer timeline.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 mb-4">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Cost Sheets & Quotation PDFs</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Calculate base price, PLC, corner charges, club fees, and payment schedule milestones in real time. 
              Export branded PDFs instantly and convert signed quotes into confirmed bookings with a single click.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 mb-4">
              <Clock className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Automated Follow-Up Cron Jobs</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Background cron runs every 30 minutes to alert sales staff about pending follow-ups and site visit promises. 
              Unattended inquiries escalate to sales managers automatically.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Lost Reasons & Funnel Analytics</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Track why inquiries dropped off (e.g. Price too high, Location mismatch, Loan rejected). 
              Make informed decisions about pricing indexes and advertising campaign performance.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 mb-4">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Channel Partner & Broker Tracking</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Tag channel partners and brokers to leads at the first touchpoint. Commissions accrue automatically 
              upon booking confirmation and are released strictly after agreed customer installments are realized.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-950/60 to-slate-900 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Ready to capture 100% of your real estate leads?</h3>
            <p className="text-sm text-slate-300 mt-1">Book a personalized 30-minute demonstration for your sales team.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-emerald-500 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg hover:shadow-indigo-500/30 transition-all shrink-0"
          >
            Schedule Live CRM Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
