import React from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { ScrollReveal } from '@/components/ScrollReveal';
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
    <div className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with Scroll Reveal */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-900 border border-teal-200 mb-3 shadow-xs">
            <Phone className="h-3.5 w-3.5 text-teal-600" />
            <span>Direct Advisory &amp; Live Walkthrough</span>
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-slate-800 leading-tight">
            Schedule a Free 1-on-1 Live Demo
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Tell us about your plotted colony, residential township, or high-rise development. We will prepare a live session tailored with sample layout mapping and milestone demand schedules.
          </p>
        </ScrollReveal>

        {/* Contact Form & Side Cards with Scroll Reveal */}
        <ScrollReveal direction="up" delay={100}>
          <ContactForm />
        </ScrollReveal>

        {/* Office & Regional Presence Info */}
        <div className="mt-16 border-t border-slate-200 pt-12">
          <ScrollReveal direction="up" className="text-center mb-8">
            <h3 className="text-xl font-semibold text-slate-800">
              Regional Advisory &amp; Support Hubs
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
            <ScrollReveal direction="up" delay={100} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="font-semibold text-slate-800 text-base">Central India Hub</div>
              <div className="text-teal-700 font-semibold mt-1">Bhopal &amp; Indore, MP</div>
              <p className="mt-2 text-slate-500 leading-relaxed text-xs">
                Plotline Technologies Center, MP Nagar Zone II, Bhopal, Madhya Pradesh 462011
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={180} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="font-semibold text-slate-800 text-base">North India Hub</div>
              <div className="text-emerald-700 font-semibold mt-1">Delhi NCR &amp; Jaipur, RJ</div>
              <p className="mt-2 text-slate-500 leading-relaxed text-xs">
                Cyber City Phase II, Sector 24, Gurugram, Haryana 122002
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={260} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="font-semibold text-slate-800 text-base">Western India Hub</div>
              <div className="text-amber-700 font-semibold mt-1">Ahmedabad &amp; Surat, GJ</div>
              <p className="mt-2 text-slate-500 leading-relaxed text-xs">
                SG Highway Corporate Park, Bodakdev, Ahmedabad, Gujarat 380054
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={340} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="font-semibold text-slate-800 text-base">Direct Channels</div>
              <div className="text-teal-800 font-semibold mt-1">Phone &amp; WhatsApp</div>
              <div className="mt-2 text-slate-500 text-xs space-y-1">
                <div>Phone: +91 98765 43210</div>
                <div>Landline: +91 755 4900000</div>
                <div>Email: sales@plotline-erp.com</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
