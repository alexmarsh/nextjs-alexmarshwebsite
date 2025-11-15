// src/components/Footer/index.tsx

import Link from 'next/link';
import clsx from "clsx";
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.siteFooter}>
            <div className="container">
                <div className={styles.footerColWrapper}>
                    <div className={clsx(styles.footerCol, styles.footerCol1)}>
                        <h2>
                            <span className="icon-logo" aria-hidden="true"></span>
                            Alex Marsh
                        </h2>
                    </div>
                    <div className={clsx(styles.footerCol, styles.footerCol2)}>
                        <h3>Full-stack Web Developer</h3>
                        <p>Alex Marsh is a provider of digital business solutions including websites, ecommerce, email marketing and more. Helping small businesses grow and large businesses innovate through a mix of modern technologies and a dedication to quality service.</p>
                        <p>Made with love in Buffalo, NY.  <span className={styles.emojiHeart}>♥</span></p>
                        <p><a rel="noreferrer noopener" href="https://www.linkedin.com/in/alex-marsh/" target="_blank">LinkedIn</a> / <Link href="/contact/" prefetch={false}>Contact Me</Link></p>
                    </div>
                </div>
            </div>
            <div className={styles.siteFooterLegal}>
                <div className="container">
                    <p>© {new Date().getFullYear()} Alex Marsh. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}