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
    default: "Business Billing & AR Automation Software | Paymonei",
    template: "%s | Paymonei"
  },
  description: "Paymonei is the billing and accounts receivable software for global businesses. Automate invoices, track AR aging, and organize vendor billing from one dashboard.",
  keywords: [
    // Core product category (Safe SaaS terms)
    "billing software",
    "invoicing software",
    "accounts receivable software",
    "AR automation",
    "billing workflow software",

    // Use case keywords (buyer intent)
    "enterprise billing software",
    "quote-to-cash software",
    "vendor billing management",
    "multi-currency invoicing",
    "accounts payable tracking",

    // API / developer
    "billing API",
    "invoice API",
    "AR ledger API",
    "embedded billing",

    // Operations
    "unified AR ledger",
    "global invoicing platform",
    "financial operations software",
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
    title: "Business Billing & AR Automation Software | Paymonei",
    description: "Paymonei is the billing and accounts receivable software for global businesses. Automate invoices, track AR aging, and organize vendor billing from one dashboard.",
    images: [
      {
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png",
        width: 1200,
        height: 600,
        alt: "Paymonei: Business Billing and AR Automation Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@paymonei",
    creator: "@paymonei",
    title: "Business Billing & AR Automation Software | Paymonei",
    description: "Paymonei is the billing and accounts receivable software for global businesses. Automate invoices, track AR aging, and organize vendor billing from one dashboard.",
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