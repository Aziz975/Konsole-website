
// import React from "react";
// import {
//   motion,
//   MotionConfig,
//   useMotionTemplate,
//   useMotionValue,
// } from "motion/react";

// const EASE = [0.22, 1, 0.36, 1];

// const COLORS = {
//   dark: "#080b0d",
//   card: "#0f1417",
//   border: "#273035",
//   muted: "#c5ccd1",
//   yellow: "#ffd21c",
//   coral: "#ff6b6b",
// };

// const btnText = "text-[15px] font-semibold";

// const LinkedInIcon = () => (
//   <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
//     <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
//   </svg>
// );

// const ArrowIcon = () => (
//   <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//     <path d="M5 12h14M13 6l6 6-6 6" />
//   </svg>
// );

// const team = [
//   {
//     name: "Harpreet Dhody",
//     role: "Group CEO",
//     img: "/images/boss1.png",
//     linkedin: "https://www.linkedin.com/in/harpreetdhody/",
//     accent: "#ff6b6b",
//     glow: "rgba(255,107,107,0.38)",
//   },
//   {
//     name: "Suyash Chandel",
//     role: "Director",
//     img: "/images/boss2.png",
//     linkedin: "https://www.linkedin.com/in/suyash-chandel-20218616/",
//     accent: "#ffd21c",
//     glow: "rgba(255,210,28,0.34)",
//   },
//   {
//     name: "Zama Khan",
//     role: "Director",
//     img: "/images/boss3.png",
//     linkedin: "https://www.linkedin.com/in/zamauddinkhan/",
//     accent: "#4a6bff",
//     glow: "rgba(74,107,255,0.42)",
//   },
//   {
//     name: "Amandeep Singh Bhatia",
//     role: "Director",
//     img: "/images/boss4.png",
//     linkedin: "https://www.linkedin.com/in/amandeep14/",
//     accent: "#2fbf71",
//     glow: "rgba(47,191,113,0.38)",
//   },
//    {
//     name: "Pushpendra Singh",
//     role: "Director",
//     img: "/images/boss5.png",
//     linkedin: "https://www.linkedin.com/in/pushpendrasingh27/",
//     accent: "#4a6bff",
//     glow: "rgba(74,107,255,0.42)",
//   },
// ];


// const TeamCard = ({ member, index }) => {
//   const mouseX = useMotionValue(-300);
//   const mouseY = useMotionValue(-300);

//   const spotlight = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, ${member.glow}, transparent 70%)`;

//   const handleMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     mouseX.set(e.clientX - rect.left);
//     mouseY.set(e.clientY - rect.top);
//   };

//   const handleLeave = () => {
//     mouseX.set(-300);
//     mouseY.set(-300);
//   };

//   const card = {
//     hidden: { opacity: 0, y: 45, scale: 0.96 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       boxShadow: `0 10px 30px rgba(0,0,0,0.35), 0 0 0 1px ${COLORS.border}`,
//       transition: { duration: 0.85, ease: EASE },
//     },
//     hover: {
//       y: -8,
//       scale: 1.015,
//       boxShadow: `0 0 0 1.5px ${member.accent}, 0 28px 70px ${member.glow}`,
//       transition: { type: "spring", stiffness: 260, damping: 20 },
//     },
//   };

//   const image = {
//     hidden: { scale: 1.15 },
//     visible: { scale: 1, transition: { duration: 1.2, ease: EASE } },
//     hover: { scale: 1.06, transition: { duration: 0.8, ease: EASE } },
//   };

//   const shine = {
//     hidden: { x: "-160%" },
//     visible: { x: "-160%", transition: { duration: 0 } },
//     hover: { x: "160%", transition: { duration: 0.9, ease: "easeInOut" } },
//   };

//   const arrow = {
//     hidden: { x: 0 },
//     visible: { x: 0 },
//     hover: { x: 4 },
//   };

//   return (
//     <motion.article
//       variants={card}
//       whileHover="hover"
//       onMouseMove={handleMove}
//       onMouseLeave={handleLeave}
//       className="group relative flex h-full flex-col overflow-hidden rounded-[24px] bg-[#0f1417] will-change-transform"
//     >
//       <motion.div
//         aria-hidden="true"
//         style={{ background: spotlight }}
//         className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//       />

//       <div
//         className="relative h-[300px] w-full overflow-hidden sm:h-[320px]"
//         style={{
//           background: `radial-gradient(circle at 50% 85%, ${member.glow}, transparent 70%), #151a1d`,
//         }}
//       >
//         <motion.img
//           variants={image}
//           src={member.img}
//           alt={member.name}
//           loading="lazy"
//           className="h-full w-full object-cover object-top"
//         />

//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1417] via-transparent to-transparent" />

//         <motion.div
//           aria-hidden="true"
//           animate={{ opacity: [0.15, 0.4, 0.15], scale: [1, 1.2, 1] }}
//           transition={{
//             duration: 4.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: index * 0.7,
//           }}
//           style={{ background: member.glow }}
//           className="pointer-events-none absolute -right-14 -top-14 h-[160px] w-[160px] rounded-full blur-[60px]"
//         />

//         <motion.div
//           aria-hidden="true"
//           variants={shine}
//           className="pointer-events-none absolute inset-y-0 left-0 w-[40%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
//         />
//       </div>

