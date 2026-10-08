// import React from "react";
// import { motion } from "motion/react";

// const OurManagement = () => {
//   // Apne management members ke naam, role aur images yahan badal do
//   const managementMembers = [
//     { imgSrc: "/images/team-2.jpg", name: "Name 1", role: "Chief Executive Officer" },
//     { imgSrc: "/images/team-3.jpg", name: "Name 2", role: "Head of Strategy" },
//     { imgSrc: "/images/team-4.jpg", name: "Name 3", role: "Head of Creative" },
//     { imgSrc: "/images/team-5.jpg", name: "Name 4", role: "Head of Operations" },
//   ];

//   /* ================= ANIMATION VARIANTS ================= */

//   const heroTextContainer = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.12 } },
//   };

//   const heroTextItem = {
//     hidden: { opacity: 0, y: 45, filter: "blur(8px)" },
//     visible: {
//       opacity: 1,
//       y: 0,
//       filter: "blur(0px)",
//       transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   const sectionReveal = {
//     hidden: { opacity: 0, y: 45 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   const cardsContainer = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.12 } },
//   };

//   const cardReveal = {
//     hidden: { opacity: 0, y: 50, scale: 0.96 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   return (
//     <div className="min-h-screen overflow-hidden bg-[#faf8f3] font-[Lato,Arial,sans-serif] text-[#080b0e]">

//       {/* ================= HERO SECTION ================= */}

//       <section className="relative w-full overflow-hidden bg-[#080b0d] px-6 py-14 text-white sm:px-10 md:px-14 md:py-20 lg:px-[4.7%]">

//         {/* Background glows */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.7 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#ff4d57]/10 blur-[120px]"
//         />

//         <motion.div
//           initial={{ opacity: 0, scale: 0.6 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
//           className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#22b5e8]/5 blur-[130px]"
//         />

//         <motion.div
//           animate={{ x: [0, 80, 0], y: [0, -40, 0], opacity: [0.12, 0.25, 0.12] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           className="pointer-events-none absolute left-[40%] top-[20%] h-[180px] w-[180px] rounded-full bg-[#ff4d57]/10 blur-[100px]"
//         />

//         <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

//           {/* LEFT CONTENT */}
//           <motion.div
//             variants={heroTextContainer}
//             initial="hidden"
//             animate="visible"
//             className="z-10"
//           >
//             <motion.p
//               variants={heroTextItem}
//               className="mb-2 text-[24px] leading-none tracking-[-0.02em] text-white sm:text-[25px] md:text-[27px]"
//             >
//               Meet Our
//             </motion.p>

//             <motion.h1
//               variants={heroTextItem}
//               className="max-w-[650px] text-[38px] font-bold leading-[0.94] tracking-[-0.055em] text-white min-[400px]:text-[44px] sm:text-[62px] md:text-[72px] lg:text-[76px]"
//             >
//               <motion.span
//                 initial={{ color: "#ff4d57" }}
//                 animate={{ color: ["#ff4d57", "#ff6871", "#ff4d57"] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               >
//                 Management
//               </motion.span>
//             </motion.h1>

//             <motion.div
//               initial={{ width: 0, opacity: 0 }}
//               animate={{ width: 118, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
//               className="mt-5 h-[5px] rounded-full bg-[#ff4d57]"
//             />

//             <motion.p
//               variants={heroTextItem}
//               className="mt-5 max-w-[680px] text-[15px] font-normal leading-[1.75] text-[#c5ccd1] sm:text-[16px] md:text-[17px]"
//             >
//               The leaders behind Konsole Group. They set the vision, guide
//               the strategy and make sure every campaign delivers real impact
//               for our clients.
//             </motion.p>
//           </motion.div>

