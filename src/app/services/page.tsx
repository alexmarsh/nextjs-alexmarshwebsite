// src/app/services/page.tsx

import type { Metadata } from "next"
import PageContent from './PageContent'

export const generateMetadata = (): Metadata => ({
    title: 'Services - Alex Marsh',
    description: "The Latest in Web Solutions - Delivering engaging web products & services across all industries. If you are looking for a reliable programmer to build your websites and digital applications, look no further."
})

export default function Services() {
    return (
        <PageContent />
    )
}
