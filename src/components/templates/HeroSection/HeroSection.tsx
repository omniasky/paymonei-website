"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export interface HeroSectionProps {
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

// Animated invoice mockup — pure CSS/HTML, no image needed
function InvoiceMockup({ visible }: { visible: boolean }) {
  const lineItems = [
    { desc: "Q2 Platform License", qty: 1, amount: "$4,200.00" },
    { desc: "API Overage (12k calls)", qty: 12, amount: "$360.00" },
    { desc: "Global Platform Add-on", qty: 1, amount: "$84.00" },
  ];

  const transactions = [
    { label: "Acme Corp", time: "Just now", amount: "+$4,644.00", color: "#22C55E" },
    { label: "TechStart Ltd", time: "2m ago", amount: "+$1,820.00", color: "#22C55E" },
    { label: "Vendor payout", time: "8m ago", amount: "−$940.00", color: "#999" },
  ];

  return (
    <div
      className="relative w-full h-full flex items-center justify-end"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
      }}
    >
      {/* Invoice card */}
      <div
        className="absolute right-0 top-0 w-[340px] rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.1)] border border-[#EAEAE6] bg-white"
        style={{ zIndex: 1 }}
      >
        {/* Card header */}
        <div className="px-5 pt-5 pb-4 border-b border-[#F0F0EC]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[10px] tracking-[0.14em] uppercase text-[#999] mb-1">Invoice</div>
              <div className="text-sm font-medium text-[#0C0C0C]">#INV-2024-0841</div>
            </div>
            <span className="text-[10px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-[#F0FDF4] text-[#16A34A]">
              Paid
            </span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[10px] text-[#999] mb-0.5">Bill to</div>
              <div className="text-xs font-medium text-[#0C0C0C]">Acme Corporation</div>
              <div className="text-[10px] text-[#999]">acme.com · Singapore</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-[#999] mb-0.5">Due Apr 30</div>
              <div className="text-lg font-medium text-[#0C0C0C] tracking-tight">$4,644.00</div>
            </div>
          </div>
        </div>

        {/* Line items */}
        <div className="px-5 py-3 space-y-2.5">
          {lineItems.map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <div>
                <div className="text-[11px] text-[#0C0C0C]">{item.desc}</div>
                {item.qty > 1 && (
                  <div className="text-[10px] text-[#999]">×{item.qty} units</div>
                )}
              </div>
              <div className="text-[11px] font-medium text-[#0C0C0C]">{item.amount}</div>
            </div>
          ))}
        </div>

        {/* Payment rails strip */}
        <div className="px-5 py-3 border-t border-[#F0F0EC] bg-[#FAFAF8] flex items-center gap-2">
          {["Multi-rail", "Multi-currency", "Global"].map((tag) => (
            <span key={tag} className="text-[9px] font-medium tracking-wide text-[#888] px-2 py-0.5 rounded border border-[#E8E8E4] bg-white">
              {tag}
            </span>
          ))}
          <span className="ml-auto text-[10px] text-[#22C55E] font-medium">✓ Settled</span>
        </div>
      </div>

      {/* Transaction feed — floats bottom left, overlaps invoice card */}
      <div
        className="absolute bottom-4 left-0 w-[220px] rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#EAEAE6] bg-white overflow-hidden"
        style={{ zIndex: 2 }}
      >
        <div className="px-3.5 py-2.5 border-b border-[#F0F0EC]">
          <div className="text-[10px] tracking-[0.14em] uppercase text-[#999]">Recent</div>
        </div>
        <div className="divide-y divide-[#F5F5F2]">
          {transactions.map((tx, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-3.5 py-2.5"
              style={{
                opacity: visible ? 1 : 0,
                transition: `opacity 0.5s ease ${0.5 + i * 0.12}s`,
              }}
            >
              <div className="w-5 h-5 rounded-full bg-[#F5F5F2] flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: tx.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-medium text-[#0C0C0C] truncate">{tx.label}</div>
                <div className="text-[10px] text-[#AAA]">{tx.time}</div>
              </div>
              <div className="text-[11px] font-medium shrink-0" style={{ color: tx.color }}>{tx.amount}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge — top left */}
      <div
        className="absolute top-6 left-0 flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#EAEAE6] shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
        style={{
          zIndex: 2,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease 0.7s",
        }}
      >
        <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
        <span className="text-[11px] font-medium text-[#0C0C0C]">150+ countries</span>
      </div>
    </div>
  );
}

export function HeroSection({ primaryCta, secondaryCta }: HeroSectionProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-[#FAFAF8] pt-28 pb-20 px-5 sm:px-8 lg:px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[420px]">

          {/* ── LEFT: Copy ───────────────────────────────────────── */}
          <div>
            <p
              className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-8 font-medium"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(6px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              Business Operations Software
            </p>

            <h1
              className="text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.08] tracking-[-0.04em] text-[#0C0C0C]"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(10px)",
                transition: "opacity 0.6s ease 0.08s, transform 0.6s ease 0.08s",
              }}
            >
              One platform for how modern businesses bill, collect, and get paid.
            </h1>

            <p
              className="mt-6 text-[1rem] text-[#555] leading-relaxed font-light max-w-sm"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(8px)",
                transition: "opacity 0.6s ease 0.16s, transform 0.6s ease 0.16s",
              }}
            >
              Create invoices, track incoming payments, and manage outgoing payments from one clean dashboard.
            </p>

            <div
              className="mt-8 flex items-center gap-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(6px)",
                transition: "opacity 0.6s ease 0.24s, transform 0.6s ease 0.24s",
              }}
            >
              <Link href={primaryCta.href}>
                <span className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0C0C0C] text-white text-sm font-medium hover:bg-[#222] transition-colors duration-150 cursor-pointer">
                  {primaryCta.label}
                </span>
              </Link>
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <span className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm text-[#555] border border-[#E5E5E2] hover:border-[#ccc] hover:text-[#0C0C0C] transition-colors duration-150 cursor-pointer bg-white">
                    {secondaryCta.label}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              )}
            </div>
          </div>

          {/* ── RIGHT: Animated invoice mockup ───────────────────── */}
          <div className="relative h-[360px] lg:h-[420px] hidden md:block">
            <InvoiceMockup visible={visible} />
          </div>

        </div>
      </div>
    </section>
  );
}
