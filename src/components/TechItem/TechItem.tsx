// src/components/TechItem/TechItem.tsx

import clsx from 'clsx'
import styles from './TechItem.module.scss'

interface TechItemProps {
    icon: string
    title: string
}

export default function TechItem({ icon, title }: TechItemProps) {
    return (
        <div className={styles.techWrapper}>
            <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 86.604 99.999">
                <polygon points="0,25 43.302,0 86.604,25 86.604,75 43.302,99.999 0,75 "></polygon>
            </svg>
            <span className={clsx(styles.techIcon, icon)}></span>
            <span className={styles.techTitle}>{title}</span>
        </div>
    )
}
