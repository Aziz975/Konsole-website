import React from "react";
 
/* =========================================================
   TYPOGRAPHY (StrategicStorytellingHero wali styling)
   - Font family: inherit (koi custom font nahi, project ka default)
   - Headings : bold, tight tracking (-0.045em), tight leading (0.96)
   - Eyebrow  : cursive
   - Body     : normal weight, leading 1.5, tracking -0.01em
   - Buttons  : semibold 16-17px
========================================================= */
const h1Style = "font-bold leading-[0.96] tracking-[-0.045em]";
const h2Style = "font-bold leading-[1.02] tracking-[-0.045em]";
const bodyStyle = "font-normal leading-[1.5] tracking-[-0.01em]";
const btnText = "text-[16px] font-semibold sm:text-[17px]";
const cursive = { fontFamily: "cursive" };
 
/* ---------- Small inline icons ---------- */
const ArrowIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
 
const ShieldIcon = () => (
  <svg
    className="h-14 w-12 shrink-0"
    viewBox="0 0 48 56"
    fill="none"
    stroke="#1a1a1a"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path
      d="M24 3l19 7v16c0 12-8 20-19 25C13 46 5 38 5 26V10l19-7z"
      fill="#E8553D"
    />
    <path d="M15 27l6.5 6.5L34 20" />
  </svg>
);
 
/* ---------- Data ---------- */
const steps = [
  {
    no: "01",
    title: "Discovery and briefing",
    text: "We learn your goals, audience, and challenges.",
  },
  {
    no: "02",
    title: "Strategy and concept",
    text: "We shape a tailored plan and creative direction.",
  },
  {
    no: "03",
    title: "Execution",
    text: "We put the plan into action with regular updates.",
  },
  {
    no: "04",
    title: "Review and optimize",
    text: "We measure results and keep improving.",
    highlight: true,
  },
];
 
const metrics = [
  {
    title: "View Count Uplift",
    value: "+120%",
    text: "Increased organic and paid views.",
  },
  {
    title: "Engagement Uplift",
    value: "+95%",
    text: "Boost in likes, shares, and comments.",
  },
  {
    title: "Lead Conversion",
    value: "4.5 / 5.0",
    text: "Distribution, Analytics, Performance Tracking",
  },
];
 
