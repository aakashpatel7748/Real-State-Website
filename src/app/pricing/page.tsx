import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Sparkles, Building2, ShieldCheck, ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transparent Pricing Plans for Indian Colonizers & Real Estate Builders',
  description:
    'Simple, transparent ERP pricing for plotted townships and multi-storey developers. Includes interactive SVG layout map, automated milestone demand letters, PDC vault, and double-entry accounting.',
  keywords: [
    'Real Estate ERP Pricing India',
    'Colony management software cost',
    'Plot layout map software plans',
    'Builder ERP monthly yearly subscription',
  ],
};

const TIERS = [
  {
    name: 'Colonizer Starter',
    description: 'Standalone plotted colonies, single residential phase ya farm house projects ke liye.',
    units: '150 Plots / Units tak',
    price: '₹ 14,999',
    period: '/ month',
    highlight: false,
    cta: 'Starter Plan Chunein',
    features: [
      'Interactive SVG Colony Plot Layout Map',
      'Zero Double-Booking Unit Locking',
      '99acres, MagicBricks, Housing Inbound Webhooks',
      'WhatsApp Click-to-Chat with Message Logs',
      'Cost Sheet & Quotation PDF Generator',
      'Milestone Demand Letters (Single & Bulk PDF)',
      'Allotment & Possession Letters',
      '5 Sales & Office Staff Login Accounts',
    ],
  },
  {
    name: 'Township Growth',
    description: 'Active colonizers, multi-phase townships, aur plotted residential developers ke liye best.',
    units: '600 Plots / Units tak',
    price: '₹ 29,999',
    period: '/ month',
    highlight: true,
    badge: 'Builders dwara Sabse Zyada Pasand',
    cta: 'Live Demo Book Karke Onboard Karein',
    features: [
      'Starter Plan ke Sabhi Features',
      'Post-Dated Cheques (PDC) Vault & Clearance',
      'Khasra & Khata Land Acquisition Ledgers',
      'Thekedar Work Orders & Milestone Bills',
      'Double-Entry Accounting (Trial Balance, P&L, Balance Sheet)',
      'GST Vouchers (CGST, SGST, IGST Calculation)',
      'Dynamic Rate Index (Auto Repricing)',
      'Dues Aging Buckets & Recovery Reminders',
      '20 Staff & Site Engineer Accounts',
    ],
  },
  {
    name: 'Enterprise Builder',
    description: 'Bade group of companies, multiple sister firms, aur high-rise towers ke liye.',
    units: 'Unlimited Units & Phases',
    price: 'Custom',
    period: 'Scale ke Hisab se',
    highlight: false,
    cta: 'Enterprise Consultation Karein',
    features: [
      'Township Growth ke Sabhi Features',
      'Multi-Company Tenancy & Group Switching',
      'Project-Level Role & Permission Restrictions',
      'Custom AutoCAD SVG Map Coordinate Mapping',
      'Dedicated MongoDB Atlas Database Instance',
      'Priority 24/7 Phone & On-Site Support',
      'Excel / Purane Software se Free Data Migration',
      'Unlimited User Accounts & Custom Reports',
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 border border-blue-200 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Seedhe aur Saaf Plans</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Transparent Pricing Plans
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Koi hidden transaction cut nahi. Flat monthly subscription me Naksha, Demand Notice, PDC Vault aur Accounts sab shamil:
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border flex flex-col justify-between p-8 transition-all relative ${
                tier.highlight
                  ? 'border-blue-600 bg-white shadow-2xl shadow-blue-600/10 ring-2 ring-blue-600/20'
                  : 'border-slate-200 bg-white shadow-md hover:border-slate-300'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold text-white shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-slate-900">{tier.name}</h3>
                  <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-800 border border-blue-200">
                    {tier.units}
                  </span>
                </div>

                <p className="mt-2.5 text-xs text-slate-500 font-medium leading-relaxed min-h-[36px]">
                  {tier.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1 border-b border-slate-100 pb-6">
                  <span className="text-4xl font-black text-slate-900">{tier.price}</span>
                  <span className="text-xs text-slate-500 font-bold">{tier.period}</span>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Included Features:
                  </div>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="h-4 w-4 shrink-0 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  href="/contact"
                  className={`w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-xs sm:text-sm font-bold transition-all ${
                    tier.highlight
                      ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700'
                      : 'border border-slate-300 bg-slate-50 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-emerald-600 shrink-0" />
            <span>
              Sabhi plans me guided database setup, Excel se purani inventory import, aur sales staff ki training shamil hai.
            </span>
          </div>
          <Link href="/contact" className="text-blue-700 font-bold hover:text-blue-900 shrink-0">
            Expert se Baat Karein →
          </Link>
        </div>
      </div>
    </div>
  );
}
