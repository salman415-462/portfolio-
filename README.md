# Muhammad Salman - Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring glassmorphism design, smooth animations, and GitHub Pages deployment.

## 🚀 Features

- **Modern Glassmorphism Design**: Beautiful translucent effects with backdrop blur
- **Dark/Light Theme Toggle**: Seamless theme switching with localStorage persistence
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Typing Animation**: Dynamic headline with Typed.js
- **Fully Responsive**: Mobile-first design approach
- **SEO Optimized**: Comprehensive meta tags and semantic HTML
- **Google Analytics**: Built-in analytics tracking
- **Performance Optimized**: Fast loading with modern web standards

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: AOS, Typed.js, Framer Motion
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)
- **Build Tool**: Vite
- **Deployment**: GitHub Pages Ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/muhammad-salman/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in root directory
   VITE_GA_MEASUREMENT_ID=your_google_analytics_id
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 GitHub Pages Deployment

### Option 1: Using GitHub Actions (Recommended)

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to Pages section
   - Set source to "GitHub Actions"

2. **Create workflow file**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       
       steps:
       - name: Checkout
         uses: actions/checkout@v4

       - name: Setup Node.js
         uses: actions/setup-node@v4
         with:
           node-version: '18'
           cache: 'npm'

       - name: Install dependencies
         run: npm ci

       - name: Build
         run: npm run build
         env:
           VITE_GA_MEASUREMENT_ID: ${{ secrets.VITE_GA_MEASUREMENT_ID }}

       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         if: github.ref == 'refs/heads/main'
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist/public
   ```

3. **Add secrets**
   - Go to repository Settings > Secrets and variables > Actions
   - Add `VITE_GA_MEASUREMENT_ID` with your Google Analytics ID

4. **Push to main branch**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

### Option 2: Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   