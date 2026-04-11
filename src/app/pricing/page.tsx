import Link from "next/link";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Billing & Payment Operations Software | Paymonei",
  description:
    "Straightforward pricing for billing and payment workflow software. Start free, scale when ready. No hidden fees.",
  keywords: [
    "billing software pricing",
    "invoicing software cost",
    "payment operations software pricing",
    "business payment software plans",
  ],
  openGraph: {
    title: "Paymonei Pricing — Billing & Payment Software",
    description:
      "Straightforward pricing for billing and payment workflow software. Start free, scale when ready.",
    url: "https://paymonei.com/pricing",
    siteName: "Paymonei",
    type: "website",
    images: [
      {
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paymonei Pricing",
      },
    ],
  },
  alternates: { canonical: "https://paymonei.com/pricing" },
  robots: { index: true, follow: true },
};

// ── Pricing model ──────────────────────────────────────────────────────────
//
// Framing: Software platform fee + per-transaction software service fee.
// We are NOT charging interchange, MDR, or payment processing fees.
// The fee is for using the software layer (API calls, invoice generation,
// workflow orchestration). The licensed infrastructure costs are absorbed
// into the service fee, identical to how Chargebee/Maxio/Paddle price.
//
// This keeps us clearly in "software fee" territory, not "payment processing fee."

const plans = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For teams getting started",
    price: null,
    priceLabel: "Free",
    priceSub: "Up to $10K in billing volume",
    cta: "Start for free",
    ctaHref: "https://app.paymonei.com/auth/register",
    ctaPrimary: false,
    fees: [
      { label: "Platform fee", value: "$0 / month" },
      { label: "Software service fee", value: "1.8% per transaction" },
      { label: "Invoices", value: "50 free / month" },
      { label: "Payment status tracking", value: "Included" },
      { label: "API access", value: "Full" },
    ],
    includes: [
      "Invoice creation & PDF export",
      "Payment link generation",
      "Webhook notifications",
      "Dashboard & basic analytics",
      "Community support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For scaling operations",
    price: 299,
    priceLabel: "$299",
    priceSub: "per month",
    cta: "Get started",
    ctaHref: "https://app.paymonei.com/auth/register?plan=growth",
    ctaPrimary: true,
    fees: [
      { label: "Platform fee", value: "$299 / month" },
      { label: "Software service fee", value: "1.0% per transaction" },
      { label: "Invoices", value: "Unlimited" },
      { label: "Payment status tracking", value: "Included" },
      { label: "API access", value: "Full + priority rate limits" },
    ],
    includes: [
      "Everything in Starter",
      "Multi-currency invoice support",
      "Advanced analytics & reporting",
      "Subscription billing workflows",
      "Priority email support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For high-volume businesses",
    price: null,
    priceLabel: "Custom",
    priceSub: "Talk to us",
    cta: "Contact sales",
    ctaHref: "mailto:sales@paymonei.com",
    ctaPrimary: false,
    fees: [
      { label: "Platform fee", value: "Custom" },
      { label: "Software service fee", value: "Negotiated" },
      { label: "Invoices", value: "Unlimited" },
      { label: "Payment status tracking", value: "Included" },
      { label: "API access", value: "Dedicated infrastructure" },
    ],
    includes: [
      "Everything in Growth",
      "Dedicated account manager",
      "Custom SLA agreements",
      "White-label dashboard option",
      "Volume-based fee schedules",
      "24/7 support",
    ],
  },
];

const faqs = [
  {
    q: "What does the 'software service fee' cover?",
    a: "The fee covers use of Paymonei's software layer — API calls, invoice generation, payment link creation, webhook delivery, and workflow orchestration. Payment execution is performed by our licensed infrastructure partners. We charge for the software, not for moving money.",
  },
  {
    q: "Is there a setup fee or contract?",
    a: "No setup fees, no contracts. Starter is free indefinitely. Growth is month-to-month. You can cancel or change plans at any time.",
  },
  {
    q: "What happens after I hit $10K in billing volume on Starter?",
    a: "The 1.8% software service fee still applies, and you can continue using the platform. There is no hard cutoff — you can upgrade to Growth for lower fees and additional workflow features when it makes sense.",
  },
  {
    q: "Do you handle the actual payment processing?",
    a: "No. Paymonei is software. We generate invoices, payment links, and coordinate workflows. The actual fund movement is executed by our licensed financial infrastructure partners. This means your contract is with a regulated institution for the financial layer.",
  },
  {
    q: "What currencies and geographies are supported?",
    a: "Our software supports multi-currency invoice creation and payment link generation across 150+ countries. Supported settlement currencies and local payment methods depend on the underlying infrastructure partners active in your region.",
  },
  {
    q: "Can I add my own markup on top of Paymonei's fees?",
    a: "Yes. Enterprise customers can configure custom fee schedules, including adding a software margin on top of the base fee for their own clients.",
  },
];