//           {/* RIGHT HERO IMAGE */}
//           {/* <motion.div
//             initial={{ opacity: 0, x: 60, scale: 0.94 }}
//             animate={{ opacity: 1, x: 0, scale: 1 }}
//             transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//             whileHover={{ y: -6, scale: 1.015 }}
//             className="group relative h-[300px] w-full overflow-hidden rounded-[28px] border border-[#273035] bg-[#151a1d] shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:h-[360px] md:h-[420px]"
//           >
//             <motion.img
//               src="/images/aboutimg.jpg"
//               alt="Our Management"
//               initial={{ scale: 1.12 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 1.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
//               className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
//             />

//             <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b0d]/65 via-transparent to-transparent" />

//             <motion.div
//               animate={{ opacity: [0.1, 0.22, 0.1] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="pointer-events-none absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#22b5e8]/20 blur-[70px]"
//             />

//             <motion.div
//               initial={{ x: "-150%" }}
//               animate={{ x: "150%" }}
//               transition={{ duration: 1.4, delay: 0.7, ease: "easeInOut" }}
//               className="pointer-events-none absolute inset-y-0 left-0 w-[35%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent"
//             />

//             <motion.div
//               animate={{ opacity: [0.15, 0.4, 0.15] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               className="pointer-events-none absolute inset-0 rounded-[28px] border border-[#ff4d57]/30"
//             />
//           </motion.div> */}
//         </div>
//       </section>

//       {/* ================= LEADERSHIP SECTION ================= */}

//       <section className="mx-auto max-w-[1500px] px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-[4.3%] lg:py-20">

//         {/* SECTION HEADING */}
//         <div className="mb-8 md:mb-10 lg:mb-12">
//           <motion.p
//             initial={{ opacity: 0, x: -35, letterSpacing: "0.18em" }}
//             whileInView={{ opacity: 1, x: 0, letterSpacing: "-0.02em" }}
//             viewport={{ once: false, amount: 0.3 }}
//             transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//             className="mb-1 text-[24px] leading-tight tracking-[-0.02em] text-[#080b0d] sm:text-[25px] md:text-[27px]"
//           >
//             Leadership Team
//           </motion.p>

//           <motion.h2
//             variants={sectionReveal}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.3 }}
//             className="max-w-[650px] text-[36px] font-bold leading-[0.96] tracking-[-0.05em] text-[#080b0d] min-[400px]:text-[42px] sm:text-[56px] md:text-[62px] lg:text-[66px]"
//           >
//             Leaders who turn ideas into influence.
//           </motion.h2>

//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: 118 }}
//             viewport={{ once: false, amount: 0.3 }}
//             transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//             className="mt-5 h-[5px] rounded-full bg-[#ff4d57]"
//           />
//         </div>

//         {/* MANAGEMENT GRID */}
//         <motion.div
//           variants={cardsContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.12 }}
//           className="grid grid-cols-1 gap-5 lg:grid-cols-12"
//         >

//           {/* BIG FEATURED BOX */}
//           {/* <motion.div
//             variants={cardReveal}
//             whileHover={{ y: -7, transition: { duration: 0.35, ease: "easeOut" } }}
//             className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[28px] border border-[#d8d9d7] bg-[#eeece6] shadow-[0_8px_30px_rgba(8,11,14,0.06)] lg:col-span-7 lg:min-h-[500px]"
//           >
//             <motion.img
//               src="/images/team-1.jpg"
//               alt="Founding Leadership"
//               className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
//               whileHover={{ scale: 1.06 }}
//               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             />

//             <motion.div
//               className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"
//               initial={{ opacity: 0.78 }}
//               whileHover={{ opacity: 1 }}
//               transition={{ duration: 0.4 }}
//             />

//             <motion.div
//               animate={{ x: ["-100%", "100%"] }}
//               transition={{ duration: 6, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
//               className="pointer-events-none absolute inset-y-0 w-[30%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
//             />

//             <div className="pointer-events-none absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#ff4d57]/10 blur-[70px]" />

