import React from 'react';
import "./About.css";
import Jayveer from '../../assets/JayveerImage.jpg'

const handleResumeView = ()=>{
    window.open('/resume.pdf', '_blank');
}

export default function About() {
    return (
        <div id='about' className="about-section">
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className="about-image">
                <img src={Jayveer} alt="Jayveer Kumar" />
            </div>
            <div  className="about-content">
                <div className="about-me-z_box">
                    <h2  className='about-me-heading'>About Me</h2>
                </div>
                <p  className='about-main-content'>
                    I am a Fullstack Developer passionate about crafting clean and user-friendly websites.
                    I love turning ideas into reality using code. My goal is to build efficient and scalable
                    web applications that offer seamless user experiences.
                </p>
                <h5  className='about-project-complete'>
                    <span>5</span> Full Stack Project Complete
                </h5>
                <a href="/resume.pdf" className='resumeViewBtn' target="_blank" rel="noopener noreferrer">
                    <button onClick={handleResumeView} data-aos="fade-up" data-aos-duration="1000" className="about-dwnload-cvBtn">Download cv</button>
                </a>                
            </div>
        </div>
    )
}