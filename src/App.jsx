import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceHackathons from './components/ExperienceHackathons';
import LearningJourney from './components/LearningJourney';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="portfolio-wrapper">
      <div className="bg-grid-pattern" aria-hidden="true"></div>
      <Navbar />
      <main>
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceHackathons />
        <LearningJourney />
      </main>
      <ContactFooter />
    </div>
  );
}
