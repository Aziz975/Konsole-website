import React from "react";

const differences = [
  {
    number: "01.",
    title: "Creative Minds",
    description: "Unconventional ideas turned into impactful campaign narratives.",
  },
  {
    number: "02.",
    title: "Strategic Thinking",
    description: "Data-backed insight informing every creative and policy decision.",
  },
  {
    number: "03.",
    title: "Real Connections",
    description: "Authentic engagement across digital PR, media, and communities.",
  },
  {
    number: "04.",
    title: "Lasting Impact",
    description: "Building long-term influence and trust for brands and institutions.",
  },
];

export default function WhyDifferent() {
  return (
    <section className="min-h-screen w-full bg-white px-3 py-3 font-['Arial',sans-serif] text-[#111] sm:px-5 sm:py-5 md:px-8 md:py-8 lg:px-10 lg:py-10">

      <div className="mx-auto flex min-h-[calc(100vh-24px)] w-full max-w-[1400px] flex-col sm:min-h-[calc(100vh-40px)] md:min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)]">

        {/* ================= HEADING ================= */}
        <div>
          <h1 className="text-[50px] font-bold leading-[1] tracking-[-1.5px] sm:text-[36px] md:text-[44px] lg:text-[52px]">
            Why We Are Different?
          </h1>

          {/* Intro */}
          <div className="mt-3 flex w-full border-l-[4px] border-[#ef2929] bg-[#f1f3f5] px-3 py-3 sm:mt-4 sm:px-4 sm:py-4 md:px-5">
            <p className="max-w-[1100px] text-[10px] font-normal leading-[1.45] sm:text-[12px] md:text-[13px] lg:text-[14px]">
              We work outside the mainstream, avoiding cliché solutions. We
              believe in building proper strategy, deep insights, and rigorous
              research analysis to deliver meaningful digital experiences.
            </p>
          </div>
        </div>

        {/* ================= DIFFERENCE CARDS ================= */}
        <div className="mt-3 grid w-full grid-cols-1 gap-2 sm:mt-4 sm:grid-cols-2 sm:gap-3 md:mt-5 md:gap-4">

          {differences.map((item) => (
            <div
              key={item.number}
              className="flex min-h-[72px] flex-col justify-center border-[2px] border-[#222] bg-white px-2.5 py-2.5 sm:min-h-[82px] sm:px-3 md:min-h-[90px] md:px-4"
            >
              <h2 className="text-[12px] font-extrabold leading-[1.05] sm:text-[14px] md:text-[16px]">
                {item.number} {item.title}
              </h2>

              <p className="mt-1 max-w-[500px] text-[9px] leading-[1.25] text-[#333] sm:text-[10px] md:text-[11px] lg:text-[12px]">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        {/* ================= CTA ================= */}
        <div className="relative mt-3 flex flex-1 items-center justify-center overflow-hidden rounded-[5px] border-[2px] border-[#ffc800] bg-[#171717] px-5 py-8 text-center sm:mt-4 sm:min-h-[150px] md:mt-5 md:min-h-[180px] lg:min-h-[210px]">

          {/* Subtle background */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#171717_0%,#111111_50%,#1d1d1d_100%)]"></div>

          {/* Content */}
          <div className="relative z-10">

            <p className="text-[8px] font-extrabold uppercase tracking-[1.5px] text-[#ffc800] sm:text-[9px] md:text-[10px]">
              HAVE AN IDEA?
            </p>

            <h2 className="mt-1 text-[18px] font-extrabold leading-none text-white sm:text-[22px] md:text-[28px] lg:text-[32px]">
              Start Your Project With Us
            </h2>

            <p className="mt-2 text-[9px] text-white/75 sm:text-[10px] md:text-[12px]">
              We are here to help you bring your ideas to life.
            </p>

            <button className="mt-3 rounded-full bg-[#f42b2b] px-5 py-2 text-[9px] font-extrabold uppercase tracking-[0.4px] text-white transition-transform duration-200 hover:scale-105 sm:px-6 sm:py-2.5 sm:text-[10px] md:text-[11px]">
              LET'S TALK!
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}