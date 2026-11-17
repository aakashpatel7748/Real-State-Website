'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/Logo';
import { 
  Menu, 
  X, 
  Calendar,
  ChevronDown,
  Sparkles,
  MapPin,
  FileText,
  ReceiptIndianRupee,
  HardHat,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const MODULES_MENU = [
  {
    name: 'Pre-Sales & Lead CRM',
    tag: 'Webhooks & WhatsApp',
    href: '/modules/pre-sales',
    description: 'Instant 99acres/MagicBricks webhook sync, 1-click WhatsApp chat & Quotation PDFs.',
    icon: Sparkles,
    color: 'text-amber-600 bg-amber-50',
  },
  {
    name: 'Interactive Layout Map (SVG)',
    tag: 'Live Inventory & Locks',
    href: '/modules/inventory-and-map',
    description: 'Interactive plot layout map, real-time Available/Booked colors & 0% double-booking lock.',
    icon: MapPin,
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    name: 'Post-Sales & Demand Letters',
    tag: 'Milestone Recovery',
    href: '/modules/post-sales',
    description: 'Automated milestone demand letters (PDF), BBA agreement, allotment & dues aging.',
    icon: FileText,
    color: 'text-teal-600 bg-teal-50',
  },
  {
    name: 'Accounts & PDC Vault',
    tag: 'Cheque Clearance',
    href: '/modules/accounting',
    description: 'Post-dated cheques vault, bank clearance realization, double-entry vouchers & GST.',
    icon: ReceiptIndianRupee,
    color: 'text-blue-600 bg-blue-50',
  },
  {
    name: 'Land (Khasra) & Site Works',
    tag: 'Land & Construction',
    href: '/modules/land-and-construction',
    description: 'Khasra-Khata farmer agreements, contractor work orders, RA bills & land cost/sq.ft.',
    icon: HardHat,
    color: 'text-purple-600 bg-purple-50',
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false); // Collapsed by default on mobile!
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo - 1:1 Match with Real ERP */}
        <Link href="/" className="group flex items-center">
          <Logo />
        </Link>

        {/* Center: Exactly 3 Items (Home, Features with hover menu, About) */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3">
          
          {/* 1. Home */}
          <Link
            href="/"
            className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
              pathname === '/' && !featuresDropdownOpen
                ? 'text-teal-900 bg-teal-50 font-semibold'
                : 'text-slate-700 hover:text-teal-900 hover:bg-slate-50'
            }`}
          >
            Home
          </Link>

          {/* 2. Features (Hover Mega Dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => setFeaturesDropdownOpen(true)}
            onMouseLeave={() => setFeaturesDropdownOpen(false)}
          >
            <button
              onClick={() => setFeaturesDropdownOpen(!featuresDropdownOpen)}
              className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors cursor-pointer ${
                featuresDropdownOpen
                  ? 'text-teal-900 bg-teal-50 font-semibold'
                  : 'text-slate-700 hover:text-teal-900 hover:bg-slate-50'
              }`}
            >
              <span>Features</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  featuresDropdownOpen ? 'rotate-180 text-teal-700' : 'text-slate-400'
                }`}
              />
            </button>

            {/* Hover Floating Mega Menu Card */}
            {featuresDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 w-[580px] z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/15">
                  
                  {/* Dropdown Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3 px-2">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-800">
                        Core ERP Modules
                      </span>
                      <p className="text-xs text-slate-500 font-normal">
                        Designed exclusively for Indian Plotted Colonies &amp; Townships
                      </p>
                    </div>
                    <Link
                      href="/#modules"
                      onClick={() => setFeaturesDropdownOpen(false)}
                      className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center gap-1"
                    >
                      <span>View All</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>

                  {/* Modules Grid */}
                  <div className="space-y-1.5">
                    {MODULES_MENU.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setFeaturesDropdownOpen(false)}
                          className="flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-teal-50/60 hover:translate-x-0.5 group"
                        >
                          <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.color} group-hover:scale-105 transition-transform`}>
                            <Icon className="h-4.5 w-4.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-slate-800 group-hover:text-teal-900 transition-colors">
                                {item.name}
                              </span>
                              <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 group-hover:bg-teal-100 group-hover:text-teal-800 px-1.5 py-0.5 rounded">
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-normal">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Dropdown Footer Quick Link */}
                  <div className="mt-3 pt-3 border-t border-slate-100 bg-slate-50/80 -mx-4 -mb-4 p-3 rounded-b-2xl flex items-center justify-between text-xs text-slate-600 px-5">
                    <span className="flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      <span>Zero Double-Booking &bull; 100% RERA &amp; GST Ready</span>
                    </span>
                    <Link
                      href="/#screenshots"
                      onClick={() => setFeaturesDropdownOpen(false)}
                      className="font-bold text-teal-800 hover:underline flex items-center gap-1"
                    >
                      <span>Screenshots</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* 3. About */}
          <Link
            href="/#about"
            className="rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-teal-900 hover:bg-slate-50 transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Right: Exactly 1 Clean Primary Action Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="btn-shimmer inline-flex items-center gap-2 rounded-xl bg-[#042026] hover:bg-[#073640] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:scale-[1.02] active:scale-95"
          >
            <Calendar className="h-4 w-4 text-emerald-400" />
            <span>Book Free Demo</span>
            <ArrowRight className="h-3.5 w-3.5 text-slate-300" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu (Features Collapsed by Default!) */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 pb-6 pt-3 md:hidden">
          <div className="flex flex-col space-y-1.5">
            {/* 1. Home Link */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-900"
            >
              Home
            </Link>

            {/* 2. Features Accordion - CLOSED BY DEFAULT */}
            <div className="rounded-lg overflow-hidden border border-slate-100">
              <button
                onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-900 transition-colors text-left"
              >
                <span>Features</span>
                <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${mobileFeaturesOpen ? 'rotate-180 text-teal-700' : ''}`} />
              </button>

              {/* Collapsed content - only opens when user taps Features */}
              {mobileFeaturesOpen && (
                <div className="bg-slate-50/80 px-2 py-2 space-y-1 border-t border-slate-100">
                  {MODULES_MENU.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-semibold text-slate-700 hover:bg-teal-50 hover:text-teal-900"
                    >
                      <item.icon className="h-4 w-4 text-teal-600 shrink-0" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 3. About Link */}
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-900"
            >
              About Plotline
            </Link>

            {/* 4. Action Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#042026] py-3 text-sm font-semibold text-white shadow-md text-center"
              >
                <Calendar className="h-4 w-4 text-emerald-400" />
                <span>Book Free Demo</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
