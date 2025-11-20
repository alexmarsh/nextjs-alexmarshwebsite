// src/app/portfolio/[slug]/page.tsx

import PageContent from './PageContent'
import { notFound } from 'next/navigation'
import { portfolio, Project } from '@/data/portfolio'

interface Props {
    params: Promise<{ slug: string }>
}

export default async function PortfolioProjectPage({ params }: Props) {
    const { slug } = await params;
    const project: Project | undefined = portfolio.find(p => p.slug === slug);

    if (!project) return notFound()

    return <PageContent project={project} />
}
