
// import React, { useRef, useState } from "react";
// import {
//   motion,
//   MotionConfig,
//   useScroll,
//   useSpring,
//   useTransform,
// } from "motion/react";

// /* =========================================================
//    SHARED THEME
// ========================================================= */

// const EASE = [0.22, 1, 0.36, 1];
// const BASE_DELAY = 0.7;

// const COLORS = {
//   dark: "#080B0D",
//   darkCard: "#151A1D",
//   offWhite: "#FAF8F3",
//   white: "#FFFFFF",
//   yellow: "#FFD21C",
//   coral: "#FF6268",
//   blue: "#3980FF",
//   green: "#00C98D",
//   muted: "#BFC5C5",
//   border: "#D6D4CE",
// };

// /* =========================================================
//    LETTER REVEAL
// ========================================================= */

// const LetterReveal = ({
//   text,
//   className = "",
//   inView = false,
//   delay = 0,
//   stagger = 0.045,
//   wave = null,
// }) => {
//   const container = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: stagger,
//         delayChildren: delay,
//       },
//     },
//   };

//   const letter = {
//     hidden: {
//       y: "115%",
//       rotate: 10,
//       opacity: 0,
//       filter: "blur(8px)",
//     },
//     visible: {
//       y: "0%",
//       rotate: 0,
//       opacity: 1,
//       filter: "blur(0px)",
//       transition: { duration: 0.9, ease: EASE },
//     },
//   };

//   const trigger = inView
//     ? {
//       initial: "hidden",
//       whileInView: "visible",
//       viewport: { once: true, amount: 0.4 },
//     }
//     : {
//       initial: "hidden",
//       animate: "visible",
//     };

//   const words = text.split(" ");
//   let letterIndex = 0;

//   return (
//     <motion.span
//       variants={container}
//       {...trigger}
//       className={`inline-block ${className}`}
//       aria-label={text}
//     >
//       {words.map((word, wi) => (
//         <React.Fragment key={wi}>
//           <span className="inline-block whitespace-nowrap" aria-hidden="true">
//             {word.split("").map((char) => {
//               const i = letterIndex++;

//               return (
//                 <span
//                   key={i}
//                   className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom"
//                 >
//                   <motion.span
//                     variants={letter}
//                     className="inline-block origin-bottom-left"
//                   >
//                     {wave ? (
//                       <motion.span
//                         className="inline-block"
//                         animate={{ color: [wave.from, wave.to, wave.from] }}
//                         transition={{
//                           duration: 2.4,
//                           repeat: Infinity,
//                           ease: "easeInOut",
//                           delay: delay + 1 + i * 0.12,
//                         }}
//                       >
//                         {char}
//                       </motion.span>
//                     ) : (
//                       char
//                     )}
//                   </motion.span>
//                 </span>
//               );
//             })}
//           </span>

//           {wi < words.length - 1 && (
//             <span className="inline-block w-[0.26em]" aria-hidden="true" />
//           )}
//         </React.Fragment>
//       ))}
//     </motion.span>
//   );
// };

// /* =========================================================
//    TEAM CARD
// ========================================================= */

// const GLOW_REST =
//   "0 5px 20px rgba(8,11,13,0.07), 0 0 0 1px rgba(8,11,13,0.04)";

// const GLOW_HOVER =
//   "0 0 0 1px rgba(57,128,255,0.6), 0 18px 45px rgba(57,128,255,0.15), 0 0 35px rgba(255,98,104,0.1)";

// const TeamCard = ({
//   src,
//   alt,
//   className = "",
//   radius = "18px",
//   from = { y: 60, scale: 0.88 },
//   hoverScale = 1.025,
//   index = 0,
//   lazy = true,
// }) => {
//   const card = {
//     hidden: {
//       opacity: 0,
//       y: from.y,
//       x: from.x || 0,
//       scale: from.scale,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       x: 0,
//       scale: 1,
//       boxShadow: GLOW_REST,
//       transition: { duration: 0.85, ease: EASE },
//     },
//     hover: {
//       scale: hoverScale,
//       y: -6,
//       boxShadow: GLOW_HOVER,
//       transition: {
//         type: "spring",
//         stiffness: 260,
//         damping: 22,
//       },
//     },
//   };

//   const image = {
//     hidden: { scale: 1.25 },
//     visible: {
//       scale: 1,
//       transition: { duration: 1.4, ease: EASE },
//     },
//     hover: {
//       scale: 1.07,
//       transition: { duration: 0.8, ease: EASE },
//     },
//   };

//   const shine = {
//     hidden: { x: "-160%" },
//     visible: {
//       x: "-160%",
//       transition: { duration: 0 },
//     },
//     hover: {
//       x: "160%",
//       transition: { duration: 0.9, ease: "easeInOut" },
//     },
//   };

