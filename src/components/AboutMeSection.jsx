import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutMeSection = () => {
  return (
    <section id="about" className="py-24 px-4 md:py-34 md:px-40 relative">
    <div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      About <span className="text-primary"> Me </span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mx-auto">
      {/* LEFT: Content */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-center md:text-left">
          Passionate Full-Stack Developer
        </h3>
        <p className="text-muted-foreground text-center md:text-left">
          With over 2 years of experience in Full-Stack Development, I specialize in creating Responsive, Accessible, and Performant Web Applications using modern Technologies.
        </p>
        <p className="text-muted-foreground text-center md:text-left">
          I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new Technologies and Techniques to stay at the forefront of the ever-evolving web landscape.
        </p>
        <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center md:justify-start">
          <a href="#contact" className="cosmic-button">
            Get In Touch
          </a>
          <a href="#contact" className="cosmic-button">
            Download CV
          </a>
        </div>
      </div>

      {/* RIGHT: Cards */}
      <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10 '>
                        <Code className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='text-semibold text-lg'> Web Development </h4>
                            <p className='text-muted-foreground'>
                                Creating Responsive Websites and Web Applications with modern Framworks
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10 '>
                        <User className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='text-semibold text-lg'> UI/UX Design </h4>
                            <p className='text-muted-foreground'>
                                Design intutive user interfaces and seamless user experiences.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10 '>
                        <Briefcase className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='text-semibold text-lg'> Project Management </h4>
                            <p className='text-muted-foreground'>
                                Leading Projects from conception to complete with agile methodologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>

  )
}

export default AboutMeSection
