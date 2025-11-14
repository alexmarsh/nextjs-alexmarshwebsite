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

    // Filtered projects based on current selections
    const filteredPortfolio = useMemo(() => {
        return portfolio.filter(project => {
            const matchesTech = selectedTech ? project.technologies.includes(selectedTech) : true
            const matchesJob = selectedJob ? project.jobTitle === selectedJob : true
            return matchesTech && matchesJob
        })
    }, [selectedTech, selectedJob])

    // Compute available technologies based on selected job
    const availableTechnologies = useMemo(() => {
        return technologies
            .map(t => t.title)
            .filter(title => !selectedJob || portfolio.some(p => p.jobTitle === selectedJob && p.technologies.includes(title)))
    }, [selectedJob])

    // Compute available job titles based on selected technology
    const availableJobs = useMemo(() => {
        return experience
            .map(j => j.title)
            .filter(title => !selectedTech || portfolio.some(p => p.jobTitle === title && p.technologies.includes(selectedTech)))
    }, [selectedTech])

    const handleReset = () => {
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
                        <label htmlFor="technology_filter">
                            <select
                                id="technology_filter"
                                name="technology"
                                aria-label="Filter Technology"
                                value={selectedTech}
                                onChange={(e) => setSelectedTech(e.target.value as TechnologyTitle | '')}
                            >
                                <option value="">Any technology</option>
                                {availableTechnologies.map((tech, i) => (
                                    <option key={i} value={tech}>
                                        {tech}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label htmlFor="job_filter">
                            <select
                                id="job_filter"
                                name="job"
                                aria-label="Filter Job"
                                value={selectedJob}
                                onChange={(e) => setSelectedJob(e.target.value as JobTitle | '')}
                            >
                                <option value="">Any job</option>
                                {availableJobs.map((job, i) => (
                                    <option key={i} value={job}>
                                        {job}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <button className="button" type="button" onClick={handleReset}>Reset</button>
                    </form>
                    <div className={styles.portfolioWrapper}>
                        {filteredPortfolio.map((project, i) => (
                            <ProjectCard 
                                key={i} 
                                {...project} 
                                loading={i < 3 ? 'eager' : 'lazy'}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
