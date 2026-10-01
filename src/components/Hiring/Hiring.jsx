// import React from 'react';

// const Hiring = () => {
// //   const jobOpenings = [
// //     {
// //       title: "Senior React Developer",
// //       department: "Engineering",
// //       location: "Remote / On-site",
// //       type: "Full-Time",
// //     },
// //     {
// //       title: "UI/UX Designer",
// //       department: "Design",
// //       location: "On-site",
// //       type: "Full-Time",
// //     },
// //     {
// //       title: "Content & Meme Strategist",
// //       department: "Marketing",
// //       location: "Hybrid",
// //       type: "Full-Time",
// //     },
// //     {
// //       title: "Video Editor & Motion Designer",
// //       department: "Media Production",
// //       location: "On-site",
// //       type: "Full-Time",
// //     },
// //   ];

//   return (
//     <div className="bg-white text-gray-900 font-sans min-h-screen">
      
//       {/* ==================== 1ST SECTION: HERO SECTION ==================== */}
//       <section className="relative w-full py-16 md:py-24 px-6 md:px-16 bg-gray-900 text-white overflow-hidden">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left Text Content */}
//           <div className="space-y-6 z-10">
//             <span className="bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
//               We're Hiring
//             </span>
//             <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
//               Build the Future <br /> With <span className="text-red-500">Our Team</span>
//             </h1>
//             <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
//               We are constantly looking for passionate creators, strategists, and tech minds to join us in shaping impactful digital experiences.
//             </p>
//           </div>

//           {/* Right Hero Image Space */}
//           <div className="relative w-full h-[320px] md:h-[400px] bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 flex items-center justify-center shadow-2xl">
//             {/* PUBLIC FOLDER IMAGE USAGE:
//                 public/images/hiring-hero.jpg me image save karke niche wali line uncomment karein */}
//             <img 
//               src="/images/aboutimg.jpg" 
//               alt="Join Our Team" 
//               className="w-full h-full object-cover" 
//             />
//           </div>

//         </div>
//       </section>

//       {/* ==================== 2ND SECTION: WHY JOIN US ==================== */}
//       <section className="max-w-7xl mx-auto py-16 px-6 md:px-16 border-b border-gray-100">
//         <div className="text-center max-w-2xl mx-auto mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
//             Why Work With Us?
//           </h2>
//           <p className="text-gray-600 mt-2 text-sm md:text-base">
//             We provide an environment where your creativity thrives and your career grows.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             {
//               title: "Creative Freedom",
//               desc: "Bring your boldest ideas to life without micromanagement.",
//               icon: "🚀"
//             },
//             {
//               title: "Rapid Growth",
//               desc: "Work on high-impact projects with direct exposure to industry leaders.",
//               icon: "📈"
//             },
//             {
//               title: "Flexible Work",
//               desc: "Enjoy hybrid/remote options designed for high productivity.",
//               icon: "⚡"
//             },
//             {
//               title: "Great Culture",
//               desc: "A collaborative, inclusive, and fun team environment.",
//               icon: "🤝"
//             }
//           ].map((perk, index) => (
//             <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-red-500/50 hover:shadow-lg transition-all duration-300">
//               <div className="text-3xl mb-3">{perk.icon}</div>
//               <h3 className="font-bold text-lg text-gray-900 mb-2">{perk.title}</h3>
//               <p className="text-gray-600 text-sm leading-relaxed">{perk.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ==================== 3RD SECTION: OPEN POSITIONS ==================== */}
//       <section className="max-w-7xl mx-auto py-16 px-6 md:px-16">
//         {/* <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
//               Open Positions
//             </h2>
//             <p className="text-gray-600 mt-2 text-sm md:text-base">
//               Explore current job opportunities and find your fit.
//             </p>
//           </div>
//         </div> */}

