import React from 'react';
import Link from 'next/link';
import { Building2, ShieldCheck, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#042026] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <svg viewBox="0 0 32 32" className="h-9 w-9 shrink-0 shadow-sm" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="#0f766e" />
                <path d="M7 9h8v6H7zM17 9h8v6h-8zM7 17h8v6H7z" fill="#ecfdf5" />
                <path d="M17 17h8v6h-8z" fill="#f59e0b" />
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-semibold tracking-tight text-white font-sans">
                  Plotline
                </span>
                <span className="rounded bg-teal-900/60 px-1.5 py-0.5 text-[10px] font-bold text-teal-300 border border-teal-700/50">
                  ERP
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              India&apos;s leading Colony &amp; Plotted Real Estate ERP system. 
              Eliminate double bookings, automate milestone installment demand notices, and track 
              land parcels from Khasra purchase to registry handover.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-400 font-semibold">
                <ShieldCheck className="h-4 w-4" />
                <span>100% RERA &amp; GST Ready</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-teal-300 font-semibold">
                <CheckCircle2 className="h-4 w-4" />
                <span>Double-Entry Ledgers</span>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Serving Developers across MP, UP, Rajasthan, Gujarat, NCR &amp; Maharashtra</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>+91 98765 43210 / +91 755 4900000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>sales@plotline-erp.com</span>
              </div>
            </div>
          </div>

          {/* Column 1: Core Modules */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Software Modules
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/modules/pre-sales" className="hover:text-white transition-colors">
                  Pre-Sales &amp; Lead CRM
                </Link>
              </li>
              <li>
                <Link href="/modules/inventory-and-map" className="hover:text-white transition-colors">
                  Interactive Layout Map
                </Link>
              </li>
              <li>
                <Link href="/modules/post-sales" className="hover:text-white transition-colors">
                  Post-Sales &amp; Demand Notices
                </Link>
              </li>
              <li>
                <Link href="/modules/accounting" className="hover:text-white transition-colors">
                  Accounts &amp; PDC Cheque Vault
                </Link>
              </li>
              <li>
                <Link href="/modules/land-and-construction" className="hover:text-white transition-colors">
                  Khasra Land &amp; Site Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Key Capabilities */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Platform Features
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/#screenshots" className="hover:text-white transition-colors">
                  Software Screenshots
                </Link>
              </li>
              <li>
                <Link href="/#interactive-map" className="hover:text-white transition-colors">
                  Interactive Vector Map
                </Link>
              </li>
              <li>
                <Link href="/#roi-calculator" className="hover:text-white transition-colors">
                  Cashflow ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  About Plotline
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Plans &amp; Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company &amp; Legal
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Schedule Live Demo
                </Link>
              </li>
              <li>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  Customer Support
                </a>
              </li>
              <li>
                <span className="text-slate-500">RERA Escrow Compliant</span>
              </li>
              <li>
                <span className="text-slate-500">256-bit SSL Cloud Hosted</span>
              </li>
              <li>
                <span className="text-slate-500">Made for Indian Colonizers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-12 border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Plotline Technologies Pvt Ltd. All rights reserved.
          </div>
          <div className="mt-2 sm:mt-0 flex items-center gap-4">
            <span>Enterprise Colony Management Cloud</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
