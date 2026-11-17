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
  ShieldCheck,
  Building,
  PhoneCall
} from 'lucide-react';

const MODULES_DATA = [
  {
    id: 'pre-sales',
    title: 'Pre-Sales & Lead CRM',
    tagline: '99acres, MagicBricks aur WhatsApp leads ek jagah',
    icon: Sparkles,
    badge: 'Marketing & Sales',
    link: '/modules/pre-sales',
    features: [
      {
        title: 'Property Portals se Direct Leads (Webhooks)',
        desc: '99acres, MagicBricks, Housing.com aur Facebook ads se aane wali inquiries turant CRM me store hoti hain. SHA-256 de-duplication se duplicate inquiry nahi banti.',
      },
      {
        title: 'WhatsApp Click-to-Chat & Template Logs',
        desc: 'Sales executive bina number save kiye ek click me customer ko WhatsApp par greeting message, brochure, aur layout map bhej sakte hain.',
      },
      {
        title: 'Cost Sheet & Quotation PDF',
        desc: 'Plot rate, PLC charges, corner charges aur installment schedule jodkar turant branded Quotation PDF banti hai, jise ek click me booking me convert kar sakte hain.',
      },
      {
        title: 'Automated Follow-Up Reminder',
        desc: 'Har 30 minute me system sales team ko alert bhejta hai taaki koi bhi customer site visit ya follow-up call miss na ho.',
      },
    ],
  },
  {
    id: 'inventory-map',
    title: 'Colony Naksha & Inventory',
    tagline: 'Live interactive plot map with double-booking lock',
    icon: MapPin,
    badge: 'Inventory Management',
    link: '/modules/inventory-and-map',
    features: [
      {
        title: 'Interactive SVG Colony Naksha',
        desc: 'Plotting map me zoom-in, zoom-out karein aur live status dekhein. Har plot ka color (Available: Hara, Reserved: Peela, Booked: Laal) auto update hota hai.',
      },
      {
        title: 'Zero Double-Booking Guarantee',
        desc: 'Database lock technology: jaise hi koi executive token bayana reserve karta hai, wo plot dusre kisi bhi sales person ke liye lock ho jata hai.',
      },
      {
        title: 'Dynamic Rate Index (Auto Repricing)',
        desc: 'Jaise-jaise colony me development badhe (sadak, boundary wall), aap bache hue plots ka rate badha sakte hain bina purani bookings ko chhede.',
      },
      {
        title: 'Plot, Flat, Villa aur Dukanen (Shops)',
        desc: 'Plotted colony, multistory flats, duplex villas aur commercial shops sabhi ki inventory dimensions, carpet area, aur parking slots ke sath manage karein.',
      },
    ],
  },
  {
    id: 'post-sales',
    title: 'Post-Sales & Demand Letters',
    tagline: 'Construction milestone par automated demand notice',
    icon: FileText,
    badge: 'Customer Operations',
    link: '/modules/post-sales',
    features: [
      {
        title: 'Bulk Milestone Demand Letters (PDF)',
        desc: 'Site par Plinth, Road ya Slab complete hote hi us milestone se jude sabhi customers ke demand notice ek sath generate karein aur WhatsApp/Email karein.',
      },
      {
        title: 'Builder-Buyer Agreement (BBA) Tracking',
        desc: 'BBA drafting, customer signature, stamp duty aur RERA compliance ki complete digital tracking taaki legal compliance 100% rahe.',
      },
      {
        title: 'Dues Aging Buckets (30, 60, 90+ Din)',
        desc: 'Kaunsa customer kitne din se installment nahi de raha hai, uski aging report dekhein aur phone follow-up promises log karein.',
      },
      {
        title: 'Allotment, Registry aur Possession Letters',
        desc: 'Registry execution aur final dues clear hone par official branded possession letter aur handover certificate generate karein.',
      },
    ],
  },
  {
    id: 'accounting-pdc',
    title: 'Accounts, PDC & Finance',
    tagline: 'Colonizer double-entry accounts aur cheque vault',
    icon: ReceiptIndianRupee,
    badge: 'Finance & Accounts',
    link: '/modules/accounting',
    features: [
      {
        title: 'PDC Cheque Vault & Realization',
        desc: 'Aage ki tareekh ke cheques (Post-Dated Cheques) vault me save karein. Bank me deposit hone aur clear hone par hi receipt aur accounts entry hoti hai.',
      },
      {
        title: 'Double-Entry Accounting System',
        desc: 'Customer receipt, vendor payment, broker commission, aur site kharche sabhi standardized Chart of Accounts ke sath tally-grade accuracy me balance hote hain.',
      },
      {
        title: 'Broker / Channel Partner Commission',
        desc: 'Agent-wise commission slab (2%, 3%, 5%) define karein. Jaise-jaise customer se booking amount aata hai, agent commission stage-wise unlock hota hai.',
      },
      {
        title: 'GST & RERA Escrow Reconciliation',
        desc: 'GSTR-1 aur GSTR-3B audit-ready reports, plus RERA 70% escrow account deposit ratio ki automatic audit sheet.',
      },
    ],
  },
  {
    id: 'land-works',
    title: 'Land (Khasra) & Site Works',
    tagline: 'Zameen khareed hisab aur site development cost',
    icon: HardHat,
    badge: 'Land & Site Works',
    link: '/modules/land-and-construction',
    features: [
      {
        title: 'Khasra, Khata & Land Parcel Ledger',
        desc: 'Kisan (farmer) ya land owner se kiya gaya agreement, kul khet ka area (Bigha/Acres/Hectares), aur token/bayana payments ka record.',
      },
      {
        title: 'Contractor Work Orders & Measurements',
        desc: 'Sadak, naali, boundary wall, street lights aur sewerage ke vendor work orders bano, RA bills verify karo aur payment schedule track karo.',
      },
      {
        title: 'Material Consumption (Cement, Rod, Sand)',
        desc: 'Site par kitna sariya, cement aur mitti aayi aur kitni consume hui, uska daily supervisor entry system.',
      },
      {
        title: 'True Land Cost Per Sq.Ft.',
        desc: 'Zameen ki khareed kimat + registry charges + development kharcha milakar exact costing nikalta hai taaki profit margin accurate rahe.',
      },
    ],
  },
];

