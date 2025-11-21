// src/data/services.ts

export interface Service {
    title: string
    slug: string
    description: string
}

export const services: Service[] = [
    {
        title: 'Web Design & Development',
        slug: 'web-design-development',
        description: 'Custom-built websites that look great, load quickly, and scale with your business. Designed for clarity, conversions, and long-term growth across all devices.'
    },
    {
        title: 'WordPress Development',
        slug: 'wordpress-development',
        description: 'Flexible WordPress sites built for easy content management, tailored to your needs. Includes custom themes, block setup, and editor training so you stay in control.'
    },
    {
        title: 'E-Commerce Development',
        slug: 'ecommerce-development',
        description: 'Professional online stores built on WooCommerce. Includes catalog setup, secure payments, and a storefront optimized for both selling and usability.'
    },
    {
        title: 'SEO & Performance Optimization',
        slug: 'seo-performance-optimization',
        description: 'Improve your site\'s search visibility and load speed with technical SEO, metadata tuning, analytics setup, and performance audits that drive real results.'
    },
    {
        title: 'Maintenance & Support',
        slug: 'maintenance-support',
        description: 'Keep your site running smoothly with ongoing updates, security checks, backups, and performance tuning. No more worrying about downtime or stale content.'
    },
    {
        title: 'Website Audits & Consulting',
        slug: 'website-audits-consulting',
        description: 'Actionable site audits and strategic consulting to uncover UX issues, SEO opportunities, and performance bottlenecks—so you can plan smart improvements.'
    }
];