//   const hoverBorder = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 0 },
//     hover: {
//       opacity: 1,
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <motion.div
//       variants={card}
//       whileHover="hover"
//       style={{ borderRadius: radius }}
//       className={`group relative flex flex-col justify-end overflow-hidden border border-[#D6D4CE] bg-[#EAE8E2] will-change-transform ${className}`}
//     >
//       <motion.img
//         variants={image}
//         src={src}
//         alt={alt}
//         loading={lazy ? "lazy" : undefined}
//         className="absolute inset-0 h-full w-full object-cover"
//       />

//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B0D]/40 via-transparent to-transparent" />

//       <motion.div
//         aria-hidden="true"
//         animate={{ opacity: [0.08, 0.28, 0.08], scale: [1, 1.15, 1] }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: index * 0.6,
//         }}
//         className="pointer-events-none absolute -right-12 -top-12 h-[140px] w-[140px] rounded-full bg-[#3980FF]/20 blur-[55px]"
//       />

//       <motion.div
//         aria-hidden="true"
//         animate={{ opacity: [0.06, 0.2, 0.06], scale: [1, 1.15, 1] }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1 + index * 0.6,
//         }}
//         className="pointer-events-none absolute -bottom-12 -left-12 h-[140px] w-[140px] rounded-full bg-[#FF6268]/15 blur-[55px]"
//       />

//       <motion.div
//         aria-hidden="true"
//         variants={shine}
//         className="pointer-events-none absolute inset-y-0 left-0 w-[40%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
//       />

//       <motion.div
//         aria-hidden="true"
//         variants={hoverBorder}
//         style={{ borderRadius: radius }}
//         className="pointer-events-none absolute inset-0 border border-[#3980FF]/70"
//       />
//     </motion.div>
//   );
// };

// /* =========================================================
//    FLOATING PARTICLES
// ========================================================= */

// const PARTICLES = [
//   { left: "6%", top: "78%", size: 5, dur: 7, delay: 0 },
//   { left: "14%", top: "30%", size: 3, dur: 9, delay: 1.2 },
//   { left: "22%", top: "62%", size: 4, dur: 8, delay: 0.6 },
//   { left: "33%", top: "18%", size: 3, dur: 10, delay: 2 },
//   { left: "41%", top: "84%", size: 5, dur: 7.5, delay: 1.5 },
//   { left: "52%", top: "40%", size: 3, dur: 9.5, delay: 0.3 },
//   { left: "60%", top: "12%", size: 4, dur: 8.5, delay: 2.4 },
//   { left: "68%", top: "70%", size: 3, dur: 7, delay: 1 },
//   { left: "77%", top: "26%", size: 5, dur: 10, delay: 0.9 },
//   { left: "85%", top: "56%", size: 3, dur: 8, delay: 1.8 },
//   { left: "92%", top: "16%", size: 4, dur: 9, delay: 0.4 },
//   { left: "95%", top: "82%", size: 3, dur: 7.5, delay: 2.2 },
// ];

// /* =========================================================
//    PAGE
// ========================================================= */

// const OurTeam = () => {
//   const teamMembers = [
//     { imgSrc: "/images/team1.jpeg", role: "Founding Leadership" },
//     { imgSrc: "/images/team2.jpeg", role: "Team member 2" },
//     { imgSrc: "/images/team-1.jpg", role: "Team member 3" },
//     { imgSrc: "/images/team-2.jpg", role: "Team member 4" },
//   ];

//   // Selected image is shown in the large photo on the left.
//   const [selectedPhoto, setSelectedPhoto] = useState({
//     src: "/images/team1.jpeg",
//     alt: "Founding Leadership",
//   });

//   const heroRef = useRef(null);

//   const { scrollYProgress: pageProgress } = useScroll();

//   const progressScale = useSpring(pageProgress, {
//     stiffness: 120,
//     damping: 24,
//     restDelta: 0.001,
//   });

//   const { scrollYProgress: heroProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const heroTextY = useTransform(heroProgress, [0, 1], [0, 70]);
//   const glowY = useTransform(heroProgress, [0, 1], [0, -130]);

//   /* ANIMATION VARIANTS */

//   const heroTextContainer = {
//     hidden: {},
//     visible: {
//       transition: {
//         delayChildren: BASE_DELAY,
//         staggerChildren: 0.12,
//       },
//     },
//   };

//   const heroTextItem = {
//     hidden: { opacity: 0, y: 45, filter: "blur(8px)" },
//     visible: {
//       opacity: 1,
//       y: 0,
//       filter: "blur(0px)",
//       transition: { duration: 0.8, ease: EASE },
//     },
//   };

//   const cardsContainer = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.14,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const sectionFade = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: EASE },
//     },
//   };

//   const barsContainer = {
//     hidden: {},
//     visible: {
//       transition: { staggerChildren: 0.18 },
//     },
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
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="min-h-screen overflow-hidden bg-[#FAF8F3] font-[Arial,sans-serif] text-[#080B0D]"
//       >
//         {/* PAGE LOAD CURTAIN */}

