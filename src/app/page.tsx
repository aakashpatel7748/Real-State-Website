import React from 'react';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { SoftwareScreenshotsGallery } from '@/components/SoftwareScreenshotsGallery';
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
  Phone, 
  Calendar,
  Check
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative bg-white text-slate-900 font-sans">
      {/* 1. Hero Section with 2-Column Layout & Clean Live ERP Screenshot */}
      <HeroSection />

      {/* 2. Actual Software Screenshots Gallery (Cleaned Real ERP SVGs) */}
      <SoftwareScreenshotsGallery />

      {/* 3. Five Core Modules in Clean High-Contrast Cards */}
      <ModulesShowcase />

      {/* 4. Interactive Colony Naksha (Plot Layout Map) */}
      <InteractivePlotMapPreview />

      {/* 5. Builder Cashflow Recovery & ROI Calculator */}
      <InstallmentCalculator />

      {/* 6. Comparison Table (Excel vs Generic CRM vs Plotline) */}
      <ComparisonTable />

      {/* 6.5 About Plotline ERP Section */}
      <section id="about" className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-900 border border-teal-200 shadow-xs">
                <span>About Plotline ERP</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight">
                Kyu Plotline Bharat ke Colonizers ki Pehli Pasand Hai?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Generic CRMs (jaise Salesforce ya HubSpot) real estate colonizers ke ground workflows ko nahi samajhte. 
                Unme Khasra-Khata zameen ka hisab, CAD/SVG layout naksha, construction milestone kist demands aur PDC cheque vault nahi hote.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Plotline ERP ko specifically Indian plotted township developers, colonizers aur builders ke liye banaya gaya hai — taaki site par ghoom rahe sales rep se lekar registry office aur accounts team tak sab ek hi platform par live synchronize rahein.
              </p>
              
              <div className="pt-2 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5">
                  <div className="text-sm sm:text-base font-bold text-slate-900">100% Cloud Native</div>
                  <div className="text-xs text-slate-500 mt-0.5">Mobile aur laptop dono par live access.</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5">
                  <div className="text-sm sm:text-base font-bold text-[#0d9488]">RERA &amp; GST Ready</div>
                  <div className="text-xs text-slate-500 mt-0.5">Tax invoices &amp; escrow accounts tracking.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-[#042026] p-6 sm:p-8 text-white shadow-xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
                  <ShieldCheck className="h-4 w-4" />
                  <span>The Plotline Commitment</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Zero Double-Booking &bull; Fast Kist Recovery &bull; Clean Accounts
                </h3>
                <div className="mt-5 space-y-3.5 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span><strong>Free Onboarding &amp; Map Setup:</strong> Aapka puraana Excel data aur CAD/SVG colony naksha hamari technical team free setup karke deti hai.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span><strong>Dedicated Support:</strong> Phone, WhatsApp aur screen share par complete customer assistance.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span><strong>Bank-Grade Data Security:</strong> Daily automatic cloud backups aur 256-bit SSL encryption.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Colonizer & Developer Testimonials */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0d9488]">
              Bharat ke Leading Colonizers dwara Bharosemand
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight">
              Colonizers aur Township Builders Ka Feedback
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Dekhein un colonizers ne kya kaha jinhone Excel sheets band karke Plotline ERP shuru kiya:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500 text-sm mb-3">
                ★★★★★
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;Pehle har Sunday site par double booking ka jhagda hota tha. Plotline ke live SVG map se 
                sales executive phone se hi real-time status dekh lete hain. Hamara 45 din ka installment collection 
                ab 12 din me complete ho raha hai.&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="h-10 w-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs">
                  RS
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Rajeev Singhania</div>
                  <div className="text-[11px] text-slate-500 font-medium">Managing Director, Royal Palm City (180 Acres Plotted)</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500 text-sm mb-3">
                ★★★★★
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;Post-dated cheques (PDC) manage karna sabse bada sar-dard tha. Plotline me cheque vault 
                me save hota hai aur bank clearance par hi receipt generate hoti hai. RERA audit ke time ek click me 
                saara customer ledger download ho gaya.&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="h-10 w-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                  AP
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Aditya Patel</div>
                  <div className="text-[11px] text-slate-500 font-medium">Chief Financial Officer, Green Meadows Townships</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500 text-sm mb-3">
                ★★★★★
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;99acres aur MagicBricks se aane wali leads pehle Excel me kho jaati thi. Inke webhook aur 
                WhatsApp integration se inquiry aate hi sales rep ko notification milta hai. Conversion 35% badh gaya hai.&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="h-10 w-10 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-xs">
                  VK
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Vikram Khandelwal</div>
                  <div className="text-[11px] text-slate-500 font-medium">Director of Sales, Shivalik High-Rise &amp; Villas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Accordion */}
      <FaqSection />

      {/* 9. Final High-Impact Conversion CTA in ERP Dark Teal */}
      <section className="py-14 sm:py-20 bg-[#042026] text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-950/80 border border-emerald-700/50 px-4 py-1.5 text-xs font-semibold text-emerald-300 mb-5">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            <span>Ready for Instant Deployment on Cloud</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
            Apni Colony ya Township ko Digital Banayein
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Excel sheets ki galatiyon aur double-booking ke jhagde se mukti paayein. 
            Apni colony ke sample naksha ke sath 1-on-1 personalized live demo schedule karein.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 px-7 py-3.5 text-sm font-bold text-[#042026] shadow-xl transition-all hover:scale-[1.02]"
            >
              <Calendar className="h-4 w-4 text-[#042026]" />
              <span>Schedule Free 1-on-1 Live Demo</span>
            </Link>

            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-teal-700/60 bg-teal-900/40 hover:bg-teal-900/60 px-7 py-3.5 text-sm font-semibold text-white transition-all"
            >
              <Phone className="h-4 w-4 text-emerald-400" />
              <span>Call Helpline: +91 98765 43210</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-emerald-400 stroke-[2.5]" />
              <span>Kisi bhi On-Premise Server ki Zarurat Nahi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-emerald-400 stroke-[2.5]" />
              <span>Excel se Unit Data Import Free</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-emerald-400 stroke-[2.5]" />
              <span>RERA aur GST Ready Architecture</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
