import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  MapPin, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  Car, 
  ShieldCheck,
  Building
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interactive SVG Colony Plot Layout Map & Master Inventory Management',
  description:
    'Visual SVG layout map with live unit status (Available, Reserved, Booked, Registered). Zero double-bookings with transactional locks, dynamic price index repricing, and parking slot management.',
};

export default function InventoryMapPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:text-emerald-900">Home</Link>
            <span>/</span>
            <span>Modules</span>
            <span>/</span>
            <span className="text-slate-500">Colony Naksha &amp; Inventory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Interactive Colony Naksha &amp; <br />
            <span className="text-emerald-700">Master Inventory Control</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Flex banner aur purane prints ki jagah digital interactive SVG layout map use karein. 
            Hara (Available), Peela (Reserved), aur Laal (Booked) status real-time sync hota hai, jisse double booking ka khatra 0% ho jata hai.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold mb-4">
              <MapPin className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Live SVG Colony Naksha</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              AutoCAD ya town planning se nikla SVG vector map direct upload karein. Built-in editor se plots ke coordinate define kar sakte hain.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 font-bold mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Zero Double-Booking Lock</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Token bayana select hote hi database lock active ho jata hai. Koi doosra sales person us plot ko book nahi kar sakta jab tak timer khatam na ho.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 font-bold mb-4">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Dynamic Rate Index (Auto Reprice)</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Colony me development progress ke hisab se unsold plots ka rate per sq.ft badha dein. Purani bookings aur agreement bilkul surakshit rehte hain.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 font-bold mb-4">
              <Building className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Plots, Flats, Villas &amp; Commercial</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Plotted development ke sath multi-storey towers, duplex villas aur commercial shops sabhi ki inventory sectors aur blocks ke hisab se manage hoti hai.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 font-bold mb-4">
              <Car className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Parking Slots Management</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Stilt aur open parking slots ka hisab. Parking number customer ke allotment letter aur agreement me link ho jata hai taaki possession ke time vivad na ho.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 font-bold mb-4">
              <Layers className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-black text-slate-900">PLC &amp; Charge Master</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Corner plots, park facing plots aur main road plots par preferential location charge (PLC), maintenance fees aur club membership auto-calculate hoti hai.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-slate-900">Apni colony ka naksha software par dekhna chahte hain?</h3>
            <p className="text-sm text-slate-500 mt-1">Humein apna layout PDF ya image bhejein, hum session me render karke dikhayenge.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-emerald-700 px-7 py-4 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-emerald-800 transition-all shrink-0"
          >
            Layout Demo Book Karein
          </Link>
        </div>
      </div>
    </div>
  );
}
