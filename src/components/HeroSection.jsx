import React from 'react'

const HeroSection = () => {
  return (
    <section id='hero' className='relative flex flex-col min-h-screen items-center justify-center px-4'>
        <div className='container max-w-4xl mx-auto text-center z-10'>
            <div className='space-y-6 '>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                    <span className='opacity-0 animate-fade-in'> Hi, I'm</span>
                    <span className='text-primary opacity-0 animate-fade-in-delay-1'> Priyanshu</span>
                </h1>
            </div>
            <p className='w-1xl text-15 md:text-1 md:w-3xl sm:w-4xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3 my-10 '>
                ECE undergrad at IIIT Delhi passionate about crafting intelligent, full-stack solutions at the intersection of hardware and AI. I specialize in building scalable web apps and ML-driven systems that solve real-world problems with elegance and efficiency. Always learning, always building — ready to bring innovation, speed, and smart thinking to your next big challenge.
            </p>
            <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                <a href='#projects' className='cosmic-button'>
                    View My Work
                </a>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
