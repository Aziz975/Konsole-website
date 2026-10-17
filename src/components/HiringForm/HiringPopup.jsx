
// import React, {
//   createContext,
//   useCallback,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// import { ArrowUpRight, X } from "lucide-react";

// /* ---------- Settings ---------- */
// // Applications will be sent to this email address.
// const HR_EMAIL = "hr@yourcompany.com";

// // Edit this list to match your open roles
// const positions = [
//   "Video Editor",
//   "Graphic Designer",
//   "Meme Creator",
//   "Content Creator",
//   "Influencer Marketing Specialist",
//   "Brand Partnership Specialist",
//   "Performance Marketing Specialist",
//   "Political Strategist",
//   "Campaign Manager",
//   "YouTube Specialist",
//   "Camera Person/Videographer",
// ];

// // Builds the subject and body for each role
// const buildMail = (position) => {
//   const subject = `Application for ${position}`;
//   const body = [
//     "Hi Team,",
//     "",
//     `I would like to apply for the ${position} position.`,
//     "",
//     "Name:",
//     "Phone:",
//     "Current city:",
//     "Experience:",
//     "LinkedIn / Portfolio link:",
//     "",
//     "I have attached my resume.",
//     "",
//     "Thanks,",
//   ].join("\n");

//   const s = encodeURIComponent(subject);
//   const b = encodeURIComponent(body);

//   return {
//     // Opens Gmail in the browser (works without any default mail app)
//     gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
//       HR_EMAIL
//     )}&su=${s}&body=${b}`,
//     // Opens the device's default mail app
//     mailto: `mailto:${HR_EMAIL}?subject=${s}&body=${b}`,
//   };
// };

// /* ---------- Context so any button can open the popup ---------- */
// const HiringPopupContext = createContext({
//   openHiring: () => {},
//   closeHiring: () => {},
// });

// export const useHiringPopup = () => useContext(HiringPopupContext);

// /* ---------- The modal itself ---------- */
// function HiringModal({ onClose }) {
//   // Phones use the default mail app (mailto), desktop uses Gmail in the browser
//   const isMobile =
//     typeof navigator !== "undefined" &&
//     /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

//   // Close on Esc, lock page scroll while open
//   useEffect(() => {
//     const onKey = (e) => e.key === "Escape" && onClose();
//     document.addEventListener("keydown", onKey);

//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.removeEventListener("keydown", onKey);
//       document.body.style.overflow = previousOverflow;
//     };
//   }, [onClose]);

//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#071313]/70 p-4 backdrop-blur-sm sm:items-center"
//       onMouseDown={(e) => e.target === e.currentTarget && onClose()}
//     >
//       <div
//         role="dialog"
//         aria-modal="true"
//         aria-labelledby="hiring-popup-title"
//         className="relative mt-20 w-full max-w-[520px] animate-[fadeUp_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] rounded-3xl bg-[#faf9f6] p-5 text-[#080b0b] shadow-2xl sm:p-7"
//       >
//         <button
//           type="button"
//           onClick={onClose}
//           aria-label="Close"
//           className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[#080b0b]/60 transition-colors hover:bg-[#080b0b] hover:text-white"
//         >
//           <X className="h-5 w-5" />
//         </button>

//         <div
//           className="mb-1 text-[26px] leading-none"
//           style={{ fontFamily: "'Caveat', cursive" }}
//         >
//           We Are Hiring
//         </div>
//         <h2
//           id="hiring-popup-title"
//           className="pr-10 text-[24px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[28px]"
//         >
//           Open positions
//         </h2>
//         <p className="mt-2 text-[14px] leading-[1.5] text-[#080b0b]/60">
//           Click Apply Now on a role and send us your resume by email.
//         </p>

//         <ul className="mt-5 max-h-[55vh] space-y-2.5 overflow-y-auto pr-1">
//           {positions.map((position) => (
//             <li
//               key={position}
//               className="flex items-center justify-between gap-3 rounded-xl border border-[#d7d7d4] bg-white px-4 py-3 transition hover:border-[#080b0b]"
//             >
//               <span className="min-w-0 text-[15px] font-semibold leading-[1.3] tracking-[-0.01em]">
//                 {position}
//               </span>

//               <a
//                 href={isMobile ? buildMail(position).mailto : buildMail(position).gmail}
//                 target={isMobile ? undefined : "_blank"}
//                 rel="noopener noreferrer"
//                 className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#111a1f] px-4 py-2 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#08766d]"
//               >
//                 Apply Now
//                 <ArrowUpRight size={15} strokeWidth={2} />
//               </a>
//             </li>
//           ))}
//         </ul>