// Comparison table rows
const comparison = [
  { feature: "Monthly platform fee", starter: "$0", growth: "$299", enterprise: "Custom" },
  { feature: "Billing volume included", starter: "Up to $10K", growth: "Unlimited", enterprise: "Unlimited" },
  { feature: "Software service fee", starter: "1.8%", growth: "1.0%", enterprise: "Negotiated" },
  { feature: "Invoices per month", starter: "50 free", growth: "Unlimited", enterprise: "Unlimited" },
  { feature: "Payment links", starter: true, growth: true, enterprise: true },
  { feature: "API access", starter: true, growth: true, enterprise: true },
  { feature: "Webhook notifications", starter: true, growth: true, enterprise: true },
  { feature: "Dashboard & analytics", starter: "Basic", growth: "Advanced", enterprise: "Custom" },
  { feature: "Multi-currency support", starter: false, growth: true, enterprise: true },
  { feature: "Subscription workflows", starter: false, growth: true, enterprise: true },
  { feature: "Priority support", starter: false, growth: true, enterprise: true },
  { feature: "Dedicated account manager", starter: false, growth: false, enterprise: true },
  { feature: "Custom SLA", starter: false, growth: false, enterprise: true },
  { feature: "White-label option", starter: false, growth: false, enterprise: true },
];

