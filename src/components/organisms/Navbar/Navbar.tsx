"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { APP_LOGIN_URL, APP_REGISTER_URL } from "@/lib/app-url";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomMegaMenu } from "../CustomMegaMenu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface NavbarProps {
  logoText?: string;
  navLinks?: Array<{
    href: string;
    label: string;
  }>;
}

// Mobile platform items - simplified for mobile navigation
const mobilePlatformItems = [
  {
    category: "Business",
    items: [
      { title: "Hugogen (Soon)", href: "/business/hugogen" },
      { title: "AI Agent Protocol", href: "/a2a-protocols" },
      { title: "AI Workspaces", href: "/ai-workspaces" },
    ],
  },
  {
    category: "Global Payments",
    items: [
      { title: "Payment Links", href: "/payments/links" },
      { title: "Checkout", href: "/payments/checkout" },
    ],
  },
  {
    category: "Billing",
    items: [
      { title: "Invoicing", href: "/billing/invoicing" },
      { title: "Subscriptions", href: "/billing/subscriptions" },

    ],
  },
];

export function Navbar({
  navLinks = [
    // { href: "#solutions", label: "Solutions" },
    { href: "/pricing", label: "Pricing" },
    // { href: "#developers", label: "Developers" },
    // { href: "#resources", label: "Resources" },
  ],
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [platformsOpen, setPlatformsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#FAFAF8]/90 backdrop-blur-md z-50 border-b border-[#EAEAE6]">
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo on the left */}
          <div className="flex items-center mr-8">
            <Link href="/" className="flex items-center">
              <Image
                src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/paymonei-logo-main.png"
                alt="Paymonei"
                width={150}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Center navigation: Platforms mega menu and nav links - Desktop only */}
          <div className="hidden lg:flex items-center flex-1">
            <CustomMegaMenu />
            <div className="flex items-center space-x-1 ml-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#777] hover:text-[#0C0C0C] transition-colors px-3 py-2 font-light text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Spacer for tablet/mobile to push right items to the right */}
          <div className="flex-1 lg:hidden"></div>

          {/* Right side: Login, Sign up - Desktop only */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href={APP_LOGIN_URL}>
              <span className="px-4 py-2 text-sm text-[#555] hover:text-[#0C0C0C] font-light transition-colors cursor-pointer">
                Log in
              </span>
            </Link>
            <Link href={APP_REGISTER_URL}>
              <span className="px-4 py-2 rounded-full bg-[#0C0C0C] text-white text-sm font-medium hover:bg-[#222] transition-colors cursor-pointer">
                Get started
              </span>
            </Link>
          </div>

          {/* Mobile/Tablet: hamburger only */}
          <div className="flex items-center gap-3 lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/paymonei-logo-main.png"
                      alt="Paymonei"
                      width={120}
                      height={32}
                      className="h-6 w-auto"
                    />
                  </SheetTitle>
                </SheetHeader>
                <ScrollArea className="h-[calc(100vh-120px)]">
                  <div className="flex flex-col space-y-4 mt-8">
                    {/* Platforms Collapsible Section */}
                    <Collapsible
                      open={platformsOpen}
                      onOpenChange={setPlatformsOpen}
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-2 text-left font-medium text-sm text-foreground hover:text-primary transition-colors">
                        <span>Platforms</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            platformsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-3 pl-4">
                        {mobilePlatformItems.map((category) => (
                          <div key={category.category} className="space-y-2">
                            <div className="text-xs font-medium text-muted-foreground border-l-2 border-border pl-3 py-1">
                              {category.category}
                            </div>
                            <div className="space-y-1 pl-2">
                              {category.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 pl-3"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Regular Nav Links */}
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="font-medium text-sm text-foreground hover:text-primary transition-colors p-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}

                    {/* Auth Buttons */}
                    <div className="space-y-2 pt-4 border-t border-[#EAEAE6]">
                      <Link
                        href={APP_LOGIN_URL}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="block w-full text-center px-4 py-2.5 rounded-full border border-[#E5E5E2] text-sm text-[#555] hover:border-[#ccc] hover:text-[#0C0C0C] transition-colors">
                          Log in
                        </span>
                      </Link>
                      <Link
                        href={APP_REGISTER_URL}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="block w-full text-center px-4 py-2.5 rounded-full bg-[#0C0C0C] text-white text-sm font-medium hover:bg-[#222] transition-colors">
                          Get started
                        </span>
                      </Link>
                    </div>
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
