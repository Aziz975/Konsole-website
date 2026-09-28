import React from 'react';
import {
  Search,
  Users,
  TrendingUp,
  Share2,
  Scale,
  FileText,
  Lightbulb,
  PenTool,
  Target,
  ArrowRight,
  ArrowUpRight,
  Quote,
  MessageCircle,
  Landmark,
  ClipboardList,
  UserCheck,
} from 'lucide-react';

const PoliticalIntelligence = () => {
  return (
    <div className="bg-[#F7F5EF] text-[#121212] font-sans">
      {/* ================= 1. HERO ================= */}
      <section className="px-[4%] py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr_190px] gap-8 items-center">
          {/* Left text */}
          <div>
            <span className="text-sm font-bold tracking-wide text-[#E4483A]">
              Political Intelligence
            </span>
            <h1 className="text-[50px] font-bold md:text-[2.6rem] leading-[0.96] sm:text-[58px] md:text-[50px] lg:text-[70px] xl:text-[60px]">
              Deeper insights.
              <br />
              Smarter decisions.
            </h1>
            <span className="inline-block w-24 h-1.5 bg-[#F5C518] mt-3 rounded-full" />
            <p className="text-gray-600 mt-5 max-w-sm">
              We decode the political landscape, track public sentiment, and
              turn complex information into clear, actionable insights for
              better strategy and stronger outcomes.
            </p>
            <a
              href="#approach"
              className="inline-flex items-center gap-2 bg-[#121212] text-white px-6 py-3 rounded-full font-semibold mt-7"
            >
              Explore Our Approach
              <ArrowRight size={16} />
            </a>
          </div>
 
          {/* Center: main collage image — PLACEHOLDER */}
          <div className="w-full rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src="/images/image3.jpeg"
              alt="Political intelligence hero visual — parliament building with magnifying glass and doodle accents"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
 
          {/* Right: floating badges */}
          <div className="hidden lg:flex flex-col gap-2">
            {[
              { icon: Scale, label: 'Policy Changes', bg: 'bg-[#E4483A]' },
              { icon: Users, label: 'Public Sentiment', bg: 'bg-[#F5C518]' },
              { icon: Share2, label: 'Electoral Trends', bg: 'bg-[#3BA7DB]' },
              { icon: Target, label: 'Stakeholder Mapping', bg: 'bg-[#121212]' },
            ].map(({ icon: Icon, label, bg }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white rounded-lg pl-2 pr-3 py-1.5 shadow-[3px_3px_0_rgba(0,0,0,0.08)] border border-black/5"
              >
                <span className={`${bg} text-white rounded-md p-1.5 shrink-0`}>
                  <Icon size={13} />
                </span>
                <span className="text-xs font-semibold whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ================= 2. WHY IT MATTERS ================= */}
      <section className="px-[4%] py-14 bg-[#F1EFE7]">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          <div>
            <span className="text-sm font-bold tracking-wide text-[#E4483A]">
              Why Political Intelligence Matters
            </span>
            <h2 className="text-3xl font-extrabold mt-3 leading-tight">
              Understand today.
              <br />
              Prepare for tomorrow.
            </h2>
            <p className="text-gray-600 mt-4 text-sm">
              From elections to policy shifts, every move in the political
              sphere creates ripple effects. We help you stay informed, stay
              ahead, and make decisions with confidence.
            </p>
            <svg width="40" height="16" className="mt-4 text-[#F5C518]" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M2 12 Q8 2 14 12 T26 12 T38 12" />
            </svg>
          </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Search,
                title: 'Real-Time Monitoring',
                text: 'Track political developments, policy updates and key statements as they happen.',
                accent: 'bg-[#F5C518]',
                underline: 'bg-[#F5C518]',
              },
              {
                icon: Users,
                title: 'Public Sentiment Analysis',
                text: 'Understand what people think, feel and expect — across regions, demographics and platforms.',
                accent: 'bg-[#3BA7DB]',
                underline: 'bg-[#3BA7DB]',
              },
              {
                icon: TrendingUp,
                title: 'Election Insights',
                text: 'Analyze voter behavior, campaign trends and electoral dynamics with data-driven intelligence.',
                accent: 'bg-[#E4483A]',
                underline: 'bg-[#E4483A]',
              },
              {
                icon: Share2,
                title: 'Stakeholder Intelligence',
                text: 'Map key players, alliances and influencers to identify opportunities and risks early.',
                accent: 'bg-[#121212]',
                underline: 'bg-[#121212]',
              },
            ].map(({ icon: Icon, title, text, accent, underline }) => (
              <div key={title} className="bg-white border border-black/10 rounded-xl p-5">
                <span className={`${accent} text-white rounded-full w-10 h-10 flex items-center justify-center mb-4`}>
                  <Icon size={18} />
                </span>
                <h3 className="font-bold">{title}</h3>
                <p className="text-gray-500 text-sm mt-2">{text}</p>
                <span className={`block w-8 h-1 ${underline} rounded-full mt-4`} />
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ================= 3. OUR APPROACH ================= */}
      <section id="approach" className="px-[4%] py-14 bg-[#121212] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
          <div>
            <span className="text-sm font-bold tracking-wide text-[#F5C518]">Our Approach</span>
            <h2 className="text-3xl font-extrabold mt-3 leading-tight">From data to direction.</h2>
            <p className="text-gray-400 mt-4 text-sm">
              We combine research, technology and human expertise to deliver
              sharp, reliable political intelligence that helps you plan,
              respond and lead.
            </p>
            <svg width="40" height="16" className="mt-4 text-[#F5C518]" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M2 12 Q8 2 14 12 T26 12 T38 12" />
            </svg>
          </div>
 
          <div className="flex flex-wrap pl-10 items-start gap-x-2 gap-y-8">
            {[
              { icon: Search, step: '01', title: 'Monitor', text: 'Track developments in real time.', bg: 'bg-[#F5C518]', dark: true },
              { icon: FileText, step: '02', title: 'Analyze', text: 'Decode trends, sentiment and signals.', bg: 'bg-[#3BA7DB]' },
              { icon: Lightbulb, step: '03', title: 'Interpret', text: 'Turn data into meaningful insights.', bg: 'bg-[#E4483A]' },
              { icon: PenTool, step: '04', title: 'Advise', text: 'Provide strategic recommendations.', bg: 'bg-white', dark: true },
              { icon: Target, step: '05', title: 'Enable', text: 'Help you take the right action.', bg: 'bg-[#F5C518]', dark: true },
            ].map(({ icon: Icon, step, title, text, bg, dark }, i, arr) => (
              <React.Fragment key={step}>
                <div className="w-32">
                  <span className={`${bg} ${dark ? 'text-black' : 'text-white'} rounded-full w-12 h-12 flex items-center justify-center`}>
                    <Icon size={20} />
                  </span>
                  <p className="text-xs text-gray-400 mt-3">{step}</p>
                  <h3 className="font-bold mt-1">{title}</h3>
                  <p className="text-gray-400 text-xs mt-1 leading-snug">{text}</p>
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight size={25} className="text-gray-600 mt-5 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
 
            <p
              className="text-[#F5C518] text-lg leading-tight ml-4 -rotate-10"
              style={{ fontFamily: "'Comic Sans MS', cursive" }}
            >
              Better
              <br />
              Intel.
              <br />
              Better
              <br />
              Moves.
            </p>
          </div>
        </div>
      </section>
     {/* ================= 4. REAL-WORLD IMPACT ================= */}
      <section className="px-[4%] py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Left collage — PLACEHOLDER */}
          <div className="w-full rounded-xl flex items-center justify-center overflow-hidden">
            <img
              src="/images/image1.png"
              alt="Real-world impact collage — building, campaign crowd and vote tag"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
 
          {/* Middle text */}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-bold tracking-wide text-[#E4483A]">Real-World Impact</span>
            <h2 className="text-2xl font-extrabold mt-3 leading-tight">
              Insights that influence change.
            </h2>
            <p className="text-gray-600 mt-4 text-sm">
              From election campaigns to policy debates, our political
              intelligence helps brands, institutions and organizations make
              sense of the noise — and focus on what truly matters.
            </p>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-black/20 px-6 py-2.5 rounded-full font-semibold mt-6 w-fit hover:bg-black hover:text-white transition-colors"
            >
              See Our Work
              <ArrowUpRight size={16} />
            </a>
          </div>
 
          {/* Featured insights */}
          <div className="bg-[#F1EFE7] rounded-xl p-6 border border-black/10">
            <h3 className="text-sm font-bold tracking-wide text-gray-500 mb-4">
              Featured Insights
            </h3>
            <ul className="space-y-4">
              {[
                { icon: Landmark, title: 'Election Landscape', text: 'Voter behavior, key battles, forecast analysis.' },
                { icon: ClipboardList, title: 'Policy & Regulation', text: 'Bill tracking, government decisions, impact analysis.' },
                { icon: MessageCircle, title: 'Public Sentiment', text: 'Mood tracking, social listening, issue mapping.' },
                { icon: UserCheck, title: 'Political Stakeholders', text: 'Key players, alliances, influence networks.' },
              ].map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-3">
                  <Icon size={18} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">{title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Dark quote block — background image PLACEHOLDER */}
          <div className="relative rounded-xl overflow-hidden min-h-[220px] bg-[#121212] text-white">
            <img
              src="/images/quote-block-bg.jpeg"
              alt="Speaker at a podium — political communication"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="relative p-6 flex flex-col justify-between h-full min-h-[220px]">
              <Quote size={24} className="text-[#F5C518]" />
              <p className="text-lg font-semibold leading-snug mt-4">
                In politics, timing is everything.
                <br />
                And so is insight.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      {/* ================= 5. FOOTER CTA ================= */}
      <section className="px-[4%] py-7 bg-[#121212] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="bg-white/10 rounded-full p-3">
            <MessageCircle size={20} />
          </span>
          <p className="text-base">
            Let's turn insights into{' '}
            <span className="font-bold block sm:inline">smarter strategies.</span>
          </p>
        </div>
 
        <p className="text-gray-400 text-sm max-w-xs text-center sm:text-left sm:border-l sm:border-white/10 sm:pl-6">
          Partner with us for political intelligence that gives you the
          clarity, context and confidence to move forward.
        </p>
 
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap"
        >
          Get in Touch
          <ArrowRight size={16} />
        </a>
      </section>


    </div>
  );
};
 
export default PoliticalIntelligence;
 