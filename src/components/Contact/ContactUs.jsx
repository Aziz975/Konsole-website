import React from "react";
import { motion } from "motion/react";

import {
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Mountain,
} from "lucide-react";

export default function ContactUs() {
  return (
    <section className="w-full overflow-hidden bg-[#faf8f3] text-[#080b0e]">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <div className="relative min-h-[380px] overflow-hidden bg-[#080b0e] px-6 py-14 sm:px-10 md:min-h-[400px] md:px-14 md:py-16 lg:px-[4.7%]">

        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-[720px]">

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
              filter: "blur(6px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-1 text-[25px] leading-none text-white sm:text-[25px] md:text-[27px]"
          >
            Do you need support?
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 55,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[50px] font-bold leading-[0.95] tracking-[-2.5px] text-white sm:text-[68px] md:text-[76px] lg:text-[72px]"
          >
            Contact Us
          </motion.h1>

          {/* RED LINE */}
          <div className="mt-5 h-[5px] w-[118px] rounded-full bg-[#ff4d57]" />

          <p className="mt-5 max-w-[680px]  text-[17px] font-normal  text-[#f1f3f3] leading-[1.75] text-[#c5ccd1] sm:text-[17px] md:text-[18px]">
            Let’s connect, understand what you need, and build the right
            digital experience together.
          </p>
        </div>

        {/* =====================================================
            RIGHT ABSTRACT GRAPHIC
        ===================================================== */}
        <div className="absolute right-[7%] top-[22px] hidden h-[300px] w-[390px] sm:block">

          {/* Yellow circle */}
          <div className="absolute right-[40px] top-0 h-[235px] w-[235px] rounded-full bg-[#ffd21c] lg:h-[250px] lg:w-[250px]" />

          {/* Mountain / zigzag */}
          <svg
            className="absolute right-[72px] top-[112px] z-10 h-[75px] w-[145px]"
            viewBox="0 0 145 75"
            fill="none"
          >
            <path
              d="M8 64L32 29L48 49L66 17L87 48L105 22L137 65"
              stroke="white"
              strokeWidth="2.5"
            />
            <path
              d="M8 64L32 29L48 49L66 17L87 48L105 22L137 65"
              stroke="white"
              strokeWidth="1"
              opacity="0.6"
            />
          </svg>

          {/* Blue horizontal bar */}
          <div className="absolute right-0 top-[236px] h-[46px] w-[265px] bg-[#24b5e8]" />

          {/* Message icon */}
          <div className="absolute right-[56px] top-[194px] z-20 flex h-[61px] w-[78px] items-center justify-center rounded-[15px] border-[4px] border-white bg-transparent">
            <MessageSquare
              size={39}
              strokeWidth={1.8}
              className="text-white"
            />
          </div>

          {/* Red circle */}
          <div className="absolute right-[18px] top-[228px] z-30 h-[65px] w-[65px] rounded-full bg-[#ff4d57]" />

          {/* Bottom label */}
          <p className="absolute right-[-8px] top-[290px] whitespace-nowrap font-[Lato,Arial,sans-serif] text-[10px] font-bold text-white">
            REAL PEOPLE • REAL CONVERSATIONS
          </p>
        </div>
      </div>

      {/* =========================================================
          CONTACT CARDS
      ========================================================= */}
       <div className="bg-[#faf8f3] px-5 py-10 sm:px-8 md:px-10 lg:px-[4.2%] lg:py-[50px]">

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-7">

        {/* =====================================================
            ADDRESS
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -7,
            scale: 1.015,
            boxShadow: "0 18px 45px rgba(255,77,87,0.22)",
          }}
          className="group relative min-h-[190px] overflow-hidden rounded-[22px] border border-[#d8d9d7] bg-white px-8 py-7 transition-colors duration-300 hover:border-[#ff4d57]"
        >

          {/* Red Glow */}
          <motion.div
            className="pointer-events-none absolute -right-16 -top-16 h-[140px] w-[140px] rounded-full bg-[#ff4d57]/20 blur-[45px]"
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileHover={{
              opacity: 1,
              scale: 1.4,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          />

          <span className="relative z-10 font-[Lato,Arial,sans-serif] text-[11px] font-bold text-[#ff4d57]">
            01
          </span>

          <div className="relative z-10 mt-5 flex items-start gap-5">

            <motion.div
              className="relative flex h-[55px] w-[55px] shrink-0 items-center justify-center"
              whileHover={{
                scale: 1.08,
                rotate: -3,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <MapPin
                size={43}
                strokeWidth={2}
                className="text-[#080b0e]"
              />

              {/* Decorative Ring */}
              <motion.span
                className="absolute left-[13px] top-[16px] h-[10px] w-[10px] rounded-full border-2 border-[#080b0e]"
                whileHover={{
                  scale: 1.3,
                }}
                transition={{
                  duration: 0.25,
                }}
              />
            </motion.div>

            <div>
              <h2 className="font-[Lato,Arial,sans-serif] text-[24px] font-black leading-none tracking-[-0.5px] text-[#080b0e]">
                Address
              </h2>

              <p className="mt-5 max-w-[300px] font-[Lato,Arial,sans-serif] text-[14px] leading-[1.55] text-[#58616a]">
                Office no. CCPR 305, 3rd Floor, Ambuja City Centre Mall,
                Vidhan Sabha Road, Raipur, Chhattisgarh
              </p>
            </div>
          </div>

          {/* Bottom Accent */}
          <motion.div
            className="absolute bottom-[18px] left-8 h-[5px] rounded-full bg-[#ff4d57]"
            initial={{ width: "58px" }}
            whileHover={{ width: "90px" }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          />

        </motion.div>


        {/* =====================================================
            EMAIL
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -7,
            scale: 1.015,
            boxShadow: "0 18px 45px rgba(36,181,232,0.22)",
          }}
          className="group relative min-h-[190px] overflow-hidden rounded-[22px] border border-[#d8d9d7] bg-[#eeece6] px-8 py-7 transition-colors duration-300 hover:border-[#24b5e8]"
        >

          {/* Blue Glow */}
          <motion.div
            className="pointer-events-none absolute -right-16 -top-16 h-[140px] w-[140px] rounded-full bg-[#24b5e8]/20 blur-[45px]"
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileHover={{
              opacity: 1,
              scale: 1.4,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          />

          <span className="relative z-10 font-[Lato,Arial,sans-serif] text-[11px] font-bold text-[#24b5e8]">
            02
          </span>

          <div className="relative z-10 mt-5 flex items-start gap-5">

            <motion.div
              className="flex h-[55px] w-[55px] shrink-0 items-center justify-center"
              whileHover={{
                scale: 1.08,
                rotate: 3,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <Mail
                size={48}
                strokeWidth={1.8}
                className="text-[#080b0e]"
              />
            </motion.div>

            <div>
              <h2 className="font-[Lato,Arial,sans-serif] text-[24px] font-black leading-none tracking-[-0.5px] text-[#080b0e]">
                Email Us
              </h2>

              <div className="mt-5 space-y-2">
                <motion.p
                  whileHover={{
                    x: 4,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="font-[Lato,Arial,sans-serif] text-[14px] text-[#58616a]"
                >
                  info@konsolegroup.com
                </motion.p>

                <motion.p
                  whileHover={{
                    x: 4,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="font-[Lato,Arial,sans-serif] text-[14px] text-[#58616a]"
                >
                  hr@konsolegroup.com
                </motion.p>
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <motion.div
            className="absolute bottom-[18px] left-8 h-[5px] rounded-full bg-[#24b5e8]"
            initial={{ width: "58px" }}
            whileHover={{ width: "90px" }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          />

        </motion.div>


        {/* =====================================================
            CALL
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -7,
            scale: 1.015,
            boxShadow: "0 18px 45px rgba(255,210,28,0.25)",
          }}
          className="group relative min-h-[190px] overflow-hidden rounded-[22px] border border-[#151a1e] bg-[#151a1e] px-8 py-7 transition-colors duration-300 hover:border-[#ffd21c]"
        >

          {/* Yellow Glow */}
          <motion.div
            className="pointer-events-none absolute -right-16 -top-16 h-[140px] w-[140px] rounded-full bg-[#ffd21c]/20 blur-[45px]"
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileHover={{
              opacity: 1,
              scale: 1.4,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          />

          <span className="relative z-10 font-[Lato,Arial,sans-serif] text-[11px] font-bold text-[#ffd21c]">
            03
          </span>

          <div className="relative z-10 mt-5 flex items-start gap-5">

            <motion.div
              className="flex h-[55px] w-[55px] shrink-0 items-center justify-center"
              whileHover={{
                scale: 1.08,
                rotate: -3,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <Phone
                size={47}
                strokeWidth={1.8}
                className="text-white"
              />
            </motion.div>

            <div>
              <h2 className="font-[Lato,Arial,sans-serif] text-[24px] font-black leading-none tracking-[-0.5px] text-white">
                Call Us
              </h2>

              <motion.p
                whileHover={{
                  x: 4,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="mt-5 font-[Lato,Arial,sans-serif] text-[14px] text-[#c5ccd1]"
              >
                Sales Enquiry&nbsp; +91 99933 33902
              </motion.p>

              <p className="mt-3 font-[Lato,Arial,sans-serif] text-[12px] text-[#8f989e]">
                Available for new projects & enquiries
              </p>
            </div>
          </div>

          {/* Bottom Accent */}
          <motion.div
            className="absolute bottom-[18px] left-8 h-[5px] rounded-full bg-[#ffd21c]"
            initial={{ width: "58px" }}
            whileHover={{ width: "90px" }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          />

        </motion.div>
      </div>


      {/* =====================================================
          BOTTOM CONNECTED BAR
      ===================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-[18px] flex min-h-[28px] items-center justify-center rounded-full bg-[#080b0e] px-5 py-2"
      >
        <p className="text-center font-[Lato,Arial,sans-serif] text-[8px] font-bold tracking-[0.15px] text-white sm:text-[9px]">
          ADDRESS&nbsp;&nbsp;•&nbsp;&nbsp; EMAIL&nbsp;&nbsp;•&nbsp;&nbsp;
          CALL&nbsp;&nbsp;•&nbsp;&nbsp; LET’S BUILD SOMETHING MEANINGFUL
        </p>
      </motion.div>

    </div>


      <div className="mx-auto w-full max-w-[1500px] px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-16 lg:py-16 xl:px-[4.3%]">

        {/* Heading */}
        <div className="mb-8 md:mb-10 lg:mb-12">
         <motion.p initial={{ opacity: 0, x: -35, letterSpacing: "0.18em" }} whileInView={{ opacity: 1, x: 0, letterSpacing: "-0.02em" }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="mb-1 text-[25px] leading-tight tracking-[-0.02em] text-[#080b0d] sm:text-[22px] md:text-[24px]">Let's talk</motion.p>

         <motion.h2 initial={{ opacity: 0, x: 70, scale: 0.96 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }} className="max-w-[600px] text-[50px] font-bold leading-[0.98] tracking-[-0.045em] sm:text-[56px] md:text-[62px] lg:text-[66px]">Get In Touch</motion.h2>

          <p className="mt-3 max-w-[680px] text-[15px] leading-[1.6] text-[#58616a] sm:text-[16px] md:text-[17px]">
            Tell us what you are looking for. We’ll turn the first conversation into a clear
            <br className="hidden sm:block" />
            next step.
          </p>

          <div className="mt-3 h-[5px] w-[122px] rounded-full bg-[#ffcc19]" />
        </div>


        {/* =========================
        FORM + LOCATION
    ========================== */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.88fr_1.2fr] lg:gap-12 xl:gap-14">

          {/* ================= FORM CARD ================= */}
          <div className="rounded-[28px] border border-[#d8d8d5] bg-white px-6 py-7 sm:px-8 sm:py-8 md:px-9 lg:px-8 xl:px-9">



            <h3 className="mb-3 text-[26px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[29px]">
              What can we help you with?
            </h3>

            <form className="space-y-4">

              {/* Service */}
              <div>
                <label className="mb-1 block text-[10px] font-bold uppercase tracking-wide">
                  SERVICES
                </label>

                <div className="relative">
                  <select
                    className="h-[34px] w-full appearance-none rounded-[9px] border-0 border-l-[5px] border-[#22b5e8] bg-[#ebeae5] px-3 text-[12px] text-[#647383] outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>
                    <option>Website Designing</option>
                    <option>Website Development</option>
                    <option>CMS</option>
                    <option>Hosting</option>
                    <option>Digital Marketing</option>
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-[#647383]">
                    ▼
                  </span>
                </div>
              </div>


              {/* Name + Phone */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div>
                  <label className="mb-1 block text-[10px] font-bold uppercase tracking-wide">
                    YOUR NAME
                  </label>

                  <input
                    type="text"
                    placeholder="Name"
                    className="h-[34px] w-full rounded-[9px] border-0 border-l-[5px] border-[#ff4654] bg-[#ebeae5] px-3 text-[12px] text-[#555] outline-none placeholder:text-[#718091]"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[10px] font-bold uppercase tracking-wide">
                    PHONE NUMBER
                  </label>

                  <input
                    type="text"
                    placeholder="Contact no"
                    className="h-[34px] w-full rounded-[9px] border-0 border-l-[5px] border-[#ffcc19] bg-[#ebeae5] px-3 text-[12px] text-[#555] outline-none placeholder:text-[#718091]"
                  />
                </div>

              </div>


              {/* Message */}
              <div>
                <label className="mb-1 block text-[10px] font-bold uppercase tracking-wide">
                  YOUR MESSAGE
                </label>

                <textarea
                  placeholder="Write Us"
                  rows="5"
                  className="w-full resize-none rounded-[10px] border-0 border-l-[5px] border-[#22b5e8] bg-[#ebeae5] px-3 py-3 text-[12px] text-[#555] outline-none placeholder:text-[#718091]"
                />
              </div>


              {/* Checkbox */}
              <div className="flex items-start gap-2 pt-0.5">
                <input
                  type="checkbox"
                  className="mt-[2px] h-[15px] w-[15px] shrink-0 accent-[#080b0d]"
                />

                <p className="max-w-[390px] text-[12px] leading-[1.5] text-[#607083]">
                  I hereby authorize you to send notifications via SMS/RCS
                  Messages/Promotional/Informational Messages.
                </p>
              </div>


              {/* Submit */}
              <button
                type="submit"
                className="animate-bounce mt-1 inline-flex h-[43px] min-w-[153px] items-center justify-center gap-4 rounded-full bg-[#080b0d] px-6 text-[11px] font-bold uppercase tracking-wide text-white transition-transform duration-300 hover:scale-[1.03]"
              >
                MESSAGE US
                <span className="text-[16px] leading-none">→</span>
              </button>

            </form>
          </div>


          {/* ================= LOCATION CARD ================= */}
          <div className="relative min-h-[390px] overflow-hidden rounded-[28px] border border-[#273035] bg-[#151a1d] p-7 text-white sm:p-8 md:min-h-[420px] lg:p-9">

            {/* Top content */}
            <div className="relative z-20">
              <p className="text-[11px] font-bold uppercase tracking-wide text-[#22b5e8]">
                FIND US
              </p>

              <h3 className="mt-1 text-[30px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[32px]">
                Raipur • Chhattisgarh
              </h3>

              <p className="mt-2 text-[15px] text-[#b8c0c5]">
                Ambuja City Centre Mall
              </p>
            </div>


            {/* =========================
            MAP AREA
        ========================== */}
            <div className="absolute bottom-0 left-0 right-0 top-[145px] overflow-hidden">

              {/* Grid */}
              <div
                className="absolute inset-0 opacity-80"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(72,87,96,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(72,87,96,.35) 1px, transparent 1px)",
                  backgroundSize: "59px 47px",
                  backgroundPosition: "0 0",
                }}
              />

              {/* Diagonal roads */}
              <div className="absolute left-[4%] top-[26px] h-[7px] w-[110%] -rotate-[18deg] bg-[#414b51]" />
              <div className="absolute left-[5%] top-[170px] h-[6px] w-[105%] rotate-[19deg] bg-[#414b51]" />

              <div className="absolute left-[21%] top-[-15px] h-[280px] w-[2px] rotate-[43deg] bg-[#566168]" />
              <div className="absolute left-[66%] top-[-10px] h-[285px] w-[2px] rotate-[-15deg] bg-[#566168]" />


              {/* Blue route */}
              <svg
                className="absolute left-[3%] top-[62px] h-[120px] w-[97%]"
                viewBox="0 0 800 150"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 90 C100 30 150 130 250 100 S390 40 470 92 S600 95 670 83 S750 90 800 45"
                  fill="none"
                  stroke="#22b5e8"
                  strokeWidth="5"
                />
              </svg>


              {/* Map points */}
              <div className="absolute left-[14%] top-[48px] flex items-center gap-2 text-[10px] text-[#d8dddf]">
                <span className="h-[11px] w-[11px] rounded-full bg-white" />
                City Centre
              </div>

              <div className="absolute right-[28%] top-[27px] flex items-center gap-2 text-[10px] text-[#d8dddf]">
                <span className="h-[11px] w-[11px] rounded-full bg-white" />
                Ambuja Mall
              </div>

              <div className="absolute bottom-[48px] left-[40%] flex items-center gap-2 text-[10px] text-[#d8dddf]">
                <span className="h-[11px] w-[11px] rounded-full bg-white" />
                Vidhan Sabha Rd
              </div>

              <div className="absolute bottom-[58px] right-[8%] flex items-center gap-2 text-[10px] text-[#d8dddf]">
                <span className="h-[11px] w-[11px] rounded-full bg-white" />
                Business District
              </div>


              {/* Location pin */}
              <div className="absolute left-[55%] top-[68px] flex h-[88px] w-[88px] -translate-x-1/2 items-center justify-center rounded-full bg-[#ffcc19] sm:h-[88px] sm:w-[88px]">

                <svg
                  width="43"
                  height="58"
                  viewBox="0 0 43 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5 2C10.73 2 2 10.73 2 21.5C2 35.5 21.5 55 21.5 55C21.5 55 41 35.5 41 21.5C41 10.73 32.27 2 21.5 2Z"
                    stroke="#080b0d"
                    strokeWidth="3"
                  />

                  <circle
                    cx="21.5"
                    cy="21"
                    r="7"
                    stroke="#080b0d"
                    strokeWidth="3"
                  />
                </svg>

              </div>


              {/* Location information */}
              <div className="absolute left-[63%] top-[78px]">
                <p className="text-[14px] font-bold text-white sm:text-[15px]">
                  KONSOLE GROUP
                </p>

                <p className="mt-1 whitespace-nowrap text-[10px] text-[#b8c0c5]">
                  CCPR 305 • 3rd Floor
                </p>

                <p className="text-[10px] text-[#b8c0c5]">
                  Ambuja City Centre Mall
                </p>
              </div>


              {/* Email box */}
              <div className="absolute bottom-[28px] left-[7%] flex min-h-[56px] w-[315px] max-w-[85%] items-center gap-4 rounded-[18px] border border-[#303b40] bg-[#20272b] px-5">

                <div className="flex h-[25px] w-[25px] items-center justify-center">
                  <svg
                    width="25"
                    height="20"
                    viewBox="0 0 25 20"
                    fill="none"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="23"
                      height="18"
                      stroke="#22b5e8"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2 3L12.5 12L23 3"
                      stroke="#22b5e8"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[11px] font-semibold text-white">
                    info@konsolegroup.com
                  </p>

                  <p className="mt-1 text-[9px] text-[#7e8a91]">
                    hr@konsolegroup.com
                  </p>
                </div>

              </div>

              {/* RIGHT IMAGE PLACEHOLDER */}
              <img
                src=""
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0"
              />

            </div>

          </div>

        </div>

      </div>


      {/* =========================
      BOTTOM CTA
  ========================== */}
      <div className="flex w-full flex-col gap-5 bg-[#080b0d] px-6 py-5 text-white sm:px-10 md:flex-row md:items-center md:justify-between md:px-16 lg:px-[4.3%]">

        <div>
          <p className="text-[19px] italic leading-none text-white sm:text-[21px]">
            Let's create
          </p>

          <h3 className="mt-1 text-[22px] font-semibold leading-tight tracking-[-0.025em] sm:text-[24px]">
            Something meaningful together.
          </h3>
        </div>

        <button
          type="button"
          className="inline-flex h-[44px] w-full items-center justify-center gap-4 rounded-full bg-white px-7 text-[12px] font-bold text-[#080b0d] transition-transform duration-300 hover:scale-[1.03] sm:w-[165px]"
        >
          Let's Talk
          <span className="text-[17px]">→</span>
        </button>

      </div>

    </section>



  );
}