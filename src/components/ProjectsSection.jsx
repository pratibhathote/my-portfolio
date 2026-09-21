import React from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  Github, 
  Check, 
  AlertTriangle, 
  Layers, 
  Cpu, 
  Activity, 
  Recycle, 
  Database,
  ArrowUpRight
} from 'lucide-react';
import { featuredProject, otherProjects } from '../data/portfolioData';

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Layers size={13} />
            <span>Engineering Portfolio</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            AI-assisted systems, predictive modeling prototypes, and explainable machine learning architectures.
          </p>
        </div>

        {/* =================================================================
            PRIMARY FEATURED PROJECT: PAYSHIELD
           ================================================================= */}
        <div className="spotlight-card">
          <div className="spotlight-top-bar">
            <div className="spotlight-title-group">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <h3 className="spotlight-title">{featuredProject.title}</h3>
                <span className="badge badge-cyan">{featuredProject.badge}</span>
              </div>
              <div className="spotlight-subtitle">{featuredProject.subtitle}</div>
            </div>

            <div className="spotlight-actions no-print">
              <a 
                href={featuredProject.links.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-sm"
              >
                <span>Live Demo</span>
                <ExternalLink size={15} />
              </a>
              <a 
                href={featuredProject.links.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-sm"
              >
                <Github size={15} />
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>

          {/* Educational / Synthetic Data Disclaimer */}
          <div className="spotlight-notice">
            <AlertTriangle size={16} flexShrink={0} />
            <span><strong>Notice:</strong> {featuredProject.notice}</span>
          </div>

          <p className="spotlight-description">
            {featuredProject.description}
          </p>

          {/* System Architecture Diagram / Cards */}
          <div className="spotlight-arch-box">
            <div className="arch-header">
              <Cpu size={15} />
              <span>System Architecture & Pipeline Flow</span>
            </div>
            <div className="arch-pipeline-grid">
              {featuredProject.architecture.map((item, idx) => (
                <div key={idx} className="arch-node">
                  <div className="arch-node-layer">{item.layer}</div>
                  <div className="arch-node-tech">{item.tech}</div>
                  <div className="arch-node-role">{item.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features Breakdown */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', color: '#f8fafc', marginBottom: '1rem', fontWeight: 600 }}>
              Key System Functionalities
            </h4>
            <div className="features-grid">
              {featuredProject.keyFeatures.map((feat, idx) => (
                <div key={idx} className="feature-pill">
                  <Check size={14} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card Footer */}
          <div className="spotlight-footer">
            <div className="tech-tags-list">
              {featuredProject.techStack.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
              Deployed Frontend & Backend
            </div>
          </div>
        </div>

        {/* =================================================================
            SECONDARY PROJECTS GRID
           ================================================================= */}
        <div className="secondary-projects-grid">
          {otherProjects.map((project) => (
            <div key={project.id} className="secondary-project-card">
              <div>
                <div className="sec-card-header">
                  <span className="sec-tag">{project.tag}</span>
                  <h3 className="sec-title">{project.title}</h3>
                </div>

                <p className="sec-description">{project.description}</p>

                {/* Verified Metrics for UAV project */}
                {project.results && (
                  <div className="metrics-row">
                    {project.results.map((res, idx) => (
                      <div key={idx} className="metric-item">
                        <span className="metric-label">{res.label}</span>
                        <span className="metric-val">{res.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Focus Points */}
                <ul className="sec-focus-list">
                  {project.keyFocus.map((point, idx) => (
                    <li key={idx} className="sec-focus-item">{point}</li>
                  ))}
                </ul>
              </div>

              <div className="sec-card-footer">
                <div className="tech-tags-list">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
