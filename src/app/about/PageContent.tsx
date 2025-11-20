// src/app/about/PageContent.tsx

'use client'

import Image from 'next/image'
import clsx from "clsx"
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll'
import useSmoothScroll from '@/hooks/useSmoothScroll'
import styles from "./about.module.scss"
import { experience } from '@/data/experience'
import ExperienceCard from '@/components/cards/ExperienceCard/ExperienceCard'

export default function PageContent() {
    useAnimateOnScroll()
    useSmoothScroll()

    return (
        <main id="site-main" className="site-main">
            <header className={clsx(styles.pageHeader, "page-header")}>
                <div className="container">
                    <h1 className="heading animate">About Me</h1>
                </div>
            </header>
            <section className={clsx(styles.sectionIntro, "section")}>
                <div className="container">
                    <figure className={clsx(styles.imgWrapper, "animate")}>
                        <Image src="/img/amarsh-portrait-transparent.webp" alt="Portrait of Alex Marsh" width={445} height={636} />
                    </figure>
                    <div className={clsx(styles.contentWrapper, "animate")}>
                        <div className="section-header">
                            <h2>Hello, I’m Alex Marsh</h2>
                            <h3>I’m a full-stack web developer based in Buffalo, NY</h3>
                        </div>
                        <p>For as long as I can remember, I’ve been creating, experimenting, and looking for challenges to solve. I am driven by an intense passion for creative pursuits, technology, art, and science.</p>
                        <p>My unrelenting thirst for knowledge eventually led me to pursue a career in web development, where the constant challenge of finding innovative and creative solutions—combined with creating visually appealing products—immediately interested me.</p>
                        <p>When I’m not working on challenging, detail-oriented projects, I’m learning how to solve the problems I haven’t encountered yet.</p>
                    </div>
                </div>
            </section>
            <section className={clsx(styles.sectionCta, "section")}>
                <div className="container">
                    <div className={clsx(styles.ctaWrapper, 'animate')}>
                        <h2>Looking for other ways to get in touch?</h2>
                        <div className={styles.buttons}>
                            <a className="button button--inverted" href="/files/alex_marsh_resume.pdf" target="_blank" rel="noreferrer noopener">Download Resume</a>
                            <a className="button button--inverted" href="https://www.linkedin.com/in/alex-marsh/" target="_blank" rel="noreferrer noopener">View LinkedIn</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className={clsx(styles.sectionExperience, "section")}>
                <div className="container">
                    <div className="section-header animate">
                        <h2>Experience</h2>
                        <h3>Some of my previous employers</h3>
                    </div>
                    <div className={styles.displayExperience}>
                        {experience.map((item, idx) => (
                            <ExperienceCard key={idx} {...item} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
