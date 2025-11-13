// src/app/about/page.tsx

'use client'

import clsx from "clsx"
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll'
import styles from "./contact.module.scss"
import ContactForm from "@/components/forms/ContactForm/ContactForm"

export default function Contact() {
    useAnimateOnScroll()

    return (
        <main className={clsx(styles.main, "site-main")}>
            <header className={clsx(styles.pageHeader, "page-header")}>
                <div className="container">
                    <h1 className="heading animate">Contact</h1>
                </div>
            </header>
            <section className={clsx(styles.sectionForm, "section")}>
                <div className="container">
                    <p className="animate">Want to get in touch? I'd love the chance to talk with you about bringing your website visions to life and improving your online presence. Fill out the form below and I'll get back to you as soon as possible!</p>
                    <div className={clsx(styles.formContainer, "animate")}>
                        <ContactForm/>
                    </div>
                </div>
            </section>
        </main>
    )
}
