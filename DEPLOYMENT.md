# Deployment Guide

This portfolio website is ready for deployment. Choose your preferred platform:

## GitHub Pages

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: Select `main` or `copilot/create-modern-portfolio-website`
   - Folder: `/ (root)`
   - Click Save

2. **Access your site:**
   - Your site will be available at: `https://[username].github.io/portfolio/`
   - Wait a few minutes for the first deployment

## Netlify

1. **Deploy via Drag & Drop:**
   - Go to https://app.netlify.com/drop
   - Drag the entire folder (excluding `.git`)
   - Get instant deployment URL

2. **Deploy via Git:**
   - Connect your GitHub repository
   - Build settings: Leave empty (static site)
   - Publish directory: `/`
   - Click Deploy

## Vercel

1. **Import Repository:**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Framework Preset: Other
   - Root Directory: `./`
   - Click Deploy

2. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain

## Cloudflare Pages

1. **Connect Repository:**
   - Go to Cloudflare Pages
   - Create a project from Git
   - Select your repository
   - Build settings: None (static site)
   - Build output directory: `/`
   - Click Save and Deploy

## Local Testing

Before deploying, test locally:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## Performance Tips

1. **Optimize Images:**
   - Replace placeholder images with actual project screenshots
   - Compress images (< 200KB each)
   - Use WebP format for better compression

2. **Custom Domain:**
   - Purchase a domain (e.g., yourname.dev)
   - Configure DNS in your hosting platform
   - Enable HTTPS (usually automatic)

3. **SEO:**
   - Update meta tags in `index.html`
   - Add your actual name and information
   - Create `robots.txt` if needed

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify dark/light mode toggle
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Verify images load correctly
- [ ] Test on different browsers
- [ ] Run Lighthouse audit
- [ ] Add custom domain (optional)
- [ ] Set up analytics (optional)

## Troubleshooting

**Issue:** Images not loading
- **Solution:** Ensure image paths are correct and images exist

**Issue:** Styles not applying
- **Solution:** Clear browser cache, check CSS file paths

**Issue:** JavaScript not working
- **Solution:** Check browser console for errors

**Issue:** Site not updating after changes
- **Solution:** Clear cache, wait for deployment, check build logs

## Need Help?

- Check the README.md for detailed documentation
- Review browser console for errors
- Test locally before deploying
- Verify all file paths are correct
