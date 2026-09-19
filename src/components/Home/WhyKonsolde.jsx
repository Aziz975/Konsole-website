import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function WhyKonsolde() {
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
    <>
      {/* ================= WHY KONSOLDE SECTION ================= */}
      <section ref={sectionRef} className="relative mt-5 w-full overflow-hidden bg-[#0b1113] text-white">
        <div className="mx-auto grid min-h-[520px] w-full max-w-[1440px] grid-cols-1 items-center px-6 py-14 sm:px-10 sm:py-16 md:px-12 lg:min-h-[560px] lg:grid-cols-2 lg:px-16 lg:py-16 xl:px-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-20 w-full max-w-[510px]">

            {/* Handwritten Heading */}
            <p
              className={`mb-4 text-[27px] leading-none text-white sm:text-[30px] md:text-[32px] ${visible ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.1s_forwards]" : "translate-y-12 opacity-0"}`}
              style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
            >
              Why Konsolde?
            </p>

            {/* Main Heading */}
            <h2 className={`max-w-[470px] text-[40px] font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-[48px] md:text-[54px] lg:text-[48px] xl:text-[52px] ${visible ? "animate-[fadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.22s_forwards]" : "translate-y-14 opacity-0"}`}>
              Because Ideas
              <br />
              Need the Right
              <br />
              Backing.
            </h2>

            {/* Description */}
            <p className={`mt-6 max-w-[470px] text-[16px] leading-[1.45] text-white/90 sm:text-[17px] md:text-[18px] ${visible ? "animate-[fadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.38s_forwards]" : "translate-y-12 opacity-0"}`}>
              We don’t just create campaigns, we build momentum. With a sharp
              understanding of people, culture and policy, we turn communication
              into a force for change.
            </p>

            {/* CTA */}
            <div className={`${visible ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.52s_forwards]" : "translate-y-12 opacity-0"}`}>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-9 rounded-full bg-white px-7 py-4 text-[15px] font-bold text-[#11181b] animate-bounce sm:px-8 sm:py-[17px] sm:text-[16px]"
              >
                <span>Let’s Work Together</span>
                <ArrowRight size={22} strokeWidth={1.8} />
              </a>
            </div>

          </div>

          {/* ================= RIGHT SINGLE IMAGE ================= */}
          <div className="relative mt-12 flex min-h-[350px] w-full items-center justify-center lg:mt-0 lg:min-h-[500px]">

            <div className={`w-full ${visible ? "animate-[fadeUp_1.1s_cubic-bezier(0.22,1,0.36,1)_0.28s_forwards]" : "translate-y-20 opacity-0"}`}>
              <img
                src="images/artwork3.png"
                alt="Why Konsolde artwork"
                className="h-auto w-full max-w-[720px] object-contain lg:absolute lg:right-[-5%] lg:top-1/2 lg:w-[115%] lg:max-w-none lg:-translate-y-1/2"
              />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}