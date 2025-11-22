# alexmarshwebsite.com (Next.js Version)

## Overview  
This is the current version of alexmarshwebsite.com, built using Next.js with fully static content. The site showcases Alex Marsh’s portfolio, services, and projects with a fast, React-based frontend.

The project focuses on maintainable static rendering, optimized for performance, accessibility, and SEO, without any CMS or backend.

## Current Status  
- Fully functional static Next.js site
- Custom components for pages and sections (Home Hero, Page Header, Button Group, Services, etc.)
- Responsive design with SCSS modules and modular styling
- Routing and dynamic project pages implemented
- Production-ready deployment pipeline established 

## Tech Stack
- **Frontend:** Next.js (React, TypeScript)
- **Styling:** SCSS Modules, clsx for conditional class names
- **Data:** Static JSON/TS data files for content (no CMS)
- **Hosting:** Vercel
- **Analytics:** Google Analytics and vercel/analytics via Next.js integration

## Getting Started  

### Prerequisites  
- Node.js 18+
- npm or yarn

### Setup  
**1. Clone the repository**
```bash
git clone https://github.com/alexmarsh/nextjs-alexmarshwebsite.git
cd nextjs-alexmarshwebsite
```

**2. Install dependencies**
```bash
npm install
``` 

**3. Start the development server**
```bash
npm run dev
```
- Site will be available at http://localhost:3000 by default.

**4. Build for production**
```bash
npm run build
npm run start
```

---

## Folder Structure (Key Highlights) 
- `src/app` — Next.js App Router pages and layouts
- `src/components` — Reusable components and UI sections (cards, header, footer, forms, sliders, etc.)
- `src/data` — Static content for portfolio, services, experience, technologies
- `src/styles` — Global SCSS and module styles

---

## Future Plans  
- Add services pages
- Optimize images and accessibility further
- Enhance analytics and user tracking

---

## License & Copyright  
© 2025 Alex Marsh. All rights reserved.  
Unauthorized copying, distribution, or use of this code or site content is strictly prohibited.
