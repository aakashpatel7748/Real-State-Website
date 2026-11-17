'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: 'How does Plotline ERP prevent two sales executives from double-booking the same plot?',
    answer:
      'Plotline uses strict multi-document database transaction locks on MongoDB replica sets. When an executive opens a plot for token reservation, the unit is locked with a configurable expiry timer (e.g., 48 hours). No other staff member can reserve or book that plot until the token either clears or expires automatically via our background cron.',
  },
  {
    question: 'Can we upload our real colony layout map created in AutoCAD or CorelDraw?',
    answer:
      'Yes! Plotline has a dedicated interactive SVG layout engine. You can upload standard SVG map exports generated from AutoCAD, Town Planning drawings, or GIS layers. Our built-in layout editor allows you to map SVG polygon tags directly to plot numbers with live hover inspections.',
  },
  {
    question: 'How are milestone-based demand letters generated for construction stages?',
    answer:
      'In the Post-Sales module, you can trigger payment demands either for an individual unit or across the entire project when a construction milestone is reached (e.g., Plinth Level, 1st Floor Slab, External Plaster). The system calculates pending amounts, adds overdue interest if applicable, and generates official branded PDFs ready for email and WhatsApp dispatch.',
  },
  {
    question: 'How does the Post-Dated Cheque (PDC) register work?',
    answer:
      'When buyers hand over installment cheques, they are logged into the PDC vault with cheque number, issuing bank, amount, and maturity date. Crucially, the accounting receipt and customer ledger credit are generated exactly once—only when your accounts team marks the cheque as cleared by the bank.',
  },
  {
    question: 'Does the system handle Portal Leads from 99acres, MagicBricks, and Housing.com?',
    answer:
      'Yes. Plotline provides dedicated inbound webhook URLs for each lead source channel. Incoming webhooks are automatically ingested, validated with SHA-256 de-duplication, assigned to sales executives, and formatted with direct WhatsApp click-to-chat links.',
  },
  {
    question: 'Is Plotline compliant with RERA and Indian GST regulations?',
    answer:
      '100%. All customer ledger adjustments, Builder-Buyer Agreement (BBA) terms, demand notices, interest calculations, and GST vouchers (CGST/SGST/IGST breakdown) follow Indian real estate compliance frameworks. Double-entry accounting ensures complete audit readiness.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 lg:py-28 bg-[#080d19]/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Everything Builders Ask About <br />
            <span className="text-gradient-primary">Deploying Plotline ERP</span>
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Clear, transparent answers on compliance, layout mapping, accounting integration, and data security.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors hover:bg-white/[0.02]"
                >
                  <span className="text-base sm:text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-indigo-600 text-white' : ''}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
