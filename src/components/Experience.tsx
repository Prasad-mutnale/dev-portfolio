import React from 'react';
import { Helmet } from 'react-helmet-async';
import { experiences } from '../data/portfolio';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Experience: React.FC = () => {

  return (
    <>
      <Helmet>
        <title>Professional Experience - Prasad R Mutnale | Software Engineer | SproutsAI</title>
        <meta name="description" content="Explore Prasad R Mutnale's professional experience as Software Engineer at SproutsAI, Backend Developer at Abhiyantrik Solutions. 2+ years of experience in backend development, API design, and real-time systems." />
        <meta name="keywords" content="Prasad Mutnale Experience, Software Engineer Experience, SproutsAI Engineer, Backend Developer Experience, Full Stack Developer Experience, Backend Development Experience, Professional Experience, Software Development Career, React Experience, Node.js Experience, TypeScript Experience, MongoDB Experience, AWS Experience, Docker Experience, API Development Experience" />
        <meta property="og:title" content="Professional Experience - Prasad R Mutnale | Software Engineer" />
        <meta property="og:description" content="Explore Prasad R Mutnale's professional experience as Software Engineer at SproutsAI, Backend Developer at Abhiyantrik Solutions. 2+ years of experience in backend development, API design, and real-time systems." />
        <meta property="og:image" content="https://prasad-mutnale.vercel.app/profile.png" />
        <meta property="twitter:title" content="Professional Experience - Prasad R Mutnale | Software Engineer" />
        <meta property="twitter:description" content="Explore Prasad R Mutnale's professional experience as Software Engineer at SproutsAI, Backend Developer at Abhiyantrik Solutions. 2+ years of experience in backend development, API design, and real-time systems." />
        <meta property="twitter:image" content="https://prasad-mutnale.vercel.app/profile.png" />
        <link rel="canonical" href="https://prasad-mutnale.vercel.app/#experience" />
      </Helmet>
      
          <section id="experience" className="py-20 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 lg:mb-6 text-foreground animate-fade-in">
                Professional Experience
              </h2>
              <div className="w-24 lg:w-32 h-1 bg-primary mx-auto rounded-full mb-4 lg:mb-6"></div>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4 animate-slide-up leading-relaxed">
                My journey in software development and engineering
              </p>
            </div>

            {/* Desktop Experience Grid */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-1 gap-8">
                {experiences.map((experience, index) => {
                  return (
                    <Card
                      key={experience.id}
                      className="p-6 lg:p-8 group transition-all duration-500 hover:-translate-y-2 transform animate-slide-up border-0 shadow-none hover:shadow-lg"
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      <CardHeader className="p-0 mb-4 lg:mb-6">
                        {/* Experience Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xs lg:text-sm font-bold text-primary-foreground">
                                  {index + 1}
                                </span>
                              </div>
                              <div>
                                <CardTitle className="text-lg lg:text-xl font-heading text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                                  {experience.title}
                                </CardTitle>
                                <p className="text-base lg:text-lg font-heading text-primary">
                                  {experience.company}
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          {experience.current && (
                            <Badge variant="secondary" className="px-3 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium shadow-lg bg-green-500 hover:bg-green-600 text-white border-green-500">
                              Current Position
                            </Badge>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="p-0">
                        {/* Location and Date */}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                          <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-xl">
                            <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                            <span className="font-medium">{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-xl">
                            <FaCalendarAlt className="w-4 h-4 text-primary" />
                            <span className="font-medium">{experience.startDate} - {experience.endDate}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                          <h4 className="text-lg font-heading text-foreground mb-4">Key Achievements & Responsibilities</h4>
                          <ul className="space-y-3">
                            {experience.description.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-muted-foreground group/item">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                                <span className="text-sm leading-relaxed group-hover/item:text-foreground transition-colors duration-300">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="text-lg font-heading text-foreground mb-4">Technologies & Tools</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.stack.map((tech, techIdx) => {
                              const techVariants = ['default', 'secondary', 'outline', 'destructive'] as const;
                              const techVariant = techVariants[techIdx % techVariants.length];
                              
                              return (
                                <Badge
                                  key={tech}
                                  variant={techVariant}
                                  className="px-3 py-1 rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg animate-scale-in"
                                  style={{ animationDelay: `${techIdx * 0.1}s` }}
                                >
                                  {tech}
                                </Badge>
                              );
                            })}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Mobile/Tablet Cards */}
            <div className="lg:hidden space-y-8">
              {experiences.map((experience, index) => {
                return (
                  <Card
                    key={experience.id}
                    className="p-6 group transition-all duration-500 hover:-translate-y-2 transform animate-slide-up border-0 shadow-none hover:shadow-lg"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <CardHeader className="p-0 mb-6">
                      {/* Experience Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <span className="text-lg font-bold text-primary-foreground">
                                {index + 1}
                              </span>
                            </div>
                            <div>
                              <CardTitle className="text-xl font-heading text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                                {experience.title}
                              </CardTitle>
                              <p className="text-lg font-heading text-primary">
                                {experience.company}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {experience.current && (
                          <Badge variant="secondary" className="px-3 py-1 rounded-full text-xs font-medium shadow-lg bg-green-500 hover:bg-green-600 text-white border-green-500">
                            Current Position
                          </Badge>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="p-0">
                      {/* Location and Date */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                        <div className="flex items-center gap-3 bg-muted/50 px-4 py-3 rounded-xl">
                          <FaMapMarkerAlt className="w-5 h-5 text-primary" />
                          <span className="font-medium text-muted-foreground">{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-3 bg-muted/50 px-4 py-3 rounded-xl">
                          <FaCalendarAlt className="w-5 h-5 text-primary" />
                          <span className="font-medium text-muted-foreground">{experience.startDate} - {experience.endDate}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-8">
                        <h4 className="text-lg font-heading text-foreground mb-4">Key Achievements & Responsibilities</h4>
                        <ul className="space-y-4">
                          {experience.description.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-muted-foreground group/item">
                              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                              <span className="text-base leading-relaxed group-hover/item:text-foreground transition-colors duration-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-lg font-heading text-foreground mb-4">Technologies & Tools</h4>
                        <div className="flex flex-wrap gap-3">
                          {experience.stack.map((tech, techIdx) => {
                            const techVariants = ['default', 'secondary', 'outline', 'destructive'] as const;
                            const techVariant = techVariants[techIdx % techVariants.length];
                            
                            return (
                              <Badge
                                key={tech}
                                variant={techVariant}
                                className="px-4 py-2 rounded-xl text-sm font-medium hover:scale-110 transition-all duration-300 hover:shadow-lg animate-scale-in"
                                style={{ animationDelay: `${techIdx * 0.1}s` }}
                              >
                                {tech}
                              </Badge>
                            );
                          })}
                        </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
