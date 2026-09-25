import React from "react";

const teamCards = [
    {
        title: "Executive Strategy",
    
    },
    {
        title: "Creative Technology",
       
    },
    {
        title: "Executive Strategy",
  
    },
    {
        title: "Creative Technology",
       
    },
];

const teamImages = [
  "/images/team-2.jpg",
  "/images/team-3.jpg",
  "/images/team-4.jpg",
  "/images/team-5.jpg",
  "/images/team-5.jpg",
];

export default function ManagementTeam() {
    return (
        <section className="min-h-screen w-full bg-white px-6 m py-6 font-['Arial',sans-serif] text-black sm:px-10 md:px-14 lg:px-20 xl:px-[12%]">
            <div className="mx-auto w-full max-w-[1200px]">

                {/* ================= HEADER ================= */}
                <div className="mb-3">
                    <h1 className="text-[50px] font-bold leading-[0.95] tracking-[-1.5px] sm:text-[42px] md:text-[48px]">
                        Management Team
                    </h1>

                    <p className="mt-[8px] text-[17px] font-normal  leading-none  sm:text-[13px]">
                        We are digital thinkers, strategists, and creators.
                    </p>
                </div>

                {/* ================= MAIN GRID ================= */}
                <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-[1.35fr_1fr]">

                    {/* ================= LEFT LARGE CARD ================= */}
                    <div className="overflow-hidden rounded-[5px] border-[2px] border-[#222] bg-white">

                        {/* Main Image */}
                        <div className="relative h-[430px] w-full overflow-hidden bg-[#eeeeee] sm:h-[500px] md:h-[570px]">
                            <img
                                src="images/team-1.jpg"
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        {/* Card Footer */}
                        <div className="flex h-[48px] flex-col justify-center bg-[#111111] px-[9px]">
                            <h2 className="text-[12px] font-extrabold leading-[1] text-white sm:text-[13px]">
                                Founding Leadership
                            </h2>

                            <p className="mt-[2px] text-[9px] font-bold leading-[1] text-[#ffc800] sm:text-[10px]">
                                Strategic Direction & Growth
                            </p>
                        </div>
                    </div>

                    {/* ================= RIGHT COLUMN ================= */}
                    <div className="flex flex-col gap-4">

                        {/* Small Team Cards */}
                        <div className="grid grid-cols-2 gap-3">
                            {teamCards.map((member, index) => (
                                <div key={member.title} className="min-w-0">

                                    <div className="overflow-hidden rounded-[4px] border-[2px] border-[#777] bg-white">
                                        <div className="relative aspect-[1/1] overflow-hidden bg-[#eeeeee]">
                                            <img
                                                src={teamImages[index]}
                                                alt={member.title}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>


                                </div>
                            ))}
                        </div>

                        {/* ================= JOIN TEAM CARD ================= */}
                        
                    </div>
                </div>
            </div>
        </section>
    );
}