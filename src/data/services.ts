// src/data/services.ts

export interface ServiceSection {
    type: 'rich' | '2col' | 'examples'
    className?: string
    content?: string
    title?: string
    subtitle?: string
    image?: {
        src: string,
        alt: string
    }
    col1Content?: string
    col2Content?: string
    exampleSlugs?: string[]
}

export interface Service {
    title: string
    slug: string
    description: string
    sections: ServiceSection[]
}

export const services: Service[] = [
    {
        title: 'Web Design & Development',
        slug: 'web-design-development',
        description: 'Custom-built websites that look great, load quickly, and help grow your business. Designed for clarity, conversions, and long-term growth across all devices.',
        sections: [
            {
                type: 'rich',
                className: 'sectionOverlapBlock',
                image: {
                    src: '/img/services/web-design-development.jpg',
                    alt: 'Web Design & Development'
                },
                content:
                    `
                    <h2>Web Design That Stands Out</h2>
                    <h3>A website should do more than look good — it should drive results.</h3>
                    <p>I balance creativity with performance, making sure your website isn't just visually appealing, but also fast, reliable, and SEO-friendly. Every site is:</p>
                    <ul>
                        <li><strong>Custom:</strong> Designed specifically for your brand and audience</li>
                        <li><strong>Responsive:</strong> Looks and works great on any device</li>
                        <li><strong>Accessible:</strong> Inclusive design so everyone can engage</li>
                        <li><strong>Conversion-focused:</strong> Guides visitors toward meaningful action</li>
                    </ul>
                    `,
            },
            {
                type: '2col',
                title: 'Build your website according to <span>your needs</span>',
                col1Content:
                    `
                    <h2>What I Build</h2>
                    <ul>
                        <li><strong>Custom websites</strong> tailored to your business goals</li>
                        <li><strong>Landing pages</strong> designed to maximize leads and conversions</li>
                        <li><strong>Marketing websites</strong> that engage visitors and tell your story</li>
                        <li><strong>UI/UX improvements</strong> that make navigating effortless</li>
                    </ul>
                    <p>Every project is designed with your users in mind, creating seamless experiences that keep them coming back.</p>
                    `,
                col2Content:
                    `
                    <h2>How I Work</h2>
                    <ul>
                        <li><strong>Frontend development</strong> with modern HTML, CSS, and JavaScript ensures fast, maintainable, and SEO-friendly sites</li>
                        <li><strong>Responsive layouts</strong> make sure your site works on every screen</li>
                        <li><strong>Performance optimization</strong> keeps load times low and Core Web Vitals high</li>
                        <li><strong>Visual design and interaction</strong> focus on usability, clarity, and your brand’s style</li>
                    </ul>
                    <p>I bring technical expertise and design sensibility together to deliver websites that perform and impress.</p>
                    `,
            },
            {
                type: 'examples',
                className: 'sectionExamples',
                title: 'Projects that Get Results',
                subtitle: 'Explore real examples of websites built to engage visitors, drive conversions, and showcase unique brands.',
                exampleSlugs: [
                    'ascendant', 
                    'nextpoint-llc', 
                    'aspen-surgical'
                ]
            },
        ],
    },
    {
        title: 'WordPress Development',
        slug: 'wordpress-development',
        description: 'Flexible WordPress sites built for easy content management, tailored to your needs. Includes custom themes, block setup, and editor training so you stay in control.',
        sections: []
    },
    {
        title: 'E-Commerce Development',
        slug: 'ecommerce-development',
        description: 'Professional online stores built on WooCommerce. Includes catalog setup, secure payments, and a storefront optimized for both selling and usability.',
        sections: []
    },
    {
        title: 'SEO & Performance Optimization',
        slug: 'seo-performance-optimization',
        description: 'Improve your site\'s search visibility and load speed with technical SEO, metadata tuning, analytics setup, and performance audits that drive real results.',
        sections: []
    },
    {
        title: 'Maintenance & Support',
        slug: 'maintenance-support',
        description: 'Keep your site running smoothly with ongoing updates, security checks, backups, and performance tuning. No more worrying about downtime or stale content.',
        sections: []
    },
    {
        title: 'Website Audits & Consulting',
        slug: 'website-audits-consulting',
        description: 'Actionable site audits and strategic consulting to uncover UX issues, SEO opportunities, and performance bottlenecks—so you can plan smart improvements.',
        sections: []
    }
];
