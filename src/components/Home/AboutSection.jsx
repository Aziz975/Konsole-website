import React from "react";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full overflow-hidden bg-[#faf9f5] text-[#101b2b]">

      {/* ================= ABOUT SECTION ================= */}
      <div className="mx-auto grid min-h-[500px] w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-14 sm:px-10 sm:py-16 md:px-12 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-16 xl:px-20">

        {/* ================= LEFT IMAGE ================= */}
        <div className="relative left-[-20%] flex min-h-[360px] items-center md:min-h-[410px] lg:min-h-[450px]">

          <img
            src="images/artwork2.png"
            alt="About Us"
            className="h-auto w-full max-w-[580px] object-contain"
          />

        </div>


        {/* ================= RIGHT CONTENT ================= */}
        <div className="w-full max-w-[600px] lg:justify-self-end">

          {/* Handwritten Label */}
          <p
            className="mb-3 text-[25px] leading-none text-[#101b2b] sm:text-[28px] md:text-[30px]"
            style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
          >
            About Us
          </p>


          {/* Main Heading */}
          <h2 className="max-w-[600px] text-[38px] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[46px] md:text-[52px] lg:text-[48px] xl:text-[52px]">
            Strategy. Creativity.
            <br />
            Real-World Impact.
          </h2>


          {/* Description */}
          <p className="mt-7 max-w-[590px] text-[16px] leading-[1.55] text-[#273344] sm:text-[17px] md:text-[18px]">
            Konsolde Group is a full-service communication and reputation
            management agency. We help brands, organizations and leaders
            navigate the modern media landscape with creativity, insight and
            integrity.
          </p>


          {/* Button */}
          <button className="mt-7 inline-flex items-center gap-10 rounded-full bg-[#101a20] px-7 py-4 text-[16px] font-semibold text-white sm:px-8 sm:py-[17px] sm:text-[17px]">
            <span>Explore More</span>
            <ArrowRight size={22} strokeWidth={1.8} />
          </button>

        </div>

      </div>


      {/* ================= TRUSTED BY SECTION ================= */}
      <div className="border-t border-[#deded9]">

        <div className="mx-auto w-full max-w-[1440px] px-6 py-6 sm:px-10 sm:py-7 md:px-12 lg:px-16 xl:px-20">

          {/* Trusted By */}
          <div className="mb-5">

            <p
              className="text-[25px] leading-none text-[#101b2b] sm:text-[28px] md:text-[30px]"
              style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
            >
              Trusted By
            </p>

            {/* Yellow underline */}
            <div className="mt-2 h-[5px] w-[105px] -rotate-[5deg] rounded-full bg-[#ffd400] sm:w-[115px]" />

          </div>


          {/* ================= LOGOS ================= */}
          <div className="grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-x-10 lg:gap-y-0">

            {/* TATA */}
            <div className="flex h-[65px] items-center justify-center">
              <img
                src=""
                alt="Tata"
                className="max-h-[65px] w-auto max-w-[125px] object-contain"
              />
            </div>


            {/* Reliance */}
            <div className="flex h-[65px] items-center justify-center">
              <img
                src="images/artwork.png"
                alt="Reliance"
                className="max-h-[65px] w-auto max-w-[145px] object-contain"
              />
            </div>


            {/* SBI */}
            <div className="flex h-[65px] items-center justify-center">
              <img
                src=""
                alt="SBI"
                className="max-h-[65px] w-auto max-w-[140px] object-contain"
              />
            </div>


            {/* Apollo Tyres */}
            <div className="flex h-[65px] items-center justify-center">
              <img
                src=""
                alt="Apollo Tyres"
                className="max-h-[70px] w-auto max-w-[150px] object-contain"
              />
            </div>


            {/* ONGC */}
            <div className="flex h-[65px] items-center justify-center">
              <img
                src=""
                alt="ONGC"
                className="max-h-[68px] w-auto max-w-[125px] object-contain"
              />
            </div>


            {/* Deloitte */}
            <div className="flex h-[65px] items-center justify-center">
              <img
                src=""
                alt="Deloitte"
                className="max-h-[55px] w-auto max-w-[145px] object-contain"
              />
            </div>


            {/* More */}
            <div className="flex h-[65px] items-center justify-center">
              <span className="text-[18px] font-semibold text-[#283344] sm:text-[19px]">
                &amp; More
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}