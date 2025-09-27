import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from './ui/card';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - Prasad R Mutnale</title>
        <meta name="description" content="Learn more about Prasad R Mutnale's background and expertise in software development." />
      </Helmet>
      
      <section id="about" className="py-20 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
                About Me
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto px-4">
                Learn more about my background, passion, and approach to software development
              </p>
            </div>

            {/* About Content */}
            <div className="max-w-4xl mx-auto">
              <Card className="p-6 lg:p-8 text-center border-0 shadow-none">
                <CardContent className="p-0">
                  <p className="text-base text-muted-foreground leading-relaxed mb-6 font-body">
                    I'm a passionate software engineer with a strong foundation in full-stack development, 
                    AI/ML integration, and real-time systems. I love creating innovative solutions that 
                    solve complex problems and make a positive impact.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed font-body">
                    With experience in both frontend and backend development, I enjoy working on projects 
                    that challenge me to learn new technologies and push the boundaries of what's possible 
                    with code.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
