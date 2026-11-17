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
    <div className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 border border-blue-200 mb-3">
            <Phone className="h-3.5 w-3.5" />
            <span>Direct Advisory &amp; Live Walkthrough</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Apni Colony ke Liye Free Demo Book Karein
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Humein apne plotted township ya residential project ki basic detail batayein. Hum sample layout naksha aur demand notice ke sath live session arrange karenge.
          </p>
        </div>

        {/* Contact Form & Side Cards */}
        <ContactForm />

        {/* Office & Regional Presence Info */}
        <div className="mt-16 border-t border-slate-200 pt-14">
          <h3 className="text-xl font-black text-slate-900 text-center mb-8">
            Major Real Estate Hubs me Hamari Service
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="font-black text-slate-900 text-base">Central India Hub</div>
              <div className="text-blue-700 font-bold mt-1">Bhopal &amp; Indore, MP</div>
              <p className="mt-2 text-slate-500 leading-relaxed text-xs">
                Plotline Technologies Center, MP Nagar Zone II, Bhopal, Madhya Pradesh 462011
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="font-black text-slate-900 text-base">North India Hub</div>
              <div className="text-emerald-700 font-bold mt-1">Delhi NCR &amp; Jaipur, RJ</div>
              <p className="mt-2 text-slate-500 leading-relaxed text-xs">
                Cyber City Phase II, Sector 24, Gurugram, Haryana 122002
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="font-black text-slate-900 text-base">Western India Hub</div>
              <div className="text-amber-700 font-bold mt-1">Ahmedabad &amp; Surat, GJ</div>
              <p className="mt-2 text-slate-500 leading-relaxed text-xs">
                SG Highway Corporate Park, Bodakdev, Ahmedabad, Gujarat 380054
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="font-black text-slate-900 text-base">Helpline Channels</div>
              <div className="text-cyan-700 font-bold mt-1">Direct Call &amp; WhatsApp</div>
              <div className="mt-2 text-slate-500 text-xs space-y-1">
                <div>Phone: +91 98765 43210</div>
                <div>Landline: +91 755 4900000</div>
                <div>Email: sales@plotline-erp.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
