// src/components/ServiceCard/ServiceCard.tsx

import styles from './ExperienceCard.module.scss'
import clsx from 'clsx'

interface ExperienceCardProps {
    logo: string
    title: string
    role: string
    employment_type: string
    start_date: string
    end_date: string
    description: string
}

export default function ExperienceCard({
    logo,
    title,
    role,
    employment_type,
    start_date,
    end_date,
    description,
}: ExperienceCardProps) {

    const formatDuration = (start: string, end: string) => {
        const startDate = new Date(start + ' 1')

        // If end is "Present"
        const endDate = end.toLowerCase() === 'present'
            ? new Date()
            : new Date(end + ' 1')

        // inclusive end month: add one month
        endDate.setMonth(endDate.getMonth() + 1)

        const diffMonths =
            (endDate.getFullYear() - startDate.getFullYear()) * 12 +
            (endDate.getMonth() - startDate.getMonth())

        const years = Math.floor(diffMonths / 12)
        const months = diffMonths % 12

        const yearStr = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : ''
        const monthStr = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : ''

        return [yearStr, monthStr].filter(Boolean).join(' ')
    }

    const duration = formatDuration(start_date, end_date)

    return (
        <article className={clsx(styles.experienceCard, 'animate')}>
            <div className={styles.cardHeader}>
                <img src={logo} alt={title} />
            </div>
            <div className={styles.cardContent}>
                <h3>{role}</h3>
                <p className={styles.employment}>{title} • {employment_type}</p>
                <p className={styles.dates}>{start_date} – {end_date} • {duration}</p>
                <hr />
                <p>{description}</p>
            </div>
        </article>
    )
}
