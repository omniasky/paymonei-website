"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import {
  Bot,
  FileText,
  Presentation,
  Sheet,
  Wallet,
  ArrowUpDown,
  Link2,
  CreditCard,
  Receipt,
  BarChart3,
  User,
  Search,
  MapPin,
  Activity,
} from "lucide-react";

const platformItems = [
  {
    category: "Business",
    description: "AI-powered business tools",
    items: [
      {
        title: "AI Agent Protocol",
        href: "/business/ai-agents",
        description: "Autonomous payment agents for business automation",
        icon: Bot,
      },
      {
        title: "Docs",
        href: "/business/docs",
        description: "Smart document creation and management",
        icon: FileText,
      },
      {
        title: "Presentations",
        href: "/business/presentations",
        description: "AI-powered presentation builder",
        icon: Presentation,
      },
      {
        title: "Sheets",
        href: "/business/sheets",
        description: "Intelligent spreadsheet automation",
        icon: Sheet,
      },
    ],
  },
  {
    category: "Onchain",
    description: "Blockchain infrastructure",
    items: [
      {
        title: "Ramp",
        href: "/onchain/ramp",
        description: "Fiat to crypto on/off ramps",
        icon: ArrowUpDown,
      },
      {
        title: "Wallets",
        href: "/onchain/wallets",
        description: "Institutional-grade wallet infrastructure",
        icon: Wallet,
      },
      {
        title: "Bridge",
        href: "/onchain/bridge",
        description: "Cross-chain asset transfers",
        icon: Link2,
      },
    ],
  },
  {
    category: "Global Payments",
    description: "Worldwide payment solutions",
    items: [
      {
        title: "Payment Links",
        href: "/payments/links",
        description: "Instant shareable payment links",
        icon: Link2,
      },
      {
        title: "Checkout",
        href: "/payments/checkout",
        description: "Customizable payment checkout flows",
        icon: CreditCard,
      },
    ],
  },
  {
    category: "Billing",
    description: "Automated billing solutions",
    items: [
      {
        title: "Invoicing",
        href: "/billing/invoicing",
        description: "Smart invoice generation and management",
        icon: Receipt,
      },
      {
        title: "Metered",
        href: "/billing/metered",
        description: "Usage-based billing and analytics",
        icon: BarChart3,
      },
    ],
  },
  {
    category: "Compliance",
    description: "Risk and compliance tools",
    items: [
      {
        title: "Identity",
        href: "/compliance/identity",
        description: "KYC/KYB verification services",
        icon: User,
      },
      {
        title: "KYT",
        href: "/compliance/kyt",
        description: "Know Your Transaction monitoring",
        icon: Search,
      },
      {
        title: "Address Screening",
        href: "/compliance/screening",
        description: "Sanctions and watchlist screening",
        icon: MapPin,
      },
      {
        title: "Tracers",
        href: "/compliance/tracers",
        description: "Transaction flow analysis",
        icon: Activity,
      },
    ],
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function PlatformMegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-muted-foreground hover:text-primary transition-colors px-3 py-2">
            Platforms
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[800px] p-6 left-0">
              <div className="grid grid-cols-3 gap-6">
                {platformItems.map((category) => (
                  <div key={category.category} className="space-y-3">
                    <div className="pb-2 border-b border-border/50">
                      <h3 className="text-sm font-semibold text-foreground">
                        {category.category}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                    <ul className="space-y-1">
                      {category.items.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                          icon={item.icon}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}