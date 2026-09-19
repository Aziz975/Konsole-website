import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const workItems = [
  {
    title: "Political Awareness Campaign",
    category: "Political Intelligence",
    image: "images/real_voices.png",
  },
  {
    title: "March Campaign for a Lifestyle Brand",
    category: "Market & Moment Marketing",
    image: "images/change_cat.png",
  },
  {
    title: "Brand Film for a Public Institution",
    category: "Video Production",
    image: "images/camera_stage.png",
  },
  {
    title: "Influencer-Led Social Drive",
    category: "Influencer Partnerships",
    image: "images/stand_for_change.png",
  },
];

export default function OurWork() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mt-10 mb-15 w-full bg-[#0b0f10] px-5 py-14 text-white sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-6 lg:py-[42px] xl:px-[23px]">

      <div className="mx-auto max-w-[1440px]">

        {/* ================= HEADER ================= */}
        <div className="mb-9 flex flex-col justify-between gap-7 sm:mb-10 md:mb-12 lg:flex-row lg:items-start lg:gap-10">

          {/* Left heading */}
          <div>

            {/* Small heading */}
            <div
              className={`mb-3 text-[31px] font-normal leading-none tracking-[-0.02em] text-white sm:text-[34px] md:text-[38px] lg:text-[39px] xl:text-[41px] ${visible ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards]" : "translate-y-12 opacity-0"}`}
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Our Work
            </div>

            {/* Main heading */}
            <h2
              className={`max-w-[550px] text-[43px] font-bold leading-[0.98] tracking-[-0.05em] sm:text-[50px] md:text-[56px] lg:text-[52px] xl:text-[57px] ${visible ? "animate-[fadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.12s_forwards]" : "translate-y-14 opacity-0"}`}
            >
              Campaigns That
              <br />
              Made an Impact
            </h2>

          </div>

          {/* View all */}
          <a
            href="#"
            className={`group mt-1 inline-flex w-fit items-center gap-5 border-b border-white/80 pb-1 text-[16px] font-medium text-white transition-all duration-300 hover:gap-7 lg:mt-[55px] xl:mr-[4px] ${visible ? "animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.25s_forwards]" : "translate-y-12 opacity-0"}`}
          >
            <span>View All Work</span>

            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2}
            />
          </a>

        </div>

        {/* ================= WORK CARDS ================= */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-[26px] xl:gap-x-[26px]">

          {workItems.map((item, index) => (
            <article
              key={index}
              style={{ animationDelay: `${0.35 + index * 0.12}s` }}
              className={`group min-w-0 ${visible ? "animate-[fadeUp_0.85s_cubic-bezier(0.22,1,0.36,1)_forwards]" : "translate-y-16 opacity-0"}`}
            >

              {/* Image */}
              <div className="relative aspect-[1.08/1] w-full overflow-hidden rounded-[8px] bg-[#1a1f20] sm:aspect-[1.05/1] lg:aspect-[1.08/1]">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />

              </div>

              {/* Card text */}
              <div className="pt-4">

                <h3 className="text-[17px] font-bold leading-[1.15] tracking-[-0.025em] text-white sm:text-[18px] lg:text-[17px] xl:text-[18px]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[15px] font-normal leading-[1.3] tracking-[-0.01em] text-[#b8babb] sm:text-[16px] lg:text-[15px] xl:text-[16px]">
                  {item.category}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}