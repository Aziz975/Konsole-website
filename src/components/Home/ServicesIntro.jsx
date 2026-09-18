import React from "react";
import CountUp from "./CountUp";

const stats = [
  {
    number: "500+",
    title: "Campaigns",
    subtitle: "Executed",
  },
  {
    number: "300+",
    title: "Brands &",
    subtitle: "Organizations",
  },
  {
    number: "50M+",
    title: "People Reached",
    subtitle: "Across Platforms",
  },
];

export default function ServicesIntro() {
  return (
    <section className="w-full bg-[#faf9f6] text-[#080b0b]">

      {/* ================= STATS ================= */}
      <div className="border-b border-[#d7d7d4] px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-[105px] xl:px-[60px]">

        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center lg:grid-cols-[minmax(420px,1.5fr)_repeat(3,minmax(180px,0.75fr))]">

          {/* Main statement */}
          <div className="relative flex items-center gap-7 pb-12 lg:pb-0 lg:pr-10">
            <div className="flex w-[25px] shrink-0 flex-col items-center justify-center gap-1 text-[34px] leading-[0.62] font-light text-[#080b0b] sm:w-[28px] sm:text-[38px]">
              <span>×</span>
              <span>×</span>
              <span>×</span>
              <span>×</span>
            </div>

            <h2 className="max-w-[500px] text-[42px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[50px] md:text-[55px] lg:text-[48px] xl:text-[54px]">
              Ideas that
              <br />
              create influence.
            </h2>
          </div>

          {/* Stats */}
          {stats.map((stat, index) => (
            <div key={index} className="border-t border-[#d0d0cd] py-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-0 xl:px-12">


              <div className="text-[48px] font-bold leading-[0.95] tracking-[-0.045em] sm:text-[54px] md:text-[58px] lg:text-[48px] xl:text-[54px]">
                <CountUp value={stat.number} duration={700} />

              </div>
              {stat.title}
              <br />
              {stat.subtitle}
            </div>
          ))}

        </div>
      </div>

      {/* ================= SERVICES INTRO ================= */}
      <div className="px-6 py-20 sm:px-10 sm:py-24 md:px-12 md:py-28 lg:px-[40px] lg:py-[78px] xl:px-[42px] xl:py-[80px]">

        <div className="mx-auto max-w-[1440px]">

          {/* Handwritten label */}
          <div className="mb-7 text-[31px] font-normal leading-none tracking-[-0.02em] sm:text-[35px] md:text-[39px] lg:text-[40px] xl:text-[42px]" style={{ fontFamily: "'Caveat', cursive" }}>
            Our Services
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16 xl:gap-[110px]">

            {/* Heading */}
            <div>
              <h2 className="max-w-[580px] text-[48px] font-bold leading-[1.02] tracking-[-0.05em] sm:text-[55px] md:text-[62px] lg:text-[58px] xl:text-[64px]">
                More Than Just
                <br />
                Marketing
              </h2>
            </div>

            {/* Description */}
            <div className="flex items-start lg:pt-[25px] xl:pt-[27px]">
              <p className="max-w-[650px] text-[20px] font-normal leading-[1.5] tracking-[-0.025em] sm:text-[22px] md:text-[24px] lg:text-[21px] xl:text-[24px]">
                From viral moments to policy conversations, we craft communication that gets noticed, builds credibility and drives real impact.
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}