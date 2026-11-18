import React from 'react';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { SoftwareScreenshotsGallery } from '@/components/SoftwareScreenshotsGallery';
import { ModulesShowcase } from '@/components/ModulesShowcase';
import { InteractivePlotMapPreview } from '@/components/InteractivePlotMapPreview';
import { PreSalesDashboardShowcase } from '@/components/PreSalesDashboardShowcase';
import { FaqSection } from '@/components/FaqSection';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  Building2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Calendar,
  Check
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative bg-white text-slate-900 font-sans ">
      {/* 1. Hero Section with 2-Column Layout & Clean Live ERP Screenshot */}
      <HeroSection />

      {/* 2. Actual Software Screenshots Gallery (Cleaned Real ERP SVGs) */}
      <SoftwareScreenshotsGallery />

      {/* 3. Five Core Modules in Clean High-Contrast Cards */}
      <ModulesShowcase />

      {/* 4. Interactive Colony Plot Layout Map */}
      <InteractivePlotMapPreview />

      {/* 5. Pre-Sales & Lead Pipeline CRM Dashboard (Left Text &bull; Right Image) */}
      <PreSalesDashboardShowcase />

      {/* 6. About Plotline ERP Section */}
      <section id="about" className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content with Scroll Reveal from Left */}
            <ScrollReveal direction="left" className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-900 border border-teal-200 shadow-xs">
                <span>About Plotline ERP</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-slate-800 leading-normal sm:leading-relaxed lg:leading-[1.38]">
                Why Plotline is the First Choice of Indian Colonizers
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Generic enterprise software (like Salesforce or HubSpot) does not comprehend the ground operations of plotted developments.
                They lack Khasra land acquisition ledgers, CAD/SVG layout map rendering, milestone installment demand generation, and PDC cheque vaults.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Plotline ERP was designed specifically for Indian plotted township developers, colonizers, and builders—ensuring on-site sales agents, town planning teams, registry officers, and accounts departments stay synchronized in real time.
              </p>

            </ScrollReveal>

            {/* Right Card with Scroll Reveal from Right */}
            <ScrollReveal direction="right" delay={150} className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-[#042026] p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
                  <ShieldCheck className="h-4 w-4" />
                  <span>The Plotline Commitment</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                  Zero Double-Bookings &bull; Fast Installment Recovery &bull; Audit-Ready Accounts
                </h3>
                <div className="mt-5 space-y-3.5 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span><strong>Free Onboarding &amp; Map Setup:</strong> Our dedicated onboarding team migrates your existing Excel unit data and converts CAD/SVG colony layouts free of charge.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span><strong>Dedicated Technical Support:</strong> Direct assistance via Phone, WhatsApp, and screen share whenever your sales or finance teams need help.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span><strong>Bank-Grade Data Security:</strong> Daily automated cloud backups, role-based user access controls, and 256-bit SSL encryption.</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. Colonizer & Developer Testimonials */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header with Scroll Reveal */}
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0d9488]">
              Trusted by Leading Indian Developers
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-[38px] font-semibold text-slate-800 leading-normal sm:leading-relaxed lg:leading-[1.38]">
              What Colonizers &amp; Township Builders Say
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Read how real estate colonizers eliminated manual registers and switched to Plotline ERP:
            </p>
          </ScrollReveal>

          {/* Staggered Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal direction="up" delay={100} className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-1 text-amber-500 text-sm mb-3">
                ★★★★★
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;Earlier, double-booking conflicts occurred every Sunday on site. With Plotline&apos;s live SVG layout map,
                sales reps check real-time unit status on their phones. Our 45-day installment collection cycle is now
                completed in under 12 days.&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="h-10 w-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-semibold text-xs">
                  RS
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-800">Rajeev Singhania</div>
                  <div className="text-[11px] text-slate-500 font-medium">Managing Director, Royal Palm City (180 Acres Plotted)</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200} className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-1 text-amber-500 text-sm mb-3">
                ★★★★★
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;Managing advance post-dated cheques (PDCs) used to be a massive administrative bottleneck. In Plotline,
                cheques are logged in a secure vault, and receipts generate only upon bank clearance. During RERA audits,
                our entire buyer ledger was exported in one click.&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="h-10 w-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-semibold text-xs">
                  AP
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-800">Aditya Patel</div>
                  <div className="text-[11px] text-slate-500 font-medium">Chief Financial Officer, Green Meadows Townships</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300} className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-1 text-amber-500 text-sm mb-3">
                ★★★★★
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;Inquiries from 99acres and MagicBricks previously slipped through messy spreadsheets. With Plotline&apos;s
                instant webhooks and WhatsApp integration, reps are alerted in seconds. Our lead conversion jumped by 35%.&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="h-10 w-10 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center font-semibold text-xs">
                  VK
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-800">Vikram Khandelwal</div>
                  <div className="text-[11px] text-slate-500 font-medium">Director of Sales, Shivalik High-Rise &amp; Villas</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 8. FAQ Accordion */}
      <FaqSection />

      {/* 9. Final High-Impact Conversion CTA (Floating Modern Card) */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal
            direction="up"
            className="rounded-3xl bg-gradient-to-br from-[#063038] via-[#042026] to-[#021418] px-4 py-8 sm:p-14 text-white shadow-2xl shadow-teal-950/25 border border-teal-700/40 relative overflow-hidden text-center"
          >
            {/* Subtle atmospheric ambient glow effects */}
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-950/90 border border-emerald-600/60 px-4 py-1.5 text-xs font-semibold text-emerald-300 mb-5 shadow-inner">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                <span>Ready for Instant Cloud Deployment</span>
              </div>

              <h2 className="text-xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-white leading-snug sm:leading-relaxed lg:leading-[1.38]">
                Digitize Your Colony or Township Today
              </h2>

              <p className="mt-3 text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Eliminate double-booking disputes and spreadsheet errors.
                Schedule a personalized 1-on-1 live demo configured with your colony layout map.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                <Link
                  href="/contact"
                  className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 px-5 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold text-[#042026] shadow-xl transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap"
                >
                  <Calendar className="h-4 w-4 text-[#042026] shrink-0" />
                  <span>Schedule Free Live Demo</span>
                </Link>

                <a
                  href="tel:+919876543210"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-teal-700/60 bg-teal-900/40 hover:bg-teal-900/60 px-5 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold text-white transition-all hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
                >
                  <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Call: +91 98765 43210</span>
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-400 stroke-[2.5]" />
                  <span>Zero On-Premise Server Needed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-400 stroke-[2.5]" />
                  <span>Free Excel Unit Data Migration</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-400 stroke-[2.5]" />
                  <span>RERA &amp; GST Ready Architecture</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
