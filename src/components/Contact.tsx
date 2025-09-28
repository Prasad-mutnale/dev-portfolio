import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { personalInfo, socialLinks } from '../data/portfolio';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaLinkedin, FaGithub, FaExclamationTriangle } from 'react-icons/fa';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { sendEmail } from '../lib/emailjs';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const emailData = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Prasad R Mutnale'
      };

      const success = await sendEmail(emailData);
      
      if (success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setSubmitError('Failed to send message. Please try again or contact me directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('An error occurred while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Prasad R Mutnale - Software Engineer | Backend Developer | Full-Stack Developer</title>
        <meta name="description" content="Get in touch with Prasad R Mutnale for collaboration opportunities, job inquiries, and project discussions. Software Engineer at SproutsAI specializing in backend development and API design." />
        <meta name="keywords" content="Contact Prasad Mutnale, Software Engineer Contact, Backend Developer Contact, Full Stack Developer Contact, Job Opportunities, Collaboration, Project Inquiries, Software Development Services, React Developer, Node.js Developer, TypeScript Developer, API Developer, Bangalore Software Engineer" />
        <meta property="og:title" content="Contact Prasad R Mutnale - Software Engineer | Backend Developer" />
        <meta property="og:description" content="Get in touch with Prasad R Mutnale for collaboration opportunities, job inquiries, and project discussions. Software Engineer at SproutsAI specializing in backend development and API design." />
        <meta property="og:image" content="https://prasad-mutnale.vercel.app/profile.png" />
        <meta property="twitter:title" content="Contact Prasad R Mutnale - Software Engineer | Backend Developer" />
        <meta property="twitter:description" content="Get in touch with Prasad R Mutnale for collaboration opportunities, job inquiries, and project discussions." />
        <meta property="twitter:image" content="https://prasad-mutnale.vercel.app/profile.png" />
        <link rel="canonical" href="https://prasad-mutnale.vercel.app/#contact" />
      </Helmet>
      
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground animate-fade-in">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto px-4 animate-slide-up">
                I'm always interested in new opportunities and exciting projects. Let's connect!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Let's Connect
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Whether you have a project in mind, want to collaborate, or just want to say hello, 
                    I'd love to hear from you. Feel free to reach out through any of the channels below.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <Card className="p-4 hover:bg-muted/50 transition-all duration-200 hover:translate-x-1 transform border-0 shadow-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary rounded-lg">
                        <FaEnvelope className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email</h4>
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className="text-primary hover:underline"
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 hover:bg-muted/50 transition-all duration-200 hover:translate-x-1 transform border-0 shadow-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary rounded-lg">
                        <FaPhone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Phone</h4>
                        <a
                          href={`tel:${personalInfo.phone}`}
                          className="text-primary hover:underline"
                        >
                          {personalInfo.phone}
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 hover:bg-muted/50 transition-all duration-200 hover:translate-x-1 transform border-0 shadow-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary rounded-lg">
                        <FaMapMarkerAlt className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Location</h4>
                        <p className="text-muted-foreground">Bangalore, India</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Follow Me
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => {
                      const IconComponent = link.icon === 'FaLinkedin' ? FaLinkedin :
                                         link.icon === 'FaGithub' ? FaGithub :
                                         link.icon === 'FaEnvelope' ? FaEnvelope :
                                         FaPhone;
                      
                      return (
                        <Button
                          key={link.name}
                          asChild
                          variant="outline"
                          size="icon"
                          className="w-12 h-12 rounded-full hover:scale-110 hover:-translate-y-1 transform"
                        >
                          <a
                            href={link.url}
                            aria-label={link.name}
                          >
                            <IconComponent className="w-5 h-5" />
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="p-8 border-0 shadow-none">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl font-bold text-foreground">
                      Send a Message
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0">
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          Message Sent Successfully!
                        </h4>
                        <p className="text-muted-foreground">
                          Thank you for your message. I'll get back to you within 24 hours!
                        </p>
                      </div>
                    ) : submitError ? (
                      <div className="text-center py-8">
                        <FaExclamationTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          Error Sending Message
                        </h4>
                        <p className="text-muted-foreground mb-4">
                          {submitError}
                        </p>
                        <Button 
                          onClick={() => setSubmitError(null)}
                          variant="outline"
                          className="mt-4"
                        >
                          Try Again
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                              Name *
                            </label>
                            <Input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                              Email *
                            </label>
                            <Input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                            Subject *
                          </label>
                          <Input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            placeholder="What's this about?"
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            placeholder="Tell me about your project or just say hello..."
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                          className="group relative overflow-hidden w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold py-4 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <FaPaperPlane className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    )}

                    <p className="text-sm text-muted-foreground mt-6 text-center">
                      This form uses EmailJS to send messages directly to my email. Your message will be delivered instantly!
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

export default Contact;
