// src/app/sitemap.ts

import type { MetadataRoute } from 'next'
import { portfolio } from '@/data/portfolio' // or fetch from CMS

type ChangeFreq = 'yearly' | 'weekly' | 'monthly' | 'always' | 'hourly' | 'daily' | 'never'

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        { path: '', changeFreq: 'monthly' as ChangeFreq, priority: 1 },
        { path: '/services', changeFreq: 'monthly' as ChangeFreq, priority: 0.8 },
        { path: '/about', changeFreq: 'monthly' as ChangeFreq, priority: 0.8 },
        { path: '/contact', changeFreq: 'monthly' as ChangeFreq, priority: 0.8 },
        { path: '/portfolio', changeFreq: 'monthly' as ChangeFreq, priority: 0.8 },
    ]

    // Map dynamic portfolio routes
    const dynamicPortfolioRoutes = portfolio.map(project => ({
        url: `https://alexmarshwebsite.com/portfolio/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as ChangeFreq,
        priority: 0.5,
    }))

    const staticSitemap: MetadataRoute.Sitemap = staticRoutes.map(route => ({
        url: `https://alexmarshwebsite.com${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFreq,
        priority: route.priority,
    }))

    return [...staticSitemap, ...dynamicPortfolioRoutes]
}
