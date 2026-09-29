import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function GovernmentProjects() {
  return (
    <div className="bg-white text-neutral-900 font-sans antialiased overflow-x-hidden">

      {/* ================= SECTION 1: Government Communication Projects ================= */}
      <section className=" bg-[#FAFAF5] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="italic text-neutral-600 font-serif text-lg">Our Services</span>
              <h2 className="font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
                Government Communication <br />
                <span className="text-amber-500 underline decoration-red-500 decoration-wavy">Projects</span>
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                We support communication initiatives that help institutions present information clearly, engage stakeholders and strengthen communication between institutions and the public.
              </p>
              <div className="pt-2">
                <button className="inline-flex items-center gap-3 px-6 py-3.5 bg-neutral-950 text-white font-semibold text-sm rounded-full hover:bg-neutral-800 transition-all shadow-md">
                  <span>Explore Government Communication</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Image Container (Space Reserved) */}
            <div className="lg:col-span-7">
              <div className="relative w-full  overflow-hidden">
                <img
                  src="/images/image4.jpeg"
                  alt="Government Communication Banner"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: Communication for a Stronger Society ================= */}
      <section className="py-16 md:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Image Container (Space Reserved) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative w-full overflow-hidden">
                <img
                  src="/images/image7.jpeg"
                  alt="Communication for Stronger Society"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="italic text-neutral-600 font-serif text-lg">What We Do</span>
              <h2 className="font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight">
                Communication for a <span className="text-amber-500">Stronger Society</span>
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                We design and execute strategic communication projects for government institutions, public sector organizations and civic initiatives to create awareness, inform citizens and drive meaningful engagement.
              </p>

              {/* Checkmark List */}
              <ul className="space-y-3 pt-2">
                {[
                  "Communication strategy & campaign planning",
                  "Public awareness initiatives",
                  "Stakeholder engagement programs",
                  "Multimedia content creation (digital, print, video)",
                  "Event communication support",
                  "Monitoring, reporting and impact assessment"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm font-medium text-neutral-800">
                    <CheckCircle2 className="w-5 h-5 text-neutral-900 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <button className="inline-flex items-center gap-3 px-6 py-3.5 bg-neutral-950 text-white font-semibold text-sm rounded-full hover:bg-neutral-800 transition-all shadow-md">
                  <span>Let's Work Together</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: Project Examples & Bottom Banner ================= */}
      <section className="py-16 md:py-24 bg-[#FAFAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Top Heading */}
          <div className="space-y-2">
            <span className="italic text-neutral-600 font-serif text-base">Project Examples</span>
            <h2 className="font-extrabold text-3xl sm:text-4xl tracking-tight">
              Government Communication in Action
            </h2>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white border-2 border-neutral-900 rounded-2xl p-4 shadow-[6px_6px_0px_#FFB900] flex flex-col justify-between space-y-4">
              <div className="w-full aspect-video bg-neutral-100 rounded-lg overflow-hidden border border-neutral-300">
                <img src="/images/image8.jpeg" alt="Citizen Engagement Program" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Public Awareness Campaign</h3>
                <p className="text-neutral-600 text-xs sm:text-sm">Multi-platform campaign to educate citizens on key government initiatives.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-2 border-neutral-900 rounded-2xl p-4 shadow-[6px_6px_0px_#FFB900] flex flex-col justify-between space-y-4">
              <div className="w-full aspect-video bg-neutral-100 rounded-lg overflow-hidden border border-neutral-300">
                <img src="/images/image9.png" alt="Citizen Engagement Program" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Citizen Engagement Program</h3>
                <p className="text-neutral-600 text-xs sm:text-sm">On-ground and digital engagement to increase participation and awareness.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-2 border-neutral-900 rounded-2xl p-4 shadow-[6px_6px_0px_#FFB900] flex flex-col justify-between space-y-4">
              <div className="w-full aspect-video bg-neutral-100 rounded-lg overflow-hidden border border-neutral-300">
                <img src="/images/image10.png" alt="Citizen Engagement Program" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Information Campaign Videos</h3>
                <p className="text-neutral-600 text-xs sm:text-sm">Engaging video content to explain policies and services in a simple way.</p>
              </div>
            </div>

          </div>

          {/* Bottom Yellow Banner */}
          <div className="relative bg-amber-400 border-2 border-neutral-900 rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_#000] flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
            <div className="space-y-3 max-w-xl z-10">
              <h2 className="font-extrabold text-2xl sm:text-4xl text-neutral-900 tracking-tight">
                Let's Create Meaningful Impact Together
              </h2>
              <p className="text-neutral-800 text-sm sm:text-base">
                Partner with us to build communication that informs, engages and strengthens our communities.
              </p>
            </div>
            <div className="z-10 flex-shrink-0">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-950 text-white font-bold text-sm rounded-full hover:bg-neutral-800 transition-all shadow-lg">
                <span>Start a Conversation</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}