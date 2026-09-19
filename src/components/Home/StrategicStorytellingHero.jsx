import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function StrategicStorytellingHero() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[650px] overflow-hidden bg-[#0b0f10] text-white">
      <div className="mx-auto flex min-h-[650px] w-full max-w-[1440px] flex-col lg:flex-row">

        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-20 flex w-full flex-col justify-center px-6 py-16 sm:px-10 md:px-14 lg:w-[48%] lg:px-14 lg:py-20 xl:px-[60px]">

          {/* ================= EYEBROW - FADE UP ================= */}
          <div className={`mb-6 text-[25px] leading-none text-white sm:text-[28px] md:text-[30px] lg:text-[29px] xl:text-[31px] ${visible ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.1s_forwards]" : "translate-y-12 opacity-0"}`} style={{ fontFamily: "cursive" }}>
            Ideas. Culture. Impact.
          </div>

          {/* ================= H1 - WORD BY WORD REVEAL ONLY ================= */}
<h1 className="max-w-[560px] text-[50px] font-bold leading-[0.96] tracking-[-0.045em] sm:text-[60px] md:text-[68px] lg:text-[64px] xl:text-[72px]">

  <span className="block ">
    {"Strategic".split("").map((letter, index) => (
      <span key={index} className={`inline-block ${visible ? "animate-[letterReveal_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]" : "translate-y-[120%] opacity-0"}`} style={{ animationDelay: `${index * 0.045}s` }}>
        {letter}
      </span>
    ))}
  </span>

  <span className="block overflow-hidden">
    {"Storytelling".split("").map((letter, index) => (
      <span key={index} className={`inline-block ${visible ? "animate-[letterReveal_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]" : "translate-y-[120%] opacity-0"}`} style={{ animationDelay: `${0.4 + index * 0.045}s` }}>
        {letter}
      </span>
    ))}
  </span>

  <span className="block overflow-hidden">
    <span className="inline-block">
      {"for".split("").map((letter, index) => (
        <span key={index} className={`inline-block text-[#ff6969] ${visible ? "animate-[letterReveal_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]" : "translate-y-[120%] opacity-0"}`} style={{ animationDelay: `${0.95 + index * 0.045}s` }}>
          {letter}
        </span>
      ))}
    </span>

    <span className="inline-block ml-[0.2em]">
      {"a".split("").map((letter, index) => (
        <span key={index} className={`inline-block text-[#ff6969] ${visible ? "animate-[letterReveal_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]" : "translate-y-[120%] opacity-0"}`} style={{ animationDelay: `${1.1 + index * 0.045}s` }}>
          {letter}
        </span>
      ))}
    </span>

    <span className="inline-block ml-[0.2em]">
      {"Louder".split("").map((letter, index) => (
        <span key={index} className={`inline-block text-[#ffd21c] ${visible ? "animate-[letterReveal_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]" : "translate-y-[120%] opacity-0"}`} style={{ fontFamily: "cursive", animationDelay: `${1.2 + index * 0.045}s` }}>
          {letter}
        </span>
      ))}
    </span>
  </span>

  <span className="block overflow-hidden">
    {"Tomorrow.".split("").map((letter, index) => (
      <span key={index} className={`inline-block ${visible ? "animate-[letterReveal_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]" : "translate-y-[120%] opacity-0"}`} style={{ animationDelay: `${1.55 + index * 0.045}s` }}>
        {letter}
      </span>
    ))}
  </span>

</h1>

          {/* ================= DESCRIPTION - FADE UP ================= */}
          <p className={`mt-8 max-w-[500px] text-[17px] font-normal leading-[1.5] tracking-[-0.01em] text-[#f1f3f3] sm:text-[18px] md:text-[19px] lg:mt-9 ${visible ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.75s_forwards]" : "translate-y-12 opacity-0"}`}>
            We blend creativity, culture and strategy to help brands, leaders and institutions stay relevant, trusted and ahead.
          </p>

          {/* ================= CTA - FADE UP ================= */}
          <div className={`mt-8 sm:mt-9 ${visible ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.9s_forwards]" : "translate-y-12 opacity-0"}`}>
            <button className="animate-bounce group inline-flex h-[56px] items-center gap-7 rounded-full bg-white px-7 text-[16px] font-semibold text-[#111516] transition-all duration-300 hover:gap-9 hover:bg-[#f5f5f5] sm:h-[58px] sm:px-9 sm:text-[17px]">
              <span>Explore Our Services</span>

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.2} />
            </button>
          </div>

        </div>

        {/* ================= RIGHT IMAGE - FADE UP ================= */}
        <div className="absolute right-0 top-0 hidden h-full w-[56%] lg:block">
          <div className={`relative h-full w-full ${visible ? "animate-[fadeUp_1.1s_cubic-bezier(0.22,1,0.36,1)_0.3s_forwards]" : "translate-y-20 opacity-0"}`}>
            <img
              src="images/artwork.png"
              alt="Strategic storytelling artwork"
              className="absolute right-0 top-1/2 h-auto w-full max-w-[800px] -translate-y-1/2 object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}