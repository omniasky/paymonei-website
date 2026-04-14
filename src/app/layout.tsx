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
    default: "Business Billing & Payment Operations Software | Paymonei",
    template: "%s | Paymonei"
  },
  description: "Paymonei is billing and payment operations software for global businesses. Create invoices, track collections, and run payment workflows from one dashboard, across 150+ countries.",
  keywords: [
    // Core product category
    "billing software",
    "invoicing software",
    "payment operations software",
    "business payment software",
    "payment workflow software",

    // Use case keywords (buyer intent)
    "cross-border payment management",
    "global payment operations",
    "enterprise billing software",
    "outbound payment management",
    "international invoice software",
    "vendor payment management",
    "multi-currency invoicing",

    // API / developer
    "payment API",
    "billing API",
    "invoice API",
    "payment operations software",
    "embedded checkout",

    // Multi-rail
    "multi-rail payments",
    "payment routing software",
    "global payment infrastructure",
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
    title: "Business Billing & Payment Operations Software | Paymonei",
    description: "Billing and payment operations software for global businesses. Create invoices, track collections, and run payment workflows from one dashboard, across 150+ countries.",
    images: [
      {
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png",
        width: 1200,
        height: 600,
        alt: "Paymonei: Business Billing and Payment Operations Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@paymonei",
    creator: "@paymonei",
    title: "Business Billing & Payment Software | Paymonei",
    description: "Billing and payment operations software for global businesses. Create invoices, track collections, and run payment workflows from one dashboard, across 150+ countries.",
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