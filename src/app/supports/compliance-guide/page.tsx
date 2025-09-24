import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

export default function ComplianceGuidePage() {
  const lastUpdated = "January 1, 2025";
  const effectiveDate = "January 1, 2025";

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar navLinks={[]} />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 border-b border-gray-200 dark:border-gray-700 pb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Compliance Guide
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            AML/CFT, Sanctions & Financial Crime Prevention
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>Last Updated: {lastUpdated}</p>
            <p>Effective Date: {effectiveDate}</p>
          </div>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">
              CRITICAL COMPLIANCE REQUIREMENTS
            </h1>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>This Compliance Guide outlines mandatory requirements for using our Web3 wallet services. Failure to comply may result in account restrictions, transaction blocking, or service termination.</strong>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Financial Crime Prevention & Compliance Framework
          </h2>

          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            1. Anti-Money Laundering (AML) and Counter-Financing of Terrorism (CFT) Requirements
          </h3>

          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Our platform operates under strict compliance with global AML/CFT regulations including Financial Action Task Force (FATF) Recommendations, European Union Anti-Money Laundering Directives, Bank Secrecy Act (BSA), and USA PATRIOT Act requirements.
          </p>

          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            2. Know Your Customer (KYC) and Customer Due Diligence (CDD) Requirements
          </h3>

          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            All users must complete comprehensive identity verification including personal information, document verification with government-issued photo identification, biometric verification with facial recognition and liveness detection, and source of wealth documentation.
          </p>

          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            3. Sanctions Screening and Compliance
          </h3>

          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            We maintain compliance with major sanctions regimes including OFAC Specially Designated Nationals (SDN) List, EU Consolidated List, UN Security Council Consolidated List, and other relevant national sanctions programs with real-time screening procedures.
          </p>

          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            4. Suspicious Activity Reporting and Record Keeping
          </h3>

          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            We file Suspicious Activity Reports (SARs) for transactions with no apparent legitimate purpose, attempts to avoid reporting requirements, and unusual customer behavior. We maintain comprehensive records for 5 years after account closure or transaction completion.
          </p>

          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            5. Blockchain Analysis and Digital Asset Compliance
          </h3>

          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Our blockchain analysis capabilities include address clustering and wallet identification, transaction pattern analysis, mixing service and privacy coin detection, and risk scoring based on transaction history and counterparty analysis.
          </p>

          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            6. User Compliance Obligations and Consequences
          </h3>

          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            All users must provide accurate information, respond promptly to additional requests, comply with all applicable laws, and cooperate with compliance investigations. Non-compliance may result in account restrictions, suspension, or termination.
          </p>

          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Users are encouraged to report suspected money laundering, sanctions violations, fraud, security breaches, or any activity that may violate applicable laws through our compliance hotline or secure reporting portal.
          </p>
        </div>

        <div className="text-center py-8 mt-12 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This Compliance Guide is binding on all users and forms part of our Terms of Service.
            Compliance with these requirements is mandatory for continued access to our services.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}