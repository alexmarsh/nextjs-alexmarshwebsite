// src/app/services/[slug]/page.tsx

import { notFound } from 'next/navigation'
import { services, Service } from '@/data/services'
import ServiceContent from './ServiceContent'

interface Props {
    params: Promise<{ slug: string }>
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service: Service | undefined = services.find(p => p.slug === slug);

    if (!service) return notFound()

    return <ServiceContent service={service} />
}
