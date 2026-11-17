import React from 'react';
import { Check, X, Building2 } from 'lucide-react';

const COMPARISON_ROWS = [
  {
    feature: 'Colony SVG Layout Map with Live Status',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Real-time color-coded plot availability with built-in layout editor & AutoCAD SVG overlay.',
  },
  {
    feature: 'Zero Double-Booking Guarantee',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Database transaction lock prevents two sales reps from reserving the same plot concurrently.',
  },
  {
    feature: 'Milestone-Linked Demand Letters (Bulk PDF)',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Generate project-wide demand letters when a construction stage is completed (Plinth, Slab, Possession).',
  },
  {
    feature: 'Post-Dated Cheques (PDC) Vault & Clearance',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Cheques logged in vault. Receipts and ledger credits issued exactly once upon bank clearance.',
  },
  {
    feature: '99acres, MagicBricks & Housing Webhooks',
    excel: false,
    genericCrm: true,
    plotline: true,
    detail: 'Instant auto-capture with SHA-256 de-duplication and WhatsApp click-to-chat links.',
  },
  {
    feature: 'Khasra / Khata Land Acquisition Ledgers',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Track agricultural land parcels, owner negotiation, agreements, registry and capital development costs.',
  },
  {
    feature: 'Double-Entry Accounting & GST Vouchers',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Complete journal vouchers, trial balance, P&L, balance sheet and CGST/SGST/IGST tax calculation.',
  },
  {
    feature: 'Dynamic Rate & Price Indexes',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Reprice unsold inventory as colony development advances without changing existing signed agreements.',
  },
];

export function ComparisonTable() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            Why Generic Tools Fail Builders
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Spreadsheets vs Generic CRMs vs <br />
            <span className="text-gradient-primary">Plotline Real Estate ERP</span>
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Generic software doesn&apos;t understand Indian land laws, Khasra numbers, PLC charges, or post-dated cheques. See the difference:
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-4 sm:p-8 backdrop-blur-xl overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-300">
                <th className="py-4 px-4 font-semibold w-2/5">Capability / Workflow</th>
                <th className="py-4 px-4 text-center font-medium text-slate-400 w-1/5">
                  Excel / Google Sheets
                </th>
                <th className="py-4 px-4 text-center font-medium text-slate-400 w-1/5">
                  Generic CRMs
                </th>
                <th className="py-4 px-4 text-center font-bold text-white bg-indigo-600/20 rounded-t-xl border-t border-x border-indigo-500/30 w-1/5">
                  <div className="flex items-center justify-center gap-1.5 text-indigo-400 font-bold">
                    <Building2 className="h-4 w-4" />
                    <span>Plotline ERP</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-semibold text-white">{row.feature}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{row.detail}</div>
                  </td>

                  {/* Excel */}
                  <td className="py-4 px-4 text-center">
                    {row.excel ? (
                      <Check className="h-5 w-5 text-emerald-400 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-slate-400 mx-auto" />
                    )}
                  </td>

                  {/* Generic CRM */}
                  <td className="py-4 px-4 text-center">
                    {row.genericCrm ? (
                      <Check className="h-5 w-5 text-emerald-400 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-slate-400 mx-auto" />
                    )}
                  </td>

                  {/* Plotline ERP */}
                  <td className="py-4 px-4 text-center bg-indigo-600/10 border-x border-indigo-500/20">
                    <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
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
