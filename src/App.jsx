import { useState } from 'react'
import Header from './components/Header'
import Hero from './sections/HeroSection';
import AboutMeSection from './sections/AboutMeSection';
import EducationTimeline from './sections/MyEducationSection';
import SkillsComponent from './sections/MySkills';
import ProjectsComponent from './sections/Projects';
import HackathonComponent from './sections/Hackathons';
import ContactComponent from './sections/ContactMe';

function App() {



  return (
    <>
      <Header />
      <Hero />
      <AboutMeSection />
      <EducationTimeline />
      <SkillsComponent />
      <ProjectsComponent />
      <HackathonComponent />
      <ContactComponent />
      {/* <img src={bg} alt='Portfolio' className='w-full h-auto' /> */}
    </>
  )
}

export default App
