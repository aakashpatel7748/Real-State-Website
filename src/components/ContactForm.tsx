'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Send,
  ShieldCheck,
  Clock
} from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    city: '',
    projectType: 'Plotted Colony / Township',
    units: '50 - 150 Units',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Failed to submit demo request.');
      }

      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        city: '',
        projectType: 'Plotted Colony / Township',
        units: '50 - 150 Units',
        message: '',
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Details Info (5 Cols) */}
      <div className="lg:col-span-5 space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-900 border border-teal-200 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-teal-600" />
            <span>1-on-1 Free Live Walkthrough</span>
          </span>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            Preview the Demo with Your Own Colony Layout &amp; Data
          </h3>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
            Schedule a 30-minute tailored live session. We will load a sample layout map, 
            generate a milestone installment notice, and demonstrate the PDC cheque vault live.
          </p>

          <div className="mt-8 space-y-4 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 font-bold border border-teal-100">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-slate-900">Rapid Response</div>
                <div className="text-slate-500 text-xs">An ERP specialist connects within 2 business hours</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold border border-emerald-100">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-slate-900">100% Confidential &amp; Isolated</div>
                <div className="text-slate-500 text-xs">Your project inventory and customer records stay private</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-800 font-bold border border-slate-200">
                <Phone className="h-5 w-5 text-teal-700" />
              </div>
              <div>
                <div className="font-bold text-slate-900">Direct Helpline</div>
                <div className="text-slate-500 text-xs">+91 98765 43210 (Direct phone &amp; WhatsApp)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Card (7 Cols) */}
      <div className="lg:col-span-7 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xl shadow-slate-900/5">
        {status === 'success' ? (
          <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-8 text-center space-y-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-200 text-emerald-800 mb-2">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">Demo Request Received!</h4>
            <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
              Thank you! Our real estate ERP consultant will reach out via Phone or WhatsApp shortly 
              to coordinate your live interactive walkthrough.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 rounded-xl bg-[#042026] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#073640] transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            {status === 'error' && (
              <div className="rounded-xl border border-rose-300 bg-rose-50 p-3 text-rose-800 text-xs font-semibold">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-800 mb-1.5">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Singhania"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-teal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-600"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1.5">
                  Phone / WhatsApp Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-teal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-800 mb-1.5">
                  Developer / Firm Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Royal Greens Developers"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-teal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-600"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1.5">
                  City &amp; State
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bhopal, MP or Jaipur, RJ"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-teal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-800 mb-1.5">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:border-teal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-600"
                >
                  <option>Plotted Colony / Township (Plots)</option>
                  <option>Residential High-Rise Flats</option>
                  <option>Luxury Duplex Villas / Row Houses</option>
                  <option>Commercial Complex / Retail Shops</option>
                  <option>Mixed Township Development</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1.5">
                  Total Units (Approx)
                </label>
                <select
                  value={formData.units}
                  onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:border-teal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-600"
                >
                  <option>Under 50 Units</option>
                  <option>50 - 150 Units</option>
                  <option>150 - 350 Units</option>
                  <option>350 - 1,000+ Units</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1.5">
                Specific Requirements or Current Workflow
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Currently managing 120 plots in spreadsheets. Need automated installment demand notices and an interactive plot layout map."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-teal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-600"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#042026] hover:bg-[#083c47] py-3.5 text-sm font-semibold text-white shadow-md transition-all cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <span>Submitting Your Request...</span>
              ) : (
                <>
                  <Send className="h-4 w-4 text-emerald-400" />
                  <span>Book Free 1-on-1 Live Demo</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
