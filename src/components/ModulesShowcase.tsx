'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import { 
  Sparkles, 
  MapPin, 
  FileText, 
  ReceiptIndianRupee, 
  HardHat, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  Building,
  PhoneCall
} from 'lucide-react';

const MODULES_DATA = [
  {
    id: 'pre-sales',
    title: 'Pre-Sales & Lead CRM',
    tagline: 'Centralize 99acres, MagicBricks, Meta ads & WhatsApp leads',
    icon: Sparkles,
    badge: 'Marketing & Sales',
    link: '/modules/pre-sales',
    features: [
      {
        title: 'Direct Portal Lead Webhooks',
        desc: 'Instant lead capture from 99acres, MagicBricks, Housing.com, and Meta ads. SHA-256 deduplication eliminates duplicate contact entries.',
      },
      {
        title: '1-Click WhatsApp Chat & Template Logs',
        desc: 'Sales executives can initiate WhatsApp chats with greeting templates, layout brochures, and price cards without manually saving phone numbers.',
      },
      {
        title: 'Branded Cost Sheet & Quotation PDFs',
        desc: 'Automatically generate instant quotation PDFs including base rate, PLC charges, corner premium, and milestone installment schedules.',
      },
      {
        title: 'Automated Follow-Up Reminders',
        desc: 'Built-in alert engines remind the sales team of upcoming site visits and promise-to-pay calls to maximize lead conversion rates.',
      },
    ],
  },
  {
    id: 'inventory-map',
    title: 'Interactive Layout Map & Inventory',
    tagline: 'Interactive SVG plot layout map with double-booking lock',
    icon: MapPin,
    badge: 'Inventory Management',
    link: '/modules/inventory-and-map',
    features: [
      {
        title: 'Interactive Vector Layout Map',
        desc: 'Zoom in, pan, and inspect plots in real-time. Automatic color updates indicate unit status (Available: Green, Reserved: Yellow, Booked: Red).',
      },
      {
        title: 'Zero Double-Booking Guarantee',
        desc: 'Atomic database locking: the instant an executive places a token reservation, that unit is instantly locked across all other devices.',
      },
      {
        title: 'Dynamic Rate Indexing',
        desc: 'Adjust unsold plot prices as township development advances (roads, boundary walls) without altering past customer agreements.',
      },
      {
        title: 'Plots, Villas, Floors & Commercial Shops',
        desc: 'Manage plotted layouts, residential towers, duplex villas, and commercial retail shops with exact dimensions and carpet area indices.',
      },
    ],
  },
  {
    id: 'post-sales',
    title: 'Post-Sales & Demand Notices',
    tagline: 'Automated milestone demand letters & payment recovery',
    icon: FileText,
    badge: 'Customer Operations',
    link: '/modules/post-sales',
    features: [
      {
        title: 'Bulk Milestone Demand Letters (PDF)',
        desc: 'Generate and dispatch milestone demand notices (Plinth, Road, Slab) in one click with transparent past receipts and current dues.',
      },
      {
        title: 'Builder-Buyer Agreement (BBA) Tracking',
        desc: 'Track BBA drafting, buyer signatures, stamp duty compliance, and possession certificates to ensure 100% legal compliance.',
      },
      {
        title: 'Dues Aging Reports (30, 60, 90+ Days)',
        desc: 'Monitor overdue installment aging buckets and log communication promises to accelerate cash collections.',
      },
      {
        title: 'Allotment & Possession Handover Letters',
        desc: 'Generate official branded allotment letters, registry clearance certificates, and final possession handover documents.',
      },
    ],
  },
  {
    id: 'accounting-pdc',
    title: 'Accounts, PDC & Finance',
    tagline: 'Double-entry colonizer accounting & post-dated cheque vault',
    icon: ReceiptIndianRupee,
    badge: 'Finance & Accounts',
    link: '/modules/accounting',
    features: [
      {
        title: 'PDC Cheque Vault & Realization',
        desc: 'Securely register advance post-dated cheques. Receipts and ledger credits are triggered only after successful bank clearance.',
      },
      {
        title: 'Double-Entry Accounting System',
        desc: 'Customer collections, vendor bills, broker commissions, and site overheads balance seamlessly in a standardized Chart of Accounts.',
      },
      {
        title: 'Channel Partner & Broker Commissions',
        desc: 'Define custom commission slabs (2%, 3%, 5%). Commission milestones unlock automatically as buyer payments are credited.',
      },
      {
        title: 'GST & RERA Escrow Reconciliation',
        desc: 'Generate GSTR-1 and GSTR-3B audit-ready summaries, alongside automated tracking for RERA 70% escrow account deposit ratios.',
      },
    ],
  },
  {
    id: 'land-works',
    title: 'Land (Khasra) & Site Works',
    tagline: 'Land acquisition ledger, farmer payments & development costs',
    icon: HardHat,
    badge: 'Land & Site Works',
    link: '/modules/land-and-construction',
    features: [
      {
        title: 'Khasra, Khata & Land Parcel Ledgers',
        desc: 'Record farmer agreements, total land area (Acres/Bigha/Hectares), registry status, and milestone payments to landowners.',
      },
      {
        title: 'Contractor Work Orders & RA Bills',
        desc: 'Issue work orders for roads, drainage, boundary walls, and sewerage. Verify contractor measurement sheets and track bill payments.',
      },
      {
        title: 'Material Consumption (Cement, Steel, Sand)',
        desc: 'Supervisor daily log of incoming and consumed raw materials on site to prevent site wastage and pilferage.',
      },
      {
        title: 'True Land Cost per Sq.Ft.',
        desc: 'Calculate exact land cost by combining raw purchase price, registry fees, and infrastructure development expenses.',
      },
    ],
  },
];

