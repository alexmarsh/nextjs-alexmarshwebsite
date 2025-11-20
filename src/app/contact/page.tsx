// src/app/contact/page.tsx

import type { Metadata } from "next"
import PageContent from './PageContent'

export const generateMetadata = (): Metadata => ({
    title: 'Contact - Alex Marsh',
    description: "Want to get in touch? I'd love the chance to talk with you about bringing your website visions to life and improving your online presence. Contact me via the form and I'll get back to you as soon as possible!"
})

export default function Contact() {
    return (
        <PageContent />
    )
}
