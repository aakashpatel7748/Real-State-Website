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
    badge: 'Financial Accounting',
    link: '/modules/accounting',
    features: [
      {
        title: 'Post-Dated Cheques (PDC) Vault',
        desc: 'Customer se liye gaye advance cheques vault me secure rehte hain. Cheque bank me pass hone par hi receipt generate hoti hai aur ledger me credit hota hai.',
      },
      {
        title: 'FIFO Kist (Installment) Allocation',
        desc: 'Jab bhi customer payment kare, system sabse purani baaki kist ko pehle settle karta hai, jisse hisab-kitab me kabhi gadbadi nahi hoti.',
      },
      {
        title: 'Double-Entry General Ledger',
        desc: 'Complete Chart of Accounts: Trial Balance, Profit & Loss aur Balance Sheet system automatically database se compute karta hai.',
      },
      {
        title: 'GST Vouchers & Reversible Notes',
        desc: 'CGST, SGST, IGST ka exact hisab aur input tax credit summary. Booking cancel hone par credit/debit notes automatically reverse ho jate hain.',
      },
    ],
  },
  {
    id: 'land-construction',
    title: 'Land (Khasra) & Site Works',
    tagline: 'Khasra-Khata zameen khareed se site thekedar billing',
    icon: HardHat,
    badge: 'Land & Site Control',
    link: '/modules/land-and-construction',
    features: [
      {
        title: 'Khasra aur Khata Land Parcels',
        desc: 'Kisan se agricultural land khareedne ke hisab: Khasra number, khata number, bigha/acre area, bayana payment, agreement, aur registry ledger.',
      },
      {
        title: 'Owner Disbursements & Land Capital Ledger',
        desc: 'Zameen malik ko diye gaye har installment ka payment direct Land & Development Capital account me post hota hai.',
      },
      {
        title: 'Thekedar Work Orders aur Milestone Bills',
        desc: 'Earthmoving, boundary wall, sewerage aur road ke thekedaro ko work order issue karein. Thekedar ka bill sanction limit se zyada pass nahi hota.',
      },
      {
        title: 'Real Cost per Sq.Ft Analysis',
        desc: 'Zameen khareed, licensing, development aur thekedar kharche jodkar exact cost per sq.ft nikaalein taaki profit margin accurate rahe.',
      },
    ],
  },
];

export function ModulesShowcase() {
  const [selectedModule, setSelectedModule] = useState(MODULES_DATA[0].id);
  const activeData = MODULES_DATA.find((m) => m.id === selectedModule) || MODULES_DATA[0];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 border border-blue-200 mb-3">
            <span>5 Powerful Modules</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Indian Colonizers ke Real Workflows ke Liye Banaya Gaya
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Koi generic software nahi — ye platform zameen khareed se lekar registry aur possession tak ka har ek step handle karta hai:
          </p>
        </div>

        {/* Module Selection Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {MODULES_DATA.map((module) => {
            const Icon = module.icon;
            const isSelected = selectedModule === module.id;
            return (
              <button
                key={module.id}
                onClick={() => setSelectedModule(module.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-blue-600'}`} />
                <span>{module.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Module Card Display */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <activeData.icon className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {activeData.badge}
                </span>
                <h3 className="text-2xl font-black text-slate-900">{activeData.title}</h3>
                <p className="text-sm text-slate-500 font-medium">{activeData.tagline}</p>
              </div>
            </div>

            <Link
              href={activeData.link}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>{activeData.title} ki Poori Detail Dekhein</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 4 Feature Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeData.features.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 transition-all hover:border-blue-200 hover:bg-blue-50/30"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{feat.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
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
