// src/app/portfolio/page.tsx

import type { Metadata } from "next"
import PageContent from './PageContent'

export const generateMetadata = (): Metadata => ({
    title: 'Portfolio - Alex Marsh',
    description: "A portfolio of select work over the years from a wide range of industries, including banking, legal, medical and more."
})

export default function Portfolio() {
    return (
        <main className="site-main">
            <PageContent />
        </main>
    )
}
