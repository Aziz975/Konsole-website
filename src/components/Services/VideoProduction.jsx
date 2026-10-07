import React, { useEffect, useRef, useState } from "react";

/* =========================================================
   TYPOGRAPHY
========================================================= */

const h1Style = "font-bold leading-[0.96] tracking-[-0.045em]";
const h2Style = "font-bold leading-[1.02] tracking-[-0.045em]";
const bodyStyle = "font-normal leading-[1.5] tracking-[-0.01em]";
const btnText = "text-[16px] font-semibold sm:text-[17px]";

/* =========================================================
   REVEAL ANIMATION HOOK
   Animation restarts whenever element leaves and re-enters
========================================================= */

function useReveal(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -50px 0px",
  } = options;

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Double RAF ensures the browser registers
          // the hidden state before starting the animation.
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
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
}

/* =========================================================
   SMALL INLINE ICONS
========================================================= */

const ArrowIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="h-14 w-12 shrink-0"
    viewBox="0 0 48 56"
    fill="none"
    stroke="#1a1a1a"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path
      d="M24 3l19 7v16c0 12-8 20-19 25C13 46 5 38 5 26V10l19-7z"
      fill="#E8553D"
    />
    <path d="M15 27l6.5 6.5L34 20" />
  </svg>
);

/* =========================================================
   DATA
========================================================= */

const steps = [
  {
    no: "01",
    title: "Discovery and briefing",
    text: "We learn your goals, audience, and the story you want to tell.",
  },
  {
    no: "02",
    title: "Scripting and concept",
    text: "We shape the script, storyboard and creative direction.",
  },
  {
    no: "03",
    title: "Shooting and editing",
    text: "Our in-house team shoots and edits with regular updates.",
  },
  {
    no: "04",
    title: "Post-production and delivery",
    text: "We polish every frame and deliver stories that stop the scroll.",
    highlight: true,
  },
];