//         <motion.div
//           aria-hidden="true"
//           initial={{ y: 0 }}
//           animate={{ y: "-100%" }}
//           transition={{
//             duration: 0.95,
//             delay: 0.15,
//             ease: [0.76, 0, 0.24, 1],
//           }}
//           className="pointer-events-none fixed inset-0 z-[70] bg-[#080B0D]"
//         >
//           <div className="absolute bottom-0 left-0 h-[4px] w-full bg-gradient-to-r from-[#FF6268] via-[#3980FF] to-[#FFD21C]" />
//         </motion.div>

//         {/* SCROLL PROGRESS */}

//         <motion.div
//           aria-hidden="true"
//           style={{ scaleX: progressScale }}
//           className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[#FF6268] via-[#3980FF] to-[#FFD21C]"
//         />

//         {/* HERO SECTION */}

//         <section
//           ref={heroRef}
//           className="relative w-full overflow-hidden bg-[#080B0D] px-6 py-10 text-white sm:px-10 sm:py-12 md:px-14 md:py-14 lg:px-[7%] lg:py-16"
//         >
//           <motion.div
//             style={{ y: glowY }}
//             initial={{ opacity: 0, scale: 0.7 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-[#FF6268]/10 blur-[120px]"
//           />

//           <motion.div
//             initial={{ opacity: 0, scale: 0.6 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
//             className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#3980FF]/5 blur-[130px]"
//           />

//           <motion.div
//             animate={{
//               x: [0, 80, 0],
//               y: [0, -40, 0],
//               opacity: [0.08, 0.18, 0.08],
//             }}
//             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//             className="pointer-events-none absolute left-[40%] top-[20%] h-[180px] w-[180px] rounded-full bg-[#FFD21C]/10 blur-[100px]"
//           />

//           {PARTICLES.map((p, i) => (
//             <motion.span
//               key={i}
//               aria-hidden="true"
//               style={{
//                 left: p.left,
//                 top: p.top,
//                 width: p.size,
//                 height: p.size,
//               }}
//               animate={{ y: [0, -36, 0], opacity: [0, 0.55, 0] }}
//               transition={{
//                 duration: p.dur,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: BASE_DELAY + p.delay,
//               }}
//               className="pointer-events-none absolute rounded-full bg-white/60"
//             />
//           ))}

//           <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
//             {/* LEFT CONTENT */}

//             <motion.div
//               style={{ y: heroTextY }}
//               variants={heroTextContainer}
//               initial="hidden"
//               animate="visible"
//               className="z-10"
//             >
//               <motion.p
//                 variants={heroTextItem}
//                 className="mb-2 text-[21px] font-medium leading-tight tracking-[-0.025em] text-white sm:text-[23px] md:text-[25px]"
//               >
//                 Meet Our
//               </motion.p>

//               <h1 className="max-w-[650px] text-[48px] font-bold leading-[0.94] tracking-[-0.055em] text-white sm:text-[60px] md:text-[70px] lg:text-[76px]">
//                 <LetterReveal
//                   text="Team"
//                   delay={BASE_DELAY + 0.2}
//                   stagger={0.09}
//                   wave={{ from: COLORS.yellow, to: COLORS.coral }}
//                 />
//               </h1>

//               <motion.div
//                 initial={{ width: 0, opacity: 0 }}
//                 animate={{ width: 100, opacity: 1 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: BASE_DELAY + 0.8,
//                   ease: EASE,
//                 }}
//                 className="mt-4 h-[4px] rounded-full bg-[#FF6268]"
//               />

//               <motion.p
//                 initial={{ opacity: 0, y: 25, filter: "blur(5px)" }}
//                 animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//                 transition={{
//                   duration: 0.8,
//                   delay: BASE_DELAY + 0.95,
//                   ease: EASE,
//                 }}
//                 className="mt-4 max-w-[550px] text-[16px] font-normal leading-[1.7] text-[#BFC5C5] sm:text-[18px]"
//               >
//                 We are digital thinkers, strategists, creators, and problem
//                 solvers working together to build incredible web experiences.
//               </motion.p>
//             </motion.div>

//             {/* RIGHT HERO IMAGE */}

//             <motion.div
//               initial={{ opacity: 0, x: 50, scale: 0.96 }}
//               animate={{ opacity: 1, x: 0, scale: 1 }}
//               transition={{ duration: 1, delay: BASE_DELAY, ease: EASE }}
//               whileHover={{ y: -4 }}
//               className="group relative h-[260px] w-full overflow-hidden rounded-[20px] border border-white/10 bg-[#151A1D] sm:h-[340px] md:h-[400px] lg:h-[420px]"
//             >
//               <motion.img
//                 src="/images/aboutimage.jpeg"
//                 alt="Our Team Hero"
//                 initial={{ scale: 1.12 }}
//                 animate={{ scale: 1 }}
//                 transition={{
//                   duration: 1.5,
//                   delay: BASE_DELAY + 0.05,
//                   ease: EASE,
//                 }}
//                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
//               />

//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B0D]/45 via-transparent to-transparent" />

//               <motion.div
//                 animate={{ opacity: [0.08, 0.2, 0.08] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                 className="pointer-events-none absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#3980FF]/20 blur-[70px]"
//               />

