// src/app/portfolio/[slug]/page.tsx
// path: src/app/portfolio/[slug]/page.tsx

import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { portfolio, Project } from '@/data/portfolio'
import styles from './PortfolioProject.module.scss'

interface PortfolioPageProps {
    params: Promise<{ slug: string }>
}

export default async function PortfolioProjectPage({ params }: PortfolioPageProps) {
    const { slug } = await params
    const index = portfolio.findIndex(p => p.slug === slug)

    if (index === -1) return notFound()

    const project: Project = portfolio[index]

    // Toggle this to true if you want nav to loop
    const LOOP_NAV = false

    const total = portfolio.length

    const prevIndex = LOOP_NAV
        ? (index - 1 + total) % total
        : index > 0
            ? index - 1
            : -1

    const nextIndex = LOOP_NAV
        ? (index + 1) % total
        : index < total - 1
            ? index + 1
            : -1

    const prevProject = prevIndex !== -1 ? portfolio[prevIndex] : undefined
    const nextProject = nextIndex !== -1 ? portfolio[nextIndex] : undefined

    return (
        <main className="site-main">
            <article className={styles.portfolioProject}>
                <div className="container">
                    <Image
                        width={1200}
                        height={750}
                        src={project.image}
                        className={styles.projectImage}
                        alt={project.title}
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
                                    <Link className="button" href={`/portfolio/${prevProject.slug}`} rel="prev">&laquo; {prevProject.title}</Link>
                                </div>
                            )}

                            {nextProject && (
                                <div className={styles.navNext}>
                                    <Link className="button" href={`/portfolio/${nextProject.slug}`} rel="next">{nextProject.title} &raquo;</Link>
                                </div>
                            )}

                        </div>
                    </nav>
                </div>
            </article>
        </main>
    )
}
