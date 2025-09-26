import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
    default: "Paymonei - AI Agent Payment Protocol & Infrastructure",
    template: "%s | Paymonei"
  },
  description: "AI-native payment protocol enabling secure agent-to-agent transactions, institutional-grade security, and stablecoin payment infrastructure. Built for the future of AI commerce.",
  keywords: [
    "AI agent payments",
    "agent payment protocol",
    "AP2 protocol",
    "autonomous transactions",
    "AI financial infrastructure",
    "institutional wallet",
    "MPC wallet",
    "crypto on/off ramps",
    "international payment",
    "stablecoin payments",
    "business automation",
    "agent-to-agent payments",
    "cryptographic mandates",
    "digital payments",
    "enterprise payouts",
    "global payroll",
    "payment infrastructure",
    "digital economy infrastructure",
    "secure transactions",
    "stablecoin infrastructure",
    "AI Workspace",
    "AI Docs to PPT",
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
    title: "Paymonei - AI Agent Payment Protocol & Infrastructure",
    description: "Enable AI agents to transact seamlessly with our proprietary payment protocol, institutional-grade security, and stablecoin payment infrastructure.",
    images: [
      {
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png",
        width: 1200,
        height: 600,
        alt: "Paymonei - Infrastructure for AI Economy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@paymonei",
    creator: "@paymonei",
    title: "Paymonei - AI Agent Payment Protocol",
    description: "Stablecoin payment infrastructure for agent-to-agent transactions.",
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
      </body>
    </html>
  );
}