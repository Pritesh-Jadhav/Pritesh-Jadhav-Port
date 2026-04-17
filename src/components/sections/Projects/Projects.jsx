import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Rhythm of Tabla',
      description: 'React-based interactive tabla rhythm generator. Includes audio playback and controls, deployed on Vercel for seamless user experience.',
      tags: ['React', 'Audio API', 'CSS', 'Vercel'],
      link: 'https://rhythm-of-tabla.vercel.app/',
      repo: 'https://github.com/Pritesh-Jadhav/Rhythm-of-tabla'
    },
    {
      id: 2,
      title: 'Study Flow',
      description: 'Productivity web app designed for managing study tasks efficiently. Built with a focus on clean UI and seamless workflow improvement.',
      tags: ['React', 'HTML/CSS', 'JavaScript'],
      link: 'https://study-flow-sigma.vercel.app/',
      repo: 'https://github.com/Pritesh-Jadhav/Study-Flow'
    },
    {
      id: 3,
      title: 'Any to Any File Converter',
      description: 'A web-based application UI for converting files from one format to another. Focused on usability and modern layout design.',
      tags: ['Frontend Only', 'UI Project'],
      link: 'https://any-to-any-project.vercel.app/',
      repo: 'https://github.com/Pritesh-Jadhav/Any-to-Anny-project'
    }
  ];

  return (
    <section id="projects" className="section bg-secondary">
      <div className="container">
        <h2 className="reveal">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="projects-grid reveal">
          {projectsData.map(project => (
            <div className="project-card glass-panel" key={project.id}>
              <div className="project-image-placeholder">
                <span className="project-placeholder-text">{project.title}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary btn-sm">Live Demo</a>
                  <a href={project.repo} target="_blank" rel="noreferrer" className="btn-secondary btn-sm">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
