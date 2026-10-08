import React from "react";

const principles = [
  {
    title: "Culture before campaigns",
    text: "We study what people talk about, laugh at and share, then build ideas that belong in that conversation.",
    color: "#ff6969",
  },
  {
    title: "Strategy before noise",
    text: "Every post, pitch and project starts with a clear goal and a way to measure it.",
    color: "#2f6bff",
  },
  {
    title: "Trust over reach",
    text: "Views mean little if people don't believe you. We build reputation that holds up.",
    color: "#1fc66b",
  },
];

export default function Philosophy() {
  return (
    <section
      aria-labelledby="philosophy-title"
      className="w-full bg-[#0b0f10] px-6 py-20 text-white sm:px-10 sm:py-24 md:px-14 md:py-28 lg:py-[110px] xl:px-[60px]"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 xl:gap-[110px]">

        {/* ================= LEFT: HEADING ================= */}
        <div className="lg:sticky lg:top-[130px]">
          <div
            className="mb-6 text-[31px] font-normal leading-none tracking-[-0.02em] text-[#ffd21c] sm:text-[35px] md:text-[39px] lg:text-[40px] xl:text-[42px]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Our Philosophy
          </div>

          <h2
            id="philosophy-title"
            className="max-w-[580px] text-[44px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[55px] md:text-[62px] lg:text-[58px] xl:text-[64px]"
          >
            We don't chase attention.
            <br />
            We earn it.
          </h2>

          <p className="mt-7 max-w-[460px] text-[18px] leading-[1.5] tracking-[-0.01em] text-white/70 sm:text-[19px] md:text-[20px]">
            Brands, leaders and institutions come to us to stay relevant. Three
            beliefs shape every project we take on.
          </p>
        </div>

        {/* ================= RIGHT: PRINCIPLES ================= */}
        <ul className="m-0 list-none border-b border-white/[0.14] p-0">
          {principles.map((item) => (
            <li
              key={item.title}
              className="grid grid-cols-[12px_1fr] gap-6 border-t border-white/[0.14] py-7 sm:py-8"
            >
              <span
                aria-hidden="true"
                className="mt-1 h-11 w-2 -skew-x-12"
                style={{ backgroundColor: item.color }}
              />
              <div>
                <h3 className="mb-1.5 text-[24px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[28px]">
                  {item.title}
                </h3>
                <p className="max-w-[46ch] text-[17px] leading-[1.5] tracking-[-0.01em] text-white/[0.68] sm:text-[18px]">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}