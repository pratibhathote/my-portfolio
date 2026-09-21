import React from 'react';
import { Briefcase, Trophy, GitPullRequest, CheckCircle2, Terminal, Shield } from 'lucide-react';
import { experience, hackathonsAndPrograms } from '../data/portfolioData';

export default function ExperienceHackathons() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="exp-hack-grid">
          {/* Column 1: Experience */}
          <div>
            <div className="exp-column-title">
              <Briefcase size={22} />
              <span>Work Experience</span>
            </div>

            {experience.map((exp, idx) => (
              <div key={idx} className="exp-card">
                <div style={{ marginBottom: '0.75rem' }}>
                  <h3 className="exp-role-title">{exp.role}</h3>
                  <div className="exp-org">{exp.organization}</div>
                </div>

                <ul className="exp-points-list">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="exp-point">
                      <CheckCircle2 size={16} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 2: Hackathons & Open Source */}
          <div id="hackathons">
            <div className="exp-column-title">
              <Trophy size={22} />
              <span>Hackathons & Open Source</span>
            </div>

            {hackathonsAndPrograms.map((item, idx) => (
              <div key={idx} className="exp-card">
                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 className="exp-role-title">{item.title}</h3>
                    <span className="badge badge-cyan">{item.type}</span>
                  </div>
                  <div className="exp-org" style={{ color: '#38bdf8' }}>{item.subtitle}</div>
                </div>

                <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '1rem', lineHeight: '1.5' }}>
                  {item.description}
                </p>

                <ul className="exp-points-list" style={{ marginBottom: '1.25rem' }}>
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="exp-point">
                      <CheckCircle2 size={16} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="tech-tags-list">
                  {item.techStack.map((t, tIdx) => (
                    <span key={tIdx} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
