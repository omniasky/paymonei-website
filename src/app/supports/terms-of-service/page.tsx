import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-24 text-xs">
        <p>
          <b>Paymonei Platform - Terms of Service</b>
          <br />
          <b>Last Updated: September 19, 2025</b>
        </p>
        <br />
        <div className="space-y-4">
          <p>
            These Terms of Service (&quot;Terms&quot; or &quot;Agreement&quot;)
            govern your use of the software, systems, APIs, and services
            provided by Cosgrove Technology Inc., PT Cosgrove Teknologi
            Indonesia and PT Evora Vera Teknologi (collectively,
            &quot;Paymonei&quot;, &quot;Company&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;), including payment processing
            infrastructure, usage tracking, billing management, and the AI Agent
            Payment Protocol (collectively, the &quot;Services&quot; or
            &quot;Paymonei Services&quot;).
          </p>
          <p>
            Paymonei operates on a Business-to-Business-to-Consumer (B2B2C)
            model. We partner with businesses (&quot;Partners&quot;,
            &quot;Merchants&quot;, or &quot;Business Users&quot;) who integrate
            our Services into their platforms to provide payment infrastructure,
            usage tracking, and billing capabilities to their customers
            (&quot;End Users&quot; or &quot;Customers&quot;). To facilitate
            money movement and compliance functions, we work with licensed
            financial institutions and service providers (&quot;Financial
            Partners&quot;). This Agreement applies to Partners, Business Users,
            End Users, and defines our relationship with Financial Partners.
          </p>
          <p>
            By accessing or using the Paymonei Services, you agree to be bound
            by these Terms. If you are accessing the Services on behalf of a
            business, these Terms apply to both you and the business, and you
            represent and warrant that you have the authority to bind the
            business to these Terms.
          </p>
          <p>
            Our Privacy Policy (available at
            paymonei.com/supports/privacy-policy) explains how we collect and
            use personal data you share with us. Each time you use the Paymonei
            Services, you consent to our collection, use, and disclosure of your
            personal data as outlined in our Privacy Policy.
          </p>
          <p>
            <u>
              BY ACCESSING OR USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE
              READ, UNDERSTOOD, AND AGREE TO BE BOUND BY ALL OF THE TERMS AND
              CONDITIONS OF THIS AGREEMENT. IF YOU DO NOT AGREE WITH ALL OF
              THESE TERMS, YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES
              AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </u>
          </p>

          <h3 className="font-bold">1. The Paymonei Services</h3>
          <p>
            1.1. Nature of the Services. The Paymonei Services consist of a
            cloud-based software-as-a-service platform that provides payment
            processing infrastructure, transaction management, usage tracking,
            billing automation, and financial technology solutions. The Services
            enable Business Users to: (a) accept payments from their customers
            using stablecoins, digital assets (&quot;Digital Assets&quot;), and
            traditional payment methods on public blockchain networks and
            through our Financial Partners; (b) track usage, manage billing
            cycles, and enforce limits for their customers; and (c) create,
            configure, and deploy autonomous software agents (&quot;AI
            Agents&quot;) through our AI Agent Payment Protocol to
            programmatically execute transactions on their behalf. A complete
            description of the features, functionality, and technical
            specifications of the Paymonei Services is available in our
            documentation at docs.paymonei.com (the &quot;Documentation&quot;),
            which may be updated from time to time.
          </p>
          <p>
            1.2. Role of the Company. Paymonei is a technology services provider
            and software platform. We provide APIs, SDKs, and tools that enable
            businesses to build payment and billing infrastructure. We are not a
            bank, financial institution, licensed money transmitter, money
            services business, broker/dealer, exchange, custodian, fiduciary, or
            financial advisor. We do not custody, control, transmit, or hold
            your funds or Digital Assets. We do not have control over your
            private keys or the AI Agents you deploy. We do not endorse any
            Digital Asset. All payment transactions are processed by our
            Financial Partners. All on-chain transactions are executed by you or
            your designated AI Agent, and we cannot reverse, cancel, or modify
            any transaction once submitted.
          </p>
          <p>
            1.3. Licensed Financial Partners and Disclosure. Paymonei is a
            financial technology provider and API platform. We are not a bank,
            licensed money transmitter, or money services business operating
            under our own licenses. All regulated money transmission, payment
            processing, and financial services are provided exclusively by our
            duly licensed financial institution partners, including but not
            limited to Circle Internet Financial, LLC (collectively,
            &quot;Financial Partners&quot;). Paymonei&apos;s role is limited to
            providing software infrastructure, APIs, and payment orchestration
            services that facilitate payment flows in coordination with our
            Financial Partners.
          </p>
          <p>
            1.4. Pass-Through Terms and Compliance. By using the Services, you
            acknowledge and agree that certain features and functionality are
            provided by Financial Partners, and your use of those services is
            subject to their applicable terms of service, operating rules,
            privacy policies, and other policies (the &quot;Pass-Through
            Terms&quot;). The Pass-Through Terms are incorporated into this
            Agreement by reference and are binding upon you. Financial Partners
            are intended third-party beneficiaries of this Agreement and may
            enforce the Pass-Through Terms directly against you. In the event of
            any conflict between this Agreement and the Pass-Through Terms, the
            Pass-Through Terms will govern solely with respect to the services
            provided by the applicable Financial Partner.
          </p>
          <p>
            1.5. Funds and Insurance. All funds processed through the Services
            are held by our Financial Partners, not by Paymonei. The Company
            does not custody, control, transmit, or hold your funds. Funds held
            by Financial Partners may or may not be eligible for Federal Deposit
            Insurance Corporation (FDIC) insurance or other deposit insurance
            programs depending on the specific Financial Partner and account
            structure. You should review the terms of the applicable Financial
            Partner to understand the insurance status of your funds.
          </p>

          <h3 className="font-bold">2. Eligibility and Account Security</h3>
          <p>
            2.1. Eligibility. To use the Services, you must be at least 18 years
            of age and have the full legal capacity to enter into this
            Agreement. Our Services are not available to residents, citizens, or
            entities located in, or organized under the laws of, any
            jurisdiction subject to comprehensive economic sanctions by the
            United States, European Union, United Nations, or other relevant
            authorities. This includes but is not limited to countries such as
            Iran, North Korea, Syria, Cuba, and the Crimea region. You may not
            use the Services if you are personally listed on any sanctions list
            maintained by OFAC, EU, UN, or other relevant authorities.
          </p>
          <p>
            2.2. Identity Verification. We have implemented a comprehensive
            Know-Your-Customer (KYC), Know-Your-Business (KYB), and Anti-Money
            Laundering (AML) program. You agree to provide any information we
            request for the purposes of identity verification and the detection
            of money laundering, terrorist financing, fraud, or any other
            financial crime and permit us to keep a record of such information.
          </p>
          <p>
            2.3. Account Security. You are solely responsible for maintaining
            the confidentiality and security of your account credentials,
            passwords, API keys, and any other security codes. You are fully
            responsible for all activities that occur under your account,
            whether or not authorized by you. You agree to immediately notify us
            of any unauthorized use of your account.
          </p>

          <h3 className="font-bold">
            3. Information Sharing and Financial Partners
          </h3>
          <p>
            3.1. Consent to Information Sharing. You consent that all
            information provided by you or collected about you may be shared:
            (a) with your business partners or merchants who use Paymonei
            infrastructure to provide services to you; (b) with Financial
            Partners that are integrated with Paymonei infrastructure for the
            purpose of facilitating transactions and compliance; (c) with
            regulatory authorities as required by law; and (d) as otherwise
            required for compliance, fraud prevention, and payment processing
            purposes.
          </p>
          <p>
            3.2. Partner API Access. Your business partners or merchants may use
            Paymonei APIs to perform actions including but not limited to
            processing payments, tracking usage, checking limits, and managing
            subscriptions on your behalf. You acknowledge and consent to this
            functionality when you agree to these Terms and when you authorize
            your business partners to use Paymonei Services.
          </p>
          <p>
            3.3. Financial Partners and Payment Processing. Paymonei works with
            various licensed financial institutions and compliance service
            providers (&quot;Financial Partners&quot;) to facilitate money
            movement, identity verification, fraud prevention, and regulatory
            compliance. These Financial Partners enable Paymonei to process
            transactions on behalf of you and your customers. By using Paymonei
            Services, you acknowledge and consent that: (a) Paymonei may share
            your information with these Financial Partners as necessary to
            provide the Services; (b) Financial Partners may have their own
            terms of service, privacy policies, and operating rules that apply
            to their processing of your information and funds; (c) Financial
            Partners, not Paymonei, will move and hold money on your behalf; and
            (d) Financial Partners may impose additional requirements or
            restrictions as required by their policies or applicable
            regulations.
          </p>
          <p>
            3.4. Authorization and Agency. By submitting payment instructions
            through the Services, you authorize the applicable Financial Partner
            to act as your agent to carry out the instructions you send via the
            Services. You understand and agree that the Financial Partner (not
            Paymonei) is responsible for executing your payment instructions and
            that Paymonei has no control over or responsibility for the
            Financial Partner&apos;s actions in processing your transactions.
          </p>

          <h3 className="font-bold">4. AI Agent Payment Protocol</h3>
          <p>
            4.1. User Responsibility. The AI Agent protocol is a powerful tool
            that allows for the automation of financial transactions.{" "}
            <u>
              YOU BEAR THE SOLE AND ABSOLUTE RESPONSIBILITY FOR THE DESIGN,
              CONFIGURATION, DEPLOYMENT, AND ONGOING MONITORING OF ANY AI AGENT
              YOU CREATE.
            </u>
            Any transaction instruction submitted by your AI Agent is deemed an
            irrevocable instruction authorized by you.
          </p>
          <p>
            4.2. No Liability for AI Agent Actions. The Company shall bear no
            liability and you agree to waive any and all claims against the
            Company for any losses, damages, or liabilities of any kind arising
            from or in connection with the actions or inactions of your AI
            Agent. This includes, but is not limited to, losses resulting from:
            (a) programming errors, bugs, or flaws in your AI Agent&apos;s
            logic; (b) misconfiguration of spending limits, permissions, or
            target addresses; (c) exploitation of vulnerabilities in your AI
            Agent&apos;s code; or (d) unexpected market conditions or external
            data inputs affecting your AI Agent&apos;s behavior.
          </p>

          <h3 className="font-bold">5. Prohibited Uses</h3>
          <p>
            You agree not to use the Services to engage in any of the following
            prohibited activities:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>
              Illegal Activity: Any activity that violates, or would assist in
              violation of, any law, statute, ordinance, or regulation,
              including but not limited to activities related to fraud, money
              laundering, terrorist financing, or proliferation of sanctioned
              weapons.
            </li>
            <li>
              Abusive Activity: Actions which impose an unreasonable or
              disproportionately large load on our infrastructure, or
              detrimentally interfere with, intercept, or expropriate any
              system, data, or information.
            </li>
            <li>
              Fraudulent Activity: Attempting to defraud us or any other person
              or entity, including providing false, inaccurate, or misleading
              information.
            </li>
            <li>
              Intellectual Property Infringement: Any activity that infringes on
              or violates any copyright, trademark, right of publicity or
              privacy, or any other proprietary right under the law.
            </li>
            <li>
              Adult Content and Services: Adult entertainment, pornographic
              content, escort services, or any sexually explicit material or
              services.
            </li>
            <li>
              Gambling: Online gambling, casino operations, sports betting,
              lottery services, or any form of wagering where money or value is
              at risk.
            </li>
            <li>
              Controlled Substances: Sale, distribution, or promotion of illegal
              drugs, controlled substances, prescription medications without
              proper authorization, or drug paraphernalia.
            </li>
            <li>
              Weapons and Firearms: Sale or transfer of firearms, ammunition,
              explosives, or other weapons, including weapon accessories and
              modification devices.
            </li>
            <li>
              High-Risk Services: Unregistered securities offerings, pyramid
              schemes, Ponzi schemes
            </li>
            <li>
              Sanctioned Activities: Any business or transaction involving
              individuals, entities, or jurisdictions subject to economic
              sanctions by the United States, European Union, United Nations, or
              other relevant authorities.
            </li>
          </ul>

          <h3 className="font-bold">6. Risk Disclosures</h3>
          <p>
            <u>YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK.</u>
            You represent that you have sufficient knowledge and experience to
            make your own evaluation of the merits and risks of any transaction.
            You acknowledge and agree to the following:
          </p>
          <ul>
            <li>
              Digital Asset Nature: Digital Assets can experience price
              fluctuations as part of their normal market behavior. These assets
              operate independently from traditional banking systems and have
              their own unique characteristics and opportunities.
            </li>
            <li>
              Blockchain Technology: Blockchain transactions are designed to be
              permanent and secure. The technology continues to evolve with
              ongoing improvements and updates that help enhance functionality
              and user experience.
            </li>
            <li>
              Technology Considerations: Like all technology platforms, the
              Services utilize various protocols and smart contracts. We work
              with established partners and follow industry best practices to
              maintain security and reliability.
            </li>
            <li>
              Regulatory Environment: The Digital Asset industry operates within
              an evolving regulatory framework. We actively monitor developments
              to ensure our platform adapts to support compliant operations for
              our users.
            </li>
          </ul>

          <h3 className="font-bold">7. Intellectual Property</h3>
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable
            license to access and use the Services for your internal business
            purposes. All rights, title, and interest in and to the Services,
            including all logos, software, and other intellectual property
            (&quot;Company IP&quot;), are and will remain the exclusive property
            of Paymonei and its licensors. This Agreement does not grant you any
            rights to use the Company IP except as expressly permitted.
          </p>

          <h3 className="font-bold">8. Disclaimers of Warranties</h3>
          <p>
            <u>
              THE SERVICES ARE PROVIDED ON AN &quot;AS-IS&quot; AND
              &quot;AS-AVAILABLE&quot; BASIS. TO THE FULLEST EXTENT PERMITTED BY
              LAW, PAYMONEI, ITS AFFILIATES, AND ITS LICENSORS DISCLAIM ALL
              WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES,
              INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT
              THE ACCURACY, RELIABILITY, OR COMPLETENESS OF THE SERVICES&apos;
              CONTENT OR THE CONTENT OF ANY SITES LINKED TO THE SERVICES.
            </u>
          </p>

          <h3 className="font-bold">9. Limitation of Liability</h3>
          <p>
            <u>
              IN NO EVENT WILL PAYMONEI, ITS DIRECTORS, EMPLOYEES, PARTNERS, OR
              AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT,
              INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR
              PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF
              DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN
              IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
              LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE
              FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT OF
              FEES, IF ANY, PAID BY YOU TO US DURING THE SIX (6) MONTH PERIOD
              PRIOR TO ANY CAUSE OF ACTION ARISING.
            </u>
          </p>

          <h3 className="font-bold">10. Indemnification</h3>
          <p>
            You agree to defend, indemnify, and hold us harmless, including our
            subsidiaries, affiliates, and all of our respective officers,
            agents, partners, and employees, from and against any loss, damage,
            liability, claim, or demand, including reasonable attorneys’ fees
            and expenses, made by any third party due to or arising out of: (1)
            your use of the Services; (2) your breach of this Agreement; (3) any
            breach of your representations and warranties set forth in this
            Agreement; (4) your violation of the rights of a third party,
            including but not limited to intellectual property rights; or (5)
            any overt harmful act toward any other user of the Services with
            whom you connected via the Services. This includes, without
            limitation, indemnifying us for any and all losses sustained from
            the actions of your AI Agents.
          </p>

          <h3 className="font-bold">
            11. Governing Law and Dispute Resolution
          </h3>
          <p>
            This Agreement and your use of the Services are governed by and
            construed in accordance with the laws of the State of Delaware,
            without regard to its conflict of law principles. Any dispute
            arising out of or in connection with this Agreement, including any
            question regarding its existence, validity, or termination, shall be
            referred to and finally resolved by binding arbitration administered
            by the American Arbitration Association (AAA) under its Commercial
            Arbitration Rules. The arbitration will be conducted by a single
            arbitrator in Wilmington, Delaware.{" "}
            <u>
              YOU AGREE THAT ANY ARBITRATION WILL BE CONDUCTED ON AN INDIVIDUAL
              BASIS AND NOT IN A CLASS, CONSOLIDATED OR REPRESENTATIVE ACTION.
            </u>
          </p>

          <h3 className="font-bold">12. General Provisions</h3>
          <p>
            12.1. Entire Agreement. This Agreement (and any policies or
            operating rules posted by us) constitutes the entire agreement and
            understanding between you and us.
          </p>
          <p>
            12.2. Severability. If any provision or part of a provision of this
            Agreement is determined to be unlawful, void, or unenforceable, that
            provision is deemed severable and does not affect the validity and
            enforceability of any remaining provisions.
          </p>
          <p>
            12.3. No Waiver. Our failure to exercise or enforce any right or
            provision of this Agreement shall not operate as a waiver of such
            right or provision.
          </p>
          <p>
            12.4. Force Majeure. We shall not be liable for any delay or failure
            to perform resulting from causes outside our reasonable control,
            including but not limited to acts of God, war, terrorism, riots,
            embargoes, acts of civil or military authorities, fire, floods,
            accidents, strikes or shortages of transportation facilities, fuel,
            energy, labor or materials.
          </p>

          <h3 className="font-bold">13. Contact Information</h3>
          <p>
            For any questions, comments, or concerns regarding this Agreement,
            please contact us at: support@paymonei.com.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
