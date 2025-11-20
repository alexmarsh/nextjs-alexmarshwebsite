// src/app/about/page.tsx

import type { Metadata } from "next"
import PageContent from './PageContent'

export const generateMetadata = (): Metadata => ({
    title: 'About Me - Alex Marsh',
    description: "Hello, I'm Alex Marsh. I'm a full-stack web developer based in Buffalo, NY. For as long as I can remember I’ve been creating, experimenting, and looking for challenges to solve."
})

export default function About() {
    return (
        <PageContent />
    )
}
