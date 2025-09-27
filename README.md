# Prasad R Mutnale - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This website showcases my professional experience, skills, projects, and provides a way for potential clients and employers to get in touch.

## 🚀 Live Demo

[View Live Website](https://prasad-mutnale.vercel.app)

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Theme**: Toggle between light and dark modes
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Accessible**: WCAG compliant with keyboard navigation support
- **Contact Form**: Integrated contact form with Netlify Forms
- **Resume Download**: Direct download link for PDF resume
- **Smooth Animations**: Framer Motion powered micro-interactions
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons, Lucide React
- **SEO**: React Helmet Async
- **Testing**: Vitest, React Testing Library
- **Deployment**: Vercel/Netlify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Prasad-mutnale/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run unit tests
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── __tests__/      # Component tests
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Experience.tsx  # Work experience
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── contexts/           # React contexts
│   └── ThemeContext.tsx
├── data/              # Static data
│   └── portfolio.ts   # Portfolio content
├── types/             # TypeScript types
│   └── index.ts
├── utils/             # Utility functions
├── assets/            # Static assets
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Updating Content

All portfolio content is centralized in `src/data/portfolio.ts`. Update the following objects:

- `personalInfo` - Personal information and contact details
- `skills` - Technical skills with proficiency levels
- `experiences` - Work experience entries
- `projects` - Project showcase items
- `education` - Educational background
- `certificates` - Professional certifications

### Styling

The website uses Tailwind CSS with custom configuration in `tailwind.config.js`. Key customization points:

- **Colors**: Primary color scheme in the `colors` section
- **Fonts**: Custom font families in the `fontFamily` section
- **Animations**: Custom keyframes and animations
- **Components**: Reusable component styles in `src/index.css`

### Theme Customization

The theme system is implemented in `src/contexts/ThemeContext.tsx`. To add new themes:

1. Update the theme type in `src/types/index.ts`
2. Add theme logic in `ThemeContext.tsx`
3. Update the theme toggle in `Header.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Push code to GitHub
   - Connect repository to Vercel
   - Deploy automatically

2. **Manual deployment**
   ```bash
   npm run build
   vercel --prod
   ```

### Netlify

1. **Connect to Netlify**
   - Push code to GitHub
   - Connect repository to Netlify
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Manual deployment**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Other Platforms

The build output in the `dist` folder can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh

## 📱 Contact Form Setup

The contact form is configured for Netlify Forms. To enable:

1. **Deploy to Netlify**
2. **Add form attributes** (already configured in `Contact.tsx`)
3. **Test form submission**
4. **View submissions** in Netlify dashboard

For other form services:
- **Formspree**: Update form action URL
- **EmailJS**: Add EmailJS configuration
- **Custom API**: Update form submission handler

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage
npm run test -- --coverage
```

## 📈 Performance

The website is optimized for performance:

- **Code Splitting**: Automatic code splitting with Vite
- **Image Optimization**: Optimized images and lazy loading
- **Bundle Analysis**: Use `npm run build` to analyze bundle size
- **Lighthouse Score**: 95+ on all metrics

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

**Prasad R Mutnale**
- Email: mutnaleprasad21@gmail.com
- Phone: +91 7019943781
- LinkedIn: [linkedin.com/in/prasad-mutnale](https://linkedin.com/in/prasad-mutnale)
- GitHub: [github.com/Prasad-mutnale](https://github.com/Prasad-mutnale)

---

Made with ❤️ by Prasad R Mutnale
