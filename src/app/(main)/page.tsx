import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { HeroSection } from "@/components/templates/HeroSection";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Monitor,
  X,
  Check,
  FileText,
  BarChart3,
  Presentation,
  Calendar,
  Brain,
  Link2,
  Receipt,
  TrendingUp,
  Store,
  Users,
  Shield,
} from "lucide-react";
import type { Metadata } from "next";

// Page-specific metadata that overrides the default
export const metadata: Metadata = {
  title: "Paymonei - AI Agent Payment Protocol & Infrastructure",
  description:
    "AI-native payment protocol enabling secure agent-to-agent transactions, institutional-grade security, and unified AI workspace.",
  openGraph: {
    title: "Paymonei - The Autonomous Economy Standard",
    description:
      "Enable AI agents to transact seamlessly. Our proprietary protocol powers the financial nervous system for AI with institutional-grade security and unified operations.",
    url: "https://paymonei.com",
    images: [
      {
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/homepage-og.png",
        width: 1200,
        height: 630,
        alt: "Paymonei Homepage - AI Payment Infrastructure",
      },
    ],
  },
  alternates: {
    canonical: "https://paymonei.com",
  },
};

// Structured data for search engines and AI agents
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://paymonei.com/#organization",
      name: "Paymonei",
      url: "https://paymonei.com",
      logo: {
        "@type": "ImageObject",
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/paymonei-logo.svg",
        width: 200,
        height: 60,
      },
      description:
        "AI-native financial infrastructure enabling autonomous agent payments",
      foundingDate: "2023",
      sameAs: [
        "https://twitter.com/paymonei",
        "https://linkedin.com/company/paymonei",
        "https://github.com/paymonei",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://paymonei.com/#website",
      url: "https://paymonei.com",
      name: "Paymonei",
      description: "The autonomous economy standard for AI agent payments",
      publisher: {
        "@id": "https://paymonei.com/#organization",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://paymonei.com/#software",
      name: "Paymonei Agent Payment Protocol",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web, iOS, Android",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "1250",
      },
      featureList: [
        "AI Agent Payment Protocol (AP2)",
        "Cryptographic Mandates",
        "Multi-chain Support",
        "Institutional Wallet",
        "AI Operations Suite",
        "KYC/AML Compliance",
        "Global Payroll",
        "Enterprise Payouts",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Paymonei's Agent Payment Protocol?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paymonei's Agent Payment Protocol (AP2) is a proprietary infrastructure that enables AI agents to execute secure, authenticated payments autonomously. It includes cryptographic mandates, multi-chain support, and built-in compliance.",
          },
        },
        {
          "@type": "Question",
          name: "How does Paymonei replace traditional business tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paymonei's AI Operations Suite replaces Google Docs, Excel, PowerPoint, and Calendar with a unified AI-powered workspace. All business operations from documents to analytics are handled in one intelligent platform.",
          },
        },
        {
          "@type": "Question",
          name: "Is Paymonei secure for institutional use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Paymonei provides institutional-grade security with military-grade encryption, zero-knowledge proofs, quantum-resistant cryptography, and full regulatory compliance for 150+ countries.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data for SEO and AI Agents */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <Navbar />

        <HeroSection
          title={{
            main: "Infrastructure for the modern",
            highlight: "digital and AI economy",
          }}
          subtitle="Companies worldwide use our platform to streamline operations and scale their business seamlessly, accelerating growth and global expansion."
          primaryCta={{
            label: "Get Started",
            href: "/auth/login",
          }}
          secondaryCta={{
            label: "Learn More",
            href: "#ai-protocol",
          }}
        />

        {/* Used by Global Developers Section */}
        <section className="py-16 px-2 xs:px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground/90 leading-tight">
                <span className="block">Used by Global Developers</span>
                <span className="block mt-1 sm:mt-2">& Ecosystem</span>
              </h2>
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex animate-scroll"
                style={{ width: "max-content" }}
              >
                {/* First set of logos */}
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/circle.com"
                    alt="Circle"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/brex.com"
                    alt="Brex"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/grab.com"
                    alt="Grab"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/gojek.com"
                    alt="Gojek"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/traveloka.com"
                    alt="Traveloka"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/canva.com"
                    alt="Canva"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/tokopedia.com"
                    alt="Tokopedia"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/openai.com"
                    alt="OpenAI"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/microsoft.com"
                    alt="Microsoft"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/quicknode.com"
                    alt="Quicknode"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/ripple.com"
                    alt="Ripple"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/paypal.com"
                    alt="Paypal"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/deliveroo.com.sg"
                    alt="Deliveroo"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/resend.com"
                    alt="Resend"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/chainalysis.com"
                    alt="Chainalysis"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/nium.com"
                    alt="Nium"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/vercel.com"
                    alt="Vercel"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/phantom.com"
                    alt="Phantom"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/shopee.com"
                    alt="Shopee"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/coinbase.com"
                    alt="Coinbase"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/figma.com"
                    alt="Figma"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/anthropic.com"
                    alt="Anthropic"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/visa.com"
                    alt="Visa"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/mastercard.com"
                    alt="Mastercard"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/aws.amazon.com"
                    alt="AWS"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/infura.io"
                    alt="Infura"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/uber.com"
                    alt="Uber"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/alchemy.com"
                    alt="Alchemy"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/airbnb.com"
                    alt="Airbnb"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/stripe.com"
                    alt="Stripe"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/foodpanda.com"
                    alt="Foodpanda"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/paypay.ne.jp"
                    alt="PayPay"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/qoala.app"
                    alt="Qoala"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/mercury.com"
                    alt="Mercury"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/glints.com"
                    alt="Glints"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/tether.to"
                    alt="Tether"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/pwc.com"
                    alt="PWC"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/shopback.sg"
                    alt="Shopback"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/lazada.com"
                    alt="Lazada"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/ethereum.org"
                    alt="Ethereum"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/supabase.com"
                    alt="Supabase"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/metamask.io"
                    alt="Metamask"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/carousell.sg"
                    alt="Carousell"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/polygon.technology"
                    alt="Polygon Technology"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/mufg.jp"
                    alt="MUFG"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/nextrans.com"
                    alt="Nextrans"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/agoda.com"
                    alt="Agoda"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://logo.clearbit.com/rakuten.com"
                    alt="Rakuten"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agent Payment Protocol Section */}
        <section
          id="ai-protocol"
          className="py-20 px-2 xs:px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/30 to-background"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Powered by Agent Payment Protocol (AP2)
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-foreground">AI Agent Payment</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Protocol
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Enabling secure, authenticated payments by AI agents on behalf
                of users. We simplify your marketing, sales, finance and
                procurement operations through the universal protocol for
                autonomous transactions across payment systems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Cryptographic Mandates
                      </h3>
                      <p className="text-muted-foreground">
                        Digital mandates provide verifiable proof of user
                        instructions, creating non-repudiable audit trails from
                        intent to payment completion.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Autonomous Execution
                      </h3>
                      <p className="text-muted-foreground">
                        AI agents execute complex transactions autonomously,
                        from adaptive shopping to coordinated multi-platform
                        payments, while maintaining user control.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 009-9m-9 9a9 9 0 01-9-9"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Universal Compatibility
                      </h3>
                      <p className="text-muted-foreground">
                        Extensible protocol supporting traditional and
                        cryptographically-secured payment systems, with seamless
                        integration across networks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-card border rounded-3xl p-6 shadow-2xl">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-muted-foreground">
                          AI-to-AI Agent Conversation
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-green-600">Live</span>
                        </div>
                      </div>

                      {/* Chat Messages */}
                      <ScrollArea className="h-80 pr-4">
                        <div className="space-y-3">
                          {/* Initial Greeting */}
                          <div className="flex justify-end">
                            <div className="max-w-xs">
                              <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3">
                                <p className="text-sm">
                                  Hello! New invoice ready for review
                                </p>
                                <p className="text-xs opacity-90 mt-1">
                                  Invoice #INV-2024-001 • $2,500.00 USD
                                </p>
                              </div>
                              <div className="flex items-center justify-end gap-2 mt-1">
                                <span className="text-xs text-muted-foreground">
                                  Example Ltd (SG) • 2:14 PM
                                </span>
                                <div className="w-4 h-4 bg-blue-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  E
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Client Agent Response */}
                          <div className="flex justify-start">
                            <div className="max-w-xs">
                              <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                                <p className="text-sm">
                                  Hi! Could you share the project details?
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Need scope and deliverables info
                                </p>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  J
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  John Doe LLC (US) • 2:15 PM
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Merchant Detailed Response */}
                          <div className="flex justify-end">
                            <div className="max-w-xs">
                              <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3">
                                <p className="text-sm">
                                  Sure! Web app development project
                                </p>
                                <p className="text-xs opacity-90 mt-1">
                                  ✓ UI/UX Design
                                  <br />✓ Frontend Development
                                  <br />✓ QA Testing
                                  <br />
                                  📅 Delivery: Dec 15, 2024
                                </p>
                              </div>
                              <div className="flex items-center justify-end gap-2 mt-1">
                                <span className="text-xs text-muted-foreground">
                                  Example Ltd (SG) • 2:16 PM
                                </span>
                                <div className="w-4 h-4 bg-blue-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  E
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Client Verification */}
                          <div className="flex justify-start">
                            <div className="max-w-xs">
                              <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                                <p className="text-sm">
                                  Perfect! Verifying payment authorization...
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Cross-border payment USD → SGD
                                </p>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  J
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  John Doe LLC (US) • 2:17 PM
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Payment Execution */}
                          <div className="flex justify-start">
                            <div className="max-w-xs">
                              <div className="bg-green-500 text-white rounded-2xl rounded-bl-md px-4 py-3">
                                <p className="text-sm">
                                  ✅ Payment sent instantly!
                                </p>
                                <p className="text-xs opacity-90 mt-1">
                                  $2,500.00 USD → $3,375.00 SGD
                                  <br />
                                  Exchange rate: 1.35 • Fee: $0.00
                                </p>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  J
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  John Doe LLC (US) • 2:17 PM
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Merchant Confirmation */}
                          <div className="flex justify-end">
                            <div className="max-w-xs">
                              <div className="bg-emerald-500 text-white rounded-2xl rounded-br-md px-4 py-3">
                                <p className="text-sm">
                                  🎉 Payment received instantly!
                                </p>
                                <p className="text-xs opacity-90 mt-1">
                                  SGD $3,375.00 in our account
                                  <br />
                                  Receipt #RCP-001 sent ✉️
                                </p>
                              </div>
                              <div className="flex items-center justify-end gap-2 mt-1">
                                <span className="text-xs text-muted-foreground">
                                  Example Ltd (SG) • 2:17 PM
                                </span>
                                <div className="w-4 h-4 bg-blue-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  E
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Post-transaction follow up */}
                          <div className="flex justify-end">
                            <div className="max-w-xs">
                              <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3">
                                <p className="text-sm">
                                  Thank you for the smooth transaction!
                                </p>
                                <p className="text-xs opacity-90 mt-1">
                                  Project kickoff: Dec 1st
                                  <br />
                                  Looking forward to working together 🤝
                                </p>
                              </div>
                              <div className="flex items-center justify-end gap-2 mt-1">
                                <span className="text-xs text-muted-foreground">
                                  Example Ltd (SG) • 2:18 PM
                                </span>
                                <div className="w-4 h-4 bg-blue-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  E
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Client follow-up */}
                          <div className="flex justify-start">
                            <div className="max-w-xs">
                              <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                                <p className="text-sm">
                                  Likewise! Excited for the project 🚀
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Will send project brief by tomorrow
                                </p>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  J
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  John Doe LLC (US) • 2:19 PM
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agent Payment Protocol Infrastructure Section */}
        <section className="py-24 px-2 xs:px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background/95 to-muted/20">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800 mb-6">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Infrastructure Deep Dive
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Protocol</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
                  {" "}
                  Infrastructure
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced payment protocol infrastructure that surpasses
                traditional solutions, enabling true autonomous agent
                transactions at scale.
              </p>
            </div>

            {/* Architecture Diagram */}
            <div className="mb-20">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-indigo-600/10 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-background to-muted/30 border rounded-3xl p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Layer 1: Agent Layer */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold">Agent Layer</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-4">
                          <h4 className="text-sm font-medium text-foreground mb-2">
                            AI Agent Registration
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Secure identity verification and capability
                            attestation for autonomous agents
                          </p>
                        </div>
                        <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-4">
                          <h4 className="text-sm font-medium text-foreground mb-2">
                            Mandate Processing
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Cryptographic proof of user instructions with
                            immutable audit trails
                          </p>
                        </div>
                        <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-4">
                          <h4 className="text-sm font-medium text-foreground mb-2">
                            Intent Resolution
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Natural language to structured payment instructions
                            conversion
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Layer 2: Protocol Core */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold">Protocol Core</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4">
                          <h4 className="text-sm font-medium text-foreground mb-2">
                            Transaction Engine
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            High-throughput processing with parallel execution
                            and atomic guarantees
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4">
                          <h4 className="text-sm font-medium text-foreground mb-2">
                            Security Framework
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Zero-knowledge proofs, end-to-end encryption, and
                            fraud detection
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4">
                          <h4 className="text-sm font-medium text-foreground mb-2">
                            Compliance Engine
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Advance real-time AML/KYC checks for secure
                            ecosystem
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Layer 3: Integration Layer */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 009-9"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold">
                          Integration Layer
                        </h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-4">
                          <h4 className="text-sm font-medium text-foreground mb-2">
                            Payment Networks
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Direct integration with ACH, SWIFT, SEPA, card and
                            stablecoin networks
                          </p>
                        </div>
                        <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-4">
                          <h4 className="text-sm font-medium text-foreground mb-2">
                            Multi-chain Bridge
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Bridge protocols supports offer seamless data value
                            transfer
                          </p>
                        </div>
                        <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-4">
                          <h4 className="text-sm font-medium text-foreground mb-2">
                            API Gateway
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            RESTful and GraphQL APIs with WebSocket real-time
                            updates
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Protocol Flow Visualization */}
                  <div className="mt-12 pt-8 border-t border-border/50">
                    <h3 className="text-center text-sm font-medium text-muted-foreground mb-6">
                      Transaction Flow
                    </h3>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                          1
                        </div>
                        <p className="text-xs mt-2 text-center">User Intent</p>
                      </div>
                      <div className="hidden lg:block w-full max-w-[100px] h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                          2
                        </div>
                        <p className="text-xs mt-2 text-center">
                          Agent Mandate
                        </p>
                      </div>
                      <div className="hidden lg:block w-full max-w-[100px] h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                          3
                        </div>
                        <p className="text-xs mt-2 text-center">Validation</p>
                      </div>
                      <div className="hidden lg:block w-full max-w-[100px] h-0.5 bg-gradient-to-r from-pink-500 to-indigo-500"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          4
                        </div>
                        <p className="text-xs mt-2 text-center">Execution</p>
                      </div>
                      <div className="hidden lg:block w-full max-w-[100px] h-0.5 bg-gradient-to-r from-indigo-500 to-green-500"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                          5
                        </div>
                        <p className="text-xs mt-2 text-center">Settlement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Autonomous Economy Standard */}
            <div className="relative">
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-3xl"></div>

              <div className="relative">
                {/* Header Section */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 mb-6">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Setting the Standard
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                    <span className="text-foreground">The Autonomous</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                      {" "}
                      Economy Standard
                    </span>
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    We didn&apos;t just improve payments—we architected the
                    financial nervous system for AI. Where others offer routing,
                    we deliver complete infrastructure.
                  </p>
                </div>

                {/* Our Proprietary Protocol - Full Width */}
                <div className="bg-background/50 backdrop-blur border border-border/50 rounded-3xl p-8 lg:p-12">
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold mb-2 text-center">
                      Our Proprietary Protocol
                    </h4>
                    <p className="text-center text-muted-foreground">
                      Built from first principles for the AI-driven economy
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Cryptographic Mandates */}
                    <div className="group">
                      <div className="bg-gradient-to-br from-background to-muted/20 border border-border/50 rounded-2xl p-6 h-full hover:border-indigo-500/50 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <h5 className="font-semibold mb-2">
                          Cryptographic Mandates
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Verifiable proof of user instructions with immutable
                          audit trails
                        </p>
                      </div>
                    </div>

                    {/* Unified Protocol */}
                    <div className="group">
                      <div className="bg-gradient-to-br from-background to-muted/20 border border-border/50 rounded-2xl p-6 h-full hover:border-purple-500/50 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 009-9"
                            />
                          </svg>
                        </div>
                        <h5 className="font-semibold mb-2">Unified Protocol</h5>
                        <p className="text-sm text-muted-foreground">
                          Seamless bridge between traditional and blockchain
                          payment rails
                        </p>
                      </div>
                    </div>

                    {/* Agent Identity */}
                    <div className="group">
                      <div className="bg-gradient-to-br from-background to-muted/20 border border-border/50 rounded-2xl p-6 h-full hover:border-pink-500/50 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-4">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                            />
                          </svg>
                        </div>
                        <h5 className="font-semibold mb-2">Agent Identity</h5>
                        <p className="text-sm text-muted-foreground">
                          Verification and capability attestation for autonomous
                          agents
                        </p>
                      </div>
                    </div>

                    {/* Intent Resolution */}
                    <div className="group">
                      <div className="bg-gradient-to-br from-background to-muted/20 border border-border/50 rounded-2xl p-6 h-full hover:border-orange-500/50 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mb-4">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h5 className="font-semibold mb-2">
                          Intent Resolution
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Natural language to structured payment transformation
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-10 text-center">
                    <Button className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 font-medium">
                      Developer Docs
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Merchant AI Use Cases Section */}
        <section
          id="use-cases"
          className="py-20 px-2 xs:px-4 sm:px-6 lg:px-8 bg-muted/50"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-foreground">Beyond Workflows.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  True Intelligence.
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our AI agents think, adapt, and execute complex business
                processes through natural conversation just like talking to your
                most capable team member.
              </p>
            </div>

            <div className="space-y-16">
              {/* Payment Links Use Case */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 mb-4">
                    <Link2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Payment Links</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Instant Payment Link Generation
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Merchants interact with Paymonei&apos;s AI agent to
                    instantly create customized payment links and send them
                    directly to customers via email, SMS, or any communication
                    channel.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium">
                          Natural Language Processing
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Simply describe the payment needed in plain English
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium">Automated Delivery</p>
                        <p className="text-sm text-muted-foreground">
                          AI handles email formatting and customer delivery
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-card border rounded-2xl p-6 shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-muted-foreground">
                          AI Chat Interface
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-green-600">Online</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {/* Merchant Message */}
                        <div className="flex justify-end">
                          <div className="max-w-xs">
                            <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3">
                              <p className="text-sm">
                                Hey, can you create a payment link for John Doe?
                              </p>
                              <p className="text-xs opacity-90 mt-1">
                                It&apos;s for the website design consultation we
                                discussed. Amount is $1,500
                              </p>
                            </div>
                            <div className="flex items-center justify-end gap-2 mt-1">
                              <span className="text-xs text-muted-foreground">
                                Merchant
                              </span>
                              <div className="w-4 h-4 bg-blue-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                M
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* AI Response */}
                        <div className="flex justify-start">
                          <div className="max-w-xs">
                            <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                              <p className="text-sm font-medium">
                                Absolutely! I&apos;ve created the payment link
                                for John.
                              </p>
                              <div className="text-xs text-muted-foreground mt-2 space-y-1">
                                <p>🔗 pay.paymonei.com/inv/abc123</p>
                                <p>📧 Sent to john@example.com</p>
                                <p>💰 $1,500.00 USD for website design</p>
                                <p>⏰ Link expires in 7 days</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                AI
                              </div>
                              <span className="text-xs text-muted-foreground">
                                Paymonei AI
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Invoice Generation Use Case */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative">
                    <div className="bg-card border rounded-2xl p-6 shadow-lg">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-muted-foreground">
                            AI Chat Interface
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-green-600">
                              Online
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          {/* Merchant Message */}
                          <div className="flex justify-end">
                            <div className="max-w-xs">
                              <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3">
                                <p className="text-sm">
                                  Can you draft an invoice for XYZ Ltd?
                                </p>
                                <p className="text-xs opacity-90 mt-1">
                                  It&apos;s for Q4 consulting services, $12,500.
                                  Schedule it to send Friday at 3PM
                                </p>
                              </div>
                              <div className="flex items-center justify-end gap-2 mt-1">
                                <span className="text-xs text-muted-foreground">
                                  Merchant
                                </span>
                                <div className="w-4 h-4 bg-blue-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  M
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* AI Response */}
                          <div className="flex justify-start">
                            <div className="max-w-xs">
                              <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                                <p className="text-sm font-medium">
                                  Perfect! I&apos;ve drafted the invoice for XYZ
                                  Ltd.
                                </p>
                                <div className="text-xs text-muted-foreground mt-2 space-y-1">
                                  <p>📄 Invoice #INV-2024-Q4-001</p>
                                  <p>📋 Q4 Consulting Services</p>
                                  <p>💰 Total: $12,500.00 USD</p>
                                  <p>📅 Scheduled: Friday 3:00 PM EST</p>
                                  <p>✅ Ready to auto-send</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  AI
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  Paymonei AI
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 mb-4">
                    <Receipt className="w-4 h-4" />
                    <span className="text-sm font-medium">Smart Invoicing</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Automated Invoice Drafting
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Create professional invoices with scheduled delivery. AI
                    handles formatting, tax calculations, and automatic sending
                    based on your preferred timing.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium">Smart Scheduling</p>
                        <p className="text-sm text-muted-foreground">
                          Schedule invoices for optimal delivery times
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium">Professional Formatting</p>
                        <p className="text-sm text-muted-foreground">
                          Automatic tax calculations and compliance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Use Case */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 mb-4">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      Dynamic Analytics
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Real-Time Business Intelligence
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Get instant access to comprehensive business metrics. AI
                    analyzes transaction data and generates dynamic reports on
                    revenue, payment status, and business performance.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium">Instant Insights</p>
                        <p className="text-sm text-muted-foreground">
                          Real-time revenue and transaction analysis
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium">Custom Reports</p>
                        <p className="text-sm text-muted-foreground">
                          Ask for any metric in natural language
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-card border rounded-2xl p-6 shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-muted-foreground">
                          AI Chat Interface
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-green-600">Online</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {/* Merchant Message */}
                        <div className="flex justify-end">
                          <div className="max-w-xs">
                            <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3">
                              <p className="text-sm">
                                How are we doing this month?
                              </p>
                              <p className="text-xs opacity-90 mt-1">
                                I&apos;d like to see our revenue breakdown and
                                payment status
                              </p>
                            </div>
                            <div className="flex items-center justify-end gap-2 mt-1">
                              <span className="text-xs text-muted-foreground">
                                Merchant
                              </span>
                              <div className="w-4 h-4 bg-blue-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                M
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* AI Response */}
                        <div className="flex justify-start">
                          <div className="max-w-xs">
                            <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                              <p className="text-sm font-medium">
                                Great question! Here&apos;s your November
                                performance:
                              </p>
                              <div className="mt-3 space-y-2 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    Total Revenue:
                                  </span>
                                  <span className="font-bold text-green-600">
                                    $47,350.00
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    Paid Transactions:
                                  </span>
                                  <span className="font-medium">
                                    127 ($42,100.00)
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    Unpaid/Pending:
                                  </span>
                                  <span className="font-medium text-amber-600">
                                    15 ($5,250.00)
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    Payment Rate:
                                  </span>
                                  <span className="font-medium">89.5%</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                AI
                              </div>
                              <span className="text-xs text-muted-foreground">
                                Paymonei AI
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insurance Product Search Use Case */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative">
                    <div className="bg-card border rounded-2xl p-6 shadow-lg">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-muted-foreground">
                            AI-to-AI Marketplace
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-green-600">
                              Connected
                            </span>
                          </div>
                        </div>

                        <ScrollArea className="h-64 pr-4">
                          <div className="space-y-3">
                            {/* Merchant Request */}
                            <div className="flex justify-end">
                              <div className="max-w-xs">
                                <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3">
                                  <p className="text-sm">
                                    Can you find car insurance for my 2023 Tesla
                                    Model Y?
                                  </p>
                                  <p className="text-xs opacity-90 mt-1">
                                    Looking for comprehensive coverage, budget
                                    around $150/month
                                  </p>
                                </div>
                                <div className="flex items-center justify-end gap-2 mt-1">
                                  <span className="text-xs text-muted-foreground">
                                    Merchant
                                  </span>
                                  <div className="w-4 h-4 bg-blue-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                    M
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* AI Search Response */}
                            <div className="flex justify-start">
                              <div className="max-w-xs">
                                <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                                  <p className="text-sm font-medium">
                                    Found 3 great options for your Tesla!
                                  </p>
                                  <div className="text-xs text-muted-foreground mt-2 space-y-2">
                                    <div className="bg-background/50 p-2 rounded">
                                      <p className="font-medium">
                                        1. SafeGuard Auto - $142/mo
                                      </p>
                                      <p>Comprehensive + EV coverage</p>
                                    </div>
                                    <div className="bg-background/50 p-2 rounded">
                                      <p className="font-medium">
                                        2. ElectricShield Pro - $148/mo
                                      </p>
                                      <p>
                                        Tesla specialist + charging protection
                                      </p>
                                    </div>
                                    <div className="bg-background/50 p-2 rounded">
                                      <p className="font-medium">
                                        3. AutoProtect Plus - $155/mo
                                      </p>
                                      <p>Premium coverage + roadside</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                    AI
                                  </div>
                                  <span className="text-xs text-muted-foreground">
                                    Paymonei AI
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Merchant Choice */}
                            <div className="flex justify-end">
                              <div className="max-w-xs">
                                <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3">
                                  <p className="text-sm">
                                    I like the second one - ElectricShield Pro
                                  </p>
                                  <p className="text-xs opacity-90 mt-1">
                                    Tesla specialist sounds perfect for my needs
                                  </p>
                                </div>
                                <div className="flex items-center justify-end gap-2 mt-1">
                                  <span className="text-xs text-muted-foreground">
                                    Merchant
                                  </span>
                                  <div className="w-4 h-4 bg-blue-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                    M
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* AI Connecting */}
                            <div className="flex justify-start">
                              <div className="max-w-xs">
                                <div className="bg-amber-50 border border-amber-200 rounded-2xl rounded-bl-md px-4 py-3">
                                  <p className="text-sm font-medium text-amber-800">
                                    Connecting to ElectricShield Pro AI...
                                  </p>
                                  <p className="text-xs text-amber-600 mt-1">
                                    🤖 Establishing secure AI-to-AI channel
                                  </p>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                    AI
                                  </div>
                                  <span className="text-xs text-muted-foreground">
                                    Paymonei AI
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* AI-to-AI Negotiation */}
                            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-3">
                              <p className="text-xs font-medium text-green-800 mb-2">
                                🤖 AI-to-AI Conversation:
                              </p>
                              <div className="space-y-2 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-blue-600 font-medium">
                                    PaymoneiAI:
                                  </span>
                                  <span className="text-muted-foreground">
                                    2023 Tesla Model Y quote request
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-green-600 font-medium">
                                    ElectricShieldAI:
                                  </span>
                                  <span className="text-muted-foreground">
                                    Processing vehicle specs...
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-green-600 font-medium">
                                    ElectricShieldAI:
                                  </span>
                                  <span className="text-muted-foreground">
                                    Quote generated: $148/mo
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Final Quote */}
                            <div className="flex justify-start">
                              <div className="max-w-xs">
                                <div className="bg-green-50 border border-green-200 rounded-2xl rounded-bl-md px-4 py-3">
                                  <p className="text-sm font-medium text-green-800">
                                    ✅ Quote received from ElectricShield Pro!
                                  </p>
                                  <div className="text-xs text-green-700 mt-2 space-y-1">
                                    <p>💰 Premium: $148/month</p>
                                    <p>🔋 Tesla EV coverage included</p>
                                    <p>⚡ Charging station protection</p>
                                    <p>🚗 $500 deductible</p>
                                    <p>📋 Policy ready to activate</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                    AI
                                  </div>
                                  <span className="text-xs text-muted-foreground">
                                    Paymonei AI
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Merchant Acceptance */}
                            <div className="flex justify-end">
                              <div className="max-w-xs">
                                <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3">
                                  <p className="text-sm">
                                    Perfect! I&apos;m happy with this quotation
                                  </p>
                                  <p className="text-xs opacity-90 mt-1">
                                    Can you get me the invoice so I can proceed
                                    with payment?
                                  </p>
                                </div>
                                <div className="flex items-center justify-end gap-2 mt-1">
                                  <span className="text-xs text-muted-foreground">
                                    Merchant
                                  </span>
                                  <div className="w-4 h-4 bg-blue-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                    M
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* AI Invoice Request */}
                            <div className="flex justify-start">
                              <div className="max-w-xs">
                                <div className="bg-amber-50 border border-amber-200 rounded-2xl rounded-bl-md px-4 py-3">
                                  <p className="text-sm font-medium text-amber-800">
                                    Requesting invoice from ElectricShield
                                    Pro...
                                  </p>
                                  <p className="text-xs text-amber-600 mt-1">
                                    🤖 Connecting for invoice generation
                                  </p>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                    AI
                                  </div>
                                  <span className="text-xs text-muted-foreground">
                                    Paymonei AI
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* AI-to-AI Invoice Generation */}
                            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-3">
                              <p className="text-xs font-medium text-purple-800 mb-2">
                                🤖 AI-to-AI Invoice Request:
                              </p>
                              <div className="space-y-2 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-blue-600 font-medium">
                                    PaymoneiAI:
                                  </span>
                                  <span className="text-muted-foreground">
                                    Invoice request for Tesla policy
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-purple-600 font-medium">
                                    ElectricShieldAI:
                                  </span>
                                  <span className="text-muted-foreground">
                                    Generating invoice #ESI-2024-001
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-purple-600 font-medium">
                                    ElectricShieldAI:
                                  </span>
                                  <span className="text-muted-foreground">
                                    Payment link created via Paymonei
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Invoice Received */}
                            <div className="flex justify-start">
                              <div className="max-w-xs">
                                <div className="bg-indigo-50 border border-indigo-200 rounded-2xl rounded-bl-md px-4 py-3">
                                  <p className="text-sm font-medium text-indigo-800">
                                    📄 Invoice received from ElectricShield Pro!
                                  </p>
                                  <div className="text-xs text-indigo-700 mt-2 space-y-1">
                                    <p>🧾 Invoice #ESI-2024-001</p>
                                    <p>💰 Amount: $148.00 (1st month)</p>
                                    <p>
                                      🔗 Payment link: pay.paymonei.com/esi001
                                    </p>
                                    <p>⏰ Due: Immediate for activation</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                    AI
                                  </div>
                                  <span className="text-xs text-muted-foreground">
                                    Paymonei AI
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Merchant Payment Instruction */}
                            <div className="flex justify-end">
                              <div className="max-w-xs">
                                <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3">
                                  <p className="text-sm">
                                    Great! Please pay this invoice
                                  </p>
                                  <p className="text-xs opacity-90 mt-1">
                                    Use my primary account balance for the
                                    payment
                                  </p>
                                </div>
                                <div className="flex items-center justify-end gap-2 mt-1">
                                  <span className="text-xs text-muted-foreground">
                                    Merchant
                                  </span>
                                  <div className="w-4 h-4 bg-blue-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                    M
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Payment Processing */}
                            <div className="flex justify-start">
                              <div className="max-w-xs">
                                <div className="bg-green-50 border border-green-200 rounded-2xl rounded-bl-md px-4 py-3">
                                  <p className="text-sm font-medium text-green-800">
                                    💳 Processing payment from primary
                                    account...
                                  </p>
                                  <div className="text-xs text-green-700 mt-2 space-y-1">
                                    <p>💰 $148.00 debited from balance</p>
                                    <p>🔄 Confirming with ElectricShield Pro</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                    AI
                                  </div>
                                  <span className="text-xs text-muted-foreground">
                                    Paymonei AI
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Payment Confirmation AI-to-AI */}
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-3">
                              <p className="text-xs font-medium text-green-800 mb-2">
                                🤖 Payment Confirmation:
                              </p>
                              <div className="space-y-2 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-blue-600 font-medium">
                                    PaymoneiAI:
                                  </span>
                                  <span className="text-muted-foreground">
                                    Payment $148.00 completed
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-green-600 font-medium">
                                    ElectricShieldAI:
                                  </span>
                                  <span className="text-muted-foreground">
                                    Payment received & verified
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-green-600 font-medium">
                                    ElectricShieldAI:
                                  </span>
                                  <span className="text-muted-foreground">
                                    Policy activation initiated
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Final Confirmation */}
                            <div className="flex justify-start">
                              <div className="max-w-xs">
                                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl rounded-bl-md px-4 py-3">
                                  <p className="text-sm font-medium text-emerald-800">
                                    🎉 Payment successful! Policy activated
                                  </p>
                                  <div className="text-xs text-emerald-700 mt-2 space-y-1">
                                    <p>✅ ElectricShield Pro policy active</p>
                                    <p>
                                      📧 Policy documents will be sent to your
                                      email
                                    </p>
                                    <p>⏰ Delivery time: Next 10 minutes</p>
                                    <p>🔒 Coverage starts immediately</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                    AI
                                  </div>
                                  <span className="text-xs text-muted-foreground">
                                    Paymonei AI
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Blockchain Recording */}
                            <div className="flex justify-start">
                              <div className="max-w-xs">
                                <div className="bg-violet-50 border border-violet-200 rounded-2xl rounded-bl-md px-4 py-3">
                                  <p className="text-sm font-medium text-violet-800">
                                    🔗 Recording to insurance blockchain...
                                  </p>
                                  <div className="text-xs text-violet-700 mt-2 space-y-1">
                                    <p>📋 Vehicle: 2023 Tesla Model Y</p>
                                    <p>🛡️ Policy: ElectricShield Pro Active</p>
                                    <p>📅 Start Date: Dec 1, 2024</p>
                                    <p>🔐 Blockchain hash: 0x7f2a...8b9c</p>
                                    <p>✨ Future premium discounts unlocked</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                    AI
                                  </div>
                                  <span className="text-xs text-muted-foreground">
                                    Paymonei AI
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Blockchain Benefits Explanation */}
                            <div className="bg-gradient-to-r from-violet-50 to-blue-50 border border-violet-200 rounded-xl p-3">
                              <p className="text-xs font-medium text-violet-800 mb-2">
                                🔗 Blockchain Benefits Activated:
                              </p>
                              <div className="space-y-1 text-xs text-violet-700">
                                <p>
                                  • ✅ Verifiable insurance history across
                                  providers
                                </p>
                                <p>
                                  • 🎯 Personalized rates based on driving
                                  record
                                </p>
                                <p>
                                  • 🚀 Instant policy transfers between insurers
                                </p>
                                <p>
                                  • 💎 Good driver rewards accumulate
                                  permanently
                                </p>
                                <p>
                                  • 🔍 Transparent claim history for better
                                  quotes
                                </p>
                              </div>
                            </div>
                          </div>
                        </ScrollArea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 mb-4">
                    <Store className="w-4 h-4" />
                    <span className="text-sm font-medium">AI Marketplace</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Intelligent Product Discovery
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    AI agents communicate directly with partner services to find
                    the best products and negotiate terms. Your AI handles
                    complex searches and connects with other AI agents for
                    real-time quotes and comparisons.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium">AI-to-AI Communication</p>
                        <p className="text-sm text-muted-foreground">
                          Secure agent-to-agent negotiation and data exchange
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium">Real-time Quotes</p>
                        <p className="text-sm text-muted-foreground">
                          Instant pricing from multiple providers simultaneously
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium">Smart Matching</p>
                        <p className="text-sm text-muted-foreground">
                          AI understands your criteria and finds optimal matches
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Marketing Campaign Use Case */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-200 mb-4">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">Creator Economy</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    AI Marketing Campaign Orchestration
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Launch comprehensive marketing campaigns with AI
                    coordinating content creators, influencers, and ad
                    platforms. Paymonei handles all payments across the creator
                    economy ecosystem, from freelancers to major platforms.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium">
                          Creator Payment Infrastructure
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Instant payments to global creators and freelancers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium">Platform Integration</p>
                        <p className="text-sm text-muted-foreground">
                          Direct ad spend management across all social platforms
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium">Performance Optimization</p>
                        <p className="text-sm text-muted-foreground">
                          Real-time budget reallocation based on campaign
                          metrics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-card border rounded-2xl p-6 shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-muted-foreground">
                          Campaign Management Hub
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-pink-600">
                            Active Campaign
                          </span>
                        </div>
                      </div>

                      <ScrollArea className="h-80 pr-4">
                        <div className="space-y-3">
                          {/* Merchant Campaign Request */}
                          <div className="flex justify-end">
                            <div className="max-w-xs">
                              <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3">
                                <p className="text-sm">
                                  I need to launch a social media campaign for
                                  my new eco-friendly water bottles
                                </p>
                                <p className="text-xs opacity-90 mt-1">
                                  Budget: $5,000. Target: young professionals
                                  who care about sustainability
                                </p>
                              </div>
                              <div className="flex items-center justify-end gap-2 mt-1">
                                <span className="text-xs text-muted-foreground">
                                  Merchant
                                </span>
                                <div className="w-4 h-4 bg-blue-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  M
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* AI Campaign Strategy */}
                          <div className="flex justify-start">
                            <div className="max-w-xs">
                              <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                                <p className="text-sm font-medium">
                                  Perfect! I&apos;ll orchestrate a
                                  multi-platform campaign
                                </p>
                                <div className="text-xs text-muted-foreground mt-2 space-y-1">
                                  <p>
                                    🎯 Targeting eco-conscious 25-35 year olds
                                  </p>
                                  <p>📱 Instagram, TikTok, LinkedIn focus</p>
                                  <p>💰 Budget allocation: $5,000 total</p>
                                  <p>⏱️ Campaign duration: 30 days</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  AI
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  Paymonei AI
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* AI Content Generation */}
                          <div className="flex justify-start">
                            <div className="max-w-xs">
                              <div className="bg-amber-50 border border-amber-200 rounded-2xl rounded-bl-md px-4 py-3">
                                <p className="text-sm font-medium text-amber-800">
                                  Generating content with AI tools...
                                </p>
                                <div className="text-xs text-amber-700 mt-2 space-y-1">
                                  <p>🎨 Midjourney Pro via Paymonei</p>
                                  <p>📹 RunwayML Video Gen via Paymonei</p>
                                  <p>✍️ GPT-4 API credits via Paymonei</p>
                                  <p>🎵 Mubert AI music via Paymonei</p>
                                  <p>🖼️ DALL-E 3 API via Paymonei</p>
                                  <p>🤖 All AI tools integrated & funded</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  AI
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  Paymonei AI
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Influencer Outreach */}
                          <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-xl p-3">
                            <p className="text-xs font-medium text-pink-800 mb-2">
                              🌟 Influencer Partnerships:
                            </p>
                            <div className="space-y-2 text-xs">
                              <div className="flex justify-between">
                                <span className="text-pink-700 font-medium">
                                  @EcoLifestyle (50K):
                                </span>
                                <span className="text-muted-foreground">
                                  $800 via Paymonei
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-pink-700 font-medium">
                                  @SustainableLife (30K):
                                </span>
                                <span className="text-muted-foreground">
                                  $500 via Paymonei
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-pink-700 font-medium">
                                  @GreenTech (25K):
                                </span>
                                <span className="text-muted-foreground">
                                  $400 via Paymonei
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Platform Ad Spend */}
                          <div className="flex justify-start">
                            <div className="max-w-xs">
                              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl rounded-bl-md px-4 py-3">
                                <p className="text-sm font-medium text-indigo-800">
                                  📱 Platform ad credits purchased
                                </p>
                                <div className="text-xs text-indigo-700 mt-2 space-y-1">
                                  <p>📸 Instagram Ads: $800 via Paymonei</p>
                                  <p>🎵 TikTok Ads: $600 via Paymonei</p>
                                  <p>💼 LinkedIn Ads: $400 via Paymonei</p>
                                  <p>🔄 Real-time budget optimization active</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  AI
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  Paymonei AI
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Campaign Performance */}
                          <div className="flex justify-start">
                            <div className="max-w-xs">
                              <div className="bg-green-50 border border-green-200 rounded-2xl rounded-bl-md px-4 py-3">
                                <p className="text-sm font-medium text-green-800">
                                  📊 Week 1 Performance Update
                                </p>
                                <div className="text-xs text-green-700 mt-2 space-y-1">
                                  <p>👀 2.3M impressions generated</p>
                                  <p>💙 87K engagements (3.8% rate)</p>
                                  <p>🔗 12K website clicks</p>
                                  <p>💰 $3,200 spent, $1,800 remaining</p>
                                  <p>
                                    🎯 Reallocating budget to top performers
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  AI
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  Paymonei AI
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Merchant Response */}
                          <div className="flex justify-end">
                            <div className="max-w-xs">
                              <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3">
                                <p className="text-sm">
                                  Amazing results! I love how everything is
                                  automated
                                </p>
                                <p className="text-xs opacity-90 mt-1">
                                  The Paymonei payment system makes this so
                                  seamless
                                </p>
                              </div>
                              <div className="flex items-center justify-end gap-2 mt-1">
                                <span className="text-xs text-muted-foreground">
                                  Merchant
                                </span>
                                <div className="w-4 h-4 bg-blue-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  M
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Budget Optimization */}
                          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-3">
                            <p className="text-xs font-medium text-green-800 mb-2">
                              🔄 Smart Budget Reallocation:
                            </p>
                            <div className="space-y-2 text-xs text-green-700">
                              <div className="flex justify-between">
                                <span>
                                  @EcoLifestyle performing 200% above avg:
                                </span>
                                <span className="font-medium">
                                  +$300 bonus via Paymonei
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span>Instagram Ads 150% ROI:</span>
                                <span className="font-medium">
                                  +$500 budget increase
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span>TikTok Ads underperforming:</span>
                                <span className="font-medium">
                                  -$200 budget reduction
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Final Campaign Results */}
                          <div className="flex justify-start">
                            <div className="max-w-xs">
                              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl rounded-bl-md px-4 py-3">
                                <p className="text-sm font-medium text-emerald-800">
                                  🎉 Campaign Complete! Outstanding Results
                                </p>
                                <div className="text-xs text-emerald-700 mt-2 space-y-1">
                                  <p>📈 8.7M total impressions</p>
                                  <p>💚 340K engagements (4.2% rate)</p>
                                  <p>🛒 1,847 website conversions</p>
                                  <p>💰 $4,987 marketing spend via Paymonei</p>
                                  <p>
                                    💵 $128,250 total sales revenue generated
                                  </p>
                                  <p>🏆 567% ROI achieved</p>
                                  <p>✨ All creators paid instantly & rated</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  AI
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  Paymonei AI
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Marketplace Use Case */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="bg-card border rounded-2xl p-6 shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-muted-foreground">
                          Project Lifecycle Management
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-purple-600">
                            Live Project
                          </span>
                        </div>
                      </div>

                      <ScrollArea className="h-96 pr-4">
                        <div className="space-y-3">
                          {/* Project Brainstorming */}
                          <div className="flex justify-end">
                            <div className="max-w-xs">
                              <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3">
                                <p className="text-sm">
                                  I need to build a landing page for my new
                                  startup with VibeCooding style and deploy to
                                  Vercel
                                </p>
                                <p className="text-xs opacity-90 mt-1">
                                  Budget: $300. Timeline: 3 business days
                                </p>
                              </div>
                              <div className="flex items-center justify-end gap-2 mt-1">
                                <span className="text-xs text-muted-foreground">
                                  Sarah (Merchant)
                                </span>
                                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">
                                  S
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* AI Agent Response */}
                          <div className="flex justify-start">
                            <div className="max-w-xs">
                              <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                                <p className="text-sm">
                                  Perfect! I&apos;ve analyzed your requirements
                                  and found 2 excellent remote engineers
                                  specializing in modern landing pages and
                                  Vercel deployment.
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">
                                  🔍 Searching global talent pool...
                                </p>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  AI
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  Paymonei AI
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Engineer Options */}
                          <div className="flex justify-start">
                            <div className="max-w-xs">
                              <div className="bg-gray-50 border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3">
                                <p className="text-sm font-medium">
                                  👨‍💻 Found 2 Perfect Matches:
                                </p>
                                <div className="text-xs mt-2 space-y-2">
                                  <div className="p-2 bg-white rounded border">
                                    <p className="font-medium">
                                      Alex Chen - $150/hr
                                    </p>
                                    <p>Next.js + TailwindCSS specialist</p>
                                    <p className="text-green-600">
                                      ⭐ 4.9/5 • Available now
                                    </p>
                                  </div>
                                  <div className="p-2 bg-white rounded border">
                                    <p className="font-medium">
                                      Maria Silva - $120/hr
                                    </p>
                                    <p>React + Vercel deployment expert</p>
                                    <p className="text-green-600">
                                      ⭐ 4.8/5 • Available this week
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  AI
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  Paymonei AI
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Merchant Selection */}
                          <div className="flex justify-end">
                            <div className="max-w-xs">
                              <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3">
                                <p className="text-sm">
                                  I&apos;ll go with Alex Chen. Can you get a
                                  detailed quote and draft the contract?
                                </p>
                              </div>
                              <div className="flex items-center justify-end gap-2 mt-1">
                                <span className="text-xs text-muted-foreground">
                                  Sarah
                                </span>
                                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">
                                  S
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Rate Quote */}
                          <div className="flex justify-start">
                            <div className="max-w-xs">
                              <div className="bg-amber-50 border border-amber-200 rounded-2xl rounded-bl-md px-4 py-3">
                                <p className="text-sm font-medium text-amber-800">
                                  💰 Rate Quote from Alex Chen
                                </p>
                                <div className="text-xs text-amber-700 mt-2 space-y-1">
                                  <p>🎨 Landing page design: $120</p>
                                  <p>⚡ VibeCooding-style development: $150</p>
                                  <p>🚀 Vercel deployment & setup: $30</p>
                                  <p className="font-medium pt-1 border-t border-amber-200">
                                    Total: $300 (within budget!)
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  AI
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  Paymonei AI
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Contract Draft */}
                          <div className="flex justify-start">
                            <div className="max-w-xs">
                              <div className="bg-blue-50 border border-blue-200 rounded-2xl rounded-bl-md px-4 py-3">
                                <p className="text-sm font-medium text-blue-800">
                                  📄 Smart Contract Generated
                                </p>
                                <div className="text-xs text-blue-700 mt-2 space-y-1">
                                  <p>✅ Milestone-based payments</p>
                                  <p>✅ Automatic escrow setup</p>
                                  <p>✅ Completion verification system</p>
                                  <p>✅ 7-day review period</p>
                                  <p className="text-green-600 font-medium">
                                    📧 Contract sent to Alex Chen
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  AI
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  Paymonei AI
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Engineer Acceptance */}
                          <div className="flex justify-start">
                            <div className="max-w-xs">
                              <div className="bg-green-50 border border-green-200 rounded-2xl rounded-bl-md px-4 py-3">
                                <p className="text-sm font-medium text-green-800">
                                  ✅ Contract Signed by Alex Chen
                                </p>
                                <div className="text-xs text-green-700 mt-2 space-y-1">
                                  <p>💰 $300 moved to escrow contract</p>
                                  <p>🔒 Funds secured until completion</p>
                                  <p>📅 Project start: Immediately</p>
                                  <p>🎯 Delivery: 3 business days</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  AI
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  Paymonei AI
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Project Delivery */}
                          <div className="flex justify-start">
                            <div className="max-w-xs">
                              <div className="bg-purple-50 border border-purple-200 rounded-2xl rounded-bl-md px-4 py-3">
                                <p className="text-sm font-medium text-purple-800">
                                  🚀 Project Delivered!
                                </p>
                                <div className="text-xs text-purple-700 mt-2 space-y-1">
                                  <p>
                                    🌐 Landing page: sarah-startup-v1.vercel.app
                                  </p>
                                  <p>📱 Mobile responsive ✓</p>
                                  <p>⚡ PageSpeed: 95/100 ✓</p>
                                  <p>🎨 VibeCooding design ✓</p>
                                  <p className="text-blue-600">
                                    🤖 AI verification: All requirements met
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  AI
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  Paymonei AI
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Merchant Approval */}
                          <div className="flex justify-end">
                            <div className="max-w-xs">
                              <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3">
                                <p className="text-sm">
                                  Amazing work! The landing page is exactly what
                                  I envisioned. Approving completion now.
                                </p>
                              </div>
                              <div className="flex items-center justify-end gap-2 mt-1">
                                <span className="text-xs text-muted-foreground">
                                  Sarah
                                </span>
                                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">
                                  S
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Final Payment Release */}
                          <div className="flex justify-start">
                            <div className="max-w-xs">
                              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl rounded-bl-md px-4 py-3">
                                <p className="text-sm font-medium text-emerald-800">
                                  🎉 Project Complete!
                                </p>
                                <div className="text-xs text-emerald-700 mt-2 space-y-1">
                                  <p>💸 $300 released from escrow</p>
                                  <p>🏦 Payment sent to Alex Chen</p>
                                  <p>⭐ 5-star rating submitted</p>
                                  <p>📄 Contract automatically closed</p>
                                  <p>🔄 Ready for next project</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                                  AI
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  Paymonei AI
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 mb-4">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      Smart Contract Escrow
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    End-to-End Project Automation
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    AI agents handle everything from talent discovery to
                    contract execution. Smart contracts automatically manage
                    escrow payments, milestone tracking, and fund release upon
                    completion verification.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium">
                          Intelligent Talent Matching
                        </p>
                        <p className="text-sm text-muted-foreground">
                          AI finds the perfect engineers based on skills, rates,
                          and availability
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium">
                          Automated Contract Generation
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Smart contracts with milestone-based payments and
                          completion verification
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium">Secure Escrow Management</p>
                        <p className="text-sm text-muted-foreground">
                          Funds protected until deliverables meet contract
                          specifications
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E2E Business Operations Section */}
        <section className="py-20 px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-foreground">Built for</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  {" "}
                  E2E Business Operations
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Complete financial infrastructure that powers every aspect of
                your business—from payments to payroll, invoicing to intelligent
                automation.
              </p>
            </div>

            {/* Creative asymmetric grid layout */}
            <div className="grid lg:grid-cols-12 gap-6">
              {/* Merchant Settlement */}
              <div className="lg:col-span-6 group">
                <div className="h-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50 border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-gray-300/10 to-slate-300/10 rounded-full blur-2xl" />
                  <div className="relative h-full flex flex-col">
                    <div className="h-64 lg:h-[22rem] relative bg-white dark:bg-white rounded-t-3xl">
                      <Image
                        src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/merchant-settlement.png"
                        alt="Merchant Settlement"
                        fill
                        className="object-cover rounded-t-3xl"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <h3 className="text-2xl font-bold mb-3">
                        Merchant Settlement
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Accept payments globally with secure payment links or
                        API. Instant settlement with real-time tracking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enterprise Payouts */}
              <div className="lg:col-span-6 group">
                <div className="h-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50 border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-gray-300/10 to-slate-300/10 rounded-full blur-2xl" />
                  <div className="relative h-full flex flex-col">
                    <div className="h-64 lg:h-[22rem] relative bg-white dark:bg-white rounded-t-3xl">
                      <Image
                        src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/enterprise-payouts.png"
                        alt="Enterprise Payouts"
                        fill
                        className="object-cover rounded-t-3xl"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <h3 className="text-2xl font-bold mb-3">
                        Enterprise Payouts
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Enterprise-grade payout infrastructure supporting mass
                        payments to vendors and suppliers worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Payroll */}
              <div className="lg:col-span-4 group">
                <div className="h-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50 border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-300/10 to-slate-300/10 rounded-full blur-2xl" />
                  <div className="relative h-full flex flex-col">
                    <div className="h-64 relative bg-white dark:bg-white rounded-t-3xl">
                      <Image
                        src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/global-payroll.png"
                        alt="Global Payroll"
                        fill
                        className="object-cover rounded-t-3xl"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <h3 className="text-xl font-bold mb-2">Global Payroll</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Simplify international payroll with compliant, automated
                        payments to contractors worldwide in any currencies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smart Invoice */}
              <div className="lg:col-span-4 group">
                <div className="h-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50 border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-300/10 to-slate-300/10 rounded-full blur-2xl" />
                  <div className="relative h-full flex flex-col">
                    <div className="h-64 relative bg-white dark:bg-white rounded-t-3xl">
                      <Image
                        src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/invoice-payment.png"
                        alt="Smart Invoice Payments"
                        fill
                        className="object-cover rounded-t-3xl"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <h3 className="text-xl font-bold mb-2">Smart Invoice</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Streamline your invoicing with intelligent, automated
                        follow-ups, and multicurrency payment acceptance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orchestration */}
              <div className="lg:col-span-4 group">
                <div className="h-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50 border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-300/10 to-slate-300/10 rounded-full blur-2xl" />
                  <div className="relative h-full flex flex-col">
                    <div className="h-64 relative bg-white dark:bg-white rounded-t-3xl">
                      <Image
                        src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/stablecoin-orchestration.png"
                        alt="Orchestration"
                        fill
                        className="object-cover rounded-t-3xl"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <h3 className="text-xl font-bold mb-2">Orchestration</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Make business move with AI Agent Protocol, liquidity
                        optimization, and smart conversion to scale globally.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Native Operations Suite Section */}
        <section className="py-24 px-2 xs:px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/5 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-800 mb-6">
                <Monitor className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Intelligence Workspace
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">AI-Native Operations.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 mt-2">
                  Zero Context Switching.
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stop juggling between scattered business tools and manual
                workflows. Your entire operations from documents to analytics
                powered by our AI in a single workspace.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="relative">
                <div className="absolute -top-3 -left-3 px-4 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm font-medium z-10">
                  Traditional Chaos
                </div>
                <div className="relative bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-900/10 dark:to-orange-900/10 border-2 border-dashed border-red-200 dark:border-red-800 rounded-3xl p-8 opacity-75 h-full flex flex-col">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center text-white font-bold">
                        D
                      </div>
                      <span className="text-sm font-medium">GDocs</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center text-white font-bold">
                        E
                      </div>
                      <span className="text-sm font-medium">GSheet</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
                        c
                      </div>
                      <span className="text-sm font-medium">Canva</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center text-white font-bold">
                        C
                      </div>
                      <span className="text-sm font-medium">Calendly</span>
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                      <X className="w-4 h-4" />
                      <span className="text-sm">
                        Context switching multiple tools
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                      <X className="w-4 h-4" />
                      <span className="text-sm">
                        Manual copy-paste workflows
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                      <X className="w-4 h-4" />
                      <span className="text-sm">
                        Version control nightmares
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-3 -right-3 px-4 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium z-10">
                  AI-Native Future
                </div>
                <div className="relative bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 border-2 border-violet-200 dark:border-violet-800 rounded-3xl p-8 h-full flex flex-col">
                  <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                        <Brain className="w-10 h-10" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2">
                      AI Operations Suite
                    </h3>
                    <p className="text-center text-white/90 text-sm">
                      Intelligent document & workflow automation
                    </p>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">
                        AI-powered document generation
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">
                        Smart invoice & report automation
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">
                        Unified business operations
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-background border border-border/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">AI Documents</h3>
                  <p className="text-sm text-muted-foreground">
                    Auto-generate contracts, proposals, and reports with AI that
                    understands your business real context.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-background border border-border/50 rounded-2xl p-6 hover:border-green-500/50 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">AI Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time dashboards and predictive insights without long
                    hours spreadsheet formulas.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-background border border-border/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                    <Presentation className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">AI Presentations</h3>
                  <p className="text-sm text-muted-foreground">
                    Create stunning presentations from prompts. AI designs
                    slides that match your brand and audiences.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-background border border-border/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">AI Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    Smart calendar that schedules meetings, manages tasks, and
                    optimizes your team&apos;s time.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block">
                <div className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-2xl">
                  <div className="text-left">
                    <div className="text-2xl font-bold">
                      Ready to eliminate tool chaos?
                    </div>
                    <div className="text-violet-100">
                      Enable AI agents to handle your business workflows
                      seamlessly
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-white/20 backdrop-blur text-white rounded-xl font-semibold hover:bg-white/30 transition-all">
                    Start Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional-Grade Security Section */}
        <section className="py-20 px-2 xs:px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/10 via-background to-muted/10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-slate-100 to-zinc-100 dark:from-slate-900/30 dark:to-zinc-900/30 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-800 mb-6">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Enterprise-Ready Platform
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-foreground">Institutional-Grade</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-zinc-600 to-slate-600 dark:from-slate-400 dark:via-zinc-400 dark:to-slate-400 mt-2">
                  Security & Performance
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built for the world&apos;s most demanding financial institutions
                with uncompromising standards.
              </p>
            </div>

            {/* Feature Cards - Clean 2x3 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {/* 10x Faster Processing */}
              <div className="group">
                <div className="relative h-full bg-background border border-border/50 rounded-2xl p-8 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      100x Faster Processing
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sub-second transaction validation and execution compared
                      to traditional processing times.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enterprise-Grade Security */}
              <div className="group">
                <div className="relative h-full bg-background border border-border/50 rounded-2xl p-8 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      Enterprise-Grade Security
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Zero-knowledge proofs and quantum-resistant cryptography
                      protect every transaction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Global Compliance */}
              <div className="group">
                <div className="relative h-full bg-background border border-border/50 rounded-2xl p-8 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      Global Compliance
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Built-in regulatory compliance for 150+ countries with
                      automated reporting.
                    </p>
                  </div>
                </div>
              </div>

              {/* 90% Cost Reduction */}
              <div className="group">
                <div className="relative h-full bg-background border border-border/50 rounded-2xl p-8 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      90% Cost Reduction
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Eliminate intermediaries and reduce transaction costs
                      through direct network integration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Infinite Scalability */}
              <div className="group">
                <div className="relative h-full bg-background border border-border/50 rounded-2xl p-8 hover:border-green-500/30 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      Infinite Scalability
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Handle millions of concurrent agent transactions with
                      horizontal scaling.
                    </p>
                  </div>
                </div>
              </div>

              {/* Multi-Agent Support */}
              <div className="group">
                <div className="relative h-full bg-background border border-border/50 rounded-2xl p-8 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      Multi-Agent Support
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Enable complex multi-party transactions between multiple
                      AI agents seamlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="mt-16 pt-12 border-t border-border/50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    99.99%
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Uptime SLA
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    &lt; 100ms
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Latency
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">150+</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Countries
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Orchestration Dominance Section */}
        <section className="py-20 px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 border border-violet-200 dark:border-violet-800 mb-6">
                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-violet-700 dark:text-violet-300">
                  Beyond AI Agent Protocol
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-foreground">
                  Intelligent Infrastructure for
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                  All Realities
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We power transactions across every environment from physical
                stores to virtual worlds. One platform that connects all your
                business operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Physical Commerce</h3>
                <p className="text-muted-foreground">
                  Real-world transactions, in-store payments, supply chain
                  automation, and physical asset management unified through
                  intelligent orchestration.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Digital Ecosystems</h3>
                <p className="text-muted-foreground">
                  Web platforms, mobile apps, IoT networks, and cloud services
                  orchestrated through AI agents that understand context and
                  execute autonomously.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Virtual Realities</h3>
                <p className="text-muted-foreground">
                  Metaverse economies, virtual worlds, AR/VR commerce, and
                  digital twin environments with seamless cross-reality values.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-background to-muted border">
                <span className="text-sm font-medium">
                  Unified Orchestration Layer
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500"></div>
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                </div>
                <span className="text-sm text-muted-foreground">
                  One Protocol, Infinite Possibilities
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-52 px-2 xs:px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* World dotted background using Image component */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/world-dotted.png"
              alt="World map background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              <span className="text-gray-900 dark:text-white">
                Ready to Transform
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Your Business?
              </span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals already using AI-powered
              infrastructure to streamline operations, reduce costs, and scale
              globally.
            </p>
            <Link href="/auth/login">
              <Button
                size="lg"
                className="group relative rounded-full px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
              >
                <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center">
                  Try Now Free
                  <svg
                    className="ml-3 w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
