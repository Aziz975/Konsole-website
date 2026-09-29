import React from 'react'

const Insights = () => {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
 
      {/* 1. Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-[8%] py-20 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]">
        <div className="max-w-xl">
          <span className="inline-block bg-[#FFD700] px-3 py-1 text-sm font-bold uppercase rounded">
            Ideas. Culture. Impact.
          </span>
 
          <h1 className="text-4xl md:text-5xl leading-tight my-5 text-[#111111] font-bold">
            Strategic Storytelling for a Louder Tomorrow
          </h1>
 
          <p className="text-lg text-gray-600 mb-8">
            We blend creativity, culture and strategy to help brands, leaders and
            institutions stay relevant, trusted and ahead.
          </p>
 
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-[#111111] text-white px-7 py-3 font-semibold rounded hover:bg-[#2a2a2a] transition-colors"
          >
            Explore Our Services
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
 
        <div className="w-full h-full">
          <img
            src="/images/visuals.png"
            alt="Konsole Group brand visual"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </section>
 
      {/* 2. Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-[8%] py-12 bg-[#111111] text-white text-center">
        <div>
          <h2 className="text-4xl text-[#FFD700] mb-1 font-bold">500+</h2>
          <p className="text-gray-300">Campaigns Executed</p>
        </div>
        <div>
          <h2 className="text-4xl text-[#FFD700] mb-1 font-bold">300+</h2>
          <p className="text-gray-300">Brands & Organizations</p>
        </div>
        <div>
          <h2 className="text-4xl text-[#FFD700] mb-1 font-bold">50M+</h2>
          <p className="text-gray-300">People Reached Across Platforms</p>
        </div>
      </section>
 
      {/* 3. About Us / Who We Are */}
      <section className="px-[8%] py-20 bg-[#f8f9fa] text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block bg-[#111111] text-[#FFD700] px-3 py-1 text-sm font-bold uppercase rounded">
            Who We Are
          </span>
 
          <h2 className="text-3xl md:text-4xl text-[#111111] my-4 font-bold">
            Strategy. Creativity. Real-World Impact.
          </h2>
 
          <p className="text-lg text-gray-600">
            Konsole Group is a full-service communication and reputation
            management agency. We help brands, organizations and leaders
            navigate the modern media landscape with creativity, insight and
            integrity. We don't just create campaigns, we build momentum.
          </p>
        </div>
      </section>
 
      {/* 4. Services Section */}
      <section id="services" className="px-[8%] py-20">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#111111] mb-4 font-bold">
            More Than Just Marketing
          </h2>
          <p className="text-gray-500">
            From viral moments to policy conversations, we craft communication
            that gets noticed, builds credibility and drives real impact.
          </p>
        </div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Meme & Moment Marketing',
              text: 'Trends, culture and timing turned into powerful brand moments.',
            },
            {
              title: 'Content Creation',
              text: 'Scroll-stopping content that informs, entertains and engages.',
            },
            {
              title: 'Influencer Partnerships',
              text: 'Real voices. Authentic stories. Stronger connections.',
            },
            {
              title: 'Video Production',
              text: 'From concept to cut, we bring your story to life.',
            },
            {
              title: 'Online Reputation Management',
              text: 'Protecting your brand in the digital age.',
            },
            {
              title: 'Political Intelligence',
              text: 'Insights that inform decisions and drive institutional success.',
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-[#F9F9F9] p-8 rounded-lg border-l-4 border-[#E50914]"
            >
              <h3 className="text-xl mb-2 text-[#111111] font-semibold">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm">{service.text}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* 5. Trusted By / Clients */}
      <section className="px-[8%] py-16 bg-[#fdfbfb]">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#111111] mb-4 font-bold">
            Trusted By Industry Leaders
          </h2>
          <p className="text-gray-500">
            Partnering with top brands, enterprises and public institutions.
          </p>
        </div>
 
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 text-center">
          {['SBI', 'TATA', 'Reliance', 'Apollo Tyres', 'ONGC', 'Deloitte & More'].map(
            (client) => (
              <div
                key={client}
                className="bg-white p-5 rounded-md border border-gray-200 font-bold text-gray-800 shadow-sm"
              >
                {client}
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}

export default Insights





