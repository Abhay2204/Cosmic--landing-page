# Deployment Guide

## Vercel Deployment

This project is ready for deployment on Vercel. Follow these steps:

### 1. Prerequisites
- GitHub repository with this code
- Vercel account

### 2. Deploy to Vercel

#### Option A: Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

#### Option B: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy"

### 3. Environment Variables (Optional)
If you want to use AI features, add these environment variables in Vercel:
- `GEMINI_API_KEY`: Your Gemini API key

### 4. Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain

## Build Configuration

The project includes:
- ✅ `vercel.json` - Vercel configuration
- ✅ `tailwind.config.js` - Tailwind CSS configuration
- ✅ `postcss.config.js` - PostCSS configuration
- ✅ Proper build scripts in `package.json`
- ✅ TypeScript configuration
- ✅ All dependencies installed

## Troubleshooting

If you encounter issues:
1. Make sure all dependencies are installed: `npm install`
2. Test the build locally: `npm run build`
3. Check the Vercel build logs for specific errors

## Performance
- The build is optimized for production
- Images are properly referenced
- CSS is minified and optimized
- JavaScript is bundled and compressed