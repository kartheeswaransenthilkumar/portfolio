# AI & Data Science Portfolio

A modern, fully optimized portfolio website for showcasing AI & Data Science projects, skills, and experience.

## ✨ Features

### Design & UI
- 🎨 Modern, professional design with glassmorphism effects
- 🌓 Dark/Light mode toggle with persistent theme
- 📱 Fully responsive (mobile-first approach)
- ✨ Smooth animations and transitions
- 🎯 Interactive hover effects
- 💫 Particle effects and smooth scrolling

### Sections
1. **Hero Section** - Eye-catching introduction with typing animation
2. **About Me** - Education, interests, and animated statistics
3. **Skills** - Visual representation of technical skills with progress bars
4. **Projects** - Filterable project showcase with categories
5. **Experience** - Timeline-based experience display
6. **Certifications** - Grid layout for certifications
7. **Contact** - Functional contact form with validation

### Technical Features
- ⚡ Fast loading with lazy loading for images
- 🎯 SEO optimized with meta tags
- ♿ Accessibility compliant (WCAG 2.1 AA)
- 📊 Scroll progress indicator
- ⬆️ Back to top button
- 🎭 Loading screen animation
- 🖱️ Active navigation on scroll
- 🎨 CSS variables for easy theming
- 📝 Form validation
- 🎬 AOS (Animate On Scroll) implementation

## 🚀 Quick Start

### View the Website

Simply open `index.html` in your web browser:

```bash
# Using Python's built-in server
python -m http.server 8000

# Or using Node.js http-server
npx http-server

# Or using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

### Deployment

This portfolio is ready to deploy on:
- **GitHub Pages**: Push to `gh-pages` branch
- **Netlify**: Drag and drop the folder or connect your repo
- **Vercel**: Import your GitHub repository
- **Cloudflare Pages**: Connect your repository

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main stylesheet
│   └── responsive.css     # Responsive design
├── js/
│   ├── main.js           # Core functionality
│   └── animations.js     # Advanced animations
├── images/
│   └── project-placeholder.jpg  # Project images
├── assets/
│   └── resume.pdf        # Resume download
└── README.md             # Documentation
```

## 🎨 Customization

### 1. Personal Information

Update the following in `index.html`:
- Replace "Your Name" with your actual name
- Update "Your University Name" with your institution
- Add your social media links (GitHub, LinkedIn, Kaggle, Twitter)
- Update email and phone in the contact section

### 2. Colors & Theme

Modify CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary color */
    --accent-color: #ec4899;       /* Accent color */
}
```

### 3. Projects

Add your projects in the projects section of `index.html`:
- Add project images to the `images/` folder
- Update project titles, descriptions, and technologies
- Add GitHub/live demo links

### 4. Skills

Update skill percentages and add/remove skills in the skills section.

### 5. Resume

Replace `assets/resume.pdf` with your actual resume.

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox & Grid
- **JavaScript (ES6+)**: Vanilla JS for functionality
- **Font Awesome**: Icons
- **Google Fonts**: Poppins & Space Grotesk

## 📊 Performance

Optimized for:
- ✅ Fast loading times (< 2 seconds)
- ✅ Lighthouse score > 90
- ✅ SEO friendly
- ✅ Accessibility compliant
- ✅ Mobile responsive

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Customization Checklist

- [ ] Update personal information (name, title, bio)
- [ ] Add your profile photo
- [ ] Update education details
- [ ] Add your projects with images
- [ ] Update skills and proficiency levels
- [ ] Add work experience/internships
- [ ] Update certifications
- [ ] Add your resume PDF
- [ ] Update social media links
- [ ] Customize colors/theme
- [ ] Add real project images
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Deploy to hosting platform

## 🎯 Best Practices

1. **Images**: Optimize images (use WebP format, compress to < 200KB)
2. **Content**: Keep descriptions concise and impactful
3. **Projects**: Show your best 6-8 projects
4. **Updates**: Keep content current and relevant
5. **Testing**: Test on multiple devices and browsers

## 📧 Contact Form Backend

The contact form currently shows validation only. To make it functional, integrate with:

- **Formspree**: Add `action="https://formspree.io/f/YOUR_ID"`
- **EmailJS**: Use EmailJS library
- **Netlify Forms**: Add `data-netlify="true"` attribute
- **Custom Backend**: Create API endpoint

## 🔧 Advanced Customization

### Adding New Sections

1. Add section HTML in `index.html`
2. Add navigation link
3. Style in `css/style.css`
4. Add scroll behavior in `js/main.js`

### Custom Animations

Modify `js/animations.js` to add:
- Custom particle effects
- Mouse trail effects
- Advanced hover animations

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 💡 Tips

- Use high-quality project screenshots
- Keep text concise and professional
- Regularly update with new projects
- Test loading speed regularly
- Backup your customizations

## 🌟 Features Roadmap

Potential enhancements:
- [ ] Blog section integration
- [ ] Project detail pages
- [ ] Backend contact form
- [ ] CMS integration
- [ ] Analytics integration
- [ ] PWA capabilities

---

**Built with ❤️ for AI & Data Science Students**