import React from 'react';
import { Check, X, Building2 } from 'lucide-react';

const COMPARISON_ROWS = [
  {
    feature: 'Vector Colony Layout Map with Live Status',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Real-time color-coded map: Green (Available), Yellow (Reserved), Red (Booked) with smooth zoom and pan.',
  },
  {
    feature: '0% Double-Booking Atomic Lock',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Database-level lock prevents two sales executives from placing token reservations on the same unit.',
  },
  {
    feature: 'Bulk Milestone Demand Letters (PDF)',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'One-click automated generation and dispatch of official demand notices upon construction certification.',
  },
  {
    feature: 'Post-Dated Cheques (PDC) Vault & Realization',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Secure cheque tracking with maturity alerts; official receipts and ledger credits trigger only upon bank clearance.',
  },
  {
    feature: '99acres, MagicBricks & Meta Lead Webhooks',
    excel: false,
    genericCrm: true,
    plotline: true,
    detail: 'Direct real-time webhook sync with SHA-256 deduplication and 1-click WhatsApp customer messaging.',
  },
  {
    feature: 'Khasra / Khata Land Acquisition Ledgers',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Agricultural land purchases, farmer payment milestones, bayana agreements, and registry ledger tracking.',
  },
  {
    feature: 'Double-Entry Accounting & GST Vouchers',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Tally-grade Trial Balance, P&L, Balance Sheet, and automated CGST/SGST/IGST tax calculation.',
  },
  {
    feature: 'Dynamic Rate & Price Indexing',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Adjust prices on unsold inventory as colony development progresses without altering prior buyer agreements.',
  },
];

export function ComparisonTable() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0d9488]">
            Why Generic Software Fails Indian Colonizers
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight">
            Spreadsheets vs Generic CRMs vs <br />
            <span className="text-[#0d9488]">Plotline Real Estate ERP</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Generic CRMs do not comprehend Khasra land ledgers, PDC cheque clearances, or interactive colony layout maps:
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/5 overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                <th className="py-4 px-5 font-bold w-2/5">Capability / Feature</th>
                <th className="py-4 px-4 text-center font-bold text-slate-500 w-1/5">
                  Excel / Google Sheets
                </th>
                <th className="py-4 px-4 text-center font-bold text-slate-500 w-1/5">
                  Generic CRMs (HubSpot etc)
                </th>
                <th className="py-4 px-4 text-center font-bold text-teal-950 bg-teal-50/80 border-x border-teal-200 w-1/5">
                  <div className="flex items-center justify-center gap-1.5 text-teal-800 font-bold">
                    <Building2 className="h-4 w-4" />
                    <span>Plotline ERP</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/70 transition-colors"
                >
                  <td className="py-4 px-5">
                    <div className="font-bold text-slate-900">{row.feature}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{row.detail}</div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.excel ? (
                      <Check className="h-5 w-5 text-emerald-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-slate-300 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.genericCrm ? (
                      <Check className="h-5 w-5 text-emerald-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-slate-300 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center bg-teal-50/30 border-x border-teal-100">
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
