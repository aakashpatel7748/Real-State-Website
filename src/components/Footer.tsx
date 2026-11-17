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
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-teal-800/60 text-white font-bold">
                <div className="grid grid-cols-2 gap-1 w-5 h-5 p-0.5">
                  <div className="rounded-[2px] bg-emerald-400" />
                  <div className="rounded-[2px] bg-teal-300" />
                  <div className="rounded-[2px] bg-teal-200" />
                  <div className="rounded-[2px] bg-emerald-500" />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-bold tracking-tight text-white font-sans">
                  Plotline
                </span>
                <span className="rounded bg-teal-900/60 px-1.5 py-0.5 text-[10px] font-bold text-teal-300 border border-teal-700/50">
                  ERP
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              India&apos;s leading Real Estate Colony &amp; Plotted Development ERP software. 
              Double-booking rokna, automated milestone demand letters bhejna, aur Khasra-Khata zameen se lekar 
              registry tak ka har ek hisab maintain karna.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-400 font-semibold">
                <ShieldCheck className="h-4 w-4" />
                <span>100% RERA &amp; GST Ready</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-400 font-semibold">
                <CheckCircle2 className="h-4 w-4" />
                <span>Double-Entry Ledgers</span>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Serving Colonizers across MP, Rajasthan, Gujarat, NCR, Maharashtra</span>
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
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
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
                  Interactive Colony Naksha (Map)
                </Link>
              </li>
              <li>
                <Link href="/modules/post-sales" className="hover:text-white transition-colors">
                  Post-Sales &amp; Demand Letters
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
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Key Features
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/#screenshots" className="hover:text-white transition-colors">
                  Live Software Screenshots
                </Link>
              </li>
              <li>
                <Link href="/#interactive-map" className="hover:text-white transition-colors">
                  Color-Coded Plot Inventory
                </Link>
              </li>
              <li>
                <Link href="/#roi-calculator" className="hover:text-white transition-colors">
                  Cashflow ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/modules/accounting" className="hover:text-white transition-colors">
                  PDC Clearance Register
                </Link>
              </li>
              <li>
                <Link href="/modules/accounting" className="hover:text-white transition-colors">
                  GST Vouchers &amp; Reports
                </Link>
              </li>
              <li>
                <Link href="/modules/land-and-construction" className="hover:text-white transition-colors">
                  Farmer Payment Capital Ledgers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Demo */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Support &amp; Demo
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Book 1-on-1 Free Live Demo
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Transparent Pricing Plans
                </Link>
              </li>
              <li>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  Direct Helpline: +91 98765 43210
                </a>
              </li>
              <li>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-emerald-400">
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-800 pt-8 sm:flex-row text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Plotline Technologies Pvt Ltd. All rights reserved.</p>
          <div className="mt-3 flex items-center space-x-4 sm:mt-0">
            <span>Built for Indian Colonizers &amp; Developers</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">100% Server Rendered (Next.js)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