//       <div className="relative z-10 flex flex-1 flex-col px-5 pb-5 pt-3 sm:px-6">
//         <div className="flex items-center gap-3">
//           <span
//             className="h-5 w-[4px] -skew-x-[18deg] rounded-full"
//             style={{ background: member.accent }}
//           />
//           <p
//             className="text-[15px] font-semibold tracking-[-0.01em]"
//             style={{ color: member.accent }}
//           >
//             {member.role}
//           </p>
//         </div>

//         <h3 className="mt-3 text-[24px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[26px]">
//           {member.name}
//         </h3>

//         <a
//           href={member.linkedin}
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label={`${member.name} on LinkedIn`}
//           className={`${btnText} mt-5 inline-flex w-fit items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-[#080b0d] transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(255,255,255,0.35)]`}
//         >
//           <LinkedInIcon />
//           LinkedIn Profile
//           <motion.span variants={arrow} className="inline-flex">
//             <ArrowIcon />
//           </motion.span>
//         </a>
//       </div>
//     </motion.article>
//   );
// };

// const OurManagement = () => {
//   const gridContainer = {
//     hidden: {},
//     visible: {
//       transition: { staggerChildren: 0.14, delayChildren: 0.05 },
//     },
//   };

//   const fadeUp = (delay = 0) => ({
//     initial: { opacity: 0, y: 20, filter: "blur(5px)" },
//     whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
//     viewport: { once: true, amount: 0.4 },
//     transition: { duration: 0.7, delay, ease: EASE },
//   });

//   const barsContainer = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.18 } },
//   };

//   const bar = {
//     hidden: { scaleX: 0, opacity: 0 },
//     visible: {
//       scaleX: 1,
//       opacity: 1,
//       transition: { duration: 0.7, ease: EASE },
//     },
//   };

//   return (
//     <MotionConfig reducedMotion="user">
//       <section
//         className="relative w-full overflow-hidden px-6 py-10 text-white sm:px-10 sm:py-12 md:px-14 md:py-14 lg:px-[4.7%]"
//         style={{ background: COLORS.dark }}
//       >
//         {/* Background glows */}
//         <motion.div
//           aria-hidden="true"
//           initial={{ opacity: 0, scale: 0.7 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.6, ease: "easeOut" }}
//           className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#ff4d57]/10 blur-[120px]"
//         />

//         <motion.div
//           aria-hidden="true"
//           initial={{ opacity: 0, scale: 0.6 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
//           className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#22b5e8]/10 blur-[130px]"
//         />

//         <motion.div
//           aria-hidden="true"
//           animate={{
//             x: [0, 90, 0],
//             y: [0, -50, 0],
//             opacity: [0.1, 0.24, 0.1],
//           }}
//           transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
//           className="pointer-events-none absolute left-[38%] top-[30%] h-[200px] w-[200px] rounded-full bg-[#ffd21c]/10 blur-[110px]"
//         />

//         <div className="relative z-10 mx-auto max-w-[1500px]">
//           {/* Header: all text aligned left, with compact spacing */}
//           <div className="flex flex-col items-start gap-3">
//             <motion.p
//               {...fadeUp(0)}
//               className="text-left text-[22px] font-medium leading-tight tracking-[-0.02em] sm:text-[25px]"
//               style={{ color: COLORS.yellow }}
//             >
//               Our Leadership Team
//             </motion.p>

           

//             <div className="mt-1 text-left">
//               <h2
//                 className="max-w-[780px] text-left text-[40px] font-bold leading-[0.98] tracking-[-0.05em] sm:text-[54px] md:text-[64px] lg:text-[42px]"
//                 aria-label="Meet the minds driving our vision forward."
//               >
//                 <span className="block">Meet the minds</span>
//                 <span className="block" style={{ color: COLORS.yellow }}>
//                   driving our vision
//                 </span>
//                 <span className="block" style={{ color: COLORS.coral }}>
//                   forward.
//                 </span>
//               </h2>

//               <motion.div
//                 initial={{ scaleX: 0, opacity: 0 }}
//                 whileInView={{ scaleX: 1, opacity: 1 }}
//                 viewport={{ once: true, amount: 1 }}
//                 transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
//                 className="mt-3 h-[5px] w-[90px] origin-left rounded-full bg-[#ff4d57]"
//               />
//             </div>
//           </div>

//           {/* Team grid: no large desktop top margin */}
//           <motion.div
//             variants={gridContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.1 }}
//             className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
//           >
//             {team.map((member, index) => (
//               <TeamCard key={member.name} member={member} index={index} />
//             ))}
//           </motion.div>

//           {/* Bottom accent */}
//           <motion.div
//             variants={barsContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             className="relative z-10 mx-auto mt-8 flex max-w-[1500px] items-center gap-3"
//           >
//             <motion.div
//               variants={bar}
//               className="h-[5px] w-[55px] origin-left rounded-full bg-[#ff4d57]"
//             />
//             <motion.div
//               variants={bar}
//               className="h-[5px] w-[35px] origin-left rounded-full bg-[#22b5e8]"
//             />
//             <motion.div
//               variants={bar}
//               className="h-[5px] w-[25px] origin-left rounded-full bg-[#ffd21c]"
//             />
//           </motion.div>
//         </div>
//       </section>
//     </MotionConfig>
//   );
// };

// export default OurManagement;




// import React from "react";
// import {
//   motion,
//   MotionConfig,
//   useMotionTemplate,
//   useMotionValue,
// } from "motion/react";

// const EASE = [0.22, 1, 0.36, 1];

// const COLORS = {
//   dark: "#080b0d",
//   card: "#0f1417",
//   border: "#273035",
//   muted: "#c5ccd1",
//   yellow: "#ffd21c",
//   coral: "#ff6b6b",
// };

