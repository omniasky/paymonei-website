"use client";

import { useEffect, useState, useCallback } from "react";

// ── Slides: Universal SME pains ──────────────────────────────────────────────
// CCO framing: all problems are OPERATIONAL/SOFTWARE problems for any business
// that invoices. Applies to agencies, consultants, SaaS, trading companies.
// Never frame as financial, regulatory, or compliance problems.
const slides = [
  {
    id: "collections",
    tag: "01",
    headline: "You send the invoice. Then spend weeks chasing it.",
    body: "Most businesses lose hours every week on manual follow-up emails, payment reminders, and overdue tracking. Invoice sent is not invoice paid. Without automation, AR is a second job.",
    note: "Avg. hours per week SMEs spend chasing unpaid invoices",
  },
  {
    id: "multimethod",
    tag: "02",
    headline: "Clients pay in different currencies and methods. Nothing lines up.",
    body: "One client pays by card, another by bank transfer, one in Singapore dollars, another in euros. You reconcile across inboxes, spreadsheets, and bank statements just to know what you have collected.",
    note: "Tools the average SME uses to track a single cross-border collection",
  },
  {
    id: "sprawl",
    tag: "03",
    headline: "You use three tools for billing and still cannot see what is overdue.",
    body: "Invoicing in one place, tracking in a spreadsheet, chasing in email. When you need your AR position, you are pulling from three sources that never agree.",
    note: "Average tools used across a single invoice lifecycle",
  },
];

// ── Right panel illustrations ─────────────────────────────────────────────

function CollectionIllustration({ active }: { active: boolean }) {
  const timeline = [
    { day: "Day 0", label: "Invoice sent", color: "#0C0C0C" },
    { day: "Day 7", label: "Reminder #1", color: "#999" },
    { day: "Day 14", label: "Reminder #2", color: "#999" },
    { day: "Day 21", label: "Follow-up call", color: "#999" },
    { day: "Day 30+", label: "Still unpaid", color: "#C53030" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-center px-6 py-6 gap-2.5">
      <div
        className="absolute top-5 right-5 text-right"
        style={{ opacity: active ? 1 : 0, transition: "opacity 0.5s ease 0.1s" }}
      >
        <div className="text-[9px] text-[#BBB] tracking-wider uppercase mb-1">Unpaid</div>
        <div className="text-2xl font-light tracking-tight" style={{ color: "#C53030" }}>30+ days</div>
      </div>

      <p className="text-[9px] text-[#BBB] tracking-[0.14em] uppercase mb-2 font-medium">Manual follow-up chain</p>

      {timeline.map((step, i) => (
        <div
          key={step.day}
          className="flex items-center gap-3"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "none" : "translateX(-6px)",
            transition: `opacity 0.4s ease ${0.1 + i * 0.08}s, transform 0.4s ease ${0.1 + i * 0.08}s`,
          }}
        >
          <div className="text-[10px] text-[#BBB] w-14 shrink-0">{step.day}</div>
          <div className="flex-1 h-px bg-[#F0F0EC]" />
          <div className="text-[11px] font-light" style={{ color: step.color }}>{step.label}</div>
        </div>
      ))}

      <div
        className="mt-2 text-xs text-[#BBB] italic"
        style={{ opacity: active ? 0.7 : 0, transition: "opacity 0.4s ease 0.7s" }}
      >
        ...repeat for every invoice, every client
      </div>
    </div>
  );
}

