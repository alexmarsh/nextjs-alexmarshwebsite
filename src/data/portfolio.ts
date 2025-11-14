// src/data/portfolio.ts

import { JobTitle } from './experience'
import { TechnologyTitle } from './technologies';

export interface Project {
    title: string
    slug: string
    projectType: string
    image: string
    jobTitle: JobTitle
    technologies: TechnologyTitle[]
}

export const portfolio: Project[] = [
    {
        title: "Ascendant",
        slug: "ascendant",
        projectType: "Custom WordPress Theme",
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
        projectType: "Custom WordPress Theme",
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
        projectType: "E-Commerce WordPress Site",
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
        projectType: "Custom WordPress Theme",
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
        projectType: "Custom WordPress Theme",
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
        projectType: "WordPress Brochure Site",
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
        projectType: "Custom Frontend",
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
        projectType: "Frontend Development Consult",
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
        projectType: "Custom WordPress Theme",
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
        projectType: "Progressive Web App",
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
        projectType: "Web Challenge",
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
        projectType: "Responsive Single-page Website",
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
        projectType: "Dynamic Responsive Website",
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
        projectType: "Custom WordPress Theme",
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
        projectType: "Web Application",
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
        projectType: "Custom JavaScript Web Tool",
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
        projectType: "Responsive Event Website",
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
        projectType: "Responsive Cross-platform Emails",
        image: "/img/portfolio/citi-emails.webp",
        jobTitle: "Citi",
        technologies: [
            'CSS3'
        ] // "HTML Emails" and "Litmus" are not in your TechnologyTitle type
    },
    {
        title: "Mattel Customer Service",
        slug: "mattel-customer-service",
        projectType: "Frontend E-commerce Development",
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
        projectType: "Custom JavaScript Web Tool",
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