/* ---------- Main component ---------- */
export default function VideoProduction() {
  return (
    <div className="w-full bg-white text-neutral-900">
      {/* =====================================================
          SECTION 1 : OUR SERVICES (HERO)
      ===================================================== */}
      <section className="bg-[#F1EFD8]">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          {/* Left: text */}
          <div>
            {/* Eyebrow (cursive) */}
            <p
              className=" mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f04444] sm:text-[11px] md:text-[12px]"
            >
              Our Services
            </p>
 
            {/* H1 */}
            <h1
              className={`${h1Style} text-[40px] sm:text-[52px] md:text-[56px] lg:text-[44px] xl:text-[48px]`}
            >
              <span className="block text-black">creating impact</span>
              <span className="block text-black">builds presence.</span>
              <span className="block text-[#F2A900]">
                Visual storytelling builds
              </span>
              <span className="block text-[#B3361F]">building audiences.</span>
            </h1>
 
            {/* Description */}
            <p
              className={`${bodyStyle} mt-8 max-w-[500px] text-[17px] text-neutral-900 sm:text-[18px] md:text-[19px]`}
            >
              Tailored video content to captivate and engage your target market.
            </p>
 
            {/* CTA */}
            <button
              type="button"
              className={`${btnText} group mt-8 inline-flex h-[56px] items-center gap-7 rounded-full bg-black px-7 text-white transition-all duration-300 hover:gap-9 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:h-[58px] sm:px-9`}
            >
              <span>Let&apos;s Create</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </button>
          </div>
 
          {/* Right: HERO IMAGE */}
          <div className="flex w-full items-center justify-center">
            <img
              src="/images/image12.png"
              alt="Video production workflow"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>
 
      {/* =====================================================
          SECTION 2 : HOW WE WORK
      ===================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-12 lg:px-10">
          <div className="text-center">
            {/* Eyebrow (cursive) */}
            <p
              className=" mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f04444] sm:text-[11px] md:text-[12px]"
            >
              How we work
            </p>
 
            <h2
              className={`${h2Style} mt-4 text-[32px] text-neutral-900 sm:text-[40px] md:text-[46px]`}
            >
              A simple process that{" "}
              <span className="text-[#C8412B]">delivers results.</span>
            </h2>
 
            <p
              className={`${bodyStyle} mx-auto mt-6 max-w-2xl text-[17px] text-neutral-900 sm:text-[18px] md:text-[19px]`}
            >
              From first conversation to measurable impact, here is how we work
              with you.
            </p>
          </div>
 
          <div className="relative mt-10">
            {/* Dashed connector line (desktop only) */}
            <div
              className="absolute left-[12.5%] right-[12.5%] top-[17px] hidden border-t border-dashed border-neutral-800 md:block"
              aria-hidden="true"
            />
 
            <ol className="relative grid gap-6 md:grid-cols-4 md:gap-3">
              {steps.map((s, i) => (
                <li key={s.no} className="flex flex-col">
                  {/* Numbered circle */}
                  <div
                    className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-neutral-900 text-sm font-semibold ${
                      s.highlight
                        ? "bg-[#C8412B] text-white"
                        : "bg-[#F2A900] text-neutral-900"
                    }`}
                  >
                    {i + 1}
                  </div>
 
                  {/* Card (square corners, thin black border) */}
                  <div className="mt-3 flex-1 border border-neutral-900 bg-white px-3 pb-4 pt-3">
                    <span
                      className={`text-[28px] font-bold leading-none tracking-[-0.045em] ${
                        s.highlight ? "text-[#C8412B]" : "text-[#F2A900]"
                      }`}
                    >
                      {s.no}
                    </span>
                    <h3 className="mt-5 text-[17px] font-bold leading-[1.1] tracking-[-0.03em] text-neutral-900">
                      {s.title}
                    </h3>
                    <p
                      className={`${bodyStyle} mt-1.5 text-[14px] text-neutral-800`}
                    >
                      {s.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
 
          <div className="mt-8 text-center">
            <button
              type="button"
              className={`${btnText} group inline-flex h-[56px] items-center gap-7 bg-black px-8 text-white transition-all duration-300 hover:gap-9 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2`}
            >
              <span>Start your project</span>
              <ArrowIcon />
            </button>
          </div>
        </div>
      </section>
 
      {/* =====================================================
          SECTION 3 : QUANTIFIABLE IMPACT + STORYBOARD CTA
      ===================================================== */}
      <section className="relative bg-white pb-16">
        <div className="mx-auto max-w-6xl px-6 pt-8 lg:px-10">
          <h2
            className={`${h2Style} text-center text-[30px] sm:text-[38px] md:text-[42px]`}
          >
            Quantifiable Impact: Proven Results
          </h2>
 
          {/* Metric cards */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {metrics.map((m) => (
              <div
                key={m.title}
                className="flex items-center justify-between gap-3 rounded-md border border-[#E2DEC8] bg-[#F5F2E3] p-5"
              >
                <div>
                  <h3 className="text-[18px] font-bold leading-[1.1] tracking-[-0.03em] text-neutral-900">
                    {m.title}
                  </h3>
                  <p className="mt-1 text-[40px] font-bold leading-none tracking-[-0.045em] text-neutral-900">
                    {m.value}
                  </p>
                  <p
                    className={`${bodyStyle} mt-2 text-[14px] text-neutral-800`}
                  >
                    {m.text}
                  </p>
                </div>
 
                {/* ICON / IMAGE SPACE
                    Example: <img src="/icon-views.png" alt="" className="h-full w-full object-contain" /> */}
                <div className="h-20 w-20 shrink-0" aria-hidden="true" />
              </div>
            ))}
          </div>
 
          {/* CTA banner */}
          <div className="mt-5 flex flex-col items-start gap-4 rounded-md bg-[#F6B21B] px-6 py-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <ShieldIcon />
              <div>
                <h3 className="text-[24px] font-bold leading-[1.05] tracking-[-0.04em] text-neutral-900 sm:text-[28px]">
                  Let&apos;s Storyboard Your Success.
                </h3>
                <p
                  className={`${bodyStyle} mt-1 text-[15px] text-neutral-900 sm:text-[16px]`}
                >
                  Partner with us to create cinematic experiences and build
                  audience trust.
                </p>
              </div>
            </div>
 
            {/* BANNER IMAGE SPACE (optional) */}
            <div
              className="hidden h-14 w-44 shrink-0 lg:block"
              aria-hidden="true"
            />
 
            <button
              type="button"
              className={`${btnText} group inline-flex h-[56px] shrink-0 items-center gap-6 rounded-full bg-white px-7 text-neutral-900 transition-all duration-300 hover:gap-8 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2`}
            >
              <span>Start a Conversation</span>
              <ArrowIcon />
            </button>
          </div>
        </div>
 
        {/* BOTTOM DOODLE PATTERN SPACE (optional)
            Example: <div className="absolute inset-x-0 bottom-0 h-12 bg-[url('/doodle.png')] bg-repeat opacity-30" /> */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-12"
          aria-hidden="true"
        />
      </section>
    </div>
  );
}
 