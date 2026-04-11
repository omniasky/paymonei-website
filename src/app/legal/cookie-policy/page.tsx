import type { Metadata } from "next";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Paymonei",
  description:
    "How Paymonei uses cookies and similar tracking technologies on our platform and website — and how you can manage your preferences.",
  openGraph: {
    title: "Cookie Policy | Paymonei",
    description:
      "How Paymonei uses cookies and similar tracking technologies on our platform and website — and how you can manage your preferences.",
    url: "https://paymonei.com/legal/cookie-policy",
    siteName: "Paymonei",
    type: "website",
  },
};

// ─── Table of contents ────────────────────────────────────────────────────────

const toc = [
  { id: "introduction", label: "1. Introduction" },
  { id: "what-are-cookies", label: "2. What Are Cookies" },
  { id: "cookies-we-use", label: "3. Cookies We Use" },
  { id: "managing-preferences", label: "4. Managing Your Preferences" },
  { id: "retention", label: "5. Cookie Retention Periods" },
  { id: "third-party", label: "6. Third-Party Services" },
  { id: "changes", label: "7. Changes to This Policy" },
  { id: "contact", label: "8. Contact" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CookiePolicyPage() {
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
              Cookie Policy
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

              {/* ── Consent Notice ── */}
              <div className="bg-[#F5F5F2] border border-[#EAEAE6] rounded-lg p-6 mb-12">
                <p className="text-[13px] font-medium text-[#0C0C0C] mb-2">Your Cookie Choices</p>
                <p className="text-[14px] text-[#555] leading-relaxed font-light">
                  We use strictly necessary cookies to operate the Paymonei platform. With your consent, we also use functional and analytics cookies to improve your experience. You can manage or withdraw your consent at any time — it will not affect your ability to use the core software.
                </p>
              </div>

              {/* ── Block 1: Introduction ── */}
              <Section id="introduction" title="1. Introduction">
                <p>
                  This Cookie Policy explains how <strong>Omniasky Technology Pte Ltd</strong> (&ldquo;Omniasky&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) uses cookies and similar tracking technologies when you visit <strong>paymonei.com</strong>, access the Paymonei merchant dashboard, or interact with any hosted payment page powered by our software.
                </p>
                <p>
                  This Policy should be read alongside our <Link href="/legal/privacy-policy">Privacy Policy</Link> and <Link href="/legal/terms-of-service">Terms of Service</Link>, which provide additional context on how we collect, use, and protect your personal data.
                </p>
                <p>
                  You can manage your cookie preferences at any time. Withdrawing consent is as straightforward as giving it — and will not affect your ability to access or use core Paymonei platform functionality.
                </p>
              </Section>

              {/* ── Block 2: What Are Cookies ── */}
              <Section id="what-are-cookies" title="2. What Are Cookies">
                <p>
                  Cookies are small text files placed on your device (computer, tablet, or mobile) by a website when you visit it. They allow the website to remember information about your visit — such as your login session, language preference, or consent choices — so you do not need to re-enter them on each page.
                </p>
                <h3>Types by Duration</h3>
                <ul>
                  <li><strong>Session cookies</strong> expire when you close your browser. They hold temporary state — such as your login session — during a single visit.</li>
                  <li><strong>Persistent cookies</strong> remain on your device after you close your browser, for a set duration. They remember preferences and consent choices across visits.</li>
                </ul>
                <h3>Types by Origin</h3>
                <ul>
                  <li><strong>First-party cookies</strong> are set directly by Paymonei (paymonei.com). We control what data they contain and how long they persist.</li>
                  <li><strong>Third-party cookies</strong> are set by external services we use — such as analytics tools or infrastructure providers. These services operate under their own privacy and cookie policies.</li>
                </ul>
                <h3>Similar Technologies</h3>
                <p>
                  We also use browser local storage and session storage, which function similarly to cookies. The same consent framework applies to these technologies.
                </p>
              </Section>

              {/* ── Block 3: Cookies We Use ── */}
              <Section id="cookies-we-use" title="3. Cookies We Use">
                <p>We use three categories of cookies. Each is described in the tables below.</p>

                <h3>Category 1 — Strictly Necessary</h3>
                <p>
                  Essential for the platform to function. These enable authentication, session management, and security. No consent is required and they cannot be disabled without breaking core functionality.
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Cookie</th>
                      <th>Purpose</th>
                      <th>Provider</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>session_id</code></td>
                      <td>Maintains your authenticated merchant session</td>
                      <td>Paymonei</td>
                      <td>Session</td>
                    </tr>
                    <tr>
                      <td><code>csrf_token</code></td>
                      <td>Prevents unauthorized cross-site form submissions</td>
                      <td>Paymonei</td>
                      <td>Session</td>
                    </tr>
                    <tr>
                      <td><code>auth_token</code></td>
                      <td>Encrypted authentication token for API access after login</td>
                      <td>Paymonei</td>
                      <td>7 days (rolling)</td>
                    </tr>
                    <tr>
                      <td><code>cookie_consent</code></td>
                      <td>Stores your cookie consent preference to avoid re-prompting on every visit</td>
                      <td>Paymonei</td>
                      <td>12 months</td>
                    </tr>
                  </tbody>
                </table>

                <h3>Category 2 — Functional / Preference</h3>
                <p>
                  These remember your settings to improve your experience. Not essential to platform operation, but they make the interface more convenient. Explicit consent is required for EEA and UK visitors.
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Cookie</th>
                      <th>Purpose</th>
                      <th>Provider</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>locale</code></td>
                      <td>Stores your language and regional format preference</td>
                      <td>Paymonei</td>
                      <td>12 months</td>
                    </tr>
                    <tr>
                      <td><code>timezone</code></td>
                      <td>Stores your timezone preference for invoice timestamps and reporting</td>
                      <td>Paymonei</td>
                      <td>12 months</td>
                    </tr>
                    <tr>
                      <td><code>dashboard_layout</code></td>
                      <td>Remembers your dashboard view layout preference</td>
                      <td>Paymonei</td>
                      <td>12 months</td>
                    </tr>
                  </tbody>
                </table>

                <h3>Category 3 — Analytics / Performance</h3>
                <p>
                  Help us understand how the platform is used so we can improve it. All analytics data is aggregated and used only for product improvement — never for advertising or profiling. IP addresses are anonymised at the point of collection. Explicit consent is required for EEA, UK, and equivalent-jurisdiction visitors.
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Purpose</th>
                      <th>Provider</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Product analytics: tracking feature adoption, session behaviour, and UX patterns to improve the platform. Data is not shared with third parties for advertising purposes.</td>
                      <td>Analytics service provider (first-party and/or third-party)</td>
                      <td>Up to 1 year</td>
                    </tr>
                    <tr>
                      <td>Infrastructure performance monitoring: tracking page load reliability, error rates, and system uptime</td>
                      <td>Infrastructure monitoring provider</td>
                      <td>Session – 90 days</td>
                    </tr>
                  </tbody>
                </table>

                <h3>Category 4 — Marketing / Advertising</h3>
                <p>
                  Paymonei does not currently use any marketing or advertising cookies. We do not place cross-site tracking pixels, advertising network cookies, or remarketing tags on paymonei.com or our hosted payment pages. If this changes in the future, this policy will be updated and your explicit consent will be sought before any such cookies are activated.
                </p>
              </Section>

              {/* ── Block 4: Managing Preferences ── */}
              <Section id="managing-preferences" title="4. Managing Your Cookie Preferences">
                <p>
                  You have full control over non-essential cookies. You can accept, reject, or selectively enable categories at any time without affecting core platform functionality.
                </p>
                <h3>4.1 In-Platform Preference Panel</h3>
                <p>
                  A cookie consent banner is displayed on your first visit to paymonei.com. You can accept all, reject non-essential, or manage individual category preferences. You can return to this panel at any time via the &ldquo;Cookie Preferences&rdquo; link in the website footer.
                </p>
                <h3>4.2 Browser Settings</h3>
                <p>You can manage or delete cookies directly in your browser. Instructions for common browsers:</p>
                <ul>
                  <li><Link href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</Link></li>
                  <li><Link href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</Link></li>
                  <li><Link href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</Link></li>
                  <li><Link href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</Link></li>
                </ul>
                <p>
                  Note: disabling all cookies in your browser will prevent you from logging in to the Paymonei dashboard, as the authentication session cookie is strictly necessary for platform operation.
                </p>
                <h3>4.3 Global Privacy Control &amp; Do Not Track</h3>
                <p>
                  We respect the Global Privacy Control (GPC) signal. If your browser sends a GPC signal, we treat it as a &ldquo;Reject Non-Essential&rdquo; preference for analytics cookies. The Do Not Track (DNT) signal is also honoured as a soft opt-out of analytics cookie activation.
                </p>
                <h3>4.4 Third-Party Opt-Out</h3>
                <p>
                  Where we use third-party analytics services, those providers may offer their own opt-out mechanisms (such as browser add-ons or account-level privacy settings). Opting out at provider level supplements — but does not replace — your in-platform consent preference managed through our cookie banner.
                </p>
              </Section>

              {/* ── Block 5: Retention ── */}
              <Section id="retention" title="5. Cookie Retention Periods">
                <table>
                  <thead>
                    <tr>
                      <th>Cookie Category</th>
                      <th>Retention</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Session cookies (auth, CSRF)</td>
                      <td>Deleted on browser close</td>
                      <td>Strictly Necessary — cannot be disabled</td>
                    </tr>
                    <tr>
                      <td>Authentication token</td>
                      <td>7 days (rolling refresh)</td>
                      <td>Renewed on each active platform session</td>
                    </tr>
                    <tr>
                      <td>Consent preference cookie</td>
                      <td>12 months</td>
                      <td>Re-prompt shown after expiry or on material policy change</td>
                    </tr>
                    <tr>
                      <td>Functional cookies</td>
                      <td>12 months</td>
                      <td>Deleted immediately if consent is withdrawn</td>
                    </tr>
                    <tr>
                      <td>Analytics cookies (third-party service providers)</td>
                      <td>Up to 1 year</td>
                      <td>Deleted on consent withdrawal; IP anonymised at collection</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  When consent is withdrawn, non-essential cookies are removed from your device on your next page load. Analytics data collected prior to withdrawal is not retained beyond 90 days of the withdrawal event.
                </p>
              </Section>

              {/* ── Block 6: Third-Party Services ── */}
              <Section id="third-party" title="6. Third-Party Services">
                <p>
                  Paymonei uses third-party services for analytics and infrastructure monitoring. These services may set cookies or use similar technologies on paymonei.com. The categories of third-party providers we currently engage are:
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Purpose</th>
                      <th>Cookie Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Product analytics provider</td>
                      <td>Aggregated analysis of feature adoption, user flows, and platform usage to improve the software. Data is not used for advertising.</td>
                      <td>Analytics (consent required for EEA/UK)</td>
                    </tr>
                    <tr>
                      <td>Infrastructure &amp; performance monitoring provider</td>
                      <td>Monitoring of platform reliability, error rates, and load performance. No personal profiling.</td>
                      <td>Performance (strictly necessary or session-only)</td>
                    </tr>
                    <tr>
                      <td>Cloud hosting provider</td>
                      <td>Hosting and delivery of the Paymonei platform and website. May set session-level technical cookies.</td>
                      <td>Strictly Necessary</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  We maintain an internal Register of Processing Activities (ROPA) that lists the specific third-party providers in each category. This register is available to regulators, banking partners, and enterprise merchants upon request. We do not publish individual provider names in this public policy to maintain operational flexibility as our infrastructure evolves — with the exception that any analytics provider that independently processes personal data for its own purposes (such as certain web analytics platforms) will be named explicitly in this section when activated.
                </p>
                <p>
                  All third-party providers are bound by data processing agreements consistent with the standards in our <Link href="/legal/privacy-policy">Privacy Policy</Link>. We do not engage advertising networks, social media tracking pixels, or data brokers in connection with our cookies.
                </p>
              </Section>

              {/* ── Block 7: Changes ── */}
              <Section id="changes" title="7. Changes to This Cookie Policy">
                <p>
                  We may update this Cookie Policy to reflect changes in the cookies we use, updates to third-party services, or new legal requirements. Where we add new cookie categories or materially change how existing cookies are used, we will update the &ldquo;Effective date&rdquo; at the top of this page and display a refreshed consent banner on your next visit so you can review and update your preferences before new cookies are activated.
                </p>
                <p>
                  Minor clarifications — such as correcting cookie names or descriptions — will be made without triggering a new consent prompt, provided there is no change to how your data is used.
                </p>
              </Section>

              {/* ── Block 8: Contact ── */}
              <Section id="contact" title="8. Contact">
                <p>
                  For questions about our use of cookies, to exercise your data rights in relation to cookie-collected data, or to submit a formal data protection request:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mt-6">
                  <div className="bg-[#F5F5F2] border border-[#EAEAE6] rounded-lg p-5">
                    <p className="text-[11px] uppercase tracking-wider text-[#999] font-medium mb-3">Privacy &amp; Cookie Inquiries</p>
                    <p className="text-[15px] text-[#0C0C0C] font-medium mb-1">Paymonei</p>
                    <Link href="mailto:privacy@paymonei.com" className="text-[14px] text-[#0C0C0C] underline underline-offset-2 hover:opacity-70 block">
                      privacy@paymonei.com
                    </Link>
                  </div>
                  <div className="bg-[#F5F5F2] border border-[#EAEAE6] rounded-lg p-5">
                    <p className="text-[11px] uppercase tracking-wider text-[#999] font-medium mb-3">Legal &amp; Data Protection</p>
                    <p className="text-[15px] text-[#0C0C0C] font-medium mb-1">Paymonei</p>
                    <Link href="mailto:legal@paymonei.com" className="text-[14px] text-[#0C0C0C] underline underline-offset-2 hover:opacity-70 block">
                      legal@paymonei.com
                    </Link>
                  </div>
                </div>
                <p className="text-[14px] text-[#777] mt-6 font-light">
                  This Cookie Policy is published by Omniasky Technology Pte Ltd, registered in Singapore, the intellectual property and management holding company of the Paymonei platform. For related policies, see our <Link href="/legal/privacy-policy">Privacy Policy</Link> and <Link href="/legal/terms-of-service">Terms of Service</Link>.
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
      [&_code]:text-[13px] [&_code]:font-mono [&_code]:bg-[#F0F0ED] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[#555]
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
