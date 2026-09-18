import React from "react";
import { ArrowRight } from "lucide-react";

export default function CreateTogether() {
  return (
    <section className="mb-15 relative w-full overflow-hidden bg-[#faf9f6]">
      <div className="relative mx-auto flex min-h-[190px] w-full max-w-[1440px] items-center justify-center px-5 py-8 sm:min-h-[200px] sm:px-8 md:min-h-[210px] lg:min-h-[220px] lg:px-12 xl:px-16">

        {/* ================= LEFT DOODLE ================= */}
        <div className="absolute left-[22%] top-1/2 hidden h-[90px] w-[90px] -translate-y-1/2 sm:block md:left-[23%] lg:left-[24%] xl:left-[25%]">
          <img
            src="images/doodle_star_transparent.png"
            alt="Decorative doodle"
            className="h-full w-full object-contain"
          />
        </div>


        {/* ================= CENTER CONTENT ================= */}
        <div className="relative z-10 flex flex-col items-center text-center">

          {/* Handwritten Heading */}
          <p
            className="mb-[3px] text-[25px] font-bold leading-none text-[#11191f]  sm:text-[27px] md:text-[29px] lg:text-[30px]"
            style={{ fontFamily: "'Caveat', cursive"}}
          >
            Let’s Create
          </p>

          {/* Main Heading */}
          <h2 className="text-[35px] font-bold leading-[0.96] tracking-[-0.045em] text-[#101820] sm:text-[41px] md:text-[47px] lg:text-[50px] xl:text-[52px]">
            <span className="block">Something</span>
            <span className="block">Meaningful Together.</span>
          </h2>

        </div>


        {/* ================= RIGHT DOODLE ================= */}
        <div className="absolute right-[22%] top-1/2 hidden h-[85px] w-[85px] -translate-y-1/2 sm:block md:right-[23%] lg:right-[24%] xl:right-[25%]">
          <img
            src="images/doodle_arrow_transparent.png"
            alt="Decorative doodle"
            className="h-full w-full object-contain"
          />
        </div>


        {/* ================= GET IN TOUCH ================= */}
        <a
          href="#contact"
          className="absolute right-5 top-1/2 hidden -translate-y-1/2 items-center gap-7 rounded-full bg-[#111a1f] px-7 py-4 text-[14px] font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#08766d] sm:flex md:right-8 md:px-8 md:py-[17px] md:text-[15px] lg:right-12 xl:right-16"
        >
          <span>Get in Touch</span>
          <ArrowRight size={21} strokeWidth={1.8} />
        </a>


        {/* ================= MOBILE BUTTON ================= */}
        <a
          href="#contact"
          className="mt-5 flex items-center gap-6 rounded-full bg-[#111a1f] px-7 py-3.5 text-[14px] font-semibold text-white sm:hidden"
        >
          <span>Get in Touch</span>
          <ArrowRight size={20} strokeWidth={1.8} />
        </a>

      </div>
    </section>
  );
}