import React from "react";
import { motion } from "motion/react";
import CountUp from "./CountUp";

export default function AboutUs() {
  return (
    <div className="min-h-screen w-full   bg-[#faf8f3] text-[#080b0e]">
      {/* ================= ABOUT HERO ================= */}
      <section className="relative mx-[3px] h-[565px] overflow-hidden rounded-[7px] border border-[#222] bg-[#d9d9d9]">

        {/* Background Image */}
        <img
          src="images/aboutimg.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[rgba(5,15,22,0.58)]"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
          <p className="mb-5 text-[12px] font-bold tracking-[1px] text-white/80">A YOUNG AGENCY</p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[42px] font-bold leading-[1] tracking-[-1.5px] text-white sm:text-[48px]"
          >
            About Us
          </motion.h1>
        </div>

        {/* Bottom Dark Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-[230px] bg-gradient-to-t from-black/90 via-black/65 to-transparent"></div>

        {/* Bottom Content */}
        <div className="absolute bottom-[28px] left-[18px] right-[18px]">
          <div className="mb-[8px] inline-flex bg-[#ffc900] px-[10px] py-[3px] text-[10px] font-extrabold uppercase leading-none tracking-[0.2px] text-black">
            A YOUNG AGENCY
          </div>

          <h2 className="mb-[10px] text-[27px] font-extrabold leading-[1.05] tracking-[-0.8px] text-white sm:text-[30px]">
            Ideas. Culture. Impact.
          </h2>

          <p className="max-w-[475px] text-[17px] font-normal leading-[1.35] text-white/90">
            Strategic Storytelling for a Louder Tomorrow. We blend creativity,
            culture, and strategy to help brands, leaders, and institutions stay
            relevant, trusted, and ahead.
          </p>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="relative px-[18px] pb-[38px] pt-[72px] text-center">


        <h2 className="mx-auto max-w-[390px] text-[27px] font-extrabold leading-[1.25] tracking-[-0.8px] text-[#080808] sm:text-[32px]">
          We are a full service
          <br />
          digital agency.
        </h2>

        <p className="mx-auto mt-[25px] max-w-[475px] text-[17px] font-normal leading-[1.55] text-[#222]">
          We create powerful ideas and meaningful experiences that help brands
          connect with people. From strategy to execution, we bring creativity,
          culture and technology together to create work that stands out.
        </p>
      </section>

      {/* ================= STATS ================= */}
      <section className="mx-[3px] overflow-hidden rounded-[5px] border-[2px] border-black bg-[#ffc900]">
        <div className="grid grid-cols-3 divide-x-[1px] divide-black">

          {/* Stat 1 */}
          <div className="flex min-h-[53px] flex-col items-center justify-center px-1 text-center">
            <div className="text-[22px] font-extrabold leading-none tracking-[-0.5px] text-black">
              <CountUp end={100} duration={1200} />+
            </div>
            <div className="mt-[3px] text-[8px] font-extrabold uppercase leading-none text-black">
              Team Members
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex min-h-[53px] flex-col items-center justify-center px-1 text-center">
            <div className="text-[22px] font-extrabold leading-none tracking-[-0.5px] text-black">
            <CountUp end={1450} duration={1200} />+
            </div>
            <div className="mt-[3px] text-[8px] font-extrabold uppercase leading-none text-black">
              Completed Projects
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex min-h-[53px] flex-col items-center justify-center px-1 text-center">
            <div className="text-[22px] font-extrabold leading-none tracking-[-0.5px] text-black">
              <CountUp end={9} duration={1200} />+
            </div>
            <div className="mt-[3px] text-[8px] font-extrabold uppercase leading-none text-black">
              Years Experience
            </div>
          </div>

        </div>
      </section>

      {/* Empty spacing matching screenshot */}
      <div className="h-[115px]"></div>

      <div className="mx-[3px] border-b border-[#d9d9d9]"></div>
    </div>
  );
}