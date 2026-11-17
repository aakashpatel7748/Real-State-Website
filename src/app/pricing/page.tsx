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
    description: 'Designed for standalone plotted colonies, single residential phases, and farmhouse developments.',
    units: 'Up to 150 Plots / Units',
    price: '₹ 14,999',
    period: '/ month',
    highlight: false,
    cta: 'Choose Starter Plan',
    features: [
      'Interactive Vector Colony Plot Layout Map',
      '0% Double-Booking Atomic Unit Locking',
      '99acres, MagicBricks & Meta Inbound Webhooks',
      '1-Click WhatsApp Chat with Message Logs',
      'Branded Cost Sheet & Quotation PDF Generator',
      'Milestone Demand Letters (Single & Bulk PDF)',
      'Buyer Allotment & Possession Handover Letters',
      '5 Sales & Office Staff User Accounts',
    ],
  },
  {
    name: 'Township Growth',
    description: 'Ideal for active colonizers, multi-phase townships, and integrated plotted residential developers.',
    units: 'Up to 600 Plots / Units',
    price: '₹ 29,999',
    period: '/ month',
    highlight: true,
    badge: 'Most Popular for Colonizers',
    cta: 'Book Demo & Get Started',
    features: [
      'All features included in Starter Plan',
      'Post-Dated Cheques (PDC) Vault & Realization',
      'Khasra & Khata Land Acquisition Ledgers',
      'Contractor Work Orders & Milestone RA Bills',
      'Double-Entry Accounting (Trial Balance, P&L, Balance Sheet)',
      'GST Compliant Vouchers (CGST, SGST, IGST Calculation)',
      'Dynamic Rate Indexing (Automated Inventory Repricing)',
      'Dues Aging Buckets & Automated Payment Reminders',
      '20 Staff & Site Engineer User Accounts',
    ],
  },
  {
    name: 'Enterprise Builder',
    description: 'Engineered for large real estate groups with multiple subsidiary firms, towers, and commercial complexes.',
    units: 'Unlimited Units & Phases',
    price: 'Custom',
    period: 'Tailored to Scale',
    highlight: false,
    cta: 'Contact Enterprise Advisory',
    features: [
      'All features included in Township Growth',
      'Multi-Company Tenancy & Group Entity Switching',
      'Granular Role-Based Access & Branch Permissions',
      'Custom AutoCAD Vector Layout Boundary Mapping',
      'Dedicated MongoDB Atlas Cloud Database Instance',
      'Priority 24/7 Phone & Screen Share Assistance',
      'Free Legacy Data & Excel Unit Migration Service',
      'Unlimited User Accounts & Custom Financial Reports',
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-900 border border-teal-200 mb-3 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-teal-600" />
            <span>Transparent Investment Plans</span>
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
            Transparent Pricing Built for Indian Colonizers
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            No hidden fees, no per-plot transaction surcharges. Every plan includes free onboarding, colony map setup, and legacy spreadsheet data migration:
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all bg-white relative ${
                tier.highlight
                  ? 'border-teal-600 shadow-2xl shadow-teal-950/10 ring-2 ring-teal-600'
                  : 'border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#042026] text-white px-4 py-1 text-[11px] font-bold uppercase tracking-wider shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                  <span className="text-xs font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                    {tier.units}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">{tier.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                    {tier.price}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{tier.period}</span>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Included Capabilities:
                  </span>
                  <ul className="mt-4 space-y-2.5 text-xs text-slate-700">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  href="/contact"
                  className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                    tier.highlight
                      ? 'bg-[#042026] text-white hover:bg-[#083c47] shadow-teal-950/20'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Free Migration Callout */}
        <div className="mt-14 rounded-2xl border border-teal-200 bg-teal-50/70 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-700 text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-teal-950">
                Free Onboarding &amp; Map Migration Assistance
              </h4>
              <p className="text-xs sm:text-sm text-teal-800 mt-0.5">
                Switching from Excel or another software? Our engineering team migrates your existing customer records and digitizes your colony maps at zero additional cost.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#042026] hover:bg-[#083c47] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition-all"
          >
            <span>Talk to ERP Consultant</span>
            <ArrowRight className="h-4 w-4 text-emerald-400" />
          </Link>
        </div>
      </div>
    </div>
  );
}