// const btnText = "text-[15px] font-semibold";

// const LinkedInIcon = () => (
//   <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
//     <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
//   </svg>
// );

// const ArrowIcon = () => (
//   <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//     <path d="M5 12h14M13 6l6 6-6 6" />
//   </svg>
// );

// const team = [
//   {
//     name: "Harpreet Dhody",
//     role: "Group CEO - Konsole Group",
//     img: "/images/boss1.jpeg",
//     linkedin: "https://www.linkedin.com/in/harpreetdhody/",
//     accent: "#ff6b6b",
//     glow: "rgba(255,107,107,0.38)",
//   },
//   {
//     name: "Suyash Chandel",
//     role: "Director - Konsole Group",
//     img: "/images/boss2.jpeg",
//     linkedin: "https://www.linkedin.com/in/suyash-chandel-20218616/",
//     accent: "#ffd21c",
//     glow: "rgba(255,210,28,0.34)",
//   },
//   {
//     name: "Zama Khan",
//     role: "Director - Konsole Group",
//     img: "/images/boss3.jpeg",
//     linkedin: "https://www.linkedin.com/in/zamauddinkhan/",
//     accent: "#4a6bff",
//     glow: "rgba(74,107,255,0.42)",
//   },
//   {
//     name: "Amandeep Singh Bhatia",
//     role: "Director - Konsole Group",
//     img: "/images/boss4.jpeg",
//     linkedin: "https://www.linkedin.com/in/amandeep14/",
//     accent: "#2fbf71",
//     glow: "rgba(47,191,113,0.38)",
//   },
//   {
//     name: "Pushpendra Singh",
//     role: "Director - Konsole Group",
//     img: "/images/boss5.png",
//     linkedin: "https://www.linkedin.com/in/pushpendrasingh27/",
//     accent: "#ffd21c",
//     glow: "rgba(255,210,28,0.34)",
//   },
// ];

// const TeamCard = ({ member, index, featured = false, className = "" }) => {
//   const mouseX = useMotionValue(-300);
//   const mouseY = useMotionValue(-300);

//   const spotlight = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, ${member.glow}, transparent 70%)`;

//   const handleMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     mouseX.set(e.clientX - rect.left);
//     mouseY.set(e.clientY - rect.top);
//   };

//   const handleLeave = () => {
//     mouseX.set(-300);
//     mouseY.set(-300);
//   };

//   const card = {
//     hidden: { opacity: 0, y: 45, scale: 0.96 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       boxShadow: `0 10px 30px rgba(0,0,0,0.35), 0 0 0 1px ${COLORS.border}`,
//       transition: { duration: 0.85, ease: EASE },
//     },
//     hover: {
//       y: -8,
//       scale: 1.015,
//       boxShadow: `0 0 0 1.5px ${member.accent}, 0 28px 70px ${member.glow}`,
//       transition: { type: "spring", stiffness: 260, damping: 20 },
//     },
//   };

//   const image = {
//     hidden: { scale: 1.15 },
//     visible: { scale: 1, transition: { duration: 1.2, ease: EASE } },
//     hover: { scale: 1.06, transition: { duration: 0.8, ease: EASE } },
//   };

//   const shine = {
//     hidden: { x: "-160%" },
//     visible: { x: "-160%", transition: { duration: 0 } },
//     hover: { x: "160%", transition: { duration: 0.9, ease: "easeInOut" } },
//   };

//   const arrow = {
//     hidden: { x: 0 },
//     visible: { x: 0 },
//     hover: { x: 4 },
//   };

//   return (
//     <motion.article
//       variants={card}
//       whileHover="hover"
//       onMouseMove={handleMove}
//       onMouseLeave={handleLeave}
//       className={`group relative flex h-full flex-col overflow-hidden rounded-[24px] bg-[#0f1417] will-change-transform ${className}`}
//     >
//       <motion.div
//         aria-hidden="true"
//         style={{ background: spotlight }}
//         className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//       />

//       <div
//         className={`relative w-full overflow-hidden ${
//           featured
//             ? "min-h-[320px] flex-1"
//             : "h-[300px] sm:h-[320px] lg:h-[260px]"
//         }`}
//         style={{
//           background: `radial-gradient(circle at 50% 85%, ${member.glow}, transparent 70%), #151a1d`,
//         }}
//       >
//         <motion.img
//           variants={image}
//           src={member.img}
//           alt={member.name}
//           loading="lazy"
//           className="h-full w-full object-cover object-top"
//         />

//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1417] via-transparent to-transparent" />

//         <motion.div
//           aria-hidden="true"
//           animate={{ opacity: [0.15, 0.4, 0.15], scale: [1, 1.2, 1] }}
//           transition={{
//             duration: 4.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: index * 0.7,
//           }}
//           style={{ background: member.glow }}
//           className="pointer-events-none absolute -right-14 -top-14 h-[160px] w-[160px] rounded-full blur-[60px]"
//         />

//         <motion.div
//           aria-hidden="true"
//           variants={shine}
//           className="pointer-events-none absolute inset-y-0 left-0 w-[40%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
//         />
//       </div>

//       <div className="relative z-10 flex flex-col px-5 pb-5 pt-3 sm:px-6">
//         <div className="flex items-center gap-3">
//           <span
//             className="h-5 w-[4px] -skew-x-[18deg] rounded-full"
//             style={{ background: member.accent }}
//           />
//           <p
//             className="text-[15px] font-semibold tracking-[-0.01em]"
//             style={{ color: member.accent }}
//           >
//             {member.role}
//           </p>
//         </div>

