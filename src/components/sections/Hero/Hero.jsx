import React from "react";
import "./Hero.css";

const Hero = ({ openModal }) => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name gradient-text">Pritesh Jadhav</h1>
          <h2 className="title">
            Software Developer | Full Stack | AI Integration
          </h2>

          <p className="tagline">Building Smart & Scalable Web Experiences</p>

          <p className="description">
            Transforming ideas into modern web applications through full-stack
            development, cloud technologies, and AI-driven solutions. Currently
            pursuing a B.Sc. in Computer Science (AI, ML & VR), I build
            responsive and scalable applications using React.js, Node.js,
            Express.js, and MongoDB.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <button onClick={openModal} className="btn-secondary">
              View Resume
            </button>
          </div>
        </div>

        {/* Optional decorative elements for premium feel */}
        <div className="hero-decoration">
          <div className="glow glow-1"></div>
          <div className="glow glow-2"></div>
          <div className="glass-shape shape-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
