# Prasad R Mutnale - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This website showcases my professional experience, skills, projects, and provides a secure way for potential clients and employers to get in touch.

## 🚀 Live Demo

[View Live Website](https://prasad-mutnale.vercel.app)

## ✨ Features

### 🎨 **Design & User Experience**
- **Modern Design**: Clean, professional design with smooth animations and micro-interactions
- **Responsive**: Mobile-first design that works seamlessly on all devices
- **Dark/Light Theme**: Toggle between light and dark modes with persistent preferences
- **Smooth Animations**: Custom CSS animations with `prefers-reduced-motion` support
- **Accessible**: WCAG compliant with keyboard navigation and screen reader support

### 🔧 **Technical Features**
- **TypeScript**: Full type safety throughout the application
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter Card support
- **Performance Optimized**: Fast loading with Vite build system
- **Rate Limited Contact Form**: IP-based rate limiting to prevent spam (3 attempts per 15 minutes, 24-hour block)
- **EmailJS Integration**: Direct email delivery without backend server
- **Resume Download**: Direct download link for PDF resume
- **Scroll Progress**: Visual scroll progress indicator
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior

### 🛡️ **Security & Reliability**
- **Rate Limiting**: Advanced IP-based rate limiting system for contact form
- **Input Validation**: Client-side form validation with error handling
- **Error Boundaries**: Graceful error handling throughout the application
- **Fallback Handling**: Image fallbacks and error recovery mechanisms

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework with custom design system

### **UI Components & Styling**
- **shadcn/ui** - High-quality, accessible UI components
- **Radix UI** - Unstyled, accessible UI primitives
- **React Icons** - Comprehensive icon library
- **Custom CSS** - Tailored animations and design system

### **State Management & Context**
- **React Context API** - Theme management and global state
- **Custom Hooks** - Reusable logic for rate limiting and smooth scrolling
- **Local Storage** - Persistent theme preferences

### **Development & Testing**
- **Vitest** - Fast unit testing framework
- **React Testing Library** - Component testing utilities
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking

### **Deployment & Hosting**
- **Vercel** - Frontend deployment platform
- **GitHub** - Version control and CI/CD
- **EmailJS** - Email service integration

## 📦 Installation & Setup

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### **Installation Steps**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Prasad-mutnale/dev-portfolio.git
   cd dev-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run unit tests with Vitest |
| `npm run test:ui` | Run tests with UI interface |
| `npm run lint` | Run ESLint for code quality |
| `npm run type-check` | Run TypeScript type checking |

## 📁 Project Structure

```
src/
├── components/              # React components
│   ├── __tests__/          # Component tests
│   ├── ui/                 # Reusable UI components (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── Header.tsx          # Navigation header with theme toggle
│   ├── Hero.tsx            # Hero section with profile
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Technical skills showcase
│   ├── Experience.tsx      # Work experience timeline
│   ├── Projects.tsx        # Projects portfolio with filtering
│   ├── Education.tsx       # Educational background
│   ├── Contact.tsx         # Contact form with rate limiting
│   ├── Footer.tsx          # Footer with social links
│   ├── ScrollProgress.tsx  # Scroll progress indicator
│   └── ScrollToTop.tsx     # Scroll to top button
├── contexts/               # React contexts
│   └── ThemeContext.tsx    # Theme management context
├── hooks/                  # Custom React hooks
│   ├── useRateLimit.ts     # Rate limiting hook
│   ├── useScrollAnimation.ts
│   └── useSmoothScroll.ts
├── lib/                    # Utility libraries
│   ├── __tests__/          # Library tests
│   ├── rateLimiter.ts      # IP-based rate limiting system
│   ├── emailjs.ts          # Email service configuration
│   └── utils.ts            # Utility functions
├── data/                   # Static data
│   └── portfolio.ts        # Portfolio content and configuration
├── types/                  # TypeScript type definitions
│   └── index.ts            # Type interfaces and types
├── assets/                 # Static assets
├── App.tsx                 # Main application component
├── main.tsx                # Application entry point
└── index.css               # Global styles and animations
```

## 🚀 Deployment

### **Vercel (Recommended)**

1. **Automatic Deployment**
   - Push code to GitHub
   - Connect repository to Vercel
   - Automatic deployments on every push

2. **Manual Deployment**
   ```bash
   npm run build
   vercel --prod
   ```

3. **Environment Variables**
   - Add EmailJS configuration in Vercel dashboard
   - Set production environment variables

### **Other Platforms**

#### **Netlify**
```bash
npm run build
netlify deploy --prod --dir=dist
```

#### **GitHub Pages**
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## 📧 Contact Form Setup

### **EmailJS Configuration**

1. **Create EmailJS Account**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create email service and template

2. **Update Configuration**
   ```typescript
   // src/lib/emailjs.ts
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id';
   const EMAILJS_PUBLIC_KEY = 'your_public_key';
   ```

3. **Test Form Submission**
   - Test contact form functionality
   - Verify email delivery

## 🧪 Testing

### **Run Tests**
```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage
npm run test -- --coverage

# Run specific test file
npm run test src/lib/__tests__/rateLimiter.test.ts
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### **Development Guidelines**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 📞 Contact

**Prasad R Mutnale**
- **Email**: [mutnaleprasad21@gmail.com](mailto:mutnaleprasad21@gmail.com)
- **LinkedIn**: [linkedin.com/in/prasad-mutnale](https://linkedin.com/in/prasad-mutnale)
- **GitHub**: [github.com/Prasad-mutnale](https://github.com/Prasad-mutnale)
- **Portfolio**: [prasad-mutnale.vercel.app](https://prasad-mutnale.vercel.app)

---

<div align="center">

**Made with ❤️ by Prasad R Mutnale**

*Software Engineer | Backend Developer | Full-Stack Developer*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/prasad-mutnale)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Prasad-mutnale)
[![Portfolio](https://img.shields.io/badge/Portfolio-8A2BE2?style=for-the-badge&logo=vercel&logoColor=white)](https://prasad-mutnale.vercel.app)

</div>