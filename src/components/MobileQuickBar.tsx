'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

export function MobileQuickBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-slate-200 bg-white/95 px-3 py-2.5 backdrop-blur-md shadow-2xl md:hidden">
      <a
        href="tel:+919876543210"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-800 active:bg-slate-100"
      >
        <Phone className="h-4 w-4 text-blue-600" />
        <span>Call Expert</span>
      </a>

      <div className="w-2" />

      <a
        href="https://wa.me/919876543210?text=Hello%20Plotline%20ERP,%20I%20am%20interested%20in%20a%20Live%20Demo%20of%20Colony%20Management%20Software."
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-sm active:bg-emerald-700"
      >
        <MessageSquare className="h-4 w-4" />
        <span>WhatsApp</span>
      </a>

      <div className="w-2" />

      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-blue-600 py-2.5 text-xs font-bold text-white shadow-sm active:bg-blue-700"
      >
        <Calendar className="h-4 w-4" />
        <span>Book Demo</span>
      </Link>
    </div>
  );
}
