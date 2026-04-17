import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <h2 className="reveal">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="about-content reveal">
          <div className="about-text glass-panel">
            <p>
              Hello! I'm Pritesh Jadhav, a Full Stack Developer based in Nashik, Maharashtra. I specialize in the MERN stack with a strong passion for building responsive, scalable, and creative web applications.
            </p>
            <p>
              I am currently pursuing my Third Year BSc in Computer Science, focusing on Artificial Intelligence, Machine Learning, and Virtual Reality (AIML & VR) at Sandip University.
            </p>
            <p>
              My journey in tech is driven by curiosity and a desire to solve real-world problems through clean and efficient code. Whether I'm designing a premium UI or structuring a backend database, I aim for excellence and continuous learning.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h3>Location</h3>
                <p>Nashik, Maharashtra</p>
              </div>
              <div className="stat-item">
                <h3>Role</h3>
                <p>Full Stack Developer</p>
              </div>
              <div className="stat-item">
                <h3>Interest</h3>
                <p>MERN, UI/UX, AIML</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
