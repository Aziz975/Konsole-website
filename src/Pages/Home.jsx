import React from 'react'
import StrategicStorytellingHero from '../components/Home/StrategicStorytellingHero'
import ServicesIntro from '../components/Home/ServicesIntro'
import OurWork from '../components/Home/OurWork'
import AboutSection from '../components/Home/AboutSection'
import WhyKonsolde from '../components/Home/WhyKonsolde'
import ServicesGrid from '../components/Home/ServicesGrid'
import CreateTogether from '../components/Home/CreateTogether'



const Home = () => {
  return (
    <>
      <StrategicStorytellingHero></StrategicStorytellingHero>

      {/* part2  */}
      <div className="h-[14px] w-full border-y border-[#d4d4d1] bg-[#0b0f10] sm:h-[16px] md:h-[18px]"></div>
      <ServicesIntro></ServicesIntro>
      <div className="h-[14px] w-full border-y border-[#d4d4d1] bg-[#0b0f10] sm:h-[16px] md:h-[18px]"></div>
      {/* part 3 */}
      <ServicesGrid></ServicesGrid>


      {/* part 4 */}
      <div className="h-[14px] w-full border-y border-[#d4d4d1] bg-[#0b0f10] sm:h-[16px] md:h-[18px]"></div>
      <OurWork></OurWork>

      <div className="h-[14px] w-full border-y border-[#d4d4d1] bg-[#0b0f10] sm:h-[16px] md:h-[18px]"></div>
      {/* part 5 */}
      <AboutSection></AboutSection>

      {/* part 6 */}
      <div className="h-[14px] w-full border-y border-[#d4d4d1] bg-[#0b0f10] sm:h-[16px] md:h-[18px]"></div>
      <WhyKonsolde></WhyKonsolde>

    <CreateTogether></CreateTogether>

     
    </>



  )
}

export default Home
