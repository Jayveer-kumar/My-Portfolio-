// import React from 'react';
// import Navbar from './Components/Navbar/Navbar';
// import HeroSection from './Components/Hero/Hero';
// import About from './Components/About/About';
// import Project from './Components/Project/Project';
// import Skills from './Components/Skills/Skill';
// import ContactSection from './Components/Contact/Contact';
// import Footer from './Components/Footer/Footer';
// import { useEffect, useState } from "react";
// import "./index.css";
// function App() {
//   const [loading, setLoading] = useState(true);
//     useEffect(() => {
//       window.addEventListener("load", () => {
//         setTimeout(() => setLoading(false), 8800);
//       });
//   }, []);
//   return ( 
//     <>
//     {loading && (
//         <div className="loader-container">
//           <div class="loadingspinner">
//             <div id="square1"></div>
//             <div id="square2"></div>
//             <div id="square3"></div>
//             <div id="square4"></div>
//             <div id="square5"></div>
//           </div>
//         </div>
//       )}
//     <div>
//       <Navbar />
//       <HeroSection />
//       <About />      
//       <Skills />
//       <Project />
//       <ContactSection />
//       <Footer />
//     </div>
//     </>
//    );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/Hero/Hero';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skill';
import ContactSection from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // You can change time as needed

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="loadingspinner">
            <div id="square1"></div>
            <div id="square2"></div>
            <div id="square3"></div>
            <div id="square4"></div>
            <div id="square5"></div>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <HeroSection />
          <About />
          <Skills />
          <Project />
          <ContactSection />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
