import React from "react";

const Footer = () => {
  return (
    <footer className="w-full rounded-b-[22px] bg-[#080b0c] px-5 py-5 text-white sm:px-8 md:px-10 lg:px-[40px]">
      
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-[7px]">
          <div className="flex items-center gap-[1px]">
            <span className="h-[13px] w-[2px] rotate-[15deg] bg-[#e63946]"></span>
            <span className="h-[13px] w-[2px] rotate-[15deg] bg-[#35a99b]"></span>
            <span className="h-[13px] w-[2px] rotate-[15deg] bg-[#d8e641]"></span>
          </div>

          <div className="leading-none">
            <h2 className="text-[18px] font-bold tracking-[-0.6px] text-[#f2f2f2]">Konsole</h2>
            <span className="ml-[48px] text-[5px] font-medium tracking-[0.2px] text-[#858889]">Group</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-[40px] text-[8px] font-medium text-[#d4d5d5] md:flex">
          <a href="/" className="transition-colors duration-300 hover:text-white">Work</a>
          <a href="/services" className="transition-colors duration-300 hover:text-white">Services</a>
          <a href="/about" className="transition-colors duration-300 hover:text-white">About</a>
          <a href="/insights" className="transition-colors duration-300 hover:text-white">Insights</a>
          <a href="/contact" className="transition-colors duration-300 hover:text-white">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-[10px] text-[#d4d5d5]">

          {/* LinkedIn */}
          <svg viewBox="0 0 24 24" className="h-[9px] w-[9px] fill-current">
            <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.25 7a2 2 0 0 0 0-4ZM20.44 13.42c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.72 1.85 3.05V20h3.38l.33-6.58Z" />
          </svg>

          {/* Instagram */}
          <svg viewBox="0 0 24 24" className="h-[9px] w-[9px] fill-none stroke-current stroke-[2]">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
          </svg>

          {/* X */}
          <span className="text-[9px] font-bold leading-none">X</span>

          {/* Play */}
          <svg viewBox="0 0 24 24" className="h-[8px] w-[8px] fill-current">
            <path d="M8 5v14l11-7L8 5Z" />
          </svg>

        </div>
      </div>

      {/* Divider */}
      <div className="mt-[18px] h-px w-full bg-[#45494a]"></div>

      {/* Bottom */}
      <div className="flex flex-col items-start justify-between gap-[12px] pt-[16px] text-[7px] text-[#727677] sm:flex-row sm:items-center">

        <p>© 2025 Konsole Group. All rights reserved.</p>

        <div className="flex items-center gap-[12px]">
          <a href="/privacy" className="transition-colors duration-300 hover:text-white">Privacy</a>
          <a href="/terms" className="transition-colors duration-300 hover:text-white">Terms</a>
          <a href="mailto:hello@konsolegroup.com" className="transition-colors duration-300 hover:text-white">hello@konsolegroup.com</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;