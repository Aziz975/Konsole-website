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
      name: "Influencer Partnership",
      path: "/services/InfluencerPartnership",
    },
    {
      name: "Government Communication Projects",
      path: "/services/governmentprojects",
    },
  ];

  return (
    <nav className="relative z-[9999] w-full rounded-b-[24px] bg-white shadow-sm">

      {/* ================================
          DESKTOP / MAIN NAVBAR
      ================================= */}

      <div className="flex h-16 w-full items-center justify-between gap-3 px-4 sm:px-6 md:px-8 lg:px-10 xl:h-[71px] xl:px-[58px]">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
        >
          <img
            src="/image4.png"
            alt="Konsole Group Logo"
            className="h-8 w-auto object-contain sm:h-15"
          />

          
        </Link>

        

        {/* ================================
            DESKTOP NAVIGATION
        ================================= */}

        <div className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-8 2xl:gap-[48px]">

          {/* HOME */}
          <Link
            to="/"
            className="relative whitespace-nowrap text-[14px] font-semibold text-[#171717] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:text-[#35a99b]"
          >
            Home
          </Link>

          {/* MENU CARD */}
          <div
            className="group relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              onClick={toggleServices}
              className="flex items-center gap-1 whitespace-nowrap text-[14px] font-semibold text-[#171717] transition-all duration-300 hover:-translate-y-[2px] hover:text-[#35a99b]"
            >
              Menu Card

              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* DESKTOP DROPDOWN */}
            <div
              className={`absolute left-1/2 top-full z-50 mt-4 w-[280px] -translate-x-1/2 rounded-xl border border-[#e5e5e5] bg-white p-2 shadow-xl transition-all duration-300 ${
                isServicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-2 opacity-0"
              }`}
            >
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={() => setIsServicesOpen(false)}
                  className="block rounded-lg px-4 py-3 text-[14px] font-medium text-[#171717] transition-all duration-200 hover:translate-x-1 hover:bg-[#f3f3f3]"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ABOUT */}
          <Link
            to="/about"
            className="whitespace-nowrap text-[14px] font-semibold text-[#171717] transition-all duration-300 hover:-translate-y-[2px] hover:text-[#35a99b]"
          >
            Our Adhaar Card
          </Link>

          {/* OUR TEAM */}
          <Link
            to="/ourteam"
            className="whitespace-nowrap text-[14px] font-semibold text-[#171717] transition-all duration-300 hover:-translate-y-[2px] hover:text-[#35a99b]"
          >
            Kitne Aadmi hai
          </Link>

          {/* INSIGHTS */}
          <Link
            to="/insights"
            className="whitespace-nowrap text-[14px] font-semibold text-[#171717] transition-all duration-300 hover:-translate-y-[2px] hover:text-[#35a99b]"
          >
            Insights
          </Link>

          {/* CONTACT */}
          <Link
            to="/contact"
            className="whitespace-nowrap text-[14px] font-semibold text-[#171717] transition-all duration-300 hover:-translate-y-[2px] hover:text-[#35a99b]"
          >
            Hello Friends
          </Link>
        </div>

        {/* ================================
            DESKTOP LET'S TALK
        ================================= */}

        <Link
          to="/contact"
          className="hidden h-[39px] w-[127px] shrink-0 items-center justify-center gap-[7px] rounded-full bg-[#090d0e] text-[14px] font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg lg:flex"
        >
          Let's Talk

          <ArrowRight
            size={14}
            strokeWidth={2}
            className="transition-transform duration-300"
          />
        </Link>

        {/* ================================
            MOBILE MENU BUTTON
        ================================= */}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#090d0e] text-white transition-transform duration-300 hover:scale-105 lg:hidden"
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

      {/* ================================
          MOBILE MENU
      ================================= */}

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

            {/* MOBILE MENU CARD */}
            <button
              type="button"
              onClick={toggleServices}
              className="group relative flex w-full items-center justify-between overflow-hidden border-b border-gray-100 py-4 text-left text-sm font-semibold text-[#171717] transition-all duration-300 hover:text-[#35a99b]"
            >
              <span className="pointer-events-none absolute left-[-40px] top-1/2 h-8 w-20 -translate-y-1/2 rounded-full bg-[#35a99b]/30 opacity-0 blur-xl transition-all duration-500 group-hover:left-[15%] group-hover:opacity-100" />

              <span className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-0 bg-[#35a99b] shadow-[0_0_10px_#35a99b] transition-all duration-500 group-hover:w-full" />

              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                Menu Card
              </span>

              <ChevronDown
                size={17}
                className={`relative z-10 transition-all duration-300 ${
                  isServicesOpen
                    ? "rotate-180 text-[#35a99b]"
                    : "group-hover:rotate-180 group-hover:text-[#35a99b]"
                }`}
              />
            </button>

            {/* MOBILE SERVICES */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isServicesOpen
                  ? "max-h-[600px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-b border-gray-100 py-2">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={closeMenu}
                    className="block rounded-lg px-3 py-3 text-[14px] font-bold text-[#555] transition-colors hover:bg-[#f5f5f5] hover:text-[#35a99b]"
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

            {/* OUR TEAM */}
            <Link
              to="/ourteam"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-semibold text-[#171717] transition-colors hover:text-[#35a99b]"
            >
              Kitne Aadmi hai
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