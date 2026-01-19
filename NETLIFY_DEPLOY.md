# Netlify Deployment Guide - Ubuntu Asili Africa

This guide will help you deploy the Ubuntu Asili Africa application to Netlify.

## Prerequisites

- A [Netlify account](https://netlify.com)
- A [Google Gemini API key](https://aistudio.google.com/apikey)
- GitHub repository linked to your project

## Quick Start Deployment

### Step 1: Connect Your Repository to Netlify

1. Go to [Netlify](https://netlify.com) and log in
2. Click "New site from Git"
3. Select GitHub and authorize Netlify
4. Choose the `Ubuntu-Asili` repository
5. Netlify will auto-detect the build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### Step 2: Set Environment Variables

1. In Netlify, go to **Site Settings** → **Build & Deploy** → **Environment**
2. Add a new environment variable:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Your actual Gemini API key
3. Click "Save"

### Step 3: Deploy

1. Click "Deploy site"
2. Netlify will automatically:
   - Install dependencies (`npm install`)
   - Build the project (`npm run build`)
   - Deploy to production

Your site will be live at a URL like `https://<random-name>.netlify.app`

## Custom Domain Setup

1. Go to **Site Settings** → **Domain Management**
2. Click "Add custom domain"
3. Enter your domain (e.g., `ubuntuasili.com`)
4. Follow the DNS configuration steps provided by Netlify

## Continuous Deployment

Once connected, every push to the `master` branch will automatically trigger a new deployment.

To preview changes before merging:
1. Create a new branch: `git checkout -b feature/new-feature`
2. Push the branch to GitHub
3. Netlify will create a deploy preview
4. Merge to `master` when ready

## Troubleshooting

### Build Fails
- Check that all environment variables are set in Netlify
- Verify `npm run build` works locally: `npm run build`
- Check the Netlify build logs for specific errors

### API Key Not Working
- Ensure `GEMINI_API_KEY` is set in Netlify environment variables
- The build command must be run AFTER setting environment variables
- Verify the API key is valid at [aistudio.google.com](https://aistudio.google.com)

### Routing Issues
- The `netlify.toml` file includes SPA rewrites for React Router
- If you see 404 errors on page refresh, this is already handled

## Project Structure

```
ubuntu-asili-africa/
├── netlify.toml          # Netlify configuration
├── _redirects            # Redirect rules for SPA
├── .env.example          # Example environment variables
├── dist/                 # Built files (generated)
├── src/
├── package.json
└── vite.config.ts
```

## Build Optimization

The Vite config is optimized for production:
- Minification enabled
- Source maps disabled in production
- Console logs removed in production
- Efficient bundle size

## Performance Tips

1. Monitor your site performance at Netlify Analytics
2. Use browser devtools to check bundle sizes
3. Consider enabling Netlify's image optimization for faster loading
4. Enable Netlify Analytics to track user behavior

## Support

For Netlify support: https://docs.netlify.com
For Vite documentation: https://vitejs.dev
For React Router: https://reactrouter.com
