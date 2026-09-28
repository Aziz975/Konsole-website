import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  FileText,
  Mail,
  Star,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export default function DigitalMedia() {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = heroRef.current;

    if (!section) return;

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

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const revealText = (text) => {
    return (
      <span className="inline-block">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block"
            style={{
              opacity: visible ? 1 : 0,
              animation: visible
                ? "letterReveal 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards"
                : "none",
              animationDelay: `${index * 0.025}s`,
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
      <style>
        {`
          @keyframes letterReveal {
            0% {
              opacity: 0;
              transform: translateY(100%) rotate(5deg);
              filter: blur(5px);
            }

            70% {
              opacity: 1;
              transform: translateY(-5%) rotate(0deg);
              filter: blur(0);
            }

            100% {
              opacity: 1;
              transform: translateY(0) rotate(0deg);
              filter: blur(0);
            }
          }

          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(25px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes imageReveal {
            0% {
              opacity: 0;
              transform: translateX(35px) scale(0.97);
              filter: blur(5px);
            }

            100% {
              opacity: 1;
              transform: translateX(0) scale(1);
              filter: blur(0);
            }
          }

          .digital-pr-fade-up {
            opacity: 0;
          }

          .digital-pr-fade-up.is-visible {
            animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)
              forwards;
          }

          .digital-pr-image {
            opacity: 0;
          }

          .digital-pr-image.is-visible {
            animation: imageReveal 1s cubic-bezier(0.22, 1, 0.36, 1)
              0.15s forwards;
          }
        `}
      </style>

      <section
        ref={heroRef}
        className="relative min-h-[650px] w-full overflow-hidden bg-[#f7f6ee] text-[#111a21] lg:min-h-[100px]"
      >
        <div className="mx-auto flex min-h-[650px] w-full max-w-[1440px] flex-col lg:grid lg:min-h-[700px] lg:grid-cols-[42%_58%]">

          {/* LEFT CONTENT */}
          <div className="relative z-10 flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:min-h-[700px] lg:px-12 lg:py-10 xl:px-14 xl:py-12 2xl:px-16">

            {/* EYEBROW */}
            <div
              className={`digital-pr-fade-up ${
                visible ? "is-visible" : ""
              } mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f04444] sm:text-[11px] md:text-[12px]`}
              style={{
                animationDelay: "0.05s",
              }}
            >
              DIGITAL PR &amp; MEDIA OUTREACH
            </div>

            {/* HEADING */}
            <h1 className="max-w-[560px] text-[48px] font-bold leading-[0.96] tracking-[-0.045em] text-[#101920] sm:text-[58px] md:text-[50px] lg:text-[70px] xl:text-[60px]">
              <span className="block ">
                {revealText("Real stories.")}
              </span>

              <span className="relative block ">
                {revealText("Bigger reach.")}

                <span
                  className={`absolute bottom-[-3px] left-0 h-[5px] w-[110px] rounded-full bg-[#f5c928] transition-all duration-700 sm:bottom-[-5px] sm:h-[6px] sm:w-[125px] ${
                    visible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-5 opacity-0"
                  }`}
                  style={{
                    transitionDelay: "0.55s",
                  }}
                />
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className={`digital-pr-fade-up ${
                visible ? "is-visible" : ""
              } mt-7 max-w-[500px] text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-[#59636a] sm:text-[16px] md:text-[17px] lg:mt-8 lg:text-[18px]`}
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
              className={`digital-pr-fade-up ${
                visible ? "is-visible" : ""
              } mt-7 sm:mt-8`}
              style={{
                animationDelay: "0.7s",
              }}
            >
              <button
                type="button"
                className="group inline-flex items-center gap-5 rounded-full bg-[#101920] px-6 py-3.5 text-[11px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#18262d] hover:shadow-lg sm:px-7 sm:py-4 sm:text-[12px]"
              >
                <span>Let's Build Your Story</span>

                <span className="text-[17px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT ARTWORK */}
          <div
            className={`digital-pr-image ${
              visible ? "is-visible" : ""
            } relative flex min-h-[45vh] items-center justify-center overflow-hidden px-4 pb-10 sm:min-h-[50vh] sm:px-6 sm:pb-12 md:min-h-[55vh] md:px-8 lg:min-h-[700px] lg:px-0 lg:pb-0`}
          >
            <img
              src="/Service/digital-pr-right-side.png"
              alt=""
              className="h-auto w-full max-w-[850px] object-contain lg:max-w-[900px] xl:max-w-[1000px]"
            />
          </div>
        </div>
      </section>



      {/* part 2 */}

      <section className="w-full overflow-hidden bg-[#071014] px-5 py-10 text-white sm:px-8 sm:py-12 md:px-10 lg:px-12 lg:py-14 xl:px-14">
  <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[210px_1fr] lg:gap-8 xl:grid-cols-[220px_1fr] xl:gap-10">

    {/* LEFT CONTENT */}
    <div className="relative">
      <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.03em] text-[#f5d01b] sm:text-[10px]">
        OUR PROCESS
      </p>

      <h2 className="max-w-[210px] text-[28px] font-bold leading-[0.98] tracking-[-0.04em] text-[#f5f7f6] sm:text-[32px] md:text-[34px] lg:text-[31px] xl:text-[32px]">
        From story
        <br />
        to spotlight.
      </h2>

      <p className="mt-4 max-w-[215px] text-[10px] font-normal leading-[1.45] text-[#c2c9cb] sm:text-[11px]">
        We combine media intelligence, creative storytelling and strategic
        outreach to get your brand featured where it matters most.
      </p>

      {/* YELLOW DECORATIVE LINE */}
      <svg
        viewBox="0 0 70 20"
        className="mt-4 h-[16px] w-[58px] sm:h-[18px] sm:w-[65px]"
        fill="none"
      >
        <path
          d="M2 15C7 8 10 18 15 11C20 4 23 16 28 10C33 4 37 15 42 9C47 3 51 13 56 8C61 3 65 8 68 5"
          stroke="#F5D01B"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>

    {/* PROCESS STEPS */}
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-0">

      {/* 01 RESEARCH */}
      <div className="relative flex flex-col">
        <div className="relative flex items-center">
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#ff4055] sm:h-[55px] sm:w-[55px]">
            <Search size={24} strokeWidth={2} className="text-[#11181d]" />
          </div>

          <div className="absolute left-[65px] right-[8px] top-1/2 hidden -translate-y-1/2 items-center lg:flex">
            <div className="h-px w-full bg-[#626b6e]" />
            <ArrowRight
              size={13}
              strokeWidth={1.5}
              className="shrink-0 text-[#9da4a6]"
            />
          </div>
        </div>

        <span className="mt-2 text-[8px] font-medium text-[#aeb6b8] sm:text-[9px]">
          01
        </span>

        <h3 className="mt-1 text-[13px] font-extrabold leading-[1.15] tracking-[-0.01em] text-[#f4f6f5] sm:text-[14px] md:text-[15px]">
          Research
        </h3>

        <p className="mt-1.5 max-w-[145px] text-[9px] font-medium leading-[1.45] text-[#aeb6b8] sm:text-[10px]">
          Identify the right media, journalists and platforms.
        </p>
      </div>

      {/* 02 CRAFT */}
      <div className="relative flex flex-col">
        <div className="relative flex items-center">
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#ffd21c] sm:h-[55px] sm:w-[55px]">
            <FileText size={24} strokeWidth={2} className="text-[#11181d]" />
          </div>

          <div className="absolute left-[65px] right-[8px] top-1/2 hidden -translate-y-1/2 items-center lg:flex">
            <div className="h-px w-full bg-[#626b6e]" />
            <ArrowRight
              size={13}
              strokeWidth={1.5}
              className="shrink-0 text-[#9da4a6]"
            />
          </div>
        </div>

        <span className="mt-2 text-[8px] font-medium text-[#aeb6b8] sm:text-[9px]">
          02
        </span>

        <h3 className="mt-1 text-[13px] font-extrabold leading-[1.15] tracking-[-0.01em] text-[#f4f6f5] sm:text-[14px] md:text-[15px]">
          Craft
        </h3>

        <p className="mt-1.5 max-w-[145px] text-[9px] font-medium leading-[1.45] text-[#aeb6b8] sm:text-[10px]">
          Build a compelling story and key messages.
        </p>
      </div>

      {/* 03 OUTREACH */}
      <div className="relative flex flex-col">
        <div className="relative flex items-center">
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#29bceb] sm:h-[55px] sm:w-[55px]">
            <Mail size={24} strokeWidth={2} className="text-[#11181d]" />
          </div>

          <div className="absolute left-[65px] right-[8px] top-1/2 hidden -translate-y-1/2 items-center lg:flex">
            <div className="h-px w-full bg-[#626b6e]" />
            <ArrowRight
              size={13}
              strokeWidth={1.5}
              className="shrink-0 text-[#9da4a6]"
            />
          </div>
        </div>

        <span className="mt-2 text-[8px] font-medium text-[#aeb6b8] sm:text-[9px]">
          03
        </span>

        <h3 className="mt-1 text-[13px] font-extrabold leading-[1.15] tracking-[-0.01em] text-[#f4f6f5] sm:text-[14px] md:text-[15px]">
          Outreach
        </h3>

        <p className="mt-1.5 max-w-[145px] text-[9px] font-medium leading-[1.45] text-[#aeb6b8] sm:text-[10px]">
          Pitch to journalists, editors and media partners.
        </p>
      </div>

      {/* 04 COVERAGE */}
      <div className="relative flex flex-col">
        <div className="relative flex items-center">
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#f5f5ef] sm:h-[55px] sm:w-[55px]">
            <Star size={24} strokeWidth={2} className="text-[#11181d]" />
          </div>

          <div className="absolute left-[65px] right-[8px] top-1/2 hidden -translate-y-1/2 items-center lg:flex">
            <div className="h-px w-full bg-[#626b6e]" />
            <ArrowRight
              size={13}
              strokeWidth={1.5}
              className="shrink-0 text-[#9da4a6]"
            />
          </div>
        </div>

        <span className="mt-2 text-[8px] font-medium text-[#aeb6b8] sm:text-[9px]">
          04
        </span>

        <h3 className="mt-1 text-[13px] font-extrabold leading-[1.15] tracking-[-0.01em] text-[#f4f6f5] sm:text-[14px] md:text-[15px]">
          Coverage
        </h3>

        <p className="mt-1.5 max-w-[145px] text-[9px] font-medium leading-[1.45] text-[#aeb6b8] sm:text-[10px]">
          Secure features, interviews and placements.
        </p>
      </div>

      {/* 05 AMPLIFY */}
      <div className="relative flex flex-col">
        <div className="relative flex items-center">
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#ffd21c] sm:h-[55px] sm:w-[55px]">
            <BarChart3 size={24} strokeWidth={2} className="text-[#11181d]" />
          </div>
        </div>

        <span className="mt-2 text-[8px] font-medium text-[#aeb6b8] sm:text-[9px]">
          05
        </span>

        <h3 className="mt-1 text-[13px] font-extrabold leading-[1.15] tracking-[-0.01em] text-[#f4f6f5] sm:text-[14px] md:text-[15px]">
          Amplify
        </h3>

        <p className="mt-1.5 max-w-[145px] text-[9px] font-medium leading-[1.45] text-[#aeb6b8] sm:text-[10px]">
          Share across digital channels for greater impact.
        </p>
      </div>

    </div>
  </div>
</section>


{/* part 3 */}

<section className="w-full overflow-hidden bg-[#f7f6ee] px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-12 lg:py-11 xl:px-14">
  <div className="relative mx-auto w-full max-w-[1440px]">

    {/* YELLOW HAND-DRAWN LINE */}
    <svg
      viewBox="0 0 80 35"
      className="absolute right-2 top-0 h-[32px] w-[68px] sm:right-4 sm:h-[38px] sm:w-[80px] md:right-8"
      fill="none"
    >
      <path
        d="M3 29C10 19 15 9 22 7C29 5 22 25 30 25C39 24 42 6 49 4C57 2 49 25 58 23C65 21 69 10 77 5"
        stroke="#F5C928"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>

    {/* EYEBROW */}
    <p className="mb-2 text-[8px] font-extrabold uppercase tracking-[0.03em] text-[#343b3e] sm:text-[9px] md:text-[10px]">
      MEDIA OUTLETS WE WORK WITH
    </p>

    {/* HEADING */}
    <h2 className="max-w-[500px] text-[26px] font-bold leading-[0.98] tracking-[-0.04em] text-[#101920] sm:text-[30px] md:text-[34px] lg:text-[36px]">
      From top publications
      <br />
      to trusted platforms.
    </h2>

    {/* LOGOS */}
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3">

      {/* THE HINDU */}
      <div className="flex h-[48px] items-center justify-start border-b border-[#d8d8d0] px-0 sm:h-[52px] sm:border-r sm:px-4 sm:py-2">
        <img
          src="/Service"
          alt="The Hindu"
          className="h-auto w-[68px] max-w-full object-contain sm:w-[78px] md:w-[84px]"
        />
      </div>

      {/* NDTV */}
      <div className="flex h-[48px] items-center justify-start border-b border-[#d8d8d0] px-4 sm:h-[52px] sm:border-r sm:py-2">
        <img
          src=""
          alt="NDTV"
          className="h-auto w-[55px] max-w-full object-contain sm:w-[65px] md:w-[72px]"
        />
      </div>

      {/* BUSINESS TODAY */}
      <div className="flex h-[48px] items-center justify-start border-b border-[#d8d8d0] px-4 sm:h-[52px] sm:px-4 sm:py-2">
        <img
          src=""
          alt="Business Today"
          className="h-auto w-[105px] max-w-full object-contain sm:w-[120px] md:w-[135px]"
        />
      </div>

      {/* MINT */}
      <div className="flex h-[48px] items-center justify-start px-0 sm:h-[52px] sm:border-r sm:border-[#d8d8d0] sm:px-4 sm:py-2">
        <img
          src=""
          alt="Mint"
          className="h-auto w-[55px] max-w-full object-contain sm:w-[65px] md:w-[72px]"
        />
      </div>

      {/* FORBES */}
      <div className="flex h-[48px] items-center justify-start px-4 sm:h-[52px] sm:border-r sm:border-[#d8d8d0] sm:py-2">
        <img
          src=""
          alt="Forbes"
          className="h-auto w-[62px] max-w-full object-contain sm:w-[72px] md:w-[82px]"
        />
      </div>

      {/* TIMES NOW */}
      <div className="flex h-[48px] items-center justify-start px-4 sm:h-[52px] sm:py-2">
        <img
          src=""
          alt="Times Now"
          className="h-auto w-[55px] max-w-full object-contain sm:w-[65px] md:w-[72px]"
        />
      </div>

    </div>

    {/* MORE */}
    <div className="flex justify-end pt-1">
      <span className="text-[20px] font-bold leading-none tracking-[0.18em] text-[#101010] sm:text-[22px]">
        ...
      </span>
    </div>

  </div>
</section>

    </>
  );
}