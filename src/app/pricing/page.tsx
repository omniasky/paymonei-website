import { PricingGrid, PricingTier } from "@/components/organisms/PricingGrid";
import { PricingComparison } from "@/components/organisms/PricingComparison";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Stablecoin Payment API | Free up to $10K/month | Paymonei",
  description:
    "Transparent stablecoin payment pricing. Free tier with $10K monthly volume, 1.5% MDR on stablecoins, 0.5-1% FX rates. Growth plan $200/mo for unlimited volume. No setup fees, no hidden costs.",
  keywords: [
    "stablecoin payment pricing",
    "digital payment gateway cost",
    "USDC payment fees",
    "payment API pricing",
    "free payment processing",
    "blockchain payment rates",
    "cross-border payment fees",
    "stablecoin transaction fees",
    "payment infrastructure pricing",
  ],
  openGraph: {
    title: "Paymonei Pricing - Free Stablecoin Payments up to $10K/month",
    description:
      "Start free with $10K monthly volume. Stablecoin payments at 1.5% MDR, adaptive FX 0.5-1%. Scale with transparent pricing - no hidden fees.",
    url: "https://paymonei.com/pricing",
    siteName: "Paymonei",
    type: "website",
    images: [
      {
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paymonei Pricing Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paymonei Pricing - Free Stablecoin Payments up to $10K/month",
    description:
      "Start free with $10K monthly volume. Transparent stablecoin payment pricing with no hidden fees.",
    images: [
      "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/paymonei-og-pricing.png",
    ],
  },
  alternates: {
    canonical: "https://paymonei.com/pricing",
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
};

const pricingTiers: PricingTier[] = [
  {
    title: "Free",
    description:
      "No credit card required • Start in 5 minutes • Free up to $10K volume/month",
    price: "$0",
    period: "forever",
    isFree: true,
    cta: "Start Free Now",
    ctaHref: "https://app.paymonei.com/signup",
    features: [
      "Free up to $10,000/month volume",
      "Stablecoin payments: 1.5% MDR",
      "Adaptive FX: 1.5%",
      "Invoicing: 0.4%",
      "Card payments: 3.3% + $0.50",
      "Full API access & documentation",
      "Webhook notifications",
      "Community support",
      "Standard settlement (T+3)",
    ],
  },
  {
    title: "Growth",
    description: "For scaling businesses • Ideal for $10K-$500K monthly volume",
    price: "$200",
    period: "/month",
    isPopular: true,
    cta: "Get Started",
    ctaHref: "https://app.paymonei.com/signup?plan=growth",
    features: [
      "Unlimited transaction volume",
      "Stablecoin payments: 1% MDR",
      "Adaptive FX: 0.5-1%",
      "Invoicing: 0.2%",
      "Card payments: 3.3% + $0.50",
      "Priority email support",
      "Advanced analytics dashboard",
      "Instant to T+1 settlement",
      "Multi-currency support",
      "Webhook notifications",
    ],
  },
  {
    title: "Enterprise",
    description: "For high-volume businesses • >$1M+ monthly recommended",
    price: "Custom",
    cta: "Contact Sales",
    ctaHref: "mailto:sales@paymonei.com",
    features: [
      "Custom monthly subscription",
      "Volume-based pricing discounts",
      "Custom FX rates",
      "Dedicated account manager",
      "24/7 phone & chat support",
      "Same-day settlement",
      "Custom SLA agreements",
      "White-label solutions",
      "Advanced fraud protection",
      "Custom integration support",
      "Personalized onboarding",
      "Priority webhook delivery",
    ],
  },
];

const comparisonFeatures = [
  {
    name: "Monthly Processing Volume",
    free: "Free up to $10K",
    growth: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    name: "Recommended Volume Range",
    free: "Up to $10K",
    growth: "$10K - $500K",
    enterprise: "$1M+",
  },
  {
    name: "Monthly Subscription Fee",
    free: "$0",
    growth: "$200",
    enterprise: "Custom",
  },
  {
    name: "Stablecoin MDR",
    free: "1.5%",
    growth: "1%",
    enterprise: "Custom",
  },
  {
    name: "Adaptive FX",
    free: "1.5%",
    growth: "0.5-1%",
    enterprise: "Custom",
  },
  {
    name: "Invoicing",
    free: "0.2%",
    growth: "0.2%",
    enterprise: "Custom",
  },
  {
    name: "Card Payments",
    free: "3.3% + $0.50",
    growth: "3.3% + $0.50",
    enterprise: "Custom",
  },
  {
    name: "Settlement Speed",
    free: "T+3",
    growth: "T+1",
    enterprise: "Same day",
  },
  {
    name: "API Access",
    free: true,
    growth: true,
    enterprise: true,
  },
  {
    name: "Webhook Notifications",
    free: true,
    growth: true,
    enterprise: true,
  },
  {
    name: "Advanced Analytics",
    free: false,
    growth: true,
    enterprise: true,
  },
  {
    name: "Multi-currency Support",
    free: false,
    growth: true,
    enterprise: true,
  },
  {
    name: "Priority Support",
    free: false,
    growth: true,
    enterprise: true,
  },
  {
    name: "Dedicated Account Manager",
    free: false,
    growth: false,
    enterprise: true,
  },
  {
    name: "Custom SLA",
    free: false,
    growth: false,
    enterprise: true,
  },
  {
    name: "White-label Solutions",
    free: false,
    growth: false,
    enterprise: true,
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative px-4 py-16 md:py-24 overflow-hidden">
          {/* Background Design */}
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

          {/* Mesh gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb,99,102,241),0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(var(--primary-rgb,99,102,241),0.06)_0%,transparent_50%),radial-gradient(circle_at_50%_80%,rgba(var(--primary-rgb,99,102,241),0.04)_0%,transparent_50%)]" />

          {/* Animated blur orbs */}
          <div
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "4s" }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "6s", animationDelay: "2s" }}
          />

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-sm font-semibold text-primary">
                🎉 Process up to $10K/month for FREE
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
              Simple, transparent pricing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Start for free and scale as you grow. No credit card required.{" "}
              <br /> <u>No hidden fees, no surprises.</u>
            </p>
          </div>
        </section>

        {/* Value Prop */}
        <section className="px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative group text-center p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-4xl mb-4">💳</div>
                  <h3 className="font-semibold text-lg mb-2">No Credit Card</h3>
                  <p className="text-sm text-muted-foreground">
                    Start processing payments instantly without any payment
                    method
                  </p>
                </div>
              </div>
              <div className="relative group text-center p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="font-semibold text-lg mb-2">
                    Setup in 5 Minutes
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Simple integration with our API. Start testing right away
                  </p>
                </div>
              </div>
              <div className="relative group text-center p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="font-semibold text-lg mb-2">
                    $10K Free Volume
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Process real transactions up to $10,000 every month for free
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="px-4 py-16 md:py-20">
          <PricingGrid tiers={pricingTiers} />
        </section>

        {/* Comparison Table */}
        <section className="px-4 py-16 md:py-20">
          <PricingComparison features={comparisonFeatures} />
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-16 md:py-24 bg-muted/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently asked questions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-card border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Can I switch plans later?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes take effect at the start of your next billing cycle.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-card border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We accept all major credit cards, bank transfers, and
                  stablecoin payments for your monthly subscription.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-card border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Is there a setup fee?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No, there are no setup fees. You only pay the monthly
                  subscription and transaction fees based on your usage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-card border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What happens when I exceed the free tier limits?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  After exceeding $10K monthly volume on the Free plan,
                  transaction fees will apply to any additional transactions.
                  You can continue processing with fees, or upgrade to the
                  Growth plan for better rates and unlimited volume.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-card border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Do you offer refunds?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer a 30-day money-back guarantee for new customers. If
                  you&apos;re not satisfied, contact our support team for a full
                  refund.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-4 py-16 md:py-24 overflow-hidden">
          {/* Background Design */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Join thousands of businesses using Paymonei for their payment
              infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.paymonei.com/signup"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 h-14 px-10"
              >
                Start Free Now
              </a>
              <a
                href="mailto:sales@paymonei.com"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-2 border-primary bg-background hover:bg-primary/5 hover:scale-105 h-14 px-10"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
