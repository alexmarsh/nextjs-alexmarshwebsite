// src/components/ServiceCard/ServiceCard.tsx

import styles from './ProjectCard.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

interface ProjectCardProps {
    title: string
    excerpt: string
    image: string
    url: string
    loading?: 'lazy' | 'eager'
}

export default function ProjectCard({
    title,
    excerpt,
    image,
    url,
    loading = 'lazy',
}: ProjectCardProps) {
    return (
        <a key={url} href={url} className={clsx(styles.project, 'animate')}>
            <Image 
                src={image} 
                alt={`${title} Project`} 
                className={styles.projectImage} 
                width={400} 
                height={250} 
                loading={loading}
            />
            <div className={styles.projectDesc}>
                <h2 className={styles.projectTitle}>{title}</h2>
                <p className={styles.projectExcerpt}>{excerpt}</p>
            </div>
        </a>
    )
}
