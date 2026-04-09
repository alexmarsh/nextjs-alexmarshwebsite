// src/app/services/[slug]/ServiceContent.tsx

'use client'

import clsx from "clsx"
import Link from 'next/link'
import Image from 'next/image'
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll'
import useSmoothScroll from '@/hooks/useSmoothScroll'
import styles from "./service.module.scss"
import { Service } from '@/data/services'
import { portfolio, Project } from '@/data/portfolio'
import ProjectCard from '@/components/cards/ProjectCard/ProjectCard'

export default function ServiceContent({ service }: { service: Service }) {
    useAnimateOnScroll()
    useSmoothScroll()

    return (
        <main id="site-main" className={clsx("site-main", styles.siteMain)}>
            <header className={clsx(styles.pageHeader, "page-header animate")}>
                <div className="container animate">
                    <h4>Services</h4>
                    <h1>{service.title}</h1>
                </div>
            </header>
            <section className={clsx(styles.sectionDescription, "section")}>
                <div className="container">
                    <h2>{service.description}</h2>
                </div>
            </section>

            {service.sections.map((section, i) => {
                switch (section.type) {
                    case 'rich':
                        return (
                            <section key={i} className={clsx('section', section.className && styles[section.className])}>
                                <div className="container">
                                    <div className={styles.inner}>
                                        {section.image &&
                                            <Image src={section.image.src} alt={section.image.alt} width={1260} height={500} />
                                        }
                                        <div className={styles.textWrapper} dangerouslySetInnerHTML={{ __html: section.content || '' }} />
                                    </div>
                                </div>
                            </section>
                        )
                    case '2col':
                        return (
                            <section key={i} className={clsx('section', styles.twoCol, section.className && styles[section.className])}>
                                <div className="container">
                                    {section.title && <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: section.title}} />}
                                    <div className={styles.columns}>
                                        <div className={styles.col1} dangerouslySetInnerHTML={{ __html: section.col1Content || '' }} />
                                        <div className={styles.col2} dangerouslySetInnerHTML={{ __html: section.col2Content || '' }} />
                                    </div>
                                </div>
                            </section>
                        )
                    case 'examples':
                        const exampleProjects: Project[] = section.exampleSlugs
                            ? portfolio.filter(p => section.exampleSlugs!.includes(p.slug))
                            : []

                        return (
                            <section key={i} className={clsx('section', section.className && styles[section.className])}>
                                <div className="container">
                                    {section.title && <h2 dangerouslySetInnerHTML={{ __html: section.title || '' }} />}
                                    {section.subtitle && <h3 dangerouslySetInnerHTML={{ __html: section.subtitle}} />}
                                    <div className={styles.examples}>
                                        {exampleProjects.map(project => (
                                            <ProjectCard
                                                key={project.slug}
                                                title={project.title}
                                                slug={project.slug}
                                                projectType={project.projectType}
                                                image={project.image}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )
                    default:
                        return null
                }
            })}

            <section className={clsx(styles.sectionCta, 'section')}>
                <div className="container">
                    <div className={styles.col1}>
                        <h2>Let's Build a Website That Works for You</h2>
                        <p>Schedule a quick, flexible meeting to discuss your goals and discover how a custom website can grow your business. No hassle, no pressure — just a clear path to results.</p>
                    </div>
                    <div className={styles.col2}>
                        <Link href="/contact" className="button button--inverted" prefetch={false}>Book Your Free Consultation</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
