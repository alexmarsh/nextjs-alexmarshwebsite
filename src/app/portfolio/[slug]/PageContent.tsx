// src/app/portfolio/[slug]/PageContent.tsx

'use client'

import Link from 'next/link'
import Image from 'next/image'
import useSmoothScroll from '@/hooks/useSmoothScroll'
import { portfolio, Project } from '@/data/portfolio'
import styles from './PortfolioProject.module.scss'

interface Props {
    project: Project
}

export default function PageContentClient({ project }: Props) {
    useSmoothScroll()
    
    const index = portfolio.findIndex(p => p.slug === project.slug)
    const total = portfolio.length

    const prevIndex = index > 0 ? index - 1 : -1
    const nextIndex = index < total - 1 ? index + 1 : -1

    const prevProject = prevIndex !== -1 ? portfolio[prevIndex] : undefined
    const nextProject = nextIndex !== -1 ? portfolio[nextIndex] : undefined

    return (
        <main id="site-main" className="site-main">
            <article className={styles.portfolioProject}>
                <div className="container">
                    <Image
                        width={1200}
                        height={750}
                        src={project.image}
                        className={styles.projectImage}
                        alt={project.title}
                        loading="eager"
                    />

                    <h1>{project.title}</h1>
                    <hr />

                    <div
                        className={styles.projectDescription}
                        dangerouslySetInnerHTML={{ __html: project.description }}
                    />

                    <h3>Technologies</h3>
                    <ul className={styles.pillList}>
                        {project.technologies.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>

                    <hr />

                    <nav role="navigation" aria-label="View More Projects">
                        <h4>View More Projects</h4>
                        <div className={styles.navLinks}>
                            {prevProject && (
                                <div className={styles.navPrevious}>
                                    <Link
                                        className="button"
                                        href={`/portfolio/${prevProject.slug}`}
                                        rel="prev"
                                        prefetch={false}
                                    >
                                        &laquo; {prevProject.title}
                                    </Link>
                                </div>
                            )}

                            {nextProject && (
                                <div className={styles.navNext}>
                                    <Link
                                        className="button"
                                        href={`/portfolio/${nextProject.slug}`}
                                        rel="next"
                                        prefetch={false}
                                    >
                                        {nextProject.title} &raquo;
                                    </Link>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
            </article>
        </main>
    )
}
