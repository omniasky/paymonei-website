"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, FileText, Database } from "lucide-react";

// ── Copy answers ─────────────────────────────────────────────────────────────
const answers = [
  {
    id: "quote",
    headline: "Instant quote-to-cash.",
    body: "Convert signed proposals into perfect invoices instantly. No double-entry. No dropped line items.",
    badge: "Automation",
  },
  {
    id: "dunning",
    headline: "Intelligent AR logic.",
    body: "Set custom dunning schedules. The platform automatically reminds clients and escalates overdue accounts.",
    badge: "Collections",
  },
  {
    id: "ledger",
    headline: "The unified AR ledger.",
    body: "All multi-region data consolidated into a single source of truth. Track and reconcile global receivables instantly.",
    badge: "Reconciliation",
  },
];

// ── Widgets ───────────────────────────────────────────────────────────────────

function AnswerQuoteWidget({ active }: { active: boolean }) {
  return (
    <div className="w-full h-full flex flex-col justify-center relative">
      <div className="flex items-center justify-between px-4 relative z-10">
        {/* Connector Line */}
        <div className="absolute left-[30px] right-[30px] h-[2px] top-1/2 -translate-y-1/2 bg-[#F0F0EC] -z-10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#10B981]"
            style={{
              width: active ? "100%" : "0%",
              transition: "width 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.5s",
            }}
          />
        </div>

        {/* Node 1: PDF */}
        <div
          className="flex flex-col items-center gap-2 bg-white"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.5s ease 0.1s",
          }}
        >
          <div className="w-12 h-12 rounded-xl bg-[#FAFAF8] border border-[#EAEAE6] flex items-center justify-center shadow-sm">
            <FileText size={20} className="text-[#888]" />
          </div>
        </div>

        {/* Node 2: Checkmark passing */}
        <div
          className="w-7 h-7 rounded-full bg-[#10B981] border-2 border-white flex items-center justify-center shadow-md relative z-20"
          style={{
            transform: active ? "scale(1)" : "scale(0)",
            opacity: active ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1.0s",
          }}
        >
          <CheckCircle2 size={14} className="text-white" />
        </div>

        {/* Node 3: Invoice */}
        <div
          className="flex flex-col items-center gap-2 bg-white"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.5s ease 1.3s",
          }}
        >
          <div className="w-12 h-12 rounded-xl bg-[#0C0C0C] border border-[#0C0C0C] flex flex-col items-center justify-center shadow-md">
            <span className="text-white text-[9px] font-semibold tracking-wide leading-none">INV</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnswerDunningWidget({ active }: { active: boolean }) {
  const steps = [
    { day: "Day 0", text: "Invoice sent", delay: 0.2, checked: true },
    { day: "Day 7", text: "Reminder sent", delay: 0.6, checked: true },
    { day: "Day 14", text: "Escalated", delay: 1.0, checked: false },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 gap-3 relative">
      {/* Connecting vertical line */}
      <div 
        className="absolute left-[43px] top-4 bottom-4 w-[1px] bg-[#EAEAE6] -z-10"
      />
      {steps.map((step) => (
        <div
          key={step.day}
          className="flex items-center gap-4"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateX(0)" : "translateX(-15px)",
            transition: `all 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${step.delay}s`,
          }}
        >
          <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center bg-white shadow-sm ${step.checked ? 'border-[#10B981]' : 'border-[#EAEAE6]'}`}>
            {step.checked ? (
              <CheckCircle2 size={12} className="text-[#10B981]" />
            ) : (
              <div className="w-1.5 h-1.5 rounded-full bg-[#EAEAE6]" />
            )}
          </div>
          <div className="flex-1 h-9 bg-[#FAFAF8] border border-[#EAEAE6] rounded-lg flex items-center justify-between px-3">
            <span className="text-[10px] font-medium text-[#888]">{step.day}</span>
            <span className="text-[10px] text-[#0C0C0C]">{step.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function AnswerLedgerWidget({ active }: { active: boolean }) {
  const lines = [
    { w: "40%", delay: 0.2 },
    { w: "70%", delay: 0.4 },
    { w: "50%", delay: 0.6 },
    { w: "80%", delay: 0.8 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-4">
      <div 
        className="w-full max-w-[180px] bg-[#FAFAF8] border border-[#EAEAE6] rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
        style={{
          opacity: active ? 1 : 0,
          transform: active ? "scale(1)" : "scale(0.95)",
          transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s",
        }}
      >
        <div className="bg-white border-b border-[#EAEAE6] px-3 py-2.5 flex items-center gap-2">
          <Database size={12} className="text-[#0C0C0C]" />
          <span className="text-[9px] font-medium tracking-wide text-[#0C0C0C] uppercase">Global Ledger</span>
        </div>
        <div className="p-3 flex flex-col gap-2.5">
          {lines.map((line, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2.5"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "translateX(0)" : "translateX(-15px)",
                transition: `all 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${line.delay}s`
              }}
            >
              <div className={`w-3 h-3 rounded-sm shrink-0 border ${i % 2 === 0 ? 'bg-[#10B981] border-[#10B981]' : 'border-[#EAEAE6] bg-white'}`} />
              <div className="h-1.5 bg-[#DDDDD8] rounded-full" style={{ width: line.w }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const widgets = [AnswerQuoteWidget, AnswerDunningWidget, AnswerLedgerWidget];

// ── Section ───────────────────────────────────────────────────────────────────

export function AnswerSection() {
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
      className="bg-[#FAFAF8] py-20 px-5 sm:px-8 border-t border-[#EAEAE6]"
    >
      <div className="max-w-7xl mx-auto lg:px-8">
        {/* Section header */}
        <div className="mb-14 flex flex-col items-start">
          <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-5">
            The Answer
          </p>
          <h2
            className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-tight tracking-[-0.03em] max-w-lg text-[#0C0C0C]"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            One platform that solves all three.
          </h2>
          <p className="mt-4 text-[15px] text-[#777] font-light max-w-md">
            Stop chasing. Stop reconciling. From first quote to collected payment, managed automatically in one place.
          </p>
        </div>

        {/* Bento grid layout */}
        <div className="grid md:grid-cols-3 gap-5">
          {answers.map((ans, i) => {
            const Widget = widgets[i];
            return (
              <div
                key={ans.id}
                className="rounded-2xl border border-[#EAEAE6] bg-white overflow-hidden flex flex-col relative"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(15px)",
                  transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                }}
              >
                {/* Visual Widget Zone */}
                <div className="px-6 py-7 h-[200px] flex items-center border-b border-[#EBEBEB] bg-white">
                  <Widget active={visible} />
                </div>

                {/* Text Context Zone */}
                <div className="px-6 py-6 flex flex-col gap-2.5 flex-1 bg-[#FAFAF8]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-1 text-[9px] font-semibold tracking-wider uppercase bg-[#F0F0EC] border border-[#EAEAE6] text-[#888] rounded-full">
                      {ans.badge}
                    </span>
                  </div>
                  <h3
                    className="text-[1.35rem] font-light leading-snug tracking-[-0.02em] text-[#0C0C0C]"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {ans.headline}
                  </h3>
                  <p className="text-[14px] text-[#666] leading-relaxed font-light">
                    {ans.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
