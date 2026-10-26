import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Newspaper, Gift, Globe2 } from 'lucide-react';


const companies = [
  {
    name: 'Newzo',
    logo: '/images/company1.jpeg',
    url: 'https://newzo.in/s/index.php',
    description:
      'A reward-based news platform delivering the latest updates and breaking news. Users stay informed while earning through our unique "Share and Earn" model.',
    tag: 'News & Rewards',
    chips: ['Breaking News', 'Share and Earn'],
    accent: '#FACC15', 
    icon: Newspaper,
  },
  {
    name: 'Gift Kya De',
    logo: '/images/company2.jpeg',
    url: 'https://www.gkdindia.com/',
    description:
      'An eco-friendly gift manufacturing company specializing in premium, sustainable products. We have a strong retail presence across Amazon India, Amazon US, and Blinkit.',
    tag: 'Eco-Friendly Gifting',
    chips: ['Amazon India', 'Amazon US', 'Blinkit'],
    accent: '#EF4444', 
    icon: Gift,
  },
  {
    name: 'Vayam Bharat',
    logo: '/images/company3.jpeg',
    url: 'https://vayambharat.com/',
    description:
      "A comprehensive Hindi news portal covering national updates across all segments. We deliver authentic, fast-paced journalism rooted in India's rich civilizational values.",
    tag: 'Hindi News Portal',
    chips: ['National Updates', 'Hindi'],
    accent: '#38BDF8',
    icon: Globe2,
  },
];

/* Fades up once when scrolled into view */
function Reveal({ children, className = '', delay = '0s' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} reveal ${visible ? 'is-visible' : ''}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}

/* Logo tile with a graceful fallback */
function LogoTile({ company }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-3xl border-2 border-neutral-900 shadow-[5px_5px_0px_#171717] flex items-center justify-center p-4 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
      {failed ? (
        <span
          className="w-full h-full rounded-2xl flex items-center justify-center text-4xl font-extrabold text-neutral-900"
          style={{ backgroundColor: company.accent }}
        >
          {company.name.charAt(0)}
        </span>
      ) : (
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          className="max-w-full max-h-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function OurGroupCompanies() {
  return (
    <div className="bg-[#F6F3EE] text-neutral-900 antialiased font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap');
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(28px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes floaty {
          0%, 100% { transform: translateY(0) rotate(-4deg); }
          50% { transform: translateY(-8px) rotate(-4deg); }
        }
        .reveal { opacity: 0; }
        .reveal.is-visible { animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hand { font-family: 'Caveat', cursive; }
        .floaty { animation: floaty 4s ease-in-out infinite; }
      `}</style>

      {/* ---------- Header ---------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-8">
            <p className="text-red-500 font-semibold text-sm tracking-wide mb-4">Our Companies</p>
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              One group.
              <br />
              Many brands, one vision.
            </h1>
            <div className="mt-5 h-1.5 w-24 bg-yellow-400 rounded-full" />
            <p className="mt-8 text-neutral-600 text-lg leading-relaxed max-w-2xl">
              From news that rewards its readers to gifts that respect the planet, the Konsole Group family
              builds products people use every day.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-4 hidden lg:flex justify-end" delay="0.2s">
            <span className="hand floaty text-yellow-500 text-4xl leading-none text-right">
              Built in Bharat.
              <br />
              Built to last.
            </span>
          </Reveal>
        </div>
      </section>

      {/* ---------- Company cards (same row on large screens) ---------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {companies.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.name} delay={`${i * 0.12}s`} className="h-full">
                <article className="group h-full bg-white rounded-3xl border border-neutral-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_50px_rgba(0,0,0,0.14)] hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col">
                  {/* colored band with logo */}
                  <div
                    className="relative h-40 flex items-end px-7"
                    style={{ backgroundColor: c.accent }}
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          'repeating-linear-gradient(115deg, #000 0 2px, transparent 2px 22px)',
                      }}
                    />
                    <span className="absolute top-5 right-5 w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Icon size={18} />
                    </span>
                    <div className="relative translate-y-1/2">
                      <LogoTile company={c} />
                    </div>
                  </div>
                  {/* body */}
                  <div className="pt-20 px-7 pb-8 flex flex-col flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-red-500 mb-2">
                      {c.tag}
                    </p>
                    <h2 className="font-extrabold text-3xl tracking-tight mb-3">{c.name}</h2>
                    <p className="text-neutral-600 leading-relaxed">{c.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {c.chips.map((chip) => (
                        <span
                          key={chip}
                          className="px-3 py-1 rounded-full bg-[#F6F3EE] border border-neutral-200 text-xs font-semibold text-neutral-700"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-8">
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-neutral-950 text-white px-6 py-3.5 text-sm font-semibold hover:bg-red-500 hover:scale-[1.03] transition-all duration-300 shadow-lg"
                      >
                        <span>Visit Website</span>
                        <ArrowUpRight
                          size={18}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}