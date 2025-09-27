import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/portfolio';
import { Button } from './ui/button';

const Hero: React.FC = () => {

  return (
    <>
      <Helmet>
        <title>Prasad R Mutnale - Software Engineer</title>
        <meta name="description" content={personalInfo.summary} />
      </Helmet>
      
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-primary/15 rounded-full blur-lg animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Side - Profile Details */}
              <div className="text-left space-y-6 animate-fade-in">
                
                {/* Profile Image */}
                <div className="flex justify-start mb-6">
                  <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary ring-offset-4 ring-offset-background">
                    <img 
                      src="/profile.png" 
                      alt="Prasad R Mutnale" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name and Title */}
                <div className="space-y-3">
                  <h1 className="text-3xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground leading-tight animate-slide-up">
                    {personalInfo.name}
                  </h1>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                  <h2 className="text-lg lg:text-xl xl:text-2xl font-heading text-muted-foreground font-medium animate-slide-up" style={{animationDelay: '0.2s'}}>
                    {personalInfo.title}
                  </h2>
                </div>



                {/* Social Links */}
                <div className="flex space-x-3 animate-slide-up" style={{animationDelay: '0.4s'}}>
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon === 'FaLinkedin' ? FaLinkedin :
                                       link.icon === 'FaGithub' ? FaGithub :
                                       link.icon === 'FaEnvelope' ? FaEnvelope :
                                       FaPhone;
                    
                    return (
                      <Button
                        key={link.name}
                        asChild
                        variant="ghost"
                        size="icon"
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-muted/20 hover:bg-primary/10 hover:text-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300 group border border-border/30 hover:border-primary/50"
                      >
                        <a
                          href={link.url}
                          aria-label={link.name}
                          className="relative overflow-hidden"
                        >
                          <IconComponent className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                      </Button>
                    );
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 animate-slide-up" style={{animationDelay: '0.6s'}}>
                  <Button 
                    asChild 
                    size="lg" 
                    className="group relative overflow-hidden bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 text-primary-foreground font-semibold px-6 py-3 lg:px-8 lg:py-4 rounded-full shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
                  >
                    <a href="#contact" className="flex items-center gap-2 lg:gap-3">
                      <FaEnvelope className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
                      Get In Touch
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    </a>
                  </Button>

                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="group relative overflow-hidden border-2 border-primary/40 hover:border-primary bg-transparent hover:bg-primary/5 text-foreground hover:text-primary font-semibold px-6 py-3 lg:px-8 lg:py-4 rounded-full hover:scale-105 transition-all duration-300"
                  >
                    <a href="/resume.pdf" download className="flex items-center gap-2 lg:gap-3">
                      <FaDownload className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
                      Download Resume
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Side - About Me */}
              <div className="space-y-6 animate-slide-in-right">
                <div className="bg-muted/20 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-border/20">
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">About Me</h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed font-body">
                    {personalInfo.summary}
                  </p>
                </div>
                
                {/* Additional decorative elements */}
                <div className="relative h-24 lg:h-32">
                  <div className="absolute top-0 right-0 w-20 h-20 lg:w-24 lg:h-24 bg-primary/10 rounded-full blur-xl animate-float"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 lg:w-16 lg:h-16 bg-primary/15 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;