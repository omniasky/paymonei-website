import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Default metadata for the entire site
export const metadata: Metadata = {
  metadataBase: new URL('https://paymonei.com'),
  title: {
    default: "Stablecoin Payment API & Infrastructure | Crypto Payment Gateway",
    template: "%s | Paymonei"
  },
  description: "AI-native payment infrastructure, enterprise stablecoin payment infrastructure and API for global businesses. Process USDC payments, stablecoins on/off-ramps, and cross-border transactions with AI-native automation and institutional security.",
  keywords: [
    // High-volume search terms (prioritized)
    "stablecoin payment API",
    "crypto payment gateway",
    "USDC payment infrastructure",
    "crypto payment processing",
    "stablecoin API",
    "blockchain payment API",
    "crypto on ramp API",
    "crypto off ramp solution",

    // Use case keywords (buyer intent)
    "cross-border payments",
    "global payment infrastructure",
    "enterprise payment API",
    "crypto payout API",
    "digital asset payments",
    "international payment API",
    "global payroll crypto",
    "enterprise payouts",

    // Technical specifications
    "payment gateway API",
    "payment infrastructure",
    "MPC wallet",
    "institutional wallet",
    "blockchain infrastructure",

    // Differentiation (AI features)
    "AI agent payments",
    "autonomous payment protocol",
    "AI financial infrastructure",
    "agent payment protocol",
    "AI-native payments",

    // Your protocol
    "AP2 protocol",
    "Agentic payment protocol",
    "cryptographic mandates",
  ],
  authors: [{ name: "Paymonei", url: "https://paymonei.com" }],
  creator: "Paymonei",
  publisher: "Paymonei",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paymonei.com",
    siteName: "Paymonei",
    title: "Stablecoin Payment API & Infrastructure | Enterprise Crypto Gateway",
    description: "AI-native payment infrastructure, enterprise stablecoin payment infrastructure and API for global businesses. Process USDC payments, stablecoins on/off-ramps, and cross-border transactions with AI-native automation and institutional security.",
    images: [
      {
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png",
        width: 1200,
        height: 600,
        alt: "Paymonei - Stablecoin Payment Infrastructure & API",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@paymonei",
    creator: "@paymonei",
    title: "Stablecoin Payment API | Crypto Gateway Infrastructure",
    description: "AI-native payment infrastructure, enterprise stablecoin payment infrastructure and API for global businesses. Process USDC payments, stablecoins on/off-ramps, and cross-border transactions with AI-native automation and institutional security.",
    images: ["https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/twitter-card.png"],
  },
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
  alternates: {
    canonical: "https://paymonei.com",
  },
  manifest: "/manifest.json",
  category: "technology",
};

// Separate viewport export as required by Next.js
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}