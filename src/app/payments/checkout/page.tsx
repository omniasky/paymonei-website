import type { Metadata } from "next";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import Link from "next/link";
import {
  ShoppingCart,
  Code2,
  Paintbrush,
  Globe,
  CheckCircle2,
  LayoutTemplate,
  MonitorSmartphone,
  ShieldCheck,
  Check
} from "lucide-react";

export const metadata: Metadata = {
  title: "Checkout Orchestration — Unified Billing UI | Paymonei",
  description:
    "Embed a conversion-optimized checkout experience into your app. Unified multi-rail orchestration, handled seamlessly.",
  keywords: [
    "checkout software",
    "embedded checkout",
    "hosted checkout page",
    "payment orchestration checkout",
    "no-code checkout UI",
    "unified billing interface",
  ],
  openGraph: {
    title: "Checkout Orchestration — Unified Billing UI | Paymonei",
    description:
      "Embed a conversion-optimized checkout experience into your app. Unified multi-rail orchestration, handled seamlessly.",
    url: "https://paymonei.com/payments/checkout",
    siteName: "Paymonei",
    type: "website",
    images: [
      {
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paymonei Checkout Orchestration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Checkout Orchestration — Unified Billing UI | Paymonei",
    description:
      "Embed a conversion-optimized checkout experience into your app. Unified multi-rail orchestration, handled seamlessly.",
    images: ["https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png"],
  },
};

export default function CheckoutPage() {
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
              <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-6 font-medium">Checkout Orchestration</p>
              <h1
                className="text-[clamp(2.8rem,5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.04em] text-[#0C0C0C] mb-6"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                The checkout experience.<br />
                <span className="italic text-[#666]">Built for conversion.</span>
              </h1>
              <p className="text-[16px] text-[#666] leading-relaxed font-light mb-10">
                Deploy a high-converting, unified billing interface in minutes. Whether embedded in your app or hosted on our servers, we orchestrate the flow so your customers securely connect with our licensed execution partners.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                <Link href="https://app.paymonei.com/auth/register">
                  <span className="inline-flex flex-1 items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0C0C0C] text-white text-[15px] font-medium hover:bg-[#222] transition-colors cursor-pointer w-full">
                    Explore checkout
                    <Check className="w-4 h-4 opacity-70" />
                  </span>
                </Link>
                <Link href="https://docs.paymonei.com/checkout">
                  <span className="inline-flex flex-1 items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#EAEAE6] bg-white text-[#555] text-[15px] font-medium hover:text-[#0C0C0C] hover:border-[#ccc] transition-colors cursor-pointer w-full">
                    <Code2 className="w-4 h-4 opacity-70" />
                    Read the docs
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Interface Mockup -> Now Full Width Below */}
            <div className="relative border border-[#EAEAE6] rounded-xl bg-[#FAFAF8] shadow-sm p-4 md:p-6 overflow-hidden w-full">
                <div className="bg-white rounded-lg border border-[#EAEAE6] shadow-sm overflow-hidden flex flex-col md:flex-row h-full">
                  {/* Left cart summary */}
                  <div className="flex-1 bg-[#FAFAF8] border-b md:border-b-0 md:border-r border-[#EAEAE6] p-6">
                    <p className="text-[13px] font-medium text-[#777] mb-2">Back to cart</p>
                    <div className="mb-6">
                      <p className="text-[12px] text-[#999] mb-1">Pay</p>
                      <h3 className="text-3xl font-semibold tracking-tight text-[#0C0C0C] mb-1">S$22.18</h3>
                      <p className="text-[11px] text-[#999]">Order #ORD-2026-66610</p>
                    </div>

                    <div className="space-y-4 mb-4 border-b border-[#EAEAE6] pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-[13px] font-medium text-[#333]">Product Alpha</p>
                          <p className="text-[11px] text-[#999]">Qty 1</p>
                        </div>
                        <p className="text-[13px] text-[#555]">Rp19,000</p>
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-[13px] font-medium text-[#333]">Product Beta</p>
                          <p className="text-[11px] text-[#999]">Qty 2</p>
                        </div>
                        <p className="text-[13px] text-[#555]">Rp190,000</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <p className="text-[12px] text-[#777]">Subtotal</p>
                        <p className="text-[12px] text-[#333] font-medium">S$19.79</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-[12px] text-[#777]">Shipping</p>
                        <p className="text-[12px] text-[#333] font-medium">S$2.24</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-[12px] text-[#777]">Software Fee</p>
                        <p className="text-[12px] text-[#333] font-medium">S$0.15</p>
                      </div>
                    </div>
                  </div>

                  {/* Right payment options */}
                  <div className="flex-[1.2] p-6 lg:p-8 bg-white">
                    <h4 className="text-[18px] font-medium text-[#0C0C0C] mb-1">Payment Details</h4>
                    <p className="text-[12px] text-[#777] mb-6">Select your preferred method to complete the workflow.</p>

                    <div className="bg-[#FAFAF8] rounded-lg p-4 border border-[#EAEAE6] mb-6">
                      <p className="text-[11px] tracking-wider uppercase text-[#999] mb-1 font-medium">Shipping to</p>
                      <p className="text-[14px] font-medium text-[#333]">Jane Doe</p>
                      <p className="text-[12px] text-[#777]">123 Main St, Tech District</p>
                    </div>

                    {/* Pseudo-tabs */}
                    <div className="flex bg-[#F5F5F2] rounded-lg p-1 border border-[#EAEAE6] mb-6">
                      <div className="flex-1 text-center py-2 bg-white rounded shadow-sm text-[12px] font-medium border border-[#EAEAE6] text-blue-600">Pay in SGD (S$22.18)</div>
                      <div className="flex-1 text-center py-2 text-[12px] font-medium text-[#777]">Pay in IDR</div>
                    </div>

                    {/* Method List */}
                    <div className="space-y-3 relative">
                      <div className="flex items-center justify-between p-4 rounded-lg border-2 border-blue-600 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-blue-600" />
                          <span className="text-[14px] font-medium text-[#0C0C0C]">Card</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 rounded-lg border border-[#EAEAE6] opacity-60">
                        <div className="flex items-center gap-3">
                          <Globe className="w-4 h-4 text-[#777]" />
                          <span className="text-[14px] font-medium text-[#333]">Local Transfer</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider font-medium text-[#999] bg-[#EAEAE6] px-2 py-0.5 rounded">Upcoming</span>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg border border-[#EAEAE6] opacity-60">
                        <div className="flex items-center gap-3">
                          <ShieldCheck className="w-4 h-4 text-[#777]" />
                          <span className="text-[14px] font-medium text-[#333]">Stablecoin</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider font-medium text-[#999] bg-[#EAEAE6] px-2 py-0.5 rounded">Upcoming</span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* ── FLEXIBLE DEPLOYMENT ──────────────────────────────────────── */}
        <section className="py-24 px-5 sm:px-8 border-b border-[#EAEAE6] bg-white">
          <div className="max-w-7xl mx-auto lg:px-8">
            <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-5 font-medium">Deployment Options</p>
            <h2
              className="text-[clamp(2rem,3.5vw,2.8rem)] font-light leading-tight tracking-[-0.03em] text-[#0C0C0C] mb-16"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif", maxWidth: "600px" }}
            >
              Integrate exactly how <br />
              <span className="italic text-[#666]">your architecture dictates.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-[#FAFAF8] border border-[#EAEAE6] rounded-xl p-10 flex flex-col items-start transition-colors hover:border-[#ddd]">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-[#EAEAE6] flex items-center justify-center mb-6">
                  <LayoutTemplate className="w-5 h-5 text-[#333]" />
                </div>
                <h3 className="text-[20px] font-medium text-[#0C0C0C] mb-3">Hosted Checkout</h3>
                <p className="text-[15px] leading-relaxed text-[#666] font-light mb-6">
                  Redirect customers to a secure, Paymonei-hosted URL. It&apos;s the fastest way to orchestrate a billing workflow—no frontend to build, fully compliant, and constantly optimized.
                </p>
                <div className="mt-auto">
                  <span className="text-[13px] font-medium text-[#0C0C0C] border-b border-[#0C0C0C] pb-0.5">Setup in minutes →</span>
                </div>
              </div>

              <div className="bg-[#FAFAF8] border border-[#EAEAE6] rounded-xl p-10 flex flex-col items-start transition-colors hover:border-[#ddd]">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-[#EAEAE6] flex items-center justify-center mb-6">
                  <Code2 className="w-5 h-5 text-[#333]" />
                </div>
                <h3 className="text-[20px] font-medium text-[#0C0C0C] mb-3">Embedded Elements</h3>
                <p className="text-[15px] leading-relaxed text-[#666] font-light mb-6">
                  Maintain full control of the UI by embedding Paymonei elements directly into your web or mobile app. Customers never leave your domain while we securely route the payment logic.
                </p>
                <div className="mt-auto">
                  <span className="text-[13px] font-medium text-[#0C0C0C] border-b border-[#0C0C0C] pb-0.5">Explore the API →</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES GRID ──────────────────────────────────────────────── */}
        <section className="py-24 px-5 sm:px-8 border-b border-[#EAEAE6] bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto lg:px-8">
            <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-5 font-medium">The Interface layer</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#EAEAE6]">
              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <Paintbrush className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">Custom branding</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  Align the checkout&apos;s typography, colors, and logos to match your brand seamlessly.
                </p>
              </div>

              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <Globe className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">Multi-currency logic</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  Dynamically display amounts in the user&apos;s preferred currency using our orchestration engine.
                </p>
              </div>

              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <MonitorSmartphone className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">Mobile-first design</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  The UI is rigorously tested across devices to ensure zero friction on mobile browsers.
                </p>
              </div>

              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <ShoppingCart className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">Cart recovery</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  Automate abandon-cart workflows and webhook triggers to recapture lost momentum.
                </p>
              </div>

              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <ShieldCheck className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">Fraud & Context</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  Our software captures necessary KYC context and securely hands it to execution partners.
                </p>
              </div>

              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <CheckCircle2 className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">One-click compatible</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  Surface saved methods securely through vaulted tokens provided by licensed networks.
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
