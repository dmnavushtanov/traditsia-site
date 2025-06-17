# Nonprofit Organization Website

A modern, fully customizable static website built with Next.js for a nonprofit organization featuring multi-tab navigation, image gallery, events management, and interactive Google Maps integration.

## 🚀 Features

- **Multi-tab Layout**: Home, About, Contact, Events, and Gallery pages
- **Events Management**: Dynamic events page with individual event details
- **Image Gallery**: Optimized image display with metadata support
- **Interactive Google Maps**: Custom pins for event locations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Static generation for better search engine visibility
- **Future-Ready**: Easily extensible for database, authentication, and CMS integration

## 🛠 Technology Stack

### Core Framework
- **Next.js 14+** with App Router - React framework for production
- **React 18** - Component architecture and UI library
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework for styling

### Content Management
- **Markdown files** with frontmatter for events and blog posts
- **JSON files** for configuration data
- **Gray-matter** for parsing frontmatter

### Additional Libraries
- **next/image** - Optimized image loading and processing
- **@googlemaps/js-api-loader** - Google Maps integration
- **Framer Motion** - Smooth animations and transitions
- **React Hook Form** - Form handling and validation

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact page
│   ├── events/
│   │   ├── page.tsx            # Events listing
│   │   └── [slug]/page.tsx     # Individual event pages
│   ├── gallery/page.tsx        # Image gallery
│   └── layout.tsx              # Root layout with navigation
├── components/
│   ├── Navigation.tsx          # Header navigation
│   ├── EventCard.tsx          # Event preview cards
│   ├── ImageGallery.tsx       # Gallery component
│   ├── GoogleMap.tsx          # Interactive map
│   └── ContactForm.tsx        # Contact form
├── content/
│   ├── events/                # Markdown files for events
│   │   ├── fundraiser-2024.md
│   │   └── community-meeting.md
│   └── gallery/               # Image metadata
├── lib/
│   ├── content.ts             # Content parsing utilities
│   └── maps.ts                # Google Maps configuration
└── public/
    ├── images/                # Gallery images
    └── icons/                 # Map pins and UI icons
```

## 🎯 Why This Tech Stack?

### Performance Benefits
- **Static Site Generation (SSG)** for lightning-fast page loads
- **Image optimization** with Next.js built-in image component
- **Automatic code splitting** for optimal bundle sizes
- **Edge deployment** capabilities for global CDN distribution

### Customization & Flexibility
- **Component-based architecture** for easy customization
- **Tailwind CSS** for rapid UI development
- **TypeScript** for maintainable and scalable code
- **File-based routing** for intuitive navigation structure

### Ecosystem & Community
- **Large React ecosystem** with extensive third-party libraries
- **Active Next.js community** with regular updates and improvements
- **Comprehensive documentation** and learning resources
- **Industry standard** tooling and best practices

### Hosting Options
- **Vercel** (recommended) - Zero-config deployment
- **Netlify** - JAMstack hosting with form handling
- **GitHub Pages** - Free static hosting
- **AWS S3 + CloudFront** - Enterprise-grade hosting

## 🗺 Routing Strategy

### File-Based Routing
The project uses Next.js App Router with file-based routing:

- `/` - Home page (`src/app/page.tsx`)
- `/about` - About page (`src/app/about/page.tsx`)
- `/contact` - Contact page (`src/app/contact/page.tsx`)
- `/events` - Events listing (`src/app/events/page.tsx`)
- `/events/[slug]` - Individual event pages (`src/app/events/[slug]/page.tsx`)
- `/gallery` - Image gallery (`src/app/gallery/page.tsx`)

### Dynamic Routes
- **Event pages**: `/events/fundraiser-2024`, `/events/community-meeting`
- **Automatic slug generation** from markdown filenames
- **Static generation** at build time for all event pages

## 🔮 Future Extensibility

This architecture is designed for easy expansion:

### Database Integration
- **Prisma ORM** with PostgreSQL or MongoDB
- **API routes** for server-side functionality
- **Database migrations** for schema management

### Authentication & User Management
- **NextAuth.js** for authentication
- **Role-based access control** for admin features
- **User profiles** and member management

### Content Management System
- **Sanity.io** or **Strapi** for headless CMS
- **Admin dashboard** for content editors
- **Media management** for images and documents

### Advanced Features
- **Newsletter subscription** with email integration
- **Donation processing** with payment gateways
- **Event registration** with form handling
- **Volunteer management** system

## ⚠️ Trade-offs & Considerations

### Potential Challenges
- **Initial complexity** higher than basic static site generators
- **Bundle size** may be larger for simple use cases
- **Google Maps API costs** for high traffic websites
- **Build times** may increase with large amounts of content

### Mitigation Strategies
- **Progressive enhancement** - start simple, add features gradually
- **Code splitting** and lazy loading for performance optimization
- **API key management** and usage monitoring for Maps
- **Incremental Static Regeneration (ISR)** for large content sites

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git for version control

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd tradistsia-site

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### Environment Variables
Create a `.env.local` file with:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Development Commands
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # Run TypeScript check
```

## 📝 Content Management

### Adding Events
1. Create a new markdown file in `src/content/events/`
2. Add frontmatter with event metadata:
   ```markdown
   ---
   title: "Community Fundraiser 2024"
   date: "2024-03-15"
   location: "Community Center"
   coordinates: [40.7128, -74.0060]
   description: "Join us for our annual fundraising event"
   image: "/images/fundraiser-2024.jpg"
   ---
   
   Event content goes here...
   ```

### Managing Gallery Images
1. Add images to `public/images/`
2. Create metadata files in `src/content/gallery/`
3. Use the ImageGallery component to display them

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions and support, please contact:
- Email: [organization-email]
- Website: [organization-website]
- GitHub Issues: [repository-issues-url]

---

Built with ❤️ for nonprofit organizations making a difference in their communities. 