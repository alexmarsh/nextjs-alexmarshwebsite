// src/components/Header/index.tsx
'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import styles from './Header.module.scss'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    return (
        <header className={styles.siteHeader}>
            <div className={clsx('container', styles.container)}>
                <div className={styles.siteBranding}>
                    <Link href="/" aria-label="Alex Marsh" className={styles.logoLink} prefetch={false}>
                        <span className={clsx('icon-logo', styles.iconLogo)} aria-hidden="true" />
                        Alex Marsh
                    </Link>
                </div>

                <nav
                    id="site-navigation"
                    aria-label="Main Navigation"
                    className={clsx(styles.siteNavigation, menuOpen && styles.active)}
                >
                    <ul className={styles.menu}>
                        {[
                            { href: '/services/', label: 'Services' },
                            { href: '/portfolio/', label: 'Portfolio' },
                            { href: '/about/', label: 'About' },
                            { href: '/contact/', label: 'Contact' },
                        ].map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href} className={clsx(pathname === href && styles.active)} prefetch={false}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    type="button"
                    className={clsx(styles.menuToggle, menuOpen && styles.active)}
                    aria-controls="site-navigation"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="sr-only">Site Navigation</span>
                    <span className={clsx(styles.hamburgerLine, styles.hamburgerLine1)} />
                    <span className={clsx(styles.hamburgerLine, styles.hamburgerLine2)} />
                    <span className={clsx(styles.hamburgerLine, styles.hamburgerLine3)} />
                </button>
            </div>
        </header>
    )
}
