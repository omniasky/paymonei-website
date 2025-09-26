import Link from "next/link";
import Image from "next/image";

export function LegalDisclaimer() {
  return (
    <section className="border-t bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4 bg-black">
        <Image
          src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/paymonei-logo-secondary.png"
          alt="Paymonei"
          width={120}
          height={32}
          className="h-8 w-auto"
        />
        <div>
          <p className="text-xs text-gray-400 leading-relaxed text-left">
            Omniasky Technology Pte Ltd is a Singapore-incorporated company that
            owns the Paymonei brand and proprietary technology platform. PT
            Cosgrove Teknologi Indonesia and PT Evora Vera Teknologi are
            incorporated companies in Indonesia as technology providers,
            licensed for contract development and consulting services.
            <br />
            <br />
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
            cross-border payment and card issuance services. Adyen N.V. and its
            subsidiaries are licensed payment service providers authorized by
            central banks and financial authorities worldwide, including
            registration as a Payment Service Provider with De Nederlandsche
            Bank in the Netherlands, Financial Conduct Authority in the UK, and
            various state licenses in the US, providing global payment
            acceptance and processing services for card, digital wallet, and
            local payment methods.
            <br />
            <br />
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
            <br />
            <br />
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
            <br />
            <br />
            By using this platform, you agree to our{" "}
            <Link href="/supports/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/supports/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
