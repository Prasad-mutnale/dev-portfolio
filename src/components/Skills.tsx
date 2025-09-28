import React from 'react';
import { Helmet } from 'react-helmet-async';
import { skills } from '../data/portfolio';
import { 
  FaCode, FaDatabase, FaCloud, FaTools, 
  FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaCss3Alt, FaHtml5,
  FaAws, FaDocker, FaGitAlt, FaNpm, FaYarn,
  FaBootstrap, FaSass, FaLess,
  FaJira, FaSlack, FaTrello, FaFigma, FaServer, FaCog,
  FaRocket, FaChartLine, FaGlobe, FaTerminal
} from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Skills: React.FC = () => {

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryIcons = {
    'Languages': FaTerminal,
    'Frameworks': FaCode,
    'Databases': FaDatabase,
    'Cloud/DevOps': FaCloud,
    'Tools': FaTools,
  };

  // Function to get icon for each skill
  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: any } = {
      // Languages
      'JavaScript': FaJs,
      'TypeScript': FaCode,
      'Java': FaJava,
      'C++': FaCode,
      'Python': FaPython,
      'HTML': FaHtml5,
      'CSS': FaCss3Alt,
      
      // Frameworks
      'Node.js': FaNodeJs,
      'Express': FaServer,
      'NestJS': FaCode,
      'React': FaReact,
      'Prisma': FaDatabase,
      'Django': FaCode,
      'Next.js': FaGlobe,
      'Vue.js': FaCode,
      'Angular': FaCode,
      
      // Databases
      'MongoDB': FaDatabase,
      'MySQL': FaDatabase,
      'PostgreSQL': FaDatabase,
      'Redis': FaDatabase,
      
      // Cloud/DevOps
      'AWS': FaAws,
      'Docker': FaDocker,
      'RabbitMQ': FaServer,
      'Elasticsearch': FaChartLine,
      'Git': FaGitAlt,
      'CI/CD': FaRocket,
      'Kubernetes': FaCog,
      'Jenkins': FaTools,
      'GitLab': FaGitAlt,
      'Bitbucket': FaGitAlt,
      
      // Tools
      'Postman': FaTools,
      'VS Code': FaCode,
      'Cursor': FaCode,
      'Jira': FaJira,
      'Slack': FaSlack,
      'Trello': FaTrello,
      'Figma': FaFigma,
      'NPM': FaNpm,
      'Yarn': FaYarn,
      'Webpack': FaCog,
      'Vite': FaRocket,
      'Nginx': FaServer,
      'Apache': FaServer,
      
      // AI/ML
      'TensorFlow': FaChartLine,
      'PyTorch': FaChartLine,
      'OpenCV': FaCode,
      
      // Styling
      'Tailwind CSS': FaCss3Alt,
      'Bootstrap': FaBootstrap,
      'Sass': FaSass,
      'Less': FaLess,
    };
    
    return iconMap[skillName] || FaCode; // Default icon if not found
  };


  return (
    <>
      <Helmet>
        <title>Technical Skills - Prasad R Mutnale | Software Engineer | Backend Developer</title>
        <meta name="description" content="Explore Prasad R Mutnale's comprehensive technical skills including Node.js, Express, TypeScript, Python, MongoDB, AWS, Docker, and more. 2+ years of experience in backend development and API design." />
        <meta name="keywords" content="Prasad Mutnale Skills, Technical Skills, Programming Languages, React Skills, Node.js Skills, TypeScript Skills, Python Skills, Backend Development Skills, MongoDB Skills, AWS Skills, Docker Skills, Full Stack Skills, Software Engineer Skills, Developer Skills, Programming Expertise, API Development Skills" />
        <meta property="og:title" content="Technical Skills - Prasad R Mutnale | Software Engineer" />
        <meta property="og:description" content="Explore Prasad R Mutnale's comprehensive technical skills including Node.js, Express, TypeScript, Python, MongoDB, AWS, Docker, and more." />
        <meta property="og:image" content="https://prasad-mutnale.vercel.app/profile.png" />
        <meta property="twitter:title" content="Technical Skills - Prasad R Mutnale | Software Engineer" />
        <meta property="twitter:description" content="Explore Prasad R Mutnale's comprehensive technical skills including Node.js, Express, TypeScript, Python, MongoDB, AWS, Docker, and more." />
        <meta property="twitter:image" content="https://prasad-mutnale.vercel.app/profile.png" />
        <link rel="canonical" href="https://prasad-mutnale.vercel.app/#skills" />
      </Helmet>
      
          <section id="skills" className="py-20 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground animate-fade-in">
                    Technical Skills
                  </h2>
                  <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                      <p className="text-base text-muted-foreground max-w-2xl mx-auto px-4 animate-slide-up">
                        A comprehensive overview of my technical expertise across different domains
                      </p>
                </div>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {Object.entries(skillsByCategory).map(([category, categorySkills], index) => {
                const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
                
                return (
                  <Card
                    key={category}
                    className="p-5 lg:p-6 group transition-all duration-300 animate-slide-up border-0 shadow-none hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="p-0 mb-4">
                      {/* Category Header */}
                      <div className="flex items-center gap-3">
                        <div className="p-2 lg:p-3 bg-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-4 h-4 lg:w-5 lg:h-5 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-lg lg:text-xl font-heading text-foreground">
                          {category}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    {/* Skills List */}
                    <CardContent className="p-0">
                      <div className="grid grid-cols-2 gap-2 lg:gap-3">
                        {categorySkills.map((skill) => {
                          const IconComponent = getSkillIcon(skill.name);
                          return (
                            <div
                              key={skill.name}
                              className="flex items-center gap-2 p-2 lg:p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 hover:translate-x-1 transform hover:scale-105"
                            >
                              <div className="w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center text-primary">
                                <IconComponent className="w-3 h-3 lg:w-4 lg:h-4" />
                              </div>
                              <span className="text-foreground font-medium text-xs lg:text-sm">
                                {skill.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

                {/* Additional Skills Info */}
                <div className="mt-12 text-center">
                  <Card className="p-6 lg:p-8 animate-slide-up border-0 shadow-none">
                    <CardContent className="p-0">
                      <h3 className="text-xl lg:text-2xl font-heading text-foreground mb-6">
                        Methodologies & Practices
                      </h3>
                      <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
                        {[
                          { name: 'Agile', icon: FaCode },
                          { name: 'Scrum', icon: FaCode },
                          { name: 'Unit Testing', icon: FaCode },
                          { name: 'CI/CD', icon: FaCode },
                          { name: 'REST APIs', icon: FaCode },
                          { name: 'Microservices', icon: FaCode }
                        ].map((methodology) => {
                          const IconComponent = methodology.icon;
                          return (
                            <Badge
                              key={methodology.name}
                              variant="secondary"
                              className="px-4 py-2 lg:px-6 lg:py-3 rounded-full font-medium flex items-center gap-2 lg:gap-3 font-body hover:scale-105 transition-all duration-300 hover:shadow-lg text-sm lg:text-base"
                            >
                              <IconComponent className="w-4 h-4 lg:w-5 lg:h-5" />
                              {methodology.name}
                            </Badge>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
