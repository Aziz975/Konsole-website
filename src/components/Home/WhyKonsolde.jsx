import React from "react";
import { ArrowRight } from "lucide-react";

export default function WhyKonsolde() {
  return (
    <>
      {/* ================= WHY KONSOLDE SECTION ================= */}
      <section className=" mt-5 relative w-full overflow-hidden bg-[#0b1113] text-white">
        <div className="mx-auto grid min-h-[520px] w-full max-w-[1440px] grid-cols-1 items-center px-6 py-14 sm:px-10 sm:py-16 md:px-12 lg:min-h-[560px] lg:grid-cols-2 lg:px-16 lg:py-16 xl:px-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-20 w-full max-w-[510px]">

            {/* Handwritten Heading */}
            <p className="mb-4 text-[27px] leading-none text-white sm:text-[30px] md:text-[32px]" style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}>
              Why Konsolde?
            </p>

            {/* Main Heading */}
            <h2 className="max-w-[470px] text-[40px] font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-[48px] md:text-[54px] lg:text-[48px] xl:text-[52px]">
              Because Ideas
              <br />
              Need the Right
              <br />
              Backing.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[470px] text-[16px] leading-[1.45] text-white/90 sm:text-[17px] md:text-[18px]">
              We don’t just create campaigns, we build momentum. With a sharp
              understanding of people, culture and policy, we turn communication
              into a force for change.
            </p>

            {/* CTA */}
            <a href="#contact" className="animate-bounce mt-7 inline-flex items-center gap-9 rounded-full bg-white px-7 py-4 text-[15px] font-bold text-[#11181b] sm:px-8 sm:py-[17px] sm:text-[16px]">
              <span className="animate-bounce" >Let’s Work Together</span>
              <ArrowRight size={22} strokeWidth={1.8} />
            </a>

          </div>


          {/* ================= RIGHT SINGLE IMAGE ================= */}
          <div className="relative mt-12 flex min-h-[350px] w-full items-center justify-center lg:mt-0 lg:min-h-[500px]">

            <img
              src="images/artwork3.png"
              alt="Why Konsolde artwork"
              className="h-auto w-full max-w-[720px] object-contain lg:absolute lg:right-[-5%] lg:top-1/2 lg:w-[115%] lg:max-w-none lg:-translate-y-1/2"
            />

          </div>

        </div>
      </section>


  
    </>
  );
}