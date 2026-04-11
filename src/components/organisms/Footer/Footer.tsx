import Link from "next/link";
import Image from "next/image";

// ────────────────────────────────────────────────────────────────────────────
// Menu — clean, software-company framing, no financial/licensing triggers
// ────────────────────────────────────────────────────────────────────────────
const nav = [
  {
    title: "Platform",
    links: [
      { label: "Invoice & Collect", href: "/billing/invoicing" },
      { label: "Global Payouts", href: "/payments/links" },
      { label: "Subscriptions", href: "/billing/subscriptions" },
      { label: "Checkout", href: "/payments/checkout" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "API Reference", href: "/docs" },
      { label: "SDKs", href: "/docs/sdks" },
      { label: "Changelog", href: "/changelog" },
      { label: "Status", href: "https://status.paymonei.com" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/supports/privacy-policy" },
      { label: "Terms of Service", href: "/supports/terms-of-service" },
      { label: "Cookie Policy", href: "/supports/cookie-policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#F5F4F0] border-t border-[#EAEAE6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-8 pt-16 pb-10">

        {/* Top row: logo + nav */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="inline-block">
              <Image
                src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/paymonei-logo-main.png"
                alt="Paymonei"
                width={130}
                height={34}
                className="h-7 w-auto"
              />
            </Link>

            <p className="text-[15px] text-[#777] leading-relaxed font-light max-w-xs">
              Business payment software for invoices, collections, and global payouts — built for companies that operate across borders.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://www.linkedin.com/company/paymonei-com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-[#DDDDD8] flex items-center justify-center text-[#777] hover:text-[#0C0C0C] hover:border-[#BBBBB8] transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://github.com/paymonei"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-full border border-[#DDDDD8] flex items-center justify-center text-[#777] hover:text-[#0C0C0C] hover:border-[#BBBBB8] transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {nav.map((section) => (
              <div key={section.title}>
                <p className="text-[12px] tracking-[0.12em] uppercase text-[#999] font-medium mb-4">
                  {section.title}
                </p>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-[#666] hover:text-[#0C0C0C] font-light transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 pt-8 border-t border-[#E5E5E0]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

            {/* Copyright */}
            <p className="text-[13px] text-[#AAA] font-light">
              © {new Date().getFullYear()} Paymonei. All rights reserved.
            </p>

            {/* Legal note — software company positioning, no licensing trigger */}
            <div className="text-right space-y-1">
              <p className="text-[13px] text-[#BBB] font-light leading-relaxed">
                Paymonei provides software tools for payment operations.{" "}
                <Link href="/supports/terms-of-service" className="underline underline-offset-2 hover:text-[#777] transition-colors">
                  Terms
                </Link>
                {" · "}
                <Link href="/supports/privacy-policy" className="underline underline-offset-2 hover:text-[#777] transition-colors">
                  Privacy
                </Link>
              </p>
              <p className="text-[12px] text-[#CCC] font-light leading-relaxed max-w-sm ml-auto">
                Paymonei does not hold or transmit funds. Payment execution is performed by licensed third-party financial institutions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
