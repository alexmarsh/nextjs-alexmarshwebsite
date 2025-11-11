// src/hooks/useAnimateOnScroll.ts
'use client'

import { useEffect } from 'react'

export default function useAnimateOnScroll() {
    useEffect(() => {
        const animatedElements = document.querySelectorAll('.animate')
        if (!animatedElements.length) return

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animateVisible')
                    } else {
                        entry.target.classList.remove('animateVisible')
                    }
                })
            },
            { rootMargin: '-5% 0%' }
        )

        animatedElements.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])
}
