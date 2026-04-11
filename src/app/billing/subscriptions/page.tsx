import type { Metadata } from "next";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import Link from "next/link";
import {
  Repeat,
  Layers,
  ArrowDownUp,
  Activity,
  Code2,
  CalendarDays,
  CreditCard,
  Check
} from "lucide-react";

export const metadata: Metadata = {
  title: "Subscription Management Software — Recurring Billing | Paymonei",
  description:
    "Orchestrate complex recurring operations seamlessly. Flexible subscription management software with native dunning and proration logic.",
  keywords: [
    "subscription management software",
    "recurring billing platform",
    "metered billing software",
    "subscription engine",
    "proration software",
    "SaaS billing",
  ],
  openGraph: {
    title: "Subscription Management Software — Recurring Billing | Paymonei",
    description:
      "Orchestrate complex recurring operations seamlessly. Flexible subscription management software with native dunning and proration logic.",
    url: "https://paymonei.com/billing/subscriptions",
    siteName: "Paymonei",
    type: "website",
    images: [
      {
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paymonei Subscription Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subscription Management Software — Recurring Billing | Paymonei",
    description:
      "Orchestrate complex recurring operations seamlessly. Flexible subscription management software with native dunning and proration logic.",
    images: ["https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png"],
  },
};

export default function SubscriptionsPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen bg-[#FAFAF8]" style={{ fontFamily: "'Geist', system-ui, sans-serif" }}>
        <Navbar />

        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-20 px-5 sm:px-8 border-b border-[#EAEAE6]">
          <div className="max-w-7xl mx-auto lg:px-8">
            {/* Center Copy */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-6 font-medium">Subscription Software</p>
              <h1
                className="text-[clamp(2.8rem,5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.04em] text-[#0C0C0C] mb-6"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Recurring logic.<br />
                <span className="italic text-[#666]">Engineered for scale.</span>
              </h1>
              <p className="text-[16px] text-[#666] leading-relaxed font-light mb-10">
                Configure flexible, dynamic subscription models without heavy engineering. We handle the complex orchestration—from proration to dunning—while securely delegating the actual transaction execution to our licensed networks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                <Link href="https://app.paymonei.com/auth/register">
                  <span className="inline-flex flex-1 items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0C0C0C] text-white text-[15px] font-medium hover:bg-[#222] transition-colors cursor-pointer w-full">
                    Configure your plans
                    <Check className="w-4 h-4 opacity-70" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Dashboard Mockup Component */}
            <div className="relative border border-[#EAEAE6] rounded-xl bg-white shadow-sm p-4 md:p-8 overflow-hidden w-full max-w-4xl mx-auto">
              <div className="bg-[#FAFAF8] rounded-lg border border-[#EAEAE6] overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAEAE6] bg-white">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium text-[12px]">T</div>
                    <div>
                      <h3 className="text-[14px] font-medium text-[#0C0C0C]">TechNova Inc.</h3>
                      <p className="text-[12px] text-[#777]">cus_8x99321p</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-[11px] uppercase tracking-wider text-[#555] font-medium">Active Subscription</span>
                  </div>
                </div>
                
                <div className="p-6 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
                  <div className="space-y-6">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#999] mb-3 font-medium">Current Plan</p>
                      <div className="flex items-center justify-between border border-[#EAEAE6] bg-white rounded-md p-4">
                        <div>
                          <p className="text-[14px] font-medium text-[#0C0C0C]">Pro Tier — Annual</p>
                          <p className="text-[12px] text-[#777] mt-0.5">Renews Oct 12, 2026</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[14px] font-medium text-[#0C0C0C]">$1,200.00 / yr</p>
                          <p className="text-[11px] text-[#999] mt-0.5">Base fee</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-[11px] uppercase tracking-wider text-[#999] font-medium">Metered Usage (Current Billing Period)</p>
                        <p className="text-[11px] text-blue-600 font-medium cursor-pointer">View Logs</p>
                      </div>
                      <div className="space-y-2 border border-[#EAEAE6] bg-white rounded-md p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Layers className="w-4 h-4 text-[#777]" />
                            <span className="text-[13px] text-[#333]">Active Seats</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-[12px] font-mono text-[#555]">14 / 20</span>
                            <span className="text-[13px] text-[#333] font-medium w-16 text-right">$0.00</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#F5F5F2]">
                          <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-[#777]" />
                            <span className="text-[13px] text-[#333]">API Requests (10k block)</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-[12px] font-mono text-[#555]">2.4 blocks</span>
                            <span className="text-[13px] text-[#333] font-medium w-16 text-right">$24.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white border border-[#EAEAE6] rounded-md p-4">
                      <p className="text-[11px] uppercase tracking-wider text-[#999] mb-2 font-medium">Upcoming Invoice</p>
                      <p className="text-[24px] font-medium text-[#0C0C0C] tracking-tight mb-1">$24.00</p>
                      <p className="text-[12px] text-[#777]">Draft scheduled for Nov 12, 2026</p>
                    </div>
                    
                    <div className="bg-white border border-[#EAEAE6] rounded-md p-4">
                      <p className="text-[11px] uppercase tracking-wider text-[#999] mb-2 font-medium">Auto-Charge Method</p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-6 bg-[#F5F5F2] rounded border border-[#EAEAE6] flex items-center justify-center">
                          <CreditCard className="w-4 h-4 text-[#555]" />
                        </div>
                        <div>
                          <p className="text-[13px] font-medium text-[#333]">•••• 4242</p>
                          <p className="text-[11px] text-[#777]">Expires 12/28</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES GRID ──────────────────────────────────────────────── */}
        <section className="py-24 px-5 sm:px-8 border-b border-[#EAEAE6] bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto lg:px-8">
            <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-5 font-medium">The Orchestration Layer</p>
            <h2
              className="text-[clamp(2rem,3.5vw,2.8rem)] font-light leading-tight tracking-[-0.03em] text-[#0C0C0C] mb-16"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif", maxWidth: "600px" }}
            >
              Any pricing model.<br />
              <span className="italic text-[#666]">Instantly deployable.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#EAEAE6]">
              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <Repeat className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">Versatile billing cycles</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  Configure your product for weekly, monthly, annual, or wholly custom billing intervals across multiple tiers.
                </p>
              </div>

              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <Activity className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">Metered logic</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  Push usage events to the API. Our engine automatically calculates the aggregate cost for the current cycle on the fly.
                </p>
              </div>

              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <ArrowDownUp className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">Zero-math proration</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  When users upgrade, downgrade, or change seat counts mid-cycle, the software instantly computes accurate proration credits.
                </p>
              </div>

              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <CalendarDays className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">Trial management</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  Incentivize signups with free trial periods. The software automatically shifts their status to active on the scheduled date.
                </p>
              </div>

              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <Layers className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">Volume & tiered pricing</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  Define complex tiers (e.g., $10 for the first 100 units, $8 thereafter) entirely within the dashboard without custom code.
                </p>
              </div>

              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <Code2 className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">Dunning recovery</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  Automate webhook triggers and email sequences to execute card-retry logic when scheduled auto-charges fail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="py-24 px-5 sm:px-8 bg-white">
          <div className="max-w-7xl mx-auto lg:px-8 text-center">
            <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-7 font-medium">Ready to deploy?</p>
            <h2
              className="text-[clamp(2.2rem,5vw,4rem)] font-light leading-tight tracking-[-0.04em] text-[#0C0C0C] mx-auto mb-6"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif", maxWidth: "600px" }}
            >
              Start orchestrating.<br />
              <span className="italic text-[#666]">Upgrade when you scale.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="https://app.paymonei.com/auth/register">
                <span className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0C0C0C] text-white text-[15px] font-medium hover:bg-[#222] transition-colors cursor-pointer">
                  Create your account
                  <Check className="w-4 h-4 opacity-70" />
                </span>
              </Link>
            </div>
            <p className="mt-8 text-[13px] text-[#BBB] font-light max-w-xl mx-auto leading-relaxed">
              Paymonei acts solely as a software orchestration platform. All payment execution and settlement services are fully operated by our licensed financial partners.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
