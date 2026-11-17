'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  LayoutDashboard, 
  FileText, 
  Smartphone, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

const SCREENSHOT_TABS = [
  {
    id: 'naksha',
    title: 'Colony Naksha (Layout Map)',
    subtitle: 'Live Interactive Plot Availability Map',
    icon: MapPin,
    image: '/screenshots/colony-map-preview.svg',
    points: [
      'Available (Hara), Reserved (Peela), aur Booked (Laal) status real-time update hota hai.',
      'AutoCAD ya Town Planning se nikla SVG vector naksha direct upload kar sakte hain.',
      'Plot par click karte hi dimension (30x50, 40x60), carpet area, facing, aur rate index price samne aa jati hai.',
      'Atomic Transaction Lock se do sales executive ek plot ko ek sath reserve nahi kar sakte.',
    ],
  },
  {
    id: 'dashboard',
    title: 'Main ERP Dashboard',
    subtitle: 'Colonizer Master Control Center',
    icon: LayoutDashboard,
    image: '/screenshots/dashboard-preview.svg',
    points: [
      'Total Plots, Booked Units, Available Inventory, aur Pending Dues ek hi screen par dikhte hain.',
      'Sales revenue velocity aur monthly cash collections ka automatic graphical trend.',
      'PDC Cheques in Vault — kitne cheque agle 7 aur 30 dino me bank me lagane hain, uska alert.',
      'Overdue payment reminders aur automated demand letter generation trigger.',
    ],
  },
  {
    id: 'demand',
    title: 'Kist (Installment) Demand Letter',
    subtitle: 'Branded Milestone Notice & Receipt PDF',
    icon: FileText,
    image: '/screenshots/installment-receipt.svg',
    points: [
      'Construction milestone complete hote hi (jaise Plinth, Road, Slab) bulk demand letters generate karein.',
      'Har customer ke naam, plot number, purana paid hisab, aur abhi kitna dena hai, sab table me clear aata hai.',
      'Company letterhead, authorized seal, authorized signature, aur RERA Escrow Bank RTGS details ke sath official PDF.',
      'Single click par WhatsApp aur Email par customer ko send ho jata hai.',
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile App / Site View',
    subtitle: 'Sales Executive On-Site Mobile Tool',
    icon: Smartphone,
    image: '/screenshots/mobile-app-mockup.svg',
    points: [
      'Site par ghoom rahe sales executives apne phone par live colony map dekh sakte hain.',
      '99acres aur MagicBricks se aane wali inquiry phone par aate hi 1-click WhatsApp ya Call kar sakte hain.',
      'Site visit ke dauran customer ke samne hi token bayana lock kar sakte hain.',
      'Android aur iPhone dono par smoothly chalta hai.',
    ],
  },
  {
    id: 'pdc',
    title: 'PDC Cheque Vault & Accounts',
    subtitle: 'Post-Dated Cheques Single-Clearance Register',
    icon: Clock,
    image: '/screenshots/pdc-vault.svg',
    points: [
      'Customer se aage ki kishton ke liye liye gaye cheques (PDC) vault me safe log hote hain.',
      'Maturity date se pehle bank me lagane ka reminder milta hai.',
      'Bank se cheque pass hone par hi customer receipt aur double-entry ledger credit generate hota hai.',
      'Cheque bounce hone par penalty charge aur reminder automatically lag jata hai.',
    ],
  },
];

export function SoftwareScreenshotsGallery() {
  const [activeTab, setActiveTab] = useState(SCREENSHOT_TABS[0].id);
  const current = SCREENSHOT_TABS.find((t) => t.id === activeTab) || SCREENSHOT_TABS[0];

  return (
    <section id="screenshots" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 border border-blue-200 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Asli Software ke Screenshots Dekhein</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Hamare Real Estate ERP ka Actual Interface
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Niche diye gaye tabs par click karke dekhiye ki software ke andar Colony Naksha, Dashboard, Demand Notice aur Mobile view kaisa dikhta hai:
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {SCREENSHOT_TABS.map((tab) => {
            const Icon = tab.icon;
            const isSelected = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-blue-600'}`} />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Screenshot Display Frame */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Screenshot (7 Cols or 8 Cols) */}
            <div className="lg:col-span-8 flex justify-center">
              <div className="w-full rounded-2xl overflow-hidden border border-slate-300 shadow-2xl bg-slate-900">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Explanatory Points (4 Cols) */}
            <div className="lg:col-span-4 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Feature In-Depth
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  {current.title}
                </h3>
                <p className="text-sm font-semibold text-slate-500 mt-0.5">
                  {current.subtitle}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {current.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <div className="h-5 w-5 shrink-0 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-blue-700 transition-all"
                >
                  <span>Iska Live Walkthrough Dekhein</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
