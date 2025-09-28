import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../contexts/ThemeContext';
import { navItems } from '../data/portfolio';
import { FaSun, FaMoon, FaBars, FaTimes, FaCode } from 'react-icons/fa';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { personalInfo } from '../data/portfolio';
const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollToElement } = useSmoothScroll();

  // Handle scroll effect and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const elementId = href.substring(1); // Remove the # from href
    scrollToElement(elementId, 80);
  };

  return (
    <>
      <Helmet>
        <title>Prasad R Mutnale - Software Engineer | Backend Developer | Full-Stack Developer</title>
        <meta name="description" content="Results-driven Software Engineer with expertise in backend development, API design, and real-time systems. Currently working at SproutsAI with 2+ years of experience in Node.js, Express, TypeScript, and database technologies." />
        <meta name="keywords" content="Prasad Mutnale, Software Engineer, Backend Developer, Full Stack Developer, React Developer, Node.js Developer, TypeScript, API Developer, SproutsAI, Backend Engineer, Frontend Developer, Web Development, Python, JavaScript, MongoDB, Express, NestJS, Prisma, AWS, Docker, Git, CI/CD, Portfolio, Resume, Bangalore, India" />
        <meta property="og:title" content="Prasad R Mutnale - Software Engineer | Backend Developer" />
        <meta property="og:description" content="Results-driven Software Engineer with expertise in backend development, API design, and real-time systems. Currently working at SproutsAI with 2+ years of experience." />
        <meta property="og:image" content="https://prasad-mutnale.vercel.app/profile.png" />
        <meta property="twitter:title" content="Prasad R Mutnale - Software Engineer | Backend Developer" />
        <meta property="twitter:description" content="Results-driven Software Engineer with expertise in backend development, API design, and real-time systems. Currently working at SproutsAI." />
        <meta property="twitter:image" content="https://prasad-mutnale.vercel.app/profile.png" />
        <link rel="canonical" href="https://prasad-mutnale.vercel.app" />
      </Helmet>
      
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border/20 shadow-lg'
            : 'bg-transparent'
        )}
      >
        <nav className="container-custom px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo with enhanced design */}
            <div className="flex items-center space-x-2 lg:space-x-3 group">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <FaCode className="w-4 h-4 lg:w-5 lg:h-5 text-primary-foreground" />
              </div>
              <span className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 font-heading">
                {personalInfo.firstName}
              </span>
            </div>

            {/* Desktop Navigation with modern pill design */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="bg-muted/30 backdrop-blur-sm rounded-full p-2 border border-border/20">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <Button
                      key={item.label}
                      asChild
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className={cn(
                        "relative rounded-full px-6 py-2 font-medium transition-all duration-300",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                          : "text-foreground hover:text-primary hover:bg-muted/50"
                      )}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className="flex items-center space-x-2"
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
                        )}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-2 lg:space-x-3">
              {/* Theme Toggle with enhanced design */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <div className="relative">
                  {theme === 'light' ? (
                    <FaMoon className="w-4 h-4 lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform duration-300" />
                  ) : (
                    <FaSun className="w-4 h-4 lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform duration-300" />
                  )}
                </div>
              </Button>

              {/* Mobile Menu Button with enhanced design */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden w-10 h-10 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                aria-label="Toggle mobile menu"
              >
                <div className="relative">
                  {isMenuOpen ? (
                    <FaTimes className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                  ) : (
                    <FaBars className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  )}
                </div>
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 animate-in slide-in-from-top-2 duration-300">
              <div className="bg-card/95 backdrop-blur-lg rounded-2xl border border-border/20 shadow-xl p-6">
                <div className="space-y-3">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <Button
                        key={item.label}
                        asChild
                        variant={isActive ? "default" : "ghost"}
                        className={cn(
                          "w-full justify-start rounded-xl px-4 py-3 font-medium transition-all duration-300",
                          isActive
                            ? "bg-primary text-primary-foreground shadow-lg"
                            : "text-foreground hover:text-primary hover:bg-muted/50"
                        )}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.href);
                          }}
                          className="flex items-center space-x-3"
                        >
                          <span>{item.label}</span>
                          {isActive && (
                            <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse ml-auto" />
                          )}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;