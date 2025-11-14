// src/app/portfolio/[slug]/page.tsx

import { notFound } from 'next/navigation'
import Image from 'next/image'
import { portfolio, Project } from '@/data/portfolio'
import styles from './PortfolioProject.module.scss'

interface PortfolioPageProps {
    params: Promise<{ slug: string }>
}

export default async function PortfolioProjectPage({ params }: PortfolioPageProps) {
    const { slug } = await params
    const project: Project | undefined = portfolio.find(p => p.slug === slug)

    if (!project) return notFound()

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
                    {/*
                    <nav className="navigation" role="navigation" aria-label="View More Projects">
                        <h4>View More Projects</h4>
                        <div className="nav-links">
                            <div className="nav-previous">
                                <a href="https://alexmarshwebsite.com/portfolio/transaction-highlights-map/" rel="prev"><span className="button">Transaction Highlights Map »</span></a>
                            </div>
                            <div className="nav-next">
                                <a href="https://alexmarshwebsite.com/portfolio/responsive-html-emails-2/" rel="next"><span className="button">« Responsive HTML Email Templates</span></a>
                            </div>
                        </div>
                    </nav>
                    */}
                </div>
            </article>
        </main>
    )
}
