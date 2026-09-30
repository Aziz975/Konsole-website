import React from 'react';

const OurTeam = () => {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      
      {/* ==================== 1ST SECTION: HERO SECTION ==================== */}
      <section className="relative w-full py-16 md:py-24 px-6 md:px-16 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Meet Our <span className="text-red-500">Team</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We are digital thinkers, strategists, creators, and problem solvers working together to build incredible web experiences.
            </p>
          </div>

          {/* Right Hero Image Space */}
          <div className="relative w-full h-[320px] md:h-[420px] bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 flex items-center justify-center group shadow-2xl">
            {/* HERO IMAGE PLACEHOLDER - Un-comment below tag when image URL is ready */}
             <img src="/images/aboutimg.jpg" alt="Our Team Hero" className="w-full h-full object-cover" /> 
            
            {/* <div className="text-center p-6 text-gray-400 group-hover:text-gray-200 transition-colors">
              <svg className="w-16 h-16 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="font-semibold text-lg">Hero Team Image Space</p>
              <p className="text-xs text-gray-500 mt-1">Insert main group photo here</p>
            </div> */}
          </div>

        </div>
      </section>

      {/* ==================== 2ND SECTION: MANAGEMENT TEAM ==================== */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-16">
        
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
            Management Team
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            We are digital thinkers, strategists, and creators.
          </p>
        </div>

        {/* Grid Layout (Matching Image Design) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Big Featured Box (Founding Leadership) - Left Side */}
          <div className="lg:col-span-7 relative bg-gray-200 rounded-lg overflow-hidden border border-gray-300 min-h-[420px] lg:min-h-[500px] flex flex-col justify-end group">
            {/* LARGE LEADER IMAGE PLACEHOLDER */}
            <img src="/images/team-1.jpg" alt="Founding Leadership" className="absolute inset-0 w-full h-[500] object-cover grayscale hover:grayscale-0 transition-all duration-300" />
            
            {/* Placeholder Text
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
              <svg className="w-20 h-20 mb-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <p className="font-bold text-gray-600 text-xl">Founder / Main Leader Image Space</p>
            </div> */}

            {/* Bottom Overlay Label */}
            <div className="relative z-10 bg-black/90 text-white p-4">
              <h3 className="font-bold text-base md:text-lg leading-tight">Founding Leadership</h3>
              <p className="text-xs text-yellow-500 tracking-wider uppercase font-semibold">Strategic Direction & Growth</p>
            </div>
          </div>

         {/* 4 Grid Boxes - Right Side */}
<div className="lg:col-span-5 grid grid-cols-2 gap-4">
  {[
    {  imgSrc: "/images/team-2.jpg" },
    {  imgSrc: "/images/team-3.jpg" },
    {  imgSrc: "/images/team-4.jpg" },
    { imgSrc: "/images/team-5.jpg" },
  ].map((member, index) => (
    <div 
      key={index} 
      className="relative bg-gray-200 rounded-lg overflow-hidden border border-gray-300 min-h-[200px] lg:min-h-[240px] flex flex-col justify-end group"
    >
      {/* Public folder se Image */}
      <img 
        src={member.imgSrc} 
        alt={member.role} 
        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
      />

      {/* Hover Info Overlay
      <div className="relative z-10 bg-black/80 text-white p-2.5 opacity-90 group-hover:opacity-100 transition-opacity">
        <p className="font-semibold text-xs">{member.role}</p>
        <p className="text-[10px] text-gray-300">{member.title}</p>
      </div> */}
    </div>
  ))}
</div>

        </div>
      </section>

    </div>
  );
};

export default OurTeam;