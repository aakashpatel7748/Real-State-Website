'use client';

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  TrendingUp, 
  MapPin, 
  FileText, 
  Sparkles,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

const SCREENSHOT_TABS = [
  {
    id: 'main-dashboard',
    title: 'Main ERP Dashboard',
    tag: 'Executive Overview',
    subtitle: 'Real-time sales velocity, cash collections, overdue installments & plot inventory',
    icon: LayoutDashboard,
    image: '/screenshots/plotline-main-dashboard-clean.svg',
    points: [
      'Single screen visibility of Total Inventory (₹1.04 Cr unsold), Booked Units, and Outstanding Receivables (₹1.71 Cr).',
      'Instant alerts for Monthly Collections (₹24.39 L) and Overdue Dues (₹5.57 L past due across 4 installments).',
      'Real-time tracking of Land Acquisition payments (₹50 L paid of ₹1 Cr) and Site Development expense vouchers.',
      'One-click global search (Ctrl+K) to retrieve any booking record, customer ledger, or plot number instantly.',
    ],
  },
  {
    id: 'leads-crm',
    title: 'Leads & Enquiries CRM',
    tag: 'Pre-Sales Pipeline',
    subtitle: 'Automated lead capture from 99acres, MagicBricks, Meta ads & walk-in visitors',
    icon: Users,
    image: '/screenshots/plotline-leads-board-clean.svg',
    points: [
      'Visual Kanban pipeline stages: New Leads, Contacted, Site Visit Done, and Price Negotiation.',
      'Instant lead cards featuring direct buyer contact, project tags (RGVE), source attribution, and next follow-up dates.',
      'Automated site visit scheduling and follow-up alert notifications ensure zero buyer inquiries are lost.',
      'Executive-level workload distribution with automated conversion velocity calculations.',
    ],
  },
  {
    id: 'sales-analytics',
    title: 'Sales & Conversion Analytics',
    tag: 'Performance Metrics',
    subtitle: 'Weekly enquiries vs. bookings trend, conversion stages & revenue pipeline',
    icon: TrendingUp,
    image: '/screenshots/plotline-sales-pipeline-clean.svg',
    points: [
      'Weekly Enquiry vs. Booking trend graphs illustrating real-time sales conversion velocities.',
      'Open pipeline capacity progress indicators across all sales stages.',
      'Comprehensive active quotations overview (₹1.95 Cr across 5 active quotations).',
      'Custom date-range filters to generate monthly, quarterly, and fiscal year sales audit reports.',
    ],
  },
  {
    id: 'naksha-map',
    title: 'Colony Naksha (Layout Map)',
    tag: 'Interactive Vector Map',
    subtitle: 'Live interactive plot availability layout map with color-coded unit statuses',
    icon: MapPin,
    image: '/screenshots/colony-map-preview.svg',
    points: [
      'Color-coded plot availability: Available (Green), Reserved (Yellow), and Booked (Red).',
      'Direct upload and rendering of vector SVG layout maps exported from AutoCAD or Town Planning.',
      'Click any plot to inspect exact dimensions (30x50, 40x60), carpet area, facing, and rate index pricing.',
      'Atomic database lock guarantees zero double-bookings when multiple sales executives reserve units.',
    ],
  },
  {
    id: 'kist-demand',
    title: 'Milestone Demand Notices',
    tag: 'Automated Billing & Recovery',
    subtitle: 'Official branded milestone demand notice & customer payment receipt PDFs',
    icon: FileText,
    image: '/screenshots/installment-receipt.svg',
    points: [
      '1-Click bulk demand notice generation upon construction milestone certification (Plinth, Road, Sewer, Slab).',
      'Transparent buyer payment statement outlining past receipts, current installment dues, and payment schedules.',
      'Company letterhead, authorized seal, signature stamp, and RERA Escrow Bank RTGS payment instructions.',
      'Automated dispatch to buyers via WhatsApp and Email in one single click.',
    ],
  },
];

export function SoftwareScreenshotsGallery() {
  const [activeTab, setActiveTab] = useState(SCREENSHOT_TABS[0].id);
  const current = SCREENSHOT_TABS.find((t) => t.id === activeTab) || SCREENSHOT_TABS[0];

  return (
    <section id="screenshots" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading in Poppins */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-900 border border-teal-200 mb-3 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-teal-600" />
            <span>Actual Product Interface</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight">
            Explore the Real Estate ERP Interface
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Click through the tabs below to preview the Main Dashboard, Leads CRM, Sales Analytics, Interactive Layout Map, and Milestone Demand Notices:
          </p>
        </div>

        {/* Tab Navigation Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8">
          {SCREENSHOT_TABS.map((tab) => {
            const Icon = tab.icon;
            const isSelected = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#042026] text-white shadow-md shadow-teal-950/20 ring-1 ring-teal-700'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-xs'
                }`}
              >
                <Icon className={`h-4 w-4 ${isSelected ? 'text-emerald-400' : 'text-teal-700'}`} />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Screenshot Display Showcase Card */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 lg:p-8 shadow-xl shadow-slate-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Screenshot Display */}
            <div className="lg:col-span-8 flex justify-center">
              <div className="w-full rounded-xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900">
                {/* Browser Title Bar for Screenshot */}
                <div className="flex items-center justify-between bg-slate-800 px-3 py-2 border-b border-slate-700 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300 font-mono">
                    <span>app.plotline.in/</span>
                    <span className="text-emerald-400">{activeTab}</span>
                  </div>
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-800">
                    Live UI
                  </span>
                </div>

                {/* Screenshot Image */}
                <div className="relative bg-slate-50">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-auto block select-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Feature Details Column */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <span className="inline-block rounded-md bg-teal-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-teal-800 border border-teal-200/60 mb-2">
                  {current.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal leading-relaxed">
                  {current.subtitle}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-2.5 pt-2">
                {current.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <CheckCircle2 className="h-3 w-3 stroke-[2.5]" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Call to action inside card */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch gap-2.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#042026] hover:bg-[#083c47] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors text-center"
                >
                  <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Schedule Live Demo</span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </Link>

                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-3.5 py-2.5 text-xs font-semibold text-slate-700 transition-colors text-center"
                >
                  <span>Phone Support</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