//             <motion.div
//               initial={{ y: 20, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               viewport={{ once: false }}
//               transition={{ duration: 0.7, delay: 0.25 }}
//               className="relative z-10 border-t border-white/10 bg-[#080b0d]/90 px-6 py-5 backdrop-blur-sm"
//             >
//               <h3 className="text-[21px] font-bold leading-tight tracking-[-0.025em] text-white md:text-[24px]">
//                 Founding Leadership
//               </h3>
//               <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#ffd21c]">
//                 Strategic Direction & Growth
//               </p>
//             </motion.div>
//           </motion.div> */}

//           {/* 4 MANAGEMENT CARDS */}
//           <motion.div
//             variants={cardsContainer}
//             className="grid grid-cols-2 gap-5 lg:col-span-5"
//           >
//             {managementMembers.map((member, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardReveal}
//                 whileHover={{
//                   y: -7,
//                   scale: 1.025,
//                   transition: { duration: 0.35, ease: "easeOut" },
//                 }}
//                 className="group relative flex min-h-[200px] flex-col justify-end overflow-hidden rounded-[22px] border border-[#d8d9d7] bg-[#eeece6] shadow-[0_8px_25px_rgba(8,11,14,0.05)] lg:min-h-[240px]"
//               >
//                 <motion.img
//                   src={member.imgSrc}
//                   alt={member.name}
//                   className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
//                   whileHover={{ scale: 1.08 }}
//                   transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                 />

//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b0d]/80 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileHover={{ opacity: 1 }}
//                   transition={{ duration: 0.4 }}
//                   className="pointer-events-none absolute -right-10 -top-10 h-[120px] w-[120px] rounded-full bg-[#22b5e8]/20 blur-[45px]"
//                 />

//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileHover={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                   className="pointer-events-none absolute inset-0 rounded-[22px] border border-[#22b5e8]/70"
//                 />

//                 {/* Name + Role */}
//                 <div className="relative z-10 px-4 pb-4">
//                   <h3 className="text-[15px] font-bold leading-tight text-white sm:text-[16px]">
//                     {member.name}
//                   </h3>
//                   <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.06em] text-[#ffd21c] sm:text-[11px]">
//                     {member.role}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* ================= BOTTOM ACCENT ================= */}

//       <div className="flex w-full items-center gap-3 bg-[#080b0d] px-6 py-4 sm:px-10 lg:px-[4.3%]">
//         <div className="h-[5px] w-[55px] rounded-full bg-[#ff4d57]" />
//         <div className="h-[5px] w-[35px] rounded-full bg-[#22b5e8]" />
//         <div className="h-[5px] w-[25px] rounded-full bg-[#ffd21c]" />
//       </div>
//     </div>
//   );
// };

// export default OurManagement;



//New code

// import React from "react";

// /* Typography (VideoProduction / ORM wali same styling) */
// const h2Style = "font-bold leading-[1.02] tracking-[-0.045em]";
// const bodyStyle = "font-normal leading-[1.5] tracking-[-0.01em]";
// const btnText = "text-[15px] font-semibold";

// const LinkedInIcon = () => (
//   <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
//     <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
//   </svg>
// );

// /* ---------- Data (yahan apne asli naam, photo aur LinkedIn link daalo) ---------- */
// const team = [
//   {
//     name: "Harpreet Dhody",
//     role: "Group CEO",
//     img: "/images/boss1.png",
//     linkedin: "https://www.linkedin.com/in/harpreetdhody?",
//   },
//   {
//     name: "Suyash Chandel",
//     role: "Director",
//     img: "/images/boss2.png",
//     linkedin: "https://www.linkedin.com/in/suyash-chandel-20218616?",
//   },
//   {
//     name: "Zama Khan",
//     role: "Director",
//     img: "/images/boss3.png",
//     linkedin: "https://www.linkedin.com/in/zamauddinkhan?",
//   },
//   {
//     name: "Amandeep Singh Bhatia",
//     role: "Director",
//     img: "/images/boss4.png",
//     linkedin: "https://www.linkedin.com/in/amandeep14?",
//   },
// ];

