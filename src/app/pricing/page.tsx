"use client";

import Link from "next/link";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Note: metadata is exported from the layout or a sibling server component.
// This page uses "use client" for Radix tooltip interactivity.
// Keeping the metadata object here as a reference for copy/paste into layout.
const _metadataRef = {
  title: "Pricing: Billing & Payment Operations Software | Paymonei",
  description:
    "Straightforward pricing for billing and payment workflow software. Start free, scale when ready. No hidden fees.",
  keywords: [
    "billing software pricing",
    "invoicing software cost",
    "payment operations software pricing",
    "business payment software plans",
  ],
  openGraph: {
    title: "Paymonei Pricing: Billing & Payment Software",
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
void _metadataRef; // suppress unused warning

// ── Pricing model (comments only; no runtime effect) ────────────────────────
//
// Framing: Software platform fee + per-volume software service fee.
// We are NOT charging interchange, MDR, or payment processing fees.
// Licensed infrastructure costs are absorbed by execution partners.
//
// Free tier: 0% software fee on first $10K/month billing volume.
// Above $10K: 1.5% software fee (software fee, not a processing fee).
// Legally consistent with ToS and the Chargebee/Maxio billing model.

const plans = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For teams getting started",
    price: null,
    priceLabel: "Free",
    priceSub: "No time limit. No credit card.",
    cta: "Start for free",
    ctaHref: "https://app.paymonei.com/auth/register",
    ctaPrimary: false,
    softwareFee: "0% up to $10K / mo",
    entities: "1 entity",
    includes: [
      "Unlimited invoices & PDF export",
      "Unlimited payment links",
      "Hosted payment page per invoice",
      "Multi-currency invoicing",
      "Subscription & recurring billing",
      "Dunning & payment retry (standard)",
      "Customer self-serve portal",
      "Stablecoin payment acceptance",
      "AR dashboard (current month)",
      "Email ticket support",
    ],
  },
  {
    id: "core",
    name: "Core",
    tagline: "For growing operations",
    price: 59,
    priceLabel: "$59",
    priceSub: "per month, cancel anytime",
    cta: "Get started",
    ctaHref: "https://app.paymonei.com/auth/register?plan=core",
    ctaPrimary: false,
    softwareFee: "1.2% software fee",
    entities: "Up to 3 entities",
    includes: [
      "Everything in Starter",
      "Up to 3 entities",
      "6 months AR & revenue analytics",
      "Webhook management",
      "Priority email ticket support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For established businesses",
    price: 249,
    priceLabel: "$249",
    priceSub: "per month, cancel anytime",
    cta: "Get started",
    ctaHref: "https://app.paymonei.com/auth/register?plan=growth",
    ctaPrimary: true,
    softwareFee: "0.9% software fee",
    entities: "Up to 10 entities",
    includes: [
      "Everything in Core",
      "Up to 10 entities",
      "Advanced analytics (24 months)",
      "Configurable dunning per subscription",
      "Accounting (coming soon)",
      "Account manager",
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
    softwareFee: "Custom rate",
    entities: "Unlimited entities",
    includes: [
      "Everything in Growth",
      "White-label dashboard (custom domain & branding)",
      "Dedicated account manager",
      "Custom SLA (99.95% uptime commitment)",
      "Data Processing Agreement (GDPR / PDPA)",
      "24/7 Slack & phone support",
      "Volume-based software fee schedules",
    ],
  },
];

const faqs = [
  {
    q: "What does the 'software service fee' cover?",
    a: "The fee covers use of Paymonei's software layer: API calls, invoice generation, payment link creation, webhook delivery, subscription orchestration, and workflow automation. Payment execution is performed by our licensed infrastructure partners. We charge for the software, not for moving money.",
  },
  {
    q: "Why is the Starter plan free up to $10K / month?",
    a: "We want businesses to build real invoice history and verify that Paymonei fits their workflow before committing to a paid plan. The $10K threshold covers the vast majority of early-stage businesses. Most grow into the Core plan naturally once they need multiple entities or deeper analytics.",
  },
  {
    q: "Is there a setup fee or contract?",
    a: "No setup fees, no contracts. Starter is free indefinitely. Core and Growth are month-to-month with no minimum commitment. You can cancel or change plans at any time.",
  },
  {
    q: "What is the difference between Core ($59) and Growth ($249)?",
    a: "Core adds up to 3 entities, 6 months of AR analytics, and webhook management on top of the free Starter features. Growth scales to 10 entities, 24 months of analytics, configurable dunning per subscription, an account manager, and access to our built-in accounting tools when available.",
  },
  {
    q: "Do you handle the actual payment processing?",
    a: "No. Paymonei is software. We generate invoices, payment links, and coordinate billing workflows. The actual movement of funds is executed by our licensed financial infrastructure partners. Your contract for financial services is with a regulated institution, not with us.",
  },
  {
    q: "What currencies and geographies are supported?",
    a: "Our software supports multi-currency invoice creation and payment link generation across 150+ countries. Supported settlement currencies and local payment methods depend on the underlying licensed infrastructure partners active in your region.",
  },
  {
    q: "Can I accept stablecoin payments (USDC / USDT)?",
    a: "Yes. Merchants can enable USDC and USDT as payment options on their invoices and payment pages. Settlement is handled by our licensed infrastructure partners. Paymonei does not provide cryptocurrency exchange or custody services.",
  },
  {
    q: "What is the working capital eligibility feature?",
    a: "Merchants with a verified account and consistent invoice activity may become eligible for working capital facilities through our licensed lending partners. This is an opt-in referral service. Paymonei does not assess creditworthiness or make lending decisions. You are introduced directly to a licensed financial institution.",
  },
];

// Comparison table: 4-column (Starter / Core / Growth / Enterprise)
type ComparisonRow = {
  feature: string;
  tooltip: string;
  starter: boolean | string;
  core: boolean | string;
  growth: boolean | string;
  enterprise: boolean | string;
};

const comparison: ComparisonRow[] = [
  {
    feature: "Monthly platform fee",
    tooltip: "Fixed monthly cost. No contracts or minimums.",
    starter: "$0", core: "$59", growth: "$249", enterprise: "Custom",
  },
  {
    feature: "Software service fee",
    tooltip: "Charged on your billing volume. Covers the software, not the payment itself.",
    starter: "0% up to $10K", core: "1.2%", growth: "0.9%", enterprise: "Custom",
  },
  {
    feature: "Invoices per month",
    tooltip: "Unlimited on all plans. No caps, ever.",
    starter: "Unlimited", core: "Unlimited", growth: "Unlimited", enterprise: "Unlimited",
  },
  {
    feature: "Payment links",
    tooltip: "Send a link, get paid. No invoice needed.",
    starter: "Unlimited", core: "Unlimited", growth: "Unlimited", enterprise: "Unlimited",
  },
  {
    feature: "Entities (business profiles)",
    tooltip: "Separate billing accounts for each company or brand you operate.",
    starter: "1", core: "3", growth: "10", enterprise: "Unlimited",
  },
  {
    feature: "Customers & contacts",
    tooltip: "The number of clients and contacts you can store across all entities. Unlimited on all plans.",
    starter: "Unlimited", core: "Unlimited", growth: "Unlimited", enterprise: "Unlimited",
  },
  {
    feature: "Invoice builder & PDF export",
    tooltip: "Build invoices with line items and get a PDF automatically.",
    starter: true, core: true, growth: true, enterprise: true,
  },
  {
    feature: "Hosted payment page per invoice",
    tooltip: "Every invoice gets its own payment URL your client can open directly.",
    starter: true, core: true, growth: true, enterprise: true,
  },
  {
    feature: "Stablecoin payment acceptance",
    tooltip: "Accept USDC or USDT on invoices. No crypto expertise needed.",
    starter: true, core: true, growth: true, enterprise: true,
  },
  {
    feature: "API access & webhooks",
    tooltip: "Full API to build on top of Paymonei. Webhooks notify your systems in real time.",
    starter: true, core: true, growth: true, enterprise: true,
  },
  {
    feature: "AR dashboard & invoice aging",
    tooltip: "See what's paid, what's overdue, and how long invoices have been outstanding.",
    starter: "Current month", core: "6 months", growth: "24 months", enterprise: "Unlimited",
  },
  {
    feature: "Multi-currency invoicing",
    tooltip: "Invoice clients in multiple currencies from the same account.",
    starter: true, core: true, growth: true, enterprise: true,
  },
  {
    feature: "Subscription & recurring billing",
    tooltip: "Set up billing plans. Invoices go out automatically on your schedule.",
    starter: true, core: true, growth: true, enterprise: true,
  },
  {
    feature: "Dunning & payment retry",
    tooltip: "Auto-retry failed payments and send reminders so you get paid without chasing.",
    starter: "Standard", core: "Standard", growth: "Configurable", enterprise: "Configurable",
  },
  {
    feature: "Customer self-serve portal",
    tooltip: "Your clients can view invoices and check payment status without contacting you.",
    starter: true, core: true, growth: true, enterprise: true,
  },
  {
    feature: "Accounting",
    tooltip: "Built-in accounting and automated bookkeeping. Coming soon.",
    starter: "Coming soon", core: "Coming soon", growth: "Coming soon", enterprise: "Coming soon",
  },
  {
    feature: "Working capital referral eligibility",
    tooltip: "Consistent invoice history may qualify you for a working capital introduction. Opt-in only.",
    starter: true, core: true, growth: true, enterprise: true,
  },
  {
    feature: "White-label (custom domain & branding)",
    tooltip: "Payment pages and portals show your logo and domain, not Paymonei's.",
    starter: false, core: false, growth: false, enterprise: true,
  },
  {
    feature: "Account manager",
    tooltip: "A named person at Paymonei who handles your account and escalations.",
    starter: false, core: false, growth: true, enterprise: true,
  },
  {
    feature: "Custom SLA & DPA",
    tooltip: "Signed uptime guarantees and data processing agreements for your compliance needs.",
    starter: false, core: false, growth: false, enterprise: true,
  },
  {
    feature: "Support",
    tooltip: "Email ticket on Starter. Priority email ticket on Core. Email and account manager on Growth. Dedicated account manager on Enterprise.",
    starter: "Email ticket", core: "Priority email ticket", growth: "Email + account manager", enterprise: "Dedicated account manager",
  },
];

function Check() {
  return (
    <svg className="w-4 h-4 text-[#0C0C0C]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Dash() {
  return <span className="text-[#DDD] text-sm">&ndash;</span>;
}

function ComingSoon() {
  return (
    <span className="inline-flex items-center rounded-sm bg-[#F1F1EF] px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-[#787774]">
      Soon
    </span>
  );
}

function Cell({ value }: { value: boolean | string | undefined }) {
  if (value === undefined) return <div className="flex justify-center"><Dash /></div>;
  if (value === true) return <div className="flex justify-center"><Check /></div>;
  if (value === false) return <div className="flex justify-center"><Dash /></div>;
  if (value === "Coming soon") return <div className="flex justify-center"><ComingSoon /></div>;
  return <span className="text-[14px] text-[#555]">{value}</span>;
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
              You pay for the software layer. Payment execution is handled by licensed infrastructure partners, not by us.
            </p>
          </div>
        </section>

        {/* ── PLANS ───────────────────────────────────────────────── */}
        <section className="pb-20 px-5 sm:px-8 border-t border-[#EAEAE6]">
          <div className="max-w-7xl mx-auto lg:px-8">
            <div className="grid lg:grid-cols-4 gap-px bg-[#EAEAE6] mt-0">
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
                    <p className="text-[13px] text-[#AAA] font-light mb-5">{plan.priceSub}</p>
                    {/* Key specs: 2 lines only */}
                    <div className="flex flex-col gap-1 pt-4 border-t border-[#EAEAE6]">
                      <p className="text-[13px] text-[#555]">
                        <span className="text-[#AAA] font-light">Fee </span>
                        <span className="font-medium">{plan.softwareFee}</span>
                      </p>
                      <p className="text-[13px] text-[#555]">
                        <span className="text-[#AAA] font-light">Entities </span>
                        <span className="font-medium">{plan.entities}</span>
                      </p>
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
              Software service fees are charged for use of Paymonei&apos;s software layer: invoice generation, payment link creation, subscription orchestration, and workflow automation. Payment execution is performed by licensed third-party financial institutions. Paymonei is not a payment processor, bank, or financial institution.
            </p>
            <p className="mt-3 text-[13px] text-[#BBB] font-light leading-relaxed max-w-2xl">
              When customers pay by credit or debit card, payment processing fees charged by our licensed execution partners apply separately and are shown itemised at checkout. Stablecoin payments (USDC, USDT) incur only the software service fee above, plus applicable blockchain network fees (typically under $1).
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
            <TooltipProvider delayDuration={200}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#EAEAE6]">
                    <th className="text-left py-4 pr-6 text-[13px] text-[#AAA] font-medium w-[32%]">Feature</th>
                    <th className="text-center py-4 px-3 text-[13px] font-medium text-[#0C0C0C] w-[17%]">Starter</th>
                    <th className="text-center py-4 px-3 text-[13px] font-medium text-[#0C0C0C] w-[17%]">Core</th>
                    <th className="text-center py-4 px-3 text-[13px] font-medium text-[#0C0C0C] w-[17%]">Growth</th>
                    <th className="text-center py-4 px-3 text-[13px] font-medium text-[#0C0C0C] w-[17%]">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-[#F5F5F2] ${i % 2 === 0 ? "bg-transparent" : "bg-[#FAFAF8]/50"}`}
                    >
                      <td className="py-3.5 pr-6 text-[14px] text-[#555] font-light">
                        <span className="flex items-center gap-1.5">
                          {row.feature}
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button
                                type="button"
                                aria-label={`Info: ${row.feature}`}
                                className="shrink-0 text-[#CCC] hover:text-[#888] transition-colors duration-150 focus:outline-none"
                              >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="10" />
                                  <line x1="12" y1="16" x2="12" y2="12" />
                                  <line x1="12" y1="8" x2="12.01" y2="8" />
                                </svg>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent
                              side="right"
                              className="max-w-[260px] text-[12px] leading-relaxed bg-[#0C0C0C] text-white border-0"
                            >
                              {row.tooltip}
                            </TooltipContent>
                          </Tooltip>
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-center"><Cell value={row.starter} /></td>
                      <td className="py-3.5 px-3 text-center"><Cell value={row.core} /></td>
                      <td className="py-3.5 px-3 text-center"><Cell value={row.growth} /></td>
                      <td className="py-3.5 px-3 text-center"><Cell value={row.enterprise} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </TooltipProvider>
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
