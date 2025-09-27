import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward } from 'react-icons/fa';
import { education, certificates } from '../data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Education: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Education - Prasad R Mutnale</title>
        <meta name="description" content="Educational background and certifications of Prasad R Mutnale" />
      </Helmet>
      
      <section id="education" className="py-20 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 lg:mb-6 animate-fade-in">
                Education & Certifications
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4 lg:mb-6"></div>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto px-4 animate-slide-up">
                My academic journey and professional certifications that have shaped my expertise
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Education */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-8 flex items-center justify-center lg:justify-start gap-3">
                    <FaGraduationCap className="w-8 h-8 text-primary" />
                    Education
                  </h3>
                </div>

                <Card className="p-8 border-0 shadow-none group hover:scale-105 transition-all duration-500 animate-slide-up">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <FaUniversity className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-heading text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                          {education.degree}
                        </CardTitle>
                        <div className="text-lg text-primary font-semibold mb-3">
                          {education.institution}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt className="w-4 h-4" />
                            <span>Graduated {education.year}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaAward className="w-4 h-4" />
                            <span>CGPA: {education.cgpa}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="bg-muted/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Key Highlights</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Comprehensive curriculum covering computer science fundamentals, algorithms, and data structures</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Hands-on experience with software engineering principles and modern development practices</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Project-based learning with focus on full-stack development and system design</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Certifications */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-8 flex items-center justify-center lg:justify-start gap-3">
                    <FaAward className="w-8 h-8 text-primary" />
                    Certifications
                  </h3>
                </div>

                <div className="space-y-6">
                  {certificates.map((cert, index) => (
                    <Card 
                      key={cert.name} 
                      className="p-6 border-0 shadow-none group hover:scale-105 transition-all duration-500 animate-slide-up cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => {
                        if (cert.link || cert.url) {
                          window.open(cert.link || cert.url, '_blank', 'noopener,noreferrer');
                        }
                      }}
                    >
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <FaAward className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg font-heading text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                              {cert.name}
                            </CardTitle>
                            <div className="text-primary font-medium mb-2">
                              {cert.issuer}
                            </div>
                            <div className="flex items-center gap-4">
                              <Badge variant="secondary" className="text-xs">
                                {cert.year}
                              </Badge>
                              {(cert.link || cert.url) && (
                                <span className="text-primary text-sm font-medium transition-colors duration-300 group-hover:underline">
                                  View Certificate →
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Additional Learning */}
                <Card className="p-6 border-0 shadow-none bg-gradient-to-r from-primary/5 to-primary/10 animate-slide-up">
                  <CardContent className="p-0">
                    <h4 className="text-lg font-bold text-foreground mb-4">Continuous Learning</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      I believe in continuous learning and staying updated with the latest technologies. 
                      Beyond formal education, I actively pursue online courses, participate in coding challenges, 
                      and contribute to open-source projects to enhance my skills and knowledge.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
