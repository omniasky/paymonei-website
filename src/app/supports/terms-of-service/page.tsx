import type { Metadata } from "next";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Paymonei",
  description:
    "Terms of Service governing access to and use of the Paymonei billing and payment orchestration software platform.",
  openGraph: {
    title: "Terms of Service | Paymonei",
    description:
      "Terms of Service governing access to and use of the Paymonei billing and payment orchestration software platform.",
    url: "https://paymonei.com/supports/terms-of-service",
    siteName: "Paymonei",
    type: "website",
  },
};

// ─── Table of contents ────────────────────────────────────────────────────────

const toc = [
  { id: "introduction", label: "1. Introduction & Parties" },
  { id: "services", label: "2. Nature of the Services" },
  { id: "eligibility", label: "3. Merchant Eligibility & Registration" },
  { id: "obligations", label: "4. Merchant Obligations & Acceptable Use" },
  { id: "execution-partners", label: "5. Licensed Execution Partners" },
  { id: "fees", label: "6. Fees, Billing & Subscription" },
  { id: "ip", label: "7. Intellectual Property" },
  { id: "data-protection", label: "8. Data Protection & Privacy" },
  { id: "warranties", label: "9. Disclaimers of Warranties" },
  { id: "liability", label: "10. Limitation of Liability" },
  { id: "indemnification", label: "11. Indemnification" },
  { id: "termination", label: "12. Term, Suspension & Termination" },
  { id: "governing-law", label: "13. Governing Law & Disputes" },
  { id: "general", label: "14. General Provisions" },
  { id: "contact", label: "15. Contact" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TermsOfServicePage() {
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

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-16 px-5 sm:px-8 border-b border-[#EAEAE6]">
          <div className="max-w-7xl mx-auto lg:px-8">
            <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-5 font-medium">Legal</p>
            <h1
              className="text-[clamp(2.4rem,4vw,3.5rem)] font-light leading-[1.1] tracking-[-0.04em] text-[#0C0C0C] mb-5"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Terms of Service
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-[13px] text-[#999] font-light">
              <span>Effective date: <strong className="text-[#555] font-medium">11 April 2026</strong></span>
              <span className="hidden sm:block opacity-30">·</span>
              <span>Legal inquiries: <strong className="text-[#555] font-medium">legal@paymonei.com</strong></span>
            </div>
          </div>
        </section>

        {/* ── BODY ─────────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto lg:px-8 px-5 sm:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Sticky TOC sidebar */}
            <aside className="lg:w-56 shrink-0">
              <div className="sticky top-28">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#999] font-medium mb-4">On this page</p>
                <nav className="flex flex-col gap-1.5">
                  {toc.map(item => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-[13px] text-[#777] hover:text-[#0C0C0C] transition-colors font-light leading-snug"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <article className="flex-1 min-w-0 max-w-3xl">

              {/* ── Software-Only Shield Notice ── */}
              <div className="bg-[#F5F5F2] border border-[#EAEAE6] rounded-lg p-6 mb-12">
                <p className="text-[13px] font-medium text-[#0C0C0C] mb-2">Important Notice</p>
                <p className="text-[14px] text-[#555] leading-relaxed font-light">
                  Omniasky Technology Pte Ltd and PT Evora Vera Teknologi are <strong className="font-medium text-[#333]">software companies</strong>. Neither entity is a bank, financial institution, money services business, or virtual asset service provider. All financial execution services — including payment processing, fund movement, and settlement — are provided exclusively by our licensed third-party financial execution partners on a separate contractual basis.
                </p>
              </div>

              {/* ── Block 1: Introduction & Parties ── */}
              <Section id="introduction" title="1. Introduction & Parties">
                <p>
                  These Terms of Service (&ldquo;Terms&rdquo; or &ldquo;Agreement&rdquo;) govern access to and use of the Paymonei platform, APIs, dashboards, and hosted services (collectively, the &ldquo;Services&rdquo;) provided by <strong>Omniasky Technology Pte Ltd</strong>, a company registered in Singapore that holds the proprietary technology and intellectual property of the Paymonei platform (&ldquo;Omniasky&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;).
                </p>
                <p>
                  Technology development and platform management services are delivered by our affiliated entity, <strong>PT Evora Vera Teknologi</strong>, a limited liability company incorporated in Indonesia, acting as our authorized technology partner.
                </p>
                <p>
                  These Terms apply exclusively to <strong>businesses and their duly authorized representatives</strong> (&ldquo;Merchants&rdquo;) who register for and use the Services. The Services are not designed for, marketed to, or available to private individuals acting in a personal capacity.
                </p>
                <p>
                  By accessing or using the Services, you confirm that: (a) you are acting on behalf of a lawfully registered business entity; (b) you have the authority to bind that entity to this Agreement; and (c) you have read, understood, and agree to be bound by these Terms in their entirety.
                </p>
                <p>
                  Our Privacy Policy (available at <Link href="/supports/privacy-policy">paymonei.com/supports/privacy-policy</Link>) is incorporated into this Agreement by reference. Your use of the Services is also subject to our Privacy Policy.
                </p>
              </Section>

              {/* ── Block 2: Nature of the Services ── */}
              <Section id="services" title="2. Nature of the Services">
                <p>
                  Paymonei is a B2B software orchestration platform that provides billing automation, invoice generation, payment workflow configuration, subscription management, analytics dashboards, and API connectivity tools to registered merchant businesses.
                </p>
                <h3>2.1 What Paymonei Provides</h3>
                <ul>
                  <li>Software tools for configuring and monitoring billing workflows and payment instruction routing.</li>
                  <li>Invoice generation, dunning automation, and subscription lifecycle management.</li>
                  <li>APIs and SDKs enabling merchants to integrate Paymonei software into their own systems.</li>
                  <li>Analytics dashboards providing merchants with visibility into their billing performance metrics.</li>
                  <li>Connectivity to licensed financial execution partners who independently perform payment execution and settlement.</li>
                </ul>
                <h3>2.2 What Paymonei Does Not Provide</h3>
                <p>
                  Paymonei does not hold, transmit, settle, or have custody of any funds at any time. Payment execution — including the movement of money, currency conversion, and settlement — is performed exclusively by our licensed third-party financial execution partners (&ldquo;Execution Partners&rdquo;) under their own regulatory licences and frameworks.
                </p>
                <p>
                  Where blockchain-based settlement options are made available to merchants through our platform, such transactions are facilitated entirely by our licensed Execution Partners and their regulated technology. Paymonei does not initiate, sign, or broadcast blockchain transactions directly.
                </p>
                <p>
                  Paymonei is not a bank, financial institution, licensed money transmitter, money services business, payment facilitator, or virtual asset service provider. We do not provide financial advice, investment products, or regulated financial services of any kind.
                </p>
                <h3>2.3 Service Availability</h3>
                <p>
                  We will use commercially reasonable efforts to maintain platform availability. However, we do not warrant uninterrupted access. Planned maintenance, third-party infrastructure outages, and Execution Partner system events may affect availability. We are not liable for downtime or service interruptions caused by factors outside our reasonable control.
                </p>
              </Section>

              {/* ── Block 3: Merchant Eligibility & Registration ── */}
              <Section id="eligibility" title="3. Merchant Eligibility & Account Registration">
                <h3>3.1 Eligibility Requirements</h3>
                <p>To register for and use the Services, you must:</p>
                <ul>
                  <li>Be a lawfully registered business entity (company, partnership, or equivalent legal structure) with capacity to enter into binding contracts.</li>
                  <li>Have an authorized representative with legal authority to bind the business to this Agreement.</li>
                  <li>Not be incorporated in, controlled by, or operating for the benefit of entities or individuals subject to comprehensive international economic sanctions administered by the United Nations, OFAC (US), the European Union, UK OFSI, or MAS (Singapore), or any equivalent authority.</li>
                  <li>Not be listed on any sanctions list maintained by the above authorities at the time of registration or during the term of this Agreement.</li>
                </ul>
                <h3>3.2 Account Registration</h3>
                <p>
                  To create a Paymonei account, you must provide accurate, complete, and current information including: the legal entity name of your business, your business registration number, country of incorporation, nature of business, and contact information for the authorized representative registering the account.
                </p>
                <p>
                  As part of merchant onboarding, identity verification of authorized business representatives and directors is conducted by our authorized third-party verification partners. This verification is a software platform access control measure. Regulated AML/CFT compliance obligations applicable to payment transactions are fulfilled by our licensed Execution Partners under their own regulatory frameworks.
                </p>
                <h3>3.3 Account Security</h3>
                <p>
                  You are solely responsible for maintaining the confidentiality and security of your account credentials, API keys, and any access tokens. You are fully responsible for all activities conducted under your account, whether or not authorized by you. You must immediately notify us at <Link href="mailto:legal@paymonei.com">legal@paymonei.com</Link> if you become aware of any unauthorized access to your account.
                </p>
                <h3>3.4 Accuracy of Information</h3>
                <p>
                  You represent and warrant that all information you provide during registration and throughout your use of the Services is accurate, complete, and not misleading. You agree to promptly update your account information if any material change occurs. We reserve the right to suspend or terminate access if we determine that information provided is inaccurate or has become materially inaccurate.
                </p>
              </Section>

              {/* ── Block 4: Merchant Obligations & Acceptable Use ── */}
              <Section id="obligations" title="4. Merchant Obligations & Acceptable Use">
                <h3>4.1 Merchant Responsibilities</h3>
                <p>As a Merchant, you are solely responsible for:</p>
                <ul>
                  <li>Ensuring your business and all activities conducted through the Services comply with all applicable laws and regulations in the jurisdictions where you operate.</li>
                  <li>Obtaining and maintaining all licences, permits, and regulatory approvals required to operate your underlying business.</li>
                  <li>Providing your own customers with accurate disclosures about their transactions and your use of third-party software and payment services.</li>
                  <li>The accuracy and completeness of all business and billing data you configure within the platform.</li>
                  <li>The actions and configurations of all API integrations, webhooks, and third-party systems connecting to Paymonei using your credentials.</li>
                  <li>The actions of your employees, contractors, and authorized users who access the Services under your account.</li>
                </ul>
                <h3>4.2 Prohibited Uses</h3>
                <p>You agree not to use the Services — and not to permit any third party to use the Services — in connection with any of the following prohibited activities:</p>
                <ul>
                  <li><strong>Illegal activities:</strong> Any activity that violates applicable laws or regulations, including fraud, money laundering, terrorist financing, tax evasion, or sanctions violations.</li>
                  <li><strong>Adult content and services:</strong> Adult entertainment, pornographic content, escort services, or sexually explicit material.</li>
                  <li><strong>Online gambling and wagering:</strong> Online casinos, sports betting, lottery services, or any form of wagering where money or value is at risk, unless appropriately licensed and pre-approved by us in writing.</li>
                  <li><strong>Controlled substances:</strong> Sale or distribution of illegal drugs, controlled substances, or prescription medications without proper regulatory authorization.</li>
                  <li><strong>Weapons and firearms:</strong> Sale or transfer of firearms, ammunition, explosives, or related accessories.</li>
                  <li><strong>Financial pyramid and fraud schemes:</strong> Pyramid schemes, Ponzi schemes, unregistered securities offerings, or investment fraud.</li>
                  <li><strong>Sanctioned activities:</strong> Any business, transaction, or counterparty involving individuals, entities, or jurisdictions subject to comprehensive international economic sanctions.</li>
                  <li><strong>Money transmission services:</strong> Operating as an unlicensed money transmitter, currency exchange, or similar service using Paymonei&rsquo;s platform as infrastructure.</li>
                  <li><strong>Platform abuse:</strong> Attempting to reverse-engineer, circumvent security measures, introduce malware, or impose an unreasonable load on our infrastructure.</li>
                  <li><strong>Misrepresentation:</strong> Providing false, misleading, or materially inaccurate information to us, to Execution Partners, or to your own customers.</li>
                </ul>
                <p>
                  We reserve the right to suspend or terminate access immediately and without prior notice if we determine, in our reasonable discretion, that your use of the Services falls within any prohibited category above.
                </p>
              </Section>

              {/* ── Block 5: Licensed Execution Partners ── */}
              <Section id="execution-partners" title="5. Licensed Execution Partners & Pass-Through Obligations">
                <p>
                  Certain payment features of the Paymonei platform route merchant-configured instructions to our licensed Execution Partners — independently regulated financial institutions and payment service providers who perform payment execution, settlement, and related financial services under their own regulatory licences.
                </p>
                <h3>5.1 Paymonei&rsquo;s Role</h3>
                <p>
                  Paymonei&rsquo;s software transmits your configured payment workflow instructions to the relevant licensed Execution Partner. Paymonei is not an intermediary or custodian holding funds at any stage of this process. The Execution Partner — not Paymonei — processes, settles, and bears regulatory responsibility for the financial transaction under its own regulatory framework.
                </p>
                <h3>5.2 Pass-Through Terms</h3>
                <p>
                  By enabling payment features, you acknowledge that the relevant Execution Partner&rsquo;s terms of service, acceptable use policies, and privacy policies (&ldquo;Pass-Through Terms&rdquo;) also govern the financial services component of your use. Pass-Through Terms are incorporated into this Agreement by reference. In the event of a conflict between this Agreement and Pass-Through Terms, the Pass-Through Terms govern solely with respect to the financial services provided by the applicable Execution Partner.
                </p>
                <h3>5.3 Compliance Obligations</h3>
                <p>
                  Paymonei operates technology-layer risk monitoring that works in concert with our licensed Execution Partners&rsquo; regulated AML/CFT obligations, sanctions screening, and statutory transaction monitoring. Paymonei may suspend access to payment features or terminate a merchant relationship if we or our Execution Partners determine that continued access poses regulatory, reputational, or legal risk.
                </p>
                <h3>5.4 Execution Partner Requirements</h3>
                <p>
                  Our Execution Partners may impose separate eligibility requirements, merchant category restrictions, transaction limits, or additional verification requirements as a condition of providing their services. We are not liable for any Execution Partner&rsquo;s decision to decline, restrict, or terminate services to you.
                </p>
              </Section>

              {/* ── Block 6: Fees, Billing & Subscription ── */}
              <Section id="fees" title="6. Fees, Billing & Subscription">
                <h3>6.1 Platform Subscription Fees</h3>
                <p>
                  Access to the Services is subject to the platform subscription fees and pricing tiers published at <Link href="/pricing">paymonei.com/pricing</Link> (&ldquo;Fees&rdquo;). All Fees are described as technology service fees for access to the Paymonei platform. Fees are not transaction fees, payment processing fees, or any form of compensation for financial services.
                </p>
                <h3>6.2 Billing and Payment</h3>
                <p>
                  Fees are billed in advance on a monthly or annual basis, as selected at the time of subscription. You authorize us to charge your designated payment method for all applicable Fees on each billing date. All Fees are quoted in United States Dollars (USD) unless otherwise stated and are exclusive of applicable taxes.
                </p>
                <h3>6.3 Late Payment and Suspension</h3>
                <p>
                  If any amount is overdue by more than 14 days, we reserve the right to suspend your access to the Services without further notice until the outstanding balance is paid in full. Repeated late payment may result in termination of this Agreement.
                </p>
                <h3>6.4 Fee Changes</h3>
                <p>
                  We may update our Fee schedule from time to time. Material Fee changes will be communicated to you at least 30 days in advance via email to your registered account address.
                </p>
                <h3>6.5 Refund Policy</h3>
                <p>
                  Platform subscription Fees are non-refundable except where required by applicable law. Fees paid for software access are distinct from and unrelated to any refunds on underlying financial transactions, which are the responsibility of the applicable Execution Partner.
                </p>
              </Section>

              {/* ── Block 7: Intellectual Property ── */}
              <Section id="ip" title="7. Intellectual Property">
                <h3>7.1 Ownership</h3>
                <p>
                  All intellectual property rights in and to the Paymonei platform, APIs, SDKs, branding, proprietary algorithms, documentation, and associated technology are owned exclusively by Omniasky Technology Pte Ltd. Nothing in this Agreement transfers ownership of any intellectual property to you.
                </p>
                <h3>7.2 Licence Grant</h3>
                <p>
                  Subject to your compliance with these Terms and payment of applicable Fees, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable licence to access and use the Services solely for your internal business operations during the term of your active subscription.
                </p>
                <h3>7.3 Restrictions</h3>
                <p>You may not, and may not permit any third party to:</p>
                <ul>
                  <li>Copy, modify, adapt, reverse-engineer, decompile, or disassemble any part of the Services.</li>
                  <li>White-label, resell, or sublicense the Services without our prior written consent.</li>
                  <li>Use the Services to build a product or service that competes with Paymonei.</li>
                  <li>Remove, alter, or obscure any proprietary notices, branding, or labels within the Services.</li>
                </ul>
                <h3>7.4 Merchant Data</h3>
                <p>
                  You retain ownership of all business data you upload, submit, or generate through your use of the Services (&ldquo;Merchant Data&rdquo;). You grant us a limited licence to process Merchant Data solely as necessary to provide the Services. We may use aggregated, anonymised platform usage data for product improvement and analytics purposes, provided such data cannot reasonably be used to identify you.
                </p>
              </Section>

              {/* ── Block 8: Data Protection & Privacy ── */}
              <Section id="data-protection" title="8. Data Protection & Privacy">
                <p>
                  The collection, use, and protection of personal data in connection with your use of the Services is governed by our <Link href="/supports/privacy-policy">Privacy Policy</Link>, incorporated into this Agreement by reference.
                </p>
                <h3>8.1 Data Controller / Processor Relationship</h3>
                <p>
                  Where you use the Paymonei platform to process personal data about your own customers or third parties, you act as the data controller and Paymonei acts as your data processor. You warrant that you have a lawful basis for processing such data and for instructing us to process it on your behalf.
                </p>
                <h3>8.2 Data Processing Agreement</h3>
                <p>
                  A Data Processing Agreement (&ldquo;DPA&rdquo;) governing our processing of personal data on your behalf is available upon request. Enterprise and regulated merchants may require the DPA to satisfy GDPR, PDPA, or UU PDP obligations.
                </p>
                <h3>8.3 Merchant Warranties on Data</h3>
                <p>You represent and warrant that:</p>
                <ul>
                  <li>You have the necessary rights, consents, and lawful bases to share any personal data with Paymonei in connection with the Services.</li>
                  <li>Your collection and use of personal data relating to your own customers complies with applicable data protection laws in your jurisdiction.</li>
                  <li>You will promptly notify us if you become aware of any data breach affecting personal data processed by Paymonei on your behalf.</li>
                </ul>
              </Section>

              {/* ── Block 9: Disclaimers ── */}
              <Section id="warranties" title="9. Disclaimers of Warranties">
                <p>
                  THE SERVICES ARE PROVIDED ON AN &ldquo;AS-IS&rdquo; AND &ldquo;AS-AVAILABLE&rdquo; BASIS. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, OMNIASKY TECHNOLOGY PTE LTD, ITS AFFILIATES, OFFICERS, AND LICENSORS EXPRESSLY DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p>We make no warranty or representation that:</p>
                <ul>
                  <li>The Services will meet your specific business requirements.</li>
                  <li>The Services will be uninterrupted, timely, secure, or error-free at all times.</li>
                  <li>Any particular payment transaction submitted by you will be successfully executed or settled — transaction execution is solely the responsibility of the applicable Execution Partner.</li>
                  <li>Any defects in the Services will be corrected within any particular timeframe.</li>
                </ul>
                <p>
                  Our security controls protect software data and workflow instructions. The security, insurance, and regulatory protection of financial funds themselves are the responsibility of our licensed Execution Partners under their respective regulatory frameworks.
                </p>
              </Section>

              {/* ── Block 10: Limitation of Liability ── */}
              <Section id="liability" title="10. Limitation of Liability">
                <p>
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL OMNIASKY TECHNOLOGY PTE LTD, ITS DIRECTORS, EMPLOYEES, AUTHORIZED TECHNOLOGY PARTNERS, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY:
                </p>
                <ul>
                  <li>Indirect, incidental, special, consequential, or punitive damages.</li>
                  <li>Loss of profit, revenue, business opportunities, or goodwill.</li>
                  <li>Loss or corruption of data.</li>
                  <li>Losses arising from the failure, delay, or error of any licensed Execution Partner in processing a payment transaction.</li>
                  <li>Losses arising from blockchain network events, smart contract failures, or on-chain transaction irreversibility.</li>
                  <li>Regulatory actions, penalties, or compliance costs imposed on you by authorities in your jurisdiction.</li>
                </ul>
                <p>
                  Our aggregate liability to you arising out of or in connection with this Agreement, from any cause whatsoever and regardless of the form of action, will at all times be limited to the greater of: (a) the total platform subscription Fees paid by you to Omniasky in the twelve (12) months immediately preceding the event giving rise to the claim; or (b) SGD five hundred (SGD 500).
                </p>
                <p>
                  Some jurisdictions do not permit the exclusion or limitation of certain types of liability. To the extent such laws apply, the limitations above apply only to the fullest extent permitted.
                </p>
              </Section>

              {/* ── Block 11: Indemnification ── */}
              <Section id="indemnification" title="11. Indemnification">
                <p>
                  You agree to defend, indemnify, and hold harmless Omniasky Technology Pte Ltd, PT Evora Vera Teknologi, and each of their respective directors, officers, employees, and agents (collectively, &ldquo;Indemnified Parties&rdquo;) from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or relating to:
                </p>
                <ul>
                  <li>Your access to or use of the Services.</li>
                  <li>Your breach of any provision of this Agreement.</li>
                  <li>Any inaccurate, false, or misleading information you provide to us or to our Execution Partners.</li>
                  <li>Your violation of any applicable law or regulation in connection with your use of the Services.</li>
                  <li>Your violation of the rights of any third party, including your own customers.</li>
                  <li>Your failure to obtain or maintain any licence or regulatory approval required for your underlying business activities.</li>
                </ul>
                <p>
                  We reserve the right, at our own expense, to assume exclusive control of any matter otherwise subject to indemnification by you. You agree to cooperate fully with our defence of any such claim.
                </p>
              </Section>

              {/* ── Block 12: Term, Suspension & Termination ── */}
              <Section id="termination" title="12. Term, Suspension & Termination">
                <h3>12.1 Term</h3>
                <p>
                  This Agreement takes effect upon your account activation and continues until terminated by either party in accordance with this section.
                </p>
                <h3>12.2 Termination for Convenience</h3>
                <p>
                  Either party may terminate this Agreement at any time by providing 30 days&rsquo; written notice to the other party. You may initiate termination by contacting us at <Link href="mailto:legal@paymonei.com">legal@paymonei.com</Link>.
                </p>
                <h3>12.3 Immediate Termination</h3>
                <p>We may suspend or terminate your access immediately and without prior notice if:</p>
                <ul>
                  <li>You breach any provision of the prohibited use policy (Section 4.2).</li>
                  <li>You provide materially false, inaccurate, or misleading information during registration or at any time during your use of the Services.</li>
                  <li>A licensed Execution Partner terminates or restricts their services to you.</li>
                  <li>We receive a valid legal order, regulatory direction, or law enforcement request requiring suspension or termination.</li>
                  <li>You become insolvent, enter receivership or administration, or make an assignment for the benefit of creditors.</li>
                  <li>We reasonably determine that your continued use of the Services poses material legal, regulatory, or reputational risk to us or our Execution Partners.</li>
                </ul>
                <h3>12.4 Effect of Termination</h3>
                <p>
                  Upon termination, your right to access and use the Services ceases immediately. You will have a 30-day window following termination to export your Merchant Data. After this window, your data will be deleted or anonymised in accordance with the retention schedules in our Privacy Policy. Accrued Fees and any outstanding amounts remain due and payable.
                </p>
              </Section>

              {/* ── Block 13: Governing Law & Dispute Resolution ── */}
              <Section id="governing-law" title="13. Governing Law & Dispute Resolution">
                <h3>13.1 Governing Law</h3>
                <p>
                  This Agreement and any dispute or claim arising out of or in connection with it or its subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of the Republic of Singapore, without regard to its conflict of law provisions.
                </p>
                <h3>13.2 Good-Faith Negotiation</h3>
                <p>
                  Before initiating formal dispute resolution, the parties agree to attempt in good faith to resolve any dispute, controversy, or claim arising out of or relating to this Agreement through direct negotiation. Either party may initiate this process by written notice to the other. If the dispute is not resolved within 30 days of such notice, either party may proceed to arbitration as set out below.
                </p>
                <h3>13.3 Arbitration</h3>
                <p>
                  Any dispute, controversy, or claim arising out of or relating to this Agreement, or the breach, termination, or invalidity thereof, that cannot be resolved by negotiation shall be finally settled by binding arbitration administered by the <strong>Singapore International Arbitration Centre (SIAC)</strong> in accordance with the SIAC Arbitration Rules then in force. The tribunal shall consist of a single arbitrator. The seat of arbitration shall be Singapore. The language of arbitration shall be English.
                </p>
                <h3>13.4 Individual Basis</h3>
                <p>
                  All disputes shall be resolved on an individual basis. You agree not to bring or participate in any class, collective, consolidated, or representative action or arbitration against us arising out of or relating to this Agreement.
                </p>
              </Section>

              {/* ── Block 14: General Provisions ── */}
              <Section id="general" title="14. General Provisions">
                <h3>14.1 Entire Agreement</h3>
                <p>
                  This Agreement, together with our Privacy Policy and any applicable Execution Partner Pass-Through Terms, constitutes the entire agreement between you and Omniasky Technology Pte Ltd with respect to the Services and supersedes all prior and contemporaneous agreements, representations, and understandings.
                </p>
                <h3>14.2 Amendments</h3>
                <p>
                  We may update these Terms from time to time to reflect changes in our Services, legal requirements, or business operations. Where changes are material, we will provide at least 14 days&rsquo; advance notice via email to your registered account address and via a prominent notice on our website prior to the revised Terms taking effect. Your continued access to or use of the Services after the effective date of any revised Terms constitutes your acceptance. If you do not agree, you must discontinue use before the effective date and notify us at <Link href="mailto:legal@paymonei.com">legal@paymonei.com</Link>.
                </p>
                <h3>14.3 Severability</h3>
                <p>
                  If any provision of this Agreement is found to be unlawful, void, or unenforceable under applicable law, that provision shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions.
                </p>
                <h3>14.4 No Waiver</h3>
                <p>
                  Our failure to enforce any right or provision of this Agreement shall not constitute a waiver of that right or provision unless acknowledged and agreed to by us in writing.
                </p>
                <h3>14.5 Force Majeure</h3>
                <p>
                  Neither party shall be liable for any delay or failure to perform their obligations under this Agreement where such delay or failure results from circumstances beyond their reasonable control, including but not limited to acts of God, natural disasters, war, civil unrest, governmental actions, regulatory changes, pandemics, strikes, infrastructure outages, or internet service disruptions.
                </p>
                <h3>14.6 Assignment</h3>
                <p>
                  Omniasky Technology Pte Ltd may assign or novate this Agreement, in whole or in part, to an affiliate or to a successor entity in connection with a merger, acquisition, or sale of substantially all assets, without your consent. You may not assign or transfer any of your rights or obligations under this Agreement without our prior written consent.
                </p>
                <h3>14.7 Notices</h3>
                <p>
                  Legal notices to Paymonei must be sent to <Link href="mailto:legal@paymonei.com">legal@paymonei.com</Link>. Notices are effective upon confirmed receipt. We will send notices to you at the email address associated with your registered account.
                </p>
                <h3>14.8 Language</h3>
                <p>
                  This Agreement is made in the English language. In the event of any conflict between an English version and any translation, the English version shall prevail.
                </p>
              </Section>

              {/* ── Block 15: Contact ── */}
              <Section id="contact" title="15. Contact">
                <p>
                  For any questions, concerns, or requests relating to these Terms of Service or your use of the Services, please contact us through the relevant channel below:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose mt-6">
                  <div className="bg-[#F5F5F2] border border-[#EAEAE6] rounded-lg p-5">
                    <p className="text-[11px] uppercase tracking-wider text-[#999] font-medium mb-3">Legal &amp; Contracts</p>
                    <p className="text-[15px] text-[#0C0C0C] font-medium mb-1">Paymonei</p>
                    <Link href="mailto:legal@paymonei.com" className="text-[14px] text-[#0C0C0C] underline underline-offset-2 hover:opacity-70 block">
                      legal@paymonei.com
                    </Link>
                  </div>
                  <div className="bg-[#F5F5F2] border border-[#EAEAE6] rounded-lg p-5">
                    <p className="text-[11px] uppercase tracking-wider text-[#999] font-medium mb-3">Privacy Inquiries</p>
                    <p className="text-[15px] text-[#0C0C0C] font-medium mb-1">Paymonei</p>
                    <Link href="mailto:privacy@paymonei.com" className="text-[14px] text-[#0C0C0C] underline underline-offset-2 hover:opacity-70 block">
                      privacy@paymonei.com
                    </Link>
                  </div>
                  <div className="bg-[#F5F5F2] border border-[#EAEAE6] rounded-lg p-5">
                    <p className="text-[11px] uppercase tracking-wider text-[#999] font-medium mb-3">General Support</p>
                    <p className="text-[15px] text-[#0C0C0C] font-medium mb-1">Paymonei</p>
                    <Link href="mailto:support@paymonei.com" className="text-[14px] text-[#0C0C0C] underline underline-offset-2 hover:opacity-70 block">
                      support@paymonei.com
                    </Link>
                  </div>
                </div>
                <p className="text-[14px] text-[#777] mt-6 font-light">
                  These Terms are published by Omniasky Technology Pte Ltd, the intellectual property and management holding company of the Paymonei platform, registered in Singapore. Technology development and platform operations are delivered by our affiliated entity PT Evora Vera Teknologi, incorporated in Indonesia.
                </p>
              </Section>

            </article>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-14 scroll-mt-28">
      <div className="border-b border-[#EAEAE6] pb-4 mb-8">
        <h2
          className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-light tracking-[-0.02em] text-[#0C0C0C]"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          {title}
        </h2>
      </div>
      <div className="text-[15px] text-[#555] leading-[1.8] font-light space-y-4">
        <LegalProse>{children}</LegalProse>
      </div>
    </section>
  );
}

function LegalProse({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      [&_p]:text-[15px] [&_p]:text-[#555] [&_p]:leading-[1.8] [&_p]:font-light
      [&_h3]:text-[15px] [&_h3]:font-semibold [&_h3]:text-[#0C0C0C] [&_h3]:mt-8 [&_h3]:mb-3
      [&_ul]:list-disc [&_ul]:list-outside [&_ul]:pl-5 [&_ul]:space-y-2
      [&_li]:text-[15px] [&_li]:text-[#555] [&_li]:leading-[1.8] [&_li]:font-light
      [&_strong]:text-[#333] [&_strong]:font-medium
      [&_a]:text-[#0C0C0C] [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:opacity-70 [&_a]:transition-opacity
      [&_table]:w-full [&_table]:border-collapse [&_table]:mt-2 [&_table]:mb-4 [&_table]:text-[14px]
      [&_th]:text-left [&_th]:py-2.5 [&_th]:px-4 [&_th]:text-[11px] [&_th]:uppercase [&_th]:tracking-wider [&_th]:text-[#999] [&_th]:font-medium [&_th]:border-b [&_th]:border-[#EAEAE6]
      [&_td]:py-3 [&_td]:px-4 [&_td]:text-[#555] [&_td]:border-b [&_td]:border-[#F5F5F2] [&_td]:align-top [&_td]:leading-relaxed
      [&_tr:last-child_td]:border-0
    ">
      {children}
    </div>
  );
}
