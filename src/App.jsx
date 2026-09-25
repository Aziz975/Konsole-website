import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About';

import Insights from './Pages/Insights';
import Contact from './Pages/Contact';
import MobileMarketing from './components/Services/MobileMarketing';
import ContentCreation from './components/Services/ContentCreation';
import VideoProduction from './components/Services/VideoProduction';
import MemeAndMarketing from './components/Services/MemeAndMarketing';







const App = () => {
  return (
    <>

      <BrowserRouter>

        <Navbar></Navbar>


        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" >
          <Route path="/services/memeandmomentmarketing" element={<MemeAndMarketing/>} />
          <Route path="/services/contentcreation"        element={<ContentCreation />} />
          <Route path="/services//services/videoproduction" element={<VideoProduction />} />
          <Route path="/services/memeandmomentmarketing" element={<MobileMarketing />} />
          <Route path="/services/memeandmomentmarketing" element={<MobileMarketing />} />
          <Route path="/services/memeandmomentmarketing" element={<MobileMarketing />} />
           
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};

export default App
