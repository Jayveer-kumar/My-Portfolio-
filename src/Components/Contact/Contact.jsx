import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useState , useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);
  let initialFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  const [formData, setformData] = useState(initialFormData);
  const [responseMsg, setResponseMsg] = useState(null);
  const handleFormValueChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }
  const handleMailSubmit = async (event) => {
    event.preventDefault();
    try {
      let res = await fetch("https://my-portfolio-mwhh.onrender.com/send-mail", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setResponseMsg({ text: data.message, type: "success" });
      setformData(initialFormData);

      // Clear message after 4 seconds
      setTimeout(() => setResponseMsg(null), 4000);
    } catch (error) {
      setResponseMsg({ text: "Failed to send Mail!", type: "error" });
      console.error(error);

      setTimeout(() => setResponseMsg(null), 4000);
    }
  }
  return (
    <section className="contact-section" id="contact">
      <h1 data-aos="fade-down" data-aos-offset="20" data-aos-duration="1000" >Contact Me</h1>
      <p data-aos="fade-up" data-aos-offset="20" data-aos-duration="1000" >Let's build something great together. Get in touch with me.</p>

      <div className="contact-form">
        <form onSubmit={handleMailSubmit} >
          <input  type="text" name='name' value={formData.name} onChange={handleFormValueChange} placeholder="Your Name" required />
          <input  type="email" name='email' value={formData.email} onChange={handleFormValueChange} placeholder="Your Email" required />
          <input  type="text" name='subject' value={formData.subject} onChange={handleFormValueChange} placeholder="Subject" required />
          <textarea  placeholder="Your Message" value={formData.message} onChange={handleFormValueChange} name='message' rows="6" required></textarea>
          <button  type="submit">Send Message</button>
        </form>
      </div>
      {/* Response message */}
      {responseMsg && (
        <div
          className={`response-message ${responseMsg.type === "success" ? "success" : "error"
            }`}
          role="alert"
        >
          {responseMsg.type === "success" ? (
            <AiOutlineCheckCircle className="msg-icon" />
          ) : (
            <AiOutlineCloseCircle className="msg-icon" />
          )}
          <span>{responseMsg.text}</span>
        </div>
      )}
      <div className="personal-info-container">
        <div className="info-box">
          <FaMapMarkerAlt className="info-icon" />
          <h3>Address</h3>
          <p>Budaun , District Budaun, India</p>
        </div>

        <div className="info-box">
          <FaPhoneAlt className="info-icon" />
          <h3>Contact Number</h3>
          <p>+91 7248060696</p>
        </div>

        <div className="info-box">
          <FaEnvelope className="info-icon" />
          <h3>Email</h3>
          <p>jayveerk394@gmail.com</p>
        </div>

        <div className="info-box">
          <FaGlobe className="info-icon" />
          <h3>Website</h3>
          <p>www.jayveerkumar.dev</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
