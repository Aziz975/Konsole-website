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
    <div className="animate-[fadeUp_0.8s_ease-out_forwards]">
      <StrategicStorytellingHero></StrategicStorytellingHero>

      {/* part2  */}
      
      <ServicesIntro></ServicesIntro>
      
      {/* part 3 */}
      <ServicesGrid></ServicesGrid>


      {/* part 4 */}
      
      <OurWork></OurWork>

     
      {/* part 5 */}
      <AboutSection></AboutSection>

      {/* part 6 */}
      
      <WhyKonsolde></WhyKonsolde>

    <CreateTogether></CreateTogether>

     </div>
    </>



  )
}

export default Home
