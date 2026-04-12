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
    url: "https://paymonei.com/legal/terms-of-service",
    siteName: "Paymonei",
    type: "website",
  },
};

// ─── Table of contents ────────────────────────────────────────────────────────

const toc = [
  { id: "introduction", label: "1. Introduction & Parties" },
  { id: "services", label: "2. Nature of the Services" },
  { id: "eligibility", label: "3. Merchant Eligibility & Representations" },
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
              <div className="sticky top-28 flex flex-col gap-6">

                {/* Jurisdiction switcher */}
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#999] font-medium mb-3">Jurisdiction</p>
                  <nav className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#0C0C0C] font-medium leading-snug">Singapore &amp; RoW</span>
                    <Link
                      href="/legal/terms-of-service/indonesia"
                      className="text-[13px] text-[#777] hover:text-[#0C0C0C] transition-colors font-light leading-snug"
                    >
                      Indonesia (Bahasa)
                    </Link>
                  </nav>
                </div>

                {/* On this page */}
                <div className="border-t border-[#EAEAE6] pt-4">
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

              </div>
            </aside>

            {/* Main content */}
            <article className="flex-1 min-w-0 max-w-3xl">

              {/* ── Software-Only Shield Notice ── */}
              <div className="bg-[#F5F5F2] border border-[#EAEAE6] rounded-lg p-6 mb-12">
                <p className="text-[13px] font-medium text-[#0C0C0C] mb-2">Important Notice</p>
                <p className="text-[14px] text-[#555] leading-relaxed font-light">
                  Omniasky Technology Pte Ltd and PT Evora Vera Teknologi are technology companies. Neither entity is a bank, financial institution, money services business, or virtual asset service provider. All financial execution services — including payment processing, fund movement, and settlement — are provided exclusively by our licensed third-party financial execution partners on a separate contractual basis.
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
                  These Terms apply exclusively to businesses and their duly authorized representatives (&ldquo;Merchants&rdquo;) who register for and use the Services. The Services are not designed for, marketed to, or available to private individuals acting in a personal capacity.
                </p>
                <p>
                  By accessing or using the Services, you confirm that: (a) you are acting on behalf of a lawfully registered business entity; (b) you have the authority to bind that entity to this Agreement; and (c) you have read, understood, and agree to be bound by these Terms in their entirety.
                </p>
                <p>
                  Our Privacy Policy (available at <Link href="/legal/privacy-policy">paymonei.com/legal/privacy-policy</Link>) is incorporated into this Agreement by reference. Your use of the Services is also subject to our Privacy Policy.
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
              <Section id="eligibility" title="3. Merchant Eligibility, Registration & Representations">
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
                  As part of merchant onboarding, identity verification of authorized business representatives and directors is conducted by our authorized third-party verification partners. Statutory AML/CFT reporting obligations applicable to payment transactions — including regulated transaction reporting to applicable financial authorities such as MAS — are fulfilled by our licensed Execution Partners under their own regulatory frameworks. Paymonei separately operates technology-layer risk controls, including merchant KYB screening, sanctions list checks, and prohibited merchant category enforcement, as described in Section 5.
                </p>
                <h3>3.3 Account Security</h3>
                <p>
                  You are solely responsible for maintaining the confidentiality and security of your account credentials, API keys, and any access tokens. You are fully responsible for all activities conducted under your account, whether or not authorized by you. You must immediately notify us at <Link href="mailto:legal@paymonei.com">legal@paymonei.com</Link> if you become aware of any unauthorized access to your account.
                </p>
                <h3>3.4 Accuracy of Information</h3>
                <p>
                  You represent and warrant that all information you provide during registration and throughout your use of the Services is accurate, complete, and not misleading. You agree to promptly update your account information if any material change occurs. We reserve the right to suspend or terminate access if we determine that information provided is inaccurate or has become materially inaccurate.
                </p>
                <h3>3.5 Merchant Representations and Warranties</h3>
                <p>By entering into this Agreement and on a continuing basis throughout the term, you represent and warrant to us that:</p>
                <ul>
                  <li><strong>Authority and binding obligation:</strong> You have all necessary rights, powers, and authority to execute this Agreement and perform your obligations under it. This Agreement constitutes a valid, legal, and binding obligation enforceable against you in accordance with its terms, and does not violate or conflict with any other agreement by which you are bound.</li>
                  <li><strong>Regulatory compliance and licences:</strong> You comply with, and will continue to comply with, all applicable laws, rules, and regulations in every jurisdiction in which you operate. You have obtained, and will maintain throughout the term, all licences, permits, regulatory approvals, and governmental authorisations required to conduct your underlying business and to use the Services.</li>
                  <li><strong>Business change notification:</strong> You will notify us in writing within five (5) business days of any material change to your business type, principal products or services offered, business model, or any change that may affect our risk assessment of your account. Failure to provide timely notice renders you solely responsible for all consequences and losses arising from such change.</li>
                  <li><strong>Intellectual property:</strong> You have full right and authority to sell or distribute the products and services for which you use the Services. None of your products or services infringe the intellectual property rights — including trademarks, copyrights, patents, or trade secrets — of any third party, and they do not contain content that violates any applicable law or regulation.</li>
                  <li><strong>End-user consent and disclosure:</strong> Before transmitting any end-user data to us or to our Execution Partners, you have provided all required disclosures to, and obtained all necessary consents from, each relevant end-user regarding the collection, use, and disclosure of their personal data, in compliance with applicable data protection law including the PDPA (Singapore) and/or applicable privacy regulations in each jurisdiction where you operate.</li>
                  <li><strong>Anti-bribery and anti-corruption:</strong> Neither you nor any of your affiliates, officers, directors, employees, agents, or partners have offered, promised, given, or authorised — and will not offer, promise, give, or authorise — any payment, gift, or other thing of value, directly or indirectly, to any government official or public authority for the purpose of influencing any official act or decision, or obtaining any improper advantage. You have conducted, and will continue to conduct, your business in compliance with all applicable anti-bribery and anti-corruption laws.</li>
                  <li><strong>AML/CFT compliance:</strong> Your operations comply with all applicable financial records, reporting, and anti-money laundering and counter-terrorism financing laws in Singapore, Indonesia, and all other jurisdictions where you operate or transact. There is no pending or threatened indictment, lawsuit, or proceeding against you alleging violation of any applicable AML/CFT law.</li>
                  <li><strong>Sanctions — continuing representation:</strong> You are not, and will not become during the term, incorporated in, controlled by, or acting for the benefit of any person, entity, or jurisdiction subject to comprehensive economic sanctions administered by the United Nations, OFAC (US), the European Union, UK OFSI, MAS (Singapore), OJK, PPATK (Indonesia), or the FATF high-risk country list. You are not listed, and will not be listed, on any Specially Designated Nationals list, Consolidated Sanctions List, or equivalent list maintained by any of the above authorities.</li>
                  <li><strong>No exploitation of system vulnerabilities:</strong> You will not use the Services to perform, facilitate, or enable any unlawful, fraudulent, or deceptive purpose, nor will you exploit any vulnerability, gap, or weakness in any system — whether ours or a third party&rsquo;s — to obtain an improper advantage. You agree to indemnify us from all claims, costs, expenses, losses, and liabilities arising from any such conduct.</li>
                  <li><strong>Lawful purpose:</strong> Your use of the Services is solely for legitimate, lawful business and transactional purposes consistent with all applicable laws and these Terms.</li>
                </ul>
                <h3>3.6 Paymonei&rsquo;s Limited Warranties</h3>
                <p>We represent and warrant to you that:</p>
                <ul>
                  <li>We comply with, and will continue to comply with, all applicable laws and regulations, and have obtained and will maintain all licences, permits, and governmental approvals required for the provision of the Services.</li>
                  <li>The Services and APIs provided under this Agreement will materially conform to the specifications set out in the applicable Documentation, as may be updated from time to time at our sole discretion.</li>
                  <li>Paymonei does not store, process, or transmit raw payment card data (card numbers, CVVs, or expiry dates). All card payment processing is performed exclusively by our licensed Execution Partners, who maintain their own Payment Card Industry Data Security Standard (PCI-DSS) certifications and are subject to card network rules under their own regulatory frameworks. Paymonei is entirely outside PCI-DSS scope.</li>
                  <li>We will not use or disclose your end-users&rsquo; non-public personal data except: (i) as reasonably necessary to provide the Services to you; (ii) to provide general fraud screening and transaction risk services without disclosing individually identifiable end-user information; or (iii) as described, permitted, or required by our Privacy Policy or applicable law.</li>
                </ul>
                <p>
                  <strong>Remedy for warranty breach.</strong> If any part of the Services materially fails to conform to the warranties in clause 3.6 above, and you report the non-conformance to us, we will, at our discretion: (i) use commercially reasonable efforts to remediate the non-conformance at no additional charge to you; or (ii) refund the fees paid by you for the non-conforming Services in the ninety (90) days immediately preceding the date you reported the non-conformance. The remedies set out in this clause are your sole and exclusive remedies, and our entire liability, for any breach of the warranties in clause 3.6.
                </p>
                <p>
                  <strong>Warranty exclusions.</strong> The warranties in clause 3.6 and the remedies above do not apply if: (i) the Services are used in material deviation from this Agreement, these Terms, or the applicable Documentation; (ii) any part of the Services has been modified without our prior written consent; or (iii) a defect is caused by your own equipment malfunction, third-party software, or third-party services not provided by us.
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
                <p>You agree not to use the Services, and not to permit any third party to use the Services, in connection with any of the following prohibited activities:</p>
                <ul>
                  <li><strong>Illegal activities:</strong> Any activity that violates applicable laws or regulations, including fraud, money laundering, terrorism financing, proliferation financing of weapons of mass destruction, tax evasion, bribery, or corruption.</li>
                  <li><strong>Sanctions violations:</strong> Any business, transaction, or counterparty involving individuals, entities, or jurisdictions subject to comprehensive economic sanctions administered by the United Nations, OFAC (US), EU, UK OFSI, MAS (Singapore), OJK, PPATK (Indonesia), or any equivalent authority.</li>
                  <li><strong>Intellectual property infringement and counterfeit goods:</strong> Sale, distribution, or facilitation of access to pirated software, unlicensed music, film, or other copyrighted material without authorisation from the rights holder; products or services that infringe or facilitate infringement of third-party trademarks, copyrights, trade secrets, or other proprietary or privacy rights; counterfeit or unauthorised branded goods.</li>
                  <li><strong>Adult content and escort services:</strong> Pornographic material, sexually explicit content, escort or companionship services, or any material or service of an adult sexual nature.</li>
                  <li><strong>Online gambling and wagering:</strong> Online casinos, sports betting exchanges, lottery services, or any activity in which money or value is wagered, unless you hold the applicable licence and have obtained our prior written approval.</li>
                  <li><strong>Controlled substances and narcotics:</strong> Sale, distribution, import, or export of illegal drugs, narcotics, controlled substances, or prescription medicines without proper regulatory authorisation.</li>
                  <li><strong>Weapons and firearms:</strong> Sale, distribution, import, or export of firearms, ammunition, explosives, or related accessories, except by appropriately licensed dealers with our prior written approval.</li>
                  <li><strong>Pyramid and investment fraud:</strong> Pyramid schemes, Ponzi schemes, unregistered securities offerings, or any form of investment fraud.</li>
                  <li><strong>Counterfeit financial instruments:</strong> Fraudulent cheques, duplicate or cloned payment instruments, counterfeit currency, unauthorised stored value instruments, or other fraudulent financial documents.</li>
                  <li><strong>Unlicensed virtual asset services:</strong> Operating a virtual asset exchange, token issuance platform, stablecoin service, digital asset custodian, or any Virtual Asset Service Provider (VASP) business without valid registration or licensing from MAS, OJK, or the applicable regulatory authority in your jurisdiction. Entities holding a valid MAS or OJK registration or licence for virtual asset services may apply for prior written approval from us before using the Services for that activity.</li>
                  <li><strong>Unlicensed money transmission:</strong> Operating as an unlicensed money transmitter, currency exchange, or similar financial service using the Paymonei platform as infrastructure, where such operation requires a regulatory licence you do not hold.</li>
                  <li><strong>Platform abuse:</strong> Attempting to reverse-engineer, circumvent security measures, introduce malware, or impose unreasonable load on our infrastructure.</li>
                  <li><strong>Misrepresentation:</strong> Providing materially false, misleading, or inaccurate information to us, to our Execution Partners, or to your own customers.</li>
                </ul>
                <p>
                  We reserve the right to suspend or terminate access immediately and without prior notice if we determine, in our reasonable discretion, that your use of the Services falls within or is associated with any prohibited category above.
                </p>
                <h3>4.3 System Security Obligations</h3>
                <p>
                  You must at all times maintain and comply with all reasonable and appropriate security measures to protect your own computer systems and the data stored in or transmitted through them (&ldquo;Your Computer Systems&rdquo;), including systems that capture, store, or transmit end-user data to Paymonei or our Execution Partners. For the avoidance of doubt, &ldquo;Your Computer Systems&rdquo; means any computer systems operated by or on your behalf that capture or store end-user data, or transmit end-user data to us. These obligations include compliance with all applicable laws, rules, regulations, and, where applicable, the security requirements of card networks.
                </p>
                <p>You agree to implement, at minimum, the following security practices as appropriate for your business:</p>
                <ul>
                  <li>Restrict access to the Services to trusted users only through appropriate IP access controls;</li>
                  <li>Rotate API access keys regularly in accordance with industry standards and applicable regulatory requirements;</li>
                  <li>Enable two-factor authentication (2FA) on your Paymonei dashboard account;</li>
                  <li>Protect all API keys, PINs, passwords, and other authentication credentials used to access the Services or transact through the API; and</li>
                  <li>Where applicable, enable platform-level transaction security features available in the Paymonei dashboard.</li>
                </ul>
                <p>
                  We may from time to time recommend additional best practices for security and fraud prevention. You are responsible for independently reviewing all such recommendations and determining whether they are adequate and appropriate for your specific business. It is your responsibility, not ours, to implement security procedures and controls beyond those listed above. We make no representation and give no guarantee that any security recommendations we provide will be effective for your specific situation.
                </p>
                <p>
                  Upon our request, you agree to provide us with reasonable evidence of your compliance with the security obligations in this clause. Failure to provide such evidence to our reasonable satisfaction may result in suspension of the Services or termination of this Agreement.
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
                  All intellectual property rights in and to the Paymonei platform, APIs, SDKs, branding, proprietary algorithms, documentation, derivatives thereof, and all associated technology (&ldquo;Our IP&rdquo;) are owned exclusively by Omniasky Technology Pte Ltd. Nothing in this Agreement transfers, assigns, or conveys any ownership of any intellectual property to you, whether by implication, estoppel, or otherwise.
                </p>
                <h3>7.2 API and Services Licence Grant</h3>
                <p>
                  Subject to your compliance with these Terms and payment of applicable Fees, we grant you a limited, personal, non-exclusive, non-transferable, non-sublicensable, revocable licence to:
                </p>
                <ul>
                  <li>Install and use our APIs on machines maintained at facilities owned, controlled, or leased by you, as reasonably necessary to use the Services for the purpose of conducting transactions with your end users;</li>
                  <li>Access and use the Documentation solely for the purpose of using the APIs and Services; and</li>
                  <li>Make archival backup copies of the APIs and Documentation strictly for archival purposes only, provided all copyright and proprietary notices are reproduced intact on each copy.</li>
                </ul>
                <h3>7.3 Trademark Licence</h3>
                <p>
                  Subject to these Terms, we grant you a limited, royalty-free, non-exclusive, non-transferable licence to display our trademarks and service marks (&ldquo;Brand Materials&rdquo;) solely for the purpose of identifying your integration with, or use of, Paymonei in your own marketing materials and product interfaces. You agree to:
                </p>
                <ul>
                  <li>Modify, at your own cost, any Brand Materials that we, in our sole discretion, determine are used in an inappropriate, misleading, or demeaning manner;</li>
                  <li>Cease use of any Brand Materials immediately upon written request from us; and</li>
                  <li>Not add, remove, or modify any Brand Materials or Documentation provided by us without our prior written consent.</li>
                </ul>
                <p>This trademark licence automatically terminates and is immediately revoked upon termination or expiry of this Agreement for any reason.</p>
                <h3>7.4 Restrictions on Our IP</h3>
                <p>You may not, and may not permit any third party to:</p>
                <ul>
                  <li>Use, reproduce, distribute, or permit others to use, reproduce, or distribute any of Our IP for purposes other than those expressly set out in these Terms;</li>
                  <li>Make Our IP available to any unauthorised third party;</li>
                  <li>Rent, lease, timeshare, operate as a service bureau, or otherwise make Our IP available through interactive services, remote processing services, or any similar arrangement;</li>
                  <li>White-label, resell, or sublicense the Services without our prior written consent;</li>
                  <li>Use the Services to build a product or service that competes with Paymonei;</li>
                  <li>Remove, alter, or obscure any proprietary notices, branding, or labels within the Services; or</li>
                  <li>Directly or indirectly modify, reverse-engineer, decompile, disassemble, or attempt to derive the source code of any of Our IP.</li>
                </ul>
                <h3>7.5 Consequences of IP Breach</h3>
                <p>
                  In the event you breach any provision of this Section 7, we are entitled to take all measures we deem necessary to protect our interests, including but not limited to immediate suspension and/or termination of the Services without prior notice. You agree to be fully liable for, and to indemnify and hold us harmless from, all losses, damages, claims, legal proceedings, demands, costs, and liabilities arising from or in connection with any such breach.
                </p>
                <h3>7.6 Merchant Data</h3>
                <p>
                  You retain ownership of all business data you upload, submit, or generate through your use of the Services (&ldquo;Merchant Data&rdquo;). You grant us a limited licence to process Merchant Data solely as necessary to provide the Services. We may use aggregated, anonymised platform usage data for product improvement and analytics purposes, provided such data cannot reasonably be used to identify you.
                </p>
                <h3>7.7 Merchant Brand Consent</h3>
                <p>
                  You acknowledge and agree that, by using the Services, you grant us a non-exclusive, royalty-free, worldwide licence to use your business name, logo, and trade name on our platform, website, partner pages, and in our marketing materials, solely for the purposes of identifying you as a Paymonei merchant and for other lawful marketing and promotional purposes. We will use your brand materials in accordance with any reasonable brand guidelines you have communicated to us in writing. You may revoke this consent at any time by sending a written request to <Link href="mailto:legal@paymonei.com">legal@paymonei.com</Link>.
                </p>
              </Section>

              {/* ── Block 8: Data Protection & Privacy ── */}
              <Section id="data-protection" title="8. Data Protection & Privacy">
                <p>
                  The collection, use, and protection of personal data in connection with your use of the Services is governed by our <Link href="/legal/privacy-policy">Privacy Policy</Link>, incorporated into this Agreement by reference.
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
                <h3>9.1 As-Is Basis</h3>
                <p>
                  EXCEPT AS EXPRESSLY STATED IN THIS AGREEMENT, THE SERVICES ARE PROVIDED ON AN &ldquo;AS-IS&rdquo; AND &ldquo;AS-AVAILABLE&rdquo; BASIS, WITH ALL FAULTS AND WITHOUT ANY REPRESENTATION OR WARRANTY OF ANY KIND. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, OMNIASKY TECHNOLOGY PTE LTD, ITS AFFILIATES, OFFICERS, AND LICENSORS EXPRESSLY DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, AND ANY WARRANTY ARISING FROM COURSE OF DEALING OR COURSE OF PERFORMANCE.
                </p>
                <p>We make no warranty or representation that:</p>
                <ul>
                  <li>The Services will meet your specific business requirements.</li>
                  <li>The Services will be uninterrupted, timely, secure, or error-free at all times.</li>
                  <li>Any particular payment transaction submitted by you will be successfully executed or settled &mdash; transaction execution is solely the responsibility of the applicable Execution Partner.</li>
                  <li>Data transmitted through the Services will be transmitted securely without interception by third parties.</li>
                  <li>Any defects in the Services will be corrected within any particular timeframe.</li>
                </ul>
                <h3>9.2 Not a Financial Institution; No Foreign Exchange Services</h3>
                <p>
                  You acknowledge that neither Omniasky Technology Pte Ltd nor PT Evora Vera Teknologi is a bank, payment institution, money services business, licensed financial institution, currency exchanger, or foreign exchange dealer. We are solely responsible for the delivery of software tools and data connectivity. We facilitate the routing of your payment workflow instructions to our licensed Execution Partners and are not responsible for the acts, omissions, errors, or failures of any third party, including but not limited to: (a) the operation of networks, banking systems, or financial infrastructure; (b) any decision by an Execution Partner to decline, delay, restrict, or reverse a transaction; or (c) interruptions to any third-party system or service.
                </p>
                <p>
                  <strong>Paymonei does not provide foreign exchange services, currency conversion services, or money-changing services of any kind.</strong> We do not act as an intermediary between you and any foreign exchange dealer, currency dealer, or money-changing institution. We do not accept any power of attorney or mandate to execute currency conversion transactions on your behalf, and no provision of this Agreement shall be construed as creating any such authority. Where currency conversion is incidental to a payment transaction processed through the Services, such conversion is performed exclusively by the relevant licensed Execution Partner under their own regulatory licence, terms of service, and exchange rate policies. You should refer directly to the applicable Execution Partner&rsquo;s terms for information on exchange rates, conversion finality, and related rights and obligations.
                </p>
                <h3>9.3 Transaction Fraud and Accuracy</h3>
                <p>
                  You acknowledge and agree that we are not responsible for identifying whether any particular transaction, payment instruction, invoice, or order is accurate, legitimate, or typical of your business. You are solely responsible for: (a) screening transactions initiated by your end users or customers for fraud, error, or suspicious activity; (b) conducting reasonable due diligence on transactions that appear unusual, atypically large, or directed to unusual destinations before fulfilling or completing them; and (c) contacting your end users regarding suspicious or erroneous transactions as appropriate. You bear all risk of fraud, chargebacks, and unauthorized transactions in connection with your use of the Services. We are not liable for losses arising from fraudulent or erroneous transactions.
                </p>
                <h3>9.4 Merchant Products and Customer Relationships</h3>
                <p>
                  We make no representation, warranty, or guarantee regarding the nature, quality, authenticity, suitability, or any other aspect of the products or services you offer to your end users or customers. You are solely responsible for: (a) the quality, legality, and delivery of your products and services; (b) your customer support, refunds, returns, and after-sale obligations; and (c) communicating to your end users the terms, conditions, and purpose of any transaction. We reserve the right to terminate the Services immediately upon reasonable grounds to believe you are engaged in unlawful transactions with end users, and we bear no liability or obligation in connection with such transactions or to any party arising from them.
                </p>
                <h3>9.5 Tax Obligations</h3>
                <p>
                  We make no representation or warranty regarding the accuracy of any tax rates or applicable tax calculations that may be generated by or through the Services. You are solely responsible for determining, collecting, and remitting all applicable taxes on your sales of products or services, including but not limited to goods and services tax, value-added tax, withholding tax, or any other statutory levy applicable in your jurisdiction.
                </p>
                <h3>9.6 Fund Security</h3>
                <p>
                  Our security controls protect software data, API credentials, and workflow instructions transmitted through the platform. The security, insurance, regulatory protection, and safeguarding of financial funds are the sole responsibility of our licensed Execution Partners under their respective regulatory frameworks.
                </p>
                <h3>9.7 No Fraud Guarantee</h3>
                <p>
                  We do not represent, warrant, or guarantee that you, your business, or your end users will never be the victim of fraud. We and our affiliates have no liability to you for any financial or non-financial losses, direct or indirect losses, or other consequences of fraud. We shall not and do not indemnify you against any losses caused by fraud, irrespective of: (a) whether you have complied with the security obligations in Section 4.3 of these Terms; and/or (b) whether you have followed any best practice recommendations or security controls recommended by us.
                </p>
                <h3>9.8 Fraud Investigation Assistance</h3>
                <p>
                  We may, at our discretion, assist you in any investigation by law enforcement authorities in connection with the recovery of funds lost to fraud. You agree that any such assistance does not and shall not be construed as an assumption of responsibility, liability, or obligation by us in connection with such fraud or loss.
                </p>
                <h3>9.9 Fraud Signal Data</h3>
                <p>
                  We may provide you with subjective data or signals regarding the likelihood that a particular transaction may be fraudulent, which may require action or review by you. We may also take into account your actions or inactions in response to such signals when generating future fraud assessments. You acknowledge and agree that: (a) you are solely and fully responsible for any action you choose to take (or not take) in response to such data; (b) we make no representation or warranty that any fraud signal data will accurately detect fraud in all cases; and (c) we are not liable for any losses arising from fraudulent transactions that are not detected by, or that occur despite, any fraud signal data provided to you.
                </p>
                <h3>9.10 Response to Fraud Reports from External Parties</h3>
                <p>
                  If we receive information from a payment channel partner, regulator, law enforcement authority, end user, or member of the public indicating suspected fraudulent, deceptive, or unlawful activity by you or any end user associated with your account, we may — in addition to any other rights we have under this Agreement — require you to: (i) conduct a periodic or incidental review of the relevant transactions or end users; (ii) provide information or take action, remedy, or resolution steps in connection with the reported activity; (iii) submit a written remediation plan to address the reported activity along with an overall risk mitigation strategy, within a reasonable timeframe determined on a case-by-case basis; and (iv) keep us informed of the implementation of such plan. Failure to comply with any of these requirements may result in suspension or termination of the Services.
                </p>
              </Section>

              {/* ── Block 10: Limitation of Liability ── */}
              <Section id="liability" title="10. Limitation of Liability">
                <h3>10.1 Exclusion of Consequential Damages</h3>
                <p>
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL OMNIASKY TECHNOLOGY PTE LTD, ITS DIRECTORS, EMPLOYEES, AUTHORIZED TECHNOLOGY PARTNERS, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul>
                  <li>Loss of profit, revenue, business opportunities, goodwill, or anticipated savings.</li>
                  <li>Loss of reputation or business interruption.</li>
                  <li>Loss or corruption of data or documentation.</li>
                  <li>Losses arising from the failure, delay, restriction, or error of any licensed Execution Partner in processing, settling, or declining a payment transaction.</li>
                  <li>Losses arising from blockchain network events, smart contract failures, or the irreversible nature of on-chain transactions.</li>
                  <li>Regulatory actions, penalties, fines, or compliance costs imposed on you by any authority in any jurisdiction.</li>
                </ul>
                <h3>10.2 Specific Liability Exclusions</h3>
                <p>Without prejudice to the foregoing, Omniasky Technology Pte Ltd shall have no liability whatsoever arising from or in connection with:</p>
                <ul>
                  <li>Overpayments, erroneous payments, chargebacks, or unauthorized transactions caused by you or your end users or customers.</li>
                  <li>Fraud, dishonesty, or wilful misconduct by you, your merchants, employees, directors, officers, agents, or any person acting on your behalf.</li>
                  <li>Unauthorized access to or use of your account, API keys, or access tokens, including through lost or stolen credentials.</li>
                  <li>Your failure to implement or maintain security controls, or to install patches or updates made available by us where such updates would have prevented the loss.</li>
                  <li>Your failure to comply with any provision of this Agreement, applicable law, or the terms of any Execution Partner.</li>
                  <li>Any decision by a licensed Execution Partner to decline, restrict, freeze, or terminate services to you, including for compliance or regulatory reasons.</li>
                  <li>Your use of the Services in conjunction with unauthorized or incompatible third-party software or hardware.</li>
                  <li>Your failure to obtain or maintain any licence, permit, or regulatory approval required for your business activities.</li>
                  <li>Any intellectual property infringement committed by you in connection with your use of the Services.</li>
                  <li>Losses caused by events of Force Majeure as described in Section 14.5.</li>
                </ul>
                <h3>10.3 Aggregate Liability Cap</h3>
                <p>
                  Our aggregate liability to you arising out of or in connection with this Agreement, from any cause whatsoever and regardless of the form of action, will at all times be limited to the total platform subscription Fees paid by you to Omniasky in the three (3) months immediately preceding the event giving rise to the claim.
                </p>
                <h3>10.4 Recovery</h3>
                <p>
                  If we suffer losses caused by your actions or omissions that give rise to a liability under this Agreement, we may: (a) set off such amounts against any credits, refunds, or amounts otherwise payable to you; or (b) issue a written demand for repayment of such amounts, which you shall pay within seven (7) calendar days of receipt.
                </p>
                <h3>10.5 Notice of Claims</h3>
                <p>
                  Each party must notify the other in writing within five (5) business days of becoming aware of any claim or circumstance that may give rise to a claim under this Agreement. Failure to provide timely notice does not forfeit the notifying party&rsquo;s rights but may reduce recoverable amounts if the delay materially prejudiced the other party&rsquo;s ability to defend or mitigate.
                </p>
                <h3>10.6 Exceptions</h3>
                <p>
                  The limitations and exclusions in this Section 10 do not apply to: (a) liability for death or personal injury caused by our gross negligence or wilful misconduct; or (b) any other liability that cannot be limited or excluded by applicable law.
                </p>
                <p>
                  Some jurisdictions do not permit the exclusion or limitation of certain types of liability. To the extent such laws apply, the limitations above apply only to the fullest extent permitted.
                </p>
              </Section>

              {/* ── Block 11: Indemnification ── */}
              <Section id="indemnification" title="11. Indemnification">
                <h3>11.1 Our Indemnification of You</h3>
                <p>
                  Subject to your compliance with this Agreement, Omniasky Technology Pte Ltd will defend and indemnify you and your directors, officers, and employees (&ldquo;Your Indemnified Parties&rdquo;) against any third-party claim alleging that the Paymonei platform, as provided by us, infringes a third party&rsquo;s intellectual property rights, patent, or trade secret. If such a claim arises or is reasonably anticipated, we may at our option: (i) obtain the rights for you to continue using the Services; (ii) modify or replace the affected element to remove the infringement; or (iii) if neither option is commercially practicable, terminate this Agreement with reasonable notice.
                </p>
                <p>
                  Our obligations under Section 11.1 do not apply if the alleged infringement arises from: (a) your modification of the Services; (b) your use of the Services in combination with unauthorized third-party products; (c) your continued use after we have provided a non-infringing alternative; or (d) your failure to install security patches or updates we have provided.
                </p>
                <h3>11.2 Your Indemnification of Us</h3>
                <p>
                  You agree to defend, indemnify, and hold harmless Omniasky Technology Pte Ltd, PT Evora Vera Teknologi, and each of their respective directors, officers, employees, and agents (collectively, &ldquo;Our Indemnified Parties&rdquo;) from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees and court costs) arising out of or relating to:
                </p>
                <ul>
                  <li>Your access to or use of the Services.</li>
                  <li>Your breach of any provision of this Agreement.</li>
                  <li>Any inaccurate, false, or misleading information you provide to us or to our Execution Partners.</li>
                  <li>Your violation of any applicable law or regulation in connection with your use of the Services.</li>
                  <li>Fraud, dishonesty, or wilful misconduct by you, your employees, directors, officers, agents, or any person acting on your behalf.</li>
                  <li>Your violation of the rights of any third party, including your own customers.</li>
                  <li>Your failure to obtain or maintain any licence or regulatory approval required for your underlying business activities.</li>
                  <li>Any intellectual property infringement committed by you in connection with your use of the Services.</li>
                </ul>
                <h3>11.3 Indemnification Procedure</h3>
                <p>
                  The party seeking indemnification (&ldquo;Indemnified Party&rdquo;) must: (a) notify the indemnifying party in writing within five (5) business days of becoming aware of the claim; (b) grant the indemnifying party sole control of the defence and settlement, provided that the Indemnified Party&rsquo;s prior written consent is required for any settlement that imposes obligations on the Indemnified Party or includes an admission of liability; and (c) provide reasonable cooperation and information in support of the defence. Failure to provide timely notice does not forfeit indemnification rights except to the extent the delay materially prejudices the indemnifying party&rsquo;s ability to defend.
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