function MultiRailIllustration({ active }: { active: boolean }) {
  const sources = [
    { method: "Visa card", currency: "USD", flag: "🇺🇸" },
    { method: "SEPA transfer", currency: "EUR", flag: "🇩🇪" },
    { method: "QRIS", currency: "IDR", flag: "🇮🇩" },
    { method: "Bank wire", currency: "SGD", flag: "🇸🇬" },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center gap-5 px-6">
      <div className="flex flex-col gap-2.5">
        {sources.map((s, i) => (
          <div
            key={s.method}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-[#EAEAE6] bg-white shadow-sm"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? "none" : "translateX(-6px)",
              transition: `opacity 0.4s ease ${0.1 + i * 0.08}s, transform 0.4s ease ${0.1 + i * 0.08}s`,
            }}
          >
            <span className="text-sm">{s.flag}</span>
            <span className="text-[10px] text-[#555] font-medium">{s.method}</span>
            <span className="text-[9px] text-[#BBB] ml-1">{s.currency}</span>
          </div>
        ))}
      </div>

      <div style={{ opacity: active ? 1 : 0, transition: "opacity 0.4s ease 0.45s" }}>
        <svg width="28" height="80" viewBox="0 0 28 80" fill="none">
          <path d="M4 10 Q24 40 4 70" stroke="#DDDDD8" strokeWidth="1.5" strokeDasharray="4 3" />
          <path d="M4 25 Q20 40 4 55" stroke="#DDDDD8" strokeWidth="1.5" strokeDasharray="4 3" />
          <path d="M14 10 L14 70" stroke="#DDDDD8" strokeWidth="1.5" strokeDasharray="4 3" />
        </svg>
      </div>

      <div
        className="flex flex-col items-center gap-2"
        style={{ opacity: active ? 1 : 0, transition: "opacity 0.4s ease 0.55s" }}
      >
        <div className="w-14 h-14 rounded-2xl border-2 border-dashed border-[#DDDDD8] bg-[#F9F9F6] flex items-center justify-center">
          <span className="text-2xl">?</span>
        </div>
        <span className="text-[9px] text-[#C53030] text-center">Where is it?</span>
      </div>

      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center"
        style={{ opacity: active ? 0.6 : 0, transition: "opacity 0.5s ease 0.7s" }}
      >
        <div className="text-[10px] text-[#AAA]">Reconcile manually across 3+ tools</div>
      </div>
    </div>
  );
}

function ToolSprawlIllustration({ active }: { active: boolean }) {
  const tools = [
    { icon: "📊", name: "Spreadsheet", sub: "overdue tracker" },
    { icon: "📧", name: "Email inbox", sub: "reminders" },
    { icon: "📄", name: "Billing app", sub: "invoices" },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center gap-3 px-4">
      {tools.map((tool, i) => (
        <div
          key={tool.name}
          className="flex-1"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "none" : "translateY(8px)",
            transition: `opacity 0.4s ease ${0.1 + i * 0.12}s, transform 0.4s ease ${0.1 + i * 0.12}s`,
          }}
        >
          <div className="rounded-xl border border-[#EAEAE6] bg-white shadow-sm overflow-hidden">
            <div className="px-3 py-2.5 border-b border-[#F5F5F2] bg-[#FAFAF8] flex items-center gap-1.5">
              <span className="text-base">{tool.icon}</span>
              <span className="text-[10px] font-medium text-[#0C0C0C]">{tool.name}</span>
            </div>
            <div className="px-3 py-2.5 space-y-1.5">
              <div className="h-1.5 bg-[#F0F0EC] rounded-full w-full" />
              <div className="h-1.5 bg-[#F0F0EC] rounded-full w-3/4" />
              <div className="h-1.5 bg-[#F0F0EC] rounded-full w-1/2" />
            </div>
          </div>
        </div>
      ))}

      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2"
        style={{ opacity: active ? 0.6 : 0, transition: "opacity 0.5s ease 0.6s" }}
      >
        {["Export", "Copy-paste", "Manually update"].map((label) => (
          <span key={label} className="text-[9px] px-2 py-0.5 rounded-full border border-[#E0E0DB] text-[#AAA]">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

const illustrations = [CollectionIllustration, MultiRailIllustration, ToolSprawlIllustration];

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
      <div className="max-w-7xl mx-auto lg:px-8">
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
