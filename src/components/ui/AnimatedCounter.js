'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ value, suffix = '', prefix = '', duration = 1400, className = '' }) {
    const numericValue = Number(String(value).replace(/[^\d]/g, '')) || 0;
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (!numericValue || hasAnimated) {
            return;
        }

        let animationFrame = null;

        const tick = (startTime) => {
            const progress = Math.min((performance.now() - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            setCount(Math.round(numericValue * eased));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(() => tick(startTime));
            } else {
                setCount(numericValue);
                setHasAnimated(true);
            }
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated) {
                animationFrame = requestAnimationFrame(() => tick(performance.now()));
            }
        }, { threshold: 0.3 });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [duration, hasAnimated, numericValue]);

    return (
        <span ref={ref} className={className} aria-label={`${prefix}${numericValue}${suffix}`}>
            {prefix}{count}{suffix}
        </span>
    );
}
