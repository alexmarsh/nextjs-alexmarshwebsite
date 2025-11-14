// src/data/portfolio.ts

import { JobTitle } from './experience'
import { TechnologyTitle } from './technologies';

export interface Project {
    title: string
    slug: string
    excerpt: string
    image: string
    jobTitle: JobTitle
    technologies: TechnologyTitle[]
}

export const portfolio: Project[] = [
    {
        title: "Ascendant",
        slug: "ascendant",
        excerpt: "Custom WordPress Theme",
        image: "/img/portfolio/ascendant.webp",
        jobTitle: "[Re]noun Creative",
        technologies: [
            'CSS3', 
            'HTML5', 
            'JavaScript', 
            'PHP', 
            'Responsive Design', 
            'UI/UX', 
            'WordPress'
        ]
    },
    {
        title: "NextPoint LLC",
        slug: "nextpoint-llc",
        excerpt: "Custom WordPress Theme",
        image: "/img/portfolio/next-point.webp",
        jobTitle: "[Re]noun Creative",
        technologies: [
            'CSS3', 
            'Git', 
            'Google Analytics', 
            'HTML5', 
            'JavaScript', 
            'PHP', 
            'Responsive Design', 
            'UI/UX', 
            'WordPress'
        ]
    },
    {
        title: "Aspen Surgical",
        slug: 'aspen-surgical',
        excerpt: "E-Commerce WordPress Site",
        image: "/img/portfolio/aspen-surgical.webp",
        jobTitle: "Flynn",
        technologies: [
            'Adobe Photoshop', 
            'CSS3', 
            'Git', 
            'Google Analytics', 
            'HTML5', 
            'JavaScript', 
            'PHP', 
            'Responsive Design', 
            'UI/UX', 
            'WordPress'
        ]
    },
    {
        title: "Segar & Sciortino",
        slug: 'segar-law',
        excerpt: "Custom WordPress Theme",
        image: "/img/portfolio/segar-law.webp",
        jobTitle: "Flynn",
        technologies: [
            'Adobe Photoshop', 
            'CSS3', 
            'Git', 
            'Google Analytics', 
            'HTML5', 
            'JavaScript', 
            'PHP', 
            'Responsive Design', 
            'UI/UX', 
            'WordPress'
        ]
    },
    {
        title: "Rochester Nativity Preparatory Academy",
        slug: 'rochester-nativity-preparatory-academy',
        excerpt: "Custom WordPress Theme",
        image: "/img/portfolio/roch-nat-prep.webp",
        jobTitle: "Flynn",
        technologies: [
            'Adobe Photoshop', 
            'CSS3', 
            'Git', 
            'HTML5', 
            'JavaScript', 
            'jQuery', 
            'PHP', 
            'Responsive Design', 
            'UI/UX', 
            'WordPress'
        ]
    },
    {
        title: "Rochester Colonial Jingle",
        slug: 'rochester-colonial-jingle',
        excerpt: "WordPress Brochure Site",
        image: "/img/portfolio/rochester-colonial-jingle.webp",
        jobTitle: "Flynn",
        technologies: [
            'Adobe Photoshop', 
            'CSS3', 
            'Git', 
            'Google Analytics', 
            'HTML5', 
            'PHP', 
            'Responsive Design', 
            'UI/UX', 
            'WordPress'
        ]
    },
    {
        title: "Floral Systems",
        slug: 'floral-systems',
        excerpt: "Custom Frontend",
        image: "/img/portfolio/floral-systems.webp",
        jobTitle: "Floral Systems",
        technologies: [
            'Adobe Illustrator', 
            'Adobe Photoshop', 
            'CSS3', 
            'HTML5', 
            'JavaScript', 
            'Responsive Design', 
            'SVG', 
            'UI/UX'
        ]
    },
    {
        title: "The Connector",
        slug: "the-connector",
        excerpt: "Frontend Development Consult",
        image: "/img/portfolio/the-connector.webp",
        jobTitle: "Ryan Specialty",
        technologies: [
            'Adobe Photoshop', 
            'CSS3', 
            'Git', 
            'HTML5', 
            'JavaScript', 
            'UI/UX'
        ]
    },
    {
        title: "Alchemy Wine & Beer",
        slug: "alchemy-wine-beer",
        excerpt: "Custom WordPress Theme",
        image: "/img/portfolio/alchemy.webp",
        jobTitle: "Alex Marsh Web Development",
        technologies: [
            'Adobe Illustrator', 
            'Adobe Photoshop', 
            'Bootstrap', 
            'CSS3', 
            'Google Analytics', 
            'Google Calendar API', 
            'Google Maps API', 
            'HTML5', 
            'Instagram API', 
            'JavaScript', 
            'jQuery', 
            'PHP', 
            'Responsive Design', 
            'SVG', 
            'UI/UX', 
            'WordPress'
        ]
    },
    {
        title: "Findr",
        slug: "findr",
        excerpt: "Progressive Web App",
        image: "/img/portfolio/findr.webp",
        jobTitle: "Alex Marsh Web Development",
        technologies: [
            'Adobe Illustrator', 
            'CSS3', 
            'D3.js', 
            'HTML5', 
            'JavaScript', 
            'Progressive Web Apps', 
            'SVG', 
            'UI/UX'
        ]
    },
    {
        title: "Knight Chase",
        slug: "knight-chase",
        excerpt: "Web Challenge",
        image: "/img/portfolio/knight-chase.webp",
        jobTitle: "Alex Marsh Web Development",
        technologies: [
            'CSS3', 
            'HTML5', 
            'JavaScript', 
            'jQuery', 
            'UI/UX'
        ]
    },
    {
        title: "Darling Harbor Band",
        slug: "darling-harbor-band",
        excerpt: "Responsive Single-page Website",
        image: "/img/portfolio/darling-harbor.webp",
        jobTitle: "Alex Marsh Web Development",
        technologies: [
            'Adobe Photoshop', 
            'Bootstrap', 
            'CSS3', 
            'Google Analytics', 
            'HTML5', 
            'Instagram API', 
            'JavaScript', 
            'jQuery', 
            'PHP', 
            'SoundCloud API', 
            'Twitter API'
        ]
    },
    {
        title: "Citi Commercial Bank",
        slug: "citi-commercial-bank",
        excerpt: "Dynamic Responsive Website",
        image: "/img/portfolio/citi-commercial-bank.webp",
        jobTitle: "Citi",
        technologies: [
            'Bootstrap', 
            'CSS3', 
            'HTML5', 
            'JavaScript', 
            'JSP / JSTL', 
            'jQuery', 
            'SQL / PostgreSQL'
        ]
    },
    {
        title: "Le Bistro",
        slug: "le-bistro",
        excerpt: "Custom WordPress Theme",
        image: "/img/portfolio/le-bistro.webp",
        jobTitle: "Alex Marsh Web Development",
        technologies: [
            'Bootstrap', 
            'CSS3', 
            'JavaScript', 
            'jQuery', 
            'PHP', 
            'WordPress'
        ]
    },
    {
        title: "Project Management Portal",
        slug: "project-management-portal",
        excerpt: "Web Application",
        image: "/img/portfolio/project-management-portal.webp",
        jobTitle: "Citi",
        technologies: [
            'Bootstrap', 
            'CSS3', 
            'HTML5', 
            'JavaScript', 
            'JSP / JSTL', 
            'jQuery', 
            'SQL / PostgreSQL'
        ]
    },
    {
        title: "Corporate Events Map",
        slug: "citi-corporate-events-map",
        excerpt: "Custom JavaScript Web Tool",
        image: "/img/portfolio/citi-events.webp",
        jobTitle: "Citi",
        technologies: [
            'CSS3', 
            'D3.js', 
            'JavaScript', 
            'jQuery', 
            'SVG'
        ]
    },
    {
        title: "Client Advisory Board",
        slug: "citi-client-advisory-board",
        excerpt: "Responsive Event Website",
        image: "/img/portfolio/citi-client-advisory-board.webp",
        jobTitle: "Citi",
        technologies: [
            'Bootstrap', 
            'CSS3', 
            'HTML5', 
            'JavaScript', 
            'jQuery'
        ]
    },
    {
        title: "Responsive HTML Email Templates",
        slug: "citi-responsive-html-emails",
        excerpt: "Responsive Cross-platform Emails",
        image: "/img/portfolio/citi-emails.webp",
        jobTitle: "Citi",
        technologies: [
            'CSS3'
        ] // "HTML Emails" and "Litmus" are not in your TechnologyTitle type
    },
    {
        title: "Mattel Customer Service",
        slug: "mattel-customer-service",
        excerpt: "Frontend E-commerce Development",
        image: "/img/portfolio/mattel.webp",
        jobTitle: "AURORA Consulting Group",
        technologies: [
            'CSS3', 
            'HTML5', 
            'jQuery'
        ]
    },
    {
        title: "Transaction Highlights Map",
        slug: "citi-transaction-highlights-map",
        excerpt: "Custom JavaScript Web Tool",
        image: "/img/portfolio/citi-transaction-highlights.webp",
        jobTitle: "Citi",
        technologies: [
            'CSS3', 
            'Google Maps API', 
            'HTML5', 
            'JavaScript', 
            'jQuery'
        ]
    },
]
