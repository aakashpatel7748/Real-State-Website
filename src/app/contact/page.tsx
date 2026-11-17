import React from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Schedule a Live ERP Demo & Colonizer Consultation',
  description:
    'Book a customized 1-on-1 demonstration of Plotline Real Estate ERP. See your actual colony layout map, test milestone demand letters, and inspect the PDC cheque vault.',
  keywords: [
    'Book Real Estate ERP Demo',
    'Colony management software trial',
    'Plotline ERP contact phone email',
    'Real estate software consultation India',
  ],
};

export default function ContactPage() {
  return (
    <div className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 mb-3">
            <Phone className="h-3.5 w-3.5" />
            <span>Direct Advisory & Walkthrough</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Schedule a Live <br />
            <span className="text-gradient-primary">Plotline ERP Walkthrough</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Tell us about your plotted colonies or residential towers. We will prepare a live demo environment with sample layout maps and demand schedules.
          </p>
        </div>

        {/* Contact Form & Side Cards */}
        <ContactForm />

        {/* Office & Regional Presence Info */}
        <div className="mt-20 border-t border-white/10 pt-16">
          <h3 className="text-xl font-bold text-white text-center mb-8">
            Serving Colonizers & Developers Across Real Estate Hubs
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-5">
              <div className="font-bold text-white text-base">Central India Hub</div>
              <div className="text-indigo-400 font-medium mt-1">Bhopal & Indore, MP</div>
              <p className="mt-2 text-slate-400 leading-relaxed text-xs">
                Plotline Technologies Center, MP Nagar Zone II, Bhopal, Madhya Pradesh 462011
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-5">
              <div className="font-bold text-white text-base">North India Hub</div>
              <div className="text-emerald-400 font-medium mt-1">Delhi NCR & Jaipur, RJ</div>
              <p className="mt-2 text-slate-400 leading-relaxed text-xs">
                Cyber City Phase II, Sector 24, Gurugram, Haryana 122002
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-5">
              <div className="font-bold text-white text-base">Western India Hub</div>
              <div className="text-amber-400 font-medium mt-1">Ahmedabad & Surat, GJ</div>
              <p className="mt-2 text-slate-400 leading-relaxed text-xs">
                SG Highway Corporate Park, Bodakdev, Ahmedabad, Gujarat 380054
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-5">
              <div className="font-bold text-white text-base">Direct Channels</div>
              <div className="text-cyan-400 font-medium mt-1">Call & WhatsApp</div>
              <div className="mt-2 text-slate-400 text-xs space-y-1">
                <div>+91 98765 43210 (Sales)</div>
                <div>+91 755 4900000 (Board)</div>
                <div>support@plotline-erp.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
