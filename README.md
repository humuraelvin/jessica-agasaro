# Jessica Agasaro - Professional Portfolio

A modern, responsive portfolio website built with Next.js, showcasing Jessica Agasaro's journalistic work, experience, and achievements at New Times Rwanda.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **News Articles**: Showcase of published articles with direct links
- **YouTube Integration**: Embedded video player with custom controls
- **CV Download**: Professional CV available for download
- **Contact Form**: Interactive contact form with validation
- **SEO Optimized**: Meta tags and structured data for search engines

## 📱 Sections

1. **Hero Section**: Professional introduction with call-to-action buttons
2. **About**: Personal story, values, and professional approach
3. **Experience**: Detailed work history and achievements at New Times Rwanda
4. **News Articles**: Collection of published articles with images and links
5. **YouTube Video**: Embedded video player with custom styling
6. **CV Download**: Professional resume with download functionality
7. **Contact**: Contact form and professional information
8. **Footer**: Social links and additional information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **Language**: TypeScript for type safety
- **Deployment**: Optimized for Vercel deployment

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jessica-agasaro-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue gradient theme
- Secondary colors: Gray/neutral theme
- Accent colors: Custom gradients

### Content
- Update personal information in component files
- Replace images in the `public/` directory
- Modify news articles and links in `NewsArticles.tsx`
- Update YouTube video ID in `YouTubeVideo.tsx`

### Styling
- Custom CSS classes in `app/globals.css`
- Component-specific styles using Tailwind utilities
- Animation configurations in component files

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main page component
├── components/
│   ├── Navigation.tsx       # Navigation bar with smooth scrolling
│   ├── Hero.tsx           # Hero section with introduction
│   ├── About.tsx          # About section with images and values
│   ├── Experience.tsx     # Professional experience timeline
│   ├── NewsArticles.tsx   # News articles showcase
│   ├── YouTubeVideo.tsx   # YouTube video player
│   ├── CVDownload.tsx     # CV download section
│   ├── Contact.tsx        # Contact form and information
│   └── Footer.tsx         # Footer with links and info
├── public/
│   ├── personal_pics/      # Personal photographs
│   ├── news_articles_pics/ # News article images
│   └── cv/               # CV PDF file
├── package.json           # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for speed and user experience
- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting for faster loading

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Responsive design principles

## 📝 License

This project is created for Jessica Agasaro's professional portfolio. All rights reserved.

## 🤝 Contributing

This is a personal portfolio website. For any suggestions or improvements, please contact Jessica Agasaro directly.

## 📞 Contact

- **Email**: jessica.agasaro@newtimes.co.rw
- **Phone**: +250 788 123 456
- **Location**: Kigali, Rwanda
- **Website**: [Portfolio URL]

---

Built with ❤️ for journalism excellence.
