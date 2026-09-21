import React from 'react';
import { Mail, Github, Linkedin, Printer, ArrowUp, Phone, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactFooter() {
  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="contact-section" id="contact">
      <div className="container">
        {/* Contact Card */}
        <div className="contact-card">
          <h2 className="contact-heading">Get in Touch</h2>
          <p className="contact-sub">
            Open to engineering internships, technical discussions, and AI/software development opportunities.
          </p>

          <div className="contact-actions">
            <a 
              href={personalInfo.links.email} 
              className="btn btn-primary"
              title="Send an email to pratibhthote151@gmail.com"
            >
              <Mail size={16} />
              <span>pratibhthote151@gmail.com</span>
            </a>

            <a 
              href={personalInfo.links.phone} 
              className="btn btn-secondary"
              title="Call +91 8920824867"
            >
              <Phone size={16} />
              <span>+91 8920824867</span>
            </a>

            <a 
              href="/resume.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
              title="View 1-Page ATS Resume"
            >
              <FileText size={16} />
              <span>1-Page Resume (CV)</span>
            </a>

            <a 
              href={personalInfo.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
              title="Open LinkedIn Profile"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>

            <a 
              href={personalInfo.links.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
              title="Open GitHub Profile"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>

            <button 
              onClick={handlePrint} 
              className="btn btn-secondary no-print"
              title="Download / Save as PDF"
            >
              <Printer size={16} />
              <span>Download / Save as PDF</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="footer-brand">{personalInfo.name}</span> &bull; {personalInfo.role} &bull; {personalInfo.institution}
            </div>

            <button 
              onClick={scrollToTop}
              className="btn btn-ghost btn-sm no-print"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
