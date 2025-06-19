import { Github, Instagram, Linkedin, Mail, Phone, Send, Twitter } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const ContactSection = () => {
    const[isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        toast.success("Message Send Successfully.");

};

  return (
    <section id="contact" className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Get In <span className='text-primary'> Touch </span></h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>Have a Project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='space-y-8 '>
                    <h3 className='text-2xl font-semibold mb-6'>Contact <span className='text-primary'>Information</span></h3>
                    <div className='space-y-6 justify-center'>
                        <div className='flex items-center space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10 '>
                                <Mail className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='flex'>
                                <h4 className='font-medium'>Email: </h4>
                                <a href="mailto:priyanshunigam987@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                           priyanshunigam987@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10 '>
                                <Phone className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='flex'>
                                <h4 className='font-medium'>Phone: </h4>
                                <a href="tel:9315580536" className='text-muted-foreground hover:text-primary transition-colors'>
                                    ` +91 9315580536`
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='pt-8'>
                        <h4 className='font-medium mb-4 '>Connect With Me</h4>
                        <div className='flex space-x-4 justify-center'>
                                <a href="https://www.linkedin.com/in/priyanshu-nigam-845399269/" target='_blank'>
                                    <Linkedin/>
                                </a>
                                <a href="https://x.com/PriyanshuTechie" target='_blank'>
                                    <Twitter/>
                                </a>
                                <a href="https://github.com/Priyansu22382" target='_blank'>
                                    <Github/>
                                </a>
                        </div>
                    </div>
                </div>

                <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className='mb-5 text-purple-400 text-1xl font-bold'>Send a Message</h3>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor='name' className='block text-sm font-medium mb-2'> Your Name</label>
                                <input type="text" id="name" name="name" required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary' placeholder='Priyanshu Nigam...'/>
                            </div>

                            <div>
                                <label htmlFor='email' className='block text-sm font-medium mb-2'> Your Email</label>
                                <input type="email" id="email" name="email" required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary' placeholder='priyanshunigam987@gmail.com...'/>
                            </div>

                            <div>
                                <label htmlFor='message' className='block text-sm font-medium mb-2'> Your Message</label>
                                <textarea id="message" name="message" required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary resize-none' placeholder='Type Something...'/>
                            </div>
                            <button type='submit' className='cosmic-button w-full flex items-center justify-center gap-2' disabled={isSubmitting} onClick={handleSubmit}>
                                    {isSubmitting ? "Sending Message" : "Send Message"}
                                    <Send size={16}/>
                            </button>
                        </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection
