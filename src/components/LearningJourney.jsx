import React from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { learningJourney } from '../data/portfolioData';

export default function LearningJourney() {
  return (
    <section className="journey-section" id="journey">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Compass size={13} />
            <span>Growth Trajectory</span>
          </div>
          <h2 className="section-title">Technical Learning Journey</h2>
          <p className="section-subtitle">
            Progression across software engineering, machine learning pipelines, hackathon builds, and active algorithmic problem-solving.
          </p>
        </div>

        <div className="journey-timeline">
          {learningJourney.map((item, idx) => {
            const isActive = item.category === "Current Focus";
            return (
              <div 
                key={idx} 
                className={`journey-node ${isActive ? 'active-focus' : ''}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="journey-step-num">{item.step}</span>
                  {isActive && (
                    <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>
                      <Sparkles size={10} />
                      <span>Active Focus</span>
                    </span>
                  )}
                </div>

                <div className="journey-cat-badge">{item.category}</div>
                <h3 className="journey-node-title">{item.title}</h3>
                <p className="journey-node-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
