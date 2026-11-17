'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: 'Plotline ERP me Double Booking hone se kaise bacha jata hai?',
    answer:
      'Plotline database level par atomic transaction lock use karta hai. Jaise hi koi sales executive kisi customer ke liye token bayana ya reservation select karta hai, wo plot turant lock ho jata hai with a timer (jaise 48 hours). Dusra koi bhi sales executive us plot ko tab tak select ya book nahi kar sakta jab tak pehla token cancel ya expire na ho jaye.',
  },
  {
    question: 'Kya hum apna AutoCAD ya CorelDraw me bana hua colony naksha upload kar sakte hain?',
    answer:
      'Haan, bilkul! Plotline me SVG layout engine hai. Aap apne town planning, CAD ya CorelDraw se SVG vector export karke direct upload kar sakte hain. Software me built-in map editor bhi hai jisse aap plot boundary par click karke plot number assign kar sakte hain.',
  },
  {
    question: 'Construction milestone ke hisab se demand letter kaise nikalte hain?',
    answer:
      'Post-Sales module me jab bhi aap kisi milestone ko complete mark karenge (jaise Plinth level, 1st Slab ya Road asphalt), system un sabhi customers ki list dikhayega jinki us milestone par kist banti hai. Ek click me sabhi customers ke official PDF demand notice ban jaate hain jisme purana balance, abhi ka amount aur bank RTGS details shamil hoti hain.',
  },
  {
    question: 'Customer se liye gaye advance cheques (PDC) ka hisab kaise hota hai?',
    answer:
      'PDC Vault me har cheque ka number, bank ka naam, amount aur maturity date daali jaati hai. System date aane par alert deta hai. Sabse important baat ye hai ki customer ledger me credit aur official receipt sirf tab generate hoti hai jab aapke accounts team mark kare ki cheque bank me clear ho gaya hai.',
  },
  {
    question: 'Kya 99acres, MagicBricks aur Facebook se aane wali leads direct CRM me aati hain?',
    answer:
      'Haan, Plotline har channel ke liye secret webhook URL deta hai. Inquiry aate hi bina kisi manual entry ke CRM me save ho jaati hai, duplicates filter ho jaate hain aur sales rep ko notification mil jata hai with direct WhatsApp click-to-chat button.',
  },
  {
    question: 'Kya ye software RERA aur GST ke rules ke anusaar hai?',
    answer:
      'Haan, 100%. Customer agreement terms, allotment letters, interest calculation, aur GST vouchers (CGST/SGST/IGST breakdown) poori tarah se Indian Real Estate and RERA compliance ke standard format me tayyar kiye gaye hain.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-900 border border-teal-200 mb-3 shadow-xs">
            <HelpCircle className="h-3.5 w-3.5 text-teal-600" />
            <span>Aapke Sawal aur Hamare Jawab</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Real estate developers aur colonizers ke aam sawalon ke seedhe jawab:
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors hover:bg-slate-50"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#042026] text-white' : ''}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
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
