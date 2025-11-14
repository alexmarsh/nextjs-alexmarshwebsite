// src/data/experience.ts

export interface Job {
    logo: string
    title: string
    role: string
    employment_type: string
    start_date: string
    end_date: string
    description: string
}

export const experience: Job[] = [
    {
        logo: '/img/experience/alex-marsh-logo.webp',
        title: 'Alex Marsh Web Development',
        role: 'Web Developer',
        employment_type: 'Freelance',
        start_date: 'Jan 2012',
        end_date: 'Present',
        description: 'My freelance work has included everything from securing contracts, design composition, logo & graphics creation, as well as full-stack development and testing. Creating visually-appealing websites that feature user-friendly design has always been my primary goal. Having a strong understanding of user-interface, user-experience, and web standards is a necessity.',
    },
    {
        logo: '/img/experience/renoun-creative-logo.svg',
        title: '[Re]noun Creative',
        role: 'Web Developer',
        employment_type: 'Full-time',
        start_date: 'Mar 2024',
        end_date: 'Nov 2024',
        description: 'Renoun Creative is a full-service digital agency. As a Web Developer, I worked on a wide range of projects, primarily focused on building and maintaining WordPress-based websites for clients. My responsibilities included developing custom themes and plugins, optimizing site performance, implementing SEO best practices, and ensuring responsive design. I also collaborated closely with design and development teams to deliver high-quality, client-focused solutions. Additionally, I contributed to troubleshooting, site updates, and providing ongoing technical support.',
    },
    {
        logo: '/img/experience/flynn-logo.webp',
        title: 'Flynn',
        role: 'Senior Web Developer',
        employment_type: 'Full-time',
        start_date: 'Aug 2020',
        end_date: 'Nov 2022',
        description: 'Flynn is an independent full-service marketing agency. As the Senior Web Developer, I took the lead on a wide variety of digital development projects while collaborating with a diverse group of people. Responsibilities in the role included writing full-stack code, providing strategic direction for web projects, contributing to scoping, estimates and proposals, managing hosting accounts, providing technical consulting, and more.',
    },
    {
        logo: '/img/experience/rsg-logo.webp',
        title: 'Ryan Specialty',
        role: 'Web Developer',
        employment_type: 'Contract',
        start_date: 'May 2019',
        end_date: 'Aug 2020',
        description: 'Ryan Specialty is a specialty insurance firm that provides innovative solutions for brokers, agents and insurance carriers. I was brought in on a long-term contract to help provide support and creative expertise from a web design standpoint to help redevelop and enhance their web portal insurance application to be competitive in the market.',
    },
    {
        logo: '/img/experience/floral-systems-logo.webp',
        title: 'Floral Systems',
        role: 'Front-End Web Developer',
        employment_type: 'Full-time',
        start_date: 'Jan 2019',
        end_date: 'Apr 2019',
        description: 'Floral Systems is a provider of independent business solutions for florists including E-commerce websites, email marketing, and POS systems. As part of the streamlined web team, I worked on a number of front-end facing development projects, including customized HTML email marketing templates and bespoke E-commerce website designs. I also redesigned and developed the businesses main website.',
    },
    {
        logo: '/img/experience/citi-logo.webp',
        title: 'Citi',
        role: 'Lead Web Developer',
        employment_type: 'Full-time',
        start_date: 'Feb 2015',
        end_date: 'Nov 2017',
        description: 'As a Lead Developer at Citi, I often headed projects leveraging various technologies to create dynamic, robust, and pioneering solutions in a deadline-driven environment. An essential part of the daily routine was designing, coding and modifying websites from layout to function according to the business line’s established branding guidelines and specifications.',
    },
    {
        logo: '/img/experience/fisher-price-logo.webp',
        title: 'AURORA Consulting Group',
        role: 'Front-End Web Developer',
        employment_type: 'Full-time',
        start_date: 'Jan 2012',
        end_date: 'Sep 2012',
        description: 'As part of division of labor at Aurora Consulting Group, I had the opportunity to develop sites for some for the biggest names in the toy industry – Fisher-Price & Mattel. My role within the team of specialized engineers was the creation and maintenance of hand-written, semantic, standards-based front-end code and pixel-exact website production based on supplied design compositions.',
    },
]
