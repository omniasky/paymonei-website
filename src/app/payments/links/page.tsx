import type { Metadata } from "next";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { Button } from "@/components/ui/button";
import {
  Link as LinkIcon,
  Mail,
  MessageSquare,
  Globe,
  Check,
  Zap,
  Shield,
  BarChart3,
  Clock,
  CreditCard,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Payment Links - Accept Cards, Stablecoins",
  description:
    "Create free payment links in seconds. Accept credit cards, bank transfers, stablecoins. Get paid instantly.",
  keywords: [
    "free payment link",
    "create payment link",
    "payment link generator",
    "cards payment link",
    "stablecoin payment link",
    "USDC payment link",
    "USDT payment link",
    "whatsapp payment link",
    "invoice payment link",
    "instant payment links",
    "share payment links",
    "no-code payments",
    "email payment links",
    "SMS payment links",
    "digital payment links",
  ],
  openGraph: {
    title: "Free Payment Links - Accept Cards, Stablecoins",
    description:
      "Create free payment links in seconds. Accept cards, bank transfers, stablecoins. Get paid instantly!",
    type: "website",
    images: [
      {
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paymonei Payment Links",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Payment Links - Accept Cards, Stablecoins",
    description:
      "Create free payment links in seconds. Accept cards, bank transfers, stablecoins. Get paid instantly!",
    images: [
      "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png",
    ],
  },
};

export default function PaymentLinksPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16">
        {/* Hero Section - Asymmetric Layout */}
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-900 dark:to-orange-950/10">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-64 h-64 bg-orange-300 dark:bg-orange-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-pulse" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300 dark:bg-amber-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6">
                  <LinkIcon className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  <span className="text-sm font-semibold text-orange-700 dark:text-orange-300">
                    Payment Links
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  <span className="block text-gray-900 dark:text-white">
                    Share payment links.
                  </span>
                  <span className="block mt-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600">
                      Get paid instantly.
                    </span>
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Accept cards, stablecoins with a single link. <br />
                  Share anywhere. Get paid instantly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link href="https://app.paymonei.com/auth/register">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto group relative rounded-full px-8 py-6 text-base font-semibold bg-gradient-to-r from-orange-500 to-amber-600 text-white hover:from-orange-600 hover:to-amber-700 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                      <span className="relative flex items-center justify-center">
                        Create Your First Link
                        <svg
                          className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
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
                  {/* <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto rounded-full px-8 py-6 text-base font-semibold border-2 border-orange-500 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950"
                  >
                    View Demo
                  </Button> */}
                </div>
              </div>

              {/* Right Visual - Payment Link Preview */}
              <div className="relative">
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
                  {/* Mock Payment Link Interface */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                          <LinkIcon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Payment Link
                        </span>
                      </div>
                      <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                        Active
                      </span>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                        Your Payment Link
                      </label>
                      <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                        <Globe className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-mono text-gray-600 dark:text-gray-400 flex-1 truncate">
                          pay.paymonei.com/xyz123
                        </span>
                        <button className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-md font-medium hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors">
                          Copy
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                          Amount
                        </label>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          $2,500
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                          Status
                        </label>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-sm text-gray-900 dark:text-white">
                            Ready
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Share via:
                      </div>
                      <div className="grid grid-cols-4 gap-3">
                        <button className="flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-colors">
                          <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Email
                          </span>
                        </button>
                        <button className="flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-colors">
                          <MessageSquare className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            SMS
                          </span>
                        </button>
                        <button className="flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-colors">
                          <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Social
                          </span>
                        </button>
                        <button className="flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-colors">
                          <LinkIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Copy
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-green-500 text-white rounded-full p-4 shadow-lg">
                  <Check className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-full p-4 shadow-lg">
                  <Zap className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agent Demo Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6">
                <span className="text-sm font-semibold text-orange-700 dark:text-orange-300">
                  AI-Powered
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-gray-900 dark:text-white">
                  Just tell our AI what you need
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Create payment links in seconds through natural conversation
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
              <div className="flex items-center gap-3 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Paymonei AI Assistant
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-500">Online</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                {/* Merchant Message */}
                <div className="flex justify-end">
                  <div className="max-w-md">
                    <div className="bg-orange-500 text-white rounded-2xl rounded-br-md px-5 py-4 shadow-sm">
                      <p className="text-sm sm:text-base">
                        Hey, can you create a payment link for $200?
                      </p>
                      <p className="text-xs sm:text-sm opacity-90 mt-2">
                        It&apos;s for team dinner last night. Send it to
                        Sarah&apos;s contact details.
                      </p>
                    </div>
                    <div className="flex items-center justify-end gap-2 mt-2">
                      <span className="text-xs text-gray-500">You</span>
                      <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                          M
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="max-w-md">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-bl-md px-5 py-4 shadow-sm">
                      <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-white mb-3">
                        Perfect! I&apos;ve created the payment link and sent it
                        to Sarah.
                      </p>
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-600 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Amount
                          </span>
                          <span className="text-lg font-bold text-gray-900 dark:text-white">
                            $200.00
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Description
                          </span>
                          <span className="text-sm text-gray-900 dark:text-white">
                            Food Payment
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Sent to
                          </span>
                          <span className="text-sm text-gray-900 dark:text-white">
                            sarah@email.com
                          </span>
                        </div>
                        <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
                          <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900 rounded-lg p-2">
                            <LinkIcon className="w-4 h-4 text-gray-400" />
                            <span className="text-xs font-mono text-gray-600 dark:text-gray-400 flex-1 truncate">
                              pay.paymonei.com/inv/xyz789
                            </span>
                            <button className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded font-medium">
                              Copy
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          Email sent successfully
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                        <span className="text-xs font-semibold text-white">
                          AI
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">Paymonei AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Unique Card Layout */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-gray-900 dark:text-white">
                  Why payment links?
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                The fastest way to accept payments without building a checkout
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit Card 1 */}
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Create in Seconds
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Generate payment links instantly without any coding. Just set
                  your amount and share.
                </p>
              </div>

              {/* Benefit Card 2 */}
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Share Anywhere
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Email, SMS, WhatsApp, social media, or embed on your website.
                  Works everywhere.
                </p>
              </div>

              {/* Benefit Card 3 */}
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CreditCard className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Multiple Payment Methods
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Accept cards, bank transfers, and stablecoins through a single
                  payment link.
                </p>
              </div>

              {/* Benefit Card 4 */}
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Secure & Compliant
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Enterprise-level security. Your customers&apos; data is always
                  protected.
                </p>
              </div>

              {/* Benefit Card 5 */}
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Real-Time Analytics
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Track payments, conversion rates, and customer behavior in
                  real-time.
                </p>
              </div>

              {/* Benefit Card 6 */}
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Mobile Optimized
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Perfect checkout experience on any device. Optimized for
                  mobile payments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section - Asymmetric Layout */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-gray-900 dark:text-white">
                  Perfect for
                </span>
              </h2>
            </div>

            <div className="space-y-16">
              {/* Use Case 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                    <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                      Freelancers & Consultants
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Send invoices instantly
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Email payment links to clients right after a call. No more
                    waiting for invoices to be sent or processed.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Quick payment requests via email or chat
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Automatic invoice generation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Get paid 10x faster than traditional invoicing
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            Payment Request
                          </div>
                          <div className="text-sm text-gray-500">
                            to: client@company.com
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 space-y-3">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Hi John,
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Thanks for the great meeting! Here&apos;s the payment
                          link for the website design project:
                        </p>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                          <div className="text-xs text-gray-500 mb-1">
                            Amount Due
                          </div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            $2,500.00
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="block w-full text-center bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg py-3 font-semibold hover:from-orange-600 hover:to-amber-700 transition-all"
                        >
                          Pay Invoice →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Case 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                          <LinkIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            Customize Your Link
                          </div>
                          <div className="text-sm text-gray-500">
                            Claim your unique name
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2 block">
                            Your Unique Payment Link
                          </label>
                          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border-2 border-dashed border-gray-300 dark:border-gray-600">
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500">
                                pay.paymonei.com/
                              </span>
                              <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                                yourname
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-700">
                          <div className="text-xs font-medium text-orange-800 dark:text-orange-300 mb-3">
                            Popular examples:
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-orange-500 rounded-full" />
                              <span className="font-mono text-gray-700 dark:text-gray-300">
                                pay.paymonei.com/sarah
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-orange-500 rounded-full" />
                              <span className="font-mono text-gray-700 dark:text-gray-300">
                                pay.paymonei.com/johndoe
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-orange-500 rounded-full" />
                              <span className="font-mono text-gray-700 dark:text-gray-300">
                                pay.paymonei.com/artbymike
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-2">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Easy to remember & share
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Perfect for social media bios
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                    <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                      Content Creators & Artists
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Monetize your audience
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Claim your unique payment link name and share it everywhere.
                    Perfect for accepting payments through social media.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Claim your unique link: pay.paymonei.com/yourname
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Accept payments for content & services
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Works on Instagram, Twitter, TikTok, and more
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Use Case 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                    <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                      Small Businesses
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Collect payments everywhere
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Share payment links via WhatsApp, add them to your website,
                    or include them in email campaigns.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        No website? No problem. Share via messaging apps
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Embed payment buttons on your site
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Track all payments in one dashboard
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            WhatsApp Message
                          </div>
                          <div className="text-sm text-gray-500">
                            Customer Chat
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-end">
                          <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-br-md px-4 py-3 max-w-xs">
                            <p className="text-sm text-gray-800 dark:text-gray-200">
                              Hi! I&apos;d like to order the premium package
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-green-500 text-white rounded-2xl rounded-bl-md px-4 py-3 max-w-xs">
                            <p className="text-sm">
                              Great choice! Here&apos;s your payment link:
                            </p>
                            <div className="mt-3 bg-white/20 rounded-lg p-2">
                              <div className="flex items-center gap-2">
                                <LinkIcon className="w-4 h-4" />
                                <span className="text-xs font-mono">
                                  pay.paymonei.com/premium
                                </span>
                              </div>
                            </div>
                            <p className="text-xs mt-2 opacity-90">
                              Total: $99.00
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-br-md px-4 py-3 max-w-xs">
                            <p className="text-sm text-gray-800 dark:text-gray-200">
                              Perfect! Just paid ✅
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Full Width with Icons */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-gray-900 dark:text-white">
                  Everything you need
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Powerful features built for your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Custom Expiry
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Set expiration dates for offers
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Analytics
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Track views, clicks, and conversions
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Secure
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Enterprise grade security
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Instant Setup
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Start in minutes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Start accepting payments today
            </h2>
            <p className="text-xl text-orange-100 mb-10">
              Create your first payment link in under 60 seconds
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://app.paymonei.com/auth/register">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                >
                  Create Your First Link
                </Button>
              </Link>
            </div>
            <p className="text-sm text-orange-100 mt-6">
              No credit card required • Free to start
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
