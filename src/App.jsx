import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import ScrollToTop from './components/ScrollToTop';


import Insights from './Pages/Insights';
import Contact from './Pages/Contact';
import MobileMarketing from './components/Services/MobileMarketing';
import ContentCreation from './components/Services/ContentCreation';
import VideoProduction from './components/Services/VideoProduction';
import MemeAndMarketing from './components/Services/MemeAndMarketing';
import GovernmentProjects from './components/Services/GovernmentProjects';
import PoliticalIntelligence from './components/Services/PoliticalIntelligence';
import DigitalMedia from './components/Services/DigitalMedia';
import ORM from './components/Services/ORM';
import OurTeam from './components/Team/OurTeam';







const App = () => {
  return (
    <>

      <BrowserRouter>
        <ScrollToTop />
        <Navbar></Navbar>


        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" >
            <Route path="/services/memeandmomentmarketing" element={<MemeAndMarketing />} />
            <Route path="/services/contentcreation" element={<ContentCreation />} />
            <Route path="/services/videoproduction" element={<VideoProduction />} />
            <Route path="/services/governmentprojects" element={<GovernmentProjects />} />
            <Route path="/services/digitalpr" element={<DigitalMedia />} />
            <Route path="/services/memeandmomentmarketing" element={<MobileMarketing />} />
            <Route path="/services/politicalintelligence" element={<PoliticalIntelligence />} />
            <Route path="/services/orm" element={<ORM />} />
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourteam" element={<OurTeam />} />


        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};

export default App
