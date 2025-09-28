import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { projects, personalInfo } from '../data/portfolio';
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar } from 'react-icons/fa';
import { Button } from './ui/button';
import { Card, CardContent, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured' | 'AI/ML' | 'Web Development'>('all');

  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured)
    : filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <>
      <Helmet>
        <title>Projects Portfolio - Prasad R Mutnale | Software Engineer | Backend Developer</title>
        <meta name="description" content="Explore Prasad R Mutnale's featured projects including backend applications, web development projects, and full-stack solutions. Healthcare admin portal, car decor application, and more." />
        <meta name="keywords" content="Prasad Mutnale Projects, Software Development Projects, Backend Development Projects, Web Development Projects, React Projects, Node.js Projects, Full Stack Projects, Healthcare Admin Portal, Car Decor Application, Django Projects, MERN Stack Projects, API Development Projects" />
        <meta property="og:title" content="Projects Portfolio - Prasad R Mutnale | Software Engineer" />
        <meta property="og:description" content="Explore Prasad R Mutnale's featured projects including backend applications, web development projects, and full-stack solutions. Healthcare admin portal, car decor application, and more." />
        <meta property="og:image" content="https://prasad-mutnale.vercel.app/profile.png" />
        <meta property="twitter:title" content="Projects Portfolio - Prasad R Mutnale | Software Engineer" />
        <meta property="twitter:description" content="Explore Prasad R Mutnale's featured projects including backend applications, web development projects, and full-stack solutions." />
        <meta property="twitter:image" content="https://prasad-mutnale.vercel.app/profile.png" />
        <link rel="canonical" href="https://prasad-mutnale.vercel.app/#projects" />
      </Helmet>
      
      <section id="projects" className="py-20 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground animate-fade-in">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8 px-4 animate-slide-up">
                A showcase of my recent work and side projects
              </p>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  onClick={() => setFilter('all')}
                  variant={filter === 'all' ? 'default' : 'outline'}
                  className={`group relative overflow-hidden px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                    filter === 'all' 
                      ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 scale-105 button-selected' 
                      : 'hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  <span className="relative z-10">All Projects</span>
                  {filter === 'all' && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  )}
                </Button>
                <Button
                  onClick={() => setFilter('featured')}
                  variant={filter === 'featured' ? 'default' : 'outline'}
                  className={`group relative overflow-hidden px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                    filter === 'featured' 
                      ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 scale-105 button-selected' 
                      : 'hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  <FaStar className={`w-4 h-4 transition-transform duration-300 ${
                    filter === 'featured' ? 'animate-spin' : 'group-hover:rotate-12'
                  }`} />
                  <span className="relative z-10">Featured</span>
                  {filter === 'featured' && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  )}
                </Button>
                <Button
                  onClick={() => setFilter('AI/ML')}
                  variant={filter === 'AI/ML' ? 'default' : 'outline'}
                  className={`group relative overflow-hidden px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                    filter === 'AI/ML' 
                      ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 scale-105 button-selected' 
                      : 'hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  <span className="relative z-10">AI/ML</span>
                  {filter === 'AI/ML' && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  )}
                </Button>
                <Button
                  onClick={() => setFilter('Web Development')}
                  variant={filter === 'Web Development' ? 'default' : 'outline'}
                  className={`group relative overflow-hidden px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                    filter === 'Web Development' 
                      ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 scale-105 button-selected' 
                      : 'hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  <span className="relative z-10">Web Development</span>
                  {filter === 'Web Development' && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group hover:-translate-y-2 hover:scale-105 transform transition-all duration-300 overflow-hidden border-0 shadow-none"
                >
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-muted/20 via-primary/20 to-secondary/20 flex items-center justify-center">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to icon if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = '<div class="flex items-center justify-center w-full h-full"><svg class="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg></div>';
                            }
                          }}
                        />
                      </div>
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        {project.featured && (
                          <Badge variant="secondary" className="px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                            <FaStar className="w-3 h-3" />
                            Featured
                          </Badge>
                        )}
                        <Badge 
                          variant={project.category === 'AI/ML' ? 'default' : project.category === 'Web Development' ? 'secondary' : 'outline'}
                          className="px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Project Content */}
                    <CardContent className="p-6">
                      <CardTitle className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </CardTitle>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 6&& (
                          <Badge variant="outline" className="px-3 py-1 rounded-full text-sm font-medium">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button
                          asChild
                          variant="outline"
                          className="group flex-1 flex items-center justify-center gap-2 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all duration-300"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <FaGithub className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                            Code
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button
                            asChild
                            variant="default"
                            className="group flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <FaExternalLinkAlt className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {/* View More Button */}
            <div className="text-center mt-12">
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="group relative overflow-hidden border-2 border-primary/40 hover:border-primary bg-transparent hover:bg-primary/5 text-foreground hover:text-primary font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
              >
                <a 
                  href={`${personalInfo.github}?tab=repositories`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  View More
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </a>
              </Button>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <Card className="p-8 border-0 shadow-none">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Interested in working together?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    I'm always open to discussing new opportunities and interesting projects. 
                    Let's connect and build something amazing together!
                  </p>
                  <Button asChild className="inline-flex items-center gap-2 hover:scale-105 transform transition-all duration-200">
                    <a href="#contact">
                      <FaCode className="w-4 h-4" />
                      Get In Touch
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
