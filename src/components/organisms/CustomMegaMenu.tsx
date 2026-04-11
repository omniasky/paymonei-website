"use client";

import React, { useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { ChevronDown } from "lucide-react";
import {
  Brain,
  FileText,
  Link2,
  CreditCard,
  Receipt,
  BarChart3,
  Wand2,
} from "lucide-react";

const platformItems = [
  {
    category: "Billing",
    description: "Invoicing and subscription software",
    items: [
      {
        title: "Invoicing",
        href: "/billing/invoicing",
        description: "Send invoices in any currency, any country",
        icon: Receipt,
      },
      {
        title: "Subscription",
        href: "/billing/subscription",
        description: "Recurring billing with metered pricing",
        icon: BarChart3,
      },
    ],
  },
  {
    category: "Payments",
    description: "Payment links and checkout",
    items: [
      {
        title: "Payment Links",
        href: "/payments/links",
        description: "No-code payment page, any currency",
        icon: Link2,
      },
      {
        title: "Checkout",
        href: "/payments/checkout",
        description: "In-product checkout, no redirect",
        icon: CreditCard,
      },
    ],
  },
  {
    category: "Business Tools",
    description: "From Hugogen.com",
    items: [
      {
        title: "AI Workspaces",
        href: "https://hugogen.com/workspaces?utm_source=paymonei&utm_medium=navbar&utm_campaign=ai_workspaces",
        description: "Workspace for business operations",
        icon: FileText,
        external: true,
      },
      {
        title: "Agentic Designer",
        href: "https://hugogen.com/studio?utm_source=paymonei&utm_medium=navbar&utm_campaign=agentic_designer",
        description: "Design studio with AI generation",
        icon: Wand2,
        external: true,
      },
      {
        title: "Hugogen",
        href: "https://hugogen.com?utm_source=paymonei&utm_medium=navbar&utm_campaign=hugogen",
        description: "Business AI built for operations teams",
        icon: Brain,
        external: true,
      },
    ],
  },
] as PlatformCategory[];

interface MegaMenuItemProps {
  title: string;
  href: string;
  description: string;
  icon: React.ElementType;
  external?: boolean;
}

interface PlatformItem {
  title: string;
  href: string;
  description: string;
  icon: React.ElementType;
  external?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface PlatformCategory {
  category: string;
  description: string;
  items: PlatformItem[];
  subCategory?: {
    category: string;
    description: string;
    items: PlatformItem[];
  };
}

const MegaMenuItem: React.FC<MegaMenuItemProps> = ({
  title,
  href,
  description,
  icon: Icon,
  external,
}) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#F5F5F2] transition-colors group"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <div className="p-2 bg-[#F0F0EC] rounded-lg group-hover:bg-[#EAEAE6] transition-colors flex-shrink-0">
        <Icon className="h-3.5 w-3.5 text-[#555]" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium text-[#0C0C0C]">{title}</span>
          {external && (
            <svg className="w-2.5 h-2.5 text-[#BBB] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          )}
        </div>
        <p className="text-[13px] text-[#555] mt-0.5">
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
      className="fixed left-0 right-0 bg-[#FAFAF8]/97 backdrop-blur-xl border-b border-[#EAEAE6] shadow-sm z-50 hidden lg:block"
      style={{
        top: "64px",
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="grid grid-cols-3 gap-8">
          {platformItems.map((category: PlatformCategory) => (
            <div key={category.category} className="space-y-3">
              <div className="pb-2.5 border-b border-[#EAEAE6]">
                <h3 className="text-xs font-semibold tracking-[0.08em] uppercase text-[#0C0C0C]">
                  {category.category}
                </h3>
                <p className="text-[13px] text-[#777] mt-1">
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
                    external={item.external}
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
        className="flex items-center gap-1 px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
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
