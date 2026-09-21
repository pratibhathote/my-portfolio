import React, { useState } from 'react';
import { Printer, Menu, X, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const navLinks = [
    { label: "Skills", href: "#skills" },
    { label: "Featured Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Hackathons", href: "#hackathons" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <a href="#" className="nav-brand">
            <div className="nav-logo-box">PT</div>
            <div className="nav-brand-text">
              {personalInfo.name}
              <span>/ Portfolio</span>
            </div>
          </a>

          <nav className="nav-links">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button 
              onClick={handlePrint}
              className="btn btn-secondary btn-sm print-btn"
              title="Print or Export Portfolio to PDF"
            >
              <Printer size={15} />
              <span>Export PDF</span>
            </button>

            <a 
              href={personalInfo.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm no-mobile"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>

            <a 
              href={personalInfo.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm no-mobile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>

            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link, idx) => (
          <a 
            key={idx} 
            href={link.href} 
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <button 
          onClick={() => { setMobileMenuOpen(false); handlePrint(); }}
          className="btn btn-secondary btn-sm"
          style={{ marginTop: '0.5rem', width: '100%' }}
        >
          <Printer size={15} />
          <span>Export to PDF</span>
        </button>
      </div>
    </header>
  );
}
