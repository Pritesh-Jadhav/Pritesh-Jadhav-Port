import React, { useEffect } from 'react';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Resume Viewer</h3>
          <button className="close-btn" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>
        
        <div className="modal-body">
          <iframe 
            src="/resume.pdf#toolbar=0&navpanes=0" 
            title="Pritesh Jadhav Resume"
            className="resume-iframe"
          >
            <p>
              Your browser does not support PDFs. 
              <br />
              <a href="/resume.pdf" className="fallback-link">Download the PDF to view it</a>.
            </p>
          </iframe>
        </div>
        
        <div className="modal-footer">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Open in New Tab
          </a>
          <a href="/resume.pdf" download="Pritesh_Jadhav_Resume.pdf" className="btn-primary">
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
