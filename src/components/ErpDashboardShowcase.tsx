'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Users, 
  ReceiptIndianRupee, 
  FileCheck2, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  PhoneCall,
  Download,
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';

export function ErpDashboardShowcase() {
  const [activeTab, setActiveTab] = useState<'overview' | 'leads' | 'pdc' | 'demands'>('overview');

  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            Real ERP Interface Preview
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Everything your sales, accounts & site engineers need on one screen
          </p>
          <p className="mt-3 text-sm text-slate-400">
            Designed specifically around Indian builder workflows: from token reservation to bank loan disbursement and possession letters.
          </p>
        </div>

        {/* Dashboard Shell Mockup */}
        <div className="rounded-2xl border border-white/15 bg-slate-950/90 shadow-2xl shadow-indigo-950/50 backdrop-blur-2xl overflow-hidden">
          {/* Top ERP App Header Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-slate-900/80 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-xs">
                PV
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">
                    Green Valley Township Pvt Ltd
                  </span>
                  <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400 border border-emerald-500/20">
                    Live Company
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Active Project: <span className="text-slate-200">Royal Palm Enclave (Phase 1 & 2)</span>
                </div>
              </div>
            </div>

            {/* Sub-tab navigation */}
            <div className="flex items-center gap-1.5 mt-2 sm:mt-0">
              <button
                onClick={() => setActiveTab('overview')}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeTab === 'overview'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                KPI Dashboard
              </button>
              <button
                onClick={() => setActiveTab('leads')}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeTab === 'leads'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Inbound Leads (Webhooks)
              </button>
              <button
                onClick={() => setActiveTab('pdc')}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeTab === 'pdc'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                PDC Vault (24 Cheques)
              </button>
              <button
                onClick={() => setActiveTab('demands')}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeTab === 'demands'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Bulk Demand Letters
              </button>
            </div>
          </div>

          {/* Main ERP Canvas */}
          <div className="p-4 sm:p-6 lg:p-8 space-y-6">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Total Plotted Inventory</span>
                  <MapPin className="h-4 w-4 text-emerald-400" />
                </div>
                <div className="mt-2 text-2xl font-bold text-white">148 Units</div>
                <div className="mt-1 flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span>92 Booked</span> • <span>18 Reserved</span> • <span>38 Available</span>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Confirmed Sales Value</span>
                  <ReceiptIndianRupee className="h-4 w-4 text-indigo-400" />
                </div>
                <div className="mt-2 text-2xl font-bold text-white">₹ 28.45 Cr</div>
                <div className="mt-1 text-[11px] text-slate-400">
                  Collections Received: <span className="text-emerald-400 font-semibold">₹ 19.80 Cr</span>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Post-Dated Cheques (PDC)</span>
                  <Clock className="h-4 w-4 text-amber-400" />
                </div>
                <div className="mt-2 text-2xl font-bold text-amber-400">₹ 68.50 Lakh</div>
                <div className="mt-1 text-[11px] text-slate-400">
                  24 Cheques maturing in next 30 days
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Overdue Dues Aging</span>
                  <ShieldAlert className="h-4 w-4 text-rose-400" />
                </div>
                <div className="mt-2 text-2xl font-bold text-rose-400">₹ 34.20 Lakh</div>
                <div className="mt-1 text-[11px] text-slate-400">
                  12 Accounts with &gt;30 days delay
                </div>
              </div>
            </div>

            {/* Tabbed Content View */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Visual Colony Map Mini Preview */}
                <div className="lg:col-span-2 rounded-xl border border-white/10 bg-slate-900/40 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Colony SVG Layout Map — Sector A & B
                      </h4>
                      <p className="text-xs text-slate-400">
                        Live color-coded status. Double-booking locked in real time.
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="flex items-center gap-1">
                        <span className="h-2.5 w-2.5 rounded-sm bg-emerald-500" /> Available
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="h-2.5 w-2.5 rounded-sm bg-amber-500" /> Reserved
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="h-2.5 w-2.5 rounded-sm bg-rose-500" /> Booked
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="h-2.5 w-2.5 rounded-sm bg-slate-600" /> Registry Done
                      </span>
                    </div>
                  </div>

                  {/* SVG Map Grid Simulation */}
                  <div className="rounded-lg border border-white/10 bg-[#070a13] p-4">
                    <div className="grid grid-cols-6 sm:grid-cols-8 gap-2.5 text-center">
                      {[
                        { num: 'A-101', status: 'booked', size: '1500 sqft' },
                        { num: 'A-102', status: 'booked', size: '1500 sqft' },
                        { num: 'A-103', status: 'available', size: '1200 sqft' },
                        { num: 'A-104', status: 'reserved', size: '1800 sqft' },
                        { num: 'A-105', status: 'available', size: '1200 sqft' },
                        { num: 'A-106', status: 'registry', size: '2000 sqft' },
                        { num: 'A-107', status: 'booked', size: '1500 sqft' },
                        { num: 'A-108', status: 'available', size: '1200 sqft' },
                        { num: 'B-201', status: 'registry', size: '2400 sqft' },
                        { num: 'B-202', status: 'booked', size: '1800 sqft' },
                        { num: 'B-203', status: 'available', size: '1500 sqft' },
                        { num: 'B-204', status: 'booked', size: '1500 sqft' },
                        { num: 'B-205', status: 'reserved', size: '1200 sqft' },
                        { num: 'B-206', status: 'available', size: '1200 sqft' },
                        { num: 'B-207', status: 'booked', size: '1800 sqft' },
                        { num: 'B-208', status: 'available', size: '1500 sqft' },
                      ].map((plot) => (
                        <div
                          key={plot.num}
                          className={`cursor-pointer rounded-lg p-2.5 text-xs transition-all hover:scale-105 border ${
                            plot.status === 'available'
                              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                              : plot.status === 'reserved'
                              ? 'bg-amber-950/40 border-amber-500/40 text-amber-300'
                              : plot.status === 'booked'
                              ? 'bg-rose-950/40 border-rose-500/40 text-rose-300'
                              : 'bg-slate-800/60 border-slate-600 text-slate-400'
                          }`}
                        >
                          <div className="font-bold">{plot.num}</div>
                          <div className="text-[10px] opacity-80">{plot.size}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side Workflow Actions */}
                <div className="space-y-4">
                  <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                      Quick Builder Actions
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded-lg bg-white/5 p-2.5 text-xs">
                        <div className="flex items-center gap-2">
                          <FileCheck2 className="h-4 w-4 text-indigo-400" />
                          <span>Generate Milestone Demands (Plinth Level)</span>
                        </div>
                        <span className="rounded bg-indigo-500/20 px-2 py-0.5 text-[10px] text-indigo-300">
                          18 Pending
                        </span>
                      </div>

                      <div className="flex items-center justify-between rounded-lg bg-white/5 p-2.5 text-xs">
                        <div className="flex items-center gap-2">
                          <ReceiptIndianRupee className="h-4 w-4 text-emerald-400" />
                          <span>PDC Clearance (HDFC / SBI / ICICI)</span>
                        </div>
                        <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300">
                          6 Due Today
                        </span>
                      </div>

                      <div className="flex items-center justify-between rounded-lg bg-white/5 p-2.5 text-xs">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-amber-400" />
                          <span>Broker Payout Authorizations</span>
                        </div>
                        <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[10px] text-amber-300">
                          ₹ 3.8 L
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      RERA & Registry Milestone
                    </h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between text-slate-400">
                        <span>Phase 1 Colonizer License</span>
                        <span className="text-emerald-400 font-medium">Valid till 2028</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5">
                        <div className="bg-emerald-500 h-1.5 rounded-full w-[78%]" />
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-400">
                        <span>Sale Deeds Executed: 42</span>
                        <span>Pending Demands: ₹12.4 L</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'leads' && (
              <div className="rounded-xl border border-white/10 bg-slate-900/40 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Live Inbound Webhooks: 99acres, MagicBricks & Housing.com
                    </h4>
                    <p className="text-xs text-slate-400">
                      Auto-captured with SHA-256 de-duplication, assigned to sales staff, WhatsApp click-to-chat ready.
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b border-white/10 text-slate-400 uppercase">
                      <tr>
                        <th className="py-2.5 px-3">Lead Name</th>
                        <th className="py-2.5 px-3">Source Channel</th>
                        <th className="py-2.5 px-3">Interested In</th>
                        <th className="py-2.5 px-3">Stage</th>
                        <th className="py-2.5 px-3">Assigned Executive</th>
                        <th className="py-2.5 px-3">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-200">
                      <tr>
                        <td className="py-3 px-3 font-medium">Vikramaditya Sharma</td>
                        <td className="py-3 px-3">
                          <span className="rounded bg-rose-500/10 px-2 py-0.5 text-rose-400 border border-rose-500/20">
                            99acres Webhook
                          </span>
                        </td>
                        <td className="py-3 px-3">1500 sq.ft Plot (Corner)</td>
                        <td className="py-3 px-3">
                          <span className="text-amber-400 font-medium">Site Visit Scheduled</span>
                        </td>
                        <td className="py-3 px-3">Amit Verma</td>
                        <td className="py-3 px-3">
                          <button className="rounded bg-emerald-600/20 px-2 py-1 text-emerald-300 hover:bg-emerald-600/30">
                            WhatsApp Chat
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-medium">Rajesh & Suman Gupta</td>
                        <td className="py-3 px-3">
                          <span className="rounded bg-indigo-500/10 px-2 py-0.5 text-indigo-400 border border-indigo-500/20">
                            MagicBricks Sync
                          </span>
                        </td>
                        <td className="py-3 px-3">3 BHK Villa</td>
                        <td className="py-3 px-3">
                          <span className="text-indigo-400 font-medium">Quotation Sent</span>
                        </td>
                        <td className="py-3 px-3">Pooja Nair</td>
                        <td className="py-3 px-3">
                          <button className="rounded bg-emerald-600/20 px-2 py-1 text-emerald-300 hover:bg-emerald-600/30">
                            WhatsApp Chat
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'pdc' && (
              <div className="rounded-xl border border-white/10 bg-slate-900/40 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Post-Dated Cheques (PDC) Register & Clearance Engine
                    </h4>
                    <p className="text-xs text-slate-400">
                      Cheques are logged into the vault. Receipts and ledger credits are generated exactly once on clearance.
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b border-white/10 text-slate-400 uppercase">
                      <tr>
                        <th className="py-2.5 px-3">Cheque No</th>
                        <th className="py-2.5 px-3">Customer / Booking</th>
                        <th className="py-2.5 px-3">Bank</th>
                        <th className="py-2.5 px-3">Amount</th>
                        <th className="py-2.5 px-3">Maturity Date</th>
                        <th className="py-2.5 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-200">
                      <tr>
                        <td className="py-3 px-3 font-mono font-bold">#492108</td>
                        <td className="py-3 px-3">Anil Mehta (Plot A-101)</td>
                        <td className="py-3 px-3">HDFC Bank</td>
                        <td className="py-3 px-3 font-semibold text-white">₹ 4,50,000</td>
                        <td className="py-3 px-3">22 Nov 2026</td>
                        <td className="py-3 px-3">
                          <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-emerald-400 border border-emerald-500/20">
                            Ready to Deposit
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-mono font-bold">#003841</td>
                        <td className="py-3 px-3">Sunita Builders & Promoters</td>
                        <td className="py-3 px-3">State Bank of India</td>
                        <td className="py-3 px-3 font-semibold text-white">₹ 8,20,000</td>
                        <td className="py-3 px-3">28 Nov 2026</td>
                        <td className="py-3 px-3">
                          <span className="rounded bg-indigo-500/10 px-2 py-0.5 text-indigo-400 border border-indigo-500/20">
                            In Vault
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'demands' && (
              <div className="rounded-xl border border-white/10 bg-slate-900/40 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Milestone & Installment Demand Letters (Single or Whole Project)
                    </h4>
                    <p className="text-xs text-slate-400">
                      One-click PDF generation with outstanding breakdown, bank RTGS details, and automated email/SMS dispatch.
                    </p>
                  </div>
                  <button className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow hover:bg-indigo-500">
                    <Download className="h-3.5 w-3.5" />
                    <span>Run Bulk Project Demand</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="rounded-lg bg-white/5 p-3 border border-white/5">
                    <div className="text-slate-400">Milestone</div>
                    <div className="font-semibold text-white mt-1">Plinth Casting Complete</div>
                    <div className="text-emerald-400 text-[11px] mt-1">34 Letters Ready (₹1.12 Cr)</div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-3 border border-white/5">
                    <div className="text-slate-400">Overdue Demands</div>
                    <div className="font-semibold text-white mt-1">&gt; 15 Days Unpaid</div>
                    <div className="text-rose-400 text-[11px] mt-1">8 Accounts Flagged</div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-3 border border-white/5">
                    <div className="text-slate-400">Possession Demand</div>
                    <div className="font-semibold text-white mt-1">Final Registry Clearance</div>
                    <div className="text-indigo-400 text-[11px] mt-1">6 Units Ready for Handover</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
