// src/components/ServiceCard/ServiceCard.tsx

import styles from './ExperienceCard.module.scss'
import clsx from 'clsx'

interface ExperienceCardProps {
    logo: string
    alt: string
    title: string
    employment: string
    dates: string
    description: string
}

export default function ExperienceCard({
    logo,
    alt,
    title,
    employment,
    dates,
    description,
}: ExperienceCardProps) {
    return (
        <article className={clsx(styles.experienceCard, 'animate')}>
            <div className={styles.cardHeader}>
                <img src={logo} alt={alt} />
            </div>
            <div className={styles.cardContent}>
                <h3>{title}</h3>
                <p className={styles.employment}>{employment}</p>
                <p className={styles.dates}>{dates}</p>
                <hr />
                <p>{description}</p>
            </div>
        </article>
    )
}
