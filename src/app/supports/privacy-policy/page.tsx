import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar navLinks={[]} />

      <div className="max-w-4xl mx-auto px-6 py-24 text-sm">
        <p>
          <strong>Paymonei Platform - Privacy Policy</strong>
          <br />
          <strong>Last Updated: September 19, 2025</strong>
        </p>
        <div className="space-y-4">
          <p>
            Omniasky Technology Pte Ltd, PT Cosgrove Teknologi Indonesia and PT
            Evora Vera Teknologi (collectively, &quot;Paymonei&quot;,
            &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;) are committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our Paymonei platform and related
            services (the &quot;Services&quot;). This Policy applies to all
            information collected through our Services, as well as any related
            services, sales, marketing, or events.
          </p>
          <p>
            Please read this Privacy Policy carefully. By using our Services,
            you agree to the collection and use of information in accordance
            with this policy. If you do not agree with the terms of this privacy
            policy, please do not access the Services.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            We collect information that you provide to us, information that is
            automatically collected, and information from third parties. The
            types of personal information (&quot;Personal Data&quot;) we may
            collect include:
          </p>

          <h4>1.1. Information You Provide to Us</h4>
          <ul>
            <li>
              <strong>Personal Identification Information:</strong> Your full
              name, date of birth, physical address, email address, phone
              number, and nationality.
            </li>
            <li>
              <strong>Formal Identification Information:</strong>{" "}
              Government-issued identification numbers (e.g., Passport, Driver’s
              License), and other documents requested for our Know-Your-Customer
              (&quot;KYC&quot;) and Know-Your-Business (&quot;KYB&quot;)
              verification processes, including photographs or
              &quot;selfies&quot; for identity confirmation.
            </li>
            <li>
              <strong>Business Information:</strong> For entity accounts, we may
              collect business name, registration details, articles of
              incorporation, and information about beneficial owners and
              directors.
            </li>
            <li>
              <strong>Financial Information:</strong> Bank account numbers,
              routing information, and other payment details necessary to
              facilitate fiat currency settlements.
            </li>
            <li>
              <strong>AI Agent Configuration Data:</strong> The parameters,
              rules, and logic you define for any AI Agents you deploy through
              our protocol.
            </li>
          </ul>

          <h4>1.2. Information We Collect Automatically</h4>
          <ul>
            <li>
              <strong>Transactional Information:</strong> Information about the
              transactions you or your AI Agents perform, including public
              wallet addresses, transaction amounts, timestamps, and network
              data. Note that this information is also publicly available on the
              blockchain.
            </li>
            <li>
              <strong>Device and Usage Data:</strong> IP address, device type,
              operating system, browser type, unique device identifiers, and
              information about your interaction with our Services (e.g., pages
              viewed, features used, access times).
            </li>
            <li>
              <strong>Log Data:</strong> We may collect logs of activity,
              including access to our systems, API calls, and other events for
              security and debugging purposes.
            </li>
          </ul>

          <h4>1.3. Information From Third Parties</h4>
          <ul>
            <li>
              <strong>Identity Verification Partners:</strong> We use
              third-party services to verify your identity by comparing the
              information you provide with public records and other third-party
              databases.
            </li>
            <li>
              <strong>Financial Partners:</strong> Our licensed financial
              partners may share information with us regarding the status of
              your fiat transactions and account linkage.
            </li>
            <li>
              <strong>Blockchain Data:</strong> We collect public data from
              blockchain networks to monitor transactions and ensure the proper
              functioning of our Services.
            </li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <p>
            We use the information we collect for various purposes, grounded in
            legitimate business needs and legal obligations:
          </p>
          <ul>
            <li>
              <strong>To Provide and Maintain the Services:</strong> To create
              and manage your account, process transactions, deploy and monitor
              AI Agents, and provide customer support.
            </li>
            <li>
              <strong>For Compliance and Security:</strong> To conduct KYC/KYB
              checks, comply with our legal and regulatory obligations (e.g.,
              Anti-Money Laundering and Counter-Terrorism Financing laws),
              prevent fraud, and monitor for and protect against security
              threats.
            </li>
            <li>
              <strong>To Improve Our Services:</strong> To analyze usage
              patterns, troubleshoot issues, and develop new features and
              functionalities.
            </li>
            <li>
              <strong>To Communicate With You:</strong> To send you
              transactional confirmations, technical notices, security alerts,
              and administrative messages.
            </li>
            <li>
              <strong>To Enforce Our Terms:</strong> To enforce our Terms of
              Service and other policies.
            </li>
          </ul>

          <h3>3. How We Share and Disclose Your Information</h3>
          <p>
            We do not sell your Personal Data. We may share your information
            with the following categories of third parties in specific
            circumstances:
          </p>
          <ul>
            <li>
              <strong>With Our Financial Partners:</strong> We share your
              identification and financial information with our licensed
              financial partners as necessary to provide regulated services like
              fiat settlement, custody, and payment processing.
            </li>
            <li>
              <strong>With Service Providers:</strong> We share information with
              third-party vendors and service providers who perform services on
              our behalf, such as cloud hosting (e.g., AWS, Google Cloud),
              identity verification, data analytics, and customer support. These
              providers are contractually obligated to protect your data.
            </li>
            <li>
              <strong>For Legal and Compliance Reasons:</strong> We may disclose
              your information if we are required to do so by law, subpoena, or
              other legal process, or if we believe in good faith that
              disclosure is necessary to comply with regulatory inquiries,
              prevent harm, or protect our rights or the rights of others.
            </li>
            <li>
              <strong>In Connection with a Business Transfer:</strong> We may
              share or transfer your information in connection with, or during
              negotiations of, any merger, sale of company assets, financing, or
              acquisition of all or a portion of our business to another
              company.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may disclose your Personal
              Data for any other purpose with your consent.
            </li>
          </ul>

          <h3>4. A Note on Blockchain Data</h3>
          <p>
            <strong>
              <u>
                Please be aware that information recorded on a public
                blockchain, such as your public wallet address and transaction
                details, is inherently public and permanent. This information is
                not controlled by Paymonei and is not covered by this Privacy
                Policy. Anyone can view this data.
              </u>
            </strong>
          </p>

          <h3>5. Data Security and Retention</h3>
          <p>
            <strong>5.1. Security.</strong> We implement and maintain
            industry-standard administrative, physical, and technical security
            safeguards to help protect your Personal Data from loss, theft,
            misuse, and unauthorized access. However, no electronic transmission
            or storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>
          <p>
            <strong>5.2. Retention.</strong> We will retain your Personal Data
            only for as long as is necessary for the purposes set out in this
            Privacy Policy, and to the extent necessary to comply with our legal
            obligations (for example, we are required to retain transaction and
            KYC data for at least five years to comply with AML regulations),
            resolve disputes, and enforce our legal agreements.
          </p>

          <h3>6. International Data Transfers</h3>
          <p>
            Your information, including Personal Data, may be transferred to—and
            maintained on—computers located outside of your state, province,
            country, or other governmental jurisdiction where the data
            protection laws may differ. We will take all steps reasonably
            necessary to ensure that your data is treated securely and in
            accordance with this Privacy Policy and that appropriate safeguards
            are in place.
          </p>

          <h3>7. Your Data Protection Rights</h3>
          <p>
            Depending on your jurisdiction, you may have the following rights
            regarding your Personal Data:
          </p>
          <ul>
            <li>
              The right to access, update, or delete the information we have on
              you.
            </li>
            <li>
              The right of rectification if that information is inaccurate or
              incomplete.
            </li>
            <li>
              The right to object to our processing of your Personal Data.
            </li>
            <li>
              The right to request that we restrict the processing of your
              personal information.
            </li>
            <li>
              The right to data portability for the information you provide to
              us.
            </li>
            <li>
              The right to withdraw consent at any time where we relied on your
              consent to process your information.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:privacy@paymonei.com">privacy@paymonei.com</a>. We
            may need to verify your identity before responding to your request.
          </p>

          <h3>8. Policy Towards Children</h3>
          <p>
            Our Services are not directed to individuals under the age of 18. We
            do not knowingly collect Personal Data from children under 18. If we
            become aware that we have collected Personal Data from a child under
            18, we will take steps to delete such information.
          </p>

          <h3>9. Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last Updated&quot; date. You are advised to
            review this Privacy Policy periodically for any changes.
          </p>

          <h3>10. Contact Us</h3>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:{" "}
            <a href="mailto:privacy@paymonei.com">supports@paymonei.com</a>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
