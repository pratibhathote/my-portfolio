import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="hero-section" id="about">
      {/* Print-Only Header Banner for PDF Export */}
      <div className="print-only-header" style={{ display: 'none' }}>
        <div className="print-name">{personalInfo.name.toUpperCase()}</div>
        <div className="print-sub">{personalInfo.role} &bull; {personalInfo.institution}</div>
        <div className="print-links">
          Email: {personalInfo.email} | Phone: {personalInfo.phone} | GitHub: {personalInfo.links.github} | LinkedIn: {personalInfo.links.linkedin}
        </div>
      </div>

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Positioning & Bio */}
          <div className="hero-main-content">
            <div className="hero-status-pill">
              <span className="status-pulse"></span>
              <span>Available for Technical Opportunities</span>
            </div>

            <h1 className="hero-name">{personalInfo.name.toUpperCase()}</h1>
            <div className="hero-role">{personalInfo.role}</div>

            <div className="hero-tagline">
              "{personalInfo.tagline}"
            </div>

            <p className="hero-bio">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowDown size={16} />
              </a>

              <a 
                href={personalInfo.links.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>

              <a 
                href={personalInfo.links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>

              <a 
                href={personalInfo.links.email} 
                className="btn btn-secondary"
              >
                <Mail size={16} />
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Summary Card */}
          <div className="hero-summary-col">
            <div className="hero-card-summary">
              <div className="hero-summary-title">Technical Profile Snapshot</div>
              
              <div className="hero-metric-row">
                <div className="hero-metric-box">
                  <div className="hero-metric-val">AI × Web3</div>
                  <div className="hero-metric-lbl">Hackathon Build</div>
                </div>
                <div className="hero-metric-box">
                  <div className="hero-metric-val">99.1%</div>
                  <div className="hero-metric-lbl">UAV Severity Acc.</div>
                </div>
              </div>

              <ul className="hero-focus-list">
                <li className="hero-focus-item">
                  <ShieldCheck size={16} />
                  <span>PayShield: Pre-Payment Risk & Scam Analyzer</span>
                </li>
                <li className="hero-focus-item">
                  <Cpu size={16} />
                  <span>UAV Engine Digital Twin RUL Estimation</span>
                </li>
                <li className="hero-focus-item">
                  <CheckCircle2 size={16} />
                  <span>Summer Intern at IGDTUW Anveshan Foundation</span>
                </li>
                <li className="hero-focus-item">
                  <CheckCircle2 size={16} />
                  <span>Selected for GirlScript Summer of Code 2026</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
