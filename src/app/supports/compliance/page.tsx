import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar navLinks={[]} />

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
            owns the Paymonei brand and proprietary technology platform. PT
            Cosgrove Teknologi Indonesia and PT Evora Vera Teknologi are
            incorporated companies in Indonesia as technology providers,
            licensed for contract development and consulting services. PT
            Kreigan Digital Wesel is a company incorporated in Indonesia,
            licensed and supervised by Bank Indonesia as a Digital Financial
            Service Provider for fund transfer services in accordance with
            Indonesian financial regulations.
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
            Technology Services, LLC ("CTS") is a software provider
            and does not provide regulated financial or advisory services. Nium
            Pte. Ltd. and its subsidiaries hold regulatory licenses and
            authorizations in over 40 jurisdictions globally, including major
            payment institution licenses, money transmission licenses, and
            electronic money institution authorizations across North America,
            Europe, Asia Pacific, and Latin America, enabling comprehensive
            cross-border payment and card issuance services. Adyen N.V. and its
            subsidiaries are licensed payment service providers authorized by
            central banks and financial authorities worldwide, including
            registration as a Payment Service Provider with De Nederlandsche
            Bank in the Netherlands, Financial Conduct Authority in the UK, and
            various state licenses in the US, providing global payment
            acceptance and processing services for card, digital wallet, and
            local payment methods.
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