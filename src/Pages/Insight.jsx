import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "Meme & Moment Marketing",
    text: "Trends, culture and timing turned into powerful brand moments.",
    accent: "#ff4d57",
    number: "01",
  },
  {
    title: "Content Creation",
    text: "Scroll-stopping content that informs, entertains and engages.",
    accent: "#22b5e8",
    number: "02",
  },
  {
    title: "Influencer Partnerships",
    text: "Real voices. Authentic stories. Stronger connections.",
    accent: "#ffd21c",
    number: "03",
  },
  {
    title: "Video Production",
    text: "From concept to cut, we bring your story to life.",
    accent: "#ff4d57",
    number: "04",
  },
  {
    title: "Online Reputation Management",
    text: "Protecting your brand in the digital age.",
    accent: "#22b5e8",
    number: "05",
  },
  {
    title: "Political Intelligence",
    text: "Insights that inform decisions and drive institutional success.",
    accent: "#ffd21c",
    number: "06",
  },
];

const clients = [
  "SBI",
  "TATA",
  "Reliance",
  "Apollo Tyres",
  "ONGC",
  "Deloitte & More",
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

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

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slideLeft = {
  hidden: {
    opacity: 0,
    x: -60,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideRight = {
  hidden: {
    opacity: 0,
    x: 60,
    scale: 0.96,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardReveal = {
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
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Insights = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full overflow-hidden bg-[#faf8f3] text-[#080b0e]"
    >

      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#080b0e] px-6 py-16 text-white sm:px-10 sm:py-20 md:px-14 lg:px-[4.7%] lg:py-24">

        {/* Decorative shapes */}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#ffd21c]/10 blur-[70px]"
        />

        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute bottom-[-100px] left-[35%] h-[250px] w-[250px] rounded-full bg-[#22b5e8]/10 blur-[80px]"
        />

        <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">

          {/* LEFT CONTENT */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            className="max-w-[760px]"
          >

            <motion.div
              variants={slideLeft}
              className="mb-3 flex items-center gap-3"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 42 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="h-[5px] rounded-full bg-[#ff4d57]"
              />

              <p className="font-[Lato,Arial,sans-serif] text-[12px] font-bold uppercase tracking-[0.16em] text-[#ffd21c] sm:text-[13px]">
                Ideas. Culture. Impact.
              </p>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-[760px] text-[48px] font-bold leading-[0.94] tracking-[-2.5px] text-white sm:text-[60px] md:text-[72px] lg:text-[78px]"
            >
              Strategic Storytelling for a Louder Tomorrow
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-[650px] font-[Lato,Arial,sans-serif] text-[16px] leading-[1.7] text-[#c5ccd1] sm:text-[17px] md:text-[18px]"
            >
              We blend creativity, culture and strategy to help brands,
              leaders and institutions stay relevant, trusted and ahead.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="#services"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ffd21c",
              }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex h-[48px] items-center justify-center gap-4 rounded-full bg-white px-7 text-[12px] font-bold uppercase tracking-wide text-[#080b0e] transition-colors duration-300"
            >
              Explore Our Services

              <motion.span
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={17} strokeWidth={2} />
              </motion.span>
            </motion.a>

          </motion.div>


          {/* RIGHT IMAGE */}

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            className="relative mx-auto w-full max-w-[600px]"
          >

            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 -top-4 h-[110px] w-[110px] rounded-full bg-[#ffd21c]"
            />

            <motion.div
              animate={{
                y: [0, 12, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-5 h-[100px] w-[100px] rounded-full bg-[#ff4d57]"
            />

            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[15%] top-[15%] z-10 h-[55px] w-[120px] border-[3px] border-white/80"
            />

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="group relative z-20 overflow-hidden rounded-[28px] border border-white/10 bg-[#151a1d] shadow-2xl"
            >

              <img
                src="/images/visuals.png"
                alt="Konsole Group brand visual"
                className="h-[330px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] sm:h-[400px] md:h-[450px]"
              />

              {/* Image shine */}

              <motion.div
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-y-0 left-0 w-[35%] skew-x-[-20deg] bg-white/10 blur-xl"
              />

              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full border border-white/10 bg-[#080b0e]/85 px-4 py-2 backdrop-blur-md">

                <motion.span
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="h-2 w-2 rounded-full bg-[#22b5e8]"
                />

                <span className="font-[Lato,Arial,sans-serif] text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                  Strategy • Culture • Impact
                </span>

              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>


      {/* =========================================================
          STATS SECTION
      ========================================================= */}

      <section className="bg-[#151a1d] px-6 py-10 text-white sm:px-10 md:px-14 lg:px-[4.7%]">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
          className="mx-auto grid max-w-[1500px] grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >

          <motion.div
            variants={cardReveal}
            className="px-5 py-5 text-center sm:py-3"
          >
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="text-[42px] font-bold leading-none tracking-[-1.5px] text-[#ffd21c] sm:text-[48px]"
            >
              500+
            </motion.h2>

            <p className="mt-2 font-[Lato,Arial,sans-serif] text-[12px] uppercase tracking-[0.08em] text-[#b8c0c5]">
              Campaigns Executed
            </p>
          </motion.div>


          <motion.div
            variants={cardReveal}
            className="px-5 py-5 text-center sm:py-3"
          >
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="text-[42px] font-bold leading-none tracking-[-1.5px] text-[#ffd21c] sm:text-[48px]"
            >
              300+
            </motion.h2>

            <p className="mt-2 font-[Lato,Arial,sans-serif] text-[12px] uppercase tracking-[0.08em] text-[#b8c0c5]">
              Brands & Organizations
            </p>
          </motion.div>


          <motion.div
            variants={cardReveal}
            className="px-5 py-5 text-center sm:py-3"
          >
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="text-[42px] font-bold leading-none tracking-[-1.5px] text-[#ffd21c] sm:text-[48px]"
            >
              50M+
            </motion.h2>

            <p className="mt-2 font-[Lato,Arial,sans-serif] text-[12px] uppercase tracking-[0.08em] text-[#b8c0c5]">
              People Reached Across Platforms
            </p>
          </motion.div>

        </motion.div>
      </section>


      {/* =========================================================
          WHO WE ARE
      ========================================================= */}

      <section className="bg-[#faf8f3] px-6 py-16 sm:px-10 sm:py-20 md:px-14 lg:px-[4.7%] lg:py-24">

        <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

          {/* Label */}

          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >

            <div className="flex items-center gap-3">

              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 42 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7 }}
                className="h-[5px] rounded-full bg-[#22b5e8]"
              />

              <p className="font-[Lato,Arial,sans-serif] text-[12px] font-bold uppercase tracking-[0.16em] text-[#080b0e]">
                Who We Are
              </p>

            </div>

            <div className="mt-6 flex items-center gap-3">

              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#080b0e] text-white"
              >
                <Sparkles size={19} />
              </motion.div>

              <span className="font-[Lato,Arial,sans-serif] text-[11px] font-bold uppercase tracking-[0.12em] text-[#58616a]">
                Communication • Reputation • Culture
              </span>

            </div>

          </motion.div>


          {/* Content */}

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >

            <motion.h2
              variants={fadeUp}
              className="max-w-[850px] text-[44px] font-bold leading-[0.98] tracking-[-2px] text-[#080b0e] sm:text-[54px] md:text-[62px] lg:text-[68px]"
            >
              Strategy. Creativity.
              <br />
              Real-World Impact.
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="mt-6 h-[5px] rounded-full bg-[#ff4d57]"
            />

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-[760px] font-[Lato,Arial,sans-serif] text-[16px] leading-[1.75] text-[#58616a] sm:text-[17px]"
            >
              Konsole Group is a full-service communication and reputation
              management agency. We help brands, organizations and leaders
              navigate the modern media landscape with creativity, insight
              and integrity. We don't just create campaigns, we build
              momentum.
            </motion.p>

          </motion.div>

        </div>
      </section>


      {/* =========================================================
          SERVICES SECTION
      ========================================================= */}

      <section
        id="services"
        className="bg-white px-6 py-16 sm:px-10 sm:py-20 md:px-14 lg:px-[4.7%] lg:py-24"
      >

        <div className="mx-auto max-w-[1500px]">

          {/* Heading */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            className="mb-10 max-w-[800px] md:mb-14"
          >

            <motion.div
              variants={slideLeft}
              className="flex items-center gap-3"
            >

              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 42 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7 }}
                className="h-[5px] rounded-full bg-[#ff4d57]"
              />

              <p className="font-[Lato,Arial,sans-serif] text-[12px] font-bold uppercase tracking-[0.16em] text-[#080b0e]">
                What We Do
              </p>

            </motion.div>


            <motion.h2
              variants={fadeUp}
              className="mt-4 text-[44px] font-bold leading-[0.98] tracking-[-2px] text-[#080b0e] sm:text-[54px] md:text-[62px]"
            >
              More Than Just Marketing
            </motion.h2>


            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[700px] font-[Lato,Arial,sans-serif] text-[15px] leading-[1.7] text-[#58616a] sm:text-[16px] md:text-[17px]"
            >
              From viral moments to policy conversations, we craft
              communication that gets noticed, builds credibility and drives
              real impact.
            </motion.p>

          </motion.div>


          {/* Service Cards */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >

            {services.map((service) => (

              <motion.div
                key={service.title}
                variants={cardReveal}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                whileTap={{
                  scale: 0.985,
                }}
                className="group relative min-h-[235px] overflow-hidden rounded-[22px] border border-[#d8d9d7] bg-[#faf8f3] p-7 shadow-[0_0_0_rgba(8,11,14,0)] transition-shadow duration-500 hover:shadow-[0_20px_55px_rgba(8,11,14,0.13)]"
              >

                {/* Glow */}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.35 }}
                  transition={{ duration: 0.4 }}
                  className="pointer-events-none absolute -right-14 -top-14 h-[130px] w-[130px] rounded-full blur-[45px]"
                  style={{
                    backgroundColor: service.accent,
                  }}
                />


                {/* Number */}

                <span
                  className="relative z-10 font-[Lato,Arial,sans-serif] text-[11px] font-bold"
                  style={{
                    color: service.accent,
                  }}
                >
                  {service.number}
                </span>


                {/* Icon */}

                <div className="relative z-10 mt-6 flex items-center justify-between">

                  <motion.div
                    whileHover={{
                      scale: 1.12,
                      rotate: 6,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex h-[52px] w-[52px] items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `${service.accent}18`,
                    }}
                  >
                    <Sparkles
                      size={21}
                      strokeWidth={1.8}
                      style={{
                        color: service.accent,
                      }}
                    />
                  </motion.div>


                  <motion.div
                    whileHover={{
                      x: 5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <ArrowRight
                      size={20}
                      className="text-[#8b9398] transition-colors duration-300 group-hover:text-[#080b0e]"
                    />
                  </motion.div>

                </div>


                <motion.h3
                  className="relative z-10 mt-6 text-[22px] font-bold leading-[1.05] tracking-[-0.7px] text-[#080b0e]"
                >
                  {service.title}
                </motion.h3>


                <p className="relative z-10 mt-3 max-w-[330px] font-[Lato,Arial,sans-serif] text-[14px] leading-[1.6] text-[#58616a]">
                  {service.text}
                </p>


                {/* Bottom Accent */}

                <motion.div
                  initial={{ width: 55 }}
                  whileHover={{ width: 90 }}
                  className="absolute bottom-5 left-7 h-[5px] rounded-full"
                  style={{
                    backgroundColor: service.accent,
                  }}
                />

              </motion.div>

            ))}

          </motion.div>

        </div>
      </section>


      {/* =========================================================
          TRUSTED BY
      ========================================================= */}

      <section className="bg-[#eeece6] px-6 py-16 sm:px-10 sm:py-20 md:px-14 lg:px-[4.7%]">

        <div className="mx-auto max-w-[1500px]">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            className="mb-10 max-w-[800px]"
          >

            <motion.div
              variants={slideLeft}
              className="flex items-center gap-3"
            >

              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 42 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7 }}
                className="h-[5px] rounded-full bg-[#22b5e8]"
              />

              <p className="font-[Lato,Arial,sans-serif] text-[12px] font-bold uppercase tracking-[0.16em] text-[#080b0e]">
                Our Network
              </p>

            </motion.div>


            <motion.h2
              variants={fadeUp}
              className="mt-4 text-[44px] font-bold leading-[0.98] tracking-[-2px] text-[#080b0e] sm:text-[54px] md:text-[62px]"
            >
              Trusted By Industry Leaders
            </motion.h2>


            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[650px] font-[Lato,Arial,sans-serif] text-[15px] leading-[1.7] text-[#58616a] sm:text-[16px]"
            >
              Partnering with top brands, enterprises and public institutions.
            </motion.p>

          </motion.div>


          {/* Client Cards */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          >

            {clients.map((client, index) => {

              const accents = [
                "#ff4d57",
                "#22b5e8",
                "#ffd21c",
                "#ff4d57",
                "#22b5e8",
                "#ffd21c",
              ];

              return (

                <motion.div
                  key={client}
                  variants={cardReveal}
                  whileHover={{
                    y: -9,
                    scale: 1.025,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group relative flex min-h-[105px] items-center justify-center overflow-hidden rounded-[18px] border border-[#d4d4d0] bg-white px-4 transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(8,11,14,0.12)]"
                >

                  <motion.div
                    initial={{ width: 35 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.35 }}
                    className="absolute bottom-0 left-0 h-[4px] rounded-r-full"
                    style={{
                      backgroundColor: accents[index],
                    }}
                  />

                  <motion.span
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="text-center text-[15px] font-bold tracking-[-0.2px] text-[#080b0e] sm:text-[16px]"
                  >
                    {client}
                  </motion.span>

                </motion.div>

              );
            })}

          </motion.div>

        </div>
      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#080b0e] px-6 py-12 text-white sm:px-10 md:px-14 lg:px-[4.7%]">

        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#ff4d57]/10 blur-[70px]"
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute bottom-[-80px] left-[45%] h-[180px] w-[180px] rounded-full bg-[#22b5e8]/10 blur-[70px]"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
          className="relative z-10 mx-auto flex max-w-[1500px] flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >

          <motion.div variants={slideLeft}>

            <p className="text-[19px] italic leading-none text-white sm:text-[21px]">
              Let's create
            </p>

            <motion.h3
              variants={fadeUp}
              className="mt-2 text-[26px] font-semibold leading-tight tracking-[-0.8px] sm:text-[30px]"
            >
              Something meaningful together.
            </motion.h3>

          </motion.div>


          <motion.a
            variants={slideRight}
            href="#services"
            whileHover={{
              scale: 1.06,
              backgroundColor: "#ffd21c",
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="inline-flex h-[46px] w-full items-center justify-center gap-4 rounded-full bg-white px-7 text-[12px] font-bold uppercase text-[#080b0e] sm:w-[165px]"
          >
            Let's Talk

            <motion.span
              whileHover={{
                x: 5,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <ArrowRight size={17} />
            </motion.span>

          </motion.a>

        </motion.div>

      </section>

    </motion.div>
  );
};

export default Insights;