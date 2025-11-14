// src/components/ServiceCard/ServiceCard.tsx

import Link from 'next/link';
import styles from './ProjectCard.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

interface ProjectCardProps {
    title: string
    slug: string
    projectType: string
    image: string
    loading?: 'lazy' | 'eager'
}

export default function ProjectCard({
    title,
    slug,
    projectType,
    image,
    loading = 'lazy',
}: ProjectCardProps) {
    return (
        <div className={styles.projectWrapper}>
            <Link href={`/portfolio/${slug}`} className={clsx(styles.project, 'animate')}>
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
                    <p className={styles.projectType}>{projectType}</p>
                </div>
            </Link>
        </div>
    )
}