const metrics = [
  {
    title: "View Count Uplift",
    value: "+120%",
    text: "Increased organic and paid views.",
  },
  {
    title: "Engagement Uplift",
    value: "+95%",
    text: "Boost in likes, shares, and comments.",
  },
  {
    title: "Lead Conversion",
    value: "4.5 / 5.0",
    text: "Visitors turned into qualified leads.",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function VideoProduction() {
  /* =======================================================
     HERO
  ======================================================= */

  const [heroEyebrowRef, heroEyebrowVisible] = useReveal({
  threshold: 0.2,
});

  const [heroHeadingRef, heroHeadingVisible] = useReveal({
    threshold: 0.2,
  });

  const [heroTextRef, heroTextVisible] = useReveal({
    threshold: 0.2,
  });

  const [heroButtonRef, heroButtonVisible] = useReveal({
    threshold: 0.2,
  });

  const [heroImageRef, heroImageVisible] = useReveal({
    threshold: 0.15,
  });

  /* =======================================================
     HOW WE WORK
  ======================================================= */

  const [howHeadingRef, howHeadingVisible] = useReveal({
    threshold: 0.2,
  });

  const [howTextRef, howTextVisible] = useReveal({
    threshold: 0.2,
  });

  const [stepsRef, stepsVisible] = useReveal({
    threshold: 0.1,
  });

  const [startButtonRef, startButtonVisible] = useReveal({
    threshold: 0.2,
  });

  /* =======================================================
     IMPACT SECTION
  ======================================================= */

  const [impactHeadingRef, impactHeadingVisible] = useReveal({
    threshold: 0.2,
  });

  const [metricsRef, metricsVisible] = useReveal({
    threshold: 0.1,
  });

  const [ctaRef, ctaVisible] = useReveal({
    threshold: 0.15,
  });

  return (
    <>
      {/* =====================================================
          GLOBAL ANIMATION STYLES
      ===================================================== */}

      <style>{`
        .vp-reveal-up {
          opacity: 0;
          transform: translate3d(0, 45px, 0);
          filter: blur(8px);
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .vp-reveal-up.vp-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          filter: blur(0);
        }

        .vp-reveal-scale {
          opacity: 0;
          transform: translate3d(0, 30px, 0) scale(0.94);
          filter: blur(10px);
          transition:
            opacity 1s cubic-bezier(0.22, 1, 0.36, 1),
            transform 1s cubic-bezier(0.22, 1, 0.36, 1),
            filter 1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .vp-reveal-scale.vp-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          filter: blur(0);
        }

        .vp-reveal-image {
          opacity: 0;
          transform: translate3d(40px, 20px, 0) scale(0.92);
          filter: blur(12px);
          transition:
            opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1),
            transform 1.1s cubic-bezier(0.22, 1, 0.36, 1),
            filter 1.1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .vp-reveal-image.vp-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          filter: blur(0);
        }

        .vp-heading-line {
          display: block;
        }

        .vp-heading-line > span {
          display: block;
          opacity: 0;
          transform: translate3d(0, 110%, 0);
          transition:
            opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .vp-heading-visible .vp-heading-line:nth-child(1) > span {
          transition-delay: 0.05s;
        }

        .vp-heading-visible .vp-heading-line:nth-child(2) > span {
          transition-delay: 0.12s;
        }

        .vp-heading-visible .vp-heading-line:nth-child(3) > span {
          transition-delay: 0.19s;
        }

        .vp-heading-visible .vp-heading-line:nth-child(4) > span {
          transition-delay: 0.26s;
        }

        .vp-heading-visible .vp-heading-line > span {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .vp-stagger-item {
          opacity: 0;
          transform: translate3d(0, 45px, 0);
          filter: blur(7px);
          transition:
            opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.75s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .vp-stagger-visible .vp-stagger-item:nth-child(1) {
          transition-delay: 0.05s;
        }

        .vp-stagger-visible .vp-stagger-item:nth-child(2) {
          transition-delay: 0.14s;
        }

        .vp-stagger-visible .vp-stagger-item:nth-child(3) {
          transition-delay: 0.23s;
        }

        .vp-stagger-visible .vp-stagger-item:nth-child(4) {
          transition-delay: 0.32s;
        }

        .vp-stagger-visible .vp-stagger-item {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          filter: blur(0);
        }

        .vp-metric-card {
          opacity: 0;
          transform: translate3d(0, 40px, 0) scale(0.96);
          filter: blur(7px);
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .vp-metrics-visible .vp-metric-card:nth-child(1) {
          transition-delay: 0.05s;
        }

        .vp-metrics-visible .vp-metric-card:nth-child(2) {
          transition-delay: 0.16s;
        }

        .vp-metrics-visible .vp-metric-card:nth-child(3) {
          transition-delay: 0.27s;
        }

        .vp-metrics-visible .vp-metric-card {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          filter: blur(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .vp-reveal-up,
          .vp-reveal-scale,
          .vp-reveal-image,
          .vp-heading-line > span,
          .vp-stagger-item,
          .vp-metric-card {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div className="w-full overflow-hidden bg-white text-neutral-900">

        {/* =====================================================
            SECTION 1 : OUR SERVICES / HERO
        ===================================================== */}

        <section className="bg-[#F1EFD8]">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">

            {/* LEFT CONTENT */}
            <div>

         {/* Eyebrow */}
<p
  ref={heroEyebrowRef}
  className={`${
    heroEyebrowVisible ? "vp-visible" : ""
  } vp-reveal-up mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f04444] sm:text-[11px] md:text-[12px]`}
>
  Video Production
</p>

              {/* H1 */}
              <h1
                ref={heroHeadingRef}
                className={`${h1Style} ${
                  heroHeadingVisible ? "vp-heading-visible" : ""
                } text-[50px] sm:text-[55px] md:text-[62px] lg:text-[60px] xl:text-[65px]`}
              >
                <span className="vp-heading-line">
                  <span className="text-black">Visual Storytelling</span>
                </span>

                <span className="vp-heading-line">
                  <span className="text-[#F2A900]">
                    that Captivates.
                  </span>
                </span>

              </h1>

              {/* Description */}
              <p
                ref={heroTextRef}
                className={`${bodyStyle} ${
                  heroTextVisible ? "vp-visible" : ""
                } vp-reveal-up mt-8 max-w-[500px] text-[17px] text-neutral-900 sm:text-[18px] md:text-[19px]`}
              >
                Video is the most powerful tool for digital engagement. Whether you need short-form reels for Instagram, comprehensive corporate documentaries, or high-impact commercial ads, our in-house production team handles it all. We manage scripting, shooting, editing, and post-production to deliver visually stunning stories that stop the scroll.
              </p>

              {/* CTA */}
              <div
                ref={heroButtonRef}
                className={`${heroButtonVisible ? "vp-visible" : ""} vp-reveal-up`}
              >
                <button
                  type="button"
                  className={`${btnText} group mt-8 inline-flex h-[56px] items-center gap-7 rounded-full bg-black px-7 text-white transition-all duration-300 hover:gap-9 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:h-[58px] sm:px-9`}
                >
                  <span>Let&apos;s Create</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </button>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div
              ref={heroImageRef}
              className={`flex w-full items-center justify-center ${
                heroImageVisible ? "vp-visible" : ""
              } vp-reveal-image`}
            >
              <img
                src="/images/image12.png"
                alt="Video production workflow"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 2 : HOW WE WORK
        ===================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 pb-14 pt-12 lg:px-10">

            {/* SECTION HEADING */}
            <div className="text-center">

              <p
                ref={howHeadingRef}
                className={`${
                  howHeadingVisible ? "vp-visible" : ""
                } vp-reveal-up mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f04444] sm:text-[11px] md:text-[12px]`}
              >
                How we work
              </p>

              <h2
                className={`${h2Style} ${
                  howHeadingVisible ? "vp-visible" : ""
                } vp-reveal-up mt-4 text-[32px] text-neutral-900 sm:text-[40px] md:text-[46px]`}
              >
                A simple process that{" "}
                <span className="text-[#C8412B]">
                  delivers results.
                </span>
              </h2>

              <p
                ref={howTextRef}
                className={`${bodyStyle} ${
                  howTextVisible ? "vp-visible" : ""
                } vp-reveal-up mx-auto mt-6 max-w-2xl text-[17px] text-neutral-900 sm:text-[18px] md:text-[19px]`}
              >
                From first conversation to the final cut, here is how we bring your story to life.
              </p>
            </div>

            {/* PROCESS */}
            <div
              ref={stepsRef}
              className={`${
                stepsVisible ? "vp-stagger-visible" : ""
              } relative mt-10`}
            >
              {/* Dashed connector */}
              <div
                className="absolute left-[12.5%] right-[12.5%] top-[17px] hidden border-t border-dashed border-neutral-800 md:block"
                aria-hidden="true"
              />

              <ol className="relative grid gap-6 md:grid-cols-4 md:gap-3">
                {steps.map((s, i) => (
                  <li
                    key={s.no}
                    className="vp-stagger-item flex flex-col"
                  >
                    {/* Number */}
                    <div
                      className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-neutral-900 text-sm font-semibold ${
                        s.highlight
                          ? "bg-[#C8412B] text-white"
                          : "bg-[#F2A900] text-neutral-900"
                      }`}
                    >
                      {i + 1}
                    </div>

                    {/* Card */}
                    <div className="mt-3 flex-1 border border-neutral-900 bg-white px-3 pb-4 pt-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#171717]">
                      <span
                        className={`text-[28px] font-bold leading-none tracking-[-0.045em] ${
                          s.highlight
                            ? "text-[#C8412B]"
                            : "text-[#F2A900]"
                        }`}
                      >
                        {s.no}
                      </span>

                      <h3 className="mt-5 text-[17px] font-bold leading-[1.1] tracking-[-0.03em] text-neutral-900">
                        {s.title}
                      </h3>

                      <p
                        className={`${bodyStyle} mt-1.5 text-[14px] text-neutral-800`}
                      >
                        {s.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* START PROJECT BUTTON */}
            <div
              ref={startButtonRef}
              className={`${
                startButtonVisible ? "vp-visible" : ""
              } vp-reveal-up mt-8 text-center`}
            >
              <button
                type="button"
                className={`${btnText} group inline-flex h-[56px] items-center gap-7 bg-black px-8 text-white transition-all duration-300 hover:gap-9 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2`}
              >
                <span>Start your project</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 3 : QUANTIFIABLE IMPACT
        ===================================================== */}

        <section className="relative bg-white pb-16">
          <div className="mx-auto max-w-6xl px-6 pt-8 lg:px-10">

            {/* IMPACT HEADING */}
            <h2
              ref={impactHeadingRef}
              className={`${h2Style} ${
                impactHeadingVisible ? "vp-visible" : ""
              } vp-reveal-up text-center text-[30px] sm:text-[38px] md:text-[42px]`}
            >
              Quantifiable Impact: Proven Results
            </h2>

            {/* METRIC CARDS */}
            <div
              ref={metricsRef}
              className={`${
                metricsVisible ? "vp-metrics-visible" : ""
              } mt-8 grid gap-4 md:grid-cols-3`}
            >
              {metrics.map((m) => (
                <div
                  key={m.title}
                  className="vp-metric-card flex items-center justify-between gap-3 rounded-md border border-[#E2DEC8] bg-[#F5F2E3] p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div>
                    <h3 className="text-[18px] font-bold leading-[1.1] tracking-[-0.03em] text-neutral-900">
                      {m.title}
                    </h3>

                    <p className="mt-1 text-[40px] font-bold leading-none tracking-[-0.045em] text-neutral-900">
                      {m.value}
                    </p>

                    <p
                      className={`${bodyStyle} mt-2 text-[14px] text-neutral-800`}
                    >
                      {m.text}
                    </p>
                  </div>

                  {/* ICON / IMAGE SPACE */}
                  <div
                    className="h-20 w-20 shrink-0"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>

            {/* =================================================
                CTA BANNER
            ================================================= */}

            <div
              ref={ctaRef}
              className={`${
                ctaVisible ? "vp-visible" : ""
              } vp-reveal-scale mt-5 flex flex-col items-start gap-4 rounded-md bg-[#F6B21B] px-6 py-5 md:flex-row md:items-center md:justify-between`}
            >
              <div className="flex items-center gap-3">
                <ShieldIcon />

                <div>
                  <h3 className="text-[24px] font-bold leading-[1.05] tracking-[-0.04em] text-neutral-900 sm:text-[28px]">
                    Let&apos;s Storyboard Your Success.
                  </h3>

                  <p
                    className={`${bodyStyle} mt-1 text-[15px] text-neutral-900 sm:text-[16px]`}
                  >
                    Partner with us to create cinematic experiences and build
                    audience trust.
                  </p>
                </div>
              </div>

              {/* OPTIONAL BANNER IMAGE */}
              <div
                className="hidden h-14 w-44 shrink-0 lg:block"
                aria-hidden="true"
              />

              <button
                type="button"
                className={`${btnText} group inline-flex h-[56px] shrink-0 items-center gap-6 rounded-full bg-white px-7 text-neutral-900 transition-all duration-300 hover:gap-8 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2`}
              >
                <span>Start a Conversation</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </button>
            </div>
          </div>

          {/* BOTTOM DOODLE PATTERN SPACE */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-12"
            aria-hidden="true"
          />
        </section>
      </div>
    </>
  );
}