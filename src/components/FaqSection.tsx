'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const FAQS = [
  {
    question: 'How does Plotline ERP prevent double-bookings across sales teams?',
    answer:
      'Plotline utilizes database-level atomic transaction locks. The moment a sales executive selects a plot to create a token reservation or quotation, that unit is instantly locked across all user sessions with an expiry countdown timer (e.g., 48 hours). No other executive can book or hold that plot until the initial reservation is formally cancelled or expired.',
  },
  {
    question: 'Can we upload our AutoCAD or CorelDraw colony layout maps?',
    answer:
      'Yes, absolutely! Plotline features a built-in vector SVG layout engine. You can directly upload vector SVG files exported from town planning, AutoCAD, or CorelDraw. Our technical team also provides free map conversion and onboarding assistance to plot boundaries and assign unit numbers for you.',
  },
  {
    question: 'How are milestone-based installment demand letters generated and sent?',
    answer:
      'In the Post-Sales module, certifying a construction stage (such as Plinth, Road Asphalt, Sewer Line, or 1st Slab) automatically identifies all buyers due for that milestone. In a single click, official branded PDF demand notices are generated—detailing past payments, current dues, and RERA escrow bank RTGS details—and dispatched via WhatsApp and Email.',
  },
  {
    question: 'How does the Post-Dated Cheque (PDC) Vault work?',
    answer:
      'The PDC Vault records cheque numbers, drawee banks, amounts, and maturity dates. The system triggers advance deposit alerts. Crucially, official customer receipts and ledger credits are generated only after your finance team verifies that the cheque has cleared through the bank.',
  },
  {
    question: 'Do enquiries from 99acres, MagicBricks, and Meta ads sync automatically?',
    answer:
      'Yes. Plotline provides dedicated webhook endpoints for each advertising channel. Incoming inquiries are parsed instantly, deduplicated via SHA-256 phone number hashing, and assigned to sales executives with direct 1-click WhatsApp messaging capability.',
  },
  {
    question: 'Is Plotline ERP compliant with Indian RERA and GST regulations?',
    answer:
      '100%. Plotline formats all buyer-builder agreements, allotment letters, interest penalty schedules, tax invoices, and double-entry voucher ledgers in strict accordance with Indian Real Estate (Regulation and Development) Act standards and GST tax accounting laws.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header with Scroll Reveal */}
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-900 border border-teal-200 mb-3 shadow-xs">
            <HelpCircle className="h-3.5 w-3.5 text-teal-600" />
            <span>Questions &amp; Answers</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-slate-800 leading-normal sm:leading-relaxed lg:leading-[1.38]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Direct answers to common questions asked by real estate developers and colonizers:
          </p>
        </ScrollReveal>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 60}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all hover:border-slate-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors hover:bg-slate-50"
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-800 pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#042026] text-white' : ''}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
