import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../contexts/ThemeContext';
import Hero from '../Hero';

// Mock react-helmet-async
jest.mock('react-helmet-async', () => ({
  Helmet: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}));

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe('Hero Component', () => {
  test('renders hero section with correct content', () => {
    renderWithTheme(<Hero />);
    
    // Check if the main heading is rendered
    expect(screen.getByText('Prasad R Mutnale')).toBeInTheDocument();
    
    // Check if the title is rendered
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    
    // Check if the summary is rendered
    expect(screen.getByText(/Results-driven Software Engineer/)).toBeInTheDocument();
  });

  test('renders contact information', () => {
    renderWithTheme(<Hero />);
    
    // Check if phone number is rendered
    expect(screen.getByText('+91 7019943781')).toBeInTheDocument();
    
    // Check if email is rendered
    expect(screen.getByText('mutnaleprasad21@gmail.com')).toBeInTheDocument();
  });

  test('renders call-to-action buttons', () => {
    renderWithTheme(<Hero />);
    
    // Check if "Get In Touch" button is rendered
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    
    // Check if "Download Resume" button is rendered
    expect(screen.getByText('Download Resume')).toBeInTheDocument();
  });

  test('renders social links', () => {
    renderWithTheme(<Hero />);
    
    // Check if social links are rendered (they should be present as links)
    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  test('has correct section id', () => {
    renderWithTheme(<Hero />);
    
    // Check if the section has the correct id
    const heroSection = screen.getByRole('main').querySelector('#home');
    expect(heroSection).toBeInTheDocument();
  });
});
