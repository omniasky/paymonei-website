import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { HeroSection } from "@/components/templates/HeroSection";
import { CodeComparisonSection } from "@/components/organisms/CodeComparisonSection";
import { ProblemSection } from "@/components/organisms/ProblemSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Billing & Payment Software | Invoices, Disbursements & Global Operations | Paymonei",
  description:
    "Paymonei is billing and operations software for modern companies. Create invoices, track collections, and manage global disbursements from one dashboard, across 150+ countries.",
  openGraph: {
    title: "Business Billing & Payment Software | Paymonei",
    description:
      "Invoices, disbursements, and global payment workflows from one clean dashboard. Built for companies that operate across borders.",
    url: "https://paymonei.com",
    images: [
      {
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paymonei: Business Billing and Payment Software",
      },
    ],
  },
  alternates: { canonical: "https://paymonei.com" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://paymonei.com/#organization",
      name: "Paymonei",
      url: "https://paymonei.com",
      description: "Business billing and payment operations software for invoices, disbursements, and global payment workflows.",
      foundingDate: "2023",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://paymonei.com/#software",
      name: "Paymonei",
      applicationCategory: "BusinessApplication",
      featureList: [
        "Invoice Management",
        "Billing Automation",
        "Cross-border Disbursement Tracking",
        "Workforce Payment Coordination",
        "Merchant Billing Tools",
        "Multi-currency Support",
        "Payment Links",
        "Multi-rail Payment Support",
      ],
    },
  ],
};

