// import React, { useState, useEffect } from 'react';
// import "./Navbar.css";
// import { IconButton, Drawer } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// function Navbar() {
//     const [drawerOpen, setDrawerOpen] = useState(false);
//     const [isSticky, setIsSticky] = useState(false);
//     const [activeSection, setActiveSection] = useState('home');
//     const [showNavbar, setShowNavbar] = useState(false);

//     const scrollToSection = (id) => {
//         const section = document.getElementById(id);
//         if (section) {
//             section.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     const handleNavClick = (id) => {
//         scrollToSection(id);
//         setActiveSection(id);
//         // Ensure sidebar is closed when link is clicked
//         if (drawerOpen) setDrawerOpen(false);
//     };

//     const toggleDrawer = () => {
//         setDrawerOpen((prev) => !prev);
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY;

//             // Sticky navbar
//             if (scrollPosition > 400) {
//                 setIsSticky(true);
//             } else {
//                 setIsSticky(false);
//             }

//             // Active section tracking
//             const sections = document.querySelectorAll("section, div[id]");
//             let current = "home";

//             sections.forEach(section => {
//                 const sectionTop = section.offsetTop;
//                 const sectionHeight = section.offsetHeight;

//                 if (scrollPosition >= sectionTop - 200) {
//                     current = section.getAttribute("id");
//                 }
//             });

//             setActiveSection(current);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <div className={`navbar ${isSticky ? "sticky-nav" : ""}`}>
//             <div className="navbar-desktop">
//                 <h3 className='logo'>Jayveer <span>Kumar</span></h3>

//                 <ul className='nav-links'>
//                     <li onClick={() => handleNavClick("home")} className={activeSection === "home" ? "activelink" : ""}>Home</li>
//                     <li onClick={() => handleNavClick("about")} className={activeSection === "about" ? "activelink" : ""}>About Me</li>
//                     <li onClick={() => handleNavClick("skills")} className={activeSection === "skills" ? "activelink" : ""}>Skills</li>
//                     <li onClick={() => handleNavClick("projects")} className={activeSection === "projects" ? "activelink" : ""}>Projects</li>
//                     <li onClick={() => handleNavClick("contact")} className={activeSection === "contact" ? "activelink" : ""}>Contact</li>
//                 </ul>

//                 <div className='nav-connect-box'>
//                     <button className='nav-connect'>Connect With Me</button>
//                     <IconButton
//                         className="menu-icon"
//                         onClick={toggleDrawer}
//                         sx={{ color: 'white', ml: 1 }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                 </div>
//             </div>

//             {/* Sidebar Drawer */}
//             <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer}>
//                 <div className="drawer-container">
//                     {/* Close icon inside the drawer */}
//                     <div className="drawer-header">
//                         <IconButton onClick={toggleDrawer} className="close-icon-btn">
//                             <CloseIcon />
//                         </IconButton>
//                     </div>

//                     <ul className="drawer-links">
//                         <li onClick={() => handleNavClick("home")}>Home</li>
//                         <li onClick={() => handleNavClick("about")}>About Me</li>
//                         <li onClick={() => handleNavClick("skills")}>Skills</li>
//                         <li onClick={() => handleNavClick("projects")}>Projects</li>
//                         <li onClick={() => handleNavClick("contact")}>Contact</li>
//                     </ul>
//                 </div>
//             </Drawer>
//         </div>
//     );
// }

// export default Navbar;



import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [showNavbar, setShowNavbar] = useState(false);

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
        <div className={`navbar ${isSticky ? "sticky-nav" : ""} ${showNavbar ? "navbar-visible" : "navbar-hidden"}`}>
            <div className="navbar-desktop">
                <h3 className='logo'>Jayveer <span>Kumar</span></h3>

                <ul className='nav-links'>
                    <li onClick={() => handleNavClick("home")} className={activeSection === "home" ? "activelink" : ""}>Home</li>
                    <li onClick={() => handleNavClick("about")} className={activeSection === "about" ? "activelink" : ""}>About Me</li>
                    <li onClick={() => handleNavClick("skills")} className={activeSection === "skills" ? "activelink" : ""}>Skills</li>
                    <li onClick={() => handleNavClick("projects")} className={activeSection === "projects" ? "activelink" : ""}>Projects</li>
                    <li onClick={() => handleNavClick("contact")} className={activeSection === "contact" ? "activelink" : ""}>Contact</li>
                </ul>

                <div className='nav-connect-box'>
                    <button className='nav-connect'>Connect With Me</button>
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
