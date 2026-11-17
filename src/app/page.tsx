import React from 'react';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { ErpDashboardShowcase } from '@/components/ErpDashboardShowcase';
import { ModulesShowcase } from '@/components/ModulesShowcase';
import { InteractivePlotMapPreview } from '@/components/InteractivePlotMapPreview';
import { InstallmentCalculator } from '@/components/InstallmentCalculator';
import { ComparisonTable } from '@/components/ComparisonTable';
import { FaqSection } from '@/components/FaqSection';
import { 
  Building2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ReceiptIndianRupee, 
  MapPin,
  Clock,
  PhoneCall
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Real ERP Live Interface Showcase */}
      <ErpDashboardShowcase />

      {/* 3. Five Core Modules Tabbed Showcase */}
      <ModulesShowcase />

      {/* 4. Interactive SVG Colony Plot Layout Engine */}
      <InteractivePlotMapPreview />

      {/* 5. Builder Cashflow Recovery & ROI Calculator */}
      <InstallmentCalculator />

      {/* 6. Comparison Table (Excel vs Generic CRMs vs Plotline) */}
      <ComparisonTable />

      {/* 7. Colonizer & Developer Testimonials / Social Proof */}
      <section className="py-20 lg:py-28 border-t border-white/5 bg-[#080d19]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Proven Across Plotted Townships & High-Rises
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Trusted by Leading Colonizers & Developers
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Here is what developers say after replacing disjointed spreadsheets with Plotline ERP:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-1 text-amber-400 text-sm mb-3">
                ★★★★★
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                &ldquo;Pehle har Sunday site par double booking ka jhagda hota tha. Plotline ke live SVG map se 
                sales executive phone se hi real-time status dekh lete hain. Hamara 45 din ka installment collection 
                ab 12 din me complete ho raha hai.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="h-10 w-10 rounded-full bg-indigo-600/30 flex items-center justify-center font-bold text-white text-xs">
                  RS
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Rajeev Singhania</div>
                  <div className="text-[11px] text-slate-400">Managing Director, Royal Palm City (180 Acres Plotted)</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-1 text-amber-400 text-sm mb-3">
                ★★★★★
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                &ldquo;Post-dated cheques (PDC) manage karna sabse bada sar-dard tha. Plotline me cheque vault 
                me save hota hai aur bank clearance par hi receipt generate hoti hai. RERA audit ke time ek click me 
                saara customer ledger download ho gaya.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="h-10 w-10 rounded-full bg-emerald-600/30 flex items-center justify-center font-bold text-white text-xs">
                  AP
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Aditya Patel</div>
                  <div className="text-[11px] text-slate-400">Chief Financial Officer, Green Meadows Townships</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-1 text-amber-400 text-sm mb-3">
                ★★★★★
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                &ldquo;99acres aur MagicBricks se aane wali leads pehle Excel me kho jaati thi. Inke webhook aur 
                WhatsApp integration se inquiry aate hi sales rep ko notification milta hai. Conversion 35% badh gaya hai.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="h-10 w-10 rounded-full bg-amber-600/30 flex items-center justify-center font-bold text-white text-xs">
                  VK
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Vikram Khandelwal</div>
                  <div className="text-[11px] text-slate-400">Director of Sales, Shivalik High-Rise & Villas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <FaqSection />

      {/* 9. Final High-Impact Conversion CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/40 via-slate-900/80 to-[#070a13] p-8 sm:p-14 backdrop-blur-2xl shadow-2xl shadow-indigo-950/50">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300 mb-6">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span>Ready for Immediate Deployment</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Modernize Your Colony & Real Estate Operations Today
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Join leading Indian colonizers who run their sales, layout maps, demand letters, PDC vault, and accounts on Plotline. 
              Book a live 30-minute demonstration with sample data from your project.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-emerald-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all"
              >
                <span>Schedule 1-on-1 Personalized Demo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-all"
              >
                <span>View Transparent Pricing Plans</span>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Zero On-Premise Servers Needed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Excel Data Import Included</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Dedicated RERA & GST Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
