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
    tag: 'Master Colonizer Overview',
    subtitle: 'Real-time sales velocity, collections, overdue installments & plot inventory',
    icon: LayoutDashboard,
    image: '/screenshots/plotline-main-dashboard-clean.svg',
    points: [
      'Total Plots, Booked Units, Available Inventory (₹1.04 Cr) aur Outstanding Receivables (₹1.71 Cr) ek hi screen par.',
      'Monthly Collections (₹24.39 L) aur Overdue Dues (₹5.57 L - 4 installments past due) ka live alert.',
      'Land acquisition costs (₹50 L paid of ₹1 Cr) aur Site development expenses (₹2.5 L) ka real-time tracking.',
      'One-click global search (Ctrl+K) se kisi bhi customer, booking ID, ya plot number ko instantly khojein.',
    ],
  },
  {
    id: 'leads-crm',
    title: 'Leads & Enquiries CRM',
    tag: 'Pre-Sales Pipeline Board',
    subtitle: 'Portal leads (99acres, MagicBricks, Meta, Walk-in) Kanban tracking',
    icon: Users,
    image: '/screenshots/plotline-leads-board-clean.svg',
    points: [
      'New Leads, Contacted, Site Visit Done, aur Negotiation stage ka clean visual Kanban board.',
      'Har lead card par direct phone number, project tag (RGVE), source (99acres, Facebook, Walk-in), aur next follow-up date.',
      'Site Visit scheduling aur follow-ups due alert system — koi bhi customer lead miss nahi hoti.',
      'Executive-wise lead assignment aur conversion percentage (Won/Lost) automatic calculation.',
    ],
  },
  {
    id: 'sales-analytics',
    title: 'Sales Dashboard & Conversions',
    tag: 'Weekly Performance Tracking',
    subtitle: 'Enquiries vs bookings weekly trend, conversion pipeline & revenue velocity',
    icon: TrendingUp,
    image: '/screenshots/plotline-sales-pipeline-clean.svg',
    points: [
      'Weekly Enquiries vs Bookings graphical trend chart (W45 metrics and conversions).',
      'Open Pipeline stages (New, Contacted, Site Visit, Negotiation) ka live capacity progress indicator.',
      'Total active quotations value (₹1.95 Cr across 5 quotations) aur conversion velocity.',
      'Date-range filters (From - To) se custom monthly, quarterly aur annual sales reports nikalein.',
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
      'Available (Hara), Reserved (Peela), aur Booked (Laal) status map par real-time update hota hai.',
      'AutoCAD ya Town Planning se nikla vector SVG layout map direct software me upload karein.',
      'Plot par click karte hi dimensions (30x50, 40x60), carpet area, facing, aur rate index price samne aa jati hai.',
      'Zero Double-Booking atomic lock — do sales executives ek plot ko ek sath book nahi kar sakte.',
    ],
  },
  {
    id: 'kist-demand',
    title: 'Kist (Installment) Demand Letter',
    tag: 'Automated Billing & Recovery',
    subtitle: 'Official branded milestone demand notice & payment receipt PDF',
    icon: FileText,
    image: '/screenshots/installment-receipt.svg',
    points: [
      'Construction milestone complete hote hi (Plinth, Road, Sewer, Registry) bulk demand letters generate karein.',
      'Har customer ke naam, plot number, purana paid hisab, aur abhi kitna due hai, sab table me transparent aata hai.',
      'Company letterhead, authorized seal, signature, aur RERA Escrow Bank RTGS details ke sath legal PDF.',
      '1-Click par WhatsApp aur Email par customer ko send ho jata hai.',
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
            <span>Asli Product UI Screenshots</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight">
            Hamare Real Estate ERP ka Actual Interface
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Niche diye gaye tabs par click karke dekhiye ki software ke andar Main Dashboard, Leads CRM, Sales Analytics, Colony Naksha aur Demand Notice kaisa dikhta hai:
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
            
            {/* Visual Screenshot Display (7 Cols on desktop) */}
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

            {/* Feature Details Column (4 Cols on desktop) */}
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
                  <span>Iska Live Demo Dekhein</span>
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
