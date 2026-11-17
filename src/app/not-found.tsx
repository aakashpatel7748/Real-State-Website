import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-slate-50/70">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
        <span className="text-4xl font-semibold text-teal-800">404</span>
        <h1 className="mt-3 text-2xl font-semibold text-slate-800">Page Not Found</h1>
        <p className="mt-2 text-sm text-slate-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#042026] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#083c47] transition-all"
          >
            <Home className="h-4 w-4 text-emerald-400" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
