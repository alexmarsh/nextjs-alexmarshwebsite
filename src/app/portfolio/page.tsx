// src/app/portfolio/page.tsx

'use client'

import { useState, useMemo } from "react"
import clsx from "clsx"
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll'
import styles from "./portfolio.module.scss"
import { portfolio } from '@/data/portfolio'
import { technologies, TechnologyTitle } from '@/data/technologies'
import { experience, JobTitle } from '@/data/experience'
import ProjectCard from '@/components/cards/ProjectCard/ProjectCard'

export default function Portfolio() {

    const [selectedTech, setSelectedTech] = useState<TechnologyTitle | ''>('')
    const [selectedJob, setSelectedJob] = useState<JobTitle | ''>('')

    const filteredPortfolio = useMemo(() => {
        return portfolio.filter(project => {
            const matchesTech = selectedTech ? project.technologies.includes(selectedTech) : true
            const matchesJob = selectedJob ? project.jobTitle === selectedJob : true
            return matchesTech && matchesJob
        })
    }, [selectedTech, selectedJob])

    const handleReset = (e: React.FormEvent) => {
        e.preventDefault()
        setSelectedTech('')
        setSelectedJob('')
    }
    
    useAnimateOnScroll([filteredPortfolio.length])

    return (
        <main className="site-main">
            <header className={clsx(styles.pageHeader, "page-header")}>
                <div className="container">
                    <h1 className="animate">Portfolio</h1>
                </div>
            </header>
            <section className={clsx(styles.sectionPortfolio, "section")}>
                <div className="container">
                    <form className={clsx(styles.portfolioFilters, "form")}>
                        <span className={styles.legend}>Filter:</span>
                        <label>
                            <select
                                name="technology"
                                aria-label="Filter Technology"
                                value={selectedTech}
                                onChange={(e) => setSelectedTech(e.target.value as TechnologyTitle | '')}
                            >
                                <option value="">Any technology</option>
                                {technologies.map((tech, i) => (
                                    <option key={i} value={tech.title}>
                                        {tech.title}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label>
                            <select
                                name="job"
                                aria-label="Filter Job"
                                value={selectedJob}
                                onChange={(e) => setSelectedJob(e.target.value as JobTitle | '')}
                            >
                                <option value="">Any job</option>
                                {experience.map((job, index) => (
                                    <option key={index} value={job.title}>
                                        {job.title}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <button className="button" type="button" onClick={handleReset}>Reset</button>
                    </form>
                    <div className={styles.portfolioWrapper}>
                        {filteredPortfolio.map((project, i) => (
                            <ProjectCard key={i} {...project} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
