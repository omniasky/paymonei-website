"use client";

import { useEffect, useState, useCallback } from "react";

// ── Slides: Ranked by how universally painful they are ────────────────────
// CCO framing: all problems are SOFTWARE/ENGINEERING problems.
// Never frame as financial, regulatory, or compliance problems — that
// implies Paymonei is a financial institution solving regulated workflows.
// We are a software company solving a developer/product problem.
const slides = [
  {
    id: "billing",
    tag: "01",
    headline: "Building SaaS billing takes 6–12 months before your first invoice ships.",
    body: "Pricing table, subscription engine, proration logic, dunning, invoice PDF, embedded checkout — Stripe gives you a payment form, not a billing system. Most teams build it all from scratch, twice.",
    note: "Avg. time reported by B2B SaaS teams before billing goes live",
  },
  {
    id: "checkout",
    tag: "02",
    headline: "Checkout redirects lose customers before they pay.",
    body: "External-hosted checkout pages (like Stripe Checkout) break your product flow. Building a fully embedded checkout that stays inside your app is another 2–3 months of work — and most teams skip it.",
    note: "Conversion drops when customers leave your product to pay",
  },
  {
    id: "expansion",
    tag: "03",
    headline: "Every new market restart your localization roadmap.",
    body: "Multi-currency pricing, local bank formats, country-specific tax rules, and regional payment methods — launch in three countries and you've re-built your billing infrastructure three times.",
    note: "New market entry cost without a unified billing layer",
  },
];

// ── Right panel illustrations ─────────────────────────────────────────────

function BillingIllustration({ active }: { active: boolean }) {
  const steps = [
    { label: "Pricing table & plan management", done: false },
    { label: "Subscription engine + proration", done: false },
    { label: "Invoice generation & PDF export", done: false },
    { label: "Embedded checkout (in-product)", done: false },
    { label: "Dunning & failed payment handling", done: false },
    { label: "Reconciliation & reporting", done: false },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-center px-6 py-6 gap-3">
      {/* Time badge */}
      <div
        className="absolute top-5 right-5 text-right"
        style={{ opacity: active ? 1 : 0, transition: "opacity 0.5s ease 0.1s" }}
      >
        <div className="text-[9px] text-[#BBB] tracking-wider uppercase mb-1">Time to ship</div>
        <div className="text-2xl font-light tracking-tight" style={{ color: "#C53030" }}>6–12 mo</div>
      </div>

      <p className="text-[9px] text-[#BBB] tracking-[0.14em] uppercase mb-2 font-medium">Build from scratch</p>

      {steps.map((step, i) => (
        <div
          key={step.label}
          className="flex items-center gap-3"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "none" : "translateX(-6px)",
            transition: `opacity 0.4s ease ${0.1 + i * 0.06}s, transform 0.4s ease ${0.1 + i * 0.06}s`,
          }}
        >
          <div className="w-4 h-4 rounded border-2 border-[#E0E0DB] bg-white shrink-0" />
          <span className="text-sm text-[#555] font-light leading-snug">{step.label}</span>
        </div>
      ))}

      <div
        className="mt-2 text-xs text-[#BBB] italic"
        style={{ opacity: active ? 0.7 : 0, transition: "opacity 0.4s ease 0.7s" }}
      >
        …and each pricing change requires revisiting all of these
      </div>
    </div>
  );
}

function CheckoutIllustration({ active }: { active: boolean }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center gap-4 px-6">

      {/* Your app */}
      <div
        className="flex flex-col"
        style={{ opacity: active ? 1 : 0, transition: "opacity 0.4s ease 0.1s" }}
      >
        <div className="text-[9px] text-[#999] tracking-wider uppercase mb-2 text-center">Your product</div>
        <div className="w-36 rounded-xl border border-[#EAEAE6] bg-white shadow-sm overflow-hidden">
          <div className="px-3 py-2 border-b border-[#F0F0EC] bg-[#FAFAF8]">
            <div className="h-1.5 bg-[#E8E8E4] rounded-full w-16 mb-1" />
            <div className="h-1.5 bg-[#E8E8E4] rounded-full w-24" />
          </div>
          <div className="px-3 py-3 space-y-2">
            <div className="h-1.5 bg-[#F0F0EC] rounded-full w-full" />
            <div className="h-1.5 bg-[#F0F0EC] rounded-full w-4/5" />
            {/* Button in-app */}
            <div className="mt-3 flex justify-center">
              <div className="px-3 py-1 rounded-full bg-[#0C0C0C] text-white text-[9px]">
                Subscribe →
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div
        className="flex flex-col items-center gap-1"
        style={{ opacity: active ? 1 : 0, transition: "opacity 0.4s ease 0.3s" }}
      >
        <div className="text-[10px] text-[#C53030]">leaves app</div>
        <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
          <path d="M0 8h36M28 2l8 6-8 6" stroke="#C53030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* External checkout */}
      <div
        className="flex flex-col"
        style={{ opacity: active ? 1 : 0, transition: "opacity 0.4s ease 0.2s" }}
      >
        <div className="text-[9px] text-[#C53030] tracking-wider uppercase mb-2 text-center">External page</div>
        <div className="w-36 rounded-xl border-2 border-[#FFD4D4] bg-[#FFF8F8] overflow-hidden shadow-sm">
          <div className="px-3 py-2 border-b border-[#FFE8E8] bg-[#FFF0F0]">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#EFA0A0]" />
              <div className="h-1.5 bg-[#F5C0C0] rounded-full w-20" />
            </div>
          </div>
          <div className="px-3 py-3 space-y-2">
            <div className="h-1.5 bg-[#F5E0E0] rounded-full w-full" />
            <div className="h-1.5 bg-[#F5E0E0] rounded-full w-3/5" />
            <input readOnly className="mt-2 w-full text-[9px] border border-[#F0C0C0] rounded px-1.5 py-1 text-[#C53030] bg-white" placeholder="Card number" defaultValue="" />
          </div>
        </div>
      </div>

      {/* Drop-off label */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center"
        style={{ opacity: active ? 0.6 : 0, transition: "opacity 0.5s ease 0.7s" }}
      >
        <div className="text-[10px] text-[#AAA]">Customers who leave rarely come back</div>
      </div>
    </div>
  );
}

