import React, { useState ,useEffect } from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CancelIcon from '@mui/icons-material/Cancel';
import "./Project.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    id: 1,
    title: "YouTube Video Platform",
    description: "Watch and explore videos with like, comment, and subscribe features built with MERN",
    tech: ["HTML", "CSS", "Javascript", "Node.js", "Express"],
    preview: "https://your-live-link.com",
    images: [
      "/images/Youtube/youtube-image1.png",
      "/images/Youtube/youtube-image2.png",
      "/images/Youtube/youtube-image3.png",
      "/images/Youtube/youtube-image4.png",
      "/images/Youtube/youtube-image5.png",
      "/images/Youtube/youtube-image6.png",
    ],
    thumbnail: "https://global.discourse-cdn.com/brave/original/3X/d/1/d176440c078b26c4c131b571138559a9a662a643.jpeg"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my web development skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    preview: "https://your-live-link.com",
    images: [
      "/images/project1_1.png",
      "/images/project1_2.png",
      "/images/project1_3.png"
    ],
    thumbnail: "https://codehalweb.com/wp-content/uploads/2023/05/thumbnail-19-741x486.jpg"
  },
  {
    id: 3,
    title: "E-commerce App",
    description: "A basic e-commerce app with cart and product filtering.",
    tech: ["HTML , CSS , Javascript","EJS Templating","Node.js , Express.js", "MongoDB"],
    preview: "https://your-ecommerce-live.com",
    images: [
      "/images/Shopcard/shopcard-image1.png",
      "/images/Shopcard/shopcard-image2.png",
      "/images/Shopcard/shopcard-image3.png",
      "/images/Shopcard/shopcard-image4.png",
      "/images/Shopcard/shopcard-image5.png",
      "/images/Shopcard/shopcard-image6.png",
      "/images/Shopcard/shopcard-image7.png",
      "/images/Shopcard/shopcard-image8.png",
      "/images/Shopcard/shopcard-image9.png",
      "/images/Shopcard/shopcard-image10.png",
    ],
    thumbnail: "https://graphicsfamily.com/wp-content/uploads/edd/2022/11/Simple-E-commerce-Banner-Design-scaled.jpg"
  },
  // Add more projects similarly
];

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 20,
  });
}, []);

  const openProject = (project) => {
    setActiveProject(project);
    setActiveImageIndex(0);
  };

  const closeProject = () => setActiveProject(null);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % activeProject.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) =>
      (prev - 1 + activeProject.images.length) % activeProject.images.length
    );
  };

  return (
    <div id="projects" className="project-section">
      <div className="projects-head">
        <h1  className="projects-heading">My Projects</h1>
      </div>

      <p >Some projects that demonstrate my skills and learning journey.</p>
      <div className="projects-container">
        {projects.map((project,index) => (
          <div data-aos="fade-left" data-aos-offset="20" data-aos-delay={index*200} data-aos-duration="1000" className="project-box" key={project.id}>
            <img src={project.thumbnail} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="buttons">
                <a href={project.preview} target="_blank" rel="noreferrer">
                  <button  >Live Preview</button>
                </a>
                <button  onClick={() => openProject(project)}>Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeProject}>  <CancelIcon /> </span>
            <h4 className="modal-content-title">{activeProject.title}</h4>
            <div className="carousel">
              <button onClick={prevImage} className="nav-btn left-slide-image-btn "> <ArrowCircleLeftIcon /> </button>
              <img
                src={activeProject.images[activeImageIndex]}
                alt={activeProject.title}
              />
              <button onClick={nextImage} className="nav-btn right-slide-image-btn"> <ArrowCircleRightIcon /> </button>
            </div>
            {/* <p>Technologies used: {activeProject.tech.join(", ")}</p> */}
            <div className="modal-content-bio">
              <p>Tech Stack Used</p>
              <hr />
              <ul className="modal-tech-stack">
                {activeProject.tech.map((item, index) => (
                  <li key={index}>{item}</li> 
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectSection;