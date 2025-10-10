import type { Metadata } from "next";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Link2, Receipt, TrendingUp, Store, Users, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "A2A Protocol - AI Agent Payment Protocol | Paymonei",
  description:
    "Beyond workflows. True intelligence. AI agents that think, adapt, and execute complex business processes through natural conversation just like talking to your most capable team member.",
  keywords: [
    "AI agent protocol",
    "A2A protocol",
    "AI to AI payments",
    "agent payment protocol",
    "AI marketplace",
    "intelligent automation",
    "AI agents",
    "business automation",
    "smart contracts",
  ],
  openGraph: {
    title: "A2A Protocol - AI Agent Payment Protocol | Paymonei",
    description:
      "Beyond workflows. True intelligence. AI agents that think, adapt, and execute complex business processes through natural conversation.",
    type: "website",
    images: [
      {
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/metadata-image.png",
        width: 1200,
        height: 630,
        alt: "Paymonei A2A Protocol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A2A Protocol - AI Agent Payment Protocol | Paymonei",
    description:
      "Beyond workflows. True intelligence. AI agents that think, adapt, and execute complex business processes through natural conversation.",
    images: [
      "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/metadata-image.png",
    ],
  },
};

export default function A2AProtocolPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white dark:bg-gray-900">
          {/* Animated gradient background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-900 dark:to-orange-950/10" />

            {/* Animated gradient orbs */}
            <div
              className="absolute top-0 -right-4 w-72 h-72 bg-amber-200 dark:bg-amber-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-20 animate-pulse"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-200 dark:bg-orange-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-20 animate-pulse"
              style={{ animationDelay: "4s" }}
            />
          </div>

          <div className="relative">
            <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
              <div className="text-center">
                {/* Badge */}
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 blur-xl animate-pulse" />
                    <div className="relative inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/50 dark:to-amber-900/50 border border-orange-200 dark:border-orange-800">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-orange-700 dark:text-orange-300">
                        AI Agent Payment Protocol
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  <span className="block text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Beyond Workflows.
                  </span>
                  <span className="block">
                    <span className="relative inline-block">
                      <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600">
                        True Intelligence.
                      </span>
                    </span>
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-normal leading-relaxed">
                  AI agents that think, adapt, and execute complex business
                  processes through natural conversation—just like talking to
                  your most capable team member.
                </p>

                {/* CTA Button */}
                <div className="mt-8 sm:mt-10 flex justify-center">
                  <a href="https://app.paymonei.com/auth/register">
                    <Button
                      size="lg"
                      className="group relative rounded-full px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-semibold bg-gradient-to-r from-orange-500 to-amber-600 text-white hover:from-orange-600 hover:to-amber-700 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                    >
                      <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      <span className="relative flex items-center justify-center">
                        Try Now Free
                        <svg
                          className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1"
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
                  </a>
                </div>

                {/* Key Features - Quick highlights */}
                <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-gray-200 dark:border-gray-800">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                    <div className="flex flex-col items-center">
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                        Natural
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Conversation Interface
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                        Instant
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Payment Processing
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                        24/7
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                        AI Agent Support
                      </div>
                    </div>
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
                <span className="text-foreground">Intelligence Peers with</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600">
                  Adaptive Thinking.
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
                  <div className="bg-card border rounded-2xl p-6 shadow-lg min-h-[380px] flex flex-col">
                    <div className="space-y-4 flex-1">
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
                    <div className="bg-card border rounded-2xl p-6 shadow-lg min-h-[380px] flex flex-col">
                      <div className="space-y-4 flex-1">
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
                  <div className="bg-card border rounded-2xl p-6 shadow-lg min-h-[380px] flex flex-col">
                    <div className="space-y-4 flex-1">
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
                <div className="order-2 lg:order-1">
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
                                    Perfect! I&apos;ve analyzed your
                                    requirements and found 2 excellent remote
                                    engineers specializing in modern landing
                                    pages and Vercel deployment.
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
                                    <p>
                                      ⚡ VibeCooding-style development: $150
                                    </p>
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
                                      🌐 Landing page:
                                      sarah-startup-v1.vercel.app
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
                                    Amazing work! The landing page is exactly
                                    what I envisioned. Approving completion now.
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
                </div>

                <div className="order-1 lg:order-2">
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

          {/* Protocol Infrastructure Section */}
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600">
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
                              Natural language to structured payment
                              instructions conversion
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
                          <h3 className="text-lg font-semibold">
                            Protocol Core
                          </h3>
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
                              Bridge protocols supports offer seamless data
                              value transfer
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
                          <p className="text-xs mt-2 text-center">
                            User Intent
                          </p>
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
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600">
                        {" "}
                        Economy Standard
                      </span>
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      We didn&apos;t just improve payments—we architected the
                      financial nervous system for AI. Where others offer
                      routing, we deliver complete infrastructure.
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
                          <h5 className="font-semibold mb-2">
                            Unified Protocol
                          </h5>
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
                            Verification and capability attestation for
                            autonomous agents
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
                            Natural language to structured payment
                            transformation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}
