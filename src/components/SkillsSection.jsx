import React from 'react';
import { Code2, BrainCircuit, Layout, Terminal, Sparkles, BookOpen } from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Terminal size={13} />
            <span>Capability Matrix</span>
          </div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Core competencies, machine learning toolsets, full-stack frameworks, and ongoing learning areas.
          </p>
        </div>

        <div className="skills-grid">
          {/* 1. Languages */}
          <div className="skill-card">
            <div className="skill-card-header">
              <div className="skill-icon-wrapper">
                <Code2 size={18} />
              </div>
              <h3 className="skill-card-title">Languages</h3>
            </div>
            <ul className="skill-items-list">
              {technicalSkills.languages.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-detail">{skill.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. AI / ML */}
          <div className="skill-card">
            <div className="skill-card-header">
              <div className="skill-icon-wrapper" style={{ color: '#00e5ff', background: 'rgba(0, 229, 255, 0.1)' }}>
                <BrainCircuit size={18} />
              </div>
              <h3 className="skill-card-title">AI / ML</h3>
            </div>
            <ul className="skill-items-list">
              {technicalSkills.aiMl.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-detail">{skill.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Development */}
          <div className="skill-card">
            <div className="skill-card-header">
              <div className="skill-icon-wrapper" style={{ color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)' }}>
                <Layout size={18} />
              </div>
              <h3 className="skill-card-title">Development</h3>
            </div>
            <ul className="skill-items-list">
              {technicalSkills.development.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-detail">{skill.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Core CS */}
          <div className="skill-card">
            <div className="skill-card-header">
              <div className="skill-icon-wrapper" style={{ color: '#a78bfa', background: 'rgba(167, 139, 250, 0.1)' }}>
                <Terminal size={18} />
              </div>
              <h3 className="skill-card-title">Core CS</h3>
            </div>
            <ul className="skill-items-list">
              {technicalSkills.coreCs.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-detail">{skill.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Currently Learning */}
          <div className="skill-card skill-card-learning">
            <div className="skill-card-header">
              <div className="skill-icon-wrapper" style={{ color: '#00e5ff', background: 'rgba(0, 229, 255, 0.15)' }}>
                <Sparkles size={18} />
              </div>
              <h3 className="skill-card-title">Currently Learning</h3>
            </div>
            <ul className="skill-items-list">
              {technicalSkills.currentlyLearning.map((item, idx) => (
                <li key={idx} className="skill-item">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="skill-name">{item.name}</span>
                    <span className="learning-badge">{item.status}</span>
                  </div>
                  <span className="skill-detail">{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
