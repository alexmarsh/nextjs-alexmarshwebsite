// src/components/Slider/Slider.tsx
'use client'

import { useState, useEffect, useRef, ReactNode } from 'react';
import styles from './Slider.module.scss';
import clsx from 'clsx';

interface SliderProps {
    children: ReactNode[];
    interval?: number; // autoplay interval
}

export default function Slider({ children, interval = 4000 }: SliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesContainerRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);


    const numSlides = children.length;

    // autoplay
    useEffect(() => {
        play();
        return pause;
    }, [currentSlide]);

    const play = () => {
        pause();
        timerRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % numSlides);
        }, interval);
    };

    const pause = () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };

    // update transform
    useEffect(() => {
        if (slidesContainerRef.current) {
            slidesContainerRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
            // set aria-hidden for accessibility
            Array.from(slidesContainerRef.current.children).forEach((child, idx) => {
                child.setAttribute('aria-hidden', (idx !== currentSlide).toString());
            });
        }
    }, [currentSlide]);

    return (
        <div
            className={clsx(styles.carousel)}
            onMouseOver={pause}
            onMouseOut={play}
        >
            <div className={clsx(styles.slider)} ref={slidesContainerRef}>
                {children.map((child, idx) => (
                    <div className={clsx(styles.slide)} key={idx} aria-hidden={idx !== currentSlide}>
                        {child}
                    </div>
                ))}
            </div>
            <ul className={clsx(styles.indicators)}>
                {children.map((_, idx) => (
                    <li
                        key={idx}
                        className={currentSlide === idx ? styles.active : ''}
                        onClick={() => setCurrentSlide(idx)}
                    />
                ))}
            </ul>
        </div>
    );
}
