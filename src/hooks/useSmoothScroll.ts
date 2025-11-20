// src/hooks/useSmoothScroll.ts

'use client'

import { useEffect } from 'react'

export default function useSmoothScroll() {
    useEffect(() => {
        const anchorLinks = document.querySelectorAll('a[href*="#"]')

        const handleClick = (event: Event) => {
            const link = event.currentTarget as HTMLAnchorElement
            const hash = link.hash
            if (!hash || hash === '#') return

            event.preventDefault()

            const targetElement = document.querySelector(hash) as HTMLElement
            if (!targetElement) return

            // Accessibility focus
            targetElement.setAttribute('tabindex', '-1')
            targetElement.focus()
            targetElement.removeAttribute('tabindex')

            // Scroll offset for fixed header
            const header = document.querySelector('.site-header') // match your header class
            const headerHeight = header?.clientHeight ?? 0
            const offsetTop = targetElement.offsetTop - headerHeight

            window.scrollTo({ top: offsetTop, behavior: 'smooth' })
        }

        anchorLinks.forEach(link => link.addEventListener('click', handleClick))

        return () => {
            anchorLinks.forEach(link => link.removeEventListener('click', handleClick))
        }
    }, [])
}
