import React from 'react';

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

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      
      {/* ==================== 1ST SECTION: HERO SECTION ==================== */}
      <section className="relative w-full py-16 md:py-24 px-6 md:px-16 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="space-y-6 z-10">
            <span className="bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
              We're Hiring
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Build the Future <br /> With <span className="text-red-500">Our Team</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We are constantly looking for passionate creators, strategists, and tech minds to join us in shaping impactful digital experiences.
            </p>
          </div>

          {/* Right Hero Image Space */}
          <div className="relative w-full h-[320px] md:h-[400px] bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 flex items-center justify-center shadow-2xl">
            {/* PUBLIC FOLDER IMAGE USAGE:
                public/images/hiring-hero.jpg me image save karke niche wali line uncomment karein */}
            <img 
              src="/images/aboutimg.jpg" 
              alt="Join Our Team" 
              className="w-full h-full object-cover" 
            />
          </div>

        </div>
      </section>

      {/* ==================== 2ND SECTION: WHY JOIN US ==================== */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-16 border-b border-gray-100">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Why Work With Us?
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            We provide an environment where your creativity thrives and your career grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Creative Freedom",
              desc: "Bring your boldest ideas to life without micromanagement.",
              icon: "🚀"
            },
            {
              title: "Rapid Growth",
              desc: "Work on high-impact projects with direct exposure to industry leaders.",
              icon: "📈"
            },
            {
              title: "Flexible Work",
              desc: "Enjoy hybrid/remote options designed for high productivity.",
              icon: "⚡"
            },
            {
              title: "Great Culture",
              desc: "A collaborative, inclusive, and fun team environment.",
              icon: "🤝"
            }
          ].map((perk, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-red-500/50 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">{perk.icon}</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{perk.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
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

    </div>
  );
};

export default Hiring;