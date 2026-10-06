import React from "react";
import {
  Search,
  Users,
  TrendingUp,
  Share2,
  Scale,
  FileText,
  Lightbulb,
  PenTool,
  Target,
  ArrowRight,
  ArrowUpRight,
  Quote,
  MessageCircle,
  Landmark,
  ClipboardList,
  UserCheck,
} from "lucide-react";
import { motion } from "motion/react";

const PoliticalIntelligence = () => {
  /* =========================================================
     ANIMATION VARIANTS
  ========================================================= */

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const scaleIn = {
    hidden: {
      opacity: 0,
      scale: 0.94,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardItem = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const badgeItem = {
    hidden: {
      opacity: 0,
      x: 25,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  /* =========================================================
     DATA
  ========================================================= */

  // const badges = [
  //   {
  //     icon: Scale,
  //     label: "Policy Changes",
  //     bg: "bg-[#E4483A]",
  //   },
  //   {
  //     icon: Users,
  //     label: "Public Sentiment",
  //     bg: "bg-[#F5C518]",
  //   },
  //   {
  //     icon: Share2,
  //     label: "Electoral Trends",
  //     bg: "bg-[#3BA7DB]",
  //   },
  //   {
  //     icon: Target,
  //     label: "Stakeholder Mapping",
  //     bg: "bg-[#121212]",
  //   },
  // ];

const badges = [
  {
    icon: Scale,
    label: "Policy Changes",
    bg: "bg-[#E4483A]",
  },
  {
    icon: MessageCircle,   // pehle Users tha
    label: "Public Sentiment",
    bg: "bg-[#F5C518]",
  },
  {
    icon: TrendingUp,     
    label: "Electoral Trends",
    bg: "bg-[#3BA7DB]",
  },
  {
    icon: Share2,          
    label: "Stakeholder Mapping",
    bg: "bg-[#121212]",
  },
];

 const intelligenceCards = [
  {
    icon: Search,
    title: "Real-Time Monitoring",
    text: "Track political developments, policy updates and key statements as they happen.",
    accent: "bg-[#F5C518]",
    underline: "bg-[#F5C518]",
  },
  {
    icon: MessageCircle, // pehle Users tha
    title: "Public Sentiment Analysis",
    text: "In-depth analysis of what people think, feel and expect across regions and platforms.",
    accent: "bg-[#3BA7DB]",
    underline: "bg-[#3BA7DB]",
  },
  {
    icon: Users, // pehle TrendingUp tha
    title: "Demographic Tracking",
    text: "Understand voter groups, shifts and priorities with data you can act on.",
    accent: "bg-[#E4483A]",
    underline: "bg-[#E4483A]",
  },
  {
    icon: Target, // pehle Share2 tha
    title: "Strategic Intelligence",
    text: "Turn complex information into clear insights that sharpen your strategy.",
    accent: "bg-[#121212]",
    underline: "bg-[#121212]",
  },
];

  // const approachSteps = [
  //   {
  //     icon: Search,
  //     step: "01",
  //     title: "Monitor",
  //     text: "Track developments in real time.",
  //     bg: "bg-[#F5C518]",
  //     dark: true,
  //   },
  //   {
  //     icon: FileText,
  //     step: "02",
  //     title: "Analyze",
  //     text: "Decode trends, sentiment and signals.",
  //     bg: "bg-[#3BA7DB]",
  //   },
  //   {
  //     icon: Lightbulb,
  //     step: "03",
  //     title: "Interpret",
  //     text: "Turn data into meaningful insights.",
  //     bg: "bg-[#E4483A]",
  //   },
  //   {
  //     icon: PenTool,
  //     step: "04",
  //     title: "Advise",
  //     text: "Provide strategic recommendations.",
  //     bg: "bg-white",
  //     dark: true,
  //   },
  //   {
  //     icon: Target,
  //     step: "05",
  //     title: "Enable",
  //     text: "Help you take the right action.",
  //     bg: "bg-[#F5C518]",
  //     dark: true,
  //   },
  // ];

const approachSteps = [
  {
    icon: Search,
    step: "01",
    title: "Monitor",
    text: "Track developments in real time.",
    bg: "bg-[#F5C518]",
    dark: true,
  },
  {
    icon: FileText,
    step: "02",
    title: "Analyze",
    text: "Decode trends, sentiment and signals.",
    bg: "bg-[#3BA7DB]",
  },
  {
    icon: Lightbulb,
    step: "03",
    title: "Interpret",
    text: "Turn data into meaningful insights.",
    bg: "bg-[#E4483A]",
  },
  {
    icon: MessageCircle, // pehle PenTool tha
    step: "04",
    title: "Advise",
    text: "Deliver reports that guide informed decisions.",
    bg: "bg-white",
    dark: true,
  },
  {
    icon: Target,
    step: "05",
    title: "Enable",
    text: "Tailor your messaging and stay steps ahead.",
    bg: "bg-[#F5C518]",
    dark: true,
  },
];

  const featuredInsights = [
    {
      icon: Landmark,
      title: "Election Landscape",
      text: "Voter behavior, key battles, forecast analysis.",
    },
    {
      icon: ClipboardList,
      title: "Policy & Regulation",
      text: "Bill tracking, government decisions, impact analysis.",
    },
    {
      icon: MessageCircle,
      title: "Public Sentiment",
      text: "Mood tracking, social listening, issue mapping.",
    },
    {
    icon: Users, 
    title: "Demographic Trends", 
    text: "Voter groups, regional shifts, key priorities.",
  },
  ];

  return (
    <div className="overflow-x-hidden bg-[#F7F5EF] font-sans text-[#121212]">

      {/* =====================================================
          1. HERO
      ===================================================== */}

      <section className="px-[4%] py-14">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[480px_1fr_190px]">

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="block text-sm font-bold tracking-wide text-[#E4483A]"
            >
              Political Intelligence
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.12 }}
              className="mt-2 text-[50px] font-bold leading-[0.96] tracking-[-0.035em] sm:text-[58px] md:text-[50px] lg:text-[42px] xl:text-[46px]"
            >
              Data-Driven Strategies
              <br />
              for the Political Landscape.
                          </motion.h1>

            <motion.span
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                delay: 0.35,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "left" }}
              className="mt-3 inline-block h-1.5 w-24 rounded-full bg-[#F5C518]"
            />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.42 }}
              className="mt-5 max-w-md text-sm leading-relaxed text-gray-600"
            >
              Navigating the complex world of politics requires sharp insights and real-time data. We provide political leaders and organizations with in-depth public sentiment analysis, demographic tracking, and strategic intelligence. Our reports empower you to make informed decisions, tailor your messaging, and stay steps ahead in the political arena.
            </motion.p>

            <motion.a
              href="#approach"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.97 }}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#121212] px-6 py-3 font-semibold text-white shadow-sm transition-shadow hover:shadow-lg"
            >
              Explore Our Approach

              <motion.span
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </motion.a>
          </motion.div>

          {/* CENTER IMAGE */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            className="flex w-full items-center justify-center overflow-hidden rounded-lg"
          >
            <motion.img
              src="/images/image3.jpeg"
              alt="Political intelligence hero visual"
              className="h-full w-full object-contain"
              whileHover={{
                scale: 1.025,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </motion.div>

          {/* RIGHT BADGES */}
          <motion.div
            variants={cardContainer}
            initial="hidden"
            animate="visible"
            className="hidden flex-col gap-2 lg:flex"
          >
            {badges.map(({ icon: Icon, label, bg }) => (
              <motion.div
                key={label}
                variants={badgeItem}
                whileHover={{
                  x: -5,
                  y: -2,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="flex items-center gap-2 rounded-lg border border-black/5 bg-white py-1.5 pl-2 pr-3 shadow-[3px_3px_0_rgba(0,0,0,0.08)]"
              >
                <motion.span
                  whileHover={{
                    rotate: -8,
                    scale: 1.08,
                  }}
                  className={`${bg} flex shrink-0 items-center justify-center rounded-md p-1.5 text-white`}
                >
                  <Icon size={13} />
                </motion.span>

                <span className="whitespace-nowrap text-xs font-semibold">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          2. WHY IT MATTERS
      ===================================================== */}

      <section className="bg-[#F1EFE7] px-[4%] py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr]">

          {/* HEADING */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-sm font-bold tracking-wide text-[#E4483A]">
              Why Political Intelligence Matters
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.025em]">
              Understand today.
              <br />
              Prepare for tomorrow.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
             Every move in politics creates ripple effects. We give you the data, sentiment and strategic intelligence to stay informed and stay ahead.
            </p>

            <motion.svg
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              height="16"
              className="mt-4 text-[#F5C518]"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            >
              <path d="M2 12 Q8 2 14 12 T26 12 T38 12" />
            </motion.svg>
          </motion.div>

          {/* CARDS */}
          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {intelligenceCards.map(
              ({ icon: Icon, title, text, accent, underline }) => (
                <motion.div
                  key={title}
                  variants={cardItem}
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                    boxShadow: "0 18px 35px rgba(0,0,0,0.10)",
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group rounded-xl border border-black/10 bg-white p-5"
                >
                  <motion.span
                    whileHover={{
                      scale: 1.1,
                      rotate: -6,
                    }}
                    transition={{ duration: 0.25 }}
                    className={`${accent} mb-4 flex h-10 w-10 items-center justify-center rounded-full text-white`}
                  >
                    <Icon size={18} />
                  </motion.span>

                  <motion.h3
                    whileHover={{ x: 3 }}
                    className="font-bold tracking-[-0.015em]"
                  >
                    {title}
                  </motion.h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {text}
                  </p>

                  <motion.span
                    initial={{ width: 32 }}
                    whileHover={{ width: 55 }}
                    className={`mt-4 block h-1 rounded-full ${underline}`}
                  />
                </motion.div>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          3. OUR APPROACH
      ===================================================== */}

      <section
        id="approach"
        className="bg-[#121212] px-[4%] py-14 text-white"
      >
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[280px_1fr]">

          {/* LEFT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-sm font-bold tracking-wide text-[#F5C518]">
              Our Approach
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.025em]">
              From data to direction.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              We combine real-time data, research and human expertise into reports that help you decide with confidence.
            </p>

            <motion.svg
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              height="16"
              className="mt-4 text-[#F5C518]"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            >
              <path d="M2 12 Q8 2 14 12 T26 12 T38 12" />
            </motion.svg>
          </motion.div>

          {/* STEPS */}
          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-wrap items-start gap-x-2 gap-y-8 pl-0 lg:pl-10"
          >
            {approachSteps.map(
              ({ icon: Icon, step, title, text, bg, dark }, i, arr) => (
                <React.Fragment key={step}>
                  <motion.div
                    variants={cardItem}
                    whileHover={{
                      y: -7,
                    }}
                    className="w-32"
                  >
                    <motion.span
                      whileHover={{
                        scale: 1.1,
                        rotate: 6,
                      }}
                      transition={{ duration: 0.25 }}
                      className={`${bg} ${
                        dark ? "text-black" : "text-white"
                      } flex h-12 w-12 items-center justify-center rounded-full`}
                    >
                      <Icon size={20} />
                    </motion.span>

                    <p className="mt-3 text-xs text-gray-400">
                      {step}
                    </p>

                    <motion.h3
                      whileHover={{ x: 3 }}
                      className="mt-1 font-bold"
                    >
                      {title}
                    </motion.h3>

                    <p className="mt-1 text-xs leading-snug text-gray-400">
                      {text}
                    </p>
                  </motion.div>

                  {i < arr.length - 1 && (
                    <motion.div
                      variants={fadeUp}
                      className="hidden sm:block"
                    >
                      <ArrowRight
                        size={25}
                        className="mt-5 text-gray-600"
                      />
                    </motion.div>
                  )}
                </React.Fragment>
              ),
            )}

            <motion.p
              variants={fadeUp}
              whileHover={{
                scale: 1.05,
                rotate: -7,
              }}
              className="ml-4 -rotate-[10deg] text-lg leading-tight text-[#F5C518]"
              style={{
                fontFamily: "'Comic Sans MS', cursive",
              }}
            >
              Better
              <br />
              Intel.
              <br />
              Better
              <br />
              Moves.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          4. REAL-WORLD IMPACT
      ===================================================== */}

      <section className="px-[4%] py-14">
        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >

          {/* IMAGE */}
          <motion.div
            variants={scaleIn}
            whileHover={{
              scale: 1.02,
            }}
            className="flex w-full items-center justify-center overflow-hidden rounded-xl"
          >
            <motion.img
              src="/images/image1.png"
              alt="Real-world impact collage"
              className="h-full w-full object-contain"
              whileHover={{
                scale: 1.045,
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* MIDDLE TEXT */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-center"
          >
            <span className="text-sm font-bold tracking-wide text-[#E4483A]">
              Real-World Impact
            </span>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.025em]">
              Insights that influence change.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Our reports help political leaders and organizations read the public mood, sharpen their messaging and act before the conversation moves on.
            </p>

            <motion.a
              href="#work"
              whileHover={{
                x: 4,
                backgroundColor: "#121212",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-black/20 px-6 py-2.5 font-semibold"
            >
              See Our Work
              <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>

          {/* FEATURED INSIGHTS */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -6,
              boxShadow: "0 18px 35px rgba(0,0,0,0.08)",
            }}
            className="rounded-xl border border-black/10 bg-[#F1EFE7] p-6"
          >
            <h3 className="mb-4 text-sm font-bold tracking-wide text-gray-500">
              Featured Insights
            </h3>

            <motion.ul
              variants={cardContainer}
              className="space-y-4"
            >
              {featuredInsights.map(
                ({ icon: Icon, title, text }) => (
                  <motion.li
                    key={title}
                    variants={cardItem}
                    whileHover={{
                      x: 4,
                    }}
                    className="flex gap-3"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: -5,
                      }}
                      className="shrink-0"
                    >
                      <Icon
                        size={18}
                        className="mt-0.5"
                      />
                    </motion.div>

                    <div>
                      <p className="text-sm font-semibold">
                        {title}
                      </p>

                      <p className="mt-0.5 text-xs text-gray-500">
                        {text}
                      </p>
                    </div>
                  </motion.li>
                ),
              )}
            </motion.ul>
          </motion.div>

          {/* QUOTE BLOCK */}
          <motion.div
            variants={scaleIn}
            whileHover={{
              scale: 1.015,
            }}
            className="relative min-h-[220px] overflow-hidden rounded-xl bg-[#121212] text-white"
          >
            <motion.img
              src="/images/image5.png"
              alt="Speaker at a podium"
              className="absolute inset-0 h-full w-full object-cover opacity-60"
              whileHover={{
                scale: 1.06,
              }}
              transition={{ duration: 0.7 }}
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/25" />

            {/* QUOTE CONTENT */}
            <div className="relative flex h-full min-h-[220px] flex-col justify-between p-6">
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: -8,
                }}
              >
                <Quote
                  size={24}
                  className="text-[#F5C518]"
                />
              </motion.div>

              <motion.p
                whileHover={{ x: 3 }}
                className="mt-4 text-lg font-semibold leading-snug"
              >
                In politics, timing is everything.
                <br />
                And so is insight.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          5. FOOTER CTA
      ===================================================== */}

      <motion.section
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col items-center justify-between gap-6 bg-[#121212] px-[4%] py-7 text-white sm:flex-row"
      >
        <motion.div
          whileHover={{ x: 3 }}
          className="flex items-center gap-4"
        >
          <motion.span
            whileHover={{
              scale: 1.08,
              rotate: -5,
            }}
            className="rounded-full bg-white/10 p-3"
          >
            <MessageCircle size={20} />
          </motion.span>

          <p className="text-base">
            Let's turn insights into{" "}
            <span className="font-bold sm:inline">
              smarter strategies.
            </span>
          </p>
        </motion.div>

        <p className="max-w-xs text-center text-sm text-gray-400 sm:border-l sm:border-white/10 sm:pl-6 sm:text-left">
          Partner with us for the data, clarity and confidence to lead in the political arena.
        </p>

        <motion.a
          href="#contact"
          whileHover={{
            y: -3,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
        >
          Get in Touch

          <motion.span
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={16} />
          </motion.span>
        </motion.a>
      </motion.section>
    </div>
  );
};

export default PoliticalIntelligence;