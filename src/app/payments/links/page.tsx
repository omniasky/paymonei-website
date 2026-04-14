import type { Metadata } from "next";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import Link from "next/link";
import {
  Link as LinkIcon,
  Globe,
  Zap,
  Shield,
  BarChart3,
  CreditCard,
  Smartphone,
  Check
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Payment Links | Billing Operations Software | Paymonei" },
  description:
    "Generate secure payment request links in seconds. Accelerate accounts receivable with automated checkout workflows.",
  keywords: [
    "payment request links",
    "B2B checkout links",
    "invoice link generator",
    "digital billing operations",
    "no-code billing",
    "accounts receivable software",
    "AR collections engine",
  ],
  openGraph: {
    title: "Payment Links | Billing Operations Software | Paymonei",
    description:
      "Generate secure payment request links in seconds. Accelerate accounts receivable with automated checkout workflows.",
    url: "https://paymonei.com/payments/links",
    siteName: "Paymonei",
    type: "website",
    images: [
      {
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paymonei Payment Links",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payment Links | Billing Operations Software | Paymonei",
    description:
      "Generate secure payment request links in seconds. Accelerate accounts receivable with automated checkout workflows.",
    images: ["https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png"],
  },
  alternates: { canonical: "https://paymonei.com/payments/links" },
};

export default function PaymentLinksPage() {
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
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[400px]">
              {/* Left Copy */}
              <div>
                <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-6 font-medium">Payment Links</p>
                <h1
                  className="text-[clamp(2.4rem,4.5vw,4rem)] font-light leading-[1.08] tracking-[-0.04em] text-[#0C0C0C] mb-6"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  Request payments.<br />
                  <span className="italic text-[#666]">Anywhere, anytime.</span>
                </h1>
                <p className="text-[16px] text-[#666] leading-relaxed font-light max-w-md mb-10">
                  Generate secure, branded checkout requests instantly. Our software automates the Accounts Receivable workflow seamlessly without writing custom code.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="https://app.paymonei.com/auth/register">
                    <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0C0C0C] text-white text-[15px] font-medium hover:bg-[#222] transition-colors cursor-pointer">
                      Start orchestration
                      <Check className="w-4 h-4 opacity-70" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Interface Mockup */}
              <div className="relative border border-[#EAEAE6] rounded-xl bg-white shadow-sm p-6 overflow-hidden">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F5F5F2]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F5F5F2] flex items-center justify-center">
                      <LinkIcon className="w-4 h-4 text-[#555]" />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-[#0C0C0C]">New Payment Link</p>
                      <p className="text-[11px] text-[#999]">Design Services - Invoice #1024</p>
                    </div>
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#999] font-medium bg-[#FAFAF8] px-2 py-1 rounded">Draft</span>
                </div>

                <div className="space-y-5">
                  <div className="flex justify-between items-end border-b border-[#F5F5F2] pb-3">
                    <p className="text-[12px] text-[#777]">Amount to request</p>
                    <p className="text-2xl font-medium text-[#0C0C0C] tracking-tight">$4,500.00</p>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#F5F5F2] pb-3">
                    <p className="text-[12px] text-[#777]">Link URL</p>
                    <p className="text-[13px] font-mono text-[#555]">pay.paymonei.com/inv_123</p>
                  </div>

                  <div className="pt-4">
                    <div className="w-full text-center py-2.5 rounded bg-[#F5F5F2] text-[#999] text-[13px]">
                      Generating secure link...
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
            <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-5 font-medium">Why Payment Links</p>
            <h2
              className="text-[clamp(2rem,3.5vw,2.8rem)] font-light leading-tight tracking-[-0.03em] text-[#0C0C0C] mb-16"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Collections infrastructure, <br />
              <span className="italic text-[#666]">simplified.</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#EAEAE6]">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-[#FAFAF8] p-10 flex flex-col">
                  <div className="w-10 h-10 rounded bg-[#F5F5F2] flex items-center justify-center mb-6">
                    <feature.icon className="w-5 h-5 text-[#333]" />
                  </div>
                  <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">{feature.title}</h3>
                  <p className="text-[14px] leading-relaxed text-[#777] font-light">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── USE CASES ──────────────────────────────────────────────────── */}
        <section className="py-24 px-5 sm:px-8 border-b border-[#EAEAE6] bg-white">
          <div className="max-w-7xl mx-auto lg:px-8">
            <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-16 font-medium">Ideal For</p>

            <div className="space-y-24">
              {/* Use Case 1 */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-[24px] font-medium text-[#0C0C0C] mb-4">Streamline agency invoicing</h3>
                  <p className="text-[15px] text-[#666] leading-relaxed font-light mb-6">
                    Agencies and consultancies rely on robust billing workflows. Generate an invoice link directly after a client call and dispatch it via email or Slack.
                  </p>
                  <ul className="space-y-3">
                    {["Instant request generation without coding", "Automated invoice PDF attachment", "Real-time payment status tracking"].map(item => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#0C0C0C] mt-0.5 opacity-60" />
                        <span className="text-[14px] text-[#555] font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#FAFAF8] border border-[#EAEAE6] rounded-xl p-8">
                  <div className="bg-white border border-[#EAEAE6] rounded overflow-hidden shadow-sm">
                    <div className="bg-[#F5F5F2] px-4 py-2 border-b border-[#EAEAE6] text-[11px] font-mono text-[#777] flex gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EAEAE6]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EAEAE6]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EAEAE6]"></span>
                    </div>
                    <div className="p-5">
                      <p className="text-[13px] font-medium text-[#0C0C0C] mb-1">Payment Request Sent</p>
                      <p className="text-[13px] text-[#777] mb-4">Client: Acme Corp (hello@acme.inc)</p>
                      <div className="flex items-center gap-2 text-[12px] text-[#555] bg-[#FAFAF8] p-3 rounded border border-[#EAEAE6]">
                        <LinkIcon className="w-3.5 h-3.5" />
                        <span className="font-mono">pay.paymonei.com/p/acme-q3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Case 2 */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 bg-[#FAFAF8] border border-[#EAEAE6] rounded-xl p-8">
                  <div className="flex flex-col gap-4">
                    <div className="self-end bg-white border border-[#EAEAE6] rounded-lg p-3 text-[13px] text-[#333] shadow-sm max-w-[80%]">
                      Hi there! I would like to book a 2-hour consultation session.
                    </div>
                    <div className="self-start bg-[#0C0C0C] text-white rounded-lg p-3 text-[13px] shadow-sm max-w-[80%]">
                      <p className="mb-2">Excellent! Here is the secure link to complete your booking:</p>
                      <div className="bg-white/10 rounded p-2 flex items-center gap-2">
                        <LinkIcon className="w-3.5 h-3.5 opacity-70" />
                        <span className="font-mono text-white/90">pay.paymonei.com/book-session</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-[24px] font-medium text-[#0C0C0C] mb-4">Conversational commerce</h3>
                  <p className="text-[15px] text-[#666] leading-relaxed font-light mb-6">
                    Connect with customers where they already are. Drop payment links smoothly into WhatsApp, Instagram DMs, or Support channels.
                  </p>
                  <ul className="space-y-3">
                    {["Frictionless mobile-optimized checkout flows", "Flexible invoice settlement methods for your clients", "Unified tracking dashboard for all channels"].map(item => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#0C0C0C] mt-0.5 opacity-60" />
                        <span className="text-[14px] text-[#555] font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="py-24 px-5 sm:px-8 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto lg:px-8 text-center">
            <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-7 font-medium">Get started</p>
            <h2
              className="text-[clamp(2.2rem,5vw,4rem)] font-light leading-tight tracking-[-0.04em] text-[#0C0C0C] mx-auto mb-6"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif", maxWidth: "600px" }}
            >
              Start orchestrating.<br />
              <span className="italic text-[#666]">No credit card required.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="https://app.paymonei.com/auth/register">
                <span className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0C0C0C] text-white text-[15px] font-medium hover:bg-[#222] transition-colors cursor-pointer">
                  Create your account
                  <Check className="w-4 h-4 opacity-70" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

const features = [
  {
    icon: Zap,
    title: "Generate in seconds",
    desc: "Create secure payment requests instantly via the dashboard or API without engineering resources.",
  },
  {
    icon: Globe,
    title: "Share anywhere",
    desc: "Dispatch links through email, SMS, messaging apps, or embed them directly into existing workflows.",
  },
  {
    icon: CreditCard,
    title: "Flexible settlement",
    desc: "Provide clients the flexibility to settle invoices directly through secure external portals.",
  },
  {
    icon: Shield,
    title: "Enterprise security",
    desc: "Benefiting from bank-grade encryption and secure webhook hand-offs to your private ledgers.",
  },
  {
    icon: BarChart3,
    title: "Real-time tracking",
    desc: "Monitor views, checkout events, and completed settlements through a unified analytics dashboard.",
  },
  {
    icon: Smartphone,
    title: "Mobile optimized",
    desc: "Responsive checkout interfaces designed to minimize friction on mobile and desktop environments alike.",
  },
];
