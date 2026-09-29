import React from "react";
 
/* =========================================================
   TYPOGRAPHY (VideoProduction / StrategicStorytellingHero wali styling)
   - Font family: inherit (koi custom font nahi, project ka default)
   - Headings : bold, tight tracking (-0.045em), tight leading
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
const CheckIcon = () => (
  <svg
    className="mt-1 h-4 w-4 shrink-0 text-neutral-900"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);
 
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
    className="h-14 w-14 shrink-0"
    viewBox="0 0 48 56"
    fill="none"
    stroke="#1a1a1a"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M24 3l19 7v16c0 12-8 20-19 25C13 46 5 38 5 26V10l19-7z" fill="#F5A623" />
    <path d="M15 27l6.5 6.5L34 20" />
  </svg>
);
 
/* ---------- Data ---------- */
const deliverables = {
  left: [
    {
      title: "Comprehensive Sentiment Analysis",
      text: "Monitor mentions and classify public opinion.",
    },
    {
      title: "Rapid Crisis Response",
      text: "Mitigate negative press and control narratives quickly.",
    },
  ],
  middle: [
    {
      title: "Proactive Content Strategy",
      text: "Create positive stories to push down negative results.",
    },
    {
      title: "Institutional Identity Management",
      text: "Protect and shape the long-term legacy of your brand.",
      offset: true, // sits lower than the first item, like in the design
    },
  ],
  right: [
    {
      title: "Digital Trust Building",
      text: "Foster online credibility through transparency and engagement.",
    },
  ],
};
 
const Deliverable = ({ title, text, offset }) => (
  <li className={`flex gap-2 ${offset ? "mt-6" : ""}`}>
    <CheckIcon />
    <div>
      <h3 className="text-[17px] font-bold leading-[1.1] tracking-[-0.03em] text-neutral-900">
        {title}
      </h3>
      <p className={`${bodyStyle} mt-1 text-[14px] text-neutral-700`}>{text}</p>
    </div>
  </li>
);
 
/* ---------- Main component ---------- */
export default function ORM() {
  return (
    <div className="w-full bg-white text-neutral-900">
      {/* ================= HERO ================= */}
      <section className="bg-[#F6F4EC]">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-14 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
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
              <span className="block text-black">Managing reputation</span>
              <span className="block text-black">builds credibility.</span>
              <span className="block text-[#FBBF24]">Real perceptions builds</span>
              <span className="block text-[#E8553D]">building trust.</span>
            </h1>
 
            {/* Description */}
            <p
              className={`${bodyStyle} mt-8 max-w-[500px] text-[17px] text-neutral-800 sm:text-[18px] md:text-[19px]`}
            >
              Strategies to shape and protect your digital perception
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
              src="/images/image11.png"
              alt="Reputation dashboard with trust score and reviews"
              className="w-full max-w-[520px] object-cover"
            />
          </div>
        </div>
      </section>
 
      {/* ================= CORE DELIVERABLES ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10">
          <h2
            className={`${h2Style} text-center text-[30px] sm:text-[38px] md:text-[42px]`}
          >
            Core ORM Deliverables
          </h2>
 
          <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
            <ul className="space-y-4">
              {deliverables.left.map((d) => (
                <Deliverable key={d.title} {...d} />
              ))}
            </ul>
 
            <ul className="space-y-4">
              {deliverables.middle.map((d) => (
                <Deliverable key={d.title} {...d} />
              ))}
            </ul>
 
            <ul className="space-y-4">
              {deliverables.right.map((d) => (
                <Deliverable key={d.title} {...d} />
              ))}
            </ul>
          </div>
        </div>
      </section>
 
      {/* ================= CTA BANNER ================= */}
      <section className="relative bg-white pb-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="flex flex-col items-start gap-5 rounded-xl bg-[#FBBF24] px-6 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <ShieldIcon />
              <div>
                <h3 className="text-[24px] font-bold leading-[1.05] tracking-[-0.04em] text-neutral-900 sm:text-[28px]">
                  Let&apos;s Protect Your Institutional Legacy.
                </h3>
                <p
                  className={`${bodyStyle} mt-1 text-[15px] text-neutral-900 sm:text-[16px]`}
                >
                  Partner with us to build digital trust and enhance your public
                  perception.
                </p>
              </div>
            </div>
 
            <button
              type="button"
              className={`${btnText} group inline-flex h-[56px] shrink-0 items-center gap-6 rounded-full bg-white px-7 text-neutral-900 transition-all duration-300 hover:gap-8 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2`}
            >
              <span>Start a Conversation</span>
              <ArrowIcon />
            </button>
          </div>
        </div>
 
        {/* BOTTOM DOODLE PATTERN SPACE
            Yahan light yellow doodle background image aa sakti hai.
            Example: <div className="absolute inset-x-0 bottom-0 h-16 bg-[url('/doodle.png')] opacity-30" /> */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
          aria-hidden="true"
        />
      </section>
    </div>
  );
}
