import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const workCards = [
  {
    title: "Brand Film",
    image: "/Service/brand-film.png",
    accent: "#18c9e5",
    position: "sm:mt-[-15px]",
  },
  {
    title: "Social Media",
    image: "/Service/social-media-coffee.png",
    accent: "#f4c92f",
    position: "sm:mt-[20px]",
  },
  {
    title: "Reel",
    image: "/Service/collect-moment.png",
    accent: "#f05b5e",
    position: "sm:mt-[5px]",
  },
];

const stats = [
  {
    number: "10M+",
    label: "Total Impressions",
    numberColor: "#18c9e5",
    icon: "◉",
    index: "01",
  },
  {
    number: "250K+",
    label: "Engagements",
    numberColor: "#f4c92f",
    icon: "♡",
    index: "02",
  },
  {
    number: "500+",
    label: "Pieces of Content",
    numberColor: "#f05b5e",
    icon: "↗",
    index: "03",
  },
  {
    number: "3X",
    label: "Average Growthtt",
    numberColor: "#18c9e5",
    icon: "↗",
    index: "04",
  },
];

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

          {/* HERO LEFT */}

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

            {/* MAIN HERO HEADING */}

            <h1 className="max-w-[560px] text-[48px] font-bold leading-[0.96] tracking-[-0.045em] text-[#101920] sm:text-[58px] md:text-[50px] lg:text-[70px] xl:text-[60px]">

              <span className="block overflow-hidden">
                {revealText("Crafting", 0)}
              </span>

              <span className="block overflow-hidden">
                {revealText("Compelling", 0.45, "text-[#ff6969]")}
              </span>

              <span className="block overflow-hidden">
                {revealText("Narratives.", 0.9, "text-[#ffd21c]")}
              </span>

              {/* <span className="block overflow-hidden">
                {revealText("builds trust.", 1.35, "text-[#ff6969]")}
              </span> */}

            </h1>

            {/* HERO SUBHEADING */}

            <p
              className={`mt-7 max-w-[500px] text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-[#68737b] sm:text-[16px] md:text-[17px] lg:mt-8 lg:text-[18px] ${
                visible
                  ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.75s_forwards]"
                  : "translate-y-10 opacity-0"
              }`}
            >
             Content is the foundation of your digital identity. Our creative team develops high-quality, tailored content that resonates with your target audience and aligns perfectly with your brand voice. From insightful blog posts and persuasive copy to striking graphics and interactive media, we create assets that educate, entertain, and convert.
            </p>

            {/* HERO BUTTON */}

            <div
              className={`mt-7 sm:mt-8 ${
                visible
                  ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.9s_forwards]"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <motion.button
                whileHover={{
                  y: -3,
                  scale: 1.015,
                  gap: 24,
                  backgroundColor: "#18252a",
                  boxShadow: "0 10px 28px rgba(0,0,0,0.16)",
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="group inline-flex h-[54px] items-center gap-5 rounded-full bg-[#071218] px-6 text-[14px] font-semibold text-white sm:h-[58px] sm:px-8 sm:text-[15px]"
              >
                <span>Let&apos;s Create</span>

                <ArrowRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.2}
                />
              </motion.button>
            </div>

          </div>

          {/* HERO RIGHT IMAGE */}

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

          {/* LEFT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-20 w-full shrink-0 lg:w-[42%] xl:w-[40%]"
          >

            <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f05b5e] sm:text-[11px] md:text-[12px]">
              RECENT WORK
            </p>

            <h2 className="max-w-[560px] text-[48px] font-bold leading-[0.96] tracking-[-0.045em] text-[#f5f7f7] sm:text-[58px] md:text-[50px] lg:text-[70px] xl:text-[60px]">
              Content that    
              <br />
              Educates and Entertains.
            </h2>

            <p className="mt-7 max-w-[500px] text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-[#8b9699] sm:text-[16px] md:text-[17px] lg:mt-8 lg:text-[18px]">
              From blog posts and persuasive copy to striking graphics and interactive media, we create assets that resonate with your audience and drive action.
            </p>

            <motion.button
              whileHover={{
                y: -3,
                scale: 1.015,
                gap: 24,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="group mt-7 inline-flex items-center gap-5 rounded-full bg-white px-6 py-3.5 text-[14px] font-semibold text-[#182126] shadow-[0_4px_20px_rgba(0,0,0,0.15)] sm:px-7 sm:py-4 sm:text-[15px]"
            >
              <span>View All Work</span>

              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2.2}
              />
            </motion.button>

          </motion.div>

          {/* RIGHT CARDS */}

          <div className="relative flex w-full items-center justify-center lg:w-[58%] xl:w-[60%]">

            {/* DECORATION */}

            <motion.div
              initial={{
                opacity: 0,
                x: -15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="pointer-events-none absolute left-[-2%] top-[38%] hidden text-[45px] leading-none text-[#f4c92f] lg:block"
            >
              〰
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="pointer-events-none absolute right-[-3%] top-[42%] hidden text-[35px] text-[#18c9e5] lg:block"
            >
              〰
            </motion.div>

            {/* CARDS */}

            <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5">

              {workCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{
                    opacity: 0,
                    y: 45,
                    scale: 0.96,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group relative w-full ${card.position}`}
                >

                  <motion.div
                    whileHover={{
                      y: -9,
                      scale: 1.018,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative aspect-[0.67] w-full overflow-hidden rounded-[14px] border border-[#25343a] bg-[#111b20] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-colors duration-300 group-hover:border-[#405158] group-hover:shadow-[0_22px_45px_rgba(0,0,0,0.42)]"
                  >

                    {/* IMAGE */}

                    <motion.img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover"
                      whileHover={{
                        scale: 1.07,
                        y: -4,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    {/* DARK OVERLAY */}

                    <motion.div
                      className="pointer-events-none absolute inset-0"
                      initial={{
                        opacity: 0,
                      }}
                      whileHover={{
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      style={{
                        background: `linear-gradient(to top, ${card.accent}22, transparent 55%)`,
                      }}
                    />

                    {/* TOP ACCENT */}

                    <motion.div
                      className="absolute left-0 top-0 h-[3px]"
                      initial={{
                        width: "0%",
                      }}
                      whileHover={{
                        width: "100%",
                      }}
                      transition={{
                        duration: 0.45,
                        ease: "easeOut",
                      }}
                      style={{
                        backgroundColor: card.accent,
                      }}
                    />

                    {/* LABEL */}

                    <motion.div
                      initial={{
                        y: 0,
                      }}
                      whileHover={{
                        y: -5,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className="absolute bottom-3 left-3 rounded-[7px] bg-white px-3 py-1.5 text-[9px] font-extrabold text-[#182126] shadow-[0_3px_10px_rgba(0,0,0,0.2)] sm:text-[10px]"
                    >
                      {card.title}
                    </motion.div>

                    {/* SMALL HOVER DOT */}

                    <motion.span
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      whileHover={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="absolute right-4 top-4 h-[8px] w-[8px] rounded-full"
                      style={{
                        backgroundColor: card.accent,
                        boxShadow: `0 0 15px ${card.accent}`,
                      }}
                    />

                  </motion.div>

                </motion.article>
              ))}

            </div>
          </div>
        </div>

        {/* DECORATIVE STAR */}

        <motion.div
          initial={{
            opacity: 0,
            rotate: -20,
          }}
          whileInView={{
            opacity: 0.8,
            rotate: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="pointer-events-none absolute bottom-[18%] right-[4%] hidden text-[28px] text-[#f4c92f] lg:block"
        >
          ✦
        </motion.div>

      </section>

      {/* =========================================================
          PART 3 — LET'S CREATE
      ========================================================== */}

      <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#f7f6ee] px-6 py-16 text-[#111a21] sm:px-8 md:px-10 lg:px-[7%] lg:py-0">

        <div className="mx-auto flex min-h-screen w-full max-w-[1450px] flex-col items-center justify-center gap-12 lg:flex-row lg:justify-between lg:gap-16">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full max-w-[570px] lg:w-[47%]"
          >

            <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f05b5e] sm:text-[11px] md:text-[12px]">
              LET&apos;S CREATE
            </p>
 
            <h2 className="max-w-[560px] text-[48px] font-bold leading-[0.96] tracking-[-0.045em] text-[#111a21] sm:text-[58px] md:text-[50px] lg:text-[70px] xl:text-[60px]">
              Your brand voice
              <br />
              deserves the right story.
            </h2>

            <p className="mt-7 max-w-[500px] text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-[#687075] sm:text-[16px] md:text-[17px] lg:mt-8 lg:text-[18px]">
              Whether you're launching a product, rebranding or building a steady content calendar, we create content that fits your brand voice and connects with your audience.
            </p>
            

            <motion.button
              whileHover={{
                y: -3,
                scale: 1.015,
                gap: 24,
                backgroundColor: "#18252a",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="group mt-7 inline-flex items-center gap-5 rounded-full bg-[#10191d] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_5px_18px_rgba(0,0,0,0.12)] sm:px-7 sm:py-4 sm:text-[15px]"
            >
              <span>Get Started</span>

              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2.2}
              />
            </motion.button>

          </motion.div>

          {/* STATS */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full max-w-[620px] lg:w-[53%]"
          >

            {/* DECORATION */}

            <div className="pointer-events-none absolute -left-5 top-[10%] z-10 hidden text-[42px] leading-none text-[#f4c92f] lg:block">
              〰
            </div>

            <div className="pointer-events-none absolute -right-2 -top-7 z-10 text-[34px] leading-none text-[#f4c92f]">
              ☆
            </div>

            {/* STATS CARD */}

            <div className="relative w-full overflow-hidden rounded-[18px] bg-[#091419] px-7 py-7 shadow-[0_15px_40px_rgba(0,0,0,0.12)] sm:rounded-[20px] sm:px-9 sm:py-9 md:px-10 md:py-10 lg:px-8 lg:py-8 xl:px-10 xl:py-9">

              <div className="grid grid-cols-2">

                {stats.map((stat, index) => {
                  const isTop = index < 2;
                  const isLeft = index % 2 === 0;

                  return (
                    <motion.div
                      key={stat.index}
                      whileHover={{
                        backgroundColor: "rgba(255,255,255,0.025)",
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className={`group relative overflow-hidden px-2 ${
                        isTop
                          ? "border-b border-[#26343a] pb-6 sm:pb-7"
                          : "pt-6 sm:pt-7"
                      } ${
                        isLeft
                          ? "border-r border-[#26343a] sm:px-4"
                          : "sm:px-5"
                      }`}
                    >

                      {/* HOVER ACCENT */}

                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileHover={{
                          width: "35px",
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="absolute left-0 top-0 h-[2px]"
                        style={{
                          backgroundColor: stat.numberColor,
                        }}
                      />

                      {/* ICON + INDEX */}

                      <div className="mb-2 flex items-center gap-2">

                        <motion.span
                          whileHover={{
                            scale: 1.12,
                            rotate: 8,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="flex h-6 w-6 items-center justify-center rounded-full text-[12px] text-[#071014]"
                          style={{
                            backgroundColor: stat.numberColor,
                          }}
                        >
                          {stat.icon}
                        </motion.span>

                        <span
                          className="text-[8px]"
                          style={{
                            color: stat.numberColor,
                          }}
                        >
                          {stat.index}
                        </span>

                      </div>

                      {/* NUMBER */}

                      <motion.h3
                        whileHover={{
                          x: 4,
                          color: stat.numberColor,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="text-[25px] font-[800] leading-none tracking-[-0.03em] text-white sm:text-[30px] md:text-[32px]"
                      >
                        {stat.number}
                      </motion.h3>

                      {/* LABEL */}

                      <motion.p
                        whileHover={{
                          x: 2,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="mt-2 text-[9px] font-medium text-[#899397] sm:text-[10px]"
                      >
                        {stat.label}
                      </motion.p>

                    </motion.div>
                  );
                })}

              </div>

            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}