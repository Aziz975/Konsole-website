import React from "react";

export default function Introduction() {
  return (
    <section className="w-full bg-white px-0 py-0 font-['Arial',sans-serif] text-black">
      <div className="w-full h-[400px] max-w-[1500px] mx-auto">

        {/* Heading */}
        <div className="px-0 pt-[15px]">
          

          <h1 className="text-[27px] font-extrabold leading-[1.05] tracking-[-1.2px] text-[#111111]">
            We are a full-service digital agency.
          </h1>

          {/* Yellow Quote Strip */}
          <div className="mt-[25px] mb-[15px] flex h-[20px] w-full items-center bg-[#ffc800] px-[8px]">
            <p className="text-[15px] font-bold italic leading-none text-black">
              "Better conversations. Bigger impact."
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-[1fr_226px]">

          {/* Left Content */}
          <div className="border-r border-[#dddddd] px-0 pb-[25px] pt-[10px]">

            <p className="pr-[11px] mt-25px text-[17px] font-normal leading-[1.42] text-[#161616]">
              The journey of <span className="font-bold">Konsole</span> started
              in 2008 when four young engineers came together to chase their
              dream. Their vision led them to create one of the most brilliant
              startups in the region, redefining digital strategy from the
              ground up.
              <br />
            </p>

            <p className="mt-[9px] pr-[11px] text-[17px] font-normal leading-[1.42] text-[#161616]">
              Earlier, when Central India had to look towards other states for
              such marketing solutions, this very necessity laid the foundation
              of Konsole. We flagged off as an IT service-providing company
              offering bulk SMS and voice calls, pioneering digital
              communications in the region.
            </p>

            <p className="mt-[9px] pr-[11px] text-[17px] font-normal leading-[1.42] text-[#161616]">
              Over the years, Konsole became the largest company of its type with
              the addition of digital marketing, SMO, SEO, and email marketing
              services. By late 2010, Konsole Group launched its dedicated
              Creative Advertising Agency,{" "}
              <span className="font-bold">Cubes Media & Branding Pvt. Ltd.</span>
            </p>

            <p className="mt-[9px] pr-[11px] text-[17px] font-normal leading-[1.42] text-[#161616]">
              Noticing the rapid expansion of real estate in Chhattisgarh, we
              also launched the 1st Hindi Real Estate Magazine,{" "}
              <span className="italic">
                Meri Property
              </span>
              , in Central India.
            </p>

            {/* Social Responsibility Box */}
            <div className="mr-[11px] mt-[9px] border-[2px] border-dashed border-[#ffc800] px-[9px] pb-[9px] pt-[7px]">

             

              <p className="mt-[5px] text-[9.5px] font-normal leading-[1.4] text-[#202020]">
                We actively contribute to the social and economic development
                of our community through the Vidvaan Welfare Society. Vidvaan
                envisages a society wherein no child is left behind owing to a
                lack of information or access to proper guidance to pursue their
                career and life goals.
              </p>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative min-h-[500px] overflow-hidden">
            <img
              src=""
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}