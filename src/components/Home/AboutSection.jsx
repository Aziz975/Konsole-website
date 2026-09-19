import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full overflow-hidden bg-[#faf9f5] text-[#101b2b]">

      {/* ================= ABOUT SECTION ================= */}
      <div className="mx-auto grid min-h-[500px] w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-14 sm:px-10 sm:py-16 md:px-12 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-16 xl:px-20">

        {/* ================= LEFT IMAGE ================= */}
        <div className="relative left-[-20%] flex min-h-[360px] items-center md:min-h-[410px] lg:min-h-[450px]">
          <div className={`w-full ${visible ? "animate-[fadeUp_1s_cubic-bezier(0.22,1,0.36,1)_0.1s_forwards]" : "translate-y-16 opacity-0"}`}>
            <img
              src="images/artwork2.png"
              alt="About Us"
              className="h-auto w-full max-w-[580px] object-contain"
            />
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="w-full max-w-[600px] lg:justify-self-end">

          {/* Handwritten Label */}
          <p
            className={`mb-3 text-[25px] leading-none text-[#101b2b] sm:text-[28px] md:text-[30px] ${visible ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.2s_forwards]" : "translate-y-12 opacity-0"}`}
            style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
          >
            About Us
          </p>

          {/* Main Heading */}
          <h2 className="max-w-[600px] text-[38px] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[46px] md:text-[52px] lg:text-[48px] xl:text-[52px]">
            {"Strategy. Creativity.".split("").map((letter, index) => (
              <span key={index} className="inline-block overflow-hidden">
                <span className={`inline-block ${visible ? "animate-[letterReveal_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]" : "translate-y-[120%] opacity-0"}`} style={{ animationDelay: `${index * 0.045}s` }}>
                  {letter === " " ? "\u00A0" : letter}
                </span>
              </span>
            ))}

            <br />

            {"Real-World Impact.".split("").map((letter, index) => (
              <span key={index} className="inline-block overflow-hidden">
                <span className={`inline-block ${visible ? "animate-[letterReveal_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]" : "translate-y-[120%] opacity-0"}`} style={{ animationDelay: `${0.85 + index * 0.045}s` }}>
                  {letter === " " ? "\u00A0" : letter}
                </span>
              </span>
            ))}
          </h2>
          {/* Description */}
          <p className={`mt-7 max-w-[590px] text-[16px] leading-[1.55] text-[#273344] sm:text-[17px] md:text-[18px] ${visible ? "animate-[fadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_1.8s_forwards]" : "translate-y-12 opacity-0"}`}>
            Konsolde Group is a full-service communication and reputation
            management agency. We help brands, organizations and leaders
            navigate the modern media landscape with creativity, insight and
            integrity.
          </p>

          {/* Button */}
          <div className={`${visible ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.55s_forwards]" : "translate-y-12 opacity-0"}`}>
            <button className="mt-7 inline-flex items-center gap-10 rounded-full bg-[#101a20] px-7 py-4 text-[16px] font-semibold text-white sm:px-8 sm:py-[17px] sm:text-[17px]">
              <span>Explore More</span>
              <ArrowRight size={22} strokeWidth={1.8} />
            </button>
          </div>

        </div>
      </div>

      {/* ================= TRUSTED BY SECTION ================= */}
      <div className="border-t border-[#deded9]">

        <div className="mx-auto w-full max-w-[1700px] px-6 py-6 sm:px-10 sm:py-7 md:px-12 lg:px-16 xl:px-20">

          {/* Trusted By */}
          <div className={`mb-5 ${visible ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.65s_forwards]" : "translate-y-12 opacity-0"}`}>

            <p
              className="text-[25px] leading-none text-[#101b2b] sm:text-[28px] md:text-[30px]"
              style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
            >
              Trusted By
            </p>

            {/* Yellow underline */}
            <div className="mt-2 h-[5px] w-[105px] -rotate-[5deg] rounded-full bg-[#ffd400] sm:w-[115px]" />

          </div>

          {/* ================= INFINITE LOGO SLIDER ================= */}
          <div className={`relative w-full overflow-hidden ${visible ? "animate-[fadeUp_1s_cubic-bezier(0.22,1,0.36,1)_0.75s_forwards]" : "translate-y-14 opacity-0"}`}>
            <div className="logo-track flex w-max items-center">

              {/* FIRST SET */}
              <div className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16 md:gap-20 md:pr-20 lg:gap-24 lg:pr-24">

                {/* TATA */}
                <div className="flex h-[65px] w-[145px] shrink-0 items-center justify-center">
                  <img src="images/logo_tata.png" alt="Tata" className="max-h-[65px] w-auto max-w-[145px] object-contain" />
                </div>

                {/* Reliance */}
                <div className="flex h-[65px] w-[145px] shrink-0 items-center justify-center">
                  <img src="images/logo_reliance.png" alt="Reliance" className="max-h-[65px] w-auto max-w-[145px] object-contain" />
                </div>

                {/* SBI */}
                <div className="flex h-[65px] w-[140px] shrink-0 items-center justify-center">
                  <img src="images/logo_sbi.png" alt="SBI" className="max-h-[65px] w-auto max-w-[140px] object-contain" />
                </div>

                {/* Apollo Tyres */}
                <div className="flex h-[65px] w-[150px] shrink-0 items-center justify-center">
                  <img src="images/logo_apollo_tyres.png" alt="Apollo Tyres" className="max-h-[70px] w-auto max-w-[150px] object-contain" />
                </div>

                {/* ONGC */}
                <div className="flex h-[65px] w-[125px] shrink-0 items-center justify-center">
                  <img src="images/logo_ongc.png" alt="ONGC" className="max-h-[68px] w-auto max-w-[125px] object-contain" />
                </div>

                {/* Deloitte */}
                <div className="flex h-[65px] w-[145px] shrink-0 items-center justify-center">
                  <img src="images/logo_deloitte.png" alt="Deloitte" className="max-h-[55px] w-auto max-w-[145px] object-contain" />
                </div>

              </div>

              {/* SECOND IDENTICAL SET */}
              <div className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16 md:gap-20 md:pr-20 lg:gap-24 lg:pr-24">

                {/* TATA */}
                <div className="flex h-[65px] w-[125px] shrink-0 items-center justify-center">
                  <img src="images/logo_tata.png" alt="Tata" className="max-h-[65px] w-auto max-w-[125px] object-contain" />
                </div>

                {/* Reliance */}
                <div className="flex h-[65px] w-[145px] shrink-0 items-center justify-center">
                  <img src="images/logo_reliance.png" alt="Reliance" className="max-h-[65px] w-auto max-w-[145px] object-contain" />
                </div>

                {/* SBI */}
                <div className="flex h-[65px] w-[140px] shrink-0 items-center justify-center">
                  <img src="images/logo_sbi.png" alt="SBI" className="max-h-[65px] w-auto max-w-[140px] object-contain" />
                </div>

                {/* Apollo Tyres */}
                <div className="flex h-[65px] w-[150px] shrink-0 items-center justify-center">
                  <img src="images/logo_apollo_tyres.png" alt="Apollo Tyres" className="max-h-[70px] w-auto max-w-[150px] object-contain" />
                </div>

                {/* ONGC */}
                <div className="flex h-[65px] w-[125px] shrink-0 items-center justify-center">
                  <img src="images/logo_ongc.png" alt="ONGC" className="max-h-[68px] w-auto max-w-[125px] object-contain" />
                </div>

                {/* Deloitte */}
                <div className="flex h-[65px] w-[145px] shrink-0 items-center justify-center">
                  <img src="images/logo_deloitte.png" alt="Deloitte" className="max-h-[55px] w-auto max-w-[145px] object-contain" />
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}