//         <h3 className="mt-3 text-[24px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[26px]">
//           {member.name}
//         </h3>

//         <a
//           href={member.linkedin}
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label={`${member.name} on LinkedIn`}
//           className={`${btnText} mt-5 inline-flex w-fit items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-[#080b0d] transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(255,255,255,0.35)]`}
//         >
//           <LinkedInIcon />
//           LinkedIn Profile
//           <motion.span variants={arrow} className="inline-flex">
//             <ArrowIcon />
//           </motion.span>
//         </a>
//       </div>
//     </motion.article>
//   );
// };

// const OurManagement = () => {
//   const gridContainer = {
//     hidden: {},
//     visible: {
//       transition: { staggerChildren: 0.14, delayChildren: 0.05 },
//     },
//   };

//   const fadeUp = (delay = 0) => ({
//     initial: { opacity: 0, y: 20, filter: "blur(5px)" },
//     whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
//     viewport: { once: true, amount: 0.4 },
//     transition: { duration: 0.7, delay, ease: EASE },
//   });

//   const barsContainer = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.18 } },
//   };

//   const bar = {
//     hidden: { scaleX: 0, opacity: 0 },
//     visible: {
//       scaleX: 1,
//       opacity: 1,
//       transition: { duration: 0.7, ease: EASE },
//     },
//   };

//   return (
//     <MotionConfig reducedMotion="user">
//       <section
//         className="relative w-full overflow-hidden px-6 py-10 text-white sm:px-10 sm:py-12 md:px-14 md:py-14 lg:px-[4.7%]"
//         style={{ background: COLORS.dark }}
//       >
//         {/* Background glows */}
//         <motion.div
//           aria-hidden="true"
//           initial={{ opacity: 0, scale: 0.7 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.6, ease: "easeOut" }}
//           className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#ff4d57]/10 blur-[120px]"
//         />

//         <motion.div
//           aria-hidden="true"
//           initial={{ opacity: 0, scale: 0.6 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
//           className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#22b5e8]/10 blur-[130px]"
//         />

//         <motion.div
//           aria-hidden="true"
//           animate={{
//             x: [0, 90, 0],
//             y: [0, -50, 0],
//             opacity: [0.1, 0.24, 0.1],
//           }}
//           transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
//           className="pointer-events-none absolute left-[38%] top-[30%] h-[200px] w-[200px] rounded-full bg-[#ffd21c]/10 blur-[110px]"
//         />

//         <div className="relative z-10 mx-auto max-w-[1500px]">
//           {/* Header */}
//           <div className="flex flex-col items-start gap-3">
//             <motion.p
//               {...fadeUp(0)}
//               className="text-left text-[22px] font-medium leading-tight tracking-[-0.02em] sm:text-[25px]"
//               style={{ color: COLORS.yellow }}
//             >
//               Our Leadership Team
//             </motion.p>

//             <div className="mt-1 text-left">
//               <h2
//                 className="max-w-[780px] text-left text-[40px] font-bold leading-[0.98] tracking-[-0.05em] sm:text-[54px] md:text-[64px] lg:text-[42px]"
//                 aria-label="Meet the minds driving our vision forward."
//               >
//                 <span className="block">Meet the minds</span>
//                 <span className="block" style={{ color: COLORS.yellow }}>
//                   driving our vision
//                 </span>
//                 <span className="block" style={{ color: COLORS.coral }}>
//                   forward.
//                 </span>
//               </h2>

//               <motion.div
//                 initial={{ scaleX: 0, opacity: 0 }}
//                 whileInView={{ scaleX: 1, opacity: 1 }}
//                 viewport={{ once: true, amount: 1 }}
//                 transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
//                 className="mt-3 h-[5px] w-[90px] origin-left rounded-full bg-[#ff4d57]"
//               />
//             </div>
//           </div>

//           {/* Team grid: CEO big on the left (2 rows), 4 directors 2x2 on the right */}
//           <motion.div
//             variants={gridContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.1 }}
//             className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]"
//           >
//             <TeamCard
//               member={team[0]}
//               index={0}
//               featured
//               className="sm:col-span-2 lg:col-span-1 lg:row-span-2"
//             />

//             {team.slice(1).map((member, index) => (
//               <TeamCard key={member.name} member={member} index={index + 1} />
//             ))}
//           </motion.div>

//           {/* Bottom accent */}
//           <motion.div
//             variants={barsContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             className="relative z-10 mx-auto mt-8 flex max-w-[1500px] items-center gap-3"
//           >
//             <motion.div
//               variants={bar}
//               className="h-[5px] w-[55px] origin-left rounded-full bg-[#ff4d57]"
//             />
//             <motion.div
//               variants={bar}
//               className="h-[5px] w-[35px] origin-left rounded-full bg-[#22b5e8]"
//             />
//             <motion.div
//               variants={bar}
//               className="h-[5px] w-[25px] origin-left rounded-full bg-[#ffd21c]"
//             />
//           </motion.div>
//         </div>
//       </section>
//     </MotionConfig>
//   );
// };

// export default OurManagement;


// import React from "react";
// import {
//   motion,
//   MotionConfig,
//   useMotionTemplate,
//   useMotionValue,
// } from "motion/react";

// const EASE = [0.22, 1, 0.36, 1];

