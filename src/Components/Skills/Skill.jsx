// import React from 'react';
// import './Skill.css';

// const skillsData = [
//   { name: 'HTML', level: 95, img: '/images/html.png' },
//   { name: 'CSS', level: 90, img: '/images/css.png' },
//   { name: 'JavaScript', level: 85, img: '/images/Javascript.png' },
//   { name: 'React', level: 80, img: '/images/React.png' },
//   { name: 'React Native', level: 75, img: '/images/ReactNative.png' },
//   { name: 'MongoDB', level: 70, img: '/images/MongoDB.png' },
//   { name: 'SQL', level: 75, img: '/images/MySql.png' },
//   { name: 'Node.js', level: 80, img: '/images/Node.png' },
//   { name: 'Express', level: 78, img: '/images/Express.png' },
//   { name: 'Java', level: 65, img: '/images/Java.png' },
//   { name: 'C++', level: 60, img: '/images/C++.png' },
// ];

// function Skills() {
//   const leftSkills = skillsData.slice(0, Math.ceil(skillsData.length / 2));
//   const rightSkills = skillsData.slice(Math.ceil(skillsData.length / 2));

//   return (
//     <section id='skills' className="skills-section">
//       <div className="skills-heading-box">
//           <h1 className="skills-heading">My Skills</h1>
//       </div>
      
//       <p className="skills-subtext">
//         Always looking forward to learn new things but this is my primary skill set
//       </p>

//       <div className="skills-container">
//         <div className="skills-box">
//           {leftSkills.map((skill, index) => (
//             <div className="skill-item" key={index}>
//               <div className="skill-title">
//                 <img src={skill.img} alt={skill.name} />
//                 <span>{skill.name}</span>
//               </div>
//               <div className="progress-bar">
//                 <div
//                   className="progress-fill"
//                   style={{ width: `${skill.level}%` }}
//                 >
//                   <span>{skill.level}%</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="skills-box">
//           {rightSkills.map((skill, index) => (
//             <div className="skill-item" key={index}>
//               <div className="skill-title">
//                 <img src={skill.img} alt={skill.name} />
//                 <span>{skill.name}</span>
//               </div>
//               <div className="progress-bar">
//                 <div
//                   className="progress-fill"
//                   style={{ width: `${skill.level}%` }}
//                 >
//                   <span>{skill.level}%</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;
import React, { useEffect, useRef } from 'react';
import './Skill.css';

const skillsData = [
  { name: 'HTML', level: 95, img: '/images/html.png' },
  { name: 'CSS', level: 90, img: '/images/css.png' },
  { name: 'JavaScript', level: 85, img: '/images/Javascript.png' },
  { name: 'React', level: 80, img: '/images/React.png' },
  { name: 'React Native', level: 75, img: '/images/ReactNative.png' },
  { name: 'MongoDB', level: 70, img: '/images/MongoDB.png' },
  { name: 'SQL', level: 75, img: '/images/MySql.png' },
  { name: 'Node.js', level: 80, img: '/images/Node.png' },
  { name: 'Express', level: 78, img: '/images/Express.png' },
  { name: 'Java', level: 65, img: '/images/Java.png' },
  { name: 'C++', level: 60, img: '/images/C++.png' },
];

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const bars = sectionRef.current.querySelectorAll('.progress-fill');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            bars.forEach(bar => {
              const level = bar.getAttribute('data-level');
              bar.style.width = `${level}%`;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const leftSkills = skillsData.slice(0, Math.ceil(skillsData.length / 2));
  const rightSkills = skillsData.slice(Math.ceil(skillsData.length / 2));

  return (
    <section id='skills' className="skills-section" ref={sectionRef}>
      <div className="skills-heading-box">
        <h1 className="skills-heading">My Skills</h1>
      </div>

      <p className="skills-subtext">
        Always looking forward to learn new things but this is my primary skill set
      </p>

      <div className="skills-container">
        <div className="skills-box">
          {leftSkills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-title">
                <img src={skill.img} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  data-level={skill.level}
                  style={{ width: '0%' }}
                >
                  <span>{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-box">
          {rightSkills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-title">
                <img src={skill.img} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  data-level={skill.level}
                  style={{ width: '0%' }}
                >
                  <span>{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;