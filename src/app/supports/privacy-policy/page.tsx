import type { Metadata } from "next";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Paymonei",
  description:
    "How Paymonei collects, uses and protects business data when you use our billing and payment orchestration software.",
  openGraph: {
    title: "Privacy Policy | Paymonei",
    description:
      "How Paymonei collects, uses and protects business data when you use our billing and payment orchestration software.",
    url: "https://paymonei.com/supports/privacy-policy",
    siteName: "Paymonei",
    type: "website",
  },
};

// ─── Section data ────────────────────────────────────────────────────────────

const toc = [
  { id: "introduction", label: "1. Introduction & Scope" },
  { id: "information-we-collect", label: "2. Information We Collect" },
  { id: "how-we-use", label: "3. How We Use Your Information" },
  { id: "how-we-share", label: "4. How We Share Information" },
  { id: "cookies", label: "5. Cookies & Tracking" },
  { id: "security-retention", label: "6. Security & Retention" },
  { id: "your-rights", label: "7. Your Privacy Rights" },
  { id: "contact", label: "8. Contact" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-[13px] text-[#999] font-light">
              <span>Effective date: <strong className="text-[#555] font-medium">11 April 2026</strong></span>
              <span className="hidden sm:block opacity-30">·</span>
              <span>Questions: <strong className="text-[#555] font-medium">privacy@paymonei.com</strong></span>
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
                  Paymonei is a <strong className="font-medium text-[#333]">software orchestration platform</strong> that provides billing and payment workflow tools. We do not hold, transmit, or have custody of financial funds at any time. All financial transaction execution and settlement is performed exclusively by our licensed third-party financial institution partners. This means the data described in this policy relates to software access, analytics, and workflow state — not to the custody of money.
                </p>
              </div>

              {/* ── Block 1: Introduction & Scope ── */}
              <Section id="introduction" title="1. Introduction & Scope">
                <p>
                  This Privacy Policy describes how <strong>Omniasky Technology Pte Ltd</strong>, a company registered in Singapore that holds the proprietary technology and intellectual property of the Paymonei platform (&ldquo;Omniasky&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), collects, uses, and protects personal data when you access or use the Paymonei platform and any associated websites, APIs, dashboards, or hosted services (collectively, the &ldquo;Services&rdquo;).
                </p>
                <p>
                  Technology development and platform management services are delivered by our affiliated entity, <strong>PT Evora Vera Teknologi</strong>, a limited liability company incorporated in Indonesia, acting as our authorized technology partner.
                </p>
                <CalloutBox>
                  Neither Omniasky Technology Pte Ltd nor PT Evora Vera Teknologi is a bank, payment institution, money services business, or virtual asset service provider. We are software companies. Financial execution services are provided by our regulated, licensed partners on a separate contractual basis.
                </CalloutBox>
                <p>This Policy applies to:</p>
                <ul>
                  <li><strong>Merchants:</strong> Businesses and authorised representatives of businesses who create a Paymonei account to access our billing and workflow software. Paymonei is a business-to-business software platform and is not intended for use by private individuals acting in a personal capacity.</li>
                  <li><strong>Transaction Participants:</strong> Individuals who complete a payment via a merchant&rsquo;s hosted checkout link or payment page powered by Paymonei software. Data relating to these individuals is processed on behalf of the merchant.</li>
                  <li><strong>Visitors:</strong> Anyone browsing paymonei.com or our subdomains.</li>
                </ul>
                <p>
                  By using the Services, you confirm that you have read and understood this Policy. If you are accessing the Services on behalf of an organisation, you represent and warrant that you have authority to accept this Policy on that entity&rsquo;s behalf.
                </p>
              </Section>

              {/* ── Block 2: Information We Collect ── */}
              <Section id="information-we-collect" title="2. Information We Collect">
                <h3>2.1 From Merchants (Our B2B SaaS Subscribers)</h3>
                <p>When a business registers, configures, or operates a Paymonei account, we collect:</p>
                <ul>
                  <li><strong>Account credentials:</strong> Name, business email address, password hash.</li>
                  <li><strong>Business profile data:</strong> Legal entity name, business registration number, registration country, registered address, nature of business, and industry type — used to configure your billing software and determine applicable features.</li>
                  <li><strong>Authorized representative details:</strong> Full name, role or title, and contact information of the individual registering or administering the account on behalf of the business.</li>
                  <li><strong>Director and beneficial owner information:</strong> Names and roles of company directors provided during account onboarding, used for platform access verification purposes as described in Section 2.2 below.</li>
                  <li><strong>API integration data:</strong> API keys, webhook URLs, and integration event logs so that your systems can connect to our software engine.</li>
                  <li><strong>Dashboard usage analytics:</strong> Feature interactions, session duration, and click paths — used to improve the software product.</li>
                  <li><strong>Support communications:</strong> Any information you voluntarily share when contacting our support team.</li>
                </ul>

                <h3>2.2 Business Verification Data</h3>
                <p>
                  To protect the integrity of our software platform and prevent misuse, we conduct identity verification on authorized representatives and directors of merchant businesses prior to enabling full platform access. This is a software access control measure, not a regulated financial compliance activity.
                </p>
                <p>As part of this process, we share the identification information you provide with our third-party verification partners:</p>
                <ul>
                  <li><strong>Didit.me</strong> — for identity verification of directors and authorized representatives of businesses incorporated outside Indonesia.</li>
                  <li><strong>Verihubs</strong> — for identity verification of directors and authorized representatives of businesses incorporated in Indonesia.</li>
                </ul>
                <p>
                  These providers may process government-issued identity document images and biometric data (such as selfie comparisons) on our behalf, under their own data processing terms. We do not store raw identity document images or biometric data on our own infrastructure after verification is complete. We retain only the verification outcome (verified / not verified) and the reference identifier provided by the verification partner.
                </p>
                <CalloutBox>
                  Paymonei&rsquo;s identity verification is conducted solely to confirm that an authorized representative of a legitimate business is accessing our software platform. Regulated Anti-Money Laundering (AML), Counter-Terrorism Financing (CFT), sanctions screening, and ongoing transaction monitoring obligations are fulfilled by our licensed financial execution partners — not by Paymonei. We do not collect UBO (Ultimate Beneficial Owner) declarations for regulatory reporting purposes.
                </CalloutBox>

                <h3>2.3 From Transaction Participants</h3>
                <p>When a transaction participant accesses a Paymonei-hosted checkout link or payment page generated by a merchant, we collect the minimum data needed to render and track the software workflow:</p>
                <ul>
                  <li><strong>Contact metadata:</strong> Name, email address, and shipping address — used to generate invoice records and confirmation emails on behalf of the merchant.</li>
                  <li><strong>Device and network context:</strong> IP address, browser type, operating system, referrer URL — forwarded (encrypted) to our licensed execution partners for fraud-scoring purposes.</li>
                  <li><strong>Session token:</strong> An encrypted, temporary identifier used solely to maintain checkout session state. It contains no financial credentials.</li>
                </ul>
                <p>
                  We do <strong>not</strong> collect, store, or process raw payment card numbers (PANs), bank account numbers, or digital asset private keys. When a participant selects a payment method, those credentials are submitted directly to our licensed execution partners via an encrypted channel. We receive only a tokenised reference confirming payment instruction status.
                </p>

                <h3>2.4 Automatically Collected Technical Data</h3>
                <ul>
                  <li><strong>Server logs:</strong> Timestamped records of API requests, response codes, and event metadata for system reliability and debugging.</li>
                  <li><strong>Performance metrics:</strong> Latency, uptime, and error rates collected by our infrastructure monitoring tools.</li>
                </ul>
              </Section>

              {/* ── Block 3: How We Use Information ── */}
              <Section id="how-we-use" title="3. How We Use Your Information">
                <p>We process personal data only for the following specific, lawful purposes:</p>
                <table>
                  <thead>
                    <tr>
                      <th>Purpose</th>
                      <th>Lawful Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Generating invoice PDFs and tracking billing workflow status on behalf of merchants</td>
                      <td>Performance of contract (with merchant)</td>
                    </tr>
                    <tr>
                      <td>Powering the merchant&rsquo;s analytics dashboard and reporting tools</td>
                      <td>Legitimate interest (product delivery)</td>
                    </tr>
                    <tr>
                      <td>Sending automated dunning, reminder, and receipt emails on behalf of merchants</td>
                      <td>Performance of contract</td>
                    </tr>
                    <tr>
                      <td>Forwarding device context (IP, user agent) to execution partners for fraud scoring</td>
                      <td>Legitimate interest (fraud prevention)</td>
                    </tr>
                    <tr>
                      <td>Improving software features and fixing bugs through usage analytics</td>
                      <td>Legitimate interest (product improvement)</td>
                    </tr>
                    <tr>
                      <td>Communicating product updates, security notices, and support responses</td>
                      <td>Performance of contract / Legitimate interest</td>
                    </tr>
                    <tr>
                      <td>Complying with a court order, regulatory demand, or applicable law</td>
                      <td>Legal obligation</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  We do not use personal data for automated decision-making that produces legal or similarly significant effects without human review.
                </p>
              </Section>

              {/* ── Block 4: How We Share Information ── */}
              <Section id="how-we-share" title="4. How We Share Information">
                <p>
                  We do <strong>not sell, rent, or trade</strong> personal data. We share data only in the following limited circumstances:
                </p>

                <h3>4.1 Licensed Financial Execution Partners</h3>
                <p>
                  When a merchant or transaction participant initiates a payment workflow through our software, we transmit the minimum necessary data (session context, device metadata, and invoice reference) to our licensed third-party financial institution partners who are independently regulated to provide payment execution and settlement services. These partners process payment credentials and fund movement under their own regulatory licences and privacy frameworks.
                </p>
                <p>
                  AML/CFT compliance obligations, including transaction monitoring and sanctions screening, are fulfilled by these licensed execution partners — not by Paymonei.
                </p>
                <p>
                  We contractually require all such partners to apply data protection standards no less protective than those described in this Policy.
                </p>

                <h3>4.2 Identity Verification Partners</h3>
                <p>
                  We share authorized representative and director identity information with the following verification providers during merchant onboarding, for platform access control purposes:
                </p>
                <ul>
                  <li><strong>Didit.me</strong> — identity and document verification for non-Indonesian merchants. Didit.me processes identity document images and liveness data under their own privacy policy.</li>
                  <li><strong>Verihubs</strong> — identity and document verification for Indonesian merchants. Verihubs processes identity document images and liveness data in accordance with Indonesian data protection law.</li>
                </ul>
                <p>We share only the minimum information required to complete verification. We retain the verification outcome and reference identifier only.</p>

                <h3>4.3 Cloud Infrastructure & Service Providers</h3>
                <p>We use the following categories of third-party providers to operate our software infrastructure:</p>
                <ul>
                  <li><strong>Cloud hosting:</strong> Amazon Web Services, Vercel</li>
                  <li><strong>Database:</strong> Managed database providers (AWS RDS)</li>
                  <li><strong>Monitoring & observability:</strong> Logging and error tracking tools</li>
                  <li><strong>Email delivery:</strong> Transactional email providers (for invoice dispatch)</li>
                </ul>
                <p>All providers are bound by data processing agreements and, where applicable, standard contractual clauses.</p>

                <h3>4.3 Data Residency & Regional Storage</h3>
                <p>
                  We apply regional data storage to ensure personal data is held in proximity to the users it relates to and in compliance with applicable local data localisation requirements:
                </p>
                <ul>
                  <li><strong>Global merchants and transaction participants:</strong> Data is stored on Amazon Web Services in the Singapore region (ap-southeast-1).</li>
                  <li><strong>Indonesian merchants and transaction participants:</strong> Data is stored on Amazon Web Services in the Indonesia region (ap-southeast-3, Jakarta) in alignment with applicable Indonesian data localisation guidelines under UU PDP (Law No. 27 of 2022).</li>
                </ul>
                <p>
                  Cross-region data transfers occur only where technically necessary for system reliability and redundancy. All such transfers are encrypted in transit using TLS 1.2 or higher.
                </p>

                <h3>4.4 Intra-Group Processing</h3>
                <p>
                  Omniasky Technology Pte Ltd (Singapore) and PT Evora Vera Teknologi (Indonesia) operate as affiliated entities within the same group. Data is shared between them solely to deliver and support the Paymonei software product. Both entities apply the data protection standards described in this Policy and are bound by a formal intra-group data sharing agreement.
                </p>

                <h3>4.5 Legal Disclosure</h3>
                <p>
                  We may disclose personal data to competent authorities, courts, or regulators where we are required to do so by applicable law, a valid legal order, or where we have a good-faith belief that disclosure is necessary to prevent harm. We will notify affected users where legally permitted to do so.
                </p>

                <h3>4.6 Business Transfers</h3>
                <p>
                  In the event of a merger, acquisition, or sale of substantially all assets, personal data may be transferred as part of that transaction. We will inform users via notice on our website or by email before data is transferred and becomes subject to a different privacy policy.
                </p>
              </Section>

              {/* ── Block 5: Cookies ── */}
              <Section id="cookies" title="5. Cookies & Tracking">
                <p>We use the following categories of cookies and tracking technologies:</p>
                <ul>
                  <li><strong>Strictly necessary cookies:</strong> Session authentication tokens and CSRF protection. These cannot be disabled without breaking core software functionality.</li>
                  <li><strong>Performance cookies:</strong> Anonymous telemetry used to measure page load times and API reliability.</li>
                  <li><strong>Analytics trackers:</strong> We may use privacy-respecting analytics tools to understand feature adoption. IP addresses used for analytics are anonymised at collection.</li>
                </ul>
                <p>
                  We do not use cross-site advertising trackers or interest-based profiling. You may manage cookie preferences via your browser settings. Disabling non-essential cookies will not affect your ability to use the core software.
                </p>
              </Section>

              {/* ── Block 6: Security & Retention ── */}
              <Section id="security-retention" title="6. Data Security & Retention">
                <h3>6.1 Security Measures</h3>
                <p>
                  We apply industry-standard technical and organisational security controls to protect personal data from unauthorised access, disclosure, alteration, or destruction:
                </p>
                <ul>
                  <li>All data in transit is encrypted using TLS 1.2 or higher.</li>
                  <li>Data at rest is encrypted using AES-256.</li>
                  <li>Access to production systems is restricted by role-based access control and multi-factor authentication.</li>
                  <li>We conduct periodic security reviews and code audits.</li>
                </ul>
                <p>
                  Important: our security controls protect <strong>software data and instructions</strong>. The financial funds themselves are secured and insured by our licensed execution partners under their own regulatory requirements.
                </p>

                <h3>6.2 Retention Periods</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Data Category</th>
                      <th>Retention Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Merchant account data</td>
                      <td>Duration of account + 3 years after closure</td>
                    </tr>
                    <tr>
                      <td>Invoice and billing records</td>
                      <td>7 years (driven by Singapore corporate tax requirements)</td>
                    </tr>
                    <tr>
                      <td>Transaction participant session data</td>
                      <td>90 days from checkout event</td>
                    </tr>
                    <tr>
                      <td>Server log data</td>
                      <td>30–90 days</td>
                    </tr>
                    <tr>
                      <td>Support communications</td>
                      <td>3 years from last contact</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  When retention periods expire, data is securely deleted or anonymised. We do not retain personal data for longer than necessary solely on the basis of potential future litigation.
                </p>
              </Section>

              {/* ── Block 7: Your Rights ── */}
              <Section id="your-rights" title="7. Your Privacy Rights">
                <p>
                  Depending on your jurisdiction, you may have the following rights regarding personal data we hold about you:
                </p>
                <ul>
                  <li><strong>Right to access:</strong> Request a copy of the personal data we hold about you.</li>
                  <li><strong>Right to correction:</strong> Request that inaccurate or incomplete data be corrected.</li>
                  <li><strong>Right to deletion (&ldquo;right to be forgotten&rdquo;):</strong> Request deletion of your data, subject to our legal retention obligations. Note that data relating to transaction participants is held on behalf of the merchant — deletion requests for such data may require coordination with the relevant merchant.</li>
                  <li><strong>Right to restrict processing:</strong> Request that we limit how we use your data in specific circumstances.</li>
                  <li><strong>Right to data portability:</strong> Receive a structured, machine-readable copy of data you have provided to us.</li>
                  <li><strong>Right to object:</strong> Object to processing based on legitimate interests.</li>
                  <li><strong>Right to withdraw consent:</strong> Where processing is based on consent, withdraw it at any time without affecting prior processing.</li>
                </ul>
                <p>
                  <strong>Singapore residents (PDPA):</strong> You may exercise access and correction rights in accordance with the Personal Data Protection Act 2012.
                </p>
                <p>
                  <strong>Indonesia residents (UU PDP):</strong> You may exercise rights in accordance with Law No. 27 of 2022 on Personal Data Protection.
                </p>
                <p>
                  <strong>EEA/UK residents (GDPR/UK GDPR):</strong> If you access our services from the EEA or UK, we process your data under GDPR/UK GDPR and you have all rights listed above plus the right to lodge a complaint with your national supervisory authority.
                </p>
                <p>
                  To exercise any of these rights, email <Link href="mailto:privacy@paymonei.com" className="text-[#0C0C0C] underline underline-offset-2 hover:opacity-70">privacy@paymonei.com</Link>. We will respond within 30 days. We may need to verify your identity before acting on a request.
                </p>
              </Section>

              {/* ── Block 8: Contact ── */}
              <Section id="contact" title="8. Contact">
                <p>
                  For any questions, concerns, or requests relating to this Privacy Policy or our data practices, contact our privacy team:
                </p>
                <div className="bg-[#F5F5F2] border border-[#EAEAE6] rounded-lg p-6 not-prose">
                  <p className="text-[11px] uppercase tracking-wider text-[#999] font-medium mb-3">Privacy Team</p>
                  <p className="text-[15px] text-[#0C0C0C] font-medium">Paymonei</p>
                  <Link href="mailto:privacy@paymonei.com" className="text-[14px] text-[#0C0C0C] underline underline-offset-2 hover:opacity-70 mt-1 block">
                    privacy@paymonei.com
                  </Link>
                  <p className="text-[12px] text-[#AAA] font-light mt-4">
                    Paymonei is a product of Omniasky Technology Pte Ltd, registered in Singapore.
                  </p>
                </div>
                <p className="text-[14px] text-[#777] mt-6 font-light">
                  We may update this Privacy Policy periodically. Material changes will be communicated via email to registered merchants or via a notice on our website at least 14 days before taking effect. The &ldquo;Effective date&rdquo; at the top of this page reflects the date of the most recent revision.
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
      <div
        className="text-[15px] text-[#555] leading-[1.8] font-light space-y-4"
        style={{
          /* prose-like styles inline to avoid @tailwindcss/typography dependency */
        }}
      >
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

function CalloutBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 border-l-4 border-[#0C0C0C] pl-5 py-1">
      <p className="text-[14px] text-[#555] leading-relaxed font-light italic">
        {children}
      </p>
    </div>
  );
}
