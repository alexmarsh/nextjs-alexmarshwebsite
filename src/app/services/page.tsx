// src/app/services/page.tsx

'use client'

import Link from 'next/link'
import clsx from "clsx"
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll'
import styles from "./services.module.scss"
import Slider from "@/components/Slider/Slider"
import { services } from '@/data/services'
import ServiceCard from '@/components/cards/ServiceCard/ServiceCard'
import { technologies } from '@/data/technologies'
import TechItem from '@/components/TechItem/TechItem'

export default function Home() {
    useAnimateOnScroll()

    return (
        <main className="site-main">
            <header className={clsx(styles.pageHeader, "page-header animate")}>
                <div className="container">
                    <h1 className="heading animate">Services</h1>
                </div>
            </header>
            <section className={clsx(styles.sectionIntro, "section")}>
                <div className="container">
                    <div className={clsx(styles.carouselWrapper, "animate")}>
                        <Slider interval={5000}>
                            <img fetchPriority="high" decoding="async" src="/img/portfolio/Ascendant.webp" alt="" />
                            <img decoding="async" src="/img/portfolio/NextPoint.webp" alt="" />
                            <img decoding="async" src="/img/portfolio/aspen-surgical.webp" alt="" />
                        </Slider>
                    </div>
                    <div className={clsx(styles.contentWrapper, "animate")}>
                        <div className={clsx(styles.sectionHeader, "section-header")}>
                            <h2>The Latest in Web Solutions</h2>
                            <h3>Delivering engaging web products across all industries</h3>
                        </div>
                        <p>If you are looking for a reliable programmer to build your websites and digital applications, look no further. From small, custom website designs to large-scale websites built on existing platforms, I work with clients in many different industries to deliver high-quality web products so that you can focus on what really matters: your business and its success.</p>
                    </div>
                </div>
            </section>
            <section className={clsx(styles.sectionServices, "section")}>
                <div className="container">
                    <div className={styles.displayServices}>
                        {services.map((service, i) => (
                            <div key={i} className={clsx(styles.serviceCardWrapper, 'animate')}>
                                <ServiceCard {...service} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className={clsx(styles.sectionCta, "section")}>
                <div className={clsx(styles.ctaWrapper, "container animate")}>
                    <h2 className="heading" /*style="margin-bottom:0"*/>Interested?</h2>
                    <Link className="button button--inverted" href="https://alexmarshwebsite.com/contact/">Contact Me</Link>
                </div>
            </section>
            <section className={clsx(styles.sectionProcess, "section")}>
                <div className="container">
                    <div className="section-header animate">
                        <h2>The Development Process</h2>
                        <h3>My clear, effective, and proven process to enable timely delivery of your web solution</h3>
                    </div>
                    <div className={styles.process}>
                        <div className={clsx(styles.step, "animate")}>
                            <h3>Discovery</h3>
                            <div className={clsx(styles.card, "narrow-content")}>
                                <p>To get things started, we work together to translate your business requirements into technical documents, plans, and schedules for the delivery of your web solution. This stage lays the foundation for the entire project.</p>
                            </div>
                        </div>
                        <div className={clsx(styles.step, "animate")}>
                            <h3>Design</h3>
                            <div className={clsx(styles.card, "narrow-content")}>
                                <p>This stage is where ideas start to become reality by translating your vision into a uniquely tailored design, specific to your needs. You will get several opportunities to review the design results along the way before moving forward.</p>
                            </div>
                        </div>
                        <div className={clsx(styles.step, "animate")}>
                            <h3>Development</h3>
                            <div className={clsx(styles.card, "narrow-content")}>
                                <p>After your design is approved, expert software engineering turns your design into a functional site. Extensive testing, optimization, and more will take place during this stage to ensure your site is operating at 100% before deploying your web solution.</p>
                            </div>
                        </div>
                        <div className={clsx(styles.step, "animate")}>
                            <h3>Delivery</h3>
                            <div className={clsx(styles.card, "narrow-content")}>
                                <p>After your web solution is released, you'll get all the basic training to be able to maintain your website's content. Continuous server monitoring, bug fixes, and general customer support can be provided for as long as you request.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={clsx(styles.sectionTechnologies, "section")}>
                <div className="container">
                    <div className={clsx(styles.contentWrapper, "animate")}>
                        <div className="section-header">
                            <h2>Technologies</h2>
                            <h3>My tools of the trade</h3>
                        </div>
                        <p>Modern websites are built using a myriad of technologies. While there is no single “right technology” for building websites, choosing the right tool for job will yield greater success in what your trying to achieve. (You wouldn't use a wrench to hammer a nail, right?)</p>
                        <p>Fully understanding the right choice of technology and it's long-term implications or limitations on your website can be a complicated process. I make it my job as a developer to help you navigate the sea of modern technologies used in web development and recommend the best choice for your needs.</p>
                    </div>
                    <ul className={styles.techList}>
                        {technologies.map((tech, i) => (
                            <li key={i} className="animate">
                                <TechItem {...tech} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}
