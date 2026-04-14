"use client";

import { useEffect, useRef, useState } from "react";
import { Landmark } from "lucide-react";

// ── Pain points ───────────────────────────────────────────────────────────────
const pains = [
  {
    id: "disconnect",
    headline: "The quote-to-cash disconnect.",
    body: "Sales closes the deal. Accounting rebuilds it manually weeks later. Line items vanish, terms get missed, and bills go out late.",
  },
  {
    id: "collections",
    headline: "Sent does not mean paid.",
    body: "Most businesses lose hours every week chasing invoices that left their desk weeks ago. There is no system, just follow-up emails.",
  },
  {
    id: "multimethod",
    headline: "Scattered data. Manual reconciliation.",
    body: "Consolidate multi-region clients into a single source of truth. No more piecing together mismatched formats by hand.",
  },
];

// ── Widgets ───────────────────────────────────────────────────────────────────

function CollectionWidget({ active }: { active: boolean }) {
  const notifications = [
    { day: "Day 0",  status: "Sent",        color: "#22C55E", bgColor: "#F0FDF4", title: "Invoice #INV-2041", desc: "Sent to client via email." },
    { day: "Day 7",  status: "No reply",    color: "#F59E0B", bgColor: "#FFFBEB", title: "Invoice #INV-2041", desc: "Auto-reminder #1 triggered." },
    { day: "Day 14", status: "Still open",  color: "#F59E0B", bgColor: "#FFFBEB", title: "Invoice #INV-2041", desc: "Auto-reminder #2 triggered." },
    { day: "Day 21", status: "Chasing",     color: "#EF4444", bgColor: "#FEF2F2", title: "Invoice #INV-2041", desc: "Follow-up call needed." },
    { day: "Day 30+",status: "Overdue",     color: "#C53030", bgColor: "#FEF2F2", title: "Invoice #INV-2041", desc: "30+ days. Escalation required." },
    { day: "Today",  status: "Overwhelmed", color: "#C53030", bgColor: "#FEF2F2", title: "+23 Invoices Overdue", desc: "More chasing added to your plate today." },
  ];

  const [current, setCurrent] = useState(0);
  const [entering, setEntering] = useState(true);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setEntering(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % notifications.length);
        setEntering(true);
      }, 300);
    }, 2200);
    return () => clearInterval(interval);
  }, [active, notifications.length]);

  const notif = notifications[current];

  return (
    <div className="w-full flex items-center justify-center h-full">
      <div
        className="w-full bg-white border border-[#EAEAE6] rounded-2xl px-4 py-3.5 shadow-sm flex flex-col"
        style={{
          opacity: active ? (entering ? 1 : 0) : 0,
          transform: active ? (entering ? "translateY(0)" : "translateY(-8px)") : "translateY(12px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        {/* Header: Day and Status */}
        <div className="flex items-center justify-between mb-2.5">
          <span
            className="text-[10px] font-medium px-2 py-0.5 rounded-full"
            style={{ color: notif.color, backgroundColor: notif.bgColor }}
          >
            {notif.day}
          </span>
          <span
            className="text-[10px] font-semibold tracking-wide"
            style={{ color: notif.color }}
          >
            {notif.status}
          </span>
        </div>
        
        {/* Body: Title and Description */}
        <h4 className="text-[13px] font-medium text-[#0C0C0C]">{notif.title}</h4>
        <p className="text-[11.5px] text-[#777] mt-0.5">
          {notif.desc}
        </p>
      </div>
    </div>
  );
}

function MultiRailWidget({ active }: { active: boolean }) {
  const sources = [
    { label: "Client A" },
    { label: "Client B" },
    { label: "Client C" },
  ];

  return (
    <div
      className="w-full flex items-center justify-between gap-2"
      style={{
        opacity: active ? 1 : 0,
        transition: "opacity 0.5s ease 0.1s",
      }}
    >
      {/* Source nodes */}
      <div className="flex flex-col gap-3">
        {sources.map((src, i) => (
          <div
            key={src.label}
            className="flex items-center gap-1.5"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? "none" : "translateX(-6px)",
              transition: `opacity 0.4s ease ${i * 0.4}s, transform 0.4s ease ${i * 0.4}s`,
            }}
          >
            <div className="w-9 h-9 rounded-xl border border-[#EAEAE6] bg-white flex items-center justify-center shadow-sm shrink-0">
              <Landmark size={14} className="text-[#888]" />
            </div>
            <span className="text-[10px] text-[#AAA] font-light">{src.label}</span>
          </div>
        ))}
      </div>

      {/* Dotted connector converging curves (90 degree pipe style) */}
      <div className="flex-1 flex items-center px-1" style={{ height: "132px" }}>
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 100 132"
          preserveAspectRatio="none"
        >
          <defs>
            <style>
              {`
                @keyframes march-ants {
                  from { stroke-dashoffset: 14; }
                  to { stroke-dashoffset: 0; }
                }
                .running-line {
                  animation: march-ants 0.6s linear infinite;
                }
              `}
            </style>
          </defs>

          {/* Main merged trunk (from x=60 to Paymonei box) */}
          <mask id="trunk-mask" maskUnits="userSpaceOnUse">
             <path
               d="M 60 66 L 100 66"
               stroke="white"
               strokeWidth="20"
               fill="none"
               strokeDasharray="100"
               strokeDashoffset={active ? 0 : 100}
               style={{ transition: "stroke-dashoffset 0.3s ease 1.3s" }}
             />
          </mask>
          <path
            d="M 60 66 L 100 66"
            fill="none"
            stroke="#C0C0BA"
            strokeWidth="1.5"
            strokeDasharray="3 4"
            vectorEffect="non-scaling-stroke"
            className="running-line"
            mask="url(#trunk-mask)"
          />
          
          {sources.map((src, i) => {
            let d = "";
            let length = 150;
            if (i === 0) {
              d = "M 0 18 L 40 18 Q 50 18 50 28 L 50 56 Q 50 66 60 66";
            } else if (i === 1) {
              d = "M 0 66 L 60 66";
              length = 60;
            } else {
              d = "M 0 114 L 40 114 Q 50 114 50 104 L 50 76 Q 50 66 60 66";
            }
            
            const delay = i * 0.4 + 0.1;
            
            return (
              <g key={src.label}>
                <mask id={`mask-${i}`} maskUnits="userSpaceOnUse">
                   <path 
                     d={d} 
                     stroke="white" 
                     strokeWidth="20" 
                     fill="none" 
                     strokeDasharray={length} 
                     strokeDashoffset={active ? 0 : length} 
                     style={{ transition: `stroke-dashoffset 0.4s ease ${delay}s` }} 
                   />
                </mask>
                <path
                  d={d}
                  fill="none"
                  stroke="#C0C0BA"
                  strokeWidth="1.5"
                  strokeDasharray="3 4"
                  vectorEffect="non-scaling-stroke"
                  className="running-line"
                  mask={`url(#mask-${i})`}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Paymonei destination node */}
      <div
        style={{
          opacity: active ? 1 : 0,
          transform: active ? "none" : "translateX(6px)",
          transition: "opacity 0.4s ease 1.6s, transform 0.4s ease 1.6s",
        }}
      >
        <div className="w-14 h-14 rounded-2xl border border-[#0C0C0C] bg-[#0C0C0C] flex flex-col items-center justify-center gap-0.5 shadow-sm">
          <span className="text-white text-[9px] font-semibold tracking-wide leading-none">PAY</span>
          <span className="text-white text-[9px] font-semibold tracking-wide leading-none">MONEI</span>
        </div>
      </div>
    </div>
  );
}

function QuoteToCashWidget({ active }: { active: boolean }) {
  const nodes = [
    { emoji: "📄", name: "PDF Proposal" },
    { emoji: "⌨️", name: "Manual Data Entry" },
    { emoji: "🧾", name: "Invoice System" },
  ];
  const painPoints = ["Dropped line items", "Missed terms", "Delayed billing"];

  return (
    <div className="w-full space-y-4 pt-2">
      <div className="flex items-center w-full justify-between relative px-2">
        {nodes.map((n, i) => (
          <div key={n.name} className="flex flex-col items-center gap-2 relative z-10">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-sm border ${
                i === 1 ? "border-[#FCA5A5] bg-[#FEF2F2]" : "border-[#EAEAE6] bg-white"
              }`}
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "none" : "translateY(4px)",
                transition: `opacity 0.4s ease ${i * 0.25}s, transform 0.4s ease ${i * 0.25}s`,
              }}
            >
              <span className="text-lg leading-none">{n.emoji}</span>
            </div>
            <span
              className={`text-[9px] font-medium text-center whitespace-nowrap ${
                i === 1 ? "text-[#EF4444]" : "text-[#888]"
              }`}
              style={{
                opacity: active ? 1 : 0,
                transition: `opacity 0.4s ease ${i * 0.25 + 0.15}s`,
              }}
            >
              {n.name}
            </span>
            
            {/* Draw connector lines from center of current node to next node */}
            {i < nodes.length - 1 && (
              <div
                className="absolute top-[22px] left-[50%] w-[100px] sm:w-[120px] -z-10"
                style={{
                  opacity: active ? 1 : 0,
                  transition: `opacity 0.4s ease ${i * 0.25 + 0.2}s`,
                }}
              >
                <div className="w-full border-t border-dashed border-[#D5D5D0]" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Pain point tags */}
      <div
        className="flex gap-1.5 flex-wrap justify-center pt-2"
        style={{ opacity: active ? 0.9 : 0, transition: "opacity 0.4s ease 0.8s" }}
      >
        {painPoints.map((p) => (
          <span
            key={p}
            className="text-[9.5px] px-2 py-[3px] rounded-full border border-[#E0E0DB] text-[#888] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

const widgets = [QuoteToCashWidget, CollectionWidget, MultiRailWidget];

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
        {/* Section header */}
        <div className="mb-14">
          <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-5">
            Why teams choose Paymonei
          </p>
          <h2
            className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-tight tracking-[-0.03em] text-[#0C0C0C] max-w-lg"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            Where most billing workflows break
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pains.map((pain, i) => {
            const Widget = widgets[i];
            return (
              <div
                key={pain.id}
                className="rounded-2xl border border-[#EAEAE6] bg-[#FAFAF8] overflow-hidden flex flex-col"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(10px)",
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
              >
                {/* Illustration zone */}
                <div className="px-6 py-7 h-[200px] flex items-center border-b border-[#EBEBEB]">
                  <Widget active={visible} />
                </div>

                {/* Text zone */}
                <div className="px-6 py-6 flex flex-col gap-2.5">
                  <h3
                    className="text-[1.35rem] font-light leading-snug tracking-[-0.02em] text-[#0C0C0C]"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {pain.headline}
                  </h3>
                  <p className="text-[14px] text-[#666] leading-relaxed font-light">
                    {pain.body}
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