//               <motion.div
//                 initial={{ x: "-150%" }}
//                 animate={{ x: "150%" }}
//                 transition={{
//                   duration: 1.4,
//                   delay: BASE_DELAY + 0.6,
//                   ease: "easeInOut",
//                 }}
//                 className="pointer-events-none absolute inset-y-0 left-0 w-[35%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent"
//               />

//               <motion.div
//                 animate={{ opacity: [0.15, 0.35, 0.15] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                 className="pointer-events-none absolute inset-0 rounded-[20px] border border-[#FF6268]/25"
//               />
//             </motion.div>
//           </div>
//         </section>

//         {/* MANAGEMENT TEAM SECTION */}

//         <section className="mx-auto max-w-[1500px] bg-[#FAF8F3] px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-[7%] lg:py-16">
//           {/* SECTION HEADING */}

//           <div className="mb-6 flex flex-col items-start gap-3 sm:mb-7 md:mb-8">

//             <motion.p
            
//               className="text-left text-[22px] font-medium leading-tight tracking-[-0.02em] sm:text-[25px]"
//               style={{ color: COLORS.coral }}
//             >
//               Our Team
//             </motion.p>


//             <h2
//               className="max-w-[780px] text-left text-[40px] font-bold leading-[0.98] tracking-[-0.05em] sm:text-[54px] md:text-[64px] lg:text-[42px]"
//               aria-label="Meet the minds driving our vision forward."
//             >
//               <span className="block">We are digital</span>
//               <span className="block" style={{ color: COLORS.yellow }}>
//                 thinkers, strategists, and
//               </span>
//               <span className="block" style={{ color: COLORS.coral }}>
//                 and creators.
//               </span>
//             </h2>

//             <motion.div
//               initial={{ scaleX: 0, opacity: 0 }}
//               whileInView={{ scaleX: 1, opacity: 1 }}
//               viewport={{ once: true, amount: 1 }}
//               transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
//               className="mt-1 h-[5px] w-[85px] origin-left rounded-full bg-[#FF6268]"
//             />
//           </div>

//           {/* CLICKABLE TEAM PHOTO GALLERY */}

//           <motion.div
//             variants={cardsContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.15 }}
//             className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-12 lg:gap-5"
//           >
//             {/* LARGE SELECTED PHOTO ON THE LEFT */}

//             <motion.div
//               key={selectedPhoto.src}
//               initial={{ opacity: 0.7, scale: 0.985 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4, ease: EASE }}
//               className="group relative min-h-[340px] overflow-hidden rounded-[20px] border border-[#D6D4CE] bg-[#EAE8E2] sm:min-h-[400px] lg:col-span-7 lg:min-h-[440px]"
//             >
//               <motion.img
//                 key={selectedPhoto.src}
//                 src={selectedPhoto.src}
//                 alt={selectedPhoto.alt}
//                 initial={{ scale: 1.04 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.6, ease: EASE }}
//                 className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
//               />

//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B0D]/25 via-transparent to-transparent" />

//               <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-[#3980FF]/20" />
//             </motion.div>

//             {/* FOUR CLICKABLE THUMBNAILS ON THE RIGHT */}

//             <motion.div
//               variants={cardsContainer}
//               className="grid grid-cols-2 gap-4 lg:col-span-5 lg:gap-5"
//             >
//               {teamMembers.map((member, index) => {
//                 const isSelected = selectedPhoto.src === member.imgSrc;

//                 return (
//                   <motion.button
//                     key={`${member.imgSrc}-${index}`}
//                     type="button"
//                     onClick={() =>
//                       setSelectedPhoto({
//                         src: member.imgSrc,
//                         alt: member.role || `Team member ${index + 1}`,
//                       })
//                     }
//                     aria-label={`Show ${member.role || `team member ${index + 1}`} photo`}
//                     aria-pressed={isSelected}
//                     whileHover={{ y: -3 }}
//                     whileTap={{ scale: 0.98 }}
//                     className={`group relative min-h-[180px] overflow-hidden rounded-[18px] border-2 bg-[#EAE8E2] text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3980FF] focus-visible:ring-offset-2 sm:min-h-[190px] lg:min-h-[210px] ${isSelected
//                         ? "border-[#3980FF] shadow-[0_0_0_2px_rgba(57,128,255,0.12)]"
//                         : "border-transparent hover:border-[#FF6268]"
//                       }`}
//                   >
//                     <img
//                       src={member.imgSrc}
//                       alt={member.role || `Team member ${index + 1}`}
//                       loading="lazy"
//                       className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ${isSelected
//                           ? "scale-[1.03]"
//                           : "group-hover:scale-[1.05]"
//                         }`}
//                     />

//                     <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B0D]/20 to-transparent" />

//                     {isSelected && (
//                       <motion.div
//                         layoutId="selected-team-photo"
//                         className="pointer-events-none absolute inset-0 rounded-[16px] border-2 border-[#3980FF]"
//                       />
//                     )}
//                   </motion.button>
//                 );
//               })}
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* PHILOSOPHY SECTION */}

