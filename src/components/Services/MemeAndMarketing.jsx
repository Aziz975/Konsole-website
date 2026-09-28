import React, { useEffect, useRef, useState } from "react";

const marketingCards = [
  {
    title: "Reactive Marketing",
    description: "Real-time memes and trending conversations.",
    image: "/Service/reactive-marketing.png",
  },
  {
    title: "Festival Marketing",
    description: "Holi, IPL, Diwali, Independence Day and more.",
    image: "/Service/festival-marketing.png",
  },
  {
    title: "Pop Culture",
    description: "Movies, Celebrities, OTT, Music & more.",
    image: "/Service/pop-culture.png",
  },
  {
    title: "Brand Personality",
    description: "Humor, relatability and community engagement.",
    image: "/Service/brand-personality.png",
  },
];

export default function MemeMarketingHero() {
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
          GLOBAL ANIMATIONS
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
        <div className="mx-auto flex w-full max-w-[1540px] flex-col px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:min-h-[680px] lg:flex-row lg:items-center lg:px-[6.5%] lg:py-12 xl:px-[7%]">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="relative z-20 w-full max-w-[610px] lg:w-[47%] xl:w-[48%]">

            {/* EYEBROW */}

            <p
              className={`mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f45b5f] sm:text-[11px] md:text-[12px] ${
                visible
                  ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.1s_forwards]"
                  : "translate-y-10 opacity-0"
              }`}
            >
              MEME & MOMENT MARKETING
            </p>


            {/* =================================================
                MAIN HEADING
            ================================================== */}

            <h1 className="max-w-[560px] text-[48px] font-bold leading-[0.96] tracking-[-0.045em] text-[#101920] sm:text-[58px] md:text-[50px] lg:text-[70px] xl:text-[60px]">

              <span className="block overflow-hidden">
                {revealText("Culture moves fast.", 0)}
              </span>

              <span className="block overflow-hidden">
                {revealText("Your brand should", 0.6)}
              </span>

              <span className="relative block overflow-hidden">
                {revealText("move faster.", 1.2)}

                <span
                  className={`absolute bottom-[-2px] left-0 h-[3px] w-[190px] bg-[#f4c92f] sm:bottom-[-3px] sm:h-[4px] sm:w-[225px] md:w-[250px] lg:w-[260px] xl:w-[285px] ${
                    visible
                      ? "animate-[fadeUp_0.7s_ease-out_1.65s_forwards]"
                      : "opacity-0"
                  }`}
                />
              </span>

            </h1>


            {/* =================================================
                CATEGORY LINE
            ================================================== */}

            <div
              className={`mt-5 flex max-w-[500px] flex-wrap items-center gap-x-2 gap-y-1 text-[9px] font-extrabold uppercase tracking-[0.04em] text-[#20292d] sm:text-[10px] md:text-[11px] lg:text-[12px] ${
                visible
                  ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_1.5s_forwards]"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <span>MEMES</span>

              <span className="text-[#f4c92f]">•</span>

              <span>TRENDS</span>

              <span className="text-[#f4c92f]">•</span>

              <span>INTERNET CULTURE</span>

              <span className="text-[#f4c92f]">•</span>

              <span>REAL-TIME RELEVANCE</span>
            </div>


            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p
              className={`mt-7 max-w-[500px] text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-[#273344] sm:text-[16px] md:text-[17px] lg:mt-8 lg:text-[18px] ${
                visible
                  ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_1.7s_forwards]"
                  : "translate-y-10 opacity-0"
              }`}
            >
              We turn trending moments into meaningful conversations.

              <br className="hidden sm:block" />

              From memes and pop culture to viral events and internet
              conversations,

              <br className="hidden md:block" />

              we help brands participate naturally, creatively and at the
              right time.

              <br />

              <span className="font-extrabold text-[#20282c]">
                Because attention is earned — not bought.
              </span>
            </p>


            {/* =================================================
                BUTTON
            ================================================== */}

            <button
              className={`group mt-7 inline-flex items-center gap-4 rounded-full bg-white px-6 py-3.5 text-[13px] font-extrabold text-[#20272b] shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:gap-6 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] sm:px-7 sm:py-4 sm:text-[14px] ${
                visible
                  ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_1.9s_forwards]"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <span>Let's Create Something Viral</span>

              <span className="text-[17px] leading-none transition-transform duration-300 group-hover:translate-x-1 sm:text-[18px]">
                →
              </span>
            </button>

          </div>


          {/* =====================================================
              RIGHT HERO ARTWORK
          ====================================================== */}

          <div className="relative mt-12 flex w-full justify-center lg:absolute lg:right-[1%] lg:top-1/2 lg:mt-0 lg:w-[54%] lg:-translate-y-1/2 xl:right-[2%] xl:w-[53%] 2xl:right-[3%]">

            <div
              className={`relative w-full max-w-[680px] ${
                visible
                  ? "animate-[fadeUp_1s_cubic-bezier(0.22,1,0.36,1)_0.35s_forwards]"
                  : "translate-y-14 opacity-0"
              }`}
            >
              <img
                src="/Service/meme-marketing-hero-art.png"
                alt="Meme and moment marketing"
                className="block h-auto w-full object-contain"
              />
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          PART 2 — OUR WORK
      ========================================================== */}

      <section className="relative min-h-screen w-full overflow-hidden bg-[#071014] px-5 py-14 text-white sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-[5%] lg:py-20 xl:px-[6%]">

        <div className="mx-auto flex min-h-[calc(100vh-160px)] w-full flex-col gap-12 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="w-full shrink-0 self-start lg:w-[25%] xl:w-[23%]">

            {/* EYEBROW */}

            <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#18c9e5] sm:text-[11px] md:text-[12px]">
              OUR WORK
            </p>


            {/* SAME MAIN HEADING STYLE */}

            <h2 className="max-w-[560px] text-[48px] font-bold leading-[0.96] tracking-[-0.045em] text-[#f5f7f7] sm:text-[58px] md:text-[50px] lg:text-[70px] xl:text-[60px]">
              Moments we turned
              <br />
              into moments.
            </h2>


            {/* SAME SUBHEADING STYLE */}

            <p className="mt-7 max-w-[500px] text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-[#8b9699] sm:text-[16px] md:text-[17px] lg:mt-8 lg:text-[18px]">
              Real people. Real reactions. Real results.
            </p>


            {/* DECORATIVE LINE */}

            <div className="mt-6 text-[28px] leading-none text-[#16c8e5]">
              〰
            </div>

          </div>


          {/* =====================================================
              RIGHT — LARGE RESPONSIVE CARD GRID
          ====================================================== */}

          <div className="grid w-full flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {/* CARD 1 */}

            <article className="group relative min-h-[300px] overflow-hidden rounded-[14px] border border-[#263239] bg-[#091419] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#39464b] hover:bg-[#0c181d] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[350px]">

              <div className="relative h-[180px] w-full overflow-hidden rounded-[9px] sm:h-[175px] md:h-[190px] lg:h-[185px] xl:h-[200px]">
                <img
                  src="/Service/ipl-meme-campaign.png"
                  alt="IPL Meme Campaign"
                  className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="px-1 pb-5 pt-4">

                <h3 className="text-[14px] font-extrabold leading-[1.15] text-[#f1f4f4] sm:text-[15px] md:text-[16px]">
                  IPL Meme Campaign
                </h3>

                <p className="mt-2 max-w-[260px] text-[10px] font-medium leading-[1.45] text-[#7d898d] sm:text-[11px]">
                  When the match gets real, so do the memes.
                </p>

              </div>

              <span className="absolute bottom-4 right-4 text-[15px] text-[#718085] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#18c9e5]">
                →
              </span>

            </article>


            {/* CARD 2 */}

            <article className="group relative min-h-[300px] overflow-hidden rounded-[14px] border border-[#263239] bg-[#091419] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#39464b] hover:bg-[#0c181d] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[350px]">

              <div className="relative h-[180px] w-full overflow-hidden rounded-[9px] sm:h-[175px] md:h-[190px] lg:h-[185px] xl:h-[200px]">
                <img
                  src="/Service/trending-reel.png"
                  alt="Movie Moment"
                  className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="px-1 pb-5 pt-4">

                <h3 className="text-[14px] font-extrabold leading-[1.15] text-[#f1f4f4] sm:text-[15px] md:text-[16px]">
                  Movie Moment
                </h3>

                <p className="mt-2 max-w-[260px] text-[10px] font-medium leading-[1.45] text-[#7d898d] sm:text-[11px]">
                  Turning iconic scenes into brand moments.
                </p>

              </div>

              <span className="absolute bottom-4 right-4 text-[15px] text-[#718085] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#18c9e5]">
                →
              </span>

            </article>


            {/* CARD 3 */}

            <article className="group relative min-h-[300px] overflow-hidden rounded-[14px] border border-[#263239] bg-[#091419] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#39464b] hover:bg-[#0c181d] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[350px]">

              <div className="relative h-[180px] w-full overflow-hidden rounded-[9px] sm:h-[175px] md:h-[190px] lg:h-[185px] xl:h-[200px]">
                <img
                  src="/Service/festival-creative.png"
                  alt="Festival Creative"
                  className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="px-1 pb-5 pt-4">

                <h3 className="text-[14px] font-extrabold leading-[1.15] text-[#f1f4f4] sm:text-[15px] md:text-[16px]">
                  Festival Creative
                </h3>

                <p className="mt-2 max-w-[260px] text-[10px] font-medium leading-[1.45] text-[#7d898d] sm:text-[11px]">
                  Because every festival deserves a fresh take.
                </p>

              </div>

              <span className="absolute bottom-4 right-4 text-[15px] text-[#718085] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#18c9e5]">
                →
              </span>

            </article>


            {/* CARD 4 */}

            <article className="group relative min-h-[300px] overflow-hidden rounded-[14px] border border-[#263239] bg-[#091419] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#39464b] hover:bg-[#0c181d] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[350px]">

              <div className="relative h-[180px] w-full overflow-hidden rounded-[9px] sm:h-[175px] md:h-[190px] lg:h-[185px] xl:h-[200px]">
                <img
                  src="/Service/brand-banter.png"
                  alt="Brand Banter"
                  className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="px-1 pb-5 pt-4">

                <h3 className="text-[14px] font-extrabold leading-[1.15] text-[#f1f4f4] sm:text-[15px] md:text-[16px]">
                  Brand Banter
                </h3>

                <p className="mt-2 max-w-[260px] text-[10px] font-medium leading-[1.45] text-[#7d898d] sm:text-[11px]">
                  Relatable content that builds real connections.
                </p>

              </div>

              <span className="absolute bottom-4 right-4 text-[15px] text-[#718085] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#18c9e5]">
                →
              </span>

            </article>


            {/* CARD 5 */}

            <article className="group relative min-h-[300px] overflow-hidden rounded-[14px] border border-[#263239] bg-[#091419] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#39464b] hover:bg-[#0c181d] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[350px]">

              <div className="relative h-[180px] w-full overflow-hidden rounded-[9px] sm:h-[175px] md:h-[190px] lg:h-[185px] xl:h-[200px]">
                <img
                  src="/Service/trending-reel.png"
                  alt="Trending Reel"
                  className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="px-1 pb-5 pt-4">

                <h3 className="text-[14px] font-extrabold leading-[1.15] text-[#f1f4f4] sm:text-[15px] md:text-[16px]">
                  Trending Reel
                </h3>

                <p className="mt-2 max-w-[260px] text-[10px] font-medium leading-[1.45] text-[#7d898d] sm:text-[11px]">
                  Short, sharp, and shareable.
                </p>

              </div>

              <span className="absolute bottom-4 right-4 text-[15px] text-[#718085] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#18c9e5]">
                →
              </span>

            </article>

          </div>

        </div>
      </section>


      {/* =========================================================
          PART 3 — TYPES OF MEME MARKETING
      ========================================================== */}

      <section className="relative w-full overflow-hidden bg-[#f8f7ef] px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-[6.5%] lg:py-16 xl:px-[6.8%]">

        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 md:gap-12 lg:flex-row lg:items-start lg:gap-10 xl:gap-14">

          {/* =====================================================
              LEFT TEXT
          ====================================================== */}

          <div className="w-full shrink-0 lg:w-[27%] xl:w-[25%]">

            {/* EYEBROW */}

            <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f05b5e] sm:text-[11px] md:text-[12px]">
              TYPES OF MEME MARKETING
            </p>


            {/* SAME MAIN HEADING */}

            <h2 className="max-w-[560px] text-[48px] font-bold leading-[0.96] tracking-[-0.045em] text-[#111a21]  sm:text-[58px] md:text-[50px] lg:text-[70px] xl:text-[60px]">
              Every trend is an
              <br />
              opportunity.
            </h2>


            {/* SAME SUBHEADING */}

            <p className="mt-7 max-w-[500px] text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-[#273344] sm:text-[16px] md:text-[17px] lg:mt-8 lg:text-[18px]">
              From viral memes to cultural moments, we turn what&apos;s
              trending into brand gold.
            </p>


            {/* YELLOW UNDERLINE */}

            <div className="mt-6 h-[3px] w-[40px] rounded-full bg-[#f6c92e]" />

          </div>


          {/* =====================================================
              RIGHT — RESPONSIVE CARD GRID
          ====================================================== */}

          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:w-[73%] xl:w-[75%]">

            {marketingCards.map((card) => (

              <article
                key={card.title}
                className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-[12px] border border-[#deded7] bg-[#fafaf5] px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.07)] sm:min-h-[250px] md:min-h-[260px] lg:min-h-[265px] xl:min-h-[270px]"
              >

                {/* IMAGE */}

                <div className="relative flex h-[160px] w-full items-center justify-center overflow-hidden sm:h-[125px] md:h-[135px] lg:h-[150px] xl:h-[155px]">

                  <img
                    src={card.image}
                    alt={card.title}
                    className="relative top-[40%] block object-contain object-center transition-transform duration-500 group-hover:scale-[1.15]"
                  />

                </div>


                {/* CARD CONTENT */}

                <div className="relative z-10 mt-auto pr-7">

                  <h3 className="text-[12px] font-extrabold leading-[1.15] text-[#182126] sm:text-[13px] md:text-[13px] lg:text-[13px] xl:text-[14px]">
                    {card.title}
                  </h3>

                  <p className="mt-1 max-w-[230px] text-[10px] font-medium leading-[1.45] text-[#273344] sm:text-[11px] md:text-[12px]">
                    {card.description}
                  </p>

                </div>


                {/* ARROW */}

                <div className="absolute bottom-4 right-4 text-[12px] text-[#a0a4a2] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#111a21] sm:text-[13px]">
                  →
                </div>


                {/* BOTTOM ACCENT */}

                <div className="absolute bottom-0 left-4 h-[2px] w-[22px] bg-[#d9ddd8] transition-all duration-300 group-hover:w-[35px] group-hover:bg-[#f4c92f]" />

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          PART 4 — CTA
      ========================================================== */}

      <section className="relative w-full overflow-hidden bg-[#071014] text-white">

        <div className="relative mx-auto flex min-h-[145px] w-full items-center px-6 py-7 sm:min-h-[155px] sm:px-8 md:min-h-[165px] md:px-10 lg:min-h-[175px] lg:px-[7%] xl:px-[7.5%]">

          {/* =====================================================
              LEFT DECORATIVE ARROW
          ====================================================== */}

          <div className="absolute left-[3%] top-[25px] hidden text-white sm:block lg:left-[4%]">

            <svg
              width="52"
              height="35"
              viewBox="0 0 52 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-90"
            >
              <path
                d="M2 5C12 2 25 4 31 10C36 15 32 22 24 22"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M24 22L29 17"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M24 22L30 24"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

          </div>


          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}

          <div className="relative z-10 flex w-full items-center justify-between gap-6">

            {/* LEFT TEXT */}

            <div className="ml-0 sm:ml-[7%] lg:ml-[5%]">

              {/* SUBHEADING */}

              <p className="text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-[#9ca7aa] sm:text-[16px] md:text-[17px] lg:text-[18px]">
                Your audience is already talking.
              </p>


              {/* SAME HEADING SYSTEM, SMALLER CTA VARIANT */}

              <h2 className="mt-2 max-w-[560px] text-[28px] font-bold leading-[0.96] tracking-[-0.045em] text-[#f4f6f6] sm:text-[34px] md:text-[40px] lg:text-[42px] xl:text-[46px]">
                Let&apos;s make sure they&apos;re
                <br />
                talking about you.
              </h2>

            </div>


            {/* =================================================
                RIGHT SIDE
            ================================================== */}

            <div className="relative flex shrink-0 items-center gap-5 sm:gap-7 md:gap-10">

              {/* BUTTON */}

              <button className="relative z-20 rounded-full bg-white px-4 py-2 text-[8px] font-extrabold text-[#182126] shadow-[0_2px_12px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(0,0,0,0.3)] sm:px-5 sm:py-2.5 sm:text-[9px] md:px-6 md:py-3 md:text-[10px]">

                Let&apos;s Create Something Viral

                <span className="ml-2 text-[11px]">
                  →
                </span>

              </button>


              {/* =================================================
                  CSS ARTWORK
              ================================================== */}

              <div className="relative hidden h-[70px] w-[75px] sm:block sm:h-[80px] sm:w-[85px] md:h-[90px] md:w-[95px]">

                {/* Yellow circle */}

                <div className="absolute left-[12px] top-[3px] h-[25px] w-[25px] rounded-full bg-[#ffd21f] sm:h-[30px] sm:w-[30px] md:h-[34px] md:w-[34px]" />

                {/* Red circle */}

                <div className="absolute bottom-[7px] left-[13px] h-[25px] w-[25px] rounded-full bg-[#f04d55] sm:h-[30px] sm:w-[30px] md:h-[34px] md:w-[34px]" />

                {/* Blue circle */}

                <div className="absolute right-[7px] top-[22px] h-[25px] w-[25px] rounded-full bg-[#18b9ed] sm:h-[30px] sm:w-[30px] md:h-[34px] md:w-[34px]" />

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}