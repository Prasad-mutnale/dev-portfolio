import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from './ui/card';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Prasad R Mutnale - Software Engineer | Backend Developer | Full-Stack Developer</title>
        <meta name="description" content="Learn about Prasad R Mutnale's journey as a Software Engineer at SproutsAI. Discover his expertise in backend development, API design, and passion for building scalable solutions." />
        <meta name="keywords" content="About Prasad Mutnale, Software Engineer Background, Backend Developer Experience, Full Stack Developer Experience, SproutsAI Engineer, Software Development Journey, Technical Expertise, React Developer, Node.js Developer, TypeScript, API Development, Portfolio" />
        <meta property="og:title" content="About Prasad R Mutnale - Software Engineer | Backend Developer" />
        <meta property="og:description" content="Learn about Prasad R Mutnale's journey as a Software Engineer at SproutsAI. Discover his expertise in backend development, API design, and passion for building scalable solutions." />
        <meta property="og:image" content="https://prasad-mutnale.vercel.app/profile.png" />
        <meta property="twitter:title" content="About Prasad R Mutnale - Software Engineer | Backend Developer" />
        <meta property="twitter:description" content="Learn about Prasad R Mutnale's journey as a Software Engineer at SproutsAI. Discover his expertise in backend development, API design, and passion for building scalable solutions." />
        <meta property="twitter:image" content="https://prasad-mutnale.vercel.app/profile.png" />
        <link rel="canonical" href="https://prasad-mutnale.vercel.app/#about" />
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
