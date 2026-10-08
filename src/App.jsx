import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import ScrollToTop from './components/ScrollToTop';
import TopupButton from './components/TopupButton';
import { HiringPopupProvider } from "./components/HiringForm/HiringPopup";

import Insights from './Pages/Insight';
import Contact from './Pages/Contact';
import MobileMarketing from './components/Services/MobileMarketing';
import ContentCreation from './components/Services/ContentCreation';
import VideoProduction from './components/Services/VideoProduction';
import MemeAndMarketing from './components/Services/MemeAndMarketing';
import GovernmentProjects from './components/Services/GovernmentProjects';
import PoliticalIntelligence from './components/Services/PoliticalIntelligence';
import DigitalMedia from './components/Services/DigitalMedia';
import InfluencerPartnership from './components/Services/InfluencerPartnership';

import ORM from './components/Services/ORM';
import OurTeam from './components/Team/OurTeam';
import Hiring from './components/Hiring/Hiring';
import OurManagement from './components/Management/ManagementTeam';
// import HiringForm from './components/HiringForm/HiringForm';






const App = () => {
  return (
    <>

      <BrowserRouter>
      

        <ScrollToTop />
        <TopupButton />
        <HiringPopupProvider>
        <Navbar></Navbar>


        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" >
            <Route path="/services/memeandmomentmarketing" element={<MemeAndMarketing />} />
            <Route path="/services/contentcreation" element={<ContentCreation />} />
            <Route path="/services/videoproduction" element={<VideoProduction />} />
            <Route path="/services/governmentprojects" element={<GovernmentProjects />} />
            <Route path="/services/digitalpr" element={<DigitalMedia />} />
            <Route path="/services/mobilemarketing" element={<MobileMarketing />} />
            <Route path="/services/politicalintelligence" element={<PoliticalIntelligence />} />
            <Route path="/services/influencerpartnership" element={<InfluencerPartnership />} />
            <Route path="/services/orm" element={<ORM />} />
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/ourmanagement" element={<OurManagement />} />
          <Route path="/hiring" element={<Hiring />} />
          {/* <Route path="/hiringform" element={<HiringForm />} /> */}


        </Routes>

        <Footer></Footer>
        </HiringPopupProvider>

      </BrowserRouter>
    </>
  );
};

export default App
