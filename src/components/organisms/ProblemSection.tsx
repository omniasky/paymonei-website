"use client";

import { useEffect, useRef, useState } from "react";

// ── Pain points ───────────────────────────────────────────────────────────────
const pains = [
  {
    id: "collections",
    tag: "01",
    headline: "You send the invoice. Then spend weeks chasing it.",
    body: "Most businesses lose hours every week on manual follow-up and overdue tracking. Invoice sent is not invoice paid.",
  },
  {
    id: "multimethod",
    tag: "02",
    headline: "Clients pay in different currencies and methods. Nothing lines up.",
    body: "Card, bank transfer, QRIS, wire — each payment arrives differently. Reconciliation happens across inboxes, spreadsheets, and bank statements.",
  },
  {
    id: "sprawl",
    tag: "03",
    headline: "Three tools for billing. Still no clear view of what is overdue.",
    body: "Invoicing, tracking, and chasing happen in separate tools. When you need your AR position, you pull from three sources that never agree.",
  },
];

// ── Widgets ───────────────────────────────────────────────────────────────────

function CollectionWidget({ active }: { active: boolean }) {
  const rows = [
    { day: "Day 0", label: "Invoice sent", pct: 18, color: "#22C55E" },
    { day: "Day 7", label: "Reminder #1", pct: 40, color: "#F59E0B" },
    { day: "Day 14", label: "Reminder #2", pct: 62, color: "#F59E0B" },
    { day: "Day 21", label: "Follow-up call", pct: 81, color: "#EF4444" },
    { day: "Day 30+", label: "Still unpaid", pct: 100, color: "#C53030" },
  ];

  return (
    <div className="space-y-2.5">
      {rows.map((row, i) => (
        <div
          key={row.day}
          className="flex items-center gap-2.5"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "none" : "translateX(-4px)",
            transition: `opacity 0.35s ease ${i * 0.06}s, transform 0.35s ease ${i * 0.06}s`,
          }}
        >
          <span className="text-[9px] text-[#BBB] w-12 shrink-0">{row.day}</span>
          <div className="flex-1 h-[3px] rounded-full bg-[#EBEBEB] overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: active ? `${row.pct}%` : "0%",
                background: row.color,
                transition: `width 0.65s ease ${i * 0.06 + 0.12}s`,
              }}
            />
          </div>
          <span className="text-[9px] text-[#AAA] w-16 text-right shrink-0 leading-tight">
            {row.label}
          </span>
        </div>
      ))}
      <p
        className="text-[11px] font-medium pt-1"
        style={{
          color: "#C53030",
          opacity: active ? 1 : 0,
          transition: "opacity 0.4s ease 0.5s",
        }}
      >
        30+ days outstanding
      </p>
    </div>
  );
}

function MultiRailWidget({ active }: { active: boolean }) {
  const sources = [
    { flag: "🇺🇸", method: "Card", currency: "USD" },
    { flag: "🇩🇪", method: "SEPA", currency: "EUR" },
    { flag: "🇮🇩", method: "QRIS", currency: "IDR" },
    { flag: "🇸🇬", method: "Wire", currency: "SGD" },
  ];

  return (
    <div className="space-y-2">
      {sources.map((s, i) => (
        <div
          key={s.method}
          className="flex items-center gap-2.5"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "none" : "translateX(-4px)",
            transition: `opacity 0.35s ease ${i * 0.07}s, transform 0.35s ease ${i * 0.07}s`,
          }}
        >
          <span className="text-sm leading-none">{s.flag}</span>
          <span className="text-[11px] text-[#555] font-medium">{s.method}</span>
          <span className="text-[9px] text-[#BBB]">{s.currency}</span>
          <div className="flex-1 border-b border-dashed border-[#E5E5E0]" />
          <span className="text-[11px] font-semibold" style={{ color: "#C53030" }}>
            ?
          </span>
        </div>
      ))}
      <p
        className="text-[10px] text-[#AAA] pt-1"
        style={{ opacity: active ? 1 : 0, transition: "opacity 0.4s ease 0.4s" }}
      >
        Where did it settle? Reconcile manually.
      </p>
    </div>
  );
}

function ToolSprawlWidget({ active }: { active: boolean }) {
  const tools = [
    { emoji: "📊", name: "Spreadsheet" },
    { emoji: "📧", name: "Email" },
    { emoji: "📄", name: "Billing app" },
  ];
  const steps = ["Export", "Copy-paste", "Manual update"];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-1.5">
        {tools.map((t, i) => (
          <div key={t.name} className="flex items-center gap-1.5">
            <div
              className="flex flex-col items-center gap-1"
              style={{
                opacity: active ? 1 : 0,
                transition: `opacity 0.35s ease ${i * 0.1}s`,
              }}
            >
              <div className="w-9 h-9 rounded-xl border border-[#EAEAE6] bg-white flex items-center justify-center shadow-sm">
                <span className="text-base leading-none">{t.emoji}</span>
              </div>
              <span className="text-[9px] text-[#BBB] text-center whitespace-nowrap">
                {t.name}
              </span>
            </div>
            {i < tools.length - 1 && (
              <span
                className="text-[#DDDDD8] text-sm pb-4 shrink-0"
                aria-hidden="true"
                style={{
                  opacity: active ? 1 : 0,
                  transition: `opacity 0.35s ease ${i * 0.1 + 0.12}s`,
                }}
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <div
        className="flex gap-1.5 flex-wrap"
        style={{ opacity: active ? 0.85 : 0, transition: "opacity 0.4s ease 0.36s" }}
      >
        {steps.map((s) => (
          <span
            key={s}
            className="text-[9px] px-2 py-0.5 rounded-full border border-[#E0E0DB] text-[#AAA]"
          >
            {s}
          </span>
        ))}
      </div>
      <p
        className="text-[10px] text-[#AAA]"
        style={{ opacity: active ? 1 : 0, transition: "opacity 0.4s ease 0.46s" }}
      >
        No single source of truth
      </p>
    </div>
  );
}

const widgets = [CollectionWidget, MultiRailWidget, ToolSprawlWidget];

// ── Section ───────────────────────────────────────────────────────────────────

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-white border-t border-[#EAEAE6] py-20 px-5 sm:px-8"
    >
      <div className="max-w-7xl mx-auto lg:px-8">
        <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-12">
          Why teams choose Paymonei
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {pains.map((pain, i) => {
            const Widget = widgets[i];
            return (
              <div
                key={pain.id}
                className="rounded-2xl border border-[#EAEAE6] bg-[#FAFAF8] p-6 flex flex-col gap-5"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(10px)",
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
              >
                {/* Header */}
                <div>
                  <span className="text-[11px] font-medium tracking-[0.15em]" style={{ color: "#DDD" }}>
                    {pain.tag}
                  </span>
                  <h3
                    className="text-[1.05rem] font-light leading-snug tracking-[-0.02em] text-[#0C0C0C] mt-3 mb-3"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {pain.headline}
                  </h3>
                  <p className="text-[13px] text-[#888] leading-relaxed font-light">
                    {pain.body}
                  </p>
                </div>

                {/* Animated widget */}
                <div className="mt-auto pt-4 border-t border-[#EBEBEB]">
                  <Widget active={visible} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
