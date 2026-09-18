import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative z-50 w-full rounded-b-[24px] bg-white shadow-sm">

      {/* ================= DESKTOP / MAIN NAVBAR ================= */}
      <div className="flex h-[71px] w-full items-center justify-between px-5 sm:px-8 md:px-10 lg:px-[58px]">

        {/* Logo */}
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

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex xl:gap-[48px]">

          <Link
            to="/"
className="relative text-[14px] font-semibold text-[#171717] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:text-[#35a99b]"          >
            Home
          </Link>

          <Link
            to="/services"
            className="text-[14px] font-semibold text-[#171717] transition-opacity duration-300 hover:opacity-60"
          >
            Services
          </Link>

          <Link
            to="/about"
            className="text-[14px] font-semibold text-[#171717] transition-opacity duration-300 hover:opacity-60"
          >
            about
          </Link>

          <Link
            to="/insights"
            className="text-[14px] font-semibold text-[#171717] transition-opacity duration-300 hover:opacity-60"
          >
            insights
          </Link>

          <Link
            to="/contact"
            className="text-[14px] font-semibold text-[#171717] transition-opacity duration-300 hover:opacity-60"
          >
            Contact
          </Link>

        </div>

        {/* Desktop Let's Talk */}
        <Link
          to="/contact"
          className="hidden h-[39px] w-[127px] items-center justify-center gap-[7px] rounded-full bg-[#090d0e] text-[14px] font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg lg:flex"
        >
          Let's Talk

          <ArrowRight
            size={14}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
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

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 px-5 pb-6 pt-4 sm:px-8">

          <div className="flex flex-col">

            <Link
              to="/"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-semibold text-[#171717] transition-colors hover:text-gray-500"
            >
              Work
            </Link>

            <Link
              to="/services"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-semibold text-[#171717] transition-colors hover:text-gray-500"
            >
              Services
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-semibold text-[#171717] transition-colors hover:text-gray-500"
            >
              About
            </Link>

            <Link
              to="/insights"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-semibold text-[#171717] transition-colors hover:text-gray-500"
            >
              Insights
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-semibold text-[#171717] transition-colors hover:text-gray-500"
            >
              Contact
            </Link>

            {/* Mobile Let's Talk */}
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
