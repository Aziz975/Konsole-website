import React from "react";
import { motion } from "motion/react";

const OurTeam = () => {
  const teamMembers = [
    {
      imgSrc: "/images/team-2.jpg",
    },
    {
      imgSrc: "/images/team-3.jpg",
    },
    {
      imgSrc: "/images/team-4.jpg",
    },
    {
      imgSrc: "/images/team-5.jpg",
    },
  ];

  /* =========================================================
     ANIMATION VARIANTS
  ========================================================= */

  const heroTextContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const heroTextItem = {
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

  const sectionReveal = {
    hidden: {
      opacity: 0,
      y: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardsContainer = {
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
      y: 50,
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

  return (
    <div className="min-h-screen overflow-hidden bg-[#faf8f3] font-[Lato,Arial,sans-serif] text-[#080b0e]">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="relative w-full overflow-hidden bg-[#080b0d] px-6 py-14 text-white sm:px-10 md:px-14 md:py-20 lg:px-[4.7%]">

        {/* ================= BACKGROUND ANIMATION ================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#ff4d57]/10 blur-[120px]"
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#22b5e8]/5 blur-[130px]"
        />

        {/* Moving Glow */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-[40%] top-[20%] h-[180px] w-[180px] rounded-full bg-[#ff4d57]/10 blur-[100px]"
        />

        <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            variants={heroTextContainer}
            initial="hidden"
            animate="visible"
            className="z-10"
          >

            {/* Small Label */}

            <motion.p
              variants={heroTextItem}
              className="mb-2 text-[24px] leading-none tracking-[-0.02em] text-white sm:text-[25px] md:text-[27px]"
            >
              Meet Our
            </motion.p>

            {/* Heading */}

            <motion.h1
              variants={heroTextItem}
              className="max-w-[650px] text-[50px] font-bold leading-[0.94] tracking-[-0.055em] text-white sm:text-[62px] md:text-[72px] lg:text-[76px]"
            >
              <motion.span
                initial={{
                  color: "#ff4d57",
                }}
                animate={{
                  color: ["#ff4d57", "#ff6871", "#ff4d57"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Team
              </motion.span>
            </motion.h1>

            {/* Red Accent Line */}

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 118,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 h-[5px] rounded-full bg-[#ff4d57]"
            />

            {/* Paragraph */}

            <motion.p
              variants={heroTextItem}
              className="mt-5 max-w-[680px] text-[15px] font-normal leading-[1.75] text-[#c5ccd1] sm:text-[16px] md:text-[17px]"
            >
              We are digital thinkers, strategists, creators, and problem
              solvers working together to build incredible web experiences.
            </motion.p>

          </motion.div>


          {/* =====================================================
              RIGHT HERO IMAGE
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -6,
              scale: 1.015,
            }}
            className="group relative h-[300px] w-full overflow-hidden rounded-[28px] border border-[#273035] bg-[#151a1d] shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:h-[360px] md:h-[420px]"
          >

            {/* Image */}

            <motion.img
              src="/images/aboutimg.jpg"
              alt="Our Team Hero"
              initial={{
                scale: 1.12,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 1.5,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Dark Gradient */}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b0d]/65 via-transparent to-transparent" />

            {/* Blue Glow */}

            <motion.div
              animate={{
                opacity: [0.1, 0.22, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#22b5e8]/20 blur-[70px]"
            />

            {/* Shine Animation */}

            <motion.div
              initial={{
                x: "-150%",
              }}
              animate={{
                x: "150%",
              }}
              transition={{
                duration: 1.4,
                delay: 0.7,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 left-0 w-[35%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent"
            />

            {/* Floating Border */}

            <motion.div
              animate={{
                opacity: [0.15, 0.4, 0.15],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-0 rounded-[28px] border border-[#ff4d57]/30"
            />

          </motion.div>

        </div>
      </section>


      {/* =========================================================
          MANAGEMENT TEAM SECTION
      ========================================================= */}

      <section className="mx-auto max-w-[1500px] px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-[4.3%] lg:py-20">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <div className="mb-8 md:mb-10 lg:mb-12">

          {/* Subheading */}

          <motion.p
            initial={{
              opacity: 0,
              x: -35,
              letterSpacing: "0.18em",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              letterSpacing: "-0.02em",
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-1 text-[24px] leading-tight tracking-[-0.02em] text-[#080b0d] sm:text-[25px] md:text-[27px]"
          >
            Management Team
          </motion.p>

          {/* Main Heading */}

          <motion.h2
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="max-w-[650px] text-[48px] font-bold leading-[0.96] tracking-[-0.05em] text-[#080b0d] sm:text-[56px] md:text-[62px] lg:text-[66px]"
          >
            We are digital thinkers, strategists, and creators.
          </motion.h2>

          {/* Accent */}

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 118,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 h-[5px] rounded-full bg-[#ff4d57]"
          />

        </div>


        {/* =====================================================
            TEAM GRID
        ===================================================== */}

        <motion.div
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.12,
          }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-12"
        >

          {/* ===================================================
              BIG FEATURED BOX
          =================================================== */}

          <motion.div
            variants={cardReveal}
            whileHover={{
              y: -7,
              transition: {
                duration: 0.35,
                ease: "easeOut",
              },
            }}
            className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[28px] border border-[#d8d9d7] bg-[#eeece6] shadow-[0_8px_30px_rgba(8,11,14,0.06)] lg:col-span-7 lg:min-h-[500px]"
          >

            {/* Image */}

            <motion.img
              src="/images/team-1.jpg"
              alt="Founding Leadership"
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              whileHover={{
                scale: 1.06,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* Dark Gradient */}

            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"
              initial={{
                opacity: 0.78,
              }}
              whileHover={{
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
              }}
            />

            {/* Moving Overlay */}

            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 w-[30%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
            />

            {/* Red Glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#ff4d57]/10 blur-[70px]" />

            {/* Bottom Overlay Label */}

            <motion.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="relative z-10 border-t border-white/10 bg-[#080b0d]/90 px-6 py-5 backdrop-blur-sm"
            >

              <h3 className="text-[21px] font-bold leading-tight tracking-[-0.025em] text-white md:text-[24px]">
                Founding Leadership
              </h3>

              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#ffd21c]">
                Strategic Direction & Growth
              </p>

            </motion.div>

          </motion.div>


          {/* ===================================================
              4 GRID BOXES - RIGHT SIDE
          =================================================== */}

          <motion.div
            variants={cardsContainer}
            className="grid grid-cols-2 gap-5 lg:col-span-5"
          >

            {teamMembers.map((member, index) => (

              <motion.div
                key={index}
                variants={cardReveal}
                whileHover={{
                  y: -7,
                  scale: 1.025,
                  transition: {
                    duration: 0.35,
                    ease: "easeOut",
                  },
                }}
                className="group relative flex min-h-[200px] flex-col justify-end overflow-hidden rounded-[22px] border border-[#d8d9d7] bg-[#eeece6] shadow-[0_8px_25px_rgba(8,11,14,0.05)] lg:min-h-[240px]"
              >

                {/* Image */}

                <motion.img
                  src={member.imgSrc}
                  alt={member.role}
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Gradient */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b0d]/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Blue Hover Glow */}

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="pointer-events-none absolute -right-10 -top-10 h-[120px] w-[120px] rounded-full bg-[#22b5e8]/20 blur-[45px]"
                />

                {/* Hover Border */}

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="pointer-events-none absolute inset-0 rounded-[22px] border border-[#22b5e8]/70"
                />

              </motion.div>

            ))}

          </motion.div>

        </motion.div>

      </section>


      {/* =========================================================
          BOTTOM VISUAL ACCENT
      ========================================================= */}

      <div className="flex w-full items-center gap-3 bg-[#080b0d] px-6 py-4 sm:px-10 lg:px-[4.3%]">

        <div className="h-[5px] w-[55px] rounded-full bg-[#ff4d57]" />

        <div className="h-[5px] w-[35px] rounded-full bg-[#22b5e8]" />

        <div className="h-[5px] w-[25px] rounded-full bg-[#ffd21c]" />

      </div>

    </div>
  );
};

export default OurTeam;