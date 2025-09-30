"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { CustomMegaMenu } from "../CustomMegaMenu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface NavbarProps {
  logoText?: string;
  navLinks?: Array<{
    href: string;
    label: string;
  }>;
}

export function Navbar({
  navLinks = [
    { href: "#solutions", label: "Solutions" },
    { href: "#developers", label: "Developers" },
    { href: "#resources", label: "Resources" },
  ],
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Center navigation: Platforms mega menu and nav links */}
          <div className="hidden md:flex items-center flex-1">
            <CustomMegaMenu />
            <div className="flex items-center space-x-1 ml-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors px-3 py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side: Theme toggle, Login, Sign up */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <Link href="https://app.paymonei.com/auth/login">
              <Button className="bg-gradient-to-r w-24 rounded-full from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                Login
              </Button>
            </Link>
            <Link href="https://app.paymonei.com/auth/register">
              <Button
                variant="outline"
                className="rounded-full border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950"
              >
                Sign Up
              </Button>
            </Link>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
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
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="font-semibold text-sm text-muted-foreground mb-2">
                    Platforms
                  </div>
                  {/* Add mobile platform links here if needed */}

                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <Link
                    href="https://app.paymonei.com/auth/login"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                      Login
                    </Button>
                  </Link>
                  <Link href="/auth/register" onClick={() => setIsOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
