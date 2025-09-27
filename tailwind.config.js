/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Twilight Hues Color Palette
        'twilight-bg': '#2E2B5F',      // Dark Indigo (Background)
        'twilight-primary': '#D3D3D3', // Light Gray (Primary Text)
        'twilight-accent': '#8A2BE2',  // Blue Violet (Accent)
        'twilight-hover': '#DA70D6',   // Orchid (Hover Effects)
        
        // Dark mode variants (same as light for this theme)
        'twilight-bg-dark': '#2E2B5F',  // Dark Indigo
        'twilight-primary-dark': '#D3D3D3', // Light Gray
        'twilight-accent-dark': '#8A2BE2', // Blue Violet
        'twilight-hover-dark': '#DA70D6', // Orchid
        
        // Legacy colors for compatibility
        'navy': '#0F172A',
        'slate-dark': '#1E293B',
        'slate-800': '#1E293B',
        'slate-900': '#0F172A',
        
        // Text colors using Twilight Hues
        'text-primary': '#D3D3D3',     // Light Gray
        'text-secondary': '#B0BEC5',   // Muted Light Gray
        'text-tertiary': '#90A4AE',    // More muted
        'text-dark': '#2E2B5F',        // Dark Indigo
        'text-light': '#D3D3D3',       // Light Gray
        
        // Accent colors
        'accent-primary': '#8A2BE2',   // Blue Violet
        'accent-secondary': '#DA70D6', // Orchid
        'accent-purple': '#8A2BE2',    // Blue Violet
        'accent-emerald': '#8A2BE2',   // Blue Violet
        'accent-orange': '#DA70D6',    // Orchid
        'accent-rose': '#DA70D6',      // Orchid
        'accent-indigo': '#8A2BE2',    // Blue Violet
        
        // Button gradient colors
        'gradient-start': '#8A2BE2',   // Blue Violet
        'gradient-end': '#DA70D6',     // Orchid
        'gradient-emerald': '#8A2BE2', // Blue Violet
        'gradient-orange': '#DA70D6',  // Orchid
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'heading': ['Montserrat', 'Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      backgroundImage: {
        // Twilight Hues Gradients
        'gradient-bg': 'linear-gradient(135deg, #2E2B5F 0%, #1A1A3A 100%)', // Dark Indigo gradient
        'gradient-bg-dark': 'linear-gradient(135deg, #2E2B5F 0%, #1A1A3A 100%)', // Same as light
        'gradient-primary': 'linear-gradient(135deg, #8A2BE2 0%, #DA70D6 100%)', // Blue Violet to Orchid
        'gradient-secondary': 'linear-gradient(135deg, #DA70D6 0%, #8A2BE2 100%)', // Orchid to Blue Violet
        'gradient-button': 'linear-gradient(135deg, #8A2BE2 0%, #DA70D6 100%)', // Blue Violet to Orchid
        'gradient-hover': 'linear-gradient(135deg, #8A2BE2 0%, #DA70D6 50%, #B19CD9 100%)', // Hover effect
        'gradient-accent': 'linear-gradient(135deg, #8A2BE2 0%, #DA70D6 100%)', // Blue Violet to Orchid
        'gradient-card': 'linear-gradient(135deg, rgba(46, 43, 95, 0.8) 0%, rgba(26, 26, 58, 0.9) 100%)', // Semi-transparent Dark Indigo
        'gradient-card-dark': 'linear-gradient(135deg, rgba(46, 43, 95, 0.8) 0%, rgba(26, 26, 58, 0.9) 100%)', // Same as light
        
        // Legacy gradients for compatibility
        'gradient-glass': 'linear-gradient(135deg, rgba(139, 43, 226, 0.1) 0%, rgba(218, 112, 214, 0.05) 100%)',
        'gradient-glass-dark': 'linear-gradient(135deg, rgba(139, 43, 226, 0.3) 0%, rgba(218, 112, 214, 0.1) 100%)',
        'gradient-emerald': 'linear-gradient(135deg, #8A2BE2 0%, #DA70D6 100%)',
        'gradient-orange': 'linear-gradient(135deg, #DA70D6 0%, #8A2BE2 100%)',
        'gradient-rainbow': 'linear-gradient(135deg, #8A2BE2 0%, #DA70D6 25%, #B19CD9 50%, #9370DB 75%, #8A2BE2 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #8A2BE2 0%, #DA70D6 25%, #B19CD9 50%, #9370DB 75%, #8A2BE2 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #DA70D6 0%, #8A2BE2 50%, #B19CD9 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #8A2BE2 0%, #DA70D6 100%)',
        'gradient-mesh': 'radial-gradient(circle at 20% 50%, #8A2BE2 0%, transparent 50%), radial-gradient(circle at 80% 20%, #DA70D6 0%, transparent 50%), radial-gradient(circle at 40% 80%, #B19CD9 0%, transparent 50%)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'scale-in': 'scaleIn 0.5s ease-out',
        'rotate-in': 'rotateIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-180deg) scale(0)', opacity: '0' },
          '100%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
