import React from "react";
import { motion } from "framer-motion";
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
      name: "Online Reputation Management (ORM)",
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
    { name: "Our Story", path: "/our-story" },
    { name: "Kitne Aadmi hai", path: "/ourteam" },
    { name: "Careers", path: "/careers" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Client Testimonials", path: "/client-testimonials" },
  ];

  const insights = ["Tips & Guides", "Case Studies", "News & Updates"];

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
        viewport={{ once: true, amount: 0.15 }}
        className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-10 xl:px-12"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr_1.2fr] lg:gap-8 xl:gap-12">
          
          {/* BRAND COLUMN */}
          <motion.div variants={itemVariants}>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex items-center gap-1 h-8">
                <div className="w-2.5 h-full bg-red-500 -skew-x-12 rounded-sm" />
                <div className="w-2.5 h-full bg-blue-500 -skew-x-12 rounded-sm" />
                <div className="w-2.5 h-full bg-green-500 -skew-x-12 rounded-sm" />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-wider text-white leading-none">
                  Konsole
                </h2>
                <p className="text-[10px] tracking-widest text-gray-300 font-semibold mt-0.5 ml-14">
                  Group
                </p>
              </div>
            </div>

            <p className="max-w-[280px] text-[14px] leading-6 text-white/55">
              Digital Solutions for Growing Businesses
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/company/konsole-group/"
                target="_blank"
                rel="noreferrer"
                whileHover={socialHover}
                whileTap={{ scale: 0.95 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors duration-300 hover:border-[#249d8d]/40 hover:bg-[#249d8d] hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.56 20.452h3.558V8.999H3.56v11.453z" />
                </svg>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/share/1bu128XADF/"
                target="_blank"
                rel="noreferrer"
                whileHover={socialHover}
                whileTap={{ scale: 0.95 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors duration-300 hover:border-[#249d8d]/40 hover:bg-[#249d8d] hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.77V3.94c-.31-.04-1.38-.14-2.62-.14-2.59 0-4.37 1.58-4.37 4.48V10H7v3h2.78v8h3.72z" />
                </svg>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/konsolegroup?stkn=MWxmYmsyM25wbDBp"
                target="_blank"
                rel="noreferrer"
                whileHover={socialHover}
                whileTap={{ scale: 0.95 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors duration-300 hover:border-[#249d8d]/40 hover:bg-[#249d8d] hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* MENU CARD / SERVICES COLUMN */}
          <motion.div variants={itemVariants}>
            <h3 className="relative inline-block text-lg font-semibold text-white">
              Menu Card
              <span className="mt-1 block h-[2px] w-6 bg-red-500" />
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={service.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="block transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* OUR ADHAAR CARD / COMPANY COLUMN */}
          <motion.div variants={itemVariants}>
            <h3 className="relative inline-block text-lg font-semibold text-white">
              Our Adhaar Card
              <span className="mt-1 block h-[2px] w-6 bg-red-500" />
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {companyLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="block transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* INSIGHTS COLUMN */}
          <motion.div variants={itemVariants}>
            <h3 className="relative inline-block text-lg font-semibold text-white">
              Insights
              <span className="mt-1 block h-[2px] w-6 bg-red-500" />
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {insights.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to="/insights"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="block transition-colors hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* HELLO FRIENDS / CONTACT COLUMN */}
          <motion.div variants={itemVariants}>
            <h3 className="relative inline-block text-lg font-semibold text-white">
              Hello Friends
              <span className="mt-1 block h-[2px] w-6 bg-red-500" />
            </h3>
            <div className="mt-4 space-y-3.5 text-sm text-white/60">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <span>
                  Office no. CCPR 305, 3rd Floor, Ambuja City Centre Mall, Vidhan Sabha Road, Raipur, Chhattisgarh
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-red-500" />
                <a href="tel:+919810523316" className="transition-colors hover:text-white">
                  +91 xxxxxxxxx
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-red-500" />
                <a href="mailto:info@konsolegroup.com" className="transition-colors hover:text-white">
                  info@konsolegroup.com
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center md:text-left text-xs text-white/40">
          <p>© 2025 Konsole Group. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
}