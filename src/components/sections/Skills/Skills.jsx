import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', category: 'Frontend' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'HTML & CSS', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
    { name: 'Git & GitHub', category: 'Tools' },
    { name: 'Vercel', category: 'Tools' },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="reveal">
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="skills-grid reveal">
          {skills.map((skill, index) => (
            <div 
              className="skill-card glass-panel" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">
                {/* A generic glowing dot to match theme instead of specific SVG icons which clutter the file */}
                <div className="dot"></div>
              </div>
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
