import React from "react";
import { Smartphone, MessageSquare, Users, Mail, ChevronDown } from "lucide-react";

export default function MobileMarketing() {
  return (
    <main className="min-h-screen w-full bg-white font-['Arial',sans-serif] text-[#333]">

      {/* ================= HERO ================= */}
      <section className="relative h-[300px] w-full overflow-hidden px-[5px] pt-[2px] sm:h-[360px] md:h-[420px] lg:h-[470px]">
        <div className="relative h-full w-full overflow-hidden rounded-[4px] bg-[#5b514e]">
          <img
            src=""
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35"></div>

          <div className="abasolute inset-0 flex items-center justify-center">
            <h1 className="text-[30px] font-extrabold tracking-[-1px] text-white sm:text-[40px] md:text-[50px] lg:text-[58px]">
              Mobile Marketing
            </h1>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="w-full px-[20px] pb-[70px] pt-[28px] sm:px-[35px] md:px-[55px] lg:px-[8%] xl:px-[13%]">

        <div className="grid w-full grid-cols-1 gap-[30px] lg:grid-cols-[minmax(0,1fr)_330px] xl:grid-cols-[minmax(0,1fr)_350px]">

          {/* ================= LEFT CONTENT ================= */}
          <div className="min-w-0">

            {/* Small Label */}
            <div className="mb-[8px] flex items-center gap-[7px]">
              <span className="h-[2px] w-[20px] bg-[#2764d8]"></span>

              <span className="text-[8px] font-bold uppercase tracking-[0.8px] text-[#2764d8] sm:text-[9px]">
                Mobile Marketing
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[620px] text-[28px] font-extrabold leading-[1.02] tracking-[-1px] text-[#172231] sm:text-[34px] md:text-[38px]">
              Reach. Engage. Convert.
              <br />
              <span className="text-[#2764d8]">Through Mobile.</span>
            </h2>

            {/* Paragraphs */}
            <div className="mt-[18px] max-w-[760px] space-y-[17px]">

              <p className="text-[12px] leading-[1.65] text-[#444] sm:text-[13px] md:text-[14px]">
                Mobile marketing is a multi-channel marketing strategy aimed at
                reaching a target audience on their smart phones, tablets,
                and/or other mobile devices, via SMS, Whatsapp and Voice Call.
              </p>

              <p className="text-[12px] leading-[1.65] text-[#444] sm:text-[13px] md:text-[14px]">
                Mobile is disrupting the way people engage with brands.
                Everything that can be done on a desktop computer is now
                available on a mobile device. From opening an email to visiting
                your website to reading your content, it is all accessible
                through a small mobile screen.
              </p>

              <p className="text-[12px] leading-[1.65] text-[#444] sm:text-[13px] md:text-[14px]">
                In this age of mobile revolution, it is extremely important to
                stay in touch with technology at all times. Mobiles are the
                fastest way for conveying information within groups to several
                members, just within seconds.
              </p>

            </div>
          </div>

          {/* ================= SERVICE ENQUIRY ================= */}
          <aside className="h-fit rounded-[5px] bg-[#eef0f2] p-[22px] sm:p-[26px]">

            <h3 className="text-[18px] font-extrabold text-[#132b4d] sm:text-[20px]">
              Service Enquiry
            </h3>

            {/* Service */}
            <div className="mt-[22px]">
              <label className="mb-[7px] block text-[11px] font-semibold text-[#222]">
                Select Services
              </label>

              <div className="flex h-[50px] items-center justify-between bg-white px-[14px]">
                <span className="text-[12px] text-[#777]">
                  Select Services
                </span>

                <ChevronDown size={15} strokeWidth={1.5} className="text-[#555]" />
              </div>
            </div>

            {/* Name */}
            <div className="mt-[20px]">
              <label className="mb-[7px] block text-[11px] font-semibold text-[#222]">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Name"
                className="h-[50px] w-full border-none bg-white px-[14px] text-[12px] outline-none placeholder:text-[#aaa]"
              />
            </div>

            {/* Phone */}
            <div className="mt-[20px]">
              <label className="mb-[7px] block text-[11px] font-semibold text-[#222]">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Contact no"
                className="h-[50px] w-full border-none bg-white px-[14px] text-[12px] outline-none placeholder:text-[#aaa]"
              />
            </div>

            {/* Submit */}
            <button className="mt-[28px] h-[48px] rounded-[4px] bg-[#09bdd0] px-[28px] text-[12px] font-bold text-white transition hover:bg-[#08aabd]">
              Submit
            </button>

          </aside>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-[35px] h-px w-full bg-[#e4e4e4] sm:my-[45px]"></div>

        {/* ================= BULK SMS ================= */}
        <section className="relative grid w-full grid-cols-1 items-center gap-[25px] lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_340px]">

          {/* Content */}
          <div>

            {/* Icon */}
            <div className="mb-[18px]">
              <div className="relative inline-flex">
                <Smartphone
                  size={45}
                  strokeWidth={2.3}
                  className="text-[#080808]"
                />

                <div className="absolute -right-[13px] top-[1px] rounded-full bg-[#080808] px-[5px] py-[3px]">
                  <span className="text-[8px] font-bold text-white">
                    SMS
                  </span>
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-[27px] font-extrabold tracking-[-0.5px] text-[#2764d8] sm:text-[31px]">
              Bulk SMS service
            </h2>

            {/* Description */}
            <p className="mt-[12px] max-w-[850px] text-[12px] leading-[1.65] text-[#444] sm:text-[13px] md:text-[14px]">
              From browsing, texting, mailing etc everywhere mobile is
              involved. Because it is easy and handy. A lot of businesses sure
              short way to connect with their customers is bulk sms. Because it
              is easy, sent within minutes, flexible delivery, comparatively
              cheap and manageable..
            </p>

            {/* Button */}
            <button className="mt-[20px] rounded-[4px] bg-[#5735ed] px-[30px] py-[14px] text-[12px] font-bold lowercase text-white transition hover:bg-[#4523d8]">
              read more
            </button>

          </div>

          {/* ================= SMS IMAGE ================= */}
          <div className="relative mx-auto h-[260px] w-full max-w-[330px] overflow-hidden sm:h-[310px] lg:h-[300px]">

            <img
              src=""
              alt=""
              className="absolute inset-0 h-full w-full object-contain"
            />

            {/* Placeholder background if image is empty */}
            <div className="absolute inset-0 -z-0 flex items-center justify-center rounded-full bg-[#f2f9ff]">
              <div className="relative flex h-[190px] w-[130px] items-center justify-center rounded-[20px] border-[7px] border-[#111] bg-[#092640] shadow-xl">
                <div className="absolute left-1/2 top-[7px] h-[5px] w-[35px] -translate-x-1/2 rounded-full bg-black"></div>

                <MessageSquare
                  size={58}
                  strokeWidth={1.5}
                  className="text-white"
                />

                <span className="absolute right-[20px] top-[82px] flex h-[19px] w-[19px] items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  1
                </span>
              </div>

              {/* Floating Icons */}
              <div className="absolute left-[10%] top-[18%] flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#35a9f4] text-white shadow-md">
                <Mail size={17} />
              </div>

              <div className="absolute right-[10%] top-[12%] flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#35a9f4] text-white shadow-md">
                <Users size={18} />
              </div>

              <div className="absolute right-[5%] top-[45%] flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#35a9f4] text-white shadow-md">
                <MessageSquare size={17} />
              </div>
            </div>

          </div>
        </section>

      
      </section>


    <section className="w-full bg-white px-5 py-7 font-['Arial',sans-serif] text-[#333] sm:px-8 md:px-12 lg:px-[8%] xl:px-[13%]">
      
      <div className="w-full">

        {/* ================= WHATSAPP PROMOTION ================= */}
        <div className="grid w-full grid-cols-1 items-center gap-6 pb-8 lg:grid-cols-[minmax(0,1fr)_430px]">

          {/* LEFT CONTENT */}
          <div className="min-w-0">

            {/* WhatsApp Icon */}
            <div className="mb-3 flex h-[50px] w-[50px] items-center">
              <img
                src="/images/whatsapp-promotion.png"
                alt="WhatsApp"
                className="h-[45px] w-[45px] object-contain"
              />
            </div>

            {/* Heading */}
            <h2 className="text-[25px] font-extrabold leading-[1.1] tracking-[-0.5px] text-[#2764d8] sm:text-[29px] md:text-[32px]">
              Whatsapp Promotion
            </h2>

            {/* Description */}
            <div className="mt-3 max-w-[780px] space-y-4">

              <p className="text-[11px] leading-[1.55] text-[#444] sm:text-[12px] md:text-[13px]">
                As WhatsApp has extended its feet in the market & become huge by
                incorporating 450 million users in its database, it’s the time
                when an enterprise can think of marketing on WhatsApp to mount
                the stairs of success.
              </p>

              <p className="text-[11px] leading-[1.55] text-[#444] sm:text-[12px] md:text-[13px]">
                The whopping increase in the users of WhatsApp in the past few
                months tells that, it can be the right platform to interact with
                the audience & engage them on a business at an instant...
              </p>

            </div>

            {/* Button */}
            <button className="mt-5 rounded-[4px] bg-[#5735ed] px-[28px] py-[12px] text-[10px] font-bold lowercase text-white transition duration-200 hover:bg-[#4321d5] sm:px-[30px] sm:py-[13px] sm:text-[11px]">
              read more
            </button>

          </div>

          {/* WHATSAPP IMAGE */}
          <div className="relative mx-auto h-[240px] w-full max-w-[430px] sm:h-[290px] lg:h-[320px]">
            <img
              src="/images/whatsapp-promotion.png"
              alt="Whatsapp Promotion"
              className="h-full w-full object-contain"
            />
          </div>

        </div>


        {/* ================= DIVIDER ================= */}
        <div className="h-px w-full bg-[#e5e5e5]"></div>


        {/* ================= VOICE CALL PROMOTION ================= */}
        <div className="grid w-full grid-cols-1 items-center gap-6 py-9 lg:grid-cols-[minmax(0,1fr)_430px]">

          {/* LEFT CONTENT */}
          <div className="min-w-0">

            {/* Call Icon */}
            <div className="mb-3 flex h-[50px] w-[50px] items-center">
              <img
                src="/images/voice-call-icon.png"
                alt="Voice Call"
                className="h-[45px] w-[45px] object-contain"
              />
            </div>

            {/* Heading */}
            <h2 className="text-[25px] font-extrabold leading-[1.1] tracking-[-0.5px] text-[#2764d8] sm:text-[29px] md:text-[32px]">
              Voice Call Promotion
            </h2>

            {/* Description */}
            <div className="mt-3 max-w-[780px] space-y-4">

              <p className="text-[11px] leading-[1.55] text-[#444] sm:text-[12px] md:text-[13px]">
                Bulk Voice call service is a widely used telephony feature that
                helps companies in their business promotions. Voice call is a
                short recorded message that has the power to reach distant
                audience at no time & helps to deliver complete info of a
                business instantly.
              </p>

              <p className="text-[11px] leading-[1.55] text-[#444] sm:text-[12px] md:text-[13px]">
                Voice call service of Konsole Group is affordable & can help you
                to save thousands or lakhs of your bucks that you probably be
                investing on PR & advertising of your products.
              </p>

            </div>

            {/* Button */}
            <button className="mt-5 rounded-[4px] bg-[#5735ed] px-[28px] py-[12px] text-[10px] font-bold lowercase text-white transition duration-200 hover:bg-[#4321d5] sm:px-[30px] sm:py-[13px] sm:text-[11px]">
              read more
            </button>

          </div>

          {/* VOICE CALL IMAGE */}
          <div className="relative mx-auto h-[240px] w-full max-w-[430px] sm:h-[290px] lg:h-[320px]">
            <img
              src="/images/voice-call-promotion.png"
              alt="Voice Call Promotion"
              className="h-full w-full object-contain"
            />
          </div>

        </div>

        {/* Bottom spacing */}
        <div className="h-[150px] sm:h-[200px] lg:h-[250px]"></div>

      </div>

    </section>


       <section className="w-full bg-white px-5 py-6 font-['Arial',sans-serif] text-[#333] sm:px-8 md:px-10 lg:px-[8%] xl:px-[13%]">

      {/* ================= TOLL FREE NUMBER ================= */}
      <div className="grid w-full grid-cols-1 items-center gap-6 border-b border-[#e5e5e5] pb-7 lg:grid-cols-[minmax(0,1fr)_430px]">

        {/* CONTENT */}
        <div className="min-w-0">

          <div className="mb-2 flex h-[48px] w-[48px] items-center">
            <img
              src="/images/toll-free-icon.png"
              alt="Toll Free"
              className="h-full w-full object-contain"
            />
          </div>

          <h2 className="text-[25px] font-extrabold leading-[1.1] tracking-[-0.5px] text-[#2764d8] sm:text-[29px] md:text-[31px]">
            Toll Free Number
          </h2>

          <p className="mt-3 max-w-[780px] text-[11px] leading-[1.55] text-[#444] sm:text-[12px] md:text-[13px]">
            Toll free number is one of the best marketing approaches that help
            enterprises to allow their customers to interact with them without
            charging them a penny. Toll free number allows callers to reach any
            business within a jiffy. With an extensive utilization of toll free
            services of Konsole Group, our clients have achieved to reinforce
            their customer base by fulfilling their requirement & demands that
            occurs constantly.
          </p>

          <button className="mt-4 rounded-[4px] bg-[#5735ed] px-[28px] py-[12px] text-[10px] font-bold lowercase text-white transition hover:bg-[#4321d5] sm:px-[30px] sm:py-[13px] sm:text-[11px]">
            read more
          </button>

        </div>

        {/* IMAGE */}
        <div className="mx-auto flex h-[180px] w-full max-w-[430px] items-center justify-center sm:h-[220px] lg:h-[260px]">
          <img
            src="/images/toll-free-image.png"
            alt="Toll Free Number"
            className="h-full w-full object-contain"
          />
        </div>

      </div>


      {/* ================= IVR ================= */}
      <div className="grid w-full grid-cols-1 items-center gap-6 border-b border-[#e5e5e5] py-8 lg:grid-cols-[minmax(0,1fr)_430px]">

        {/* CONTENT */}
        <div className="min-w-0">

          <div className="mb-2 flex h-[48px] w-[48px] items-center">
            <img
              src="/images/ivr-icon.png"
              alt="IVR"
              className="h-full w-full object-contain"
            />
          </div>

          <h2 className="text-[25px] font-extrabold leading-[1.1] tracking-[-0.5px] text-[#2764d8] sm:text-[29px] md:text-[31px]">
            IVR / Virtual Number
          </h2>

          <p className="mt-3 max-w-[780px] text-[11px] leading-[1.55] text-[#444] sm:text-[12px] md:text-[13px]">
            Interactive Voice Response (IVR) is an automated call that
            interacts with the callers & provides them appropriate information
            related to their query. No matter what your business is, the
            utilization of IVR will help you to augment the credibility of your
            business among your target audience by providing them the solution
            of their query instantly. IVR is one of the best services of
            Konsole Group that helped our clients to make their customers
            satisfied.
          </p>

          <button className="mt-4 rounded-[4px] bg-[#5735ed] px-[28px] py-[12px] text-[10px] font-bold lowercase text-white transition hover:bg-[#4321d5] sm:px-[30px] sm:py-[13px] sm:text-[11px]">
            read more
          </button>

        </div>

        {/* IMAGE */}
        <div className="mx-auto flex h-[180px] w-full max-w-[430px] items-center justify-center sm:h-[220px] lg:h-[270px]">
          <img
            src="/images/ivr-image.png"
            alt="IVR Virtual Number"
            className="h-full w-full object-contain"
          />
        </div>

      </div>


      {/* ================= MISSED CALL ================= */}
      <div className="grid w-full grid-cols-1 items-center gap-6 border-b border-[#e5e5e5] py-8 lg:grid-cols-[minmax(0,1fr)_430px]">

        {/* CONTENT */}
        <div className="min-w-0">

          <div className="mb-2 flex h-[48px] w-[48px] items-center">
            <img
              src="/images/missed-call-icon.png"
              alt="Missed Call"
              className="h-full w-full object-contain"
            />
          </div>

          <h2 className="text-[25px] font-extrabold leading-[1.1] tracking-[-0.5px] text-[#2764d8] sm:text-[29px] md:text-[31px]">
            Missed call service
          </h2>

          <p className="mt-3 max-w-[780px] text-[11px] leading-[1.55] text-[#444] sm:text-[12px] md:text-[13px]">
            Missed Call service is one of a kind of marketing tool that enables
            enterprises to engage their audience on their business by charging
            no cost. It has become the most effective means of converting the
            audience into customers of a business in 2017 & it has been
            anticipated that it will be utilized as the best promotional tool
            by enterprises in the upcoming decades as well.
          </p>

          <button className="mt-4 rounded-[4px] bg-[#5735ed] px-[28px] py-[12px] text-[10px] font-bold lowercase text-white transition hover:bg-[#4321d5] sm:px-[30px] sm:py-[13px] sm:text-[11px]">
            read more
          </button>

        </div>

        {/* IMAGE */}
        <div className="mx-auto flex h-[180px] w-full max-w-[430px] items-center justify-center sm:h-[220px] lg:h-[270px]">
          <img
            src="/images/missed-call-image.png"
            alt="Missed Call Service"
            className="h-full w-full object-contain"
          />
        </div>

      </div>


      {/* ================= CTA ================= */}
      <div className="relative mt-0 min-h-[170px] w-full overflow-hidden rounded-[4px]">

        <img
          src=""
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#061321]/35"></div>

        {/* CTA CONTENT */}
        <div className="relative z-10 flex min-h-[170px] flex-col justify-center px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">

          <div className="max-w-[560px]">

            <p className="text-[8px] font-bold uppercase tracking-[1px] text-[#08c6e1] sm:text-[9px]">
              Get In Touch
            </p>

            <h2 className="mt-2 max-w-[480px] text-[23px] font-extrabold leading-[1.08] tracking-[-0.5px] text-white sm:text-[27px] md:text-[30px]">
              Let's Grow Your Business
              <br />
              with Mobile Marketing
            </h2>

            <p className="mt-3 max-w-[500px] text-[10px] leading-[1.5] text-white/90 sm:text-[11px] md:text-[12px]">
              Reach your audience, build stronger connections
              <br className="hidden sm:block" />
              and get real results with our mobile marketing solutions.
            </p>

          </div>

          {/* BUTTON */}
          <button className="mt-5 flex w-fit items-center gap-4 rounded-[3px] bg-[#08c5dc] px-6 py-3 text-[10px] font-bold text-white transition hover:bg-[#04aec3] md:mt-0 md:px-7 md:py-4 md:text-[11px]">
            Get Started
            <span className="text-[16px]">→</span>
          </button>

        </div>

      </div>

    </section>

    </main>
  );
}