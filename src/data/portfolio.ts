// src/data/portfolio.ts

import { JobTitle } from './experience'
import { TechnologyTitle } from './technologies';

export interface Project {
    title: string
    slug: string
    projectType: string
    image: string
    description: string
    jobTitle: JobTitle
    technologies: TechnologyTitle[]
}

export const portfolio: Project[] = [
    {
        title: "Ascendant",
        slug: "ascendant",
        projectType: "Custom WordPress Theme",
        image: "/img/portfolio/ascendant.webp",
        description: 
            `<p>Ascendant specializes in talent solutions with a personalized, high-touch approach to connecting individuals with opportunities that help them achieve their full potential. Their mission is to empower candidates through trust, empathy, and guidance, ensuring they find roles that align with their career goals.</p>
            <p>As lead developer at [Re]noun Creative, I was responsible for coding the complete redesign of Ascendant's website using WordPress. I worked closely with the design team to bring their vision to life, ensuring the site was responsive, user-friendly, and optimized for performance, while supporting the company's mission to foster meaningful connections and empower candidates.</p>`,
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
        description: 
            `<p>NextPoint LLC is a specialized advisory firm based in Upstate New York, focusing on mergers and acquisitions (M&amp;A) in the metal manufacturing industry. They provide services for buying, selling, and divesting businesses, with a particular emphasis on metal fabrication, CNC machining, stamping, and laser cutting.</p>
            <p>While working at [Re]noun Creative, I collaborated with the team to revamp NextPoint LLC's website, with a focus on improving user experience and optimizing it for lead generation. As the lead developer, I was responsible for translating design concepts into a responsive, high-performance site. This involved implementing a clean and intuitive interface that showcased their specialized services, making it easy for potential clients to navigate. Additionally, I worked on enhancing the backend to streamline content management, ensuring the website was scalable and positioned for future growth.</p>`,
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
        description: 
            `<p>Aspen Surgical is a leading provider of surgical and infection control products, enhancing safety and efficiency in healthcare settings globally. Their offerings include surgical instruments, wound care products, and infection prevention solutions.</p>
            <p>As lead web developer at Flynn, I managed the complete redevelopment of Aspen Surgical's website. This involved full-stack development, including front-end and back-end coding, and implementing a responsive design for optimal cross-device compatibility. I integrated a custom WooCommerce solution tailored to their specific product offerings, optimized performance for faster load times, and ensured a seamless, user-friendly experience. Throughout the project, I worked closely with the design and project teams to deliver a scalable, mobile-responsive e-commerce solution that supports ongoing business growth.</p>`,
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
        description: 
            `<p>Segar &amp; Sciortino is a law firm located in Rochester, NY dedicated to providing the highest level of legal service to the injured and disabled in Western New York. For 30 years, Segar &amp; Sciortino has represented over 25,000 injured workers in Rochester and Western New York. Segar &amp; Sciortino is a client at Flynn - a full service agency.</p>
            <p>While I was working at Flynn, Segar &amp; Sciortino came to us looking to take their existing site and update it with a new visual polish, as well as drive their main goal of acquiring more client leads. My role as developer on the project was to work closely with designers, and translate their vision into a beautiful, functional site that looks great on all devices. This project also required a significant cleanup and reorganization of existing code to streamline development in the future, as well as provide the client with a WordPress administrative side that was much easier to use.</p>`,
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
        description: 
            `<p>As lead developer, I worked with the team at Flynn to build a modern, responsive WordPress website for Rochester Nativity Preparatory Academy. The goal was to create an accessible platform that effectively communicates the school's mission and supports engagement from students, families, and donors. I implemented a clean layout, optimized performance across devices, and ensured content was easy to manage. The final site reflects the Academy's values while providing a solid foundation for ongoing outreach and growth.</p>`,
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
        description: 
            `<p>Founded in 1947, Rochester Colonial is a third-generation family owned business with over 100 employees dedicated to serving the window and door needs of Greater Rochester and beyond. In 2022, they celebrated 75 years of business by inviting community members to record their own versions of the advertising theme song in a contest.</p>
            <p>As a long time client at Flynn, Rochester Colonial looked to us to fulfill their need for a simple and quick website to both advertise the contest then quickly switch to announcing contest winners. As the sole developer for the project it was my responsibility to translate the graphic layout from the designers into a working site, as well as oversee the plan to quick-launch the secondary phase. </p>`,
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
        description: 
            `<p>Floral Systems is a provider of independent business solutions for florists including websites, ecommerce, email marketing and POS systems. They have over 25 years of experience with over 1000 businesses served.</p>
            <p>As part of the Floral Systems team, I developed and implemented frontend code for a number of projects. One such project was redesigning the existing Floral Systems website. To create an eye-popping yet clean and modern feel, I went with a grey color palette alongside a bright pink primary color to keep with the floral theme. I also designed a new logo and custom icons to bring the site to life with it's own unique feel.</p>`,
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
        description: 
            `<p>RT Specialty is a leading wholesale distributor of specialty insurance products and services. The Connector is RT Specialty's custom digital solution for commercial E&amp;S insurance issuance and renewal - empowering RT Specialty contracted retail agents to process their small commercial E&amp;S risks more efficiently, thereby driving down their operating costs, improving their margins, and providing a more competitive outcome for their clients.</p>
            <p>I was brought in as a contract developer to aid their existing team in supporting the customer facing side of The Connector. The goal of my position was to enhance their website/portal to be competitive in the market by providing creative expertise in design and frontend engineering. My role consisted of working remotely with an agile team consisting of an IT manager, 6 applications developers, and 2 QA analysts following two-week sprints in Scrum, where I would provide the HTML, CSS, JS, iconography, and designs to merge with existing code.</p>`,
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
        description:
            `<p>Alchemy Wine &amp; Beer, located in Hamburg, NY, is a wine bar and bottle shop inspired by years of world travel by the co-owners - two certified Sommelier Hamburg locals. Alchemy offers the best in wine, beer, and food from local to international in an unpretentious and comfortable environment.</p>
            <p>As part of jumpstarting their digital presence as a new business, I created an engaging mobile-friendly website that allows patrons to easily navigate everything Alchemy has to offer; from a dynamic menu that showcases their wonderful dishes and bar menu, to a hosted events page that automatically syncs with their Google Calendar.</p>`,
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
        description: 
            `<p>Hickory Grove Apartments, located in Horseheads, NY, offers the finest in apartment community, maintenance-free living. Unfortunately, due to the scale and particular construction of the complex, maintenance workers were having a hard time navigating the area.</p>
            <p>I was contracted independently by a third party to create a tool that would aid maintenance in locating each apartment in the complex. Ultimately, I decided on a Progressive Web App that offered the accessibility of the web coupled with the experience of a native mobile app (such as using it offline). Intuitive pinch-to-zoom behavior and easy-to-use search forms provide a simplistic user interface for even the least tech-savvy consumer.</p>`,
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
        description: 
            `<p>Occasionally, as a web developer you undertake certain challenges to push your coding knowledge. This was one such case.</p>
            <p>The challenge was relatively simple: Write a program in any coding language that can input chess positions for a knight and pawns, and output the moves that the knight would need to make to take each pawn. I of course chose a web-based method (seeing as I'm a web developer), which enabled me to provide not only a comprehensive solution but also a visual component.</p>`,
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
        description: 
            `<p>Darling Harbor is a Buffalo-based indie alternative band, meeting their audience with lyrical sincerity and honesty. Their music is as naked and genuine as the stories the lyrics are pulled from.</p>
            <p>As their personal web developer, I wanted to provide them with a website that represented them in their accessibility and progressive millennial sensibility. Utilizing a single-page responsive website design, I was able to provide the band with a quick, intuitive, social media focused interface featuring a custom Instagram and Twitter feed, on-page SoundCloud music player, and plug-and-play Youtube videos.</p>`,
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
        description: 
            `<p>Citi Commercial Bank offers comprehensive solutions for liquidity and cash management, lending, foreign exchange, trade and other areas of commercial banking to facilitate business growth.</p>
            <p>In order to represent “CCB” on the global scale, I lead the initiative to develop a solution that would provide multilingual content for consumers (and remember your choice for future visits). Developed and delivered in 6 different languages, the frontend utilizes a mobile-first responsive framework, modified with custom CSS for established branding. Custom forms throughout the site feature JavaScript validation with multilingual hints and error responses. Markup is search engine optimized and all pages are tracked using Google Analytics.</p>`,
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
        description: 
            `<p>Once upon a time, a client asked for a website and decided in the end not to purchase it (it happens). But not all was lost, as the end result was a custom, dynamic, PHP-based WordPress template.</p>
            <p>The “Le Bistro” design features the popular background image “parallax scrolling” effect throughout, mobile-device optimization, and a customized admin control panel.</p>`,
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
        description: 
            `<p>While working in the position of Lead Web Developer in Citi's Graphics Communications Department, I occasionally had some free time between work. Being the proactive person I am, I took it upon myself to improve our department's workflow with a custom web-based application.</p>
            <p>Utilizing a completely customized backend and database to dynamically manage content through form interaction, as well as track users sessions and store cookies, the Project Management Portal was a one-stop-shop for all our business needs.</p>
            <p>Naturally, given the internal business nature of the application, I can't divulge too much information other than some preliminary functionality. Some image info will be redacted to protect the business as well.</p>`,
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
        description: 
            `<p>Citi's Treasury and Trade Solutions (TTS) branch hosts a variety of events across the globe. In order for the interested consumer to acquire the appropriate information for their particular region, an optimal solution was needed.</p>
            <p>I developed the TTS Events Map as a SVG/JavaScript-based solution. Utilizing D3.js, the relatively simple Events Map tool was able to project any type of map one might need, while taking full advantage of common jQuery-based interactions and data populated via AJAX/JSON.</p>`,
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
        description: 
            `<p>The Citi Client Advisory Board (CAB) is a forum that brings clients together with Citi's innovation experts and business seniors to discuss industry developments and changing trends.</p>
            <p>The CAB website was developed with a “Mobile-first” strategy to meet client needs on the go. Features include a responsive image slideshow, a responsive interactive map, and toggleable side and top navigation, among others.</p>`,
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
        description: 
            `<p>Recognizing the shift toward mobile-first content consumption, I led the development of the business line's first custom, responsive, and fully branded HTML email templates. Using modern email templating tools and in-depth research, I built templates optimized for mobile devices without compromising compatibility or performance. To ensure a consistent experience across clients and devices, I leveraged Litmus for comprehensive testing and refinement. This project helped bring the department's email communications up to current standards in both design and deliverability.</p>`,
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
        description: 
            `<p>The Mattel &amp; Fisher-Price Customer Service site is a consumer resource for instruction manuals, product registration, replacement parts, service information, and more.</p>
            <p>As a frontend web developer, I worked with a diverse team to redesign and update the Mattel and Fisher-Price customer service U.S. landing page and sub-sites. Work often required slicing Photoshop compositions into clean &amp; usable web samples, hand-coding HTML and CSS in a ASP.NET environment, and working closely with a partnered backend developer to ensure proper execution of dynamic content.</p>`,
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
        description: 
            `<p>Citi Community Capital (CCC) provides a suite of financial products to help affordable housing developers construct, rehabilitate, refinance, and acquire affordable multifamily housing across the country. The Citi Community Capital Transaction Highlights map utility allows users to search and view details about each housing unit.</p>
            <p>Developed a custom map utility for showing and filtering hundreds of locations with corresponding data. Each location's information is stored in a JSON file which is parsed and organized using JavaScript, instantaneously. Information is then run through the Google Maps API to populate a map of locations with custom icons and information. Data can be sorted and filtered for any combination of inclusionary or exclusionary results.</p>`,
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