//         <section className="relative overflow-hidden bg-[#080B0D] px-6 py-12 text-white sm:px-10 sm:py-14 md:px-14 md:py-16 lg:px-[10%] lg:py-18">
//           <div className="pointer-events-none absolute -right-24 top-0 h-[280px] w-[280px] rounded-full bg-[#FF6268]/[0.08] blur-[110px]" />

//           <div className="pointer-events-none absolute -bottom-28 -left-20 h-[300px] w-[300px] rounded-full bg-[#3980FF]/[0.08] blur-[110px]" />

//           <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
//             {/* PHILOSOPHY HEADING */}

//             <motion.div
//               variants={sectionFade}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//             >
//               <p className="mb-3 text-[20px] font-medium leading-tight text-[#FFD21C] sm:text-[22px]">
//                 Our Philosophy
//               </p>

//               <h2 className="max-w-[450px] text-[38px] font-bold leading-[0.98] tracking-[-0.05em] text-white sm:text-[46px] md:text-[52px]">
//                 We don't chase
//                 <br />
//                 attention.
//                 <br />
//                 <span className="text-[#FF6268]">We earn it.</span>
//               </h2>

//               <p className="mt-4 max-w-[360px] text-[13px] leading-[1.8] text-[#BFC5C5] sm:text-[14px]">
//                 Brands, leaders and institutions come to us to stay relevant.
//                 Three beliefs shape every project we take on.
//               </p>
//             </motion.div>

//             {/* PHILOSOPHY PRINCIPLES */}

//             <div className="flex flex-col">
//               {[
//                 {
//                   title: "Culture before campaigns",
//                   description:
//                     "We study what people talk about, laugh at and share, then build ideas that belong in that conversation.",
//                   color: COLORS.coral,
//                 },
//                 {
//                   title: "Strategy before noise",
//                   description:
//                     "Every post, pitch and project starts with a clear goal and a way to measure it.",
//                   color: COLORS.blue,
//                 },
//                 {
//                   title: "Trust over reach",
//                   description:
//                     "Views mean little if people don't believe you. We build reputations that hold up.",
//                   color: COLORS.green,
//                 },
//               ].map((item, index) => (
//                 <motion.div
//                   key={item.title}
//                   initial={{ opacity: 0, y: 18 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{
//                     duration: 0.6,
//                     delay: index * 0.1,
//                     ease: EASE,
//                   }}
//                   className="border-t border-white/15 py-4 first:border-t"
//                 >
//                   <div className="flex gap-3">
//                     <span
//                       className="mt-0.5 text-[27px] font-medium leading-none"
//                       style={{ color: item.color }}
//                     >
//                       /
//                     </span>

//                     <div>
//                       <h3 className="text-[16px] font-semibold leading-tight tracking-[-0.025em] text-white sm:text-[18px]">
//                         {item.title}
//                       </h3>

//                       <p className="mt-1.5 max-w-[460px] text-[12px] leading-[1.7] text-[#BFC5C5] sm:text-[13px]">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* BOTTOM ACCENT */}

//         <motion.div
//           variants={barsContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 1 }}
//           className="flex w-full items-center gap-2 bg-[#080B0D] px-6 py-4 sm:px-10 lg:px-[7%]"
//         >
//           <motion.div
//             variants={bar}
//             className="h-[4px] w-[48px] origin-left rounded-full bg-[#FF6268]"
//           />

//           <motion.div
//             variants={bar}
//             className="h-[4px] w-[32px] origin-left rounded-full bg-[#3980FF]"
//           />

//           <motion.div
//             variants={bar}
//             className="h-[4px] w-[22px] origin-left rounded-full bg-[#FFD21C]"
//           />
//         </motion.div>
//       </motion.div>
//     </MotionConfig>
//   );
// };

// export default OurTeam;

import React, { useRef, useState } from "react";
import {
  motion,
  MotionConfig,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

/* =========================================================
   SHARED THEME
========================================================= */

const EASE = [0.22, 1, 0.36, 1];
const BASE_DELAY = 0.7;

const COLORS = {
  dark: "#080B0D",
  darkCard: "#151A1D",
  offWhite: "#FAF8F3",
  white: "#FFFFFF",
  yellow: "#FFD21C",
  coral: "#FF6268",
  blue: "#3980FF",
  green: "#00C98D",
  muted: "#BFC5C5",
  border: "#D6D4CE",
};

/* =========================================================
   LETTER REVEAL
========================================================= */

const LetterReveal = ({
  text,
  className = "",
  inView = false,
  delay = 0,
  stagger = 0.045,
  wave = null,
}) => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const letter = {
    hidden: {
      y: "115%",
      rotate: 10,
      opacity: 0,
      filter: "blur(8px)",
    },
    visible: {
      y: "0%",
      rotate: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: EASE },
    },
  };

  const trigger = inView
    ? {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.4 },
    }
    : {
      initial: "hidden",
      animate: "visible",
    };

  const words = text.split(" ");
  let letterIndex = 0;

  return (
    <motion.span
      variants={container}
      {...trigger}
      className={`inline-block ${className}`}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <React.Fragment key={wi}>
          <span className="inline-block whitespace-nowrap" aria-hidden="true">
            {word.split("").map((char) => {
              const i = letterIndex++;

              return (
                <span
                  key={i}
                  className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom"
                >
                  <motion.span
                    variants={letter}
                    className="inline-block origin-bottom-left"
                  >
                    {wave ? (
                      <motion.span
                        className="inline-block"
                        animate={{ color: [wave.from, wave.to, wave.from] }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: delay + 1 + i * 0.12,
                        }}
                      >
                        {char}
                      </motion.span>
                    ) : (
                      char
                    )}
                  </motion.span>
                </span>
              );
            })}
          </span>

          {wi < words.length - 1 && (
            <span className="inline-block w-[0.26em]" aria-hidden="true" />
          )}
        </React.Fragment>
      ))}
    </motion.span>
  );
};

