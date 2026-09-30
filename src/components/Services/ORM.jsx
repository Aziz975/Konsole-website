import React, { useEffect, useRef, useState } from "react";

/* =========================================================
   TYPOGRAPHY
========================================================= */

const h1Style = "font-bold leading-[0.96] tracking-[-0.045em]";
const h2Style = "font-bold leading-[1.02] tracking-[-0.045em]";
const bodyStyle = "font-normal leading-[1.5] tracking-[-0.01em]";
const btnText = "text-[16px] font-semibold sm:text-[17px]";
const cursive = { fontFamily: "cursive" };

/* =========================================================
   VIEWPORT REVEAL HOOK
   Animation restarts whenever element leaves/re-enters
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
   ICONS
========================================================= */

const CheckIcon = () => (
  <svg
    className="h-4 w-4 shrink-0 text-neutral-900"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

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
    className="h-14 w-14 shrink-0"
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
      fill="#F5A623"
    />

    <path d="M15 27l6.5 6.5L34 20" />
  </svg>
);

/* =========================================================
   DATA
========================================================= */

const deliverables = {
  left: [
    {
      title: "Comprehensive Sentiment Analysis",
      text: "Monitor mentions and classify public opinion.",
    },
    {
      title: "Rapid Crisis Response",
      text: "Mitigate negative press and control narratives quickly.",
    },
  ],

  middle: [
    {
      title: "Proactive Content Strategy",
      text: "Create positive stories to push down negative results.",
    },
    {
      title: "Institutional Identity Management",
      text: "Protect and shape the long-term legacy of your brand.",
      offset: true,
    },
  ],

  right: [
    {
      title: "Digital Trust Building",
      text: "Foster online credibility through transparency and engagement.",
    },
  ],
};

/* =========================================================
   DELIVERABLE COMPONENT
========================================================= */

