# Mindojo

AI-powered PDF to flashcards conversion webapp project.

## Overview

Mindojo is a comprehensive solution for converting PDF documents into interactive flashcards for efficient learning. The project includes a Next.js landing page and the core webapp functionality.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. Navigate to the landing directory:
   ```bash
   cd landing
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Create environment variables:
   Create a `.env.local` file in the `landing/` directory with:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

### Google Analytics Setup

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for your website
3. Copy your Measurement ID (format: G-XXXXXXXXXX)
4. Add it to your `.env.local` file:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

The Google Analytics tracking is already implemented and will automatically start working once you add your Measurement ID.

### Project Structure

```
landing/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── google-analytics.tsx  # Google Analytics integration
├── public/             # Static assets
├── styles/             # Global styles
└── package.json        # Dependencies and scripts
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Deployment

This project is ready for deployment on Vercel, Netlify, or any other Next.js-compatible platform.

## Features

- ✅ Responsive design with Tailwind CSS
- ✅ Google Analytics 4 integration
- ✅ Vercel Analytics
- ✅ Modern UI components with Radix UI
- ✅ TypeScript support
- ✅ SEO optimized
- ✅ AI-powered PDF to flashcard conversion