//         <p className="mt-5 text-[13px] text-[#080b0b]/55">
//           Don't see your role? Email us at{" "}
//           <a
//             href={`mailto:${HR_EMAIL}`}
//             className="font-semibold text-[#080b0b] underline underline-offset-2"
//           >
//             {HR_EMAIL}
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// /* ---------- Provider: wrap your app with this ---------- */
// export function HiringPopupProvider({ children }) {
//   const [open, setOpen] = useState(false);

//   const openHiring = useCallback(() => setOpen(true), []);
//   const closeHiring = useCallback(() => setOpen(false), []);

//   return (
//     <HiringPopupContext.Provider value={{ openHiring, closeHiring }}>
//       {children}
//       {open && <HiringModal onClose={closeHiring} />}
//     </HiringPopupContext.Provider>
//   );
// }



import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ArrowUpRight, X } from "lucide-react";

/* ---------- Settings ---------- */
// Applications will be sent to this email address.
const HR_EMAIL = "hr"; // <-- yahan HR ki asli email daalo

// Edit this list to match your open roles
const positions = [
  "Video Editor",
  "Graphic Designer",
  "Meme Creator",
  "Content Creator",
  "Influencer Marketing Specialist",
  "Brand Partnership Specialist",
  "Performance Marketing Specialist",
  "Political Strategist",
  "Campaign Manager",
  "YouTube Specialist",
  "Camera Person/Videographer",
];

// Builds the subject and body for each role
const buildMail = (position) => {
  const subject = `Application for ${position}`;
  const body = [
    "Hi Team,",
    "",
    `I would like to apply for the ${position} position.`,
    "",
    "Name:",
    "Phone:",
    "Current city:",
    "Experience:",
    "LinkedIn / Portfolio link:",
    "",
    "I have attached my resume.",
    "",
    "Thanks,",
  ].join("\n");

  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);

  return {
    // Opens Gmail in the browser (works without any default mail app)
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      HR_EMAIL
    )}&su=${s}&body=${b}`,
    // Opens the device's default mail app
    mailto: `mailto:${HR_EMAIL}?subject=${s}&body=${b}`,
  };
};

/* ---------- Shared list: used in the popup AND on the Hiring page ---------- */
export function OpenPositionsList({ className = "" }) {
  // Phones use the default mail app (mailto), desktop uses Gmail in the browser
  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  return (
    <ul className={`space-y-2.5 ${className}`}>
      {positions.map((position) => (
        <li
          key={position}
          className="flex items-center justify-between gap-3 rounded-xl border border-[#d7d7d4] bg-white px-4 py-3 transition hover:border-[#080b0b]"
        >
          <span className="min-w-0 text-[15px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#080b0b]">
            {position}
          </span>

          <a
            href={isMobile ? buildMail(position).mailto : buildMail(position).gmail}
            target={isMobile ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#111a1f] px-4 py-2 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#08766d]"
          >
            Apply Now
            <ArrowUpRight size={15} strokeWidth={2} />
          </a>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Context so any button can open the popup ---------- */
const HiringPopupContext = createContext({
  openHiring: () => {},
  closeHiring: () => {},
});

export const useHiringPopup = () => useContext(HiringPopupContext);

/* ---------- The modal itself ---------- */
function HiringModal({ onClose }) {
  // Close on Esc, lock page scroll while open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#071313]/70 p-4 backdrop-blur-sm sm:items-center"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="hiring-popup-title"
        className="relative mt-20 w-full max-w-[520px] animate-[fadeUp_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] rounded-3xl bg-[#faf9f6] p-5 text-[#080b0b] shadow-2xl sm:p-7"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[#080b0b]/60 transition-colors hover:bg-[#080b0b] hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div
          className="mb-1 text-[26px] leading-none"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          We Are Hiring
        </div>
        <h2
          id="hiring-popup-title"
          className="pr-10 text-[24px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[28px]"
        >
          Open positions
        </h2>
        <p className="mt-2 text-[14px] leading-[1.5] text-[#080b0b]/60">
          Click Apply Now on a role and send us your resume by email.
        </p>

        <OpenPositionsList className="mt-5 max-h-[55vh] overflow-y-auto pr-1" />

        <p className="mt-5 text-[13px] text-[#080b0b]/55">
          Don't see your role? Email us at{" "}
          <a
            href={`mailto:${HR_EMAIL}`}
            className="font-semibold text-[#080b0b] underline underline-offset-2"
          >
            {HR_EMAIL}
          </a>
        </p>
      </div>
    </div>
  );
}

/* ---------- Provider: wrap your app with this ---------- */
export function HiringPopupProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openHiring = useCallback(() => setOpen(true), []);
  const closeHiring = useCallback(() => setOpen(false), []);

  return (
    <HiringPopupContext.Provider value={{ openHiring, closeHiring }}>
      {children}
      {open && <HiringModal onClose={closeHiring} />}
    </HiringPopupContext.Provider>
  );
}