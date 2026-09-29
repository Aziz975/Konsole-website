import React from "react";

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
    className="h-4 w-4"
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
      <h3 className="text-[15px] font-semibold leading-snug text-neutral-900">
        {title}
      </h3>
      <p className="mt-0.5 text-[13px] leading-snug text-neutral-700">{text}</p>
    </div>
  </li>
);

/* ---------- Main component ---------- */
export default function ORM() {
  return (
    <div className="w-full bg-white font-sans text-neutral-900">
      {/* ================= HERO ================= */}
      <section className="bg-[#F6F4EC]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-16 lg:px-10">
          {/* Left: text */}
          <div>
            <p className="text-base font-medium text-[#E8553D]">Our Services</p>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              <span className="block text-black">Managing reputation</span>
              <span className="block text-black">builds credibility.</span>
              <span className="block text-[#FBBF24]">Real perceptions builds</span>
              <span className="block text-[#E8553D]">building trust.</span>
            </h1>

            <p className="mt-5 text-base text-neutral-800">
              Strategies to shape and protect your digital perception
            </p>

            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Let&apos;s Create
              <ArrowIcon />
            </button>
          </div>

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
          <h2 className="text-center text-2xl font-bold sm:text-[28px]">
            Core ORM Deliverables
          </h2>

          <div className="mt-6 grid gap-8 md:grid-cols-3 md:gap-10">
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
                <h3 className="text-xl font-bold text-neutral-900 sm:text-2xl">
                  Let&apos;s Protect Your Institutional Legacy.
                </h3>
                <p className="mt-0.5 text-sm text-neutral-800">
                  Partner with us to build digital trust and enhance your public
                  perception.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Start a Conversation
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
