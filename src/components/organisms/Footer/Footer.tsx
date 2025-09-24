import Link from "next/link";
import Image from "next/image";
import { Linkedin, Github } from "lucide-react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  sections?: FooterSection[];
  companyName?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
  };
}

const defaultSections: FooterSection[] = [
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/supports/privacy-policy" },
      { label: "Terms of Service", href: "/supports/terms-of-service" },
      // { label: "Compliance Guide", href: "/supports/compliance-guide" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Agent Protocol", href: "#" },
      { label: "AI Workspace", href: "#" },
      { label: "MPC", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

const defaultSocialLinks = {
  linkedin: "https://linkedin.com/company/paymonei",
  github: "https://github.com/paymonei",
};

export function Footer({
  sections = defaultSections,
  companyName = "Paymonei",
  socialLinks = defaultSocialLinks,
}: FooterProps) {
  const mergedSocialLinks = { ...defaultSocialLinks, ...socialLinks };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Paymonei Logo and Tagline Section */}
          <div className="lg:col-span-2">
            <div className="flex flex-col space-y-4">
              <div>
                <Image
                  src="https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/paymonei-logo-main.png"
                  alt="Paymonei"
                  width={140}
                  height={38}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                Advanced intelligent automation for business operations.
                Streamline workflows, enhance productivity, and optimize
                processes across your organization.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4 pt-2">
                {mergedSocialLinks.linkedin && (
                  <a
                    href={mergedSocialLinks.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {mergedSocialLinks.github && (
                  <a
                    href={mergedSocialLinks.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Footer Links Sections */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-semibold mb-4 text-foreground">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
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

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {companyName}. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-xs text-muted-foreground">
                Advanced intelligent systems for modern enterprises
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
