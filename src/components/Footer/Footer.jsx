// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="w-full rounded-b-[22px] bg-[#080b0c] px-5 py-5 text-white sm:px-8 md:px-10 lg:px-[40px]">
      
//       <div className="flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex items-center gap-[7px]">
//           <div className="flex items-center gap-[1px]">
//             <span className="h-[13px] w-[2px] rotate-[15deg] bg-[#e63946]"></span>
//             <span className="h-[13px] w-[2px] rotate-[15deg] bg-[#35a99b]"></span>
//             <span className="h-[13px] w-[2px] rotate-[15deg] bg-[#d8e641]"></span>
//           </div>

//           <div className="leading-none">
//             <h2 className="text-[18px] font-bold tracking-[-0.6px] text-[#f2f2f2]">Konsole</h2>
//             <span className="ml-[48px] text-[5px] font-medium tracking-[0.2px] text-[#858889]">Group</span>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="hidden items-center gap-[40px] text-[8px] font-medium text-[#d4d5d5] md:flex">
//           <a href="/" className="transition-colors duration-300 hover:text-white">Work</a>
//           <a href="/services" className="transition-colors duration-300 hover:text-white">Services</a>
//           <a href="/about" className="transition-colors duration-300 hover:text-white">About</a>
//           <a href="/insights" className="transition-colors duration-300 hover:text-white">Insights</a>
//           <a href="/contact" className="transition-colors duration-300 hover:text-white">Contact</a>
//         </nav>

//         {/* Social Icons */}
//         <div className="flex items-center gap-[10px] text-[#d4d5d5]">

//           {/* LinkedIn */}
//           <svg viewBox="0 0 24 24" className="h-[9px] w-[9px] fill-current">
//             <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.25 7a2 2 0 0 0 0-4ZM20.44 13.42c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.72 1.85 3.05V20h3.38l.33-6.58Z" />
//           </svg>

//           {/* Instagram */}
//           <svg viewBox="0 0 24 24" className="h-[9px] w-[9px] fill-none stroke-current stroke-[2]">
//             <rect x="3" y="3" width="18" height="18" rx="5" />
//             <circle cx="12" cy="12" r="4" />
//             <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
//           </svg>

//           {/* X */}
//           <span className="text-[9px] font-bold leading-none">X</span>

//           {/* Play */}
//           <svg viewBox="0 0 24 24" className="h-[8px] w-[8px] fill-current">
//             <path d="M8 5v14l11-7L8 5Z" />
//           </svg>

//         </div>
//       </div>

//       {/* Divider */}
//       <div className="mt-[18px] h-px w-full bg-[#45494a]"></div>

//       {/* Bottom */}
//       <div className="flex flex-col items-start justify-between gap-[12px] pt-[16px] text-[7px] text-[#727677] sm:flex-row sm:items-center">

//         <p>© 2025 Konsole Group. All rights reserved.</p>

//         <div className="flex items-center gap-[12px]">
//           <a href="/privacy" className="transition-colors duration-300 hover:text-white">Privacy</a>
//           <a href="/terms" className="transition-colors duration-300 hover:text-white">Terms</a>
//           <a href="mailto:hello@konsolegroup.com" className="transition-colors duration-300 hover:text-white">hello@konsolegroup.com</a>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0b1017] text-gray-300 py-12 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-b border-gray-800/50 pb-12">
        
        {/* Column 1: Brand Info */}
        <div className="lg:col-span-1 space-y-4">
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
              <p className="text-[10px] tracking-widest text-gray-300 font-semibold mt-0.5">
                Group
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-sm">
            Digital Solutions for Growing Businesses
          </p>

          {/* Social Icons (SVG) */}
          <div className="flex items-center gap-3 pt-2">
            {/* LinkedIn */}
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-gray-300 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
            {/* Facebook */}
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-gray-300 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.5 5.6 13.78 5.6c1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-gray-300 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            {/* X / Twitter */}
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-gray-300 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* Youtube */}
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-gray-300 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

 {/* Column 2: Services */}
<div>
  <h3 className="text-lg font-semibold text-white mb-2 relative inline-block">
    Menu Card
    <span className="block h-[2px] w-6 bg-red-500 mt-1"></span>
  </h3>
  <ul className="space-y-2 mt-3 text-sm text-gray-400">
    {[
      { title: 'Meme & Moment Marketing', path: '/services/memeandmomentmarketing' },
      { title: 'Content Creation', path: '/services/contentcreation' },
      { title: 'Video Production', path: '/services/videoproduction' },
      { title: 'Online Reputation Management(ORM)', path: '/services/orm' },
      { title: 'Digital PR & Media Outreach', path: '/services/digitalpr' },
      { title: 'Political Intelligence', path: '/services/politicalintelligence' },
      { title: 'Government Communication Projects', path: '/services/governmentprojects' },
    ].map((service, idx) => (
      <li key={idx}>
        <Link 
          to={service.path} 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hover:text-white transition-colors block"
        >
          {service.title}
        </Link>
      </li>
    ))}
  </ul>
</div>
        {/* Column 3: About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2 relative inline-block">
            Our Adhaar Card
            <span className="block h-[2px] w-6 bg-red-500 mt-1"></span>
          </h3>
          <ul className="space-y-2 mt-3 text-sm text-gray-400">
            {['Our Story', 'Kitne Aadmi hai', 'Careers', 'Why Choose Us', 'Client Testimonials'].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Insights */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2 relative inline-block">
            Insights
            <span className="block h-[2px] w-6 bg-red-500 mt-1"></span>
          </h3>
          <ul className="space-y-2 mt-3 text-sm text-gray-400">
            {['Tips & Guides', 'Case Studies', 'News & Updates'].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2 relative inline-block">
            Hello Friends
            <span className="block h-[2px] w-6 bg-red-500 mt-1"></span>
          </h3>
          <div className="space-y-4 mt-3 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <MapPin className="text-red-500 w-5 h-5 shrink-0 mt-0.5" />
              <span>Office no. CCPR 305, 3rd Floor, Ambuja City Centre Mall, Vidhan Sabha Road, Raipur, Chhattisgarh</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-red-500 w-4 h-4 shrink-0" />
              <a href="tel:+919810523316" className="hover:text-white transition-colors">+91 xxxxxxxxx</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-red-500 w-4 h-4 shrink-0" />
              <a href="mailto:info@rodezweb.com" className="hover:text-white transition-colors">info@konsolegroup.com</a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer Bar */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <div>
          © 2025 Konsole Group. All rights reserved.
        </div>
        {/* <div className="flex flex-wrap gap-4 text-gray-400">
          {['Noida', 'Vadodara', 'Raebareli', 'Lucknow', 'Dehradun'].map((city, idx) => (
            <span key={idx}>
              {city}
            </span>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;