// const COLORS = {
//   dark: "#080b0d",
//   card: "#0f1417",
//   border: "#273035",
//   muted: "#c5ccd1",
//   yellow: "#ffd21c",
//   coral: "#ff6b6b",
// };

// const btnText = "text-[15px] font-semibold";

// const LinkedInIcon = () => (
//   <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
//     <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
//   </svg>
// );

// const ArrowIcon = () => (
//   <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//     <path d="M5 12h14M13 6l6 6-6 6" />
//   </svg>
// );

// const team = [
//   {
//     name: "Harpreet Dhody",
//     role: "Group CEO - Konsole Group",
//     img: "/images/boss1.jpeg",
//     linkedin: "https://www.linkedin.com/in/harpreetdhody/",
//     accent: "#ff6b6b",
//     glow: "rgba(255,107,107,0.38)",
//   },
//   {
//     name: "Suyash Chandel",
//     role: "Director - Konsole Group",
//     img: "/images/boss2.jpeg",
//     linkedin: "https://www.linkedin.com/in/suyash-chandel-20218616/",
//     accent: "#ffd21c",
//     glow: "rgba(255,210,28,0.34)",
//   },
//   {
//     name: "Zama Khan",
//     role: "Director - Konsole Group",
//     img: "/images/boss3.jpeg",
//     linkedin: "https://www.linkedin.com/in/zamauddinkhan/",
//     accent: "#4a6bff",
//     glow: "rgba(74,107,255,0.42)",
//   },
//   {
//     name: "Amandeep Singh Bhatia",
//     role: "Director - Konsole Group",
//     img: "/images/boss4.jpeg",
//     linkedin: "https://www.linkedin.com/in/amandeep14/",
//     accent: "#2fbf71",
//     glow: "rgba(47,191,113,0.38)",
//   },
//   {
//     name: "Pushpendra Singh",
//     role: "Director - Konsole Group",
//     img: "/images/boss5.png",
//     linkedin: "https://www.linkedin.com/in/pushpendrasingh27/",
//     accent: "#ffd21c",
//     glow: "rgba(255,210,28,0.34)",
//   },
// ];

// const TeamCard = ({ member, index }) => {
//   const mouseX = useMotionValue(-300);
//   const mouseY = useMotionValue(-300);

//   const spotlight = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, ${member.glow}, transparent 70%)`;

//   const handleMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     mouseX.set(e.clientX - rect.left);
//     mouseY.set(e.clientY - rect.top);
//   };

//   const handleLeave = () => {
//     mouseX.set(-300);
//     mouseY.set(-300);
//   };

//   const card = {
//     hidden: { opacity: 0, y: 45, scale: 0.96 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       boxShadow: `0 10px 30px rgba(0,0,0,0.35), 0 0 0 1px ${COLORS.border}`,
//       transition: { duration: 0.85, ease: EASE },
//     },
//     hover: {
//       y: -8,
//       scale: 1.015,
//       boxShadow: `0 0 0 1.5px ${member.accent}, 0 28px 70px ${member.glow}`,
//       transition: { type: "spring", stiffness: 260, damping: 20 },
//     },
//   };

//   const image = {
//     hidden: { scale: 1.15 },
//     visible: { scale: 1, transition: { duration: 1.2, ease: EASE } },
//     hover: { scale: 1.06, transition: { duration: 0.8, ease: EASE } },
//   };

//   const shine = {
//     hidden: { x: "-160%" },
//     visible: { x: "-160%", transition: { duration: 0 } },
//     hover: { x: "160%", transition: { duration: 0.9, ease: "easeInOut" } },
//   };

//   const arrow = {
//     hidden: { x: 0 },
//     visible: { x: 0 },
//     hover: { x: 4 },
//   };

//   return (
//     <motion.article
//       variants={card}
//       whileHover="hover"
//       onMouseMove={handleMove}
//       onMouseLeave={handleLeave}
//       className="group relative flex h-full w-full flex-col overflow-hidden rounded-[24px] bg-[#0f1417] will-change-transform"
//     >
//       <motion.div
//         aria-hidden="true"
//         style={{ background: spotlight }}
//         className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//       />

//       {/* Same image size for every card */}
//       <div
//         className="relative h-[320px] w-full shrink-0 overflow-hidden sm:h-[340px]"
//         style={{
//           background: `radial-gradient(circle at 50% 85%, ${member.glow}, transparent 70%), #151a1d`,
//         }}
//       >
//         <motion.img
//           variants={image}
//           src={member.img}
//           alt={member.name}
//           loading="lazy"
//           draggable="false"
//           className="h-full w-full object-cover object-top"
//         />

//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1417] via-transparent to-transparent" />

//         <motion.div
//           aria-hidden="true"
//           animate={{ opacity: [0.15, 0.4, 0.15], scale: [1, 1.2, 1] }}
//           transition={{
//             duration: 4.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: index * 0.7,
//           }}
//           style={{ background: member.glow }}
//           className="pointer-events-none absolute -right-14 -top-14 h-[160px] w-[160px] rounded-full blur-[60px]"
//         />

//         <motion.div
//           aria-hidden="true"
//           variants={shine}
//           className="pointer-events-none absolute inset-y-0 left-0 w-[40%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
//         />
//       </div>

//       <div className="relative z-10 flex flex-1 flex-col px-5 pb-5 pt-3 sm:px-6">
//         <div className="flex items-center gap-3">
//           <span
//             className="h-5 w-[4px] shrink-0 -skew-x-[18deg] rounded-full"
//             style={{ background: member.accent }}
//           />
//           <p
//             className="text-[15px] font-semibold tracking-[-0.01em]"
//             style={{ color: member.accent }}
//           >
//             {member.role}
//           </p>
//         </div>