/* =========================================================
   TEAM CARD
========================================================= */

const GLOW_REST =
  "0 5px 20px rgba(8,11,13,0.07), 0 0 0 1px rgba(8,11,13,0.04)";

const GLOW_HOVER =
  "0 0 0 1px rgba(57,128,255,0.6), 0 18px 45px rgba(57,128,255,0.15), 0 0 35px rgba(255,98,104,0.1)";

const TeamCard = ({
  src,
  alt,
  className = "",
  radius = "18px",
  from = { y: 60, scale: 0.88 },
  hoverScale = 1.025,
  index = 0,
  lazy = true,
}) => {
  const card = {
    hidden: {
      opacity: 0,
      y: from.y,
      x: from.x || 0,
      scale: from.scale,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      boxShadow: GLOW_REST,
      transition: { duration: 0.85, ease: EASE },
    },
    hover: {
      scale: hoverScale,
      y: -6,
      boxShadow: GLOW_HOVER,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 22,
      },
    },
  };

  const image = {
    hidden: { scale: 1.25 },
    visible: {
      scale: 1,
      transition: { duration: 1.4, ease: EASE },
    },
    hover: {
      scale: 1.07,
      transition: { duration: 0.8, ease: EASE },
    },
  };

  const shine = {
    hidden: { x: "-160%" },
    visible: {
      x: "-160%",
      transition: { duration: 0 },
    },
    hover: {
      x: "160%",
      transition: { duration: 0.9, ease: "easeInOut" },
    },
  };

  const hoverBorder = {
    hidden: { opacity: 0 },
    visible: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={card}
      whileHover="hover"
      style={{ borderRadius: radius }}
      className={`group relative flex flex-col justify-end overflow-hidden border border-[#D6D4CE] bg-[#EAE8E2] will-change-transform ${className}`}
    >
      <motion.img
        variants={image}
        src={src}
        alt={alt}
        loading={lazy ? "lazy" : undefined}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B0D]/40 via-transparent to-transparent" />

      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.08, 0.28, 0.08], scale: [1, 1.15, 1] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.6,
        }}
        className="pointer-events-none absolute -right-12 -top-12 h-[140px] w-[140px] rounded-full bg-[#3980FF]/20 blur-[55px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.06, 0.2, 0.06], scale: [1, 1.15, 1] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 + index * 0.6,
        }}
        className="pointer-events-none absolute -bottom-12 -left-12 h-[140px] w-[140px] rounded-full bg-[#FF6268]/15 blur-[55px]"
      />

      <motion.div
        aria-hidden="true"
        variants={shine}
        className="pointer-events-none absolute inset-y-0 left-0 w-[40%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <motion.div
        aria-hidden="true"
        variants={hoverBorder}
        style={{ borderRadius: radius }}
        className="pointer-events-none absolute inset-0 border border-[#3980FF]/70"
      />
    </motion.div>
  );
};

/* =========================================================
   FLOATING PARTICLES
========================================================= */

const PARTICLES = [
  { left: "6%", top: "78%", size: 5, dur: 7, delay: 0 },
  { left: "14%", top: "30%", size: 3, dur: 9, delay: 1.2 },
  { left: "22%", top: "62%", size: 4, dur: 8, delay: 0.6 },
  { left: "33%", top: "18%", size: 3, dur: 10, delay: 2 },
  { left: "41%", top: "84%", size: 5, dur: 7.5, delay: 1.5 },
  { left: "52%", top: "40%", size: 3, dur: 9.5, delay: 0.3 },
  { left: "60%", top: "12%", size: 4, dur: 8.5, delay: 2.4 },
  { left: "68%", top: "70%", size: 3, dur: 7, delay: 1 },
  { left: "77%", top: "26%", size: 5, dur: 10, delay: 0.9 },
  { left: "85%", top: "56%", size: 3, dur: 8, delay: 1.8 },
  { left: "92%", top: "16%", size: 4, dur: 9, delay: 0.4 },
  { left: "95%", top: "82%", size: 3, dur: 7.5, delay: 2.2 },
];

