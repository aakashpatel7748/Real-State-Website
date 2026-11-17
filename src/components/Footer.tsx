import React from 'react';
import Link from 'next/link';
import { Building2, ShieldCheck, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060911] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 p-0.5 shadow-lg shadow-indigo-500/20">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#090d16]">
                  <Building2 className="h-5 w-5 text-indigo-400" />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  Plotline
                </span>
                <span className="rounded-md bg-indigo-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-indigo-400 border border-indigo-500/20">
                  ERP
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              India&apos;s first purpose-built Real Estate Colony & Plotted Development Management ERP. 
              Eliminating double-bookings, automating milestone demand letters, and tracking every rupee 
              from land acquisition (Khasra/Khata) to final registry.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-400">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>RERA & GST Ready</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-xs text-indigo-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Double-Entry Ledgers</span>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-indigo-400" />
                <span>Serving Colonizers & Developers across India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-indigo-400" />
                <span>+91 98765 43210 / +91 755 4900000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-indigo-400" />
                <span>sales@plotline-erp.com</span>
              </div>
            </div>
          </div>

          {/* Column 1: Core Modules */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              ERP Modules
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link href="/modules/pre-sales" className="hover:text-white transition-colors">
                  Pre-Sales & Lead CRM
                </Link>
              </li>
              <li>
                <Link href="/modules/inventory-and-map" className="hover:text-white transition-colors">
                  Colony SVG Layout Map
                </Link>
              </li>
              <li>
                <Link href="/modules/post-sales" className="hover:text-white transition-colors">
                  Post-Sales & Demand Letters
                </Link>
              </li>
              <li>
                <Link href="/modules/accounting" className="hover:text-white transition-colors">
                  Accounts & PDC Register
                </Link>
              </li>
              <li>
                <Link href="/modules/land-and-construction" className="hover:text-white transition-colors">
                  Land Acquisition & Site Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Key ERP Capabilities */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Key Capabilities
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link href="/modules/inventory-and-map" className="hover:text-white transition-colors">
                  Dynamic Price Index Repricing
                </Link>
              </li>
              <li>
                <Link href="/modules/pre-sales" className="hover:text-white transition-colors">
                  99acres & MagicBricks Webhooks
                </Link>
              </li>
              <li>
                <Link href="/modules/post-sales" className="hover:text-white transition-colors">
                  Bulk Milestone Demand Letters
                </Link>
              </li>
              <li>
                <Link href="/modules/accounting" className="hover:text-white transition-colors">
                  PDC Clearance & Receipting
                </Link>
              </li>
              <li>
                <Link href="/modules/accounting" className="hover:text-white transition-colors">
                  GST Vouchers & Reports
                </Link>
              </li>
              <li>
                <Link href="/modules/land-and-construction" className="hover:text-white transition-colors">
                  Khasra/Khata Land Ledgers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Demo */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get Started
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Schedule Live ERP Demo
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing Plans for Builders
                </Link>
              </li>
              <li>
                <Link href="/#roi-calculator" className="hover:text-white transition-colors">
                  Cashflow ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Customer Support Desk
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Security & Multi-Tenant Data Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Plotline ERP Technologies. All rights reserved.</p>
          <div className="mt-4 flex items-center space-x-6 sm:mt-0">
            <span>Built for Plotted Colonizers & High-Rise Developers</span>
            <span>•</span>
            <span className="text-emerald-400">100% Server Rendered (Next.js)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