//         <h3 className="mt-3 text-[24px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[26px]">
//           {member.name}
//         </h3>

//         <a
//           href={member.linkedin}
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label={`${member.name} on LinkedIn`}
//           className={`${btnText} mt-auto inline-flex w-fit items-center gap-2.5 rounded-full bg-white px-5 py-2.5 pt-2.5 text-[#080b0d] transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(255,255,255,0.35)]`}
//         >
//           <LinkedInIcon />
//           LinkedIn Profile
//           <motion.span variants={arrow} className="inline-flex">
//             <ArrowIcon />
//           </motion.span>
//         </a>
//       </div>
//     </motion.article>
//   );
// };

// const OurManagement = () => {
//   const gridContainer = {
//     hidden: {},
//     visible: {
//       transition: { staggerChildren: 0.14, delayChildren: 0.05 },
//     },
//   };

//   const fadeUp = (delay = 0) => ({
//     initial: { opacity: 0, y: 20, filter: "blur(5px)" },
//     whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
//     viewport: { once: true, amount: 0.4 },
//     transition: { duration: 0.7, delay, ease: EASE },
//   });

//   const barsContainer = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.18 } },
//   };

//   const bar = {
//     hidden: { scaleX: 0, opacity: 0 },
//     visible: {
//       scaleX: 1,
//       opacity: 1,
//       transition: { duration: 0.7, ease: EASE },
//     },
//   };

//   return (
//     <MotionConfig reducedMotion="user">
//       {/* Carousel animation (right to left, seamless loop) */}
//       <style>
//         {`
//           @keyframes teamMarquee {
//             0% {
//               transform: translateX(0);
//             }

//             100% {
//               transform: translateX(-50%);
//             }
//           }

//           .team-track {
//             animation: teamMarquee 40s linear infinite;
//           }

//           .team-marquee:hover .team-track {
//             animation-play-state: paused;
//           }

//           @media (prefers-reduced-motion: reduce) {
//             .team-track {
//               animation: none;
//             }
//           }
//         `}
//       </style>

//       <section
//         className="relative w-full overflow-hidden px-6 py-10 text-white sm:px-10 sm:py-12 md:px-14 md:py-14 lg:px-[4.7%]"
//         style={{ background: COLORS.dark }}
//       >
//         {/* Background glows */}
//         <motion.div
//           aria-hidden="true"
//           initial={{ opacity: 0, scale: 0.7 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.6, ease: "easeOut" }}
//           className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#ff4d57]/10 blur-[120px]"
//         />

//         <motion.div
//           aria-hidden="true"
//           initial={{ opacity: 0, scale: 0.6 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
//           className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#22b5e8]/10 blur-[130px]"
//         />

//         <motion.div
//           aria-hidden="true"
//           animate={{
//             x: [0, 90, 0],
//             y: [0, -50, 0],
//             opacity: [0.1, 0.24, 0.1],
//           }}
//           transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
//           className="pointer-events-none absolute left-[38%] top-[30%] h-[200px] w-[200px] rounded-full bg-[#ffd21c]/10 blur-[110px]"
//         />

//         <div className="relative z-10 mx-auto max-w-[1500px]">
//           {/* Header */}
//           <div className="flex flex-col items-start gap-3">
//             <motion.p
//               {...fadeUp(0)}
//               className="text-left text-[22px] font-medium leading-tight tracking-[-0.02em] sm:text-[25px]"
//               style={{ color: COLORS.yellow }}
//             >
//               Our Leadership Team
//             </motion.p>

//             <div className="mt-1 text-left">
//               <h2
//                 className="max-w-[780px] text-left text-[40px] font-bold leading-[0.98] tracking-[-0.05em] sm:text-[54px] md:text-[64px] lg:text-[42px]"
//                 aria-label="Meet the minds driving our vision forward."
//               >
//                 <span className="block">Meet the minds</span>
//                 <span className="block" style={{ color: COLORS.yellow }}>
//                   driving our vision
//                 </span>
//                 <span className="block" style={{ color: COLORS.coral }}>
//                   forward.
//                 </span>
//               </h2>

//               <motion.div
//                 initial={{ scaleX: 0, opacity: 0 }}
//                 whileInView={{ scaleX: 1, opacity: 1 }}
//                 viewport={{ once: true, amount: 1 }}
//                 transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
//                 className="mt-3 h-[5px] w-[90px] origin-left rounded-full bg-[#ff4d57]"
//               />
//             </div>
//           </div>

//           {/* Team carousel: moves right to left, all cards same size, pauses on hover */}
//           <motion.div
//             variants={gridContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.1 }}
//             className="team-marquee -mx-6 mt-3 overflow-hidden py-6 sm:-mx-10 md:-mx-14 lg:mx-0"
//             style={{
//               WebkitMaskImage:
//                 "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
//               maskImage:
//                 "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
//             }}
//           >
//             <div className="team-track flex w-max">
//               {/* First set */}
//               {team.map((member, index) => (
//                 <div
//                   key={member.name}
//                   className="mr-5 flex w-[270px] shrink-0 sm:w-[300px]"
//                 >
//                   <TeamCard member={member} index={index} />
//                 </div>
//               ))}

