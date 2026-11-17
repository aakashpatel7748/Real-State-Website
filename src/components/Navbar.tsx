'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Building2,
  Menu,
  X,
  ChevronDown,
  MapPin,
  FileText,
  ReceiptIndianRupee,
  HardHat,
  Sparkles,
  Phone,
  ArrowRight,
  ShieldCheck,
  LayoutGrid,
  Calendar
} from 'lucide-react';

const MODULES = [
  {
    name: 'Pre-Sales & Lead Pipeline',
    href: '/modules/pre-sales',
    description: 'Portal webhooks (99acres/MagicBricks), WhatsApp click-to-chat & Quotations.',
    icon: Sparkles,
  },
  {
    name: 'Colony SVG Layout Map',
    href: '/modules/inventory-and-map',
    description: 'Interactive SVG plot map, live unit status (Available/Booked), towers & price indexes.',
    icon: MapPin,
  },
  {
    name: 'Post-Sales & Demand Letters',
    href: '/modules/post-sales',
    description: 'Automated milestone demand letters (PDF), BBA, allotment, possession & dues aging.',
    icon: FileText,
  },
  {
    name: 'Accounts & PDC Cheque Vault',
    href: '/modules/accounting',
    description: 'Post-dated cheque clearance, double-entry vouchers, GST tax reports.',
    icon: ReceiptIndianRupee,
  },
  {
    name: 'Land (Khasra) & Site Works',
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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
      {/* Top Advisory Bar */}
      <div className="hidden sm:block border-b border-slate-100 bg-[#042026] text-white px-4 py-1.5 text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-slate-100">India&apos;s Complete Real Estate ERP</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Plotted Colonies, High-Rise Towers &amp; Townships</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 font-semibold text-emerald-300 hover:text-emerald-200 transition-colors">
              <Phone className="h-3 w-3" />
              <span>Helpline: +91 98765 43210</span>
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-emerald-400 font-medium">100% RERA &amp; GST Ready</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo - 1:1 Match with Real ERP */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#042026] text-white shadow-md shadow-teal-950/20 group-hover:bg-[#073640] transition-colors">
            {/* Plotline 4-Square Grid Icon */}
            <div className="grid grid-cols-2 gap-1 w-5 h-5 p-0.5">
              <div className="rounded-[2px] bg-emerald-400" />
              <div className="rounded-[2px] bg-teal-300" />
              <div className="rounded-[2px] bg-teal-200" />
              <div className="rounded-[2px] bg-emerald-500" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-slate-900 font-sans">
                Plotline
              </span>
              <span className="rounded bg-teal-50 px-1.5 py-0.5 text-[10px] font-bold text-teal-800 border border-teal-200">
                ERP
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium">
              Colony &amp; Township Management
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${pathname === '/'
                ? 'text-teal-900 bg-teal-50/80 font-bold'
                : 'text-slate-700 hover:text-teal-800 hover:bg-slate-50'
              }`}
          >
            Home
          </Link>

          {/* Modules Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setModulesDropdownOpen(true)}
            onMouseLeave={() => setModulesDropdownOpen(false)}
          >
            <button
              onClick={() => setModulesDropdownOpen(!modulesDropdownOpen)}
              className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-teal-800 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <span>Software Modules</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${modulesDropdownOpen ? 'rotate-180 text-teal-600' : 'text-slate-400'}`} />
            </button>

            {modulesDropdownOpen && (
              <div className="absolute left-0 top-full pt-2 w-[420px] transition-all duration-200">
                <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
                  <div className="mb-2 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    5 Built-In Colonizer Modules
                  </div>
                  <div className="space-y-1">
                    {MODULES.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setModulesDropdownOpen(false)}
                          className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-teal-50/60 group"
                        >
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700 group-hover:bg-[#0d9488] group-hover:text-white transition-colors">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-500 line-clamp-1">
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
            href="/#screenshots"
            className="rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-teal-800 hover:bg-slate-50 transition-colors"
          >
            Software Screenshots
          </Link>

          <Link
            href="/modules/inventory-and-map"
            className="rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-teal-800 hover:bg-slate-50 transition-colors"
          >
            Colony Naksha (Map)
          </Link>

          <Link
            href="/pricing"
            className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${pathname === '/pricing'
                ? 'text-teal-900 bg-teal-50/80 font-bold'
                : 'text-slate-700 hover:text-teal-800 hover:bg-slate-50'
              }`}
          >
            Pricing
          </Link>

          <Link
            href="/contact"
            className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${pathname === '/contact'
                ? 'text-teal-900 bg-teal-50/80 font-bold'
                : 'text-slate-700 hover:text-teal-800 hover:bg-slate-50'
              }`}
          >
            Contact &amp; Support
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-xl bg-[#042026] hover:bg-[#083c47] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-teal-950/20 transition-all hover:translate-y-[-1px]"
          >
            <Calendar className="h-3.5 w-3.5 text-emerald-400" />
            <span>Book Live Demo</span>
            <ArrowRight className="h-3.5 w-3.5 text-slate-300" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 pb-6 pt-3 lg:hidden">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-bold text-slate-800 hover:bg-slate-50"
            >
              Home Overview
            </Link>

            <div className="pt-2 pb-1 border-t border-slate-100">
              <span className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Modules
              </span>
              <div className="mt-2 space-y-1">
                {MODULES.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-teal-50 hover:text-teal-800"
                  >
                    <item.icon className="h-4 w-4 text-teal-600" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/#screenshots"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Software Screenshots
            </Link>

            <Link
              href="/modules/inventory-and-map"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Colony Naksha Layout Map
            </Link>

            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Pricing &amp; Plans
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Contact &amp; Support
            </Link>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#042026] py-3 text-sm font-bold text-white shadow-md text-center"
              >
                <Calendar className="h-4 w-4 text-emerald-400" />
                <span>Book 1-on-1 Free Demo</span>
              </Link>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-3 text-sm font-bold text-slate-800 text-center"
              >
                <Phone className="h-4 w-4 text-teal-600" />
                <span>Call +91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
