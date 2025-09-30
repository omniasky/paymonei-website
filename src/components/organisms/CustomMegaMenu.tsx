"use client";

import React, { useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { ChevronDown } from "lucide-react";
import {
  Brain,
  Bot,
  FileText,
  Presentation,
  Sheet,
  Link2,
  CreditCard,
  Receipt,
  BarChart3,
} from "lucide-react";

const platformItems = [
  {
    category: "Business",
    description: "AI-powered business tools",
    items: [
      {
        title: "Hugogen",
        href: "/business/hugogen",
        description: "Next-gen LLM that outperforms GPT",
        icon: Brain,
      },
      {
        title: "AI Agent Protocol",
        href: "/business/ai-agents",
        description: "Deploy autonomous business agents",
        icon: Bot,
      },
      {
        title: "Docs",
        href: "/business/docs",
        description: "AI-powered document automation",
        icon: FileText,
      },
      {
        title: "Presentations",
        href: "/business/presentations",
        description: "Create stunning decks instantly",
        icon: Presentation,
      },
      {
        title: "Sheets",
        href: "/business/sheets",
        description: "Smart spreadsheet automation",
        icon: Sheet,
      },
    ],
  },
  {
    category: "Global Payments",
    description: "Instant payment solutions",
    items: [
      {
        title: "Payment Links",
        href: "/payments/links",
        description: "Share & collect payments instantly",
        icon: Link2,
      },
      {
        title: "Checkout",
        href: "/payments/checkout",
        description: "Custom payment experiences",
        icon: CreditCard,
      },
    ],
    // subCategory: {
    //   category: "Billing",
    //   description: "Automated billing solutions",
    //   items: [
    //     {
    //       title: "Invoicing",
    //       href: "/billing/invoicing",
    //       description: "Smart one-time invoicing",
    //       icon: Receipt,
    //     },
    //     {
    //       title: "Subscription",
    //       href: "/billing/subscription",
    //       description: "Usage-based recurring billing",
    //       icon: BarChart3,
    //     },
    //   ],
    // },
  },
  {
    category: "Billing",
    description: "Automated billing solutions",
    items: [
      {
        title: "Invoicing",
        href: "/billing/invoicing",
        description: "Smart one-time invoicing",
        icon: Receipt,
      },
      {
        title: "Subscription",
        href: "/billing/subscription",
        description: "Usage-based recurring billing",
        icon: BarChart3,
      },
    ],
  },
  // {
  //   category: "Onchain",
  //   description: "Blockchain infrastructure",
  //   items: [
  //     {
  //       title: "Stablecoin",
  //       href: "/onchain/stablecoin",
  //       description: "Licensed & compliant stablecoins",
  //       icon: Coins,
  //     },
  //     {
  //       title: "Ramp",
  //       href: "/onchain/ramp",
  //       description: "Regulated fiat-crypto gateway",
  //       icon: ArrowUpDown,
  //     },
  //     {
  //       title: "Wallets",
  //       href: "/onchain/wallets",
  //       description: "Institutional-grade MPC wallets",
  //       icon: Wallet,
  //     },
  //     {
  //       title: "Bridge",
  //       href: "/onchain/bridge",
  //       description: "Cross-chain asset transfers",
  //       icon: Link2,
  //     },
  //   ],
  // },
  // {
  //   category: "Compliance",
  //   description: "Risk and compliance tools",
  //   items: [
  //     {
  //       title: "Identity",
  //       href: "/compliance/identity",
  //       description: "Instant KYC/KYB verification",
  //       icon: User,
  //     },
  //     {
  //       title: "KYT",
  //       href: "/compliance/kyt",
  //       description: "Real-time transaction monitoring",
  //       icon: Search,
  //     },
  //     {
  //       title: "Wallet Screening",
  //       href: "/compliance/screening",
  //       description: "Crypto address sanctions screening",
  //       icon: Shield,
  //     },
  //     {
  //       title: "Tracers",
  //       href: "/compliance/tracers",
  //       description: "Advanced transaction analysis",
  //       icon: Activity,
  //     },
  //   ],
  // },
];

interface MegaMenuItemProps {
  title: string;
  href: string;
  description: string;
  icon: React.ElementType;
}

const MegaMenuItem: React.FC<MegaMenuItemProps> = ({
  title,
  href,
  description,
  icon: Icon,
}) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
    >
      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-foreground">{title}</div>
        <p className="text-[10px] text-muted-foreground line-clamp-1 mt-0.5">
          {description}
        </p>
      </div>
    </Link>
  );
};

export function CustomMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 150); // 150ms delay before closing
    setTimeoutId(id);
  };

  const megaMenuContent = isOpen ? (
    <div
      className="fixed left-0 right-0 bg-background/95 backdrop-blur-xl border-b shadow-lg z-50"
      style={{
        top: "60px", // Slightly overlaps with navbar
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-4 gap-8">
          {platformItems.map((category) => (
            <div key={category.category} className="space-y-4">
              <div className="pb-3 border-b border-border/50">
                <h3 className="text-sm font-semibold text-foreground">
                  {category.category}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {category.description}
                </p>
              </div>
              <div className="space-y-1">
                {category.items.map((item) => (
                  <MegaMenuItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    description={item.description}
                    icon={item.icon}
                  />
                ))}
              </div>

              {/* Render subcategory if it exists */}
              {category.subCategory && (
                <div className="space-y-4 mt-6">
                  <div className="pb-3 border-b border-border/50">
                    <h3 className="text-sm font-semibold text-foreground">
                      {category.subCategory.category}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {category.subCategory.description}
                    </p>
                  </div>
                  <div className="space-y-1">
                    {category.subCategory.items.map((item) => (
                      <MegaMenuItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        description={item.description}
                        icon={item.icon}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        className="flex items-center gap-1 px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsOpen(!isOpen)}
      >
        Platforms
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Mega Menu Dropdown using Portal */}
      {typeof window !== "undefined" &&
        createPortal(megaMenuContent, document.body)}
    </div>
  );
}