//               {/* Duplicate set for the seamless loop */}
//               {team.map((member, index) => (
//                 <div
//                   key={`${member.name}-copy`}
//                   aria-hidden="true"
//                   className="mr-5 flex w-[270px] shrink-0 sm:w-[300px]"
//                 >
//                   <TeamCard member={member} index={index} />
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Bottom accent */}
//           <motion.div
//             variants={barsContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             className="relative z-10 mx-auto mt-8 flex max-w-[1500px] items-center gap-3"
//           >
//             <motion.div
//               variants={bar}
//               className="h-[5px] w-[55px] origin-left rounded-full bg-[#ff4d57]"
//             />
//             <motion.div
//               variants={bar}
//               className="h-[5px] w-[35px] origin-left rounded-full bg-[#22b5e8]"
//             />
//             <motion.div
//               variants={bar}
//               className="h-[5px] w-[25px] origin-left rounded-full bg-[#ffd21c]"
//             />
//           </motion.div>
//         </div>
//       </section>
//     </MotionConfig>
//   );
// };

// export default OurManagement;



import React, { useCallback, useState } from "react";
import {
  motion,
  MotionConfig,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "motion/react";

const EASE = [0.22, 1, 0.36, 1];

const COLORS = {
  dark: "#080b0d",
  card: "#0f1417",
  border: "#273035",
  muted: "#c5ccd1",
  yellow: "#ffd21c",
  coral: "#ff6b6b",
};

const btnText = "text-[15px] font-semibold";

/* ---------- Icons ---------- */
const LinkedInIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

/* ---------- Data ---------- */
const team = [
  {
    name: "Harpreet Dhody",
    role: "Group CEO - Konsole Group",
    img: "/images/boss1.jpeg",
    linkedin: "https://www.linkedin.com/in/harpreetdhody/",
    accent: "#ff6b6b",
    glow: "rgba(255,107,107,0.38)",
  },
  {
    name: "Suyash Chandel",
    role: "Director - Konsole Group",
    img: "/images/boss2.jpeg",
    linkedin: "https://www.linkedin.com/in/suyash-chandel-20218616/",
    accent: "#ffd21c",
    glow: "rgba(255,210,28,0.34)",
  },
  {
    name: "Zama Khan",
    role: "Director - Konsole Group",
    img: "/images/boss3.jpeg",
    linkedin: "https://www.linkedin.com/in/zamauddinkhan/",
    accent: "#4a6bff",
    glow: "rgba(74,107,255,0.42)",
  },
  {
    name: "Amandeep Singh Bhatia",
    role: "Director - Konsole Group",
    img: "/images/boss4.jpeg",
    linkedin: "https://www.linkedin.com/in/amandeep14/",
    accent: "#2fbf71",
    glow: "rgba(47,191,113,0.38)",
  },
  {
    name: "Pushpendra Singh",
    role: "Director - Konsole Group",
    img: "/images/boss5.png",
    linkedin: "https://www.linkedin.com/in/pushpendrasingh27/",
    accent: "#ffd21c",
    glow: "rgba(255,210,28,0.34)",
  },
];

/* ---------- Card ---------- */
const TeamCard = ({ member, index, active = true }) => {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, ${member.glow}, transparent 70%)`;

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleLeave = () => {
    mouseX.set(-300);
    mouseY.set(-300);
  };

  const card = {
    hidden: { opacity: 0, y: 45, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      boxShadow: `0 10px 30px rgba(0,0,0,0.35), 0 0 0 1px ${COLORS.border}`,
      transition: { duration: 0.85, ease: EASE },
    },
    hover: {
      y: -8,
      scale: 1.015,
      boxShadow: `0 0 0 1.5px ${member.accent}, 0 28px 70px ${member.glow}`,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  const image = {
    hidden: { scale: 1.15 },
    visible: { scale: 1, transition: { duration: 1.2, ease: EASE } },
    hover: { scale: 1.06, transition: { duration: 0.8, ease: EASE } },
  };

  const shine = {
    hidden: { x: "-160%" },
    visible: { x: "-160%", transition: { duration: 0 } },
    hover: { x: "160%", transition: { duration: 0.9, ease: "easeInOut" } },
  };

  const arrow = {
    hidden: { x: 0 },
    visible: { x: 0 },
    hover: { x: 4 },
  };

  return (
    <motion.article
      variants={card}
      whileHover="hover"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-[24px] bg-[#0f1417] will-change-transform"
    >
      <motion.div
        aria-hidden="true"
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Same image size for every card */}
      <div
        className="relative h-[320px] w-full shrink-0 overflow-hidden sm:h-[340px] lg:h-[400px]"
        style={{
          background: `radial-gradient(circle at 50% 85%, ${member.glow}, transparent 70%), #151a1d`,
        }}
      >
        <motion.img
          variants={image}
          src={member.img}
          alt={member.name}
          loading="lazy"
          draggable="false"
          className="h-full w-full object-cover object-top"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1417] via-transparent to-transparent" />

        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.15, 0.4, 0.15], scale: [1, 1.2, 1] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.7,
          }}
          style={{ background: member.glow }}
          className="pointer-events-none absolute -right-14 -top-14 h-[160px] w-[160px] rounded-full blur-[60px]"
        />

        <motion.div
          aria-hidden="true"
          variants={shine}
          className="pointer-events-none absolute inset-y-0 left-0 w-[40%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-5 pb-5 pt-3 sm:px-6">
        <div className="flex items-center gap-3">
          <span
            className="h-5 w-[4px] shrink-0 -skew-x-[18deg] rounded-full"
            style={{ background: member.accent }}
          />
          <p
            className="text-[15px] font-semibold tracking-[-0.01em]"
            style={{ color: member.accent }}
          >
            {member.role}
          </p>
        </div>

        <h3 className="mt-3 text-[24px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[26px]">
          {member.name}
        </h3>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          tabIndex={active ? 0 : -1}
          className={`${btnText} mt-auto inline-flex w-fit items-center gap-2.5 rounded-full bg-white px-5 py-2.5 pt-2.5 text-[#080b0d] transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(255,255,255,0.35)]`}
        >
          <LinkedInIcon />
          LinkedIn Profile
          <motion.span variants={arrow} className="inline-flex">
            <ArrowIcon />
          </motion.span>
        </a>
      </div>
    </motion.article>
  );
};

