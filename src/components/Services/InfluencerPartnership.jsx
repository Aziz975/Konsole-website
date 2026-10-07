import React, { useEffect, useRef, useState } from "react";

/* =========================================================
   TYPOGRAPHY
========================================================= */

const h1Style = "font-bold leading-[0.96] tracking-[-0.045em]";
const h2Style = "font-bold leading-[1.02] tracking-[-0.045em]";
const bodyStyle = "font-normal leading-[1.5] tracking-[-0.01em]";
const btnText = "text-[16px] font-semibold sm:text-[17px]";

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

const focusAreas = {
  left: [
    {
      title: "Influencer Vetting",
      text: "Carefully screening creators for genuine audience alignment, not just follower count.",
    },
    {
      title: "Campaign Management",
      text: "Handling the full lifecycle — outreach, scheduling, content approval and delivery.",
    },
  ],

  middle: [
    {
      title: "Contract Negotiation",
      text: "Securing fair, clear terms that protect your brand and the creator relationship.",
    },
    {
      title: "Performance Analytics",
      text: "Tracking reach, engagement and ROI so every partnership proves its value.",
      offset: true,
    },
  ],

  right: [
    {
      title: "Authentic Advocacy",
      text: "Pairing your brand with voices your audience already trusts and follows.",
    },
  ],
};

/* =========================================================
   FOCUS ITEM COMPONENT
========================================================= */

