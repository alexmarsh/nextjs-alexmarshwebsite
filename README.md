# Headless Version of alexmarshwebsite.com

## Overview  
This project is a headless rebuild of [alexmarshwebsite.com](https://alexmarshwebsite.com), originally built on WordPress with custom Gutenberg components. The new version uses **Sanity** as the content backend and **Next.js** for a React-based frontend with server-side rendering (SSR). The goal is a pixel-perfect, feature-complete reproduction optimized for performance, accessibility, and SEO.

Eventually, this will serve as a case study comparing speed, SEO, and developer experience between WordPress and the headless JAMstack setup.

## Current Status  
- Core app structure and routing implemented  
- Sanity schemas designed for some site content  
- Initial custom components built (Home Hero, Page Header, Button Group, etc.)  
- Content fetching and rendering pipelines working  
- Development and deployment pipelines established  

## Tech Stack  
- **Frontend:** Next.js (React, TypeScript)  
- **Backend CMS:** Sanity.io (headless CMS)  
- **Styling:** SCSS Modules, clsx for conditional class names  
- **Data Fetching:** GROQ queries via Sanity client  
- **Hosting:** (Not yet established, e.g., Vercel)  

## Getting Started  

### Prerequisites  
- Node.js 18+  
- npm or yarn  
- Sanity CLI installed globally (`npm install -g @sanity/cli`)  

### Setup  
**1. Clone the repository**
```bash
git clone https://github.com/alexmarsh/alexmarshwebsite-headless.git
cd alexmarshwebsite-headless
```
**2. Install dependencies and start Sanity Studio**
```bash
cd alexmarshwebsite-headless/sanity
npm install
npm run dev
```
- Sanity Studio will be available at http://localhost:3333 by default.  

**3. In a new terminal, install dependencies and start the Frontend**
```bash
cd alexmarshwebsite-headless/frontend
npm install
npm run dev
```
- Next.js frontend will be available at http://localhost:3000.

---

## Future Plans  
- Expand component library and content types  
- Implement incremental static regeneration (ISR) and preview mode  
- Conduct detailed speed and SEO comparisons with WordPress site  
- Improve documentation and onboarding for contributors  

---

## License & Copyright  
© 2025 Alex Marsh. All rights reserved.  
Unauthorized copying, distribution, or use of this code or site content is strictly prohibited.
