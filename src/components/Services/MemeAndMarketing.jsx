import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const marketingCards = [
  {
    title: "Reactive Marketing",
    description: "Real-time memes and quick-turn content on trending topics.",
    image: "/Service/reactive-marketing.png",
  },
  {
    title: "Festival Marketing",
    description: "Holi, IPL, Diwali, Independence Day and more, done in a brand-safe way.",
    image: "/Service/festival-marketing.png",
  },
  {
    title: "Pop Culture",
    description: "Movies, celebrities, OTT and music turned into relatable brand content.",
    image: "/Service/pop-culture.png",
  },
  {
    title: "Brand Personality",
    description: "Witty, brand-safe humor that builds community and engagement.",
    image: "/Service/brand-personality.png",
  },
];

const workCards = [
  {
    title: "IPL Meme Campaign",
    description: "Real-time match-day memes, posted while the conversation was live.",
    image: "/Service/ipl-meme-campaign.png",
  },
  {
    title: "Movie Moment",
    description: "Iconic scenes reworked into relatable, brand-safe content.",
    image: "/Service/trending-reel.png",
  },
  {
    title: "Festival Creative",
    description: "Timely festival content with a fresh, shareable twist.",
    image: "/Service/festival-creative.png",
  },
  {
    title: "Brand Banter",
    description: "Light-hearted humor that keeps your audience talking.",
    image: "/Service/brand-banter.png",
  },
  {
    title: "Trending Reel",
    description: "Short, sharp reels built for organic reach.",
    image: "/Service/trending-reel.png",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const marketingCardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

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
        className={`inline-block ${visible
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

          {/* LEFT CONTENT */}

          <div className="relative z-20 w-full max-w-[610px] lg:w-[47%] xl:w-[48%]">

            {/* EYEBROW */}

            <p
              className={`mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f45b5f] sm:text-[11px] md:text-[12px] ${visible
                  ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.1s_forwards]"
                  : "translate-y-10 opacity-0"
                }`}
            >
              MEME & MOMENT MARKETING
            </p>

            {/* MAIN HEADING */}

            <h1 className="max-w-[560px] text-[48px] font-bold leading-[0.96] tracking-[-0.045em] text-[#101920] sm:text-[58px] md:text-[50px] lg:text-[70px] xl:text-[60px]">

              <span className="block overflow-hidden">
                {revealText("Capture the", 0)}
              </span>

              <span className="relative block overflow-hidden">
                {revealText("Conversation.", 0.45)}

                <span
                  className={`absolute bottom-[-2px] left-0 h-[3px] w-[190px] bg-[#f4c92f] sm:bottom-[-3px] sm:h-[4px] sm:w-[225px] md:w-[250px] lg:w-[260px] xl:w-[285px] ${visible
                      ? "animate-[fadeUp_0.7s_ease-out_1.1s_forwards]"
                      : "opacity-0"
                    }`}
                />
              </span>

            </h1>

            {/* DESCRIPTION */}

            <p
              className={`mt-7 max-w-[500px] text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-[#273344] sm:text-[16px] md:text-[17px] lg:mt-8 lg:text-[18px] ${visible
                  ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_1.2s_forwards]"
                  : "translate-y-10 opacity-0"
                }`}
            >
              In today’s fast-paced digital landscape, timing is everything. We
              help your brand capitalize on internet culture and trending topics
              by crafting witty, relatable, and highly shareable content. By
              acting quickly on viral moments, we position your brand at the
              center of ongoing conversations, driving massive organic reach and
              audience engagement.
            </p>

            {/* KEY FOCUS */}

            <div
              className={`mt-6 max-w-[540px] ${visible
                  ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_1.4s_forwards]"
                  : "translate-y-8 opacity-0"
                }`}
            >
              <p className="mb-2 text-[9px] font-extrabold uppercase tracking-[0.04em] text-[#f45b5f] sm:text-[10px] md:text-[11px]">
                Key Focus
              </p>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] font-extrabold uppercase tracking-[0.04em] text-[#20292d] sm:text-[10px] md:text-[11px] lg:text-[12px]">
                <span>Trend Monitoring</span>
                <span className="text-[#f4c92f]">•</span>
                <span>Viral Content Creation</span>
                <span className="text-[#f4c92f]">•</span>
                <span>Brand-Safe Humor</span>
                <span className="text-[#f4c92f]">•</span>
                <span>Real-Time Social Media Execution</span>
              </div>
            </div>

            {/* BUTTON */}

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={
                visible
                  ? {
                    opacity: 1,
                    y: 0,
                  }
                  : {
                    opacity: 0,
                    y: 30,
                  }
              }
              transition={{
                duration: 0.8,
                delay: 1.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -3,
                scale: 1.015,
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group mt-7 inline-flex items-center gap-4 rounded-full bg-white px-6 py-3.5 text-[13px] font-extrabold text-[#20272b] shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:px-7 sm:py-4 sm:text-[14px]"
            >
              <span>Let's Create Something Viral</span>

              <motion.span
                className="text-[17px] leading-none sm:text-[18px]"
                whileHover={{ x: 4 }}
              >
                →
              </motion.span>
            </motion.button>

          </div>

          {/* RIGHT HERO ARTWORK */}

          <div className="relative mt-12 flex w-full justify-center lg:absolute lg:right-[1%] lg:top-1/2 lg:mt-0 lg:w-[54%] lg:-translate-y-1/2 xl:right-[2%] xl:w-[53%] 2xl:right-[3%]">

            <div
              className={`relative w-full max-w-[680px] ${visible
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

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full shrink-0 self-start lg:w-[25%] xl:w-[23%]"
          >

            <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#18c9e5] sm:text-[11px] md:text-[12px]">
              OUR WORK
            </p>

            <h2 className="max-w-[560px] text-[48px] font-bold leading-[0.96] tracking-[-0.045em] text-[#f5f7f7] sm:text-[58px] md:text-[50px] lg:text-[70px] xl:text-[60px]">
              Trends we turned
              <br />
              into talking points.
            </h2>

            <p className="mt-7 max-w-[500px] text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-[#8b9699] sm:text-[16px] md:text-[17px] lg:mt-8 lg:text-[18px]">
              Real people. Real reactions. Real results.
            </p>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 42, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 h-[2px] rounded-full bg-[#18c9e5]"
            />

          </motion.div>

          {/* RIGHT — WORK CARDS */}

          <div className="grid w-full flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {workCards.map((card, index) => (
              <motion.article
                key={card.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.15,
                }}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                className="group relative min-h-[300px] overflow-hidden rounded-[14px] border border-[#263239] bg-[#091419] p-3 transition-colors duration-300 hover:border-[#18c9e5]/50 hover:bg-[#0b171c] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[350px]"
              >

                {/* SOFT CYAN GLOW */}

                <motion.div
                  variants={{
                    rest: {
                      opacity: 0,
                      scale: 0.7,
                    },
                    hover: {
                      opacity: 1,
                      scale: 1,
                    },
                  }}
                  initial="rest"
                  whileHover="hover"
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="pointer-events-none absolute -right-12 -top-12 h-[130px] w-[130px] rounded-full bg-[#18c9e5]/10 blur-[40px]"
                />

                {/* IMAGE */}

                <div className="relative h-[180px] w-full overflow-hidden rounded-[9px] sm:h-[175px] md:h-[190px] lg:h-[185px] xl:h-[200px]">

                  <motion.img
                    src={card.image}
                    alt={card.title}
                    className="block h-full w-full object-cover"
                    whileHover={{
                      scale: 1.055,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  {/* IMAGE OVERLAY */}

                  <motion.div
                    className="pointer-events-none absolute inset-0 bg-[#18c9e5]"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.06 }}
                    transition={{ duration: 0.3 }}
                  />

                </div>

                {/* CONTENT */}

                <div className="relative z-10 px-1 pb-5 pt-4">

                  <motion.h3
                    className="text-[14px] font-extrabold leading-[1.15] text-[#f1f4f4] sm:text-[15px] md:text-[16px]"
                    whileHover={{
                      x: 3,
                      color: "#18c9e5",
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    {card.title}
                  </motion.h3>

                  <p className="mt-2 max-w-[260px] text-[10px] font-medium leading-[1.45] text-[#7d898d] sm:text-[11px]">
                    {card.description}
                  </p>

                </div>

                {/* HOVER TEXT */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -8,
                  }}
                  whileHover={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="absolute bottom-4 left-4 text-[9px] font-bold uppercase tracking-[0.08em] text-[#18c9e5]"
                >
                  Explore
                </motion.div>

                {/* ARROW */}

                <motion.span
                  className="absolute bottom-4 right-4 text-[15px] text-[#718085]"
                  whileHover={{
                    x: 4,
                    color: "#18c9e5",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  →
                </motion.span>

                {/* ACCENT */}

                <motion.div
                  className="absolute bottom-0 left-3 h-[2px] bg-[#18c9e5]"
                  initial={{ width: 20 }}
                  whileHover={{ width: 55 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                />

              </motion.article>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          PART 3 — TYPES OF MEME MARKETING
      ========================================================== */}

      <section className="relative w-full overflow-hidden bg-[#f8f7ef] px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-[6.5%] lg:py-16 xl:px-[6.8%]">

        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 md:gap-12 lg:flex-row lg:items-start lg:gap-10 xl:gap-14">

          {/* LEFT TEXT */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full shrink-0 lg:w-[27%] xl:w-[25%]"
          >

            <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f05b5e] sm:text-[11px] md:text-[12px]">
              TYPES OF MEME MARKETING
            </p>

            <h2 className="max-w-[560px] text-[48px] font-bold leading-[0.96] tracking-[-0.045em] text-[#111a21] sm:text-[58px] md:text-[50px] lg:text-[70px] xl:text-[60px]">
              Every trend is an
              <br />
              opportunity.
            </h2>

            <p className="mt-7 max-w-[500px] text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-[#273344] sm:text-[16px] md:text-[17px] lg:mt-8 lg:text-[18px]">
              We spot what's trending and turn it into content your audience wants to share.
            </p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 h-[3px] rounded-full bg-[#f6c92e]"
            />

          </motion.div>

          {/* RIGHT — MARKETING CARDS */}

          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:w-[73%] xl:w-[75%]">

            {marketingCards.map((card, index) => (
              <motion.article
                key={card.title}
                custom={index}
                variants={marketingCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.15,
                }}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-[12px] border border-[#deded7] bg-[#fafaf5] px-4 py-4 transition-colors duration-300 hover:border-[#f4c92f]/70 hover:bg-[#fffef8] sm:min-h-[250px] md:min-h-[260px] lg:min-h-[265px] xl:min-h-[270px]"
              >

                {/* SOFT YELLOW GLOW */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="pointer-events-none absolute -right-14 -top-14 h-[130px] w-[130px] rounded-full bg-[#f4c92f]/15 blur-[42px]"
                />

                {/* IMAGE */}

                <div className="relative flex h-[160px] w-full items-center justify-center overflow-hidden sm:h-[125px] md:h-[135px] lg:h-[150px] xl:h-[155px]">

                  <motion.img
                    src={card.image}
                    alt={card.title}
                    className="relative top-[40%] block object-contain object-center"
                    whileHover={{
                      scale: 1.08,
                      y: -3,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                </div>

                {/* CONTENT */}

                <div className="relative z-10 mt-auto pr-7">

                  <motion.h3
                    className="text-[12px] font-extrabold leading-[1.15] text-[#182126] sm:text-[13px] md:text-[13px] lg:text-[13px] xl:text-[14px]"
                    whileHover={{
                      x: 3,
                      color: "#f05b5e",
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    {card.title}
                  </motion.h3>

                  <p className="mt-1 max-w-[230px] text-[10px] font-medium leading-[1.45] text-[#273344] sm:text-[11px] md:text-[12px]">
                    {card.description}
                  </p>

                </div>

                {/* HOVER TEXT */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -8,
                  }}
                  whileHover={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="absolute bottom-4 left-4 text-[8px] font-extrabold uppercase tracking-[0.1em] text-[#f05b5e] sm:text-[9px]"
                >
                  Explore →
                </motion.div>

                {/* CARD ARROW */}

                <motion.div
                  className="absolute bottom-4 right-4 text-[12px] text-[#a0a4a2] sm:text-[13px]"
                  whileHover={{
                    x: 3,
                    color: "#182126",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  →
                </motion.div>

                {/* BOTTOM ACCENT */}

                <motion.div
                  className="absolute bottom-0 left-4 h-[2px] rounded-full bg-[#f4c92f]"
                  initial={{ width: 22 }}
                  whileHover={{ width: 50 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                />

              </motion.article>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          PART 4 — CTA
      ========================================================== */}

      <section className="relative w-full overflow-hidden bg-[#071014] text-white">

        <div className="relative mx-auto flex min-h-[145px] w-full items-center px-6 py-12 sm:py-7 sm:min-h-[155px] sm:px-8 md:min-h-[165px] md:px-10 lg:min-h-[175px] lg:px-[7%] xl:px-[7.5%]">

          {/* LEFT DECORATIVE ARROW */}

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 0.9, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-[3%] top-[25px] hidden text-white sm:block lg:left-[4%]"
          >
            <svg
              width="52"
              height="35"
              viewBox="0 0 52 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
          </motion.div>

          {/* MAIN CONTENT */}

          <div className="relative z-10 flex w-full flex-col items-center justify-center gap-8 text-center sm:flex-row sm:justify-between sm:gap-6 sm:text-left">

            {/* LEFT TEXT */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="ml-0 sm:ml-[7%] lg:ml-[5%]"
            >

              <p className="text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-[#9ca7aa] sm:text-[16px] md:text-[17px] lg:text-[18px]">
                Your audience is already talking.
              </p>

              <h2 className="mt-2 max-w-[560px] text-[28px] font-bold leading-[0.96] tracking-[-0.045em] text-[#f4f6f6] sm:text-[34px] md:text-[40px] lg:text-[42px] xl:text-[46px]">
                Let&apos;s make sure they&apos;re
                <br className="hidden sm:block" />
                {" "}talking about you.
              </h2>

            </motion.div>

            {/* RIGHT SIDE */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex shrink-0 flex-col items-center gap-6 sm:flex-row sm:gap-7 md:gap-10"
            >

              {/* BUTTON */}

              <motion.button
                whileHover={{
                  y: -3,
                  scale: 1.03,
                  boxShadow: "0 8px 25px rgba(255,255,255,0.12)",
                }}
                whileTap={{ scale: 0.97 }}
                className="relative z-20 whitespace-nowrap rounded-full bg-white px-7 py-3.5 text-[13px] font-extrabold text-[#182126] shadow-[0_2px_12px_rgba(0,0,0,0.2)] sm:px-5 sm:py-2.5 sm:text-[9px] md:px-6 md:py-3 md:text-[10px]"
              >
                Let&apos;s Create Something Viral

               <span className="ml-2 text-[15px] sm:text-[11px]">→</span>
              </motion.button>

              {/* CSS ARTWORK */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative h-[70px] w-[75px] sm:h-[80px] sm:w-[85px] md:h-[90px] md:w-[95px]"
              >

                {/* Yellow circle */}

                <motion.div
                  whileHover={{
                    scale: 1.12,
                    rotate: 8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-[12px] top-[3px] h-[25px] w-[25px] rounded-full bg-[#ffd21f] sm:h-[30px] sm:w-[30px] md:h-[34px] md:w-[34px]"
                />

                {/* Red circle */}

                <motion.div
                  whileHover={{
                    scale: 1.12,
                    rotate: -8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-[7px] left-[13px] h-[25px] w-[25px] rounded-full bg-[#f04d55] sm:h-[30px] sm:w-[30px] md:h-[34px] md:w-[34px]"
                />

                {/* Blue circle */}

                <motion.div
                  whileHover={{
                    scale: 1.12,
                    rotate: 8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-[7px] top-[22px] h-[25px] w-[25px] rounded-full bg-[#18b9ed] sm:h-[30px] sm:w-[30px] md:h-[34px] md:w-[34px]"
                />

              </motion.div>

            </motion.div>

          </div>

        </div>
      </section>

    </main>
  );
}