function Check() {
  return (
    <svg className="w-4 h-4 text-[#0C0C0C]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Dash() {
  return <span className="text-[#DDD] text-sm">—</span>;
}

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <div className="flex justify-center"><Check /></div>;
  if (value === false) return <div className="flex justify-center"><Dash /></div>;
  return <span className="text-[15px] text-[#555]">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
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

        {/* ── HERO ────────────────────────────────────────────────── */}
        <section className="pt-32 pb-16 px-5 sm:px-8 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto lg:px-8">
            <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-6 font-medium">Pricing</p>
            <h1
              className="text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.08] tracking-[-0.04em] text-[#0C0C0C] max-w-2xl"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Software pricing.<br />
              <span className="italic">No surprises.</span>
            </h1>
            <p className="mt-6 text-[16px] text-[#666] leading-relaxed font-light max-w-md">
              You pay for the software layer. Payment execution is handled by licensed infrastructure partners — not by us.
            </p>
          </div>
        </section>

        {/* ── PLANS ───────────────────────────────────────────────── */}
        <section className="pb-20 px-5 sm:px-8 border-t border-[#EAEAE6]">
          <div className="max-w-7xl mx-auto lg:px-8">
            <div className="grid lg:grid-cols-3 gap-px bg-[#EAEAE6] mt-0">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-[#FAFAF8] flex flex-col"
                >
                  {/* Plan header */}
                  <div className="px-8 pt-10 pb-8 border-b border-[#EAEAE6]">
                    <p className="text-[12px] tracking-[0.12em] uppercase text-[#999] font-medium mb-3">{plan.name}</p>
                    <p className="text-[15px] text-[#777] font-light mb-6">{plan.tagline}</p>
                    <div className="mb-1">
                      <span
                        className="text-[2.8rem] font-light tracking-[-0.04em] text-[#0C0C0C]"
                        style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                      >
                        {plan.priceLabel}
                      </span>
                    </div>
                    <p className="text-[13px] text-[#AAA] font-light">{plan.priceSub}</p>
                  </div>

                  {/* Fee schedule */}
                  <div className="px-8 py-7 border-b border-[#EAEAE6]">
                    <p className="text-[11px] tracking-[0.1em] uppercase text-[#BBB] font-medium mb-4">Fee schedule</p>
                    <div className="space-y-3">
                      {plan.fees.map((fee) => (
                        <div key={fee.label} className="flex items-baseline justify-between gap-4">
                          <span className="text-[14px] text-[#777] font-light">{fee.label}</span>
                          <span className="text-[14px] text-[#0C0C0C] font-medium shrink-0">{fee.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="px-8 py-7 flex-1">
                    <p className="text-[11px] tracking-[0.1em] uppercase text-[#BBB] font-medium mb-4">Includes</p>
                    <ul className="space-y-2.5">
                      {plan.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <svg className="w-3.5 h-3.5 text-[#0C0C0C] shrink-0 mt-[3px]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[14px] text-[#555] font-light leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="px-8 pb-10">
                    <Link href={plan.ctaHref}>
                      <span
                        className={`block w-full text-center px-5 py-3 rounded-full text-sm font-medium transition-colors duration-150 cursor-pointer ${
                          plan.ctaPrimary
                            ? "bg-[#0C0C0C] text-white hover:bg-[#222]"
                            : "border border-[#E5E5E2] text-[#555] hover:border-[#ccc] hover:text-[#0C0C0C] bg-white"
                        }`}
                      >
                        {plan.cta}
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Fee note */}
            <p className="mt-5 text-[13px] text-[#BBB] font-light leading-relaxed max-w-2xl">
              Software service fees are charged for use of Paymonei&apos;s software layer — invoice generation, payment link creation, and workflow orchestration. Payment execution is performed by licensed third-party financial institutions.
            </p>
          </div>
        </section>

        {/* ── COMPARISON TABLE ─────────────────────────────────────── */}
        <section className="py-20 px-5 sm:px-8 border-t border-[#EAEAE6] bg-white">
          <div className="max-w-7xl mx-auto lg:px-8">
            <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-5 font-medium">Compare plans</p>
            <h2
              className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-tight tracking-[-0.03em] text-[#0C0C0C] mb-12"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Everything, side by side.
            </h2>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#EAEAE6]">
                    <th className="text-left py-4 pr-8 text-[13px] text-[#AAA] font-medium w-2/5">Feature</th>
                    <th className="text-center py-4 px-4 text-[13px] font-medium text-[#0C0C0C] w-1/5">Starter</th>
                    <th className="text-center py-4 px-4 text-[13px] font-medium text-[#0C0C0C] w-1/5">Growth</th>
                    <th className="text-center py-4 px-4 text-[13px] font-medium text-[#0C0C0C] w-1/5">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-[#F5F5F2] ${i % 2 === 0 ? "bg-transparent" : "bg-[#FAFAF8]/50"}`}
                    >
                      <td className="py-3.5 pr-8 text-[15px] text-[#555] font-light">{row.feature}</td>
                      <td className="py-3.5 px-4 text-center"><Cell value={row.starter} /></td>
                      <td className="py-3.5 px-4 text-center"><Cell value={row.growth} /></td>
                      <td className="py-3.5 px-4 text-center"><Cell value={row.enterprise} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="py-20 px-5 sm:px-8 border-t border-[#EAEAE6] bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-5 font-medium">FAQ</p>
                <h2
                  className="text-[clamp(1.8rem,3vw,2.4rem)] font-light leading-tight tracking-[-0.03em] text-[#0C0C0C]"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  Common questions.
                </h2>
                <p className="mt-4 text-[15px] text-[#777] font-light leading-relaxed">
                  Anything else? Email us at{" "}
                  <a href="mailto:support@paymonei.com" className="text-[#0C0C0C] underline underline-offset-2">
                    support@paymonei.com
                  </a>
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="divide-y divide-[#EAEAE6]">
                  {faqs.map((faq) => (
                    <details key={faq.q} className="group py-6">
                      <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                        <span className="text-[16px] font-medium text-[#0C0C0C] leading-snug">{faq.q}</span>
                        <svg
                          className="w-4 h-4 text-[#AAA] shrink-0 mt-1 transition-transform group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-4 text-[15px] text-[#666] font-light leading-relaxed">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="py-24 px-5 sm:px-8 border-t border-[#EAEAE6] bg-white">
          <div className="max-w-7xl mx-auto lg:px-8 text-center">
            <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-7 font-medium">Get started</p>
            <h2
              className="text-[clamp(2.2rem,5vw,4rem)] font-light leading-tight tracking-[-0.04em] text-[#0C0C0C] mx-auto mb-6"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif", maxWidth: "560px" }}
            >
              Start free.<br />
              <span className="italic">Upgrade when ready.</span>
            </h2>
            <p className="text-[16px] text-[#777] font-light mb-10 mx-auto" style={{ maxWidth: "380px" }}>
              The Starter plan is free with no time limit. No credit card required.
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
              <Link href="mailto:sales@paymonei.com">
                <span className="inline-flex items-center px-6 py-3 rounded-full text-sm text-[#555] border border-[#E5E5E2] hover:border-[#ccc] hover:text-[#0C0C0C] bg-white transition-colors duration-150 cursor-pointer">
                  Talk to sales
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