// Ecosystem logos — just enough, no parade
const logos = [
  { src: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/circle.jpeg", alt: "Circle" },
  { src: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/nium.jpeg", alt: "Nium" },
  { src: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/stripe.jpeg", alt: "Stripe" },
  { src: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/coinbase.jpeg", alt: "Coinbase" },
  { src: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/visa.jpeg", alt: "Visa" },
  { src: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/mastercard.jpeg", alt: "Mastercard" },
  { src: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/aws.jpeg", alt: "AWS" },
  { src: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/ripple.jpeg", alt: "Ripple" },
  { src: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/chainalysis.jpeg", alt: "Chainalysis" },
  { src: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/quicknode.jpeg", alt: "Quicknode" },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Google Fonts */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen bg-[#FAFAF8]" style={{ fontFamily: "'Geist', system-ui, sans-serif" }}>
        <Navbar />

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <HeroSection
          primaryCta={{ label: "Get started", href: "https://app.paymonei.com/auth/register" }}
          secondaryCta={{ label: "See how it works", href: "#how-it-works" }}
        />

        {/* ── LOGO STRIP ───────────────────────────────────────────── */}
        <section className="border-t border-[#EAEAE6] bg-[#FAFAF8] py-10 px-5 sm:px-8">
          <div className="max-w-7xl mx-auto lg:px-8">
            <p className="text-[12px] tracking-[0.18em] uppercase text-[#BBBBB8] mb-6">
              Built on trusted global infrastructure
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-12 z-10" style={{ background: "linear-gradient(to right, #FAFAF8, transparent)" }} />
              <div className="absolute right-0 top-0 bottom-0 w-12 z-10" style={{ background: "linear-gradient(to left, #FAFAF8, transparent)" }} />
              <div className="flex animate-scroll" style={{ width: "max-content" }}>
                {[...logos, ...logos].map((logo, i) => (
                  <div key={`${logo.alt}-${i}`} className="flex items-center justify-center min-w-[64px] h-8 mx-5">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={52}
                      height={24}
                      className="max-h-5 w-auto grayscale opacity-35 hover:opacity-60 transition-opacity duration-200"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEM SECTION ──────────────────────────────────────── */}
        <ProblemSection />

        {/* ── WHAT WE DO ───────────────────────────────────────────── */}
        <section className="border-t border-[#EAEAE6] bg-[#FAFAF8] py-20 px-5 sm:px-8">
          <div className="max-w-7xl mx-auto lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-5">The answer</p>
                <h2
                  className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-tight tracking-[-0.03em] text-[#0C0C0C]"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  One platform for every billing problem your product faces.
                </h2>
                <p className="mt-5 text-[15px] text-[#777] leading-relaxed font-light max-w-xs">
                  Ship billing in days, not months. No need to stitch together five different tools or own infrastructure your team will maintain forever.
                </p>
              </div>
              <div className="space-y-8 pt-1">
                {[
                  {
                    num: "01",
                    title: "Complete billing backend, out of the box",
                    body: "Pricing plans, subscription engine, proration, dunning, PDF invoices, and a merchant portal. Pre-built. Integrate in days, not quarters.",
                  },
                  {
                    num: "02",
                    title: "Embedded checkout that stays in your product",
                    body: "A fully in-product checkout flow with no external redirect, no hosted page. Your customers pay without leaving your app.",
                  },
                  {
                    num: "03",
                    title: "Multi-currency from day one, every market",
                    body: "Launch in a new country without rebuilding your billing layer. Currency, local payment methods, and tax handling are already there.",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex items-start gap-4">
                    <span className="text-[12px] text-[#CCC] font-medium tracking-wider mt-0.5 w-5 shrink-0">{item.num}</span>
                    <div>
                      <h3 className="text-[15px] font-medium text-[#0C0C0C] mb-1.5">{item.title}</h3>
                      <p className="text-[15px] text-[#777] leading-relaxed font-light">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ── FROM COMPLEX TO SIMPLE ───────────────────────────────── */}
        <div id="how-it-works">
          <CodeComparisonSection />
        </div>

        {/* ── E2E OPERATIONS ───────────────────────────────────────── */}
        <section className="bg-white border-t border-[#EAEAE6] py-20 px-5 sm:px-8">
          <div className="max-w-7xl mx-auto lg:px-8">
            {/* Header */}
            <div className="mb-14">
              <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-5">Platform</p>
              <h2
                className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-tight tracking-[-0.03em] text-[#0C0C0C] max-w-lg"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Built for E2E Business Operations
              </h2>
              <p className="mt-4 text-[15px] text-[#777] max-w-md leading-relaxed font-light">
                Every billing and payment workflow your business runs, tracked and managed from one place.
              </p>
            </div>

            {/* Bento grid */}
            <div className="grid lg:grid-cols-12 gap-3">
              {/* Merchant Collections */}
              <div className="lg:col-span-6">
                <div className="group overflow-hidden rounded-2xl border border-[#EAEAE6] bg-[#FAFAF8] hover:border-[#D5D5D0] transition-colors duration-200">
                  <div className="h-56 lg:h-72 relative">
                    <Image
                      src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/merchant-settlement.png"
                      alt="Merchant Collections"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="px-6 py-5 border-t border-[#EAEAE6]">
                    <h3 className="text-[15px] font-medium text-[#0C0C0C]">Merchant Collections</h3>
                    <p className="mt-1 text-sm text-[#888] leading-relaxed font-light">Create invoices and payment links globally. Track collection status in real time.</p>
                  </div>
                </div>
              </div>

              {/* Business Disbursements */}
              <div className="lg:col-span-6">
                <div className="group overflow-hidden rounded-2xl border border-[#EAEAE6] bg-[#FAFAF8] hover:border-[#D5D5D0] transition-colors duration-200">
                  <div className="h-56 lg:h-72 relative">
                    <Image
                      src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/enterprise-payouts.png"
                      alt="Business Disbursements"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="px-6 py-5 border-t border-[#EAEAE6]">
                    <h3 className="text-[15px] font-medium text-[#0C0C0C]">Business Disbursements</h3>
                    <p className="mt-1 text-sm text-[#888] leading-relaxed font-light">Manage and track outbound payment batches to vendors and suppliers worldwide.</p>
                  </div>
                </div>
              </div>

              {/* Workforce Coordination */}
              <div className="lg:col-span-4">
                <div className="group flex flex-col overflow-hidden rounded-2xl border border-[#EAEAE6] bg-[#FAFAF8] hover:border-[#D5D5D0] transition-colors duration-200 h-full">
                  <div className="h-44 relative shrink-0">
                    <Image src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/global-payroll.png" alt="Workforce Coordination" fill className="object-cover object-top" />
                  </div>
                  <div className="px-5 py-4 border-t border-[#EAEAE6] flex-1">
                    <h3 className="text-[15px] font-medium text-[#0C0C0C]">Workforce Coordination</h3>
                    <p className="mt-1 text-sm text-[#888] leading-relaxed font-light">Coordinate contractor and team payments across 150+ countries from one dashboard.</p>
                  </div>
                </div>
              </div>

              {/* Smart Invoice */}
              <div className="lg:col-span-4">
                <div className="group flex flex-col overflow-hidden rounded-2xl border border-[#EAEAE6] bg-[#FAFAF8] hover:border-[#D5D5D0] transition-colors duration-200 h-full">
                  <div className="h-44 relative shrink-0">
                    <Image src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/invoice-payment.png" alt="Smart Invoice" fill className="object-cover object-top" />
                  </div>
                  <div className="px-5 py-4 border-t border-[#EAEAE6] flex-1">
                    <h3 className="text-[15px] font-medium text-[#0C0C0C]">Smart Invoice</h3>
                    <p className="mt-1 text-sm text-[#888] leading-relaxed font-light">Automated invoicing with multi-currency support and PDF export.</p>
                  </div>
                </div>
              </div>

              {/* Multi-rail Billing */}
              <div className="lg:col-span-4">
                <div className="group flex flex-col overflow-hidden rounded-2xl border border-[#EAEAE6] bg-[#FAFAF8] hover:border-[#D5D5D0] transition-colors duration-200 h-full">
                  <div className="h-44 relative shrink-0">
                    <Image src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/stablecoin-orchestration.png" alt="Multi-rail Billing" fill className="object-cover object-top" />
                  </div>
                  <div className="px-5 py-4 border-t border-[#EAEAE6] flex-1">
                    <h3 className="text-[15px] font-medium text-[#0C0C0C]">Multi-rail Billing</h3>
                    <p className="mt-1 text-sm text-[#888] leading-relaxed font-light">Support card, local payment methods, and stablecoin on the same invoice. Let clients choose.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="relative border-t border-[#EAEAE6] overflow-hidden">
          {/* World map — full bleed, properly visible */}
          <Image
            src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/world-dotted.png"
            alt=""
            fill
            className="object-cover object-center opacity-[0.07]"
          />
          {/* Subtle vignette over the map */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF8] via-transparent to-[#FAFAF8] opacity-60" />

          <div className="relative py-32 px-5 sm:px-8 text-center">
            <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-7">Get started</p>
            <h2
              className="text-[clamp(2.2rem,5vw,4rem)] font-light leading-tight tracking-[-0.04em] text-[#0C0C0C] mx-auto mb-6"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif", maxWidth: "640px" }}
            >
              Ready to Transform
              <br />
              <span className="italic">Your Business?</span>
            </h2>
            <p className="text-[15px] text-[#777] leading-relaxed mb-10 font-light mx-auto" style={{ maxWidth: "400px" }}>
              Join businesses worldwide that manage their billing and payment operations with Paymonei. Simpler, faster, with less overhead.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="https://app.paymonei.com/auth/register">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0C0C0C] text-white text-sm font-medium hover:bg-[#1a1a1a] transition-colors duration-150 cursor-pointer">
                  Create your account
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link href="https://app.paymonei.com/auth/login">
                <span className="inline-flex items-center px-6 py-3 rounded-full text-sm text-[#555] border border-[#E5E5E2] hover:border-[#ccc] hover:text-[#0C0C0C] bg-white/80 backdrop-blur-sm transition-colors duration-150 cursor-pointer">
                  Sign in
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