const Deliverable = ({
  title,
  text,
  offset,
  itemClassName = "",
}) => (
  <li
    className={`orm-deliverable ${offset ? "mt-6" : ""} ${itemClassName}`}
  >
    <div className="orm-check">
      <CheckIcon />
    </div>

    <div>
      <h3 className="text-[17px] font-bold leading-[1.1] tracking-[-0.03em] text-neutral-900">
        {title}
      </h3>

      <p
        className={`${bodyStyle} mt-1 text-[14px] text-neutral-700`}
      >
        {text}
      </p>
    </div>
  </li>
);

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ORM() {
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
     DELIVERABLES
  ======================================================= */

  const [deliverablesHeadingRef, deliverablesHeadingVisible] =
    useReveal({
      threshold: 0.2,
    });

  const [deliverablesRef, deliverablesVisible] = useReveal({
    threshold: 0.1,
  });

  /* =======================================================
     CTA
  ======================================================= */

  const [ctaRef, ctaVisible] = useReveal({
    threshold: 0.15,
  });

  return (
    <>
      {/* =====================================================
          ANIMATION CSS
      ===================================================== */}

      <style>{`
        /* ===================================================
           HERO EYEBROW
        =================================================== */

        .orm-eyebrow {
          opacity: 0;
          transform: translate3d(-25px, 0, 0);
          clip-path: inset(0 100% 0 0);

          transition:
            opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .orm-eyebrow.orm-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          clip-path: inset(0 0 0 0);
        }


        /* ===================================================
           HERO HEADING
           SPLIT LINE REVEAL
        =================================================== */

        .orm-hero-heading {
          overflow: hidden;
        }

        .orm-heading-line {
          display: block;
          overflow: hidden;
          line-height: 1.02;
        }

        .orm-heading-line > span {
          display: block;
          opacity: 0;
          transform:
            translate3d(-100%, 0, 0)
            skewX(-4deg);

          transition:
            opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.95s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .orm-heading-visible
          .orm-heading-line:nth-child(1)
          > span {
          transition-delay: 0.04s;
        }

        .orm-heading-visible
          .orm-heading-line:nth-child(2)
          > span {
          transition-delay: 0.14s;
        }

        .orm-heading-visible
          .orm-heading-line:nth-child(3)
          > span {
          transition-delay: 0.24s;
        }

        .orm-heading-visible
          .orm-heading-line:nth-child(4)
          > span {
          transition-delay: 0.34s;
        }

        .orm-heading-visible
          .orm-heading-line
          > span {
          opacity: 1;
          transform:
            translate3d(0, 0, 0)
            skewX(0deg);
        }


        /* ===================================================
           HERO DESCRIPTION
           MASKED REVEAL
        =================================================== */

        .orm-hero-text {
          opacity: 0;
          transform: translate3d(-30px, 0, 0);
          clip-path: inset(0 100% 0 0);

          transition:
            opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            clip-path 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .orm-hero-text.orm-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          clip-path: inset(0 0 0 0);
        }


        /* ===================================================
           HERO BUTTON
        =================================================== */

        .orm-hero-button {
          opacity: 0;
          transform: translate3d(-15px, 25px, 0);

          transition:
            opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .orm-hero-button.orm-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }


        /* ===================================================
           HERO IMAGE
           GENTLE 3D ROTATE + SCALE
        =================================================== */

        .orm-hero-image {
          opacity: 0;

          transform:
            perspective(1200px)
            translate3d(45px, 20px, 0)
            rotateY(-9deg)
            rotateZ(1deg)
            scale(0.91);

          filter: blur(6px);

          transition:
            opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
            transform 1.15s cubic-bezier(0.16, 1, 0.3, 1),
            filter 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .orm-hero-image.orm-visible {
          opacity: 1;

          transform:
            perspective(1200px)
            translate3d(0, 0, 0)
            rotateY(0deg)
            rotateZ(0deg)
            scale(1);

          filter: blur(0);
        }


        /* ===================================================
           DELIVERABLES HEADING
           BOTTOM REVEAL
        =================================================== */

        .orm-section-heading {
          opacity: 0;

          transform:
            translate3d(0, 25px, 0);

          clip-path: inset(100% 0 0 0);

          transition:
            opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            clip-path 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .orm-section-heading.orm-visible {
          opacity: 1;

          transform:
            translate3d(0, 0, 0);

          clip-path: inset(0 0 0 0);
        }


        /* ===================================================
           DELIVERABLE ITEMS
           ALTERNATING MOTION
        =================================================== */

        .orm-deliverable {
          display: flex;
          gap: 8px;

          opacity: 0;
          filter: blur(4px);

          transition:
            opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .orm-deliverable:nth-child(odd) {
          transform:
            translate3d(-45px, 25px, 0);
        }

        .orm-deliverable:nth-child(even) {
          transform:
            translate3d(45px, 25px, 0);
        }

        .orm-deliverables-visible
          .orm-deliverable:nth-child(1) {
          transition-delay: 0.05s;
        }

        .orm-deliverables-visible
          .orm-deliverable:nth-child(2) {
          transition-delay: 0.18s;
        }

        .orm-deliverables-visible
          .orm-deliverable {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          filter: blur(0);
        }


        /* ===================================================
           CHECK ICON
           ROTATE + SCALE
        =================================================== */

        .orm-check {
          display: flex;
          flex-shrink: 0;

          opacity: 0;

          transform:
            scale(0.4)
            rotate(-25deg);

          transition:
            opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .orm-deliverables-visible
          .orm-deliverable:nth-child(1)
          .orm-check {
          transition-delay: 0.2s;
        }

        .orm-deliverables-visible
          .orm-deliverable:nth-child(2)
          .orm-check {
          transition-delay: 0.32s;
        }

        .orm-deliverables-visible
          .orm-check {
          opacity: 1;

          transform:
            scale(1)
            rotate(0deg);
        }


        /* ===================================================
           DELIVERABLE TEXT
        =================================================== */

        .orm-deliverable h3,
        .orm-deliverable p {
          transition:
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.5s ease;
        }

        .orm-deliverable:hover h3 {
          transform: translate3d(3px, 0, 0);
        }

        .orm-deliverable:hover p {
          transform: translate3d(3px, 0, 0);
        }


        /* ===================================================
           CTA BANNER
           WIDE HORIZONTAL WIPE
        =================================================== */

        .orm-cta {
          opacity: 0;

          transform:
            translate3d(-80px, 0, 0);

          clip-path:
            inset(0 100% 0 0);

          transition:
            opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.9s cubic-bezier(0.16, 1, 0.3, 1),
            clip-path 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .orm-cta.orm-visible {
          opacity: 1;

          transform:
            translate3d(0, 0, 0);

          clip-path:
            inset(0 0 0 0);
        }


        /* ===================================================
           CTA SHIELD
        =================================================== */

        .orm-shield {
          opacity: 0;

          transform:
            translate3d(-20px, 0, 0)
            rotate(-18deg)
            scale(0.75);

          transition:
            opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .orm-cta.orm-visible .orm-shield {
          opacity: 1;

          transform:
            translate3d(0, 0, 0)
            rotate(0deg)
            scale(1);

          transition-delay: 0.3s;
        }


        /* ===================================================
           CTA CONTENT
        =================================================== */

        .orm-cta-content {
          opacity: 0;
          transform: translate3d(20px, 0, 0);

          transition:
            opacity 0.65s ease,
            transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .orm-cta.orm-visible .orm-cta-content {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition-delay: 0.22s;
        }


        /* ===================================================
           BUTTON MOTION
           SUBTLE MAGNETIC STYLE
        =================================================== */

        .orm-button {
          transition:
            transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
            gap 0.35s cubic-bezier(0.16, 1, 0.3, 1),
            background-color 0.3s ease,
            box-shadow 0.35s ease;
        }

        .orm-button:hover {
          transform:
            translate3d(4px, -3px, 0);
        }

        .orm-button:active {
          transform:
            translate3d(1px, 0, 0)
            scale(0.97);
        }


        /* ===================================================
           ARROW
        =================================================== */

        .orm-arrow {
          transition:
            transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .group:hover .orm-arrow {
          transform:
            translate3d(5px, 0, 0);
        }


        /* ===================================================
           MOBILE IMAGE
        =================================================== */

        @media (max-width: 767px) {
          .orm-hero-image {
            transform:
              translate3d(0, 35px, 0)
              rotate(2deg)
              scale(0.94);
          }

          .orm-hero-image.orm-visible {
            transform:
              translate3d(0, 0, 0)
              rotate(0deg)
              scale(1);
          }
        }


        /* ===================================================
           REDUCED MOTION
        =================================================== */

        @media (prefers-reduced-motion: reduce) {
          .orm-eyebrow,
          .orm-heading-line > span,
          .orm-hero-text,
          .orm-hero-button,
          .orm-hero-image,
          .orm-section-heading,
          .orm-deliverable,
          .orm-check,
          .orm-cta,
          .orm-shield,
          .orm-cta-content {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            clip-path: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div className="w-full bg-white text-neutral-900">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="bg-[#F6F4EC]">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-14 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">

            {/* LEFT */}
            <div>

              {/* EYEBROW */}
              <p
                ref={heroEyebrowRef}
                className={`${
                  heroEyebrowVisible
                    ? "orm-visible"
                    : ""
                } orm-eyebrow mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f04444] sm:text-[11px] md:text-[12px]`}
              >
                Our Services
              </p>

              {/* H1 */}
              <h1
                ref={heroHeadingRef}
                className={`${h1Style} ${
                  heroHeadingVisible
                    ? "orm-heading-visible"
                    : ""
                } orm-hero-heading text-[40px] sm:text-[52px] md:text-[56px] lg:text-[44px] xl:text-[48px]`}
              >
                <span className="orm-heading-line">
                  <span className="text-black">
                    Managing reputation
                  </span>
                </span>

                <span className="orm-heading-line">
                  <span className="text-black">
                    builds credibility.
                  </span>
                </span>

                <span className="orm-heading-line">
                  <span className="text-[#FBBF24]">
                    Real perceptions builds
                  </span>
                </span>

                <span className="orm-heading-line">
                  <span className="text-[#E8553D]">
                    building trust.
                  </span>
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p
                ref={heroTextRef}
                className={`${bodyStyle} ${
                  heroTextVisible
                    ? "orm-visible"
                    : ""
                } orm-hero-text mt-8 max-w-[500px] text-[17px] text-neutral-800 sm:text-[18px] md:text-[19px]`}
              >
                Strategies to shape and protect your digital perception
              </p>

              {/* CTA */}
              <div
                ref={heroButtonRef}
                className={`${
                  heroButtonVisible
                    ? "orm-visible"
                    : ""
                } orm-hero-button`}
                style={{
                  transitionDelay: heroButtonVisible
                    ? "0.25s"
                    : "0s",
                }}
              >
                <button
                  type="button"
                  className={`${btnText} orm-button group mt-8 inline-flex h-[56px] items-center gap-7 rounded-full bg-black px-7 text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:h-[58px] sm:px-9`}
                >
                  <span>Let&apos;s Create</span>

                  <span className="orm-arrow">
                    <ArrowIcon />
                  </span>
                </button>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div
              ref={heroImageRef}
              className={`${
                heroImageVisible
                  ? "orm-visible"
                  : ""
              } orm-hero-image flex w-full items-center justify-center`}
            >
              <img
                src="/images/image11.png"
                alt="Reputation dashboard with trust score and reviews"
                className="w-full max-w-[520px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            CORE ORM DELIVERABLES
        ===================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10">

            {/* HEADING */}
            <h2
              ref={deliverablesHeadingRef}
              className={`${h2Style} ${
                deliverablesHeadingVisible
                  ? "orm-visible"
                  : ""
              } orm-section-heading text-center text-[30px] sm:text-[38px] md:text-[42px]`}
            >
              Core ORM Deliverables
            </h2>

            {/* DELIVERABLES */}
            <div
              ref={deliverablesRef}
              className={`${
                deliverablesVisible
                  ? "orm-deliverables-visible"
                  : ""
              } mt-8 grid gap-8 md:grid-cols-3 md:gap-10`}
            >
              {/* LEFT */}
              <ul className="space-y-4">
                {deliverables.left.map((d) => (
                  <Deliverable
                    key={d.title}
                    {...d}
                  />
                ))}
              </ul>

              {/* MIDDLE */}
              <ul className="space-y-4">
                {deliverables.middle.map((d) => (
                  <Deliverable
                    key={d.title}
                    {...d}
                  />
                ))}
              </ul>

              {/* RIGHT */}
              <ul className="space-y-4">
                {deliverables.right.map((d) => (
                  <Deliverable
                    key={d.title}
                    {...d}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA BANNER
        ===================================================== */}

        <section className="relative bg-white pb-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">

            <div
              ref={ctaRef}
              className={`${
                ctaVisible
                  ? "orm-visible"
                  : ""
              } orm-cta flex flex-col items-start gap-5 rounded-xl bg-[#FBBF24] px-6 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between`}
            >

              {/* LEFT CONTENT */}
              <div className="flex items-center gap-4">

                {/* SHIELD */}
                <div className="orm-shield">
                  <ShieldIcon />
                </div>

                {/* TEXT */}
                <div className="orm-cta-content">
                  <h3 className="text-[24px] font-bold leading-[1.05] tracking-[-0.04em] text-neutral-900 sm:text-[28px]">
                    Let&apos;s Protect Your Institutional Legacy.
                  </h3>

                  <p
                    className={`${bodyStyle} mt-1 text-[15px] text-neutral-900 sm:text-[16px]`}
                  >
                    Partner with us to build digital trust and enhance your
                    public perception.
                  </p>
                </div>
              </div>

              {/* BUTTON */}
              <button
                type="button"
                className={`${btnText} orm-button group inline-flex h-[56px] shrink-0 items-center gap-6 rounded-full bg-white px-7 text-neutral-900 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2`}
              >
                <span>Start a Conversation</span>

                <span className="orm-arrow">
                  <ArrowIcon />
                </span>
              </button>
            </div>
          </div>

          {/* BOTTOM DOODLE PATTERN SPACE */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
            aria-hidden="true"
          />
        </section>
      </div>
    </>
  );
}