// src/data/technologies.ts

import { 
    FaBootstrap, 
    FaCss3, 
    FaGit, 
    FaGoogle,
    FaHtml5,
    FaJava,
    FaJs, 
    FaMobileAlt,
    FaMousePointer,
    FaPhp, 
    FaWordpress,
} 
from 'react-icons/fa';

import { 
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiGoogleanalytics,
    SiPostgresql, 
    SiPwa,
    SiSvg
} 
from 'react-icons/si';

import { 
    RiNextjsLine 
} 
from "react-icons/ri";

export type TechnologyTitle = (typeof technologies)[number]['title'];

export const technologies = [
    {
        title: 'Adobe Illustrator',
        icon: SiAdobeillustrator
    },
    {
        title: 'Adobe Photoshop',
        icon: SiAdobephotoshop
    },
    {
        title: 'Bootstrap',
        icon: FaBootstrap
    },
    {
        title: 'CSS3',
        icon: FaCss3
    },
    {
        title: 'Git',
        icon: FaGit
    },
    {
        title: 'Google Analytics',
        icon: SiGoogleanalytics
    },
    {
        title: 'Google APIs',
        icon: FaGoogle
    },
    {
        title: 'HTML(5)',
        icon: FaHtml5
    },
    {
        title: 'JavaScript',
        icon: FaJs
    },
    {
        title: 'JSP / JSTL',
        icon: FaJava
    },
    {
        title: 'NextJS',
        icon: RiNextjsLine
    },
    {
        title: 'PHP',
        icon: FaPhp
    },
    {
        title: 'Progressive Web Apps',
        icon: SiPwa
    },
    {
        title: 'Responsive Design',
        icon: FaMobileAlt
    },
    {
        title: 'SQL / PostgreSQL',
        icon: SiPostgresql
    },
    {
        title: 'SVG',
        icon: SiSvg
    },
    {
        title: 'UI/UX',
        icon: FaMousePointer
    },
    {
        title: 'WordPress',
        icon: FaWordpress
    }
] as const;
