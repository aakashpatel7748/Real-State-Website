import React from 'react';
import { Check, X, Building2 } from 'lucide-react';

const COMPARISON_ROWS = [
  {
    feature: 'Colony SVG Layout Map with Live Status',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Hara (Available), Peela (Reserved), Laal (Booked) color-coded interactive naksha with zoom/pan.',
  },
  {
    feature: 'Zero Double-Booking Guarantee',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Database lock se ek plot ko ek sath do sales executive reserve nahi kar sakte.',
  },
  {
    feature: 'Milestone Demand Letters (Bulk PDF)',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Plinth, Road, ya Slab complete hote hi project ke sabhi buyers ko automated demand notice.',
  },
  {
    feature: 'Post-Dated Cheques (PDC) Vault & Clearance',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Advance cheques vault me safe rehte hain; bank se pass hone par hi official receipt banti hai.',
  },
  {
    feature: '99acres, MagicBricks & Housing Webhooks',
    excel: false,
    genericCrm: true,
    plotline: true,
    detail: 'Direct portal leads integration with SHA-256 de-duplication aur 1-click WhatsApp message.',
  },
  {
    feature: 'Khasra / Khata Land Acquisition Ledgers',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Agricultural zameen purchase, kisan payments, bayana agreement, aur registry ledger tracking.',
  },
  {
    feature: 'Double-Entry Accounts & GST Vouchers',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Complete Trial Balance, P&L, Balance Sheet, aur CGST/SGST/IGST tax calculation.',
  },
  {
    feature: 'Dynamic Rate & Price Indexes',
    excel: false,
    genericCrm: false,
    plotline: true,
    detail: 'Development ke sath bache hue unsold plots ka rate badhana bina purani bookings ko badle.',
  },
];

export function ComparisonTable() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Kyu Generic Software Colonizers ke Liye Fail Ho Jaate Hain
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Excel Sheets vs Generic CRMs vs <br />
            <span className="text-blue-600">Plotline Real Estate ERP</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Generic CRM na toh Khasra-Khata samajhte hain, na hi PDC cheque clearance aur colony naksha:
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-x-auto">
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
                <th className="py-4 px-4 text-center font-black text-blue-800 bg-blue-50/70 border-x border-blue-200 w-1/5">
                  <div className="flex items-center justify-center gap-1.5 text-blue-700 font-black">
                    <Building2 className="h-4 w-4" />
                    <span>Plotline ERP</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-5">
                    <div className="font-bold text-slate-900">{row.feature}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{row.detail}</div>
                  </td>

                  {/* Excel */}
                  <td className="py-4 px-4 text-center">
                    {row.excel ? (
                      <Check className="h-5 w-5 text-emerald-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-rose-400 mx-auto" />
                    )}
                  </td>

                  {/* Generic CRM */}
                  <td className="py-4 px-4 text-center">
                    {row.genericCrm ? (
                      <Check className="h-5 w-5 text-emerald-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-rose-400 mx-auto" />
                    )}
                  </td>

                  {/* Plotline ERP */}
                  <td className="py-4 px-4 text-center bg-blue-50/40 border-x border-blue-200">
                    <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold">
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