//         {/* Job Listings Grid */}
//         {/* <div className="grid grid-cols-1 gap-4">
//           {jobOpenings.map((job, idx) => (
//             <div 
//               key={idx}
//               className="p-6 bg-white border border-gray-200 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-gray-400 hover:shadow-md transition-all duration-200"
//             >
//               <div>
//                 <span className="text-xs font-semibold uppercase text-red-500 tracking-wider">
//                   {job.department}
//                 </span>
//                 <h3 className="text-xl font-bold text-gray-900 mt-1">
//                   {job.title}
//                 </h3>
//                 <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
//                   <span>📍 {job.location}</span>
//                   <span>•</span>
//                   <span>⏳ {job.type}</span>
//                 </div>
//               </div>

//               <div>
//                 <a 
//                   href="mailto:careers@example.com" 
//                   className="inline-block bg-gray-900 hover:bg-red-600 text-white font-medium text-sm px-6 py-2.5 rounded-lg transition-colors duration-200"
//                 >
//                   Apply Now
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div> */}
//       </section>

//     </div>
//   );
// };

// export default Hiring;





import React from "react";
import { motion } from "motion/react";
 
const Hiring = () => {
  //   const jobOpenings = [
  //     {
  //       title: "Senior React Developer",
  //       department: "Engineering",
  //       location: "Remote / On-site",
  //       type: "Full-Time",
  //     },
  //     {
  //       title: "UI/UX Designer",
  //       department: "Design",
  //       location: "On-site",
  //       type: "Full-Time",
  //     },
  //     {
  //       title: "Content & Meme Strategist",
  //       department: "Marketing",
  //       location: "Hybrid",
  //       type: "Full-Time",
  //     },
  //     {
  //       title: "Video Editor & Motion Designer",
  //       department: "Media Production",
  //       location: "On-site",
  //       type: "Full-Time",
  //     },
  //   ];
 
  const perks = [
    {
      title: "Creative Freedom",
      desc: "Bring your boldest ideas to life without micromanagement.",
      icon: "🚀",
    },
    {
      title: "Rapid Growth",
      desc: "Work on high-impact projects with direct exposure to industry leaders.",
      icon: "📈",
    },
    {
      title: "Flexible Work",
      desc: "Enjoy hybrid/remote options designed for high productivity.",
      icon: "⚡",
    },
    {
      title: "Great Culture",
      desc: "A collaborative, inclusive, and fun team environment.",
      icon: "🤝",
    },
  ];
 
  /* =========================================================
     ANIMATION VARIANTS (same as OurTeam)
  ========================================================= */
 
  const heroTextContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };
 
  const heroTextItem = {
    hidden: {
      opacity: 0,
      y: 45,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
 
  const sectionReveal = {
    hidden: {
      opacity: 0,
      y: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
 
  const cardsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };
 
  const cardReveal = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
 
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen overflow-hidden">
      {/* ==================== 1ST SECTION: HERO SECTION ==================== */}
      <section className="relative w-full py-16 md:py-24 px-6 md:px-16 bg-gray-900 text-white overflow-hidden">
        {/* ================= BACKGROUND ANIMATION ================= */}
 
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#ff4d57]/10 blur-[120px]"
        />
 
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
          className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#22b5e8]/5 blur-[130px]"
        />
 
        {/* Moving Glow */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-[40%] top-[20%] h-[180px] w-[180px] rounded-full bg-[#ff4d57]/10 blur-[100px]"
        />
 
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ================= LEFT TEXT CONTENT ================= */}
          <motion.div
            variants={heroTextContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6 z-10"
          >
            <motion.span
              variants={heroTextItem}
              className="inline-block bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
            >
              We're Hiring
            </motion.span>
 
            <motion.h1
              variants={heroTextItem}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              Build the Future <br /> With{" "}
              <motion.span
                initial={{ color: "#ff4d57" }}
                animate={{ color: ["#ff4d57", "#ff6871", "#ff4d57"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Our Team
              </motion.span>
            </motion.h1>
 
            {/* Red Accent Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 118, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-[5px] rounded-full bg-[#ff4d57]"
            />
 
            <motion.p
              variants={heroTextItem}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              We are constantly looking for passionate creators, strategists,
              and tech minds to join us in shaping impactful digital
              experiences.
            </motion.p>
          </motion.div>
 
          {/* ================= RIGHT HERO IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6, scale: 1.015 }}
            className="group relative w-full h-[320px] md:h-[400px] bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 flex items-center justify-center shadow-2xl"
          >
            <motion.img
              src="/images/aboutimg.jpg"
              alt="Join Our Team"
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
 
            {/* Dark Gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b0d]/65 via-transparent to-transparent" />
 
            {/* Blue Glow */}
            <motion.div
              animate={{ opacity: [0.1, 0.22, 0.1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#22b5e8]/20 blur-[70px]"
            />
 
            {/* Shine Animation */}
            <motion.div
              initial={{ x: "-150%" }}
              animate={{ x: "150%" }}
              transition={{
                duration: 1.4,
                delay: 0.7,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 left-0 w-[35%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent"
            />
 
            {/* Floating Border */}
            <motion.div
              animate={{ opacity: [0.15, 0.4, 0.15] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-0 rounded-2xl border border-[#ff4d57]/30"
            />
          </motion.div>
        </div>
      </section>
 
      {/* ==================== 2ND SECTION: WHY JOIN US ==================== */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-16 border-b border-gray-100">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            Why Work With Us?
          </motion.h2>
 
          {/* Accent */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 118 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-4 h-[5px] rounded-full bg-[#ff4d57]"
          />
 
          <motion.p
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-gray-600 mt-4 text-sm md:text-base"
          >
            We provide an environment where your creativity thrives and your
            career grows.
          </motion.p>
        </div>
 
        <motion.div
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              variants={cardReveal}
              whileHover={{
                y: -7,
                scale: 1.025,
                transition: { duration: 0.35, ease: "easeOut" },
              }}
              className="group relative overflow-hidden p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#22b5e8]/70 hover:shadow-lg transition-colors duration-300"
            >
              {/* Blue Hover Glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="pointer-events-none absolute -right-10 -top-10 h-[120px] w-[120px] rounded-full bg-[#22b5e8]/20 blur-[45px]"
              />
 
              <div className="relative text-3xl mb-3">{perk.icon}</div>
              <h3 className="relative font-bold text-lg text-gray-900 mb-2">
                {perk.title}
              </h3>
              <p className="relative text-gray-600 text-sm leading-relaxed">
                {perk.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
 
      {/* ==================== 3RD SECTION: OPEN POSITIONS ==================== */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-16">
        {/* <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Open Positions
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Explore current job opportunities and find your fit.
            </p>
          </div>
        </div> */}
 
        {/* Job Listings Grid */}
        {/* <div className="grid grid-cols-1 gap-4">
          {jobOpenings.map((job, idx) => (
            <div 
              key={idx}
              className="p-6 bg-white border border-gray-200 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-gray-400 hover:shadow-md transition-all duration-200"
            >
              <div>
                <span className="text-xs font-semibold uppercase text-red-500 tracking-wider">
                  {job.department}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">
                  {job.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                  <span>📍 {job.location}</span>
                  <span>•</span>
                  <span>⏳ {job.type}</span>
                </div>
              </div>
 
              <div>
                <a 
                  href="mailto:careers@example.com" 
                  className="inline-block bg-gray-900 hover:bg-red-600 text-white font-medium text-sm px-6 py-2.5 rounded-lg transition-colors duration-200"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div> */}
      </section>
 
      {/* ==================== BOTTOM VISUAL ACCENT ==================== */}
      <div className="flex w-full items-center gap-3 bg-[#080b0d] px-6 py-4 md:px-16">
        <div className="h-[5px] w-[55px] rounded-full bg-[#ff4d57]" />
        <div className="h-[5px] w-[35px] rounded-full bg-[#22b5e8]" />
        <div className="h-[5px] w-[25px] rounded-full bg-[#ffd21c]" />
      </div>
    </div>
  );
};
 
export default Hiring;
 