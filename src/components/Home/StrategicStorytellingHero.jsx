import React from "react";
import { ArrowRight } from "lucide-react";

export default function StrategicStorytellingHero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-[#0b0f10] text-white">
      <div className="mx-auto flex min-h-[650px] w-full max-w-[1440px] flex-col lg:flex-row">

        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-20 flex w-full flex-col justify-center px-6 py-16 sm:px-10 md:px-14 lg:w-[48%] lg:px-14 lg:py-20 xl:px-[60px]">

          {/* Eyebrow */}
          <div className="mb-6 text-[25px] leading-none text-white sm:text-[28px] md:text-[30px] lg:text-[29px] xl:text-[31px]" style={{ fontFamily: "cursive" }}>
            Ideas. Culture. Impact.
          </div>

          {/* Heading */}
          <h1 className="max-w-[560px] text-[50px] font-extrabold leading-[0.96] tracking-[-0.045em] sm:text-[60px] md:text-[68px] lg:text-[64px] xl:text-[72px]">

            <span className="block text-white">
              Strategic
            </span>

            <span className="block text-white">
              Storytelling
            </span>

            <span className="block">
              <span className="text-[#ff6969]">
                for a
              </span>{" "}
              <span className="text-[#ffd21c]" style={{ fontFamily: "cursive" }}>
                Louder
              </span>
            </span>

            <span className="block text-white">
              Tomorrow.
            </span>

          </h1>

          {/* Description */}
          <p className="mt-8 max-w-[500px] text-[17px] font-normal leading-[1.5] tracking-[-0.01em] text-[#f1f3f3] sm:text-[18px] md:text-[19px] lg:mt-9">
            We blend creativity, culture and strategy to help brands, leaders and institutions stay relevant, trusted and ahead.
          </p>

          {/* CTA */}
          <div className="mt-8 sm:mt-9">
            <button className="group inline-flex h-[56px] items-center gap-7 rounded-full bg-white px-7 text-[16px] font-semibold text-[#111516] transition-all duration-300 hover:gap-9 hover:bg-[#f5f5f5] sm:h-[58px] sm:px-9 sm:text-[17px]">
              <span>Explore Our Services</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.2} />
            </button>
          </div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}
     

      </div>
    </section>
  );
}