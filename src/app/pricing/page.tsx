import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Sparkles, Building2, ShieldCheck, ArrowRight } from 'lucide-react';

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
    description: 'Perfect for standalone plotted colonies, farm houses, or single residential phases.',
    units: 'Up to 150 Units / Plots',
    price: '₹ 14,999',
    period: '/ month',
    highlight: false,
    cta: 'Get Started with Starter',
    features: [
      'Interactive SVG Colony Plot Layout Map',
      'Zero Double-Booking Unit Locking',
      'Inbound Webhooks (99acres, MagicBricks, Housing)',
      'WhatsApp Click-to-Chat with Message Logs',
      'Cost Sheets & Quotation PDF Generator',
      'Milestone Demand Letters (Single & Bulk PDF)',
      'Allotment & Possession Letters',
      'Up to 5 Sales & Office Staff Users',
    ],
  },
  {
    name: 'Township Growth',
    description: 'The standard choice for active colonizers, multi-phase townships, and plotted developers.',
    units: 'Up to 600 Units / Plots',
    price: '₹ 29,999',
    period: '/ month',
    highlight: true,
    badge: 'Most Popular for Builders',
    cta: 'Book Live Demo & Onboard',
    features: [
      'Everything in Colonizer Starter',
      'Post-Dated Cheques (PDC) Vault & Clearance',
      'Khasra & Khata Land Acquisition Ledgers',
      'Contractor Work Orders & Milestone Bills',
      'Double-Entry Accounting (Trial Balance, P&L, Balance Sheet)',
      'GST Vouchers (CGST, SGST, IGST Calculation)',
      'Dynamic Rate & Price Index Repricing',
      'Dues Aging Buckets & Recovery Reminders',
      'Up to 20 Staff & Site Engineer Accounts',
    ],
  },
  {
    name: 'Enterprise Builder',
    description: 'For corporate developers with multiple sister companies, group projects, and high-rises.',
    units: 'Unlimited Units & Phases',
    price: 'Custom',
    period: 'Tailored to Group Scale',
    highlight: false,
    cta: 'Schedule Corporate Consultation',
    features: [
      'Everything in Township Growth',
      'Multi-Company Tenancy & Group Switching',
      'Project-Level Role & Permission Restrictions',
      'Custom AutoCAD SVG Map Coordinate Mapping',
      'Dedicated MongoDB Atlas Database Instance',
      'Priority 24/7 Phone & On-Site Support',
      'Full Data Migration from Excel / Legacy ERP',
      'Unlimited User Accounts & Custom Workflows',
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Transparent Investment</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Predictable Pricing for <br />
            <span className="text-gradient-primary">Every Stage of Development</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            No hidden per-transaction cuts. One flat subscription covers your layout maps, demand letters, PDC vault, and accounting.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border flex flex-col justify-between p-8 backdrop-blur-xl transition-all relative ${
                tier.highlight
                  ? 'border-indigo-500/80 bg-slate-900/80 shadow-2xl shadow-indigo-950/60 ring-2 ring-indigo-500/30'
                  : 'border-white/10 bg-slate-900/40 hover:border-white/20'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 px-3.5 py-1 text-xs font-bold text-white shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <span className="rounded-lg bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-indigo-300 border border-white/5">
                    {tier.units}
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed min-h-[36px]">
                  {tier.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1 border-b border-white/10 pb-6">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-xs text-slate-400 font-medium">{tier.period}</span>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Included Capabilities:
                  </div>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="h-4 w-4 shrink-0 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="/contact"
                  className={`w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-xs sm:text-sm font-semibold transition-all ${
                    tier.highlight
                      ? 'bg-gradient-to-r from-indigo-500 to-emerald-500 text-white shadow-lg shadow-indigo-500/30 hover:scale-[1.02]'
                      : 'border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white'
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
        <div className="mt-16 rounded-2xl border border-white/10 bg-slate-900/30 p-6 sm:p-8 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-emerald-400 shrink-0" />
            <span>
              All plans include guided database onboarding, Excel unit data import, and dedicated staff training sessions.
            </span>
          </div>
          <Link href="/contact" className="text-indigo-400 font-semibold hover:text-indigo-300 shrink-0">
            Talk to an ERP Consultant →
          </Link>
        </div>
      </div>
    </div>
  );
}
