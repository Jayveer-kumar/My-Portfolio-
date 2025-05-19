import React from 'react';
import "./Hero.css";
import Jayveer from '../../assets/JayveerImage.jpg'


const words = ["Fullstack Developer", "Freelancer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  currentWord = words[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.querySelector(".animay-text-hero").textContent = currentWord.slice(0, j);

  // 💡 Speed Control — Make it smoother
  let typeSpeed = 150;
  let deleteSpeed = 80;
  let pauseAfterWord = 2000;
  let pauseAfterDelete = 500;

  let speed = isDeleting ? deleteSpeed : typeSpeed;

  // If word is fully typed
  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    speed = pauseAfterWord;
  }
  // If word is fully deleted
  else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    speed = pauseAfterDelete;
  }

  setTimeout(typeEffect, speed);
}

window.onload=()=>{
  typeEffect();
}

function HeroSection() {
  return (
    <div id='home' className='Herosection'>
      <div className="hero-image" data-aos="fade-up" data-aos-duration="1000" >
        <img src={Jayveer} alt="" /></div>
      <h2 className="hero-main-heading">
        <span className='hero-main-heading-span' data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000" > I'm Jayveer Kumar </span>
        <br />
        <span data-aos="fade-down"  data-aos-delay="500" data-aos-duration="1000"  className='animay-text-hero'>Full Stack Developer </span>
      </h2>
      <p className="hero-paragraph">I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I am always eager to learn new technologies and improve my skills.</p>
      <div className="hero-button-container">
        <button data-aos="fade-left" data-aos-offset="20" data-aos-delay="50" data-aos-duration="1000" className="hero-button hero-cvBtn">Download CV</button>
        <button data-aos="fade-right" data-aos-offset="20" data-aos-delay="50" data-aos-duration="1000" className="hero-button contactBtn"> <span id='contact-text' >Hotline</span> <span id='contact-No' >7248060696</span> </button>
      </div>
    </div>
  );
}
export default HeroSection;