/* ---------- Round control button ---------- */
const RailButton = ({ label, onClick, children }) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors duration-300 hover:bg-white hover:text-[#080b0d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd21c]"
  >
    {children}
  </button>
);

/* ---------- Section ---------- */
const OurManagement = () => {
  const total = team.length;
  const reduceMotion = useReducedMotion();

  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  const gridContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.14, delayChildren: 0.05 },
    },
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20, filter: "blur(5px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  const barsContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
  };

  const bar = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        className="relative w-full overflow-hidden px-6 py-10 text-white sm:px-10 sm:py-12 md:px-14 md:py-14 lg:px-[4.7%]"
        style={{ background: COLORS.dark }}
      >
        {/* Background glows */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#ff4d57]/10 blur-[120px]"
        />

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
          className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#22b5e8]/10 blur-[130px]"
        />

        <motion.div
          aria-hidden="true"
          animate={{
            x: [0, 90, 0],
            y: [0, -50, 0],
            opacity: [0.1, 0.24, 0.1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-[38%] top-[30%] h-[200px] w-[200px] rounded-full bg-[#ffd21c]/10 blur-[110px]"
        />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          {/* Heading on the left, vertical carousel on the right (stacked on mobile) */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Header */}
            <div className="flex flex-col items-start gap-3">
              <motion.p
                {...fadeUp(0)}
                className="text-left text-[22px] font-medium leading-tight tracking-[-0.02em] sm:text-[25px]"
                style={{ color: COLORS.yellow }}
              >
                Our Leadership Team
              </motion.p>

              <div className="mt-1 text-left">
                <h2
                  className="max-w-[780px] text-left text-[40px] font-bold leading-[0.98] tracking-[-0.05em] sm:text-[54px] md:text-[64px] lg:text-[42px]"
                  aria-label="Meet the minds driving our vision forward."
                >
                  <span className="block">Meet the minds</span>
                  <span className="block" style={{ color: COLORS.yellow }}>
                    driving our vision
                  </span>
                  <span className="block" style={{ color: COLORS.coral }}>
                    forward.
                  </span>
                </h2>

                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
                  className="mt-3 h-[5px] w-[90px] origin-left rounded-full bg-[#ff4d57]"
                />
              </div>
            </div>

            {/* ================= VERTICAL CAROUSEL ================= */}
            <motion.div
              variants={gridContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              role="region"
              aria-roledescription="carousel"
              aria-label="Leadership team"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              className="mx-auto flex w-full max-w-[360px] items-center sm:max-w-[480px] lg:max-w-[620px] justify-center gap-3 rounded-[28px] outline-none focus-visible:ring-2 focus-visible:ring-white/30 lg:mx-auto"
            >
              {/* Slides: all stacked in one spot, the active one slides in vertically */}
              <div className="relative h-[520px] min-w-0 flex-1 sm:h-[560px] lg:h-[600px]" aria-live="polite">
                {team.map((member, i) => {
                  // Shortest circular distance from the active slide: -2 ... 2
                  let d = (i - index + total) % total;
                  if (d > total / 2) d -= total;

                  const active = d === 0;
                  const dir = Math.sign(d); // -1 = above, 1 = below

                  return (
                    <div
                      key={member.name}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${i + 1} of ${total}`}
                      aria-hidden={!active}
                      className="absolute inset-0"
                      style={{
                        opacity: active ? 1 : 0,
                        transform: `translateY(${dir * 80}px) scale(${active ? 1 : 0.96})`,
                        pointerEvents: active ? "auto" : "none",
                        zIndex: active ? 10 : 0,
                        transition: reduceMotion
                          ? "none"
                          : "transform 0.8s cubic-bezier(0.22,1,0.36,1), opacity 0.45s ease",
                      }}
                    >
                      <TeamCard member={member} index={i} active={active} />
                    </div>
                  );
                })}
              </div>

              {/* Controls */}
              <div className="flex shrink-0 flex-col items-center gap-3">
                <RailButton label="Previous leader" onClick={prev}>
                  <ChevronUpIcon />
                </RailButton>

                <RailButton label="Next leader" onClick={next}>
                  <ChevronDownIcon />
                </RailButton>
              </div>
            </motion.div>
          </div>

          {/* Bottom accent */}
          <motion.div
            variants={barsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="relative z-10 mx-auto mt-8 flex max-w-[1500px] items-center gap-3"
          >
            <motion.div
              variants={bar}
              className="h-[5px] w-[55px] origin-left rounded-full bg-[#ff4d57]"
            />
            <motion.div
              variants={bar}
              className="h-[5px] w-[35px] origin-left rounded-full bg-[#22b5e8]"
            />
            <motion.div
              variants={bar}
              className="h-[5px] w-[25px] origin-left rounded-full bg-[#ffd21c]"
            />
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default OurManagement;