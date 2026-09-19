import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Meme & Moment Marketing",
    text: "Trends, culture and timing turned into powerful brand moments.",
    src: "images/icon_meme.png",
    alt: "Meme & Moment Marketing",
  },
  {
    title: "Content Creation",
    text: "Scroll-stopping content that informs, entertains and engages.",
    src: "images/icon_content.png",
    alt: "Content Creation",
  },
  {
    title: "Influencer Partnerships",
    text: "Real voices. Authentic stories. Stronger connections.",
    src: "images/icon_influencer.png",
    alt: "Influencer Partnerships",
  },
  {
    title: "Video Production",
    text: "From concept to cut, we bring your story to life.",
    src: "images/icon_video.png",
    alt: "Video Production",
  },
  {
    title: "Online Reputation Management (ORM)",
    text: "Protecting your brand in the digital age.",
    src: "images/icon_online.png",
    alt: "Online Reputation Management",
  },
  {
    title: "Digital PR & Media Outreach",
    text: "Strategic stories. Wider reach. Greater impact.",
    src: "images/icon_digital.png",
    alt: "Digital PR & Media Outreach",
  },
  {
    title: "Political Intelligence",
    text: "Insights that inform decisions.",
    src: "images/icon_political.png",
    alt: "Political Intelligence",
  },
  {
    title: "Government Communication Projects",
    text: "Building bridges between institutions and people.",
    src: "images/icon_government.png",
    alt: "Government Communication Projects",
  },
];

export default function ServicesGrid() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full overflow-hidden bg-[#faf9f6] px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-12 lg:py-14 xl:px-16">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

        {services.map((service, index) => (
          <div
            key={service.title}
            style={{ animationDelay: `${index * 0.1}s` }}
            className={`group relative min-h-[290px] overflow-hidden border-[#dcdedb] bg-transparent px-7 py-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:bg-white hover:shadow-[0_18px_50px_rgba(25,205,181,0.16)] sm:px-8 sm:py-9 lg:min-h-[295px] lg:px-7 lg:py-8 xl:px-8 ${index < 4 ? "border-b" : ""} ${index % 4 !== 3 ? "lg:border-r" : ""} ${index % 2 !== 1 ? "md:border-r" : ""} ${visible ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards]" : "translate-y-14 opacity-0"}`}
          >

            {/* Top glowing line */}
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#19cdb5] shadow-[0_0_0px_#19cdb5] transition-all duration-700 ease-out group-hover:w-full group-hover:shadow-[0_0_10px_#19cdb5,0_0_25px_rgba(25,205,181,0.8)]" />

            {/* Bottom glowing line */}
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#19cdb5] shadow-[0_0_0px_#19cdb5] transition-all duration-700 ease-out group-hover:w-full group-hover:shadow-[0_0_10px_#19cdb5,0_0_25px_rgba(25,205,181,0.8)]" />

            {/* Background glow */}
            <span className="pointer-events-none absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#19cdb5] opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-[0.12]" />

            {/* Icon */}
            <div className="relative z-10 mb-8 flex h-[58px] w-[68px] items-center">
              <img
                src={service.src}
                alt={service.alt}
                className="max-h-[58px] w-auto max-w-[68px] object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:drop-shadow-[0_0_8px_rgba(25,205,181,0.45)]"
              />
            </div>

            {/* Title */}
            <h3 className="relative z-10 max-w-[235px] text-[19px] font-bold leading-[1.2] tracking-[-0.02em] text-[#111820] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#08766d] sm:text-[20px] lg:text-[19px] xl:text-[20px]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 mt-7 max-w-[240px] text-[16px] font-normal leading-[1.55] text-[#202830] transition-all duration-300 group-hover:translate-x-1 sm:text-[17px] lg:text-[16px]">
              {service.text}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}