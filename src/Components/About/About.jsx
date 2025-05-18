import React from 'react';
import "./About.css";
import Jayveer from '../../assets/JayveerImage.jpg'


export default function About() {
    return (
        <div id='about' className="about-section">
            <div className="about-image">
                <img src={Jayveer} alt="Jayveer Kumar" />
            </div>
            <div className="about-content">
                <div className="about-me-z_box">
                    <h2 className='about-me-heading'>About Me</h2>
                </div>
                <p className='about-main-content'>
                    I am a Fullstack Developer passionate about crafting clean and user-friendly websites.
                    I love turning ideas into reality using code. My goal is to build efficient and scalable
                    web applications that offer seamless user experiences.
                </p>
                <h5 className='about-project-complete'>
                    <span>5</span> Full Stack Project Complete
                </h5>
                <button className="about-dwnload-cvBtn">Download cv</button>
            </div>
        </div>
    )
}