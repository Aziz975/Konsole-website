import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
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

const linkVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const socialHover = {
  y: -5,
  scale: 1.08,
};

export default function Footer() {
  const services = [
    {
      name: "Meme & Moment Marketing",
      path: "/services/memeandmomentmarketing",
    },
    {
      name: "Content Creation",
      path: "/services/contentcreation",
    },
    {
      name: "Video Production",
      path: "/services/videoproduction",
    },
    {
      name: "Online Reputation Management(ORM)",
      path: "/services/orm",
    },
    {
      name: "Digital PR & Media Outreach",
      path: "/services/digitalpr",
    },
    {
      name: "Political Intelligence",
      path: "/services/politicalintelligence",
    },
    {
      name: "Government Communication Projects",
      path: "/services/governmentprojects",
    },
  ];

  const companyLinks = [
    {
      name: "Our Story",
      path: "/our-story",
    },
    {
      name: "Kitne Aadmi hai",
      path: "/ourteam",
    },
    {
      name: "Careers",
      path: "/careers",
    },
    {
      name: "Why Choose Us",
      path: "/why-choose-us",
    },
    {
      name: "Client Testimonials",
      path: "/client-testimonials",
    },
  ];

  const insights = [
    "Tips & Guides",
    "Case Studies",
    "News & Updates",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#071313] text-white">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#249d8d]/10 blur-[120px]"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="pointer-events-none absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-[#19cdb5]/10 blur-[140px]"
      />

      {/* Main Footer */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-10 xl:px-12"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr_1.2fr] lg:gap-8 xl:gap-12">
          {/* BRAND */}
          <motion.div variants={itemVariants}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-5 flex items-center gap-3"
            >



              <div className="flex items-center gap-3">
                {/* Logo Image Placeholder */}
                {/* <img src="" alt="RODEZ Logo" className="h-10" /> */}
                <div className="flex gap-1 h-8 items-center">
                  <div className="w-2.5 h-full bg-red-500 -skew-x-12 rounded-sm"></div>
                  <div className="w-2.5 h-full bg-blue-500 -skew-x-12 rounded-sm"></div>
                  <div className="w-2.5 h-full bg-green-500 -skew-x-12 rounded-sm"></div>
                </div>

                <div>
                  <h2 className="text-2xl font-black tracking-wider text-white leading-none">
                    Konsole
                  </h2>
                  <p className="text-[10px] tracking-widest text-gray-300 font-semibold mt-0.5 ml-20">
                    Group
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="max-w-[280px] text-[14px] leading-6 text-white/55"
            >
              Digital Solutions for Growing Businesses
            </motion.p>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex items-center gap-3"
            >
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/company/konsole-group/"
                whileHover={socialHover}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors duration-300 hover:border-[#249d8d]/40 hover:bg-[#249d8d] hover:text-white"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.56 20.452h3.558V8.999H3.56v11.453z" />
                </svg>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/share/1bu128XADF/"
                whileHover={socialHover}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors duration-300 hover:border-[#249d8d]/40 hover:bg-[#249d8d] hover:text-white"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.77V3.94c-.31-.04-1.38-.14-2.62-.14-2.59 0-4.37 1.58-4.37 4.48V10H7v3h2.78v8h3.72z" />
                </svg>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/konsolegroup?stkn=MWxmYmsyM25wbDBp"
                whileHover={socialHover}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors duration-300 hover:border-[#249d8d]/40 hover:bg-[#249d8d] hover:text-white"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </motion.a>

              {/* X */}
              <motion.a
                href="https://x.com/konsolegroup"
                whileHover={socialHover}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors duration-300 hover:border-[#249d8d]/40 hover:bg-[#249d8d] hover:text-white"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="https://youtube.com/@konsolegroup?si=wRHzYLf9kBXb72MV"
                whileHover={socialHover}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors duration-300 hover:border-[#249d8d]/40 hover:bg-[#249d8d] hover:text-white"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.376.55A3.016 3.016 0 0 0 .502 6.186 31.15 31.15 0 0 0 0 12a31.15 31.15 0 0 0 .502 5.814 3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.376-.55a3.016 3.016 0 0 0 2.122-2.136A31.15 31.15 0 0 0 24 12a31.15 31.15 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* SERVICES */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-5 text-[14px] font-semibold uppercase tracking-[1.5px] text-white">
              Menu Card
            </h3>

            <motion.div
              variants={containerVariants}
              className="flex flex-col gap-3"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                >
                  <Link
                    to={service.path}
                    className="group relative inline-block text-[13px] leading-5 text-white/55 transition-colors duration-300 hover:text-[#35a99b]"
                  >
                    <span className="relative">
                      {service.name}

                      {/* Underline only — NO ARROW */}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#35a99b] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* COMPANY */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-5 text-[14px] font-semibold uppercase tracking-[1.5px] text-white">
              Our Adhaar Card
            </h3>

            <motion.div
              variants={containerVariants}
              className="flex flex-col gap-3"
            >
              {companyLinks.map((item, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                >
                  <Link
                    to={item.path}
                    className="group relative inline-block text-[13px] leading-5 text-white/55 transition-colors duration-300 hover:text-[#35a99b]"
                  >
                    <span className="relative">
                      {item.name}

                      {/* Underline only — NO ARROW */}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#35a99b] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* INSIGHTS */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-5 text-[14px] font-semibold uppercase tracking-[1.5px] text-white">
              Insights
            </h3>

            <motion.div
              variants={containerVariants}
              className="flex flex-col gap-3"
            >
              {insights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                >
                  <a
                    href="#"
                    className="group relative inline-block text-[13px] leading-5 text-white/55 transition-colors duration-300 hover:text-[#35a99b]"
                  >
                    <span className="relative">
                      {item}

                      {/* Underline only — NO ARROW */}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#35a99b] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-5 text-[14px] font-semibold uppercase tracking-[1.5px] text-white">
              Hello Friends
            </h3>

            <div className="flex flex-col gap-5">
              {/* Address */}
              <motion.div
                variants={linkVariants}
                className="group flex items-start gap-3"
              >
                <motion.div
                  whileHover={{
                    scale: 1.12,
                    rotate: -5,
                  }}
                  transition={{ duration: 0.25 }}
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#35a99b] transition-colors duration-300 group-hover:border-[#35a99b]/30 group-hover:bg-[#35a99b]/10"
                >
                  <MapPin size={15} strokeWidth={1.7} />
                </motion.div>

                <p className="text-[13px] leading-5 text-white/55">
                  New Delhi, India
                </p>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={linkVariants}
                className="group flex items-center gap-3"
              >
                <motion.div
                  whileHover={{
                    scale: 1.12,
                    rotate: -5,
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#35a99b] transition-colors duration-300 group-hover:border-[#35a99b]/30 group-hover:bg-[#35a99b]/10"
                >
                  <Phone size={15} strokeWidth={1.7} />
                </motion.div>

                <a
                  href="tel:+919999999999"
                  className="text-[13px] text-white/55 transition-colors duration-300 hover:text-[#35a99b]"
                >
                  +91 99999 99999
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={linkVariants}
                className="group flex items-center gap-3"
              >
                <motion.div
                  whileHover={{
                    scale: 1.12,
                    rotate: -5,
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#35a99b] transition-colors duration-300 group-hover:border-[#35a99b]/30 group-hover:bg-[#35a99b]/10"
                >
                  <Mail size={15} strokeWidth={1.7} />
                </motion.div>

                <a
                  href="mailto:hello@konsolegroup.com"
                  className="break-all text-[13px] text-white/55 transition-colors duration-300 hover:text-[#35a99b]"
                >
                  hello@konsolegroup.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 h-px origin-left bg-white/10"
        />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="flex flex-col items-center justify-between gap-4 pt-7 sm:flex-row"
        >
          <p className="text-center text-[12px] text-white/35 sm:text-left">
            © 2025 Konsole Group. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[12px] text-white/35 transition-colors duration-300 hover:text-[#35a99b]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-[12px] text-white/35 transition-colors duration-300 hover:text-[#35a99b]"
            >
              Terms & Conditions
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}