export function ModulesShowcase() {
  const [selectedModule, setSelectedModule] = useState(MODULES_DATA[0].id);
  const activeData = MODULES_DATA.find((m) => m.id === selectedModule) || MODULES_DATA[0];

  return (
    <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-900 border border-teal-200 mb-3 shadow-xs">
            <span>5 Core Colonizer Modules</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight">
            Indian Colonizers ke Real Workflows ke Liye Banaya Gaya
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Koi generic software nahi — ye platform zameen khareed se lekar registry aur possession tak ka har ek step handle karta hai:
          </p>
        </div>

        {/* Module Selection Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8">
          {MODULES_DATA.map((module) => {
            const Icon = module.icon;
            const isSelected = selectedModule === module.id;
            return (
              <button
                key={module.id}
                onClick={() => setSelectedModule(module.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
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
        </div>

        {/* Selected Module Card Display */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-8 shadow-xl shadow-slate-900/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-800 border border-teal-100">
                <activeData.icon className="h-5 w-5 text-teal-700" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0d9488]">
                  {activeData.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">{activeData.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal">{activeData.tagline}</p>
              </div>
            </div>

            <Link
              href={activeData.link}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-800 hover:text-teal-950 transition-colors"
            >
              <span>{activeData.title} ki Poori Detail Dekhein</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 4 Feature Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {activeData.features.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-all hover:border-teal-200 hover:bg-teal-50/20"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{feat.title}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-7 font-normal">
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
