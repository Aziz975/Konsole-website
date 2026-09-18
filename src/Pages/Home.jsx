import React from 'react'
import StrategicStorytellingHero from '../components/Home/StrategicStorytellingHero'
import ServicesIntro from '../components/Home/ServicesIntro'
import OurWork from '../components/Home/OurWork'

const Home = () => {
  return (
   <>
   <StrategicStorytellingHero></StrategicStorytellingHero>

   {/* part2  */}
   <div className="h-[14px] w-full border-y border-[#d4d4d1] bg-[#0b0f10] sm:h-[16px] md:h-[18px]"></div>
   <ServicesIntro></ServicesIntro>

   {/* part 3 */}
    <div className="h-[14px] w-full border-y border-[#d4d4d1] bg-[#0b0f10] sm:h-[16px] md:h-[18px]"></div>
   <OurWork></OurWork>
   </>


  )
}

export default Home
