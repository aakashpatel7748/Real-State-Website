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
        <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-xl">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive 1-on-1 Walkthrough</span>
          </div>

          <h3 className="text-2xl font-bold text-white">
            See Your Colony Map & Cashflow in Action
          </h3>

          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Schedule a personalized 30-minute demonstration tailored to your exact projects. 
            We will load a sample layout map, run milestone demand letters, and demonstrate the PDC clearance register.
          </p>

          <div className="mt-8 space-y-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <div className="font-semibold text-white">Quick Turnaround</div>
                <div className="text-slate-400 text-xs">Consultant responds within 2 business hours</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <div className="font-semibold text-white">Confidential & Multi-Tenant</div>
                <div className="text-slate-400 text-xs">Dedicated database isolation per builder</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <div className="font-semibold text-white">Direct Advisory Desk</div>
                <div className="text-slate-400 text-xs">+91 98765 43210 (WhatsApp Available)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Card (7 Cols) */}
      <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-10 backdrop-blur-xl">
        {status === 'success' ? (
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-8 text-center space-y-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-2">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h4 className="text-2xl font-bold text-white">Demo Request Received!</h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Thank you! Our real estate ERP solutions specialist will call or WhatsApp you shortly 
              to set up your live walkthrough with customized project data.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 rounded-xl bg-indigo-600 px-6 py-2.5 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            {status === 'error' && (
              <div className="rounded-xl border border-rose-500/30 bg-rose-950/40 p-3 text-rose-300 text-xs">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">
                  Your Full Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Singhania"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">
                  Mobile / WhatsApp Number <span className="text-rose-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">
                  Developer / Company Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Royal Greens Developers"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">
                  City & State
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bhopal, MP or Jaipur, RJ"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">
                  Primary Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option>Plotted Colony / Township</option>
                  <option>High-Rise Residential Flats</option>
                  <option>Luxury Villas / Row Houses</option>
                  <option>Commercial Complex / Shops</option>
                  <option>Mixed Development Project</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">
                  Total Units (Approx)
                </label>
                <select
                  value={formData.units}
                  onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option>Under 50 Units</option>
                  <option>50 - 150 Units</option>
                  <option>150 - 350 Units</option>
                  <option>350 - 1,000+ Units</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-300 mb-1.5">
                Specific Challenge / Notes
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Currently managing 200 plots on Excel. Need automated installment demand letters and SVG colony map."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-emerald-500 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 disabled:opacity-50 transition-all cursor-pointer"
            >
              {loading ? (
                <span>Submitting Your Request...</span>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Request Live 1-on-1 ERP Demo</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