export function ModulesShowcase() {
  const [selectedModule, setSelectedModule] = useState(MODULES_DATA[0].id);
  const activeData = MODULES_DATA.find((m) => m.id === selectedModule) || MODULES_DATA[0];

  return (
    <section id="modules" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Scroll Reveal */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-900 border border-teal-200 mb-3 shadow-xs">
            <span>5 Core Colonizer Modules</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-slate-800 leading-normal sm:leading-relaxed lg:leading-[1.38]">
            Engineered for Real Indian Township Workflows
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Not a generic CRM — Plotline handles every phase from agricultural land acquisition to plotting layout, installment recovery, and registry handover:
          </p>
        </ScrollReveal>

        {/* Module Selection Pills with Scroll Reveal */}
        <ScrollReveal direction="up" delay={100} className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8">
          {MODULES_DATA.map((module) => {
            const Icon = module.icon;
            const isSelected = selectedModule === module.id;
            return (
              <button
                key={module.id}
                onClick={() => setSelectedModule(module.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer hover:-translate-y-0.5 active:scale-95 ${
                  isSelected
                    ? 'bg-[#042026] text-white shadow-md shadow-teal-950/20 ring-1 ring-teal-700'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-xs'
                }`}
              >
                <Icon className={`h-4 w-4 ${isSelected ? 'text-emerald-400' : 'text-teal-700'}`} />
                <span>{module.title}</span>
              </button>
            );
          })}
        </ScrollReveal>

        {/* Selected Module Card Display with Scroll Reveal */}
        <ScrollReveal direction="up" delay={200} className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-8 shadow-xl shadow-slate-900/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-800 border border-teal-100">
                <activeData.icon className="h-5 w-5 text-teal-700" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0d9488]">
                  {activeData.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 leading-snug">{activeData.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal">{activeData.tagline}</p>
              </div>
            </div>

            <Link
              href={activeData.link}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-800 hover:text-teal-950 transition-colors hover:translate-x-1 duration-200"
            >
              <span>Explore {activeData.title}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 4 Feature Columns with Staggered Scroll Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {activeData.features.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-all hover:border-teal-300 hover:bg-teal-50/30 hover:-translate-y-1 hover:shadow-sm duration-300"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-800">{feat.title}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-7 font-normal">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
