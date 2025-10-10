import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { HeroSection } from "@/components/templates/HeroSection";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CodeComparisonSection } from "@/components/organisms/CodeComparisonSection";
import type { Metadata } from "next";

// Page-specific metadata that overrides the default
export const metadata: Metadata = {
  title: "Stablecoin Payment API & Infrastructure | Digital Payment Gateway",
  description:
    "Enterprise stablecoin payment infrastructure and API for global businesses. Process USDC payments, stablecoin on/off-ramps, and cross-border transactions with AI-native automation and institutional security.",
  openGraph: {
    title:
      "Stablecoin Payment API & Infrastructure | Enterprise Digital Gateway",
    description:
      "Enterprise-grade stablecoin payment infrastructure and API. Process USDC, stablecoin on/off-ramps, and global payments with AI-native automation and institutional security.",
    url: "https://paymonei.com",
    images: [
      {
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paymonei - Stablecoin Payment Infrastructure & API",
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
        "Enterprise stablecoin payment infrastructure and API enabling secure digital asset payments, on/off-ramps, and cross-border transactions with AI-native automation",
      foundingDate: "2023",
      sameAs: [
        "https://twitter.com/paymonei",
        "https://www.linkedin.com/company/paymonei-com",
        "https://github.com/paymonei",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://paymonei.com/#website",
      url: "https://paymonei.com",
      name: "Paymonei",
      description:
        "Stablecoin payment API and infrastructure for global businesses",
      publisher: {
        "@id": "https://paymonei.com/#organization",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://paymonei.com/#software",
      name: "Paymonei Stablecoin Payment API",
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
        "Stablecoin Payment API",
        "USDC Payment Processing",
        "USDC On/Off-Ramps",
        "USDT On/Off-Ramps",
        "Stablecoin On/Off-Ramps",
        "Multi-chain Support",
        "AI Agent Payment Protocol (AP2)",
        "Institutional Wallet",
        "KYC/AML Compliance",
        "Cross-Border Payments",
        "Global Payroll",
        "Enterprise Payouts",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Paymonei's stablecoin payment API?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paymonei's stablecoin payment API is an enterprise-grade infrastructure that enables businesses to process USDC and other stablecoin payments globally. It includes digital asset on/off-ramps, multi-chain support, AI-native automation, and built-in KYC/AML compliance for seamless cross-border transactions.",
          },
        },
        {
          "@type": "Question",
          name: "How does Paymonei's digital payment gateway work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paymonei provides API infrastructure for processing stablecoin payments, converting digital assets to fiat through secure on/off-ramps, and facilitating global payouts. Our platform supports USDC transactions, institutional-grade security, and integrates with licensed financial partners like Circle and Nium for settlement.",
          },
        },
        {
          "@type": "Question",
          name: "Is Paymonei secure for enterprise stablecoin payments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Paymonei provides institutional-grade security with military-grade encryption, zero-knowledge proofs, quantum-resistant cryptography, and full regulatory compliance for 150+ countries. Our non-custodial infrastructure includes AI-powered fraud detection and automated compliance monitoring.",
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
          subtitle="From startups processing their first transaction to enterprises, we power businesses of all sizes to streamline operations across global markets."
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
                <span className="block">Trusted by Global Developers</span>
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
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/circle.jpeg"
                    alt="Circle"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/brex.jpeg"
                    alt="Brex"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/accenture.jpeg"
                    alt="Accenture"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/grab.jpeg"
                    alt="Grab"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/github.jpeg"
                    alt="Github"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/expedia.jpeg"
                    alt="Expedia"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/gojek.jpeg"
                    alt="Gojek"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/traveloka.jpeg"
                    alt="Traveloka"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/tokopedia.jpeg"
                    alt="Tokopedia"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/blibli.jpeg"
                    alt="Blibli"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/chatgpt.jpeg"
                    alt="OpenAI"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/nus.edu.jpeg"
                    alt="NUS"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/ntu.edu.jpeg"
                    alt="NTU"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/microsoft.jpeg"
                    alt="Microsoft"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/quicknode.jpeg"
                    alt="Quicknode"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/ripple.jpeg"
                    alt="Ripple"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/paypal.jpeg"
                    alt="Paypal"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/instarem.jpeg"
                    alt="Instarem"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/resend.jpeg"
                    alt="Resend"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/chainalysis.jpeg"
                    alt="Chainalysis"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/nium.jpeg"
                    alt="Nium"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/vercel.jpeg"
                    alt="Vercel"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/phantom.jpeg"
                    alt="Phantom"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/shopee.jpeg"
                    alt="Shopee"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/coinbase.jpeg"
                    alt="Coinbase"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/figma.jpeg"
                    alt="Figma"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/anthropic.jpeg"
                    alt="Anthropic"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/visa.jpeg"
                    alt="Visa"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/mastercard.jpeg"
                    alt="Mastercard"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/aws.jpeg"
                    alt="AWS"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/bytedance.jpeg"
                    alt="Bytedance"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/infura.jpeg"
                    alt="Infura"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/tiket.jpeg"
                    alt="Tiket"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/uber.jpeg"
                    alt="Uber"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/google.jpeg"
                    alt="Google"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/amazon.jpeg"
                    alt="Alchemy"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/stripe.jpeg"
                    alt="Stripe"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/foodpanda.jpeg"
                    alt="Foodpanda"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/qoala.jpeg"
                    alt="Qoala"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/mercury.jpeg"
                    alt="Mercury"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/tether.jpeg"
                    alt="Tether"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/pwc.jpeg"
                    alt="PWC"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/lazada.jpeg"
                    alt="Lazada"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/ethereum.jpeg"
                    alt="Ethereum"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/supabase.jpeg"
                    alt="Supabase"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/metamask.jpeg"
                    alt="Metamask"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/polygon.jpeg"
                    alt="Polygon Technology"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/nextrans.jpeg"
                    alt="Nextrans"
                    width={80}
                    height={40}
                    className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[96px] h-16 mx-4">
                  <Image
                    src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/companies/agoda.jpeg"
                    alt="Agoda"
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
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600">
                  Protocol
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Enabling secure, authenticated payments by AI agents. We
                simplify your marketing, sales, finance and procurement
                operations through the universal protocol of agentic payments.
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

        {/* Code Comparison Section - How It Works */}
        <CodeComparisonSection />


        {/* E2E Business Operations Section */}
        <section className="py-20 px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-foreground">Built for</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600">
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
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 mt-2">
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
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600">
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
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
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
                className="group relative rounded-full px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl font-semibold bg-gradient-to-r from-orange-500 to-amber-600 text-white hover:from-orange-600 hover:to-amber-700 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
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
