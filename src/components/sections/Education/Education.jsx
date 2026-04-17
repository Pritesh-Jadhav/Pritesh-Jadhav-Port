import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="reveal">
          My <span className="gradient-text">Education</span>
        </h2>
        
        <div className="timeline-container reveal">
          <div className="timeline-item glass-panel">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>BSc Computer Science (AIML & VR)</h3>
              <div className="timeline-meta">
                <span className="institution">Sandip University</span>
                <span className="year">Third Year - Present</span>
              </div>
              <p>
                Currently pursuing comprehensive knowledge in Artificial Intelligence, Machine Learning, and Virtual Reality. 
                Focusing on both theoretical algorithms and practical implementation of modern web & software technologies.
              </p>
            </div>
          </div>
          
          {/* Add more timeline items here if needed */}
        </div>
      </div>
    </section>
  );
};

export default Education;
