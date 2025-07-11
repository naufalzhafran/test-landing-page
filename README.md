# Premium Indonesian Charcoal Export Landing Page

A modern, SEO-optimized landing page for Indonesian charcoal export business built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **SEO Optimized**: Complete meta tags, structured data, sitemap, and robots.txt
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Performance**: Built with Next.js 15 for optimal performance
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Modern styling with custom design system
- **Professional Layout**: Based on successful charcoal export websites

## 🎯 Target Audience

- International charcoal importers
- Distributors and wholesalers
- Shisha/hookah businesses
- BBQ and grilling companies
- Industrial charcoal buyers

## 📋 Sections Included

1. **Hero Section**: Compelling value proposition and CTAs
2. **About Section**: Company credibility and key benefits
3. **Products Section**: Detailed product showcase with pricing
4. **Quality Section**: Certifications and quality assurance
5. **OEM Section**: Custom manufacturing services
6. **Shipping Section**: Global shipping information
7. **Free Samples**: Sample request functionality
8. **FAQ Section**: Common questions and answers
9. **Contact Section**: Multiple contact methods and form
10. **Footer**: Complete sitemap and company information

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter (body) + Playfair Display (headings)
- **Icons**: Emoji icons (can be replaced with icon library)

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd test-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Customization Guide

### 1. Update Company Information

Edit the following files to replace placeholder content:

- `src/app/layout.tsx`: Update metadata and structured data
- `src/app/page.tsx`: Replace contact information, addresses, and phone numbers
- `src/app/sitemap.ts`: Update your domain URL
- `src/app/robots.ts`: Update your domain URL

### 2. Add Real Images

Replace emoji icons with professional product images:

- Add product images to `public/` folder
- Update image references in `src/app/page.tsx`
- Consider using Next.js Image component for optimization

### 3. Configure Contact Information

Update the contact section with your actual details:

```typescript
// In src/app/page.tsx
{
  email: "your-email@company.com",
  phone: "+62 XXX XXX XXXX",
  whatsapp: "+62 XXX XXX XXXX",
  address: "Your actual address",
  workingHours: "Your working hours"
}
```

### 4. Update Pricing

Modify product pricing in the products section:

```typescript
// In src/app/page.tsx - Products Section
{
  price: "$XXX/ton",
  specifications: ["Your specs"],
  features: ["Your features"]
}
```

### 5. Add Analytics

Add Google Analytics or other tracking:

```typescript
// In src/app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"
  strategy="afterInteractive"
/>
```

### 6. Configure Form Handling

The contact form currently uses placeholder form handling. To make it functional:

1. Add a form handler (e.g., Formspree, Netlify Forms, or custom API)
2. Update the form action in the contact section
3. Add form validation

### 7. Add Payment Integration

For quote requests and payments:

1. Integrate with payment processors (Stripe, PayPal)
2. Add quote calculation functionality
3. Implement order management system

## 🔧 SEO Optimization

### Built-in SEO Features

- **Meta Tags**: Comprehensive title, description, and keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: JSON-LD for better search engine understanding
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions
- **Mobile Optimization**: Responsive design for mobile-first indexing

### Additional SEO Recommendations

1. **Add Google Search Console**: Monitor search performance
2. **Google My Business**: Local SEO optimization
3. **Content Marketing**: Regular blog posts about charcoal industry
4. **Backlink Building**: Partner with industry websites
5. **Local SEO**: Target Indonesian export keywords

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables if needed
3. Deploy with one click

### Other Platforms

- **Netlify**: Drag and drop deployment
- **AWS Amplify**: Full-stack deployment
- **DigitalOcean**: VPS deployment

## 📊 Performance Optimization

The landing page is optimized for performance with:

- Next.js 15 App Router
- Optimized fonts loading
- Efficient CSS with Tailwind
- Image optimization ready
- SEO-friendly structure

## 🎨 Design System

### Colors

- Primary: #1a1a1a (Dark charcoal)
- Secondary: #2d2d2d (Medium charcoal)
- Accent: #d4af37 (Gold)
- Success: #059669 (Green)

### Typography

- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

### Components

- Cards with hover effects
- Buttons with consistent styling
- Forms with proper validation states
- Responsive grid layouts

## 🔒 Security

- TypeScript for type safety
- Input sanitization recommended
- Environment variable protection
- HTTPS enforced

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📈 Analytics & Tracking

Ready for integration with:

- Google Analytics 4
- Facebook Pixel
- Google Tag Manager
- Conversion tracking

## 🛡️ Legal Compliance

Consider adding:

- Privacy Policy
- Terms of Service
- Cookie Policy
- GDPR compliance (if targeting EU)

## 🤝 Support

For support and customization:

1. Check the documentation
2. Review code comments
3. Submit issues via GitHub
4. Contact for custom development

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Next Steps

1. **Content**: Add real product images and company photos
2. **Functionality**: Implement contact form backend
3. **SEO**: Set up Google Search Console and Analytics
4. **Marketing**: Launch social media campaigns
5. **Expansion**: Add multi-language support for global reach

---

**Built with ❤️ for Indonesian charcoal exporters**

Ready to dominate the global charcoal market? Deploy this landing page and start converting visitors into customers!
