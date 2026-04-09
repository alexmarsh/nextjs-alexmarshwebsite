// src/components/ServiceCard/ServiceCard.tsx

import Link from 'next/link'
import clsx from 'clsx';
import styles from './ServiceCard.module.scss';
import type { Service } from '@/data/services'

interface ServiceCardProps {
    service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
    return (
        <div className={clsx(styles.serviceCard, "animate")}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link className='' href={`/services/${service.slug}/`} prefetch={false}>Learn More ›</Link>
        </div>
    )
}