/* =========================================================
   PAGE
========================================================= */

const OurTeam = () => {
  // Large photo shown on the left.
  const [mainPhoto, setMainPhoto] = useState({
    src: "/images/team1.jpeg",
    alt: "Founding Leadership",
  });

  // Small thumbnails shown on the right.
  // NOTE: replace these with your real image filenames.
  const [thumbs, setThumbs] = useState([
    { src: "/images/team2.jpeg", alt: "Team member 1" },
    { src: "/images/team3.jpeg", alt: "Team member 2" },
    { src: "/images/team4.jpeg", alt: "Team member 3" },
    { src: "/images/team5.jpeg", alt: "Team member 4" },
    { src: "/images/team6.jpeg", alt: "Team member 5" },
    { src: "/images/team7.jpeg", alt: "Team member 6" },
    // add more images here
  ]);

  // Clicking a thumbnail: it becomes the large photo,
  // and the old large photo takes its place in the grid.
  const handleSwap = (index) => {
    const clicked = thumbs[index];

    setThumbs((prev) => prev.map((t, i) => (i === index ? mainPhoto : t)));
    setMainPhoto(clicked);
  };

  const heroRef = useRef(null);

  const { scrollYProgress: pageProgress } = useScroll();

  const progressScale = useSpring(pageProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroTextY = useTransform(heroProgress, [0, 1], [0, 70]);
  const glowY = useTransform(heroProgress, [0, 1], [0, -130]);

  /* ANIMATION VARIANTS */

  const heroTextContainer = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: BASE_DELAY,
        staggerChildren: 0.12,
      },
    },
  };

  const heroTextItem = {
    hidden: { opacity: 0, y: 45, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: EASE },
    },
  };

  const cardsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const sectionFade = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  const barsContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18 },
    },
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen overflow-hidden bg-[#FAF8F3] font-[Arial,sans-serif] text-[#080B0D]"
      >
        {/* PAGE LOAD CURTAIN */}

        <motion.div
          aria-hidden="true"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 0.95,
            delay: 0.15,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="pointer-events-none fixed inset-0 z-[70] bg-[#080B0D]"
        >
          <div className="absolute bottom-0 left-0 h-[4px] w-full bg-gradient-to-r from-[#FF6268] via-[#3980FF] to-[#FFD21C]" />
        </motion.div>

        {/* SCROLL PROGRESS */}

        <motion.div
          aria-hidden="true"
          style={{ scaleX: progressScale }}
          className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[#FF6268] via-[#3980FF] to-[#FFD21C]"
        />

        {/* HERO SECTION */}

        <section
          ref={heroRef}
          className="relative w-full overflow-hidden bg-[#080B0D] px-6 py-10 text-white sm:px-10 sm:py-12 md:px-14 md:py-14 lg:px-[7%] lg:py-16"
        >
          <motion.div
            style={{ y: glowY }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-[#FF6268]/10 blur-[120px]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
            className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#3980FF]/5 blur-[130px]"
          />

          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -40, 0],
              opacity: [0.08, 0.18, 0.08],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-[40%] top-[20%] h-[180px] w-[180px] rounded-full bg-[#FFD21C]/10 blur-[100px]"
          />

          {PARTICLES.map((p, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
              }}
              animate={{ y: [0, -36, 0], opacity: [0, 0.55, 0] }}
              transition={{
                duration: p.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: BASE_DELAY + p.delay,
              }}
              className="pointer-events-none absolute rounded-full bg-white/60"
            />
          ))}

          <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* LEFT CONTENT */}

            <motion.div
              style={{ y: heroTextY }}
              variants={heroTextContainer}
              initial="hidden"
              animate="visible"
              className="z-10"
            >
              <motion.p
                variants={heroTextItem}
                className="mb-2 text-[21px] font-medium leading-tight tracking-[-0.025em] text-white sm:text-[23px] md:text-[25px]"
              >
                Meet Our
              </motion.p>

              <h1 className="max-w-[650px] text-[48px] font-bold leading-[0.94] tracking-[-0.055em] text-white sm:text-[60px] md:text-[70px] lg:text-[76px]">
                <LetterReveal
                  text="Team"
                  delay={BASE_DELAY + 0.2}
                  stagger={0.09}
                  wave={{ from: COLORS.yellow, to: COLORS.coral }}
                />
              </h1>

              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 100, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: BASE_DELAY + 0.8,
                  ease: EASE,
                }}
                className="mt-4 h-[4px] rounded-full bg-[#FF6268]"
              />

              <motion.p
                initial={{ opacity: 0, y: 25, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: BASE_DELAY + 0.95,
                  ease: EASE,
                }}
                className="mt-4 max-w-[550px] text-[16px] font-normal leading-[1.7] text-[#BFC5C5] sm:text-[18px]"
              >
                We are digital thinkers, strategists, creators, and problem
                solvers working together to build incredible web experiences.
              </motion.p>
            </motion.div>

            {/* RIGHT HERO IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: BASE_DELAY, ease: EASE }}
              whileHover={{ y: -4 }}
              className="group relative h-[260px] w-full overflow-hidden rounded-[20px] border border-white/10 bg-[#151A1D] sm:h-[340px] md:h-[400px] lg:h-[420px]"
            >
              <motion.img
                src="/images/aboutimage.jpeg"
                alt="Our Team Hero"
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.5,
                  delay: BASE_DELAY + 0.05,
                  ease: EASE,
                }}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B0D]/45 via-transparent to-transparent" />

              <motion.div
                animate={{ opacity: [0.08, 0.2, 0.08] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#3980FF]/20 blur-[70px]"
              />

              <motion.div
                initial={{ x: "-150%" }}
                animate={{ x: "150%" }}
                transition={{
                  duration: 1.4,
                  delay: BASE_DELAY + 0.6,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 left-0 w-[35%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />

              <motion.div
                animate={{ opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-0 rounded-[20px] border border-[#FF6268]/25"
              />
            </motion.div>
          </div>
        </section>

        {/* MANAGEMENT TEAM SECTION */}

        <section className="mx-auto max-w-[1500px] bg-[#FAF8F3] px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-[7%] lg:py-16">
          {/* SECTION HEADING */}

          <div className="mb-6 flex flex-col items-start gap-3 sm:mb-7 md:mb-8">
            <motion.p
              className="text-left text-[22px] font-medium leading-tight tracking-[-0.02em] sm:text-[25px]"
              style={{ color: COLORS.coral }}
            >
              Our Team
            </motion.p>

            <h2
              className="max-w-[780px] text-left text-[40px] font-bold leading-[0.98] tracking-[-0.05em] sm:text-[54px] md:text-[64px] lg:text-[42px]"
              aria-label="Meet the minds driving our vision forward."
            >
              <span className="block">We are digital</span>
              <span className="block" style={{ color: COLORS.yellow }}>
                thinkers, strategists, and
              </span>
              <span className="block" style={{ color: COLORS.coral }}>
                and creators.
              </span>
            </h2>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="mt-1 h-[5px] w-[85px] origin-left rounded-full bg-[#FF6268]"
            />
          </div>

          {/* CLICKABLE TEAM PHOTO GALLERY */}

          <motion.div
            variants={cardsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-12 lg:gap-5"
          >
            {/* LARGE PHOTO ON THE LEFT */}

            <motion.div
              key={mainPhoto.src}
              initial={{ opacity: 0.7, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="group relative min-h-[340px] overflow-hidden rounded-[20px] border border-[#D6D4CE] bg-[#EAE8E2] sm:min-h-[400px] lg:col-span-7 lg:min-h-[440px]"
            >
              <motion.img
                src={mainPhoto.src}
                alt={mainPhoto.alt}
                initial={{ scale: 1.04 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B0D]/25 via-transparent to-transparent" />

              <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-[#3980FF]/20" />
            </motion.div>

            {/* FOUR CLICKABLE THUMBNAILS ON THE RIGHT */}

            <motion.div
              variants={cardsContainer}
              className="relative lg:col-span-5"
            >
              {/* Scroll area: same height as the large photo on desktop,
                  fixed max height on mobile. Add more images in `thumbs`. */}
              <div className="grid max-h-[420px] grid-cols-2 gap-4 overflow-y-auto pr-2 [scrollbar-color:#FF6268_transparent] [scrollbar-width:thin] lg:absolute lg:inset-0 lg:max-h-none lg:gap-5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#FF6268]/70 [&::-webkit-scrollbar-track]:bg-transparent">
              {thumbs.map((thumb, index) => (
                <motion.button
                  key={index}
                  type="button"
                  onClick={() => handleSwap(index)}
                  aria-label={`Show ${thumb.alt} as the main photo`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative min-h-[180px] overflow-hidden rounded-[18px] border-2 border-transparent bg-[#EAE8E2] text-left transition-all duration-300 hover:border-[#FF6268] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3980FF] focus-visible:ring-offset-2 sm:min-h-[190px] lg:min-h-[210px]"
                >
                  <motion.img
                    key={thumb.src}
                    src={thumb.src}
                    alt={thumb.alt}
                    loading="lazy"
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B0D]/20 to-transparent" />
                </motion.button>
              ))}
              </div>
            </motion.div>
          </motion.div>
        </section>        

        {/* BOTTOM ACCENT */}

        <motion.div
          variants={barsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="flex w-full items-center gap-2 bg-[#080B0D] px-6 py-4 sm:px-10 lg:px-[7%]"
        >
          <motion.div
            variants={bar}
            className="h-[4px] w-[48px] origin-left rounded-full bg-[#FF6268]"
          />

          <motion.div
            variants={bar}
            className="h-[4px] w-[32px] origin-left rounded-full bg-[#3980FF]"
          />

          <motion.div
            variants={bar}
            className="h-[4px] w-[22px] origin-left rounded-full bg-[#FFD21C]"
          />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

export default OurTeam;
