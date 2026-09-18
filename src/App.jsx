import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Insights from './components/Insights/Insights';
import Contact from './components/Contact/Contact';
import Work from './components/Work/Work';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';





const App = () => {
  return (
   <>
   
    <BrowserRouter>
  
   <Navbar></Navbar>


      <Routes>
        <Route path="/" element={<Home />} />
           <Route path="/services" element={<Services />} />
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
