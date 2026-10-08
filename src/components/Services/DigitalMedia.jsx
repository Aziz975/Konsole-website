import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  FileText,
  Mail,
  Star,
  BarChart3,
  ArrowRight,
} from "lucide-react";

/* =========================================================
   REVEAL HOOK
   Animation restarts whenever the element leaves/re-enters
========================================================= */

function useReveal(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -40px 0px",
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

export default function DigitalMedia() {
  /* =======================================================
     REVEALS
  ======================================================= */

  const [heroRef, heroVisible] = useReveal({
    threshold: 0.15,
  });

  const [processRef, processVisible] = useReveal({
    threshold: 0.12,
  });

  const [mediaRef, mediaVisible] = useReveal({
    threshold: 0.15,
  });

  /* =======================================================
     LETTER REVEAL
  ======================================================= */

  const revealText = (text) => {
    return (
      <span className="inline-block">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="digital-letter inline-block"
            style={{
              "--letter-delay": `${index * 0.025}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <>
      {/* =====================================================
          ANIMATION CSS
      ===================================================== */}

      <style>
        {`
          /* =================================================
             GLOBAL
          ================================================= */

          .digital-page {
            width: 100%;
            overflow-x: hidden;
          }

          /* =================================================
             HERO LETTER REVEAL
          ================================================= */

          @keyframes digitalLetterReveal {
            0% {
              opacity: 0;
              transform:
                translate3d(0, 100%, 0)
                rotate(5deg);
              filter: blur(5px);
            }

            70% {
              opacity: 1;
              transform:
                translate3d(0, -5%, 0)
                rotate(0deg);
              filter: blur(0);
            }

            100% {
              opacity: 1;
              transform:
                translate3d(0, 0, 0)
                rotate(0deg);
              filter: blur(0);
            }
          }

          .digital-letter {
            opacity: 0;
            transform:
              translate3d(0, 100%, 0)
              rotate(5deg);
          }

          .digital-hero-visible .digital-letter {
            animation:
              digitalLetterReveal
              0.65s
              cubic-bezier(0.22, 1, 0.36, 1)
              var(--letter-delay)
              forwards;
          }

          /* =================================================
             FADE UP
          ================================================= */

          @keyframes digitalFadeUp {
            0% {
              opacity: 0;
              transform: translate3d(0, 28px, 0);
              filter: blur(3px);
            }

            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0);
              filter: blur(0);
            }
          }

          .digital-fade-up {
            opacity: 0;
          }

          .digital-fade-up.is-visible {
            animation:
              digitalFadeUp
              0.8s
              cubic-bezier(0.22, 1, 0.36, 1)
              forwards;
          }

          /* =================================================
             HERO IMAGE
          ================================================= */

          @keyframes digitalImageReveal {
            0% {
              opacity: 0;
              transform:
                translate3d(45px, 18px, 0)
                scale(0.94)
                rotate(1.5deg);
              filter: blur(7px);
            }

            100% {
              opacity: 1;
              transform:
                translate3d(0, 0, 0)
                scale(1)
                rotate(0deg);
              filter: blur(0);
            }
          }

          .digital-pr-image {
            opacity: 0;
          }

          .digital-pr-image.is-visible {
            animation:
              digitalImageReveal
              1.15s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.15s
              forwards;
          }

          /* =================================================
             HERO UNDERLINE
          ================================================= */

          .digital-underline {
            transform-origin: left center;
            transform: scaleX(0);
            opacity: 0;
          }

          .digital-hero-visible .digital-underline {
            transform: scaleX(1);
            opacity: 1;

            transition:
              transform 0.75s
                cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.45s ease;

            transition-delay: 0.65s;
          }

          /* =================================================
             PROCESS SECTION
          ================================================= */

          @keyframes processLeftReveal {
            0% {
              opacity: 0;
              transform:
                translate3d(-45px, 25px, 0)
                scale(0.97);
              filter: blur(4px);
            }

            100% {
              opacity: 1;
              transform:
                translate3d(0, 0, 0)
                scale(1);
              filter: blur(0);
            }
          }

          @keyframes processRightReveal {
            0% {
              opacity: 0;
              transform:
                translate3d(45px, 25px, 0)
                scale(0.97);
              filter: blur(4px);
            }

            100% {
              opacity: 1;
              transform:
                translate3d(0, 0, 0)
                scale(1);
              filter: blur(0);
            }
          }

          .digital-process-intro,
          .digital-process-card {
            opacity: 0;
          }

          .digital-process-visible .digital-process-intro {
            animation:
              processLeftReveal
              0.85s
              cubic-bezier(0.16, 1, 0.3, 1)
              forwards;
          }

          .digital-process-visible .digital-process-card:nth-child(1) {
            animation:
              processLeftReveal
              0.75s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.08s
              forwards;
          }

          .digital-process-visible .digital-process-card:nth-child(2) {
            animation:
              processRightReveal
              0.75s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.18s
              forwards;
          }

          .digital-process-visible .digital-process-card:nth-child(3) {
            animation:
              processLeftReveal
              0.75s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.28s
              forwards;
          }

          .digital-process-visible .digital-process-card:nth-child(4) {
            animation:
              processRightReveal
              0.75s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.38s
              forwards;
          }

          .digital-process-visible .digital-process-card:nth-child(5) {
            animation:
              processLeftReveal
              0.75s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.48s
              forwards;
          }

          /* =================================================
             PROCESS ICON
          ================================================= */

          @keyframes processIconReveal {
            0% {
              opacity: 0;
              transform:
                scale(0.55)
                rotate(-18deg);
            }

            70% {
              opacity: 1;
              transform:
                scale(1.06)
                rotate(2deg);
            }

            100% {
              opacity: 1;
              transform:
                scale(1)
                rotate(0deg);
            }
          }

          .digital-process-icon {
            opacity: 0;
          }

          .digital-process-visible
            .digital-process-card
            .digital-process-icon {
            animation:
              processIconReveal
              0.7s
              cubic-bezier(0.16, 1, 0.3, 1)
              forwards;
          }

          .digital-process-visible
            .digital-process-card:nth-child(1)
            .digital-process-icon {
            animation-delay: 0.2s;
          }

          .digital-process-visible
            .digital-process-card:nth-child(2)
            .digital-process-icon {
            animation-delay: 0.3s;
          }

          .digital-process-visible
            .digital-process-card:nth-child(3)
            .digital-process-icon {
            animation-delay: 0.4s;
          }

          .digital-process-visible
            .digital-process-card:nth-child(4)
            .digital-process-icon {
            animation-delay: 0.5s;
          }

          .digital-process-visible
            .digital-process-card:nth-child(5)
            .digital-process-icon {
            animation-delay: 0.6s;
          }

          /* =================================================
             PROCESS CONNECTING LINE
          ================================================= */

          .digital-process-line {
            transform-origin: left center;
            transform: scaleX(0);
            opacity: 0;
          }

          @keyframes lineDraw {
            0% {
              transform: scaleX(0);
              opacity: 0;
            }

            30% {
              opacity: 1;
            }

            100% {
              transform: scaleX(1);
              opacity: 1;
            }
          }

          .digital-process-visible
            .digital-process-card:nth-child(1)
            .digital-process-line {
            animation:
              lineDraw
              0.7s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.45s
              forwards;
          }

          .digital-process-visible
            .digital-process-card:nth-child(2)
            .digital-process-line {
            animation:
              lineDraw
              0.7s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.55s
              forwards;
          }

          .digital-process-visible
            .digital-process-card:nth-child(3)
            .digital-process-line {
            animation:
              lineDraw
              0.7s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.65s
              forwards;
          }

          .digital-process-visible
            .digital-process-card:nth-child(4)
            .digital-process-line {
            animation:
              lineDraw
              0.7s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.75s
              forwards;
          }

          /* =================================================
             MEDIA HEADING
          ================================================= */

          @keyframes mediaHeadingReveal {
            0% {
              opacity: 0;
              transform: translate3d(0, 35px, 0);
              clip-path: inset(100% 0 0 0);
            }

            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0);
              clip-path: inset(0 0 0 0);
            }
          }

          .digital-media-heading {
            opacity: 0;
          }

          .digital-media-visible .digital-media-heading {
            animation:
              mediaHeadingReveal
              0.9s
              cubic-bezier(0.16, 1, 0.3, 1)
              forwards;
          }

          /* =================================================
             MEDIA LOGOS
          ================================================= */

          @keyframes mediaLogoReveal {
            0% {
              opacity: 0;
              transform:
                translate3d(0, 25px, 0)
                scale(0.94);
              filter: blur(4px);
            }

            100% {
              opacity: 1;
              transform:
                translate3d(0, 0, 0)
                scale(1);
              filter: blur(0);
            }
          }

          .digital-media-logo {
            opacity: 0;
          }

          .digital-media-visible .digital-media-logo:nth-child(1) {
            animation:
              mediaLogoReveal
              0.65s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.2s
              forwards;
          }

          .digital-media-visible .digital-media-logo:nth-child(2) {
            animation:
              mediaLogoReveal
              0.65s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.3s
              forwards;
          }

          .digital-media-visible .digital-media-logo:nth-child(3) {
            animation:
              mediaLogoReveal
              0.65s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.4s
              forwards;
          }

          .digital-media-visible .digital-media-logo:nth-child(4) {
            animation:
              mediaLogoReveal
              0.65s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.5s
              forwards;
          }

          .digital-media-visible .digital-media-logo:nth-child(5) {
            animation:
              mediaLogoReveal
              0.65s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.6s
              forwards;
          }

          .digital-media-visible .digital-media-logo:nth-child(6) {
            animation:
              mediaLogoReveal
              0.65s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.7s
              forwards;
          }

          /* =================================================
             DOODLE
          ================================================= */

          .digital-doodle,
          .digital-media-doodle {
            stroke-dasharray: 180;
            stroke-dashoffset: 180;
            opacity: 0;
          }

          .digital-process-visible .digital-doodle {
            animation:
              doodleDraw
              1.1s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.35s
              forwards;
          }

          .digital-media-visible .digital-media-doodle {
            animation:
              doodleDraw
              1.1s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.15s
              forwards;
          }

          @keyframes doodleDraw {
            0% {
              stroke-dashoffset: 180;
              opacity: 0;
            }

            15% {
              opacity: 1;
            }

            100% {
              stroke-dashoffset: 0;
              opacity: 1;
            }
          }

          /* =================================================
             MEDIA EYEBROW
          ================================================= */

          .digital-media-eyebrow {
            opacity: 0;
            transform: translate3d(-25px, 0, 0);
          }

          .digital-media-visible .digital-media-eyebrow {
            opacity: 1;
            transform: translate3d(0, 0, 0);

            transition:
              opacity 0.65s ease,
              transform 0.75s
                cubic-bezier(0.16, 1, 0.3, 1);

            transition-delay: 0.08s;
          }

          /* =================================================
             MORE
          ================================================= */

          .digital-more {
            opacity: 0;
            transform: translate3d(0, 10px, 0);
          }

          .digital-media-visible .digital-more {
            opacity: 1;
            transform: translate3d(0, 0, 0);

            transition:
              opacity 0.6s ease,
              transform 0.6s
                cubic-bezier(0.16, 1, 0.3, 1);

            transition-delay: 0.85s;
          }

          /* =================================================
             BUTTON
          ================================================= */

          .digital-story-button {
            transition:
              transform 0.35s
                cubic-bezier(0.16, 1, 0.3, 1),
              background-color 0.3s ease,
              box-shadow 0.35s ease;
          }

          .digital-story-button:hover {
            transform: translate3d(4px, -3px, 0);
          }

          .digital-story-button:active {
            transform:
              translate3d(1px, 0, 0)
              scale(0.97);
          }

          /* =================================================
             PROCESS CARD
          ================================================= */

          .digital-process-card {
            transition:
              transform 0.35s
                cubic-bezier(0.16, 1, 0.3, 1);
          }

          .digital-process-card:hover {
            transform: translate3d(0, -4px, 0);
          }

          .digital-process-card
            .digital-process-icon {
            transition:
              transform 0.4s
                cubic-bezier(0.16, 1, 0.3, 1);
          }

          .digital-process-card:hover
            .digital-process-icon {
            transform:
              scale(1.06)
              rotate(3deg);
          }

          /* =================================================
             TABLET
          ================================================= */

          @media (min-width: 768px) and (max-width: 1023px) {

            .digital-process-card {
              min-height: 165px;
            }

            .digital-process-card p {
              max-width: 190px;
            }

            .digital-pr-image img {
              max-width: 700px;
            }
          }

          /* =================================================
             MOBILE
          ================================================= */

          @media (max-width: 767px) {

            .digital-pr-image {
              transform:
                translate3d(0, 30px, 0)
                scale(0.96);
            }

            .digital-pr-image.is-visible {
              animation:
                digitalImageReveal
                0.95s
                cubic-bezier(0.16, 1, 0.3, 1)
                0.1s
                forwards;
            }

            .digital-pr-image img {
              width: 100%;
              max-width: 620px;
            }

            .digital-process-card {
              min-height: 145px;
            }

            .digital-process-card p {
              max-width: 260px;
            }

            .digital-process-icon {
              height: 50px;
              width: 50px;
            }

            .digital-media-logo {
              min-height: 60px;
            }
          }

          /* =================================================
             VERY SMALL MOBILE
          ================================================= */

          @media (max-width: 380px) {

            .digital-process-card {
              min-height: 135px;
            }

            .digital-story-button {
              width: 100%;
              justify-content: space-between;
            }
          }

          /* =================================================
             REDUCED MOTION
          ================================================= */

          @media (prefers-reduced-motion: reduce) {

            .digital-letter,
            .digital-fade-up,
            .digital-pr-image,
            .digital-process-intro,
            .digital-process-card,
            .digital-process-icon,
            .digital-process-line,
            .digital-media-heading,
            .digital-media-logo,
            .digital-doodle,
            .digital-media-doodle,
            .digital-media-eyebrow,
            .digital-more,
            .digital-underline {
              opacity: 1 !important;
              transform: none !important;
              filter: none !important;
              clip-path: none !important;
              animation: none !important;
              transition: none !important;
            }
          }
        `}
      </style>

      <main className="digital-page">

        {/* =====================================================
            PART 1 — HERO
        ===================================================== */}

        <section
          ref={heroRef}
          className={`
            ${heroVisible ? "digital-hero-visible" : ""}
            relative
            w-full
            overflow-hidden
            bg-[#f7f6ee]
            text-[#111a21]
          `}
        >
          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[1440px]
              grid-cols-1
              lg:min-h-[700px]
              lg:grid-cols-[42%_58%]
            "
          >

            {/* =============================================
                LEFT CONTENT
            ============================================= */}

            <div
              className="
                relative
                z-10
                flex
                flex-col
                justify-center
                px-5
                py-14
                sm:px-8
                sm:py-16
                md:px-10
                md:py-20
                lg:min-h-[700px]
                lg:px-12
                lg:py-10
                xl:px-14
                2xl:px-16
              "
            >

              {/* EYEBROW */}

              <div
                className={`
                  digital-fade-up
                  ${heroVisible ? "is-visible" : ""}
                  mb-5
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.03em]
                  text-[#f04444]
                  sm:text-[11px]
                  md:text-[12px]
                `}
                style={{
                  animationDelay: "0.05s",
                }}
              >
                DIGITAL PR &amp; MEDIA OUTREACH
              </div>

              {/* HEADING */}

              <h1
                className="
                  max-w-[600px]
                  text-[clamp(42px,8vw,70px)]
                  font-bold
                  leading-[0.94]
                  tracking-[-0.045em]
                  text-[#101920]
                "
              >
                <span className="block">
                  {revealText("Real stories.")}
                </span>

                <span className="relative block">
                  {revealText("Bigger reach.")}

                  <span
                    className="
                      digital-underline
                      absolute
                      bottom-[-5px]
                      left-0
                      h-[4px]
                      w-[95px]
                      rounded-full
                      bg-[#f5c928]
                      sm:h-[5px]
                      sm:w-[115px]
                      md:w-[125px]
                    "
                  />
                </span>
              </h1>

              {/* DESCRIPTION */}

              <p
                className={`
                  digital-fade-up
                  ${heroVisible ? "is-visible" : ""}
                  mt-6
                  max-w-[510px]
                  text-[14px]
                  font-normal
                  leading-[1.55]
                  tracking-[-0.01em]
                  text-[#59636a]
                  sm:mt-7
                  sm:text-[16px]
                  md:text-[17px]
                  lg:mt-8
                  lg:text-[18px]
                `}
                style={{
                  animationDelay: "0.5s",
                }}
              >
                We help brands get noticed, get talked about and get the right
                kind of attention. Through strategic media outreach, compelling
                storytelling and meaningful relationships with journalists,
                creators and industry voices.
              </p>

              {/* BUTTON */}

              <div
                className={`
                  digital-fade-up
                  ${heroVisible ? "is-visible" : ""}
                  mt-7
                  w-full
                  sm:mt-8
                  sm:w-auto
                `}
                style={{
                  animationDelay: "0.7s",
                }}
              >
                <button
                  type="button"
                  className="
                    digital-story-button
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-between
                    gap-5
                    rounded-full
                    bg-[#101920]
                    px-6
                    py-3.5
                    text-[11px]
                    font-bold
                    text-white
                    hover:bg-[#18262d]
                    hover:shadow-lg
                    sm:w-auto
                    sm:px-7
                    sm:py-4
                    sm:text-[12px]
                  "
                >
                  <span>Let's Build Your Story</span>

                  <span
                    className="
                      text-[17px]
                      leading-none
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* =============================================
                RIGHT ARTWORK
            ============================================= */}

            <div
              className={`
                digital-pr-image
                ${heroVisible ? "is-visible" : ""}
                relative
                flex
                min-h-[300px]
                items-center
                justify-center
                overflow-hidden
                px-4
                pb-10
                sm:min-h-[380px]
                sm:px-6
                sm:pb-12
                md:min-h-[440px]
                md:px-8
                lg:min-h-[700px]
                lg:px-0
                lg:pb-0
              `}
            >
              <img
                src="/Service/digital-pr-right-side.png"
                alt=""
                className="
                  h-auto
                  w-full
                  max-w-[620px]
                  object-contain
                  sm:max-w-[700px]
                  md:max-w-[780px]
                  lg:max-w-[900px]
                  xl:max-w-[1000px]
                "
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            PART 2 — PROCESS
        ===================================================== */}

        <section
          ref={processRef}
          className={`
            ${processVisible ? "digital-process-visible" : ""}
            w-full
            overflow-hidden
            bg-[#071014]
            px-5
            py-12
            text-white
            sm:px-8
            sm:py-14
            md:px-10
            lg:px-12
            lg:py-16
            xl:px-14
          `}
        >
          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[1440px]
              grid-cols-1
              gap-10
              lg:grid-cols-[210px_1fr]
              lg:gap-8
              xl:grid-cols-[220px_1fr]
              xl:gap-10
            "
          >

            {/* LEFT CONTENT */}

            <div className="digital-process-intro relative">

              <p
                className="
                  mb-3
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.03em]
                  text-[#f5d01b]
                  sm:text-[10px]
                "
              >
                OUR PROCESS
              </p>

              <h2
                className="
                  max-w-[250px]
                  text-[clamp(28px,4vw,34px)]
                  font-bold
                  leading-[0.98]
                  tracking-[-0.04em]
                  text-[#f5f7f6]
                "
              >
                From story
                <br />
                to spotlight.
              </h2>

              <p
                className="
                  mt-4
                  max-w-[270px]
                  text-[10px]
                  font-normal
                  leading-[1.45]
                  text-[#c2c9cb]
                  sm:text-[11px]
                "
              >
                We combine media intelligence, creative storytelling and
                strategic outreach to get your brand featured where it matters
                most.
              </p>

              <svg
                viewBox="0 0 70 20"
                className="
                  mt-4
                  h-[16px]
                  w-[58px]
                  sm:h-[18px]
                  sm:w-[65px]
                "
                fill="none"
              >
                <path
                  className="digital-doodle"
                  d="M2 15C7 8 10 18 15 11C20 4 23 16 28 10C33 4 37 15 42 9C47 3 51 13 56 8C61 3 65 8 68 5"
                  stroke="#F5D01B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* PROCESS STEPS */}

            <div className="grid w-full grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-10 lg:grid-cols-5 lg:gap-0">

              {/* 01 */}
              <div className="digital-process-card relative flex min-w-0 flex-col">
                <div className="relative flex items-center">
                  <div className="digital-process-icon flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#ff4055] sm:h-[55px] sm:w-[55px]">
                    <Search size={22} strokeWidth={2} className="text-[#11181d] sm:h-6 sm:w-6" />
                  </div>

                  <div className="absolute left-[60px] right-[8px] top-1/2 hidden -translate-y-1/2 items-center lg:flex">
                    <div className="digital-process-line h-px w-full bg-[#626b6e]" />
                    <ArrowRight size={13} strokeWidth={1.5} className="shrink-0 text-[#9da4a6]" />
                  </div>
                </div>

                <span className="mt-2 text-[8px] font-medium text-[#aeb6b8] sm:text-[9px]">
                  01
                </span>

                <h3 className="mt-1 text-[12px] font-extrabold leading-[1.15] tracking-[-0.01em] text-[#f4f6f5] sm:text-[14px] md:text-[15px]">
                  Research
                </h3>

                <p className="mt-1.5 max-w-[160px] text-[9px] font-medium leading-[1.45] text-[#aeb6b8] sm:max-w-[180px] sm:text-[10px]">
                  Identify the right media, journalists and platforms.
                </p>
              </div>

              {/* 02 */}
              <div className="digital-process-card relative flex min-w-0 flex-col">
                <div className="relative flex items-center">
                  <div className="digital-process-icon flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#ffd21c] sm:h-[55px] sm:w-[55px]">
                    <FileText size={22} strokeWidth={2} className="text-[#11181d] sm:h-6 sm:w-6" />
                  </div>

                  <div className="absolute left-[60px] right-[8px] top-1/2 hidden -translate-y-1/2 items-center lg:flex">
                    <div className="digital-process-line h-px w-full bg-[#626b6e]" />
                    <ArrowRight size={13} strokeWidth={1.5} className="shrink-0 text-[#9da4a6]" />
                  </div>
                </div>

                <span className="mt-2 text-[8px] font-medium text-[#aeb6b8] sm:text-[9px]">
                  02
                </span>

                <h3 className="mt-1 text-[12px] font-extrabold leading-[1.15] tracking-[-0.01em] text-[#f4f6f5] sm:text-[14px] md:text-[15px]">
                  Craft
                </h3>

                <p className="mt-1.5 max-w-[160px] text-[9px] font-medium leading-[1.45] text-[#aeb6b8] sm:max-w-[180px] sm:text-[10px]">
                  Build a compelling story and key messages.
                </p>
              </div>

              {/* 03 */}
              <div className="digital-process-card relative flex min-w-0 flex-col">
                <div className="relative flex items-center">
                  <div className="digital-process-icon flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#29bceb] sm:h-[55px] sm:w-[55px]">
                    <Mail size={22} strokeWidth={2} className="text-[#11181d] sm:h-6 sm:w-6" />
                  </div>

                  <div className="absolute left-[60px] right-[8px] top-1/2 hidden -translate-y-1/2 items-center lg:flex">
                    <div className="digital-process-line h-px w-full bg-[#626b6e]" />
                    <ArrowRight size={13} strokeWidth={1.5} className="shrink-0 text-[#9da4a6]" />
                  </div>
                </div>

                <span className="mt-2 text-[8px] font-medium text-[#aeb6b8] sm:text-[9px]">
                  03
                </span>

                <h3 className="mt-1 text-[12px] font-extrabold leading-[1.15] tracking-[-0.01em] text-[#f4f6f5] sm:text-[14px] md:text-[15px]">
                  Outreach
                </h3>

                <p className="mt-1.5 max-w-[160px] text-[9px] font-medium leading-[1.45] text-[#aeb6b8] sm:max-w-[180px] sm:text-[10px]">
                  Pitch to journalists, editors and media partners.
                </p>
              </div>

              {/* 04 */}
              <div className="digital-process-card relative flex min-w-0 flex-col">
                <div className="relative flex items-center">
                  <div className="digital-process-icon flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#f5f5ef] sm:h-[55px] sm:w-[55px]">
                    <Star size={22} strokeWidth={2} className="text-[#11181d] sm:h-6 sm:w-6" />
                  </div>

                  <div className="absolute left-[60px] right-[8px] top-1/2 hidden -translate-y-1/2 items-center lg:flex">
                    <div className="digital-process-line h-px w-full bg-[#626b6e]" />
                    <ArrowRight size={13} strokeWidth={1.5} className="shrink-0 text-[#9da4a6]" />
                  </div>
                </div>

                <span className="mt-2 text-[8px] font-medium text-[#aeb6b8] sm:text-[9px]">
                  04
                </span>

                <h3 className="mt-1 text-[12px] font-extrabold leading-[1.15] tracking-[-0.01em] text-[#f4f6f5] sm:text-[14px] md:text-[15px]">
                  Coverage
                </h3>

                <p className="mt-1.5 max-w-[160px] text-[9px] font-medium leading-[1.45] text-[#aeb6b8] sm:max-w-[180px] sm:text-[10px]">
                  Secure features, interviews and placements.
                </p>
              </div>

              {/* 05 */}
              <div className="digital-process-card relative flex min-w-0 flex-col">
                <div className="relative flex items-center">
                  <div className="digital-process-icon flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#ffd21c] sm:h-[55px] sm:w-[55px]">
                    <BarChart3 size={22} strokeWidth={2} className="text-[#11181d] sm:h-6 sm:w-6" />
                  </div>
                </div>

                <span className="mt-2 text-[8px] font-medium text-[#aeb6b8] sm:text-[9px]">
                  05
                </span>

                <h3 className="mt-1 text-[12px] font-extrabold leading-[1.15] tracking-[-0.01em] text-[#f4f6f5] sm:text-[14px] md:text-[15px]">
                  Amplify
                </h3>

                <p className="mt-1.5 max-w-[160px] text-[9px] font-medium leading-[1.45] text-[#aeb6b8] sm:max-w-[180px] sm:text-[10px]">
                  Share across digital channels for greater impact.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            PART 3 — MEDIA OUTLETS
        ===================================================== */}

        <section
          ref={mediaRef}
          className={`
            ${mediaVisible ? "digital-media-visible" : ""}
            w-full
            overflow-hidden
            bg-[#f7f6ee]
            px-5
            py-12
            sm:px-8
            sm:py-14
            md:px-10
            lg:px-12
            lg:py-16
            xl:px-14
          `}
        >
          <div className="relative mx-auto w-full max-w-[1440px]">

            {/* YELLOW DRAWN LINE */}

            <svg viewBox="0 0 80 35" className="digital-media-doodle pointer-events-none absolute right-0 top-0 h-[28px] w-[60px] sm:right-2 sm:h-[34px] sm:w-[72px] md:right-5 md:h-[38px] md:w-[80px] lg:right-8" fill="none">
              <path d="M3 29C10 19 15 9 22 7C29 5 22 25 30 25C39 24 42 6 49 4C57 2 49 25 58 23C65 21 69 10 77 5" stroke="#F5C928" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            {/* EYEBROW */}

            <p className="digital-media-eyebrow mb-2 pr-[70px] text-[8px] font-extrabold uppercase tracking-[0.03em] text-[#343b3e] sm:pr-[85px] sm:text-[9px] md:pr-0 md:text-[10px]">
              MEDIA OUTLETS WE WORK WITH
            </p>

            {/* HEADING */}

            <h2 className="digital-media-heading max-w-[560px] text-[clamp(26px,6vw,36px)] font-bold leading-[0.98] tracking-[-0.04em] text-[#101920]">
              From top publications
              <br />
              to trusted platforms.
            </h2>

            {/* LOGOS */}

            <div className="mt-7 grid grid-cols-2 overflow-hidden border-l border-t border-[#d8d8d0] sm:mt-8 md:grid-cols-3">

              {/* THE HINDU */}

              <div className="digital-media-logo flex min-h-[72px] w-full items-center justify-center border-b border-r border-[#d8d8d0] px-3 py-4 sm:min-h-[82px] sm:px-4 md:min-h-[88px]">
                <img src="/images/thehindu.png" alt="The Hindu" className="block h-auto w-[62px] max-w-full object-contain sm:w-[76px] md:w-[84px]" />
              </div>

              {/* NDTV */}

              <div className="digital-media-logo flex min-h-[72px] w-full items-center justify-center border-b border-r border-[#d8d8d0] px-3 py-4 sm:min-h-[82px] sm:px-4 md:min-h-[88px]">
                <img src="/images/ndtv.png" alt="NDTV" className="block h-auto w-[52px] max-w-full object-contain sm:w-[64px] md:w-[72px]" />
              </div>

              {/* BUSINESS TODAY */}

              <div className="digital-media-logo flex min-h-[72px] w-full items-center justify-center border-b border-r border-[#d8d8d0] px-3 py-4 sm:min-h-[82px] sm:px-4 md:min-h-[88px]">
                <img src="/images/businesstoday.png" alt="Business Today" className="block h-auto w-[96px] max-w-full object-contain sm:w-[118px] md:w-[135px]" />
              </div>

              {/* MINT */}

              <div className="digital-media-logo flex min-h-[72px] w-full items-center justify-center border-b border-r border-[#d8d8d0] px-3 py-4 sm:min-h-[82px] sm:px-4 md:min-h-[88px]">
                <img src="/images/mint.png" alt="Mint" className="block h-auto w-[52px] max-w-full object-contain sm:w-[64px] md:w-[72px]" />
              </div>

              {/* FORBES */}

              <div className="digital-media-logo flex min-h-[72px] w-full items-center justify-center border-b border-r border-[#d8d8d0] px-3 py-4 sm:min-h-[82px] sm:px-4 md:min-h-[88px]">
                <img src="/images/forbes.png" alt="Forbes" className="block h-auto w-[58px] max-w-full object-contain sm:w-[72px] md:w-[82px]" />
              </div>

              {/* TIMES NOW */}

              <div className="digital-media-logo flex min-h-[72px] w-full items-center justify-center border-b border-r border-[#d8d8d0] px-3 py-4 sm:min-h-[82px] sm:px-4 md:min-h-[88px]">
                <img src="/images/timesnow.png" alt="Times Now" className="block h-auto w-[52px] max-w-full object-contain sm:w-[64px] md:w-[72px]" />
              </div>

            </div>

          </div>
        </section>
      </main>
    </>
  );
}