function ExpansionIllustration({ active }: { active: boolean }) {
  const markets = [
    { flag: "🇸🇬", name: "Singapore", items: ["SGD", "PayNow", "GIRO", "GST 9%"] },
    { flag: "🇩🇪", name: "Germany", items: ["EUR", "SEPA", "IBAN", "VAT 19%"] },
    { flag: "🇧🇷", name: "Brazil", items: ["BRL", "PIX", "Boleto", "ISS/ICMS"] },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center gap-3 px-4">
      {markets.map((market, i) => (
        <div
          key={market.name}
          className="flex-1"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "none" : "translateY(8px)",
            transition: `opacity 0.4s ease ${0.1 + i * 0.1}s, transform 0.4s ease ${0.1 + i * 0.1}s`,
          }}
        >
          <div className="rounded-xl border border-[#EAEAE6] bg-white shadow-sm overflow-hidden">
            <div className="px-3 py-2.5 border-b border-[#F5F5F2] bg-[#FAFAF8] flex items-center gap-2">
              <span className="text-base">{market.flag}</span>
              <span className="text-[11px] font-medium text-[#0C0C0C]">{market.name}</span>
            </div>
            <div className="px-3 py-2.5 space-y-1.5">
              {market.items.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#DDDDD8] shrink-0" />
                  <span className="text-[10px] text-[#666]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Re-build arrow */}
          {i < markets.length - 1 && (
            <div className="sr-only">separator</div>
          )}
        </div>
      ))}

      {/* Re-build badges */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2"
        style={{ opacity: active ? 0.6 : 0, transition: "opacity 0.5s ease 0.6s" }}
      >
        {["Rebuild #1", "Rebuild #2", "Rebuild #3"].map((label) => (
          <span key={label} className="text-[9px] px-2 py-0.5 rounded-full border border-[#E0E0DB] text-[#AAA]">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

const illustrations = [BillingIllustration, CheckoutIllustration, ExpansionIllustration];

// ── Main Section ────────────────────────────────────────────────────────────

export function ProblemSection() {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (idx === active) return;
      setTransitioning(true);
      setTimeout(() => {
        setActive(idx);
        setTransitioning(false);
      }, 220);
    },
    [active]
  );

  useEffect(() => {
    const id = setInterval(() => {
      goTo((active + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, [active, goTo]);

  const slide = slides[active];
  const Illustration = illustrations[active];

  return (
    <section className="bg-white border-t border-[#EAEAE6] py-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto lg:px-8">
        <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-12">Why teams choose Paymonei</p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[320px]">

          {/* ── LEFT ───────────────────────────────────────────────── */}
          <div className="flex gap-6">
            {/* Vertical dot nav */}
            <div className="flex flex-col items-center gap-3 pt-1.5 shrink-0">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  aria-label={`Problem ${i + 1}`}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? "7px" : "5px",
                      height: i === active ? "7px" : "5px",
                      background: i === active ? "#0C0C0C" : "#DDDDD8",
                    }}
                  />
                  {i < slides.length - 1 && (
                    <div className="w-px bg-[#EAEAE6]" style={{ height: "36px" }} />
                  )}
                </button>
              ))}
            </div>

            {/* Text */}
            <div
              style={{
                opacity: transitioning ? 0 : 1,
                transform: transitioning ? "translateY(5px)" : "none",
                transition: "opacity 0.22s ease, transform 0.22s ease",
              }}
            >
              <p className="text-[12px] font-medium text-[#CCC] tracking-widest mb-5">
                {slide.tag} / {String(slides.length).padStart(2, "0")}
              </p>

              <h2
                className="text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-tight tracking-[-0.03em] text-[#0C0C0C] mb-5"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                {slide.headline}
              </h2>

              <p className="text-[15px] text-[#666] leading-relaxed font-light mb-7 max-w-[340px]">
                {slide.body}
              </p>

              {/* Progress dots */}
              <div className="flex items-center gap-2">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => goTo(i)}
                    className="h-[2px] rounded-full transition-all duration-400"
                    style={{
                      width: i === active ? "28px" : "14px",
                      background: i === active ? "#0C0C0C" : "#DDDDD8",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: illustration ────────────────────────────────── */}
          <div
            className="relative h-[280px] lg:h-[340px] rounded-2xl border border-[#EAEAE6] bg-[#FAFAF8] overflow-hidden"
            style={{
              opacity: transitioning ? 0 : 1,
              transition: "opacity 0.22s ease",
            }}
          >
            <Illustration active={!transitioning} />
          </div>

        </div>
      </div>
    </section>
  );
}
