// src/data/portfolio.ts

import { JobTitle } from './experience'
import { TechnologyTitle } from './technologies';

export interface Project {
    title: string
    excerpt: string
    image: string
    url: string
    jobTitle: JobTitle
    technologies: TechnologyTitle[]
}

export const portfolio: Project[] = [
    {
        title: "Ascendant",
        excerpt: "Custom WordPress Theme",
        image: "/img/portfolio/ascendant.webp",
        url: "/portfolio/ascendant/",
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
        excerpt: "Custom WordPress Theme",
        image: "/img/portfolio/next-point.webp",
        url: "/portfolio/nextpoint-llc/",
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
        excerpt: "E-Commerce WordPress Site",
        image: "/img/portfolio/aspen-surgical.webp",
        url: "/portfolio/aspen-surgical/",
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
        excerpt: "Custom WordPress Theme",
        image: "/img/portfolio/segar-law.webp",
        url: "/portfolio/segar-law/",
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
        excerpt: "Custom WordPress Theme",
        image: "/img/portfolio/roch-nat-prep.webp",
        url: "/portfolio/rochester-nativity-preparatory-academy-2/",
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
        excerpt: "WordPress Brochure Site",
        image: "/img/portfolio/rochester-colonial-jingle.webp",
        url: "/portfolio/rochester-colonial-jingle/",
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
        excerpt: "Custom Frontend",
        image: "/img/portfolio/floral-systems.webp",
        url: "/portfolio/floral-systems/",
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
        excerpt: "Frontend Development Consult",
        image: "/img/portfolio/the-connector.webp",
        url: "/portfolio/the-connector/",
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
        excerpt: "Custom WordPress Theme",
        image: "/img/portfolio/alchemy.webp",
        url: "/portfolio/alchemy-wine-beer/",
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
        excerpt: "Progressive Web App",
        image: "/img/portfolio/findr.webp",
        url: "/portfolio/findr/",
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
        excerpt: "Web Challenge",
        image: "/img/portfolio/knight-chase.webp",
        url: "/portfolio/knight-chase/",
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
        excerpt: "Responsive Single-page Website",
        image: "/img/portfolio/darling-harbor.webp",
        url: "/portfolio/darling-harbor-band/",
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
        excerpt: "Dynamic Responsive Website",
        image: "/img/portfolio/citi-commercial-bank.webp",
        url: "/portfolio/citi-commercial-bank/",
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
        excerpt: "Custom WordPress Theme",
        image: "/img/portfolio/le-bistro.webp",
        url: "/portfolio/le-bistro/",
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
        excerpt: "Web Application",
        image: "/img/portfolio/project-management-portal.webp",
        url: "/portfolio/project-management-portal/",
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
        excerpt: "Custom JavaScript Web Tool",
        image: "/img/portfolio/citi-events.webp",
        url: "/portfolio/citi-corporate-events-map/",
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
        excerpt: "Responsive Event Website",
        image: "/img/portfolio/citi-client-advisory-board.webp",
        url: "/portfolio/client-advisory-board/",
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
        excerpt: "Responsive Cross-platform Emails",
        image: "/img/portfolio/citi-emails.webp",
        url: "/portfolio/responsive-html-emails/",
        jobTitle: "Citi",
        technologies: [
            'CSS3'
        ] // "HTML Emails" and "Litmus" are not in your TechnologyTitle type
    },
    {
        title: "Mattel Customer Service",
        excerpt: "Frontend E-commerce Development",
        image: "/img/portfolio/mattel.webp",
        url: "/portfolio/mattel-customer-service/",
        jobTitle: "AURORA Consulting Group",
        technologies: [
            'CSS3', 
            'HTML5', 
            'jQuery'
        ]
    },
    {
        title: "Transaction Highlights Map",
        excerpt: "Custom JavaScript Web Tool",
        image: "/img/portfolio/citi-transaction-highlights.webp",
        url: "/portfolio/transaction-highlights-map/",
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
