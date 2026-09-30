import React from "react";
import { motion } from "motion/react";
import CountUp from "./CountUp";

export default function AboutUs() {
  return (
    <div className="min-h-screen w-full bg-[#faf8f3] text-[#080b0e]">

      {/* =========================================================
          ABOUT HERO
      ========================================================= */}
      <section className="relative mx-[3px] h-[565px] overflow-hidden rounded-[7px] border border-[#222] bg-[#080b0e]">

        {/* Background Image */}
        <motion.img
          src="images/aboutimg.jpg"
          alt=""
          initial={{ scale: 1.06, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[rgba(5,15,22,0.58)]"></div>

        {/* Subtle Dark Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-[280px] bg-gradient-to-t from-[#080b0e] via-[#080b0e]/75 to-transparent"></div>

        {/* Hero Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-5 text-[11px] font-bold uppercase tracking-[1.8px] text-white/75 sm:text-[12px]"
          >
            A YOUNG AGENCY
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 55,
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
              duration: 0.85,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[42px] font-bold leading-[0.95] tracking-[-1.8px] text-white sm:text-[50px] md:text-[58px]"
          >
            About Us
          </motion.h1>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-[28px] left-[18px] right-[18px] sm:bottom-[32px] sm:left-[28px] sm:right-[28px]">

          {/* Yellow Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-[9px] inline-flex bg-[#ffc900] px-[10px] py-[4px] text-[9px] font-extrabold uppercase leading-none tracking-[0.5px] text-black sm:text-[10px]"
          >
            A YOUNG AGENCY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-[10px] text-[27px] font-extrabold leading-[1.05] tracking-[-1px] text-white sm:text-[32px] md:text-[36px]"
          >
            Ideas. Culture. Impact.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[520px] text-[16px] font-normal leading-[1.45] text-white/85 sm:text-[17px]"
          >
            Strategic Storytelling for a Louder Tomorrow. We blend creativity,
            culture, and strategy to help brands, leaders, and institutions stay
            relevant, trusted, and ahead.
          </motion.p>
        </div>
      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="relative px-[18px] pb-[65px] pt-[82px] text-center sm:px-[30px] sm:pt-[95px]">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-[16px] text-[10px] font-extrabold uppercase tracking-[1.8px] text-[#ff4d57] sm:text-[11px]"
        >
          Who We Are
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 35,
            filter: "blur(7px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-[620px] text-[28px] font-extrabold leading-[1.15] tracking-[-1px] text-[#080808] sm:text-[34px] md:text-[40px]"
        >
          We are a full service
          <br />
          digital agency.
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-[25px] max-w-[560px] text-[16px] font-normal leading-[1.6] text-[#58616a] sm:text-[17px]"
        >
          We create powerful ideas and meaningful experiences that help brands
          connect with people. From strategy to execution, we bring creativity,
          culture and technology together to create work that stands out.
        </motion.p>
      </section>


      {/* =========================================================
          STATS
      ========================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-[12px] overflow-hidden rounded-[14px] border-[2px] border-[#080808] bg-[#ffc900] sm:mx-[18px] md:mx-[30px]"
      >
        <div className="grid grid-cols-3 divide-x-[1px] divide-black">

          {/* Stat 1 */}
          <motion.div
            whileHover={{
              backgroundColor: "#ffd72f",
            }}
            transition={{ duration: 0.25 }}
            className="flex min-h-[90px] flex-col items-center justify-center px-2 text-center transition-transform duration-300 sm:min-h-[105px]"
          >
            <div className="text-[25px] font-extrabold leading-none tracking-[-1px] text-black sm:text-[30px]">
              <CountUp end={100} duration={1200} />+
            </div>

            <div className="mt-[6px] text-[8px] font-extrabold uppercase leading-none tracking-[0.5px] text-black sm:text-[9px]">
              Team Members
            </div>
          </motion.div>


          {/* Stat 2 */}
          <motion.div
            whileHover={{
              backgroundColor: "#ffd72f",
            }}
            transition={{ duration: 0.25 }}
            className="flex min-h-[90px] flex-col items-center justify-center px-2 text-center transition-transform duration-300 sm:min-h-[105px]"
          >
            <div className="text-[25px] font-extrabold leading-none tracking-[-1px] text-black sm:text-[30px]">
              <CountUp end={1450} duration={1200} />+
            </div>

            <div className="mt-[6px] text-[8px] font-extrabold uppercase leading-none tracking-[0.5px] text-black sm:text-[9px]">
              Completed Projects
            </div>
          </motion.div>


          {/* Stat 3 */}
          <motion.div
            whileHover={{
              backgroundColor: "#ffd72f",
            }}
            transition={{ duration: 0.25 }}
            className="flex min-h-[90px] flex-col items-center justify-center px-2 text-center transition-transform duration-300 sm:min-h-[105px]"
          >
            <div className="text-[25px] font-extrabold leading-none tracking-[-1px] text-black sm:text-[30px]">
              <CountUp end={9} duration={1200} />+
            </div>

            <div className="mt-[6px] text-[8px] font-extrabold uppercase leading-none tracking-[0.5px] text-black sm:text-[9px]">
              Years Experience
            </div>
          </motion.div>

        </div>
      </motion.section>


      {/* =========================================================
          BOTTOM SPACE
      ========================================================= */}
      <div className="h-[100px] sm:h-[115px]"></div>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-[12px] origin-left border-b border-[#d9d9d9] sm:mx-[18px] md:mx-[30px]"
      />

    </div>
  );
}