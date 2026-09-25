import React from "react";

const cards = [
  {
    number: "01",
    title: "Speed Wins Attention",
    description:
      "Internet culture changes every hour. Brands that react quickly become part of the conversation.",
    image: "/images/meme-icon-speed2.png",
    lineColor: "#ff4d57",
  },
  {
    number: "02",
    title: "Conversations Build Trust",
    description:
      "People share content that feels natural, fun and relatable.",
    image: "/images/meme-icon-conversation2.png",
    lineColor: "#ffd21c",
  },
  {
    number: "03",
    title: "Virality Creates Reach",
    description:
      "One smart moment can generate millions of impressions organically.",
    image: "/images/meme-icon-virality2.png",
    lineColor: "#20bfff",
  },
];

export default function MemeAndMarketing() {
  return (
    <main className="w-full bg-[#f8f7ef] text-[#111b23]">

      {/* ================= HERO ================= */}
      <section className="w-full border-b border-[#e6e4dc]">
        <div className="mx-auto grid min-h-[280px] max-w-[1200px] grid-cols-1 items-center px-6 py-8 md:grid-cols-[43%_57%] md:px-0 md:py-0">

          {/* LEFT CONTENT */}
          <div className="relative z-10">

            <p className="mb-[5px] text-[10px] font-bold uppercase tracking-[0.08em] text-[#ff4b52] sm:text-[11px]">
              MEME & MOMENT MARKETING
            </p>

            <h1 className="max-w-[420px] text-[31px] font-extrabold leading-[0.96] tracking-[-0.8px] text-[#111b23] sm:text-[35px]">
              Culture moves fast.
              <br />
              Your brand should
              <br />

              <span className="relative inline-block">
                move faster.
                <span className="absolute bottom-[-3px] left-0 h-[3px] w-full bg-[#ffd21c]" />
              </span>
            </h1>

            <div className="mt-[8px] flex flex-wrap items-center gap-x-[7px] text-[8px] font-bold uppercase tracking-[0.06em] text-[#273139] sm:text-[9px]">
              <span>MEMES</span>
              <span>•</span>
              <span>TRENDS</span>
              <span>•</span>
              <span>INTERNET CULTURE</span>
              <span>•</span>
              <span>REAL-TIME RELEVANCE</span>
            </div>

            <p className="mt-[11px] max-w-[400px] text-[10px] leading-[1.4] text-[#69727a] sm:text-[11px]">
              We turn trending moments into meaningful conversations.
              <br />
              From memes and pop culture to viral events and internet
              conversations,
              <br className="hidden lg:block" />
              we help brands participate naturally, creatively and at the right
              time.
            </p>

            <p className="mt-[2px] text-[10px] font-bold text-[#263038]">
              Because attention is earned — not bought.
            </p>

            <button className="mt-[13px] flex items-center gap-3 rounded-full bg-white px-[17px] py-[8px] text-[9px] font-bold text-[#151b20] shadow-[0_1px_5px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-[1px]">
              Let's Create Something Viral
              <span className="text-[13px] leading-none">→</span>
            </button>
          </div>

          {/* RIGHT HERO IMAGE */}
          <div className="relative flex h-[280px] items-center justify-center overflow-hidden md:justify-end">
            <img
              src="/images/meme-hero-visual2.png"
              alt=""
              className="h-full w-full object-contain object-right"
            />
          </div>
        </div>
      </section>


      {/* ================= WHY MEME MARKETING ================= */}
      <section className="w-full bg-[#f8f7ef]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-7 px-6 py-[22px] md:grid-cols-[275px_1fr] md:gap-[27px] md:px-0">

          {/* LEFT TEXT */}
          <div className="relative">

            <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#ff4b52]">
              WHY MEME MARKETING WORKS
            </p>

            <h2 className="mt-[5px] text-[25px] font-extrabold leading-[0.95] tracking-[-0.5px] text-[#111b23]">
              Real moments.
              <br />
              Real impact.
            </h2>

            <p className="mt-[12px] max-w-[225px] text-[10px] leading-[1.42] text-[#69727a]">
              Memes and moments aren't just funny —
              they're powerful. They create conversations,
              build trust and turn your brand into
              part of what people care about.
            </p>

            {/* SMALL DECORATION */}
            <div className="mt-[13px] flex items-center gap-[3px]">
              <span className="h-[7px] w-[2px] rotate-[35deg] rounded-full bg-[#111b23]" />
              <span className="h-[9px] w-[2px] rotate-[-35deg] rounded-full bg-[#111b23]" />
              <span className="h-[7px] w-[2px] rotate-[35deg] rounded-full bg-[#111b23]" />
              <span className="h-[9px] w-[2px] rotate-[-35deg] rounded-full bg-[#111b23]" />
            </div>
          </div>


          {/* CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

            {cards.map((card) => (
              <div
                key={card.number}
                className="min-h-[137px] rounded-[9px] border border-[#deded8] bg-[#fbfaf6] px-[23px] py-[10px]"
              >

                {/* ICON + NUMBER */}
                <div className="flex items-center gap-[13px]">

                  <div className="flex h-[43px] w-[43px] items-center justify-center overflow-hidden">
                    <img
                      src={card.image}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <span className="text-[9px] font-bold text-[#69727a]">
                    {card.number}
                  </span>
                </div>


                {/* TITLE */}
                <h3 className="mt-[5px] text-[14px] font-extrabold leading-[1.1] text-[#111b23]">
                  {card.title}
                </h3>


                {/* DESCRIPTION */}
                <p className="mt-[5px] max-w-[220px] text-[10px] leading-[1.35] text-[#69727a]">
                  {card.description}
                </p>


                {/* COLOR LINE */}
                <div
                  className="mt-[9px] h-[3px] w-[36px] rounded-full"
                  style={{ backgroundColor: card.lineColor }}
                />
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}