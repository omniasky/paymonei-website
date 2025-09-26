import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar navLinks={[]} />

      <div className="max-w-4xl mx-auto px-6 py-24 text-sm">
        <p>
          <strong>Paymonei Platform - Terms of Service</strong>
          <br />
          <strong>Last Updated: September 19, 2025</strong>
        </p>
        <div className="space-y-4">
          <p>
            This Terms of Service agreement (&quot;Agreement&quot;) constitutes a legally
            binding agreement made between you, whether personally or on behalf
            of an entity (&quot;you&quot; or &quot;User&quot;), and Omniasky Technology Pte Ltd,
            PT Cosgrove Teknologi Indonesia and PT Evora Vera Teknologi
            (collectively, &quot;Paymonei&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;),
            concerning your access to and use of the Paymonei payment
            infrastructure, the AI Agent Payment Protocol, and all related
            software, application programming interfaces (APIs), and services
            (collectively, the &quot;Services&quot;).
          </p>
          <p>
            <strong>
              <u>
                BY ACCESSING OR USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU
                HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY ALL OF THE TERMS
                AND CONDITIONS OF THIS AGREEMENT. IF YOU DO NOT AGREE WITH ALL
                OF THESE TERMS, YOU ARE EXPRESSLY PROHIBITED FROM USING THE
                SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
              </u>
            </strong>
          </p>

          <h3>1. The Paymonei Services</h3>
          <p>
            <strong>1.1. Nature of the Services.</strong> Paymonei is a
            technology platform that provides software infrastructure for: (a)
            facilitating payments using stablecoins and other digital assets
            (&quot;Digital Assets&quot;) on public blockchain networks; and (b) a protocol
            enabling users to create, configure, and deploy autonomous software
            agents (&quot;AI Agents&quot;) to programmatically initiate transactions on
            their behalf.{" "}
          </p>
          <p>
            <strong>1.2. Role of the Company.</strong> You expressly acknowledge
            and agree that Paymonei is a non-custodial technology provider. We
            provide software as a service and do not have custody or control
            over your Digital Assets, private keys, or the AI Agents you deploy.
            We are not a bank, money transmitter, brokerage, exchange, or
            financial advisor. We do not endorse any Digital Asset. All
            transactions are executed on-chain by you or your designated AI
            Agent, and we cannot reverse, cancel, or modify any transaction.
          </p>
          <p>
            <strong>1.3. Third-Party Financial Partners.</strong> Certain
            services, particularly those involving fiat currency on-ramps and
            off-ramps (settlement), are provided by licensed third-party
            financial institutions, including but not limited to Circle Internet
            Financial, LLC, Nium Pte. Ltd., and Stripe, Inc. (&quot;Financial
            Partners&quot;). Your use of such services is subject to the separate
            terms and conditions of these Financial Partners. The Company is not
            responsible for the performance, availability, or security of
            services provided by Financial Partners.
          </p>

          <h3>2. Eligibility and Account Security</h3>
          <p>
            <strong>2.1. Eligibility.</strong> To use the Services, you must be
            at least 18 years of age and have the full legal capacity to enter
            into this Agreement. Our Services are not available to residents,
            citizens, or entities located in, or organized under the laws of,
            any jurisdiction subject to comprehensive economic sanctions by the
            United States, European Union, United Nations, or other relevant
            authorities. This includes but is not limited to countries such as
            Iran, North Korea, Syria, Cuba, and the Crimea region. You may not
            use the Services if you are personally listed on any sanctions list
            maintained by OFAC, EU, UN, or other relevant authorities.
          </p>
          <p>
            <strong>2.2. Identity Verification.</strong> We have implemented a
            comprehensive Know-Your-Customer (KYC), Know-Your-Business (KYB),
            and Anti-Money Laundering (AML) program. You agree to provide any
            information we request for the purposes of identity verification and
            the detection of money laundering, terrorist financing, fraud, or
            any other financial crime and permit us to keep a record of such
            information.
          </p>
          <p>
            <strong>2.3. Account Security.</strong> You are solely responsible
            for maintaining the confidentiality and security of your account
            credentials, passwords, API keys, and any other security codes. You
            are fully responsible for all activities that occur under your
            account, whether or not authorized by you. You agree to immediately
            notify us of any unauthorized use of your account.
          </p>

          <h3>3. AI Agent Payment Protocol</h3>
          <p>
            <strong>3.1. User Responsibility.</strong> The AI Agent protocol is
            a powerful tool that allows for the automation of financial
            transactions.{" "}
            <strong>
              <u>
                YOU BEAR THE SOLE AND ABSOLUTE RESPONSIBILITY FOR THE DESIGN,
                CONFIGURATION, DEPLOYMENT, AND ONGOING MONITORING OF ANY AI
                AGENT YOU CREATE.
              </u>
            </strong>{" "}
            Any transaction instruction submitted by your AI Agent is deemed an
            irrevocable instruction authorized by you.
          </p>
          <p>
            <strong>3.2. No Liability for AI Agent Actions.</strong> The Company
            shall bear no liability and you agree to waive any and all claims
            against the Company for any losses, damages, or liabilities of any
            kind arising from or in connection with the actions or inactions of
            your AI Agent. This includes, but is not limited to, losses
            resulting from: (a) programming errors, bugs, or flaws in your AI
            Agent&apos;s logic; (b) misconfiguration of spending limits, permissions,
            or target addresses; (c) exploitation of vulnerabilities in your AI
            Agent&apos;s code; or (d) unexpected market conditions or external data
            inputs affecting your AI Agent&apos;s behavior.
          </p>

          <h3>4. Prohibited Uses</h3>
          <p>
            You agree not to use the Services to engage in any of the following
            prohibited activities:
          </p>
          <ul>
            <li>
              <strong>Illegal Activity:</strong> Any activity that violates, or
              would assist in violation of, any law, statute, ordinance, or
              regulation, including but not limited to activities related to
              fraud, money laundering, terrorist financing, or proliferation of
              sanctioned weapons.
            </li>
            <li>
              <strong>Abusive Activity:</strong> Actions which impose an
              unreasonable or disproportionately large load on our
              infrastructure, or detrimentally interfere with, intercept, or
              expropriate any system, data, or information.
            </li>
            <li>
              <strong>Fraudulent Activity:</strong> Attempting to defraud us or
              any other person or entity, including providing false, inaccurate,
              or misleading information.
            </li>
            <li>
              <strong>Intellectual Property Infringement:</strong> Any activity
              that infringes on or violates any copyright, trademark, right of
              publicity or privacy, or any other proprietary right under the
              law.
            </li>
            <li>
              <strong>Adult Content and Services:</strong> Adult entertainment,
              pornographic content, escort services, or any sexually explicit
              material or services.
            </li>
            <li>
              <strong>Gambling:</strong> Online gambling, casino operations,
              sports betting, lottery services, or any form of wagering where
              money or value is at risk.
            </li>
            <li>
              <strong>Controlled Substances:</strong> Sale, distribution, or
              promotion of illegal drugs, controlled substances, prescription
              medications without proper authorization, or drug paraphernalia.
            </li>
            <li>
              <strong>Weapons and Firearms:</strong> Sale or transfer of
              firearms, ammunition, explosives, or other weapons, including
              weapon accessories and modification devices.
            </li>
            <li>
              <strong>High-Risk Services:</strong> Unregistered securities
              offerings, pyramid schemes, Ponzi schemes
            </li>
            <li>
              <strong>Sanctioned Activities:</strong> Any business or
              transaction involving individuals, entities, or jurisdictions
              subject to economic sanctions by the United States, European
              Union, United Nations, or other relevant authorities.
            </li>
          </ul>

          <h3>5. Risk Disclosures</h3>
          <p>
            <strong>
              <u>YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK.</u>
            </strong>{" "}
            You represent that you have sufficient knowledge and experience to
            make your own evaluation of the merits and risks of any transaction.
            You acknowledge and agree to the following:
          </p>
          <ul>
            <li>
              <strong>Digital Asset Nature:</strong> Digital Assets can
              experience price fluctuations as part of their normal market behavior.
              These assets operate independently from traditional banking systems
              and have their own unique characteristics and opportunities.
            </li>
            <li>
              <strong>Blockchain Technology:</strong> Blockchain transactions are
              designed to be permanent and secure. The technology continues to
              evolve with ongoing improvements and updates that help enhance
              functionality and user experience.
            </li>
            <li>
              <strong>Technology Considerations:</strong> Like all technology
              platforms, the Services utilize various protocols and smart contracts.
              We work with established partners and follow industry best practices
              to maintain security and reliability.
            </li>
            <li>
              <strong>Regulatory Environment:</strong> The Digital Asset industry
              operates within an evolving regulatory framework. We actively monitor
              developments to ensure our platform adapts to support compliant
              operations for our users.
            </li>
          </ul>

          <h3>6. Intellectual Property</h3>
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable
            license to access and use the Services for your internal business
            purposes. All rights, title, and interest in and to the Services,
            including all logos, software, and other intellectual property
            (&quot;Company IP&quot;), are and will remain the exclusive property of
            Paymonei and its licensors. This Agreement does not grant you any
            rights to use the Company IP except as expressly permitted.
          </p>

          <h3>7. Disclaimers of Warranties</h3>
          <p>
            <strong>
              <u>
                THE SERVICES ARE PROVIDED ON AN &quot;AS-IS&quot; AND &quot;AS-AVAILABLE&quot;
                BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, PAYMONEI, ITS
                AFFILIATES, AND ITS LICENSORS DISCLAIM ALL WARRANTIES, EXPRESS
                OR IMPLIED, IN CONNECTION WITH THE SERVICES, INCLUDING, WITHOUT
                LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO
                WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY, RELIABILITY,
                OR COMPLETENESS OF THE SERVICES&apos; CONTENT OR THE CONTENT OF ANY
                SITES LINKED TO THE SERVICES.
              </u>
            </strong>
          </p>

          <h3>8. Limitation of Liability</h3>
          <p>
            <strong>
              <u>
                IN NO EVENT WILL PAYMONEI, ITS DIRECTORS, EMPLOYEES, PARTNERS,
                OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT,
                INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR
                PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF
                DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES,
                EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
                LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE
                FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT
                OF FEES, IF ANY, PAID BY YOU TO US DURING THE SIX (6) MONTH
                PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
              </u>
            </strong>
          </p>

          <h3>9. Indemnification</h3>
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

          <h3>10. Governing Law and Dispute Resolution</h3>
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
            <strong>
              <u>
                YOU AGREE THAT ANY ARBITRATION WILL BE CONDUCTED ON AN
                INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED OR
                REPRESENTATIVE ACTION.
              </u>
            </strong>
          </p>

          <h3>11. General Provisions</h3>
          <p>
            <strong>11.1. Entire Agreement.</strong> This Agreement (and any
            policies or operating rules posted by us) constitutes the entire
            agreement and understanding between you and us.
          </p>
          <p>
            <strong>11.2. Severability.</strong> If any provision or part of a
            provision of this Agreement is determined to be unlawful, void, or
            unenforceable, that provision is deemed severable and does not
            affect the validity and enforceability of any remaining provisions.
          </p>
          <p>
            <strong>11.3. No Waiver.</strong> Our failure to exercise or enforce
            any right or provision of this Agreement shall not operate as a
            waiver of such right or provision.
          </p>
          <p>
            <strong>11.4. Force Majeure.</strong> We shall not be liable for any
            delay or failure to perform resulting from causes outside our
            reasonable control, including but not limited to acts of God, war,
            terrorism, riots, embargoes, acts of civil or military authorities,
            fire, floods, accidents, strikes or shortages of transportation
            facilities, fuel, energy, labor or materials.
          </p>

          <h3>12. Contact Information</h3>
          <p>
            For any questions, comments, or concerns regarding this Agreement,
            please contact us at: legal@paymonei.com.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
