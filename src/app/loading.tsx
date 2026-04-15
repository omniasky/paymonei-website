export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#FAFAF8", fontFamily: "'Geist', system-ui, sans-serif" }}
    >
      {/* Centered wordmark + subtle pulse bar */}
      <div className="flex flex-col items-center gap-8">
        {/* Wordmark */}
        <p
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            fontWeight: 350,
            letterSpacing: "-0.03em",
            color: "#0C0C0C",
          }}
        >
          Paymonei
        </p>

        {/* Animated thin progress bar */}
        <div
          style={{
            width: "120px",
            height: "1px",
            backgroundColor: "#EAEAE6",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "40%",
              backgroundColor: "#0C0C0C",
              borderRadius: "999px",
              animation: "paymonei-slide 1.4s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Keyframe injection */}
      <style>{`
        @keyframes paymonei-slide {
          0%   { transform: translateX(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateX(350%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}