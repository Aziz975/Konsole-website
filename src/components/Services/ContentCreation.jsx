import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContentCreation() {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(false);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setVisible(true);
            });
          });
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const revealText = (text, startDelay = 0, className = "") => {
    return text.split("").map((char, index) => (
      <span
        key={`${text}-${index}`}
        className={`inline-block ${
          visible
            ? "animate-[letterReveal_0.65s_cubic-bezier(0.22,1,0.36,1)_forwards]"
            : "translate-y-[120%] opacity-0"
        } ${className}`}
        style={{
          animationDelay: `${startDelay + index * 0.035}s`,
          ...(char === " " ? { width: "0.28em" } : {}),
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <main className="w-full overflow-hidden">

      {/* =========================================================
          GLOBAL ANIMATION STYLES
      ========================================================== */}

      <style>
        {`
          @keyframes letterReveal {
            0% {
              transform: translateY(120%);
              opacity: 0;
            }

            60% {
              opacity: 1;
            }

            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes fadeUp {
            0% {
              transform: translateY(45px);
              opacity: 0;
            }

            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>

      {/* =========================================================
          PART 1 — HERO
      ========================================================== */}

      <section
        ref={heroRef}
        className="relative w-full overflow-hidden border-t border-[#15191c] bg-[#f7f6ee] text-[#111a21]"
      >
        <div className="mx-auto grid min-h-[650px] max-w-[1300px] grid-cols-1 items-center px-4 py-14 sm:px-6 md:grid-cols-2 md:px-8 md:py-0 lg:min-h-[650px] lg:px-10 xl:min-h-[700px] xl:px-8">

          {/* =====================================================
              HERO LEFT
          ====================================================== */}

          <div className="relative z-20 flex w-full flex-col items-start justify-center">

            {/* EYEBROW */}

            <p
              className={`mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f05b5e] sm:text-[11px] md:text-[12px] ${
                visible
                  ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.1s_forwards]"
                  : "translate-y-10 opacity-0"
              }`}
            >
              CONTENT CREATION
            </p>

            {/* =================================================
                MAIN HERO HEADING
            ================================================== */}

            <h1 className="max-w-[560px] text-[48px] font-bold leading-[0.96] tracking-[-0.045em] text-[#101920]  sm:text-[58px] md:text-[50px] lg:text-[70px] xl:text-[60px]">

              <span className="block overflow-hidden">
                {revealText("Great content", 0)}
              </span>

              <span className="block overflow-hidden">
                {revealText("builds brands.", 0.45, "text-[#101920]")}
              </span>

              <span className="block overflow-hidden">
                {revealText("Real content", 0.9, "text-[#ffd21c]")}
              </span>

              <span className="block overflow-hidden">
                {revealText("builds trust.", 1.35, "text-[#ff6969]")}
              </span>

            </h1>

            {/* =================================================
                HERO SUBHEADING
            ================================================== */}

            <p
              className={`mt-7 max-w-[500px] text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-[#68737b] sm:text-[16px] md:text-[17px] lg:mt-8 lg:text-[18px] ${
                visible
                  ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.75s_forwards]"
                  : "translate-y-10 opacity-0"
              }`}
            >
              We create scroll-stopping content that informs, entertains and
              inspires — turning your brand into a story people want to follow.
            </p>

            {/* =================================================
                HERO BUTTON
            ================================================== */}

            <div
              className={`mt-7 sm:mt-8 ${
                visible
                  ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.9s_forwards]"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <button className="group inline-flex h-[54px] items-center gap-5 rounded-full bg-[#071218] px-6 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:gap-7 hover:bg-[#18252a] sm:h-[58px] sm:px-8 sm:text-[15px]">
                <span>Let&apos;s Create</span>

                <ArrowRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.2}
                />
              </button>
            </div>
          </div>

          {/* =====================================================
              HERO RIGHT IMAGE
          ====================================================== */}

          <div className="relative mt-12 flex h-[320px] w-full items-center justify-center md:mt-0 md:h-full md:justify-end">

            <div
              className={`relative h-full w-full ${
                visible
                  ? "animate-[fadeUp_1s_cubic-bezier(0.22,1,0.36,1)_0.3s_forwards]"
                  : "translate-y-14 opacity-0"
              }`}
            >
              <img
                src="/images/content-creation-hero-visual.png"
                alt="Content creation"
                className="h-full w-full object-contain object-center md:object-right"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          PART 2 — RECENT WORK
      ========================================================== */}

      <section className="relative flex min-h-screen w-full overflow-hidden bg-[#071014] px-6 py-16 text-white sm:px-8 sm:py-20 md:px-10 lg:px-[6%] lg:py-0 xl:px-[7%]">

        <div className="mx-auto flex min-h-screen w-full max-w-[1500px] flex-col justify-center gap-14 lg:flex-row lg:items-center lg:gap-10 xl:gap-16">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="relative z-20 w-full shrink-0 lg:w-[42%] xl:w-[40%]">

            {/* SAME EYEBROW */}

            <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f05b5e] sm:text-[11px] md:text-[12px]">
              RECENT WORK
            </p>

            {/* SAME HEADING */}

            <h2 className="max-w-[560px] text-[48px] font-bold leading-[0.96] tracking-[-0.045em] text-[#f5f7f7]  sm:text-[58px] md:text-[50px] lg:text-[70px] xl:text-[60px]">
              Content that
              <br />
              sparks conversation.
            </h2>

            {/* SAME SUBHEADING */}

            <p className="mt-7 max-w-[500px] text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-[#8b9699] sm:text-[16px] md:text-[17px] lg:mt-8 lg:text-[18px]">
              From brand stories to viral moments, we create content that
              people don&apos;t just see — they share, like and remember.
            </p>

            {/* BUTTON */}

            <button className="group mt-7 inline-flex items-center gap-5 rounded-full bg-white px-6 py-3.5 text-[14px] font-semibold text-[#182126] shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:gap-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] sm:px-7 sm:py-4 sm:text-[15px]">
              <span>View All Work</span>

              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2.2}
              />
            </button>
          </div>

          {/* =====================================================
              RIGHT CARDS
          ====================================================== */}

          <div className="relative flex w-full items-center justify-center lg:w-[58%] xl:w-[60%]">

            {/* DECORATION */}

            <div className="pointer-events-none absolute left-[-2%] top-[38%] hidden text-[45px] leading-none text-[#f4c92f] lg:block">
              〰
            </div>

            <div className="pointer-events-none absolute right-[-3%] top-[42%] hidden text-[35px] text-[#18c9e5] lg:block">
              〰
            </div>

            {/* CARDS */}

            <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5">

              {/* CARD 1 */}

              <article className="group relative w-full sm:mt-[-15px]">
                <div className="relative aspect-[0.67] w-full overflow-hidden rounded-[14px] border border-[#25343a] bg-[#111b20] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-[1.025] group-hover:border-[#405158] group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.45)]">

                  <img
                    src="/Service/brand-film.png"
                    alt="Brand Film"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />

                  <div className="absolute bottom-3 left-3 rounded-[7px] bg-white px-3 py-1.5 text-[9px] font-extrabold text-[#182126] shadow-[0_3px_10px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:-translate-y-1 sm:text-[10px]">
                    Brand Film
                  </div>
                </div>
              </article>

              {/* CARD 2 */}

              <article className="group relative w-full sm:mt-[20px]">
                <div className="relative aspect-[0.67] w-full overflow-hidden rounded-[14px] border border-[#25343a] bg-[#111b20] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-[1.025] group-hover:border-[#405158] group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.45)]">

                  <img
                    src="/Service/social-media-coffee.png"
                    alt="Social Media"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />

                  <div className="absolute bottom-3 left-3 rounded-[7px] bg-white px-3 py-1.5 text-[9px] font-extrabold text-[#182126] shadow-[0_3px_10px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:-translate-y-1 sm:text-[10px]">
                    Social Media
                  </div>
                </div>
              </article>

              {/* CARD 3 */}

              <article className="group relative w-full sm:mt-[5px]">
                <div className="relative aspect-[0.67] w-full overflow-hidden rounded-[14px] border border-[#25343a] bg-[#111b20] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-[1.025] group-hover:border-[#405158] group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.45)]">

                  <img
                    src="/Service/collect-moment.png"
                    alt="Reel"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />

                  <div className="absolute bottom-3 left-3 rounded-[7px] bg-white px-3 py-1.5 text-[9px] font-extrabold text-[#182126] shadow-[0_3px_10px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:-translate-y-1 sm:text-[10px]">
                    Reel
                  </div>
                </div>
              </article>

            </div>
          </div>
        </div>

        {/* DECORATIVE STAR */}

        <div className="pointer-events-none absolute bottom-[18%] right-[4%] hidden text-[28px] text-[#f4c92f] opacity-80 lg:block">
          ✦
        </div>

      </section>

      {/* =========================================================
          PART 3 — LET'S CREATE
      ========================================================== */}

      <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#f7f6ee] px-6 py-16 text-[#111a21] sm:px-8 md:px-10 lg:px-[7%] lg:py-0">

        <div className="mx-auto flex min-h-screen w-full max-w-[1450px] flex-col items-center justify-center gap-12 lg:flex-row lg:justify-between lg:gap-16">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="w-full max-w-[570px] lg:w-[47%]">

            {/* SAME EYEBROW */}

            <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f05b5e] sm:text-[11px] md:text-[12px]">
              LET&apos;S CREATE
            </p>

            {/* SAME HEADING */}

            <h2 className="max-w-[560px] text-[48px] font-bold leading-[0.96] tracking-[-0.045em] text-[#111a21]  sm:text-[58px] md:text-[50px] lg:text-[70px] xl:text-[60px]">
              Your story deserves
              <br />
              the right content.
            </h2>

            {/* SAME SUBHEADING */}

            <p className="mt-7 max-w-[500px] text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-[#687075] sm:text-[16px] md:text-[17px] lg:mt-8 lg:text-[18px]">
              Whether you&apos;re launching a new product, rebranding or just
              want to stay relevant — we&apos;re here to help you tell it
              better.
            </p>

            {/* BUTTON */}

            <button className="group mt-7 inline-flex items-center gap-5 rounded-full bg-[#10191d] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_5px_18px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:gap-7 hover:bg-[#18252a] hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] sm:px-7 sm:py-4 sm:text-[15px]">
              <span>Get Started</span>

              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2.2}
              />
            </button>
          </div>

          {/* =====================================================
              STATS
          ====================================================== */}

          <div className="relative w-full max-w-[620px] lg:w-[53%]">

            {/* DECORATION */}

            <div className="pointer-events-none absolute -left-5 top-[10%] z-10 hidden text-[42px] leading-none text-[#f4c92f] lg:block">
              〰
            </div>

            <div className="pointer-events-none absolute -right-2 -top-7 z-10 text-[34px] leading-none text-[#f4c92f]">
              ☆
            </div>

            {/* CARD */}

            <div className="relative w-full overflow-hidden rounded-[18px] bg-[#091419] px-7 py-7 shadow-[0_15px_40px_rgba(0,0,0,0.12)] sm:rounded-[20px] sm:px-9 sm:py-9 md:px-10 md:py-10 lg:px-8 lg:py-8 xl:px-10 xl:py-9">

              <div className="grid grid-cols-2">

                {/* STAT 1 */}

                <div className="border-b border-r border-[#26343a] px-2 pb-6 sm:px-4 sm:pb-7">

                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#18c9e5] text-[12px] text-[#071014]">
                      ◉
                    </span>

                    <span className="text-[8px] text-[#18c9e5]">
                      01
                    </span>
                  </div>

                  <h3 className="text-[25px] font-[800] leading-none tracking-[-0.03em] text-white sm:text-[30px] md:text-[32px]">
                    10M+
                  </h3>

                  <p className="mt-2 text-[9px] font-medium text-[#899397] sm:text-[10px]">
                    Total Impressions
                  </p>

                </div>

                {/* STAT 2 */}

                <div className="border-b border-[#26343a] px-4 pb-6 sm:px-5 sm:pb-7">

                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f4c92f] text-[12px] text-[#071014]">
                      ♡
                    </span>

                    <span className="text-[8px] text-[#f4c92f]">
                      02
                    </span>
                  </div>

                  <h3 className="text-[25px] font-[800] leading-none tracking-[-0.03em] text-white sm:text-[30px] md:text-[32px]">
                    250K+
                  </h3>

                  <p className="mt-2 text-[9px] font-medium text-[#899397] sm:text-[10px]">
                    Engagements
                  </p>

                </div>

                {/* STAT 3 */}

                <div className="border-r border-[#26343a] px-2 pt-6 sm:px-4 sm:pt-7">

                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f05b5e] text-[12px] text-[#071014]">
                      ↗
                    </span>

                    <span className="text-[8px] text-[#f05b5e]">
                      03
                    </span>
                  </div>

                  <h3 className="text-[25px] font-[800] leading-none tracking-[-0.03em] text-white sm:text-[30px] md:text-[32px]">
                    500+
                  </h3>

                  <p className="mt-2 text-[9px] font-medium text-[#899397] sm:text-[10px]">
                    Pieces of Content
                  </p>

                </div>

                {/* STAT 4 */}

                <div className="px-4 pt-6 sm:px-5 sm:pt-7">

                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[12px] text-[#071014]">
                      ↗
                    </span>

                    <span className="text-[8px] text-[#18c9e5]">
                      04
                    </span>
                  </div>

                  <h3 className="text-[25px] font-[800] leading-none tracking-[-0.03em] text-white sm:text-[30px] md:text-[32px]">
                    3X
                  </h3>

                  <p className="mt-2 text-[9px] font-medium text-[#899397] sm:text-[10px]">
                    Average Growth
                  </p>

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}