// const OurManagement = () => {
//   return (
//     <section className="bg-[#FAF9F6] px-4 py-16 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl text-center">
//         {/* Section header */}
//         <h2
//           className={`${h2Style} text-[30px] text-gray-900 sm:text-[38px] md:text-[42px]`}
//         >
//           Our Leadership Team
//         </h2>
//         <p
//           className={`${bodyStyle} mx-auto mt-4 max-w-2xl text-[17px] text-gray-500 sm:text-[18px] md:text-[19px]`}
//         >
//           Meet the minds driving our vision and strategy forward.
//         </p>

//         {/* Grid */}
//         <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {team.map((m) => (
//             <div
//               key={m.name}
//               className="flex flex-col items-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
//             >
//               <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-indigo-50 shadow-inner">
//                 <img
//                   className="h-full w-full object-cover object-center"
//                   src={m.img}
//                   alt={m.name}
//                 />
//               </div>

//               <h3 className="text-[20px] font-bold leading-[1.1] tracking-[-0.03em] text-gray-900">
//                 {m.name}
//               </h3>
//               <p
//                 className={`${bodyStyle} mb-4 mt-1 text-[15px] font-medium text-indigo-600`}
//               >
//                 {m.role}
//               </p>

//               <a
//                 href={m.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`${btnText} mt-auto inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700`}
//               >
//                 <LinkedInIcon />
//                 LinkedIn Profile
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default OurManagement;



import React, { useEffect, useRef, useState } from "react";

/* Typography (VideoProduction / ORM wali same styling) */
const h2Style = "font-bold leading-[1.02] tracking-[-0.045em]";
const bodyStyle = "font-normal leading-[1.5] tracking-[-0.01em]";
const btnText = "text-[15px] font-semibold";

const LinkedInIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

/* ---------- Data (yahan apne asli naam, photo aur LinkedIn link daalo) ---------- */
const team = [
  {
    name: "Harpreet Dhody",
    role: "Group CEO",
    img: "/images/boss1.png",
    linkedin: "https://www.linkedin.com/in/harpreetdhody?",
  },
  {
    name: "Suyash Chandel",
    role: "Director",
    img: "/images/boss2.png",
    linkedin: "https://www.linkedin.com/in/suyash-chandel-20218616?",
  },
  {
    name: "Zama Khan",
    role: "Director",
    img: "/images/boss3.png",
    linkedin: "https://www.linkedin.com/in/zamauddinkhan?",
  },
  {
    name: "Amandeep Singh Bhatia",
    role: "Director",
    img: "/images/boss4.png",
    linkedin: "https://www.linkedin.com/in/amandeep14?",
  },
];

const OurManagement = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAF9F6] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl text-center">
        {/* Section header */}
        <h2
          className={`${h2Style} text-[30px] text-gray-900 sm:text-[38px] md:text-[42px] ${visible ? "animate-[fadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.1s_forwards]" : "translate-y-12 opacity-0"}`}
        >
          Our Leadership Team
        </h2>
        <p
          className={`${bodyStyle} mx-auto mt-4 max-w-2xl text-[17px] text-gray-500 sm:text-[18px] md:text-[19px] ${visible ? "animate-[fadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.25s_forwards]" : "translate-y-12 opacity-0"}`}
        >
          Meet the minds driving our vision and strategy forward.
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, index) => (
            <div
              key={m.name}
              className={`${visible ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards]" : "translate-y-12 opacity-0"}`}
              style={{ animationDelay: `${0.4 + index * 0.15}s` }}
            >
            <div className="flex h-full flex-col items-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-xl">
              <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-indigo-50 shadow-inner">
                <img
                  className="h-full w-full object-cover object-center"
                  src={m.img}
                  alt={m.name}
                />
              </div>

              <h3 className="text-[20px] font-bold leading-[1.1] tracking-[-0.03em] text-gray-900">
                {m.name}
              </h3>
              <p
                className={`${bodyStyle} mb-4 mt-1 text-[15px] font-medium text-indigo-600`}
              >
                {m.role}
              </p>

              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnText} mt-auto inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700`}
              >
                <LinkedInIcon />
                LinkedIn Profile
              </a>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurManagement;