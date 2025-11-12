// src/components/ServiceCard/ServiceCard.tsx

import clsx from 'clsx';
import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
    title: string
    description: string
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
    return (
        <div className={clsx(styles.serviceCard, "animate")}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
