'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Building2, 
  Menu, 
  X, 
  ChevronDown, 
  Layers, 
  MapPin, 
  FileText, 
  ReceiptIndianRupee, 
  HardHat, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const MODULES = [
  {
    name: 'Pre-Sales & Lead Pipeline',
    href: '/modules/pre-sales',
    description: 'Portal webhooks (99acres/MagicBricks), WhatsApp click-to-chat & Quotations.',
    icon: Sparkles,
  },
  {
    name: 'Inventory & Colony Layout Map',
    href: '/modules/inventory-and-map',
    description: 'Interactive SVG plot map, live unit statuses, towers & price index repricing.',
    icon: MapPin,
  },
  {
    name: 'Post-Sales & Demand Letters',
    href: '/modules/post-sales',
    description: 'Automated milestone demand letters, BBA, allotment, possession & dues aging.',
    icon: FileText,
  },
  {
    name: 'Accounts & PDC Register',
    href: '/modules/accounting',
    description: 'Post-dated cheque clearance, double-entry vouchers, GST tax reports.',
    icon: ReceiptIndianRupee,
  },
  {
    name: 'Land & Site Construction',
    href: '/modules/land-and-construction',
    description: 'Khasra/Khata land parcels, vendor work orders, milestone bills & site costs.',
    icon: HardHat,
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modulesDropdownOpen, setModulesDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#070a13]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-emerald-500 p-0.5 shadow-lg shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#090d16]">
              <Building2 className="h-5 w-5 text-indigo-400 group-hover:text-emerald-400 transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                Plotline
              </span>
              <span className="rounded-md bg-indigo-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-indigo-400 border border-indigo-500/20">
                ERP
              </span>
            </div>
            <span className="text-[11px] text-slate-400 tracking-wide">
              Colony & High-Rise System
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
              pathname === '/'
                ? 'text-white bg-white/[0.06]'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            Overview
          </Link>

          {/* Modules Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setModulesDropdownOpen(true)}
            onMouseLeave={() => setModulesDropdownOpen(false)}
          >
            <button
              onClick={() => setModulesDropdownOpen(!modulesDropdownOpen)}
              className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              <span>ERP Modules</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${modulesDropdownOpen ? 'rotate-180 text-indigo-400' : 'text-slate-400'}`} />
            </button>

            {modulesDropdownOpen && (
              <div className="absolute left-0 top-full pt-2 w-[420px] transition-all duration-200">
                <div className="rounded-2xl border border-white/10 bg-[#0f172a] p-3 shadow-2xl backdrop-blur-2xl">
                  <div className="mb-2 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    5 Built-In Core Modules
                  </div>
                  <div className="space-y-1">
                    {MODULES.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setModulesDropdownOpen(false)}
                          className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/[0.06] group"
                        >
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-400 line-clamp-1">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/#interactive-map"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] transition-colors"
          >
            Interactive Map
          </Link>

          <Link
            href="/#roi-calculator"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] transition-colors"
          >
            ROI Calculator
          </Link>

          <Link
            href="/pricing"
            className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
              pathname === '/pricing'
                ? 'text-white bg-white/[0.06]'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            Pricing
          </Link>

          <Link
            href="/contact"
            className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
              pathname === '/contact'
                ? 'text-white bg-white/[0.06]'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-slate-200 hover:bg-white/[0.08] hover:text-white transition-all"
          >
            Sign In / Demo Access
          </Link>

          <Link
            href="/contact"
            className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-emerald-500 p-px font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all"
          >
            <div className="flex items-center gap-2 rounded-[11px] bg-[#090d16] px-4 py-2.5 text-xs text-white transition-colors group-hover:bg-transparent">
              <span>Schedule Live Demo</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden rounded-lg p-2 text-slate-400 hover:bg-white/[0.05] hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#0c1222] px-4 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              Overview
            </Link>

            <div className="pt-2 pb-1 border-t border-white/10">
              <span className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Core Modules
              </span>
              <div className="mt-2 space-y-1">
                {MODULES.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-300 hover:bg-white/5 hover:text-white"
                  >
                    <item.icon className="h-4 w-4 text-indigo-400" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/#interactive-map"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              Interactive Colony Map
            </Link>

            <Link
              href="/#roi-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              ROI Calculator
            </Link>

            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              Pricing Plans
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              Contact & Inquiry
            </Link>

            <div className="pt-4 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-xl bg-gradient-to-r from-indigo-500 to-emerald-500 py-2.5 text-xs font-semibold text-white shadow-md"
              >
                Schedule Live Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
