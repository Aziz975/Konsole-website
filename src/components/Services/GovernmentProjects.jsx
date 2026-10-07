import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function GovernmentProjects() {
  /* =========================================
     ANIMATION VARIANTS
  ========================================= */

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 45,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeUpFast = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const slideLeft = {
    hidden: {
      opacity: 0,
      x: -55,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const slideRight = {
    hidden: {
      opacity: 0,
      x: 55,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageReveal = {
    hidden: {
      opacity: 0,
      scale: 0.94,
      y: 25,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 55,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const checklistItem = {
    hidden: {
      opacity: 0,
      x: -25,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const viewportSettings = {
    once: false,
    amount: 0.2,
  };

  return (
    <div className="overflow-x-hidden bg-white font-sans text-neutral-900 antialiased">
      {/* =========================================================
          SECTION 1: GOVERNMENT COMMUNICATION PROJECTS
      ========================================================= */}

      <section className="border-b border-neutral-200 bg-[#FAFAF5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* LEFT CONTENT */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="space-y-6 lg:col-span-5"
            >
             {/* Eyebrow */}
<motion.div variants={fadeUpFast}>
  <p className="ip-eyebrow mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f04444] sm:text-[11px] md:text-[12px]">
    Government Communication Projects
  </p>
</motion.div>

              {/* Heading */}
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              >
                Bridging the Gap Between <br />
                Policy and{" "}
                <span className="text-amber-500 underline decoration-red-500 decoration-wavy">
                  Public
                </span>
              </motion.h2>

              {/* Paragraph */}
              <motion.p
                variants={fadeUpFast}
                className="max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base"
              >
                Effective governance relies on transparent and impactful
                communication. We partner with government bodies to design and
                execute large-scale awareness campaigns, policy rollouts, and
                citizen engagement initiatives. Our strategies ensure that vital
                information reaches the right demographics in a clear,
                accessible, and engaging manner.
              </motion.p>

              {/* Button */}
              <motion.div variants={fadeUpFast} className="pt-2">
                <motion.button
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group inline-flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:bg-neutral-800"
                >
                  <span>Explore Government Communication</span>

                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={imageReveal}
              className="lg:col-span-7"
            >
              <motion.div
                whileHover={{
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full overflow-hidden"
              >
                <motion.img
                  whileHover={{
                    scale: 1.035,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  src="/images/image4.jpeg"
                  alt="Government Communication Banner"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: COMMUNICATION FOR A STRONGER SOCIETY
      ========================================================= */}

      <section className="border-b border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* LEFT IMAGE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={imageReveal}
              className="order-2 lg:col-span-6 lg:order-1"
            >
              <motion.div
                whileHover={{
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full overflow-hidden"
              >
                <motion.img
                  whileHover={{
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  src="/images/image7.jpeg"
                  alt="Communication for Stronger Society"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </motion.div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="order-1 space-y-6 lg:col-span-6 lg:order-2"
            >
             {/* Eyebrow */}
<motion.div variants={fadeUpFast}>
  <p className="ip-eyebrow mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f04444] sm:text-[11px] md:text-[12px]">
    What We Do
  </p>
</motion.div>

              {/* Heading */}
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
              >
                Communication for a{" "}
                <span className="text-amber-500">Stronger Society</span>
              </motion.h2>

              {/* Paragraph */}
              <motion.p
                variants={fadeUpFast}
                className="text-sm leading-relaxed text-neutral-600 sm:text-base"
              >
                We partner with government bodies, public sector organizations
                and civic initiatives to design and execute campaigns that
                inform citizens, support policy rollouts and drive meaningful
                engagement.
              </motion.p>

              {/* CHECKLIST */}
              <motion.ul variants={staggerContainer} className="space-y-3 pt-2">
                {[
                  "Large-scale awareness campaigns",
                  "Policy rollout communication",
                  "Citizen engagement initiatives",
                  "Audience and demographic targeting",
                  "Multimedia content creation (digital, print, video)",
                  "Monitoring, reporting and impact assessment",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={checklistItem}
                    whileHover={{
                      x: 6,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="group flex cursor-default items-center gap-3 text-sm font-medium text-neutral-800"
                  >
                    <motion.span
                      whileHover={{
                        scale: 1.15,
                        rotate: 8,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="flex-shrink-0"
                    >
                      <CheckCircle2 className="h-5 w-5 text-neutral-900 transition-colors duration-300 group-hover:text-amber-500" />
                    </motion.span>

                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* BUTTON */}
              <motion.div variants={fadeUpFast} className="pt-4">
                <motion.button
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group inline-flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:bg-neutral-800"
                >
                  <span>Let's Work Together</span>

                  <motion.span
                    className="flex"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: PROJECT EXAMPLES
      ========================================================= */}

      <section className="bg-[#FAFAF5] py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* TOP HEADING */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-2"
          >
            <motion.div variants={slideLeft}>
  <p className="ip-eyebrow mb-5 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#f04444] sm:text-[11px] md:text-[12px]">
    Project Examples
  </p>
</motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              Government Communication in Action
            </motion.h2>
          </motion.div>

          {/* =====================================================
              CARDS
          ===================================================== */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.15,
            }}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {/* CARD 1 */}
            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.015,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col justify-between space-y-4 rounded-2xl border-2 border-neutral-900 bg-white p-4 shadow-[6px_6px_0px_#FFB900]"
            >
              <motion.div className="w-full overflow-hidden rounded-lg border border-neutral-300 bg-neutral-100 aspect-video">
                <motion.img
                  src="/images/image8.jpeg"
                  alt="Public Awareness Campaign"
                  className="h-full w-full object-cover"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </motion.div>

              <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <h3 className="mb-1 text-lg font-bold">
                  Public Awareness Campaign
                </h3>

                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  Large-scale, multi-platform campaigns that educate citizens on
                  key government initiatives.
                </p>
              </motion.div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.015,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col justify-between space-y-4 rounded-2xl border-2 border-neutral-900 bg-white p-4 shadow-[6px_6px_0px_#FFB900]"
            >
              <motion.div className="w-full overflow-hidden rounded-lg border border-neutral-300 bg-neutral-100 aspect-video">
                <motion.img
                  src="/images/image9.png"
                  alt="Citizen Engagement Program"
                  className="h-full w-full object-cover"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </motion.div>

              <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <h3 className="mb-1 text-lg font-bold">
                  Citizen Engagement Program
                </h3>

                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  On-ground and digital engagement that increases participation
                  and awareness.
                </p>
              </motion.div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.015,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col justify-between space-y-4 rounded-2xl border-2 border-neutral-900 bg-white p-4 shadow-[6px_6px_0px_#FFB900]"
            >
              <motion.div className="w-full overflow-hidden rounded-lg border border-neutral-300 bg-neutral-100 aspect-video">
                <motion.img
                  src="/images/image10.png"
                  alt="Information Campaign Videos"
                  className="h-full w-full object-cover"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </motion.div>

              <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <h3 className="mb-1 text-lg font-bold">
                  Information Campaign Videos
                </h3>

                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  Clear, engaging videos that explain policies and services in a
                  simple way.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              BOTTOM CTA
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={viewportSettings}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -5,
            }}
            className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border-2 border-neutral-900 bg-amber-400 p-8 shadow-[8px_8px_0px_#000] sm:p-12 md:flex-row"
          >
            {/* Decorative Background */}
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 0.12,
              }}
              viewport={viewportSettings}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[40px] border-neutral-900"
            />

            {/* CTA TEXT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={viewportSettings}
              transition={{
                duration: 0.75,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="z-10 max-w-xl space-y-3"
            >
              <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
                Let's Create Meaningful Impact Together
              </h2>

              <p className="text-sm leading-relaxed text-neutral-800 sm:text-base">
                Partner with us to build communication that reaches the right
                audience and turns policy into public understanding.
              </p>
            </motion.div>

            {/* CTA BUTTON */}
            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={viewportSettings}
              transition={{
                duration: 0.75,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="z-10 flex-shrink-0"
            >
              <motion.button
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group inline-flex items-center gap-3 rounded-full bg-neutral-950 px-8 py-4 text-sm font-bold text-white shadow-lg transition-colors duration-300 hover:bg-neutral-800"
              >
                <span>Start a Conversation</span>

                <motion.span
                  whileHover={{
                    x: 5,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="flex"
                >
                  <ArrowRight size={16} />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
