import React from 'react' // Assuming you have a CSS file for styles
import Themetoggle from '../../components/Themetoggle'
import StarBackground from '../../components/StarBackground'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import AboutMeSection from '../../components/AboutMeSection'
import SkillsSection from '../../components/SkillsSection'
import Projects from '../../components/Projects'
import ContactSection from '../../components/ContactSection'
import Footer from '../../components/Footer'
// min-h-screen : {min-height: 100vh;}
const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        
        {/* Theme Toggle */}
        <Themetoggle/>
        {/* Background Effect */}
        <StarBackground/>
        {/* Navbar */}
        <Navbar/>
        {/* Main content */}
        <main>
          <HeroSection/>
          <AboutMeSection/>
          <SkillsSection/>
          <Projects/>
          <ContactSection/>
        </main>
        <Footer/>
        {/* Footer */}
    </div>
  )
}

export default Home
