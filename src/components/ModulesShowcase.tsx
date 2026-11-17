'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  MapPin, 
  FileText, 
  ReceiptIndianRupee, 
  HardHat, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  FileCheck2, 
  TrendingUp, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

const MODULES_DATA = [
  {
    id: 'pre-sales',
    title: 'Pre-Sales & Lead Pipeline',
    tagline: 'Never miss an inquiry from 99acres, MagicBricks, or Facebook',
    icon: Sparkles,
    color: 'from-amber-500 to-orange-500',
    link: '/modules/pre-sales',
    features: [
      {
        title: 'Instant Portal Webhooks',
        desc: 'Incoming leads from 99acres, MagicBricks, Housing.com and website forms flow directly into your CRM with automatic SHA-256 de-duplication.',
      },
      {
        title: 'WhatsApp Click-to-Chat & Template Logs',
        desc: 'Sales executives can initiate conversations with one click. Every template message sent is logged in the customer timeline.',
      },
      {
        title: 'Cost Sheets & Quotations Engine',
        desc: 'Generate professional quotation PDFs with custom payment plans, discount limits, and convert directly to confirmed bookings in one click.',
      },
      {
        title: 'Follow-Up Reminders & Lost Reasons',
        desc: 'Automated 30-minute reminder crons ensure sales reps never drop a hot lead. Track why deals are lost to sharpen marketing spend.',
      },
    ],
  },
  {
    id: 'inventory-map',
    title: 'Master & Plotted Inventory',
    tagline: 'Interactive SVG layout map with live unit locking',
    icon: MapPin,
    color: 'from-emerald-500 to-teal-500',
    link: '/modules/inventory-and-map',
    features: [
      {
        title: 'Interactive SVG Colony Map',
        desc: 'Pan, zoom, and inspect real-time plot status (Available, Reserved, Booked, Registered). Built-in layout editor allows custom coordinates.',
      },
      {
        title: 'Units: Plots, Flats, Villas & Shops',
        desc: 'Comprehensive inventory handling across towers, floors, and sectors with carpet area, super area, and PLC attributes.',
      },
      {
        title: 'Rate & Price Indexes (Repricing)',
        desc: 'Dynamically reprice unsold units as development progresses without modifying signed customer contracts.',
      },
      {
        title: 'Parking Slots & Charge Master',
        desc: 'Track stilt and open parking slots. Configure corner charges, park facing PLC, club memberships, and development fees.',
      },
    ],
  },
  {
    id: 'post-sales',
    title: 'Post-Sales & Demand Letters',
    tagline: 'Automate milestone demand letters and dues recovery',
    icon: FileText,
    color: 'from-indigo-500 to-blue-500',
    link: '/modules/post-sales',
    features: [
      {
        title: 'Bulk Milestone Demand Letters',
        desc: 'Generate demand letters (PDF) for single bookings or all units tied to a construction milestone (e.g., Plinth or Slab completion).',
      },
      {
        title: 'Builder-Buyer Agreements (BBA)',
        desc: 'Digitally track BBA preparation, customer signing, and milestone compliance to ensure strict RERA adherence.',
      },
      {
        title: 'Allotment & Possession Letters',
        desc: 'Official branded allotment and handover documentation with watermarked security and verified co-applicant details.',
      },
      {
        title: 'Dues Aging & Payment Follow-ups',
        desc: 'Visual aging buckets (0-30, 31-60, 61-90, 90+ days) with logged follow-up calls, payment promises, and reminder jobs.',
      },
    ],
  },
  {
    id: 'accounting-pdc',
    title: 'Accounts, PDC & Finance',
    tagline: 'Double-entry accounting built specifically for colonizers',
    icon: ReceiptIndianRupee,
    color: 'from-cyan-500 to-blue-600',
    link: '/modules/accounting',
    features: [
      {
        title: 'PDC (Post-Dated Cheques) Register',
        desc: 'Lock customer post-dated cheques in a secure register. Receipts and ledger credits are issued exactly once upon bank clearance.',
      },
      {
        title: 'FIFO Installment Receipts',
        desc: 'Customer payments automatically settle overdue installments in chronological order, with support for advance payments and partial dues.',
      },
      {
        title: 'Double-Entry General Ledger',
        desc: 'Complete chart of accounts, journal vouchers, trial balance, profit & loss, and balance sheet computed directly from database entries.',
      },
      {
        title: 'GST Vouchers & Reversible Adjustments',
        desc: 'Calculate input and output CGST/SGST/IGST with period summaries. Credit and debit notes automatically unwind on booking cancellations.',
      },
    ],
  },
  {
    id: 'land-construction',
    title: 'Land Acquisition & Site Works',
    tagline: 'Track every rupee from Khasra/Khata purchase to site delivery',
    icon: HardHat,
    color: 'from-violet-500 to-purple-600',
    link: '/modules/land-and-construction',
    features: [
      {
        title: 'Khasra & Khata Land Parcels',
        desc: 'Log individual agricultural land parcels, owners, negotiation terms, agreements, registry dates, and municipal conversion status.',
      },
      {
        title: 'Owner Payments & Development Ledgers',
        desc: 'Disbursements to land owners are automatically posted to the Land & Development capital ledger with full payment audit trails.',
      },
      {
        title: 'Contractor Work Orders & Milestone Bills',
        desc: 'Issue work orders with milestone stages. Contractor bills cannot exceed sanctioned order value without explicit approval.',
      },
      {
        title: 'Site Expenses & Project Cost Summaries',
        desc: 'Real-time tracking of cement, steel, earthmoving, boundary walls, and municipal development expenses per project phase.',
      },
    ],
  },
];

export function ModulesShowcase() {
  const [selectedModule, setSelectedModule] = useState(MODULES_DATA[0].id);
  const activeData = MODULES_DATA.find((m) => m.id === selectedModule) || MODULES_DATA[0];

  return (
    <section className="relative py-20 lg:py-28 bg-[#080c17]/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 mb-3">
            <span>5 Specialized Modules</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Built for Real Estate Workflows. <br />
            <span className="text-gradient-primary">Not Generic Corporate Spreadsheets.</span>
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Every screen, report, and calculation reflects how Indian colonizers, builders, and developers actually run their projects.
          </p>
        </div>

        {/* Module Selection Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {MODULES_DATA.map((module) => {
            const Icon = module.icon;
            const isSelected = selectedModule === module.id;
            return (
              <button
                key={module.id}
                onClick={() => setSelectedModule(module.id)}
                className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-500'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-white/5'
                }`}
              >
                <Icon className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-indigo-400'}`} />
                <span>{module.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Module Card Display */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 sm:p-10 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-8 mb-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <activeData.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{activeData.title}</h3>
                  <p className="text-sm text-slate-400">{activeData.tagline}</p>
                </div>
              </div>
            </div>

            <Link
              href={activeData.link}
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span>Explore Detailed {activeData.title} Specifications</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 4 Feature Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeData.features.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/5 bg-[#090d16]/70 p-5 transition-all hover:border-white/15"
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <h4 className="text-base font-semibold text-white">{feat.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-8">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