const FocusItem = ({
  title,
  text,
  offset,
  itemClassName = "",
}) => (
  <li
    className={`ip-item ${offset ? "mt-6" : ""} ${itemClassName}`}
  >
    <div className="ip-check">
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

const InfluencerPartnership = () => {
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
     FOCUS AREAS
  ======================================================= */

  const [focusHeadingRef, focusHeadingVisible] = useReveal({
    threshold: 0.2,
  });

  const [focusRef, focusVisible] = useReveal({
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

        .ip-eyebrow {
          opacity: 0;
          transform: translate3d(-25px, 0, 0);
          clip-path: inset(0 100% 0 0);

          transition:
            opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ip-eyebrow.ip-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          clip-path: inset(0 0 0 0);
        }


        /* ===================================================
           HERO HEADING
           SPLIT LINE REVEAL
        =================================================== */

        .ip-hero-heading {
          overflow: hidden;
        }

        .ip-heading-line {
          display: block;
          overflow: hidden;
          line-height: 1.02;
        }

        .ip-heading-line > span {
          display: block;
          opacity: 0;
          transform:
            translate3d(-100%, 0, 0)
            skewX(-4deg);

          transition:
            opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.95s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ip-heading-visible
          .ip-heading-line:nth-child(1)
          > span {
          transition-delay: 0.04s;
        }

        .ip-heading-visible
          .ip-heading-line:nth-child(2)
          > span {
          transition-delay: 0.14s;
        }

        .ip-heading-visible
          .ip-heading-line:nth-child(3)
          > span {
          transition-delay: 0.24s;
        }

        .ip-heading-visible
          .ip-heading-line
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

        .ip-hero-text {
          opacity: 0;
          transform: translate3d(-30px, 0, 0);
          clip-path: inset(0 100% 0 0);

          transition:
            opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            clip-path 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ip-hero-text.ip-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          clip-path: inset(0 0 0 0);
        }


        /* ===================================================
           HERO BUTTON
        =================================================== */

        .ip-hero-button {
          opacity: 0;
          transform: translate3d(-15px, 25px, 0);

          transition:
            opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ip-hero-button.ip-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }


        /* ===================================================
           HERO IMAGE
           GENTLE 3D ROTATE + SCALE
        =================================================== */

        .ip-hero-image {
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

        .ip-hero-image.ip-visible {
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
           SECTION HEADING
           BOTTOM REVEAL
        =================================================== */

        .ip-section-heading {
          opacity: 0;

          transform:
            translate3d(0, 25px, 0);

          clip-path: inset(100% 0 0 0);

          transition:
            opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            clip-path 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ip-section-heading.ip-visible {
          opacity: 1;

          transform:
            translate3d(0, 0, 0);

          clip-path: inset(0 0 0 0);
        }


        /* ===================================================
           FOCUS ITEMS
           ALTERNATING MOTION
        =================================================== */

        .ip-item {
          display: flex;
          gap: 8px;

          opacity: 0;
          filter: blur(4px);

          transition:
            opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ip-item:nth-child(odd) {
          transform:
            translate3d(-45px, 25px, 0);
        }

        .ip-item:nth-child(even) {
          transform:
            translate3d(45px, 25px, 0);
        }

        .ip-items-visible
          .ip-item:nth-child(1) {
          transition-delay: 0.05s;
        }

        .ip-items-visible
          .ip-item:nth-child(2) {
          transition-delay: 0.18s;
        }

        .ip-items-visible
          .ip-item {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          filter: blur(0);
        }


        /* ===================================================
           CHECK ICON
           ROTATE + SCALE
        =================================================== */

        .ip-check {
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

        .ip-items-visible
          .ip-item:nth-child(1)
          .ip-check {
          transition-delay: 0.2s;
        }

        .ip-items-visible
          .ip-item:nth-child(2)
          .ip-check {
          transition-delay: 0.32s;
        }

        .ip-items-visible
          .ip-check {
          opacity: 1;

          transform:
            scale(1)
            rotate(0deg);
        }


        /* ===================================================
           FOCUS ITEM TEXT
        =================================================== */

        .ip-item h3,
        .ip-item p {
          transition:
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.5s ease;
        }

        .ip-item:hover h3 {
          transform: translate3d(3px, 0, 0);
        }

        .ip-item:hover p {
          transform: translate3d(3px, 0, 0);
        }


        /* ===================================================
           CTA BANNER
           WIDE HORIZONTAL WIPE
        =================================================== */

        .ip-cta {
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

        .ip-cta.ip-visible {
          opacity: 1;

          transform:
            translate3d(0, 0, 0);

          clip-path:
            inset(0 0 0 0);
        }


        /* ===================================================
           CTA SHIELD
        =================================================== */

        .ip-shield {
          opacity: 0;

          transform:
            translate3d(-20px, 0, 0)
            rotate(-18deg)
            scale(0.75);

          transition:
            opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ip-cta.ip-visible .ip-shield {
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

        .ip-cta-content {
          opacity: 0;
          transform: translate3d(20px, 0, 0);

          transition:
            opacity 0.65s ease,
            transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ip-cta.ip-visible .ip-cta-content {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition-delay: 0.22s;
        }


        /* ===================================================
           BUTTON MOTION
           SUBTLE MAGNETIC STYLE
        =================================================== */

        .ip-button {
          transition:
            transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
            gap 0.35s cubic-bezier(0.16, 1, 0.3, 1),
            background-color 0.3s ease,
            box-shadow 0.35s ease;
        }

        .ip-button:hover {
          transform:
            translate3d(4px, -3px, 0);
        }

        .ip-button:active {
          transform:
            translate3d(1px, 0, 0)
            scale(0.97);
        }


        /* ===================================================
           ARROW
        =================================================== */

        .ip-arrow {
          transition:
            transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .group:hover .ip-arrow {
          transform:
            translate3d(5px, 0, 0);
        }


        /* ===================================================
           PHONE GRAPHIC PILLS
        =================================================== */

        .ip-pill {
          opacity: 0;
          transform: translate3d(14px, 0, 0) scale(0.85);

          transition:
            opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ip-hero-image.ip-visible .ip-pill-1 {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          transition-delay: 0.35s;
        }

        .ip-hero-image.ip-visible .ip-pill-2 {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          transition-delay: 0.48s;
        }

        .ip-hero-image.ip-visible .ip-pill-3 {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          transition-delay: 0.61s;
        }


        /* ===================================================
           MOBILE IMAGE
        =================================================== */

        @media (max-width: 767px) {
          .ip-hero-image {
            transform:
              translate3d(0, 35px, 0)
              rotate(2deg)
              scale(0.94);
          }

          .ip-hero-image.ip-visible {
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
          .ip-eyebrow,
          .ip-heading-line > span,
          .ip-hero-text,
          .ip-hero-button,
          .ip-hero-image,
          .ip-section-heading,
          .ip-item,
          .ip-check,
          .ip-cta,
          .ip-shield,
          .ip-cta-content,
          .ip-pill {
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
              <div ref={heroEyebrowRef}>
                <p
                  className={`${
                    heroEyebrowVisible ? "ip-visible" : ""
                  } ip-eyebrow mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f04444] sm:text-[11px] md:text-[12px]`}
                >
                  Influencer Partnerships
                </p>
              </div>

              {/* H1 */}
              <h1
                ref={heroHeadingRef}
                className={`${h1Style} ${
                  heroHeadingVisible
                    ? "ip-heading-visible"
                    : ""
                } ip-hero-heading text-[40px] sm:text-[52px] md:text-[56px] lg:text-[44px] xl:text-[48px]`}
              >
                <span className="ip-heading-line">
                  <span className="text-black">
                    Authentic Connections,
                  </span>
                </span>

                <span className="ip-heading-line">
                  <span className="text-[#E8553D]">
                    Amplified
                  </span>
                </span>

                <span className="ip-heading-line">
                  <span className="text-[#FBBF24]">
                    Reach.
                  </span>
                </span>
              </h1>

              {/* DESCRIPTION */}
              <div ref={heroTextRef}>
                <p
                  className={`${bodyStyle} ${
                    heroTextVisible ? "ip-visible" : ""
                  } ip-hero-text mt-8 max-w-[560px] text-[16px] text-neutral-800 sm:text-[17px] md:text-[18px]`}
                >
                  We connect your brand with the right voices. Rather than
                  just chasing follower counts, we identify and collaborate
                  with influencers and thought leaders whose audiences align
                  with your target market. We manage the entire lifecycle of
                  the campaign — from outreach and negotiation to content
                  approval and ROI tracking — ensuring authentic advocacy for
                  your brand.
                </p>
              </div>

              {/* CTA */}
              <div
                ref={heroButtonRef}
                className={`${
                  heroButtonVisible
                    ? "ip-visible"
                    : ""
                } ip-hero-button`}
                style={{
                  transitionDelay: heroButtonVisible
                    ? "0.25s"
                    : "0s",
                }}
              >
                <button
                  type="button"
                  className={`${btnText} ip-button group mt-8 inline-flex h-[56px] items-center gap-7 rounded-full bg-black px-7 text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:h-[58px] sm:px-9`}
                >
                  <span>Let&apos;s Create</span>

                  <span className="ip-arrow">
                    <ArrowIcon />
                  </span>
                </button>
              </div>
            </div>

            {/* HERO GRAPHIC */}
            <div
              ref={heroImageRef}
              className={`${
                heroImageVisible
                  ? "ip-visible"
                  : ""
              } ip-hero-image relative flex w-full items-center justify-center py-6`}
            >
              {/* PHONE CARD */}
              <div className="w-[230px] rounded-[28px] bg-[#15171a] p-4 shadow-2xl">
                <div className="rounded-2xl bg-white p-4">

                  <div className="mb-3 flex items-center gap-2.5">
                    <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-[#f04444] to-[#FBBF24]" />
                    <div>
                      <p className="text-[13px] font-bold leading-tight text-neutral-900">
                        @creator.studio
                      </p>
                      <p className="text-[11px] text-neutral-500">
                        240K followers · 94% match
                      </p>
                    </div>
                  </div>

                  {[
                    { label: "Audience Fit", value: 92, color: "bg-[#f04444]" },
                    { label: "Engagement Rate", value: 81, color: "bg-[#E8553D]" },
                    { label: "Campaign ROI", value: 70, color: "bg-[#FBBF24]" },
                  ].map((stat) => (
                    <div key={stat.label} className="mt-3">
                      <div className="mb-1 flex justify-between text-[10px] text-neutral-500">
                        <span>{stat.label}</span>
                        <span>{stat.value}%</span>
                      </div>
                      <div className="h-[7px] w-full overflow-hidden rounded-full bg-neutral-100">
                        <div
                          className={`h-full rounded-full ${stat.color}`}
                          style={{ width: `${stat.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FLOATING PILLS */}
              <div className="ip-pill ip-pill-1 absolute -right-4 top-2 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-[11px] font-bold text-neutral-900 shadow-lg">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-[10px] text-white">
                  ✓
                </span>
                Vetted Creator
              </div>

              <div className="ip-pill ip-pill-2 absolute left-[-30px] top-1/2 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-[11px] font-bold text-neutral-900 shadow-lg">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-[10px] text-white">
                  ★
                </span>
                Top Performer
              </div>

              <div className="ip-pill ip-pill-3 absolute -right-2 bottom-0 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-[11px] font-bold text-neutral-900 shadow-lg">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-[10px] text-white">
                  ⚑
                </span>
                Contract Signed
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            KEY FOCUS AREAS
        ===================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10">

            {/* HEADING */}
            <div ref={focusHeadingRef}>
              <h2
                className={`${h2Style} ${
                  focusHeadingVisible ? "ip-visible" : ""
                } ip-section-heading text-center text-[30px] sm:text-[38px] md:text-[42px]`}
              >
                Key Focus Areas
              </h2>
            </div>

            {/* ITEMS */}
            <div
              ref={focusRef}
              className={`${
                focusVisible
                  ? "ip-items-visible"
                  : ""
              } mt-8 grid gap-8 md:grid-cols-3 md:gap-10`}
            >
              {/* LEFT */}
              <ul className="space-y-4">
                {focusAreas.left.map((d) => (
                  <FocusItem key={d.title} {...d} />
                ))}
              </ul>

              {/* MIDDLE */}
              <ul className="space-y-4">
                {focusAreas.middle.map((d) => (
                  <FocusItem key={d.title} {...d} />
                ))}
              </ul>

              {/* RIGHT */}
              <ul className="space-y-4">
                {focusAreas.right.map((d) => (
                  <FocusItem key={d.title} {...d} />
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
            <div ref={ctaRef}>
              <div
                className={`${
                  ctaVisible
                    ? "ip-visible"
                    : ""
                } ip-cta flex flex-col items-start gap-5 rounded-xl bg-[#FBBF24] px-6 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between`}
              >

                {/* LEFT CONTENT */}
                <div className="flex items-center gap-4">

                  {/* SHIELD */}
                  <div className="ip-shield">
                    <ShieldIcon />
                  </div>

                  {/* TEXT */}
                  <div className="ip-cta-content">
                    <h3 className="text-[24px] font-bold leading-[1.05] tracking-[-0.04em] text-neutral-900 sm:text-[28px]">
                      Let&apos;s Amplify Your Brand&apos;s Voice.
                    </h3>

                    <p
                      className={`${bodyStyle} mt-1 text-[15px] text-neutral-900 sm:text-[16px]`}
                    >
                      Partner with us to find the right creators and turn
                      their reach into your growth.
                    </p>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  type="button"
                  className={`${btnText} ip-button group inline-flex h-[56px] shrink-0 items-center gap-6 rounded-full bg-white px-7 text-neutral-900 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2`}
                >
                  <span>Start a Conversation</span>

                  <span className="ip-arrow">
                    <ArrowIcon />
                  </span>
                </button>
              </div>
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
};

export default InfluencerPartnership;