// src/data/technologies.ts

import { 
    FaBootstrap, 
    FaCss3, 
    FaGit, 
    FaHtml5, 
    FaInstagram, 
    FaJava,
    FaJs, 
    FaMobileAlt,
    FaMousePointer,
    FaPhp, 
    FaTwitter,
    FaWordpress,
} 
from 'react-icons/fa';

import { 
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiD3Dotjs, 
    SiGoogleanalytics,
    SiGooglecalendar,
    SiGooglemaps,
    SiJquery, 
    SiPostgresql, 
    SiPwa, 
    SiSoundcloud,
    SiSvg
} 
from 'react-icons/si';

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
        title: 'D3.js',
        icon: SiD3Dotjs
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
        title: 'Google Calendar API',
        icon: SiGooglecalendar
    },
    {
        title: 'Google Maps API',
        icon: SiGooglemaps
    },
    {
        title: 'HTML5',
        icon: FaHtml5
    },
    {
        title: 'Instagram API',
        icon: FaInstagram
    },
    {
        title: 'JavaScript',
        icon: FaJs
    },
    {
        title: 'jQuery',
        icon: SiJquery
    },
    {
        title: 'JSP / JSTL',
        icon: FaJava
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
        title: 'SoundCloud API',
        icon: SiSoundcloud
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
        title: 'Twitter API',
        icon: FaTwitter
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
