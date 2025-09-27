import React from 'react';
import { personalInfo, socialLinks } from '../data/portfolio';
import { FaHeart, FaArrowUp, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-custom">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {personalInfo.name}
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Software Engineer passionate about building scalable, AI-powered solutions 
                that make a real impact. Let's create something amazing together!
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon === 'FaLinkedin' ? FaLinkedin :
                                     link.icon === 'FaGithub' ? FaGithub :
                                     link.icon === 'FaEnvelope' ? FaEnvelope :
                                     FaPhone;
                  
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-200 focus-visible hover:scale-110 hover:-translate-y-1 transform"
                      aria-label={link.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>{personalInfo.phone}</p>
                <p>{personalInfo.email}</p>
                <p>Bangalore, India</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400">
                <span>© 2024 {personalInfo.name}. Made with</span>
                <span className="text-red-500 animate-pulse">
                  <FaHeart className="w-4 h-4" />
                </span>
                <span>using React & TypeScript</span>
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-all duration-200 focus-visible hover:scale-105 hover:-translate-y-1 transform"
                aria-label="Back to top"
              >
                <FaArrowUp className="w-4 h-4" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
