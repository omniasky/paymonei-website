"use client";

import { useEffect, useRef, useState } from "react";

// "Marching ants" — the running dotted line you asked for.
// Achieved by animating SVG stroke-dashoffset on a dashed path.
const MARCH_CSS = `
  @keyframes pm-march {
    from { stroke-dashoffset: 11; }
    to   { stroke-dashoffset: 0;  }
  }
  .pm-march {
    stroke-dasharray: 6 5;
    animation: pm-march 0.65s linear infinite;
  }
`;

type Solution = {
  num: string;
  label: string;
  title: string;
  body: string;
  badge: string;
};

const solutions: Solution[] = [
  {
    num: "01",
    label: "Solves: chasing overdue invoices",
    title: "Automated reminders, end to end",
    body: "Set your dunning schedule once. Paymonei sends reminders, escalates overdue accounts, and flags what needs action. You check the dashboard, not your inbox.",
    badge: "AR on autopilot",
  },
  {
    num: "02",
    label: "Solves: multi-method payment chaos",
    title: "One link. Any payment method.",
    body: "Card, local payment, QRIS, stablecoin. All from the same link. Your client pays how they want. Every collection lands in one place, in any currency.",
    badge: "150+ markets",
  },
  {
    num: "03",
    label: "Solves: tool sprawl, no AR view",
    title: "One dashboard. Full AR visibility.",
    body: "Invoice, collect, track, and reconcile from one platform. Overdue status, payment history, and full AR position always in sync. No spreadsheets.",
    badge: "Single source of truth",
  },
];

function SolutionCard({
  sol,
  visible,
  delay,
}: {
  sol: Solution;
  visible: boolean;
  delay: number;
}) {
  return (
    <div
      className="bg-white rounded-2xl border border-[#EAEAE6] p-6 flex flex-col gap-4 h-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(12px)",
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
      }}
    >
      {/* Number + context label */}
      <div className="flex items-start justify-between gap-3">
        <span className="text-[11px] font-medium tracking-[0.15em] text-[#DDD] shrink-0">
          {sol.num}
        </span>
        <span className="text-[10px] text-[#CCC] text-right leading-tight italic">
          {sol.label}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-[1.1rem] font-light leading-snug tracking-[-0.02em] text-[#0C0C0C]"
        style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
      >
        {sol.title}
      </h3>

      {/* Body */}
      <p className="text-[15px] text-[#666] leading-relaxed font-light flex-1">
        {sol.body}
      </p>

      {/* Badge */}
      <span className="w-fit text-[11px] font-medium px-3 py-1.5 rounded-full bg-[#F0F0EC] text-[#666] border border-[#E8E8E4]">
        {sol.badge}
      </span>
    </div>
  );
}

// Horizontal connector (desktop): marching dashes + right-pointing arrowhead
function HConnector() {
  return (
    <div className="flex-shrink-0 flex items-center px-3 mt-14">
      <svg width="56" height="10" viewBox="0 0 56 10" fill="none">
        <path
          className="pm-march"
          d="M0 5 L46 5"
          stroke="#DDDDD8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M42 2 L50 5 L42 8"
          stroke="#DDDDD8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

// Vertical connector (mobile): marching dashes + downward arrowhead
function VConnector() {
  return (
    <div className="flex justify-center py-2">
      <svg width="10" height="44" viewBox="0 0 10 44" fill="none">
        <path
          className="pm-march"
          d="M5 0 L5 35"
          stroke="#DDDDD8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M2 31 L5 39 L8 31"
          stroke="#DDDDD8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

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
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="border-t border-[#EAEAE6] bg-[#FAFAF8] py-20 px-5 sm:px-8"
    >
      {/* Inject marching-ants keyframes */}
      <style>{MARCH_CSS}</style>

      <div className="max-w-7xl mx-auto lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[12px] tracking-[0.14em] uppercase text-[#777] mb-5">
            The answer
          </p>
          <h2
            className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-tight tracking-[-0.03em] text-[#0C0C0C] max-w-xl"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            One platform that solves all three.
          </h2>
          <p className="mt-4 text-[15px] text-[#777] leading-relaxed font-light max-w-md">
            Stop chasing. Stop reconciling. From first invoice to collected payment, in one place.
          </p>
        </div>

        {/* Mobile: vertical stack with vertical connectors */}
        <div className="md:hidden flex flex-col">
          {solutions.map((sol, i) => (
            <div key={sol.num}>
              <SolutionCard sol={sol} visible={visible} delay={i * 0.12} />
              {i < solutions.length - 1 && <VConnector />}
            </div>
          ))}
        </div>

        {/* Desktop: horizontal flow with horizontal connectors */}
        <div className="hidden md:flex items-start">
          {solutions.map((sol, i) => (
            <div key={sol.num} className="flex items-start flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <SolutionCard sol={sol} visible={visible} delay={i * 0.12} />
              </div>
              {i < solutions.length - 1 && <HConnector />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
