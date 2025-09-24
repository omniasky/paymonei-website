import type { Metadata } from "next";

// Base metadata configuration
const baseMetadata = {
  metadataBase: new URL('https://paymonei.com'),
  siteName: "Paymonei",
  creator: "Paymonei",
  publisher: "Paymonei",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
} as const;

// Page-specific metadata generators
export const generatePageMetadata = {
  // Homepage metadata
  home: (): Metadata => ({
    ...baseMetadata,
    title: "Paymonei - AI Agent Payment Protocol & Financial Infrastructure",
    description: "The autonomous economy standard. AI-native payment protocol enabling secure agent-to-agent transactions, institutional-grade wallets, and unified AI workspace. Replace Google Docs, Excel, PowerPoint with one AI platform.",
    keywords: [
      "AI agent payments",
      "agent payment protocol",
      "AP2 protocol",
      "autonomous transactions",
      "AI financial infrastructure",
      "institutional wallet",
      "AI workspace",
      "business automation",
    ],
    openGraph: {
      title: "Paymonei - The Autonomous Economy Standard",
      description: "Enable AI agents to transact seamlessly. Our proprietary protocol powers the financial nervous system for AI.",
      url: "https://paymonei.com",
      type: "website",
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
  }),

  // Pricing page metadata
  pricing: (): Metadata => ({
    ...baseMetadata,
    title: "Pricing - Transparent AI Infrastructure Plans | Paymonei",
    description: "Simple, transparent pricing for AI agent payment infrastructure. Enterprise-grade security, global compliance, and unlimited AI workspace features. Free trial available.",
    keywords: [
      "AI payment pricing",
      "agent protocol pricing",
      "enterprise payment plans",
      "AI infrastructure cost",
      "payment API pricing",
    ],
    openGraph: {
      title: "Paymonei Pricing - AI Payment Infrastructure Plans",
      description: "Transparent pricing for the future of AI commerce. Enterprise security, global compliance, unlimited features.",
      url: "https://paymonei.com/pricing",
      type: "website",
      images: [
        {
          url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/pricing-og.png",
          width: 1200,
          height: 630,
          alt: "Paymonei Pricing Plans",
        },
      ],
    },
    alternates: {
      canonical: "https://paymonei.com/pricing",
    },
  }),

  // Agent Protocol page metadata
  agentProtocol: (): Metadata => ({
    ...baseMetadata,
    title: "Agent Payment Protocol (AP2) - Technical Documentation | Paymonei",
    description: "Complete technical documentation for Paymonei's Agent Payment Protocol (AP2). Learn about cryptographic mandates, multi-chain support, and autonomous transaction infrastructure.",
    keywords: [
      "agent payment protocol",
      "AP2 documentation",
      "cryptographic mandates",
      "autonomous transactions",
      "multi-chain payments",
      "AI agent API",
      "payment protocol specs",
    ],
    openGraph: {
      title: "Agent Payment Protocol (AP2) - Technical Docs",
      description: "Complete technical documentation for autonomous AI agent payments. Cryptographic mandates, multi-chain support, enterprise security.",
      url: "https://paymonei.com/agent-protocol",
      type: "website",
      images: [
        {
          url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/protocol-og.png",
          width: 1200,
          height: 630,
          alt: "Agent Payment Protocol Documentation",
        },
      ],
    },
    alternates: {
      canonical: "https://paymonei.com/agent-protocol",
    },
  }),

  // Developer page metadata
  developers: (): Metadata => ({
    ...baseMetadata,
    title: "Developer Platform - APIs & SDKs for AI Payments | Paymonei",
    description: "Build with Paymonei's AI payment infrastructure. RESTful APIs, SDKs, webhooks, and comprehensive documentation for autonomous agent transactions.",
    keywords: [
      "payment API",
      "AI payment SDK",
      "developer platform",
      "payment webhooks",
      "agent payment integration",
      "financial API",
    ],
    openGraph: {
      title: "Paymonei Developer Platform",
      description: "Build the future of AI commerce. Comprehensive APIs, SDKs, and tools for autonomous agent payments.",
      url: "https://paymonei.com/developers",
      type: "website",
      images: [
        {
          url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/developers-og.png",
          width: 1200,
          height: 630,
          alt: "Paymonei Developer Platform",
        },
      ],
    },
    alternates: {
      canonical: "https://paymonei.com/developers",
    },
  }),

  // Enterprise page metadata
  enterprise: (): Metadata => ({
    ...baseMetadata,
    title: "Enterprise Solutions - Institutional AI Payment Infrastructure | Paymonei",
    description: "Enterprise-grade AI payment infrastructure for large organizations. White-label solutions, dedicated support, custom integrations, and institutional-grade security.",
    keywords: [
      "enterprise payments",
      "institutional wallet",
      "white-label payment",
      "enterprise API",
      "B2B payment infrastructure",
      "institutional security",
    ],
    openGraph: {
      title: "Paymonei Enterprise Solutions",
      description: "Institutional-grade AI payment infrastructure. White-label solutions, dedicated support, enterprise security.",
      url: "https://paymonei.com/enterprise",
      type: "website",
      images: [
        {
          url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/enterprise-og.png",
          width: 1200,
          height: 630,
          alt: "Paymonei Enterprise Solutions",
        },
      ],
    },
    alternates: {
      canonical: "https://paymonei.com/enterprise",
    },
  }),

  // About page metadata
  about: (): Metadata => ({
    ...baseMetadata,
    title: "About Us - Building the Future of AI Commerce | Paymonei",
    description: "Learn about Paymonei's mission to build the financial infrastructure for the autonomous economy. Meet our team and discover our vision for AI-driven commerce.",
    keywords: [
      "about paymonei",
      "AI company",
      "fintech startup",
      "autonomous economy",
      "payment innovation",
      "AI infrastructure",
    ],
    openGraph: {
      title: "About Paymonei",
      description: "Building the financial infrastructure for the autonomous economy. Learn about our mission and vision.",
      url: "https://paymonei.com/about",
      type: "website",
      images: [
        {
          url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/about-og.png",
          width: 1200,
          height: 630,
          alt: "About Paymonei",
        },
      ],
    },
    alternates: {
      canonical: "https://paymonei.com/about",
    },
  }),
};

// Structured data generators for different page types
export const generateStructuredData = {
  // Organization schema for company pages
  organization: () => ({
    "@context": "https://schema.org",
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
    description: "AI-native financial infrastructure enabling autonomous agent payments",
    foundingDate: "2023",
    sameAs: [
      "https://twitter.com/paymonei",
      "https://linkedin.com/company/paymonei",
      "https://github.com/paymonei",
    ],
  }),

  // Product schema for feature pages
  softwareApplication: () => ({
    "@context": "https://schema.org",
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
  }),

  // FAQ schema for support pages
  faq: (questions: Array<{ question: string; answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  }),

  // Article schema for blog posts
  article: (title: string, description: string, publishDate: string, author: string) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Paymonei",
      logo: {
        "@type": "ImageObject",
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/paymonei-logo.svg",
      },
    },
    datePublished: publishDate,
    dateModified: publishDate,
  }),
};

// Utility function to generate page-specific robots.txt rules
export const generateRobots = (
  index: boolean = true,
  follow: boolean = true,
  additionalRules?: Record<string, any>
) => ({
  index,
  follow,
  googleBot: {
    index,
    follow,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
    ...additionalRules,
  },
});