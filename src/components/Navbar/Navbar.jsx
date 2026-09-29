import React, { useState } from "react";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
  };

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

  return (
    <nav className="relative z-[9999] w-full rounded-b-[24px] bg-white shadow-sm">

      {/* =====================================================
          DESKTOP / MAIN NAVBAR
      ===================================================== */}

      <div className="flex h-[71px] w-full items-center justify-between px-5 sm:px-8 md:px-10 lg:px-[58px]">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src="/image.png"
            alt="Konsole Group"
            className="logo-animation h-[36px] w-auto object-contain sm:h-[40px] md:h-[42px]"
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex xl:gap-[48px]">

          {/* HOME */}
          <Link
            to="/"
            className="relative text-[14px] font-semibold text-[#171717] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:text-[#35a99b]"
          >
            Home
          </Link>

          {/* =================================================
              SERVICES / MENU CARD
          ================================================= */}

          <div
            className="group relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >

            {/* CLICKABLE MENU CARD */}
            <button
              type="button"
              onClick={toggleServices}
              className="flex items-center gap-1 text-[14px] font-semibold text-[#171717] transition-all duration-300 hover:-translate-y-[2px] hover:text-[#35a99b]"
            >
              Menu Card

              <ChevronDown
                size={14}
                strokeWidth={2}
                className={`transition-transform duration-300 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* =================================================
                DROPDOWN
            ================================================= */}

            <div
              className={`absolute left-1/2 top-full w-[280px] -translate-x-1/2 pt-3 transition-all duration-200 ease-out ${
                isServicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-2 opacity-0"
              }`}
            >

              {/* DROPDOWN CONTENT */}
              <div className="rounded-xl border border-[#e5e5e5] bg-white p-2 shadow-xl">

                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setIsServicesOpen(false)}
                    className="block rounded-lg px-4 py-3 text-[14px] font-medium text-[#171717] transition-all duration-200 hover:bg-[#f3f3f3] hover:translate-x-1"
                  >
                    {service.name}
                  </Link>
                ))}

              </div>
            </div>
          </div>

          {/* ABOUT */}
          <Link
            to="/about"
            className="text-[14px] font-semibold text-[#171717] transition-all duration-300 hover:-translate-y-[2px] hover:text-[#35a99b]"
          >
            Our Adhaar Card
          </Link>

          {/* INSIGHTS */}
          <Link
            to="/insights"
            className="text-[14px] font-semibold text-[#171717] transition-all duration-300 hover:-translate-y-[2px] hover:text-[#35a99b]"
          >
            Insights
          </Link>

          {/* CONTACT */}
          <Link
            to="/contact"
            className="text-[14px] font-semibold text-[#171717] transition-all duration-300 hover:-translate-y-[2px] hover:text-[#35a99b]"
          >
            Hello Friends
          </Link>

        </div>

        {/* =====================================================
            DESKTOP LET'S TALK
        ===================================================== */}

        <Link
          to="/contact"
          className="hidden h-[39px] w-[127px] items-center justify-center gap-[7px] rounded-full bg-[#090d0e] text-[14px] font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg lg:flex"
        >
          Let's Talk

          <ArrowRight
            size={14}
            strokeWidth={2}
            className="transition-transform duration-300"
          />
        </Link>

        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#090d0e] text-white transition-transform duration-300 hover:scale-105 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={20} strokeWidth={2} />
          ) : (
            <Menu size={20} strokeWidth={2} />
          )}
        </button>

      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "max-h-[800px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="border-t border-gray-100 px-5 pb-6 pt-4 sm:px-8">

          <div className="flex flex-col">

            {/* HOME */}
            <Link
              to="/"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-semibold text-[#171717] transition-colors hover:text-[#35a99b]"
            >
              Home
            </Link>

            {/* =================================================
                MOBILE MENU CARD
            ================================================= */}

            <button
              type="button"
              onClick={toggleServices}
              className="flex w-full items-center justify-between border-b border-gray-100 py-4 text-left text-sm font-semibold text-[#171717]"
            >
              <span>Menu Card</span>

              <ChevronDown
                size={17}
                className={`transition-transform duration-300 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* MOBILE SERVICES */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isServicesOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-b border-gray-100 py-2">

                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={closeMenu}
                    className="block rounded-lg px-3 py-3 text-[13px] font-medium text-[#555] transition-colors hover:bg-[#f5f5f5] hover:text-[#35a99b]"
                  >
                    {service.name}
                  </Link>
                ))}

              </div>
            </div>

            {/* ABOUT */}
            <Link
              to="/about"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-semibold text-[#171717] transition-colors hover:text-[#35a99b]"
            >
              Our Adhaar Card
            </Link>

            {/* INSIGHTS */}
            <Link
              to="/insights"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-semibold text-[#171717] transition-colors hover:text-[#35a99b]"
            >
              Insights
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-semibold text-[#171717] transition-colors hover:text-[#35a99b]"
            >
              Hello Friends
            </Link>

            {/* MOBILE LET'S TALK */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-5 flex h-[45px] w-full items-center justify-center gap-2 rounded-full bg-[#090d0e] text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Let's Talk

              <ArrowRight
                size={16}
                strokeWidth={2}
              />
            </Link>

          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;