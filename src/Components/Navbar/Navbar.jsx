import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [showNavbar, setShowNavbar] = useState(false);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
        AOS.refresh();
    }, []);
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavClick = (id) => {
        scrollToSection(id);
        setActiveSection(id);
        if (drawerOpen) setDrawerOpen(false);
    };

    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Show sticky navbar only after home section (400px+)
            if (scrollPosition > 400) {
                setIsSticky(true);
                setShowNavbar(true);
            } else {
                setIsSticky(false);
                setShowNavbar(false);
            }

            // Track active section
            const sections = document.querySelectorAll("section, div[id]");
            let current = "home";

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollPosition >= sectionTop - 200) {
                    current = section.getAttribute("id");
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div  className={`navbar ${isSticky ? "sticky-nav" : ""} ${showNavbar ? "navbar-visible" : "navbar-hidden"}`}>
            <div  className="navbar-desktop">
                <h3 data-aos="fade-right" data-aos-offset="20" data-aos-duration="1000" className='logo'>Jayveer <span>Kumar</span></h3>

                <ul className='nav-links'>
                    <li data-aos="fade-left" data-aos-offset="20" data-aos-delay="50" data-aos-duration="1000" onClick={() => handleNavClick("home")} className={activeSection === "home" ? "activelink" : ""}>Home</li>
                    <li data-aos="fade-left" data-aos-offset="20" data-aos-delay="200" data-aos-duration="1000" onClick={() => handleNavClick("about")} className={activeSection === "about" ? "activelink" : ""}>About Me</li>
                    <li data-aos="fade-left" data-aos-offset="20" data-aos-delay="400" data-aos-duration="1000" onClick={() => handleNavClick("skills")} className={activeSection === "skills" ? "activelink" : ""}>Skills</li>
                    <li data-aos="fade-left" data-aos-offset="20" data-aos-delay="600" data-aos-duration="1000" onClick={() => handleNavClick("projects")} className={activeSection === "projects" ? "activelink" : ""}>Projects</li>
                    <li data-aos="fade-left" data-aos-offset="20" data-aos-delay="800" data-aos-duration="1000" onClick={() => handleNavClick("contact")} className={activeSection === "contact" ? "activelink" : ""}>Contact</li>
                </ul>

                <div className='nav-connect-box'>
                    <button data-aos="fade-right" data-aos-offset="20" data-aos-delay="80" data-aos-duration="1000" className='nav-connect'>Connect With Me</button>
                    <IconButton
                        className="menu-icon"
                        onClick={toggleDrawer}
                        sx={{ color: 'white', ml: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
            </div>

            <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer}>
                <div className="drawer-container">
                    <div className="drawer-header">
                        <IconButton onClick={toggleDrawer} className="close-icon-btn">
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <ul className="drawer-links">
                        <li onClick={() => handleNavClick("home")}>Home</li>
                        <li onClick={() => handleNavClick("about")}>About Me</li>
                        <li onClick={() => handleNavClick("skills")}>Skills</li>
                        <li onClick={() => handleNavClick("projects")}>Projects</li>
                        <li onClick={() => handleNavClick("contact")}>Contact</li>
                    </ul>
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;
