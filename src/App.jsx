import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/Hero/Hero';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skill';
import ContactSection from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return ( 
    <div>
      <Navbar />
      <HeroSection />
      <About />      
      <Skills />
      <Project />
      <ContactSection />
      <Footer />
    </div>
   );
}

export default App;