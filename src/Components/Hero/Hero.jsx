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

typeEffect();

function HeroSection() {
  return (
    <div id='home' className='Herosection'>
      <div className="hero-image">
        <img src={Jayveer} alt="" /></div>
      <h2 className="hero-main-heading">
        <span className='hero-main-heading-span'> I'm Jayveer Kumar </span>
        <br />
        <span className='animay-text-hero' >Full Stack Developer </span>
      </h2>
      <p className="hero-paragraph">I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I am always eager to learn new technologies and improve my skills.</p>
      <div className="hero-button-container">
        <button className="hero-button hero-cvBtn ">Download CV</button>
        <button className="hero-button contactBtn"> <span id='contact-text' >Hotline</span> <span id='contact-No' >7248060696</span> </button>
      </div>
    </div>
  );
}

export default HeroSection;