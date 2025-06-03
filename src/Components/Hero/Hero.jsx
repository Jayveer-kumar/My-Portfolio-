import React from 'react';
import "./Hero.css";
import Jayveer from '../../assets/JayveerImage.jpg'
import Button from '@mui/material/Button';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import CallIcon from '@mui/icons-material/Call';
const handleResumeView = () => {
  window.open('/Jayveer Kumar Resume.pdf', '_blank');
}

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

window.onload = () => {
  typeEffect();
}

function HeroSection() {
  return (
    <div id='home' className='Herosection'>

      <div className="hero-section-left">
        <h2 className="hero-m-text">
          I’ m  Jayveer ,  Creative 
         <span className="hero-animation-text animay-text-hero">Full Stack Developer</span>
        </h2>
        <p className='hero-bio-text'>Crafting User-Friendly Web Applications with Modern Technologies</p>
        <p><b>Tools i used</b>: <span>VS code , Git , Figma</span></p>
        <div className="hero-action_box">
        <Button onClick={handleResumeView} variant="outlined" className='hero-cvBtn' startIcon={<TripOriginIcon />}>
         Download CV
        </Button>
         <Button variant="outlined" startIcon={<CallIcon />}>
         7248060696
        </Button>
        </div> 
      </div>
      <div className="hero-section-right">
        <div className="hero-section-img">
          <img src={Jayveer} alt="" />
        </div>
      </div>
      <div className="hero-card-ani-box"></div>
    </div>
  );
}
export default HeroSection;