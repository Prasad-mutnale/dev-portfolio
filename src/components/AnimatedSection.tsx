import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'slide-in-left' | 'slide-in-right' | 'slide-in-bottom' | 'slide-in-top' | 'fade-in-up' | 'fade-in-left' | 'fade-in-right';
  delay?: number;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className = ''
}) => {
  const { ref, isVisible } = useScrollAnimation();

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'slide-in-left':
        return 'animate-slide-in-left';
      case 'slide-in-right':
        return 'animate-slide-in-right';
      case 'slide-in-bottom':
        return 'animate-slide-in-bottom';
      case 'slide-in-top':
        return 'animate-slide-in-top';
      case 'fade-in-left':
        return 'animate-fade-in-left';
      case 'fade-in-right':
        return 'animate-fade-in-right';
      case 'fade-in-up':
      default:
        return 'animate-fade-in-up';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${getAnimationClass()} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
