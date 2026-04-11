import type { Metadata } from "next";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import Link from "next/link";
import {
  FileText,
  Clock,
  Calculator,
  RefreshCcw,
  Globe,
  BellRing,
  CheckCircle2,
  Check
} from "lucide-react";

export const metadata: Metadata = {
  title: "Invoicing Software — Automated Billing | Paymonei",
  description:
    "Generate, send, and reconcile professional invoices instantly. Intuitive billing software designed to accelerate your operational workflow.",
  keywords: [
    "invoicing software",
    "automated billing software",
    "invoice generator",
    "smart invoices",
    "multi-currency invoices",
    "business billing platform",
  ],
  openGraph: {
    title: "Invoicing Software — Automated Billing | Paymonei",
    description:
      "Generate, send, and reconcile professional invoices instantly. Intuitive billing software designed to accelerate your operational workflow.",
    url: "https://paymonei.com/billing/invoicing",
    siteName: "Paymonei",
    type: "website",
    images: [
      {
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paymonei Invoicing Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoicing Software — Automated Billing | Paymonei",
    description:
      "Generate, send, and reconcile professional invoices instantly. Intuitive billing software designed to accelerate your operational workflow.",
    images: ["https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png"],
  },
};

export default function InvoicingPage() {
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
              <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-6 font-medium">Invoicing Software</p>
              <h1
                className="text-[clamp(2.8rem,5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.04em] text-[#0C0C0C] mb-6"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Invoicing, automated.<br />
                <span className="italic text-[#666]">Built for speed.</span>
              </h1>
              <p className="text-[16px] text-[#666] leading-relaxed font-light mb-10">
                Generate, dispatch, and track professional invoices in seconds. Our billing engine handles the operational workflow, while integrated payment buttons smoothly route customers to our licensed execution partners.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                <Link href="https://app.paymonei.com/auth/register">
                  <span className="inline-flex flex-1 items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0C0C0C] text-white text-[15px] font-medium hover:bg-[#222] transition-colors cursor-pointer w-full">
                    Create your first invoice
                    <Check className="w-4 h-4 opacity-70" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Invoice Mockup Component */}
            <div className="relative border border-[#EAEAE6] rounded-xl bg-white shadow-sm p-8 md:p-12 overflow-hidden w-full max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 border-b border-[#F5F5F2] pb-10">
                 <div>
                    <div className="w-12 h-12 bg-[#F5F5F2] rounded-lg border border-[#EAEAE6] mb-4"></div>
                    <p className="text-[16px] font-medium text-[#0C0C0C]">Acme Corporation</p>
                    <p className="text-[13px] text-[#777]">123 Main Street<br />San Francisco, CA 94105</p>
                 </div>
                 <div className="text-left md:text-right">
                    <p className="text-[28px] font-light text-[#0C0C0C] mb-2 tracking-tight">INVOICE</p>
                    <p className="text-[13px] text-[#777] font-mono mb-1">#INV-2026-0411</p>
                    <p className="text-[13px] text-[#777] mb-4">Issued: Apr 11, 2026</p>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-orange-50 border border-orange-100 text-orange-700 text-[11px] uppercase tracking-wider font-medium">
                      <Clock className="w-3 h-3" /> Due in 14 days
                    </div>
                 </div>
              </div>

              {/* Line items table */}
              <div className="w-full mb-10 overflow-x-auto">
                 <table className="w-full min-w-[500px]">
                   <thead>
                     <tr className="border-b border-[#EAEAE6]">
                       <th className="text-left py-3 text-[12px] uppercase tracking-wider text-[#999] font-medium">Description</th>
                       <th className="text-right py-3 text-[12px] uppercase tracking-wider text-[#999] font-medium w-24">Qty</th>
                       <th className="text-right py-3 text-[12px] uppercase tracking-wider text-[#999] font-medium w-32">Rate</th>
                       <th className="text-right py-3 text-[12px] uppercase tracking-wider text-[#999] font-medium w-32">Amount</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr className="border-b border-[#F5F5F2]">
                       <td className="py-4">
                         <p className="text-[14px] font-medium text-[#0C0C0C]">Enterprise Platform Access</p>
                         <p className="text-[12px] text-[#777] mt-0.5">Annual subscription fee (Pro tier)</p>
                       </td>
                       <td className="text-right py-4 text-[14px] text-[#555]">1</td>
                       <td className="text-right py-4 text-[14px] text-[#555]">$1,200.00</td>
                       <td className="text-right py-4 text-[14px] font-medium text-[#0C0C0C]">$1,200.00</td>
                     </tr>
                     <tr className="border-b border-[#F5F5F2]">
                       <td className="py-4">
                         <p className="text-[14px] font-medium text-[#0C0C0C]">Implementation Support</p>
                         <p className="text-[12px] text-[#777] mt-0.5">Dedicated onboarding specialist (Hours)</p>
                       </td>
                       <td className="text-right py-4 text-[14px] text-[#555]">10</td>
                       <td className="text-right py-4 text-[14px] text-[#555]">$150.00</td>
                       <td className="text-right py-4 text-[14px] font-medium text-[#0C0C0C]">$1,500.00</td>
                     </tr>
                   </tbody>
                 </table>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                 <div className="w-full md:w-auto">
                   <p className="text-[12px] font-medium text-[#999] uppercase tracking-wider mb-2">Payment terms</p>
                   <p className="text-[13px] text-[#777] max-w-xs">
                     Please pay within 14 days of receiving this invoice. To pay via credit card or transfer, use the secure link sent via email.
                   </p>
                 </div>
                 <div className="w-full md:w-64">
                   <div className="flex justify-between items-center mb-2">
                     <p className="text-[13px] text-[#777]">Subtotal</p>
                     <p className="text-[13px] text-[#333] font-medium">$2,700.00</p>
                   </div>
                   <div className="flex justify-between items-center mb-4 border-b border-[#EAEAE6] pb-4">
                     <p className="text-[13px] text-[#777]">Tax (0%)</p>
                     <p className="text-[13px] text-[#333] font-medium">$0.00</p>
                   </div>
                   <div className="flex justify-between items-center">
                     <p className="text-[14px] font-medium text-[#0C0C0C]">Total Due</p>
                     <p className="text-[24px] font-medium text-[#0C0C0C] tracking-tight">$2,700.00</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES GRID ──────────────────────────────────────────────── */}
        <section className="py-24 px-5 sm:px-8 border-b border-[#EAEAE6] bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto lg:px-8">
            <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-5 font-medium">The Billing Engine</p>
            <h2
              className="text-[clamp(2rem,3.5vw,2.8rem)] font-light leading-tight tracking-[-0.03em] text-[#0C0C0C] mb-16"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif", maxWidth: "600px" }}
            >
              Stop chasing unpaid work.<br />
              <span className="italic text-[#666]">Let software do it.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#EAEAE6]">
              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <FileText className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">Line-item precision</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  Build catalogs of your standard items and services to construct accurate, robust invoices in seconds.
                </p>
              </div>

              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <Globe className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">Global localization</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  Orchestrate billing across borders. Invoices correctly format dates, currencies, and local compliance requirements.
                </p>
              </div>

              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <Calculator className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">Tax calculation logic</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  Easily inject VAT, GST, or custom regional tax strings at the line-item or invoice-total level.
                </p>
              </div>

              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <BellRing className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">Smart reminders</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  Configure automated email drip campaigns to politely follow up on aging or overdue records.
                </p>
              </div>

              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <RefreshCcw className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">Automated reconciliation</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  When a customer clicks the embedded payment link, the invoice automatically marks itself as paid upon settlement.
                </p>
              </div>

              <div className="bg-[#FAFAF8] p-10 flex flex-col">
                <CheckCircle2 className="w-5 h-5 text-[#777] mb-6" />
                <h3 className="text-[16px] font-medium text-[#0C0C0C] mb-3">Client portals</h3>
                <p className="text-[14px] leading-relaxed text-[#777] font-light">
                  Allow your frequent buyers to log in, review billing histories, and download past PDF artifacts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── API SHOWCASE ─────────────────────────────────────────────── */}
        <section className="py-24 px-5 sm:px-8 border-b border-[#EAEAE6] bg-white">
          <div className="max-w-7xl mx-auto lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-5 font-medium">Headless Operations</p>
                  <h2
                    className="text-[clamp(2rem,3.5vw,2.8rem)] font-light leading-tight tracking-[-0.03em] text-[#0C0C0C] mb-6"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    API-driven invoicing.
                  </h2>
                  <p className="text-[16px] text-[#666] leading-relaxed font-light mb-8 max-w-md">
                    Hook our billing logic directly into your internal tooling. Trigger invoice generation dynamically when milestones are reached inside your core CRM or backend.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Trigger generation via webhook", "Fetch PDF blobs programmatically", "Inject custom un-structured metadata"].map(item => (
                      <li key={item} className="flex items-start gap-3">
                         <Check className="w-4 h-4 text-[#0C0C0C] mt-0.5 opacity-60" />
                         <span className="text-[14px] text-[#555] font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="https://docs.paymonei.com/api/invoices">
                    <span className="inline-flex font-medium text-[14px] text-[#0C0C0C] border-b border-[#0C0C0C] pb-0.5 hover:opacity-70 transition-opacity">
                      Read the API documentation →
                    </span>
                  </Link>
               </div>
               
               <div className="bg-[#0C0C0C] rounded-xl p-8 overflow-hidden shadow-xl">
                 <div className="flex gap-2 mb-4 pb-4 border-b border-white/10">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                 </div>
<pre className="text-[12px] text-gray-300 font-mono leading-relaxed overflow-x-auto">
<code>{`curl -X POST https://api.paymonei.com/v1/invoices \\
  -H "Authorization: Bearer sec_live_xxx" \\
  -d '{
    "customer": "cus_9s6a8x",
    "due_date": "2026-04-25",
    "line_items": [
      {
        "price_data": {
          "currency": "usd",
          "unit_amount": 120000
        },
        "quantity": 1
      }
    ],
    "auto_advance": true
  }'`}</code>
</pre>
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
