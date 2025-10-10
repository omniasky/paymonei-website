import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-24 text-sm">
        <p>
          <strong>Paymonei Platform - Regulatory Compliance</strong>
          <br />
          <strong>Last Updated: September 26, 2025</strong>
        </p>
        <div className="space-y-4">
          <h3>Corporate Structure and Licensing</h3>
          <p>
            Omniasky Technology Pte Ltd is a Singapore-incorporated company that
            owns the Paymonei brand and proprietary technology platform.
            Cosgrove Technology Inc. a Delaware corporation, PT Cosgrove Teknologi Indonesia and PT Evora Vera Teknologi
            are incorporated companies in Indonesia collectively as technology
            providers. PT Kreigan Digital Wesel is a company incorporated in
            Indonesia, licensed and supervised by Bank Indonesia as a Digital
            Financial Service Provider for fund transfer services in accordance
            with Indonesian financial regulations.
          </p>

          <h3>Licensed Financial Partners</h3>
          <p>
            Fiat currency settlement services are provided by licensed financial
            partners in each respective jurisdiction in compliance with local
            banking and money transmission regulations. Circle Internet
            Financial, LLC is licensed as a Money Transmitter by the New York
            State Department of Financial Services and to engage in Virtual
            Currency Business Activity by the New York State Department of
            Financial Services. Circle Internet Singapore Pte. Ltd is an
            incorporated company in Singapore licensed as a Major Payment
            Institution by the Monetary Authority of Singapore. Circle
            Technology Services, LLC (&quot;CTS&quot;) is a software provider
            and does not provide regulated financial or advisory services. Nium
            Pte. Ltd. and its subsidiaries hold regulatory licenses and
            authorizations in over 40 jurisdictions globally, including major
            payment institution licenses, money transmission licenses, and
            electronic money institution authorizations across North America,
            Europe, Asia Pacific, and Latin America, enabling comprehensive
            cross-border payment and card issuance services. Stripe, Inc. and
            its subsidiaries are licensed payment service providers operating
            globally with regulatory authorizations including registration as a
            Payment Institution with the Financial Conduct Authority in the UK,
            Electronic Money Institution licenses across Europe, and money
            transmitter licenses in various US states, providing comprehensive
            payment processing, card issuing, and financial infrastructure
            services worldwide.
          </p>

          <h3>Intellectual Property and Trademarks</h3>
          <p>
            All users of our platform are solely and exclusively responsible for
            their own business operations, service offerings, regulatory
            compliance, and legal obligations. All trademarked names, logos, and
            brand identifiers mentioned or displayed are the exclusive property
            of their respective owners. Unless expressly stated in official
            documentation or public announcements, no use, reference, or display
            of such marks constitutes or implies any endorsement, partnership,
            affiliation, sponsorship, or business relationship with such
            trademark owners. All product names, company names, and service
            marks referenced are used solely for identification purposes in
            accordance with fair use principles and applicable trademark law.
          </p>

          <h3>Platform Security and Compliance Standards</h3>
          <p>
            Our platform provides technology infrastructure services designed
            with security and compliance standards. We implement
            enterprise-grade security protocols, activity monitoring technology,
            and risk management systems aligned with international safety
            standards. Our robust KYC/B and AML/CFT programs ensure compliance
            with anti-money laundering and counter-terrorism financing
            requirements. Service availability is subject to jurisdictional
            limitations and regulatory requirements. We do not provide
            investment advice, endorse specific assets, or make representations
            regarding the suitability, profitability, or reliability of any
            asset. Users are responsible for conducting their own due diligence
            and assessing risks. Stablecoins and digital assets may fluctuate in
            value and are not insured by government